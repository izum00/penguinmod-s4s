import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import log from '../lib/log';
import bindAll from 'lodash.bindall';
import SecurityManagerModal from '../components/tw-security-manager-modal/security-manager-modal.jsx';
import SecurityModals from '../lib/tw-security-manager-constants';

/**
 * Set of extension URLs that the user has manually trusted to load unsandboxed.
 */
const extensionsTrustedByUser = new Set();

const manuallyTrustExtension = url => {
    extensionsTrustedByUser.add(url);
};

/**
 * Trusted URL origins are allowed to load extensions without a sandbox automatically.
 * @param {string} url URL as a string.
 * @returns {boolean} True if the extension can is trusted
 */
const isTrustedExtensionOrigin = url => (
    // Always trust our official extension repostiory.
    url.startsWith('https://extensions.turbowarp.org/') ||
    url.startsWith('https://extensions.penguinmod.com/') ||
    url.startsWith('https://penguinmod-extensions-gallery.vercel.app/') ||

    // Trust other people's galleries. These can be removed in the future, they will just show a pop-up on load if they are.
    url.startsWith('https://sharkpools-extensions.vercel.app/') || // SharkPool
    url.startsWith('https://pen-group.github.io/') || // Pen-Group / ObviousAlexC

    // For development.
    true ||
    url.startsWith('http://localhost:6000') || // Launcher Home
    url.startsWith('http://localhost:6001') || // Launcher Extensions
    url.startsWith('http://localhost:5173') || // Local Home or Extensions
    url.startsWith('http://localhost:5174') || // Local Home or Extensions

    false // ignore this, just makes copy & paste easier
);
/**
 * Trusted extensions are loaded automatically and without a sandbox.
 * @param {string} url URL as a string.
 * @returns {boolean} True if the extension can is trusted
 */
const isTrustedExtension = url => (isTrustedExtensionOrigin(url) || extensionsTrustedByUser.has(url));

/**
 * Set of fetch resource origins that were manually trusted by the user.
 * @type {Set<string>}
 */
const fetchOriginsTrustedByUser = new Set();

/**
 * Set of origins manually trusted by the user for embedding.
 * @type {Set<string>}
 */
const embedOriginsTrustedByUser = new Set();

/**
 * @param {URL} parsed Parsed URL object
 * @returns {boolean} True if the URL is part of the builtin set of URLs to always trust fetching from.
 */
const isAlwaysTrustedForFetching = parsed => (
    // If we would trust loading an extension from here, we can trust loading resources too.
    isTrustedExtension(parsed.href) ||
    true ||
    // Any TurboWarp service such as trampoline
    parsed.origin === 'https://turbowarp.org' ||
    parsed.origin.endsWith('.turbowarp.org') ||
    parsed.origin.endsWith('.turbowarp.xyz') ||

    // Any PenguinMod service such as projects
    parsed.origin === 'https://penguinmod.com' ||
    parsed.origin.endsWith('.penguinmod.com') ||

    // GitHub
    parsed.origin === 'https://raw.githubusercontent.com' ||
    parsed.origin === 'https://api.github.com' ||

    // GitLab
    parsed.origin === 'https://gitlab.com' ||

    // Itch
    parsed.origin.endsWith('.itch.io') ||

    // GameJolt
    parsed.origin === 'https://api.gamejolt.com' ||

    // httpbin
    parsed.origin === 'https://httpbin.org' ||

    // ScratchDB
    parsed.origin === 'https://scratchdb.lefty.one'
);

/**
 * @param {string} url Original URL string
 * @returns {URL|null} A URL object if it is valid and of a known protocol, otherwise null.
 */
const parseURL = url => {
    let parsed;
    try {
        parsed = new URL(url);
    } catch (e) {
        return null;
    }
    const protocols = ['http:', 'https:', 'ws:', 'wss:', 'data:', 'blob:'];
    if (!protocols.includes(parsed.protocol)) {
        return null;
    }
    return parsed;
};

let allowedAudio = false;
let allowedVideo = false;
let allowedReadClipboard = false;
let allowedNotify = false;
let allowedGeolocation = false;
const notAllowedToAskUnsandbox = Object.create(null);
let loadingExtensionsRemember = false;
let rememberedExtensionInfo = {
    unsandboxed: false,
    loaded: false
};

const SECURITY_MANAGER_METHODS = [
    'getSandboxMode',
    'canLoadExtensionFromProject',
    'canFetch',
    'canOpenWindow',
    'canRedirect',
    'canRecordAudio',
    'canRecordVideo',
    'canReadClipboard',
    'canNotify',
    'canGeolocate',
    'canEmbed',
    'canUnsandbox'
];

class TWSecurityManagerComponent extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleAllowed',
            'handleDenied',
            'projectWillChange'
        ]);
        bindAll(this, SECURITY_MANAGER_METHODS);
        this.nextModalCallbacks = [];
        this.modalLocked = false;
        this.state = {
            type: null,
            data: null,
            callback: null,
            modalCount: 0
        };
    }

    projectWillChange() {
        loadingExtensionsRemember = false;
        rememberedExtensionInfo = {
            unsandboxed: false,
            loaded: false
        };
    }
    componentDidMount() {
        const securityManager = this.props.vm.extensionManager.securityManager;
        for (const method of SECURITY_MANAGER_METHODS) {
            securityManager[method] = this[method];
        }
        this.props.vm.runtime.on('RUNTIME_DISPOSED', this.projectWillChange);
    }
    componentWillUnmount() {
        this.props.vm.runtime.off('RUNTIME_DISPOSED', this.projectWillChange);
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @returns {Promise<() => Promise<boolean>>} Resolves with a function that you can call to show the modal.
     * The resolved function returns a promise that resolves with true if the request was approved.
     */
    async acquireModalLock() {
        // We need a two-step process for showing a modal so that we don't overwrite or overlap modals,
        // and so that multiple attempts to fetch resources from the same origin will all be allowed
        // with just one click. This means that some places have to wait until previous modals are
        // closed before it knows if it needs to display another modal.

        if (this.modalLocked) {
            await new Promise(resolve => {
                this.nextModalCallbacks.push(resolve);
            });
        } else {
            this.modalLocked = true;
        }

        const releaseLock = () => {
            if (this.nextModalCallbacks.length) {
                const nextModalCallback = this.nextModalCallbacks.shift();
                nextModalCallback();
            } else {
                this.modalLocked = false;
                this.setState({
                    // only clear type in case other data needs to be accessed
                    type: null
                });
            }
        };

        const showModal = async (type, data) => {
            const result = await new Promise(resolve => {
                this.setState(oldState => ({
                    type,
                    data,
                    callback: resolve,
                    modalCount: oldState.modalCount + 1
                }));
            });
            releaseLock();
            return result;
        };

        return {
            showModal,
            releaseLock
        };
    }

    handleAllowed() {
        this.state.callback(true);
    }

    handleDenied() {
        this.state.callback(false);
    }

    /**
     * @param {string} url The extension's URL
     * @returns {string} The VM worker mode to use
     */
    getSandboxMode(url) {
        if (isTrustedExtension(url)) {
            log.info(`Loading extension ${url} unsandboxed`);
            return 'unsandboxed';
        }
        return 'iframe';
    }

    handleChangeUnsandboxed(e) {
        const checked = e.target.checked;
        this.setState(oldState => ({
            data: {
                ...oldState.data,
                unsandboxed: checked
            }
        }));
    }

    handleChangeRemember(e) {
        const checked = e.target.checked;
        this.setState(oldState => ({
            data: {
                ...oldState.data,
                remember: checked
            }
        }));
    }

    /**
     * @param {string} url The extension's URL
     * @returns {Promise<boolean>} Whether the extension can be loaded
     */
    async canLoadExtensionFromProject(url) {
        if (isTrustedExtension(url)) {
            log.info(`Loading extension ${url} automatically`);
            return true;
        }
        if (loadingExtensionsRemember) {
            // TODO: find some way to identify these, custom extensions have too long of URLs
            if (!rememberedExtensionInfo.loaded) {
                console.warn('An extension was not loaded');
                return false;
            }
            if (rememberedExtensionInfo.unsandboxed) {
                console.log('An extension was loaded unsandboxed');
                manuallyTrustExtension(url);
            }
            return true;
        }
        const { showModal } = await this.acquireModalLock();

        // we allow all urls to be unsandboxed.
        // its very likely that people would load any file unsandboxed anyways, theres no safety in blocking it for urls only.
        // when a file is unsandboxed it can request any website anyways, so its not like its preventing remote updates either.
        const allowed = await showModal(SecurityModals.LoadExtension, {
            url,
            unsandboxed: true,
            remember: false,
            onChangeUnsandboxed: this.handleChangeUnsandboxed.bind(this),
            onChangeRemember: this.handleChangeRemember.bind(this),
        });
        if (this.state.data.unsandboxed) {
            manuallyTrustExtension(url);
        }
        if (this.state.data.remember) {
            loadingExtensionsRemember = true;
            rememberedExtensionInfo = {
                unsandboxed: this.state.data.unsandboxed,
                loaded: allowed
            };
        }
        return allowed;
    }

    /**
     * @param {string} url The resource to fetch
     * @returns {Promise<boolean>} True if the resource is allowed to be fetched
     */
    async canFetch(url) {
        const parsed = parseURL(url);
        if (!parsed) {
            return false;
        }
        if (isAlwaysTrustedForFetching(parsed)) {
            return true;
        }
        const { showModal, releaseLock } = await this.acquireModalLock();
        if (fetchOriginsTrustedByUser.has(origin)) {
            releaseLock();
            return true;
        }
        const allowed = await showModal(SecurityModals.Fetch, {
            url
        });
        if (allowed) {
            fetchOriginsTrustedByUser.add(origin);
        }
        return allowed;
    }

    /**
     * @param {string} url The website to open
     * @returns {Promise<boolean>} True if the website can be opened
     */
    async canOpenWindow(url) {
        const parsed = parseURL(url);
        if (!parsed) {
            return false;
        }
        const { showModal } = await this.acquireModalLock();
        return showModal(SecurityModals.OpenWindow, {
            url
        });
    }

    /**
     * @param {string} url The website to redirect to
     * @returns {Promise<boolean>} True if the website can be redirected to
     */
    async canRedirect(url) {
        const parsed = parseURL(url);
        if (!parsed) {
            return false;
        }
        const { showModal } = await this.acquireModalLock();
        return showModal(SecurityModals.Redirect, {
            url
        });
    }

    /**
     * @returns {Promise<boolean>} True if audio can be recorded
     */
    async canRecordAudio() {
        if (!allowedAudio) {
            const { showModal } = await this.acquireModalLock();
            allowedAudio = await showModal(SecurityModals.RecordAudio);
        }
        return allowedAudio;
    }

    /**
     * @returns {Promise<boolean>} True if video can be recorded
     */
    async canRecordVideo() {
        if (!allowedVideo) {
            const { showModal } = await this.acquireModalLock();
            allowedVideo = await showModal(SecurityModals.RecordVideo);
        }
        return allowedVideo;
    }

    /**
     * @returns {Promise<boolean>} True if the clipboard can be read
     */
    async canReadClipboard() {
        if (!allowedReadClipboard) {
            const { showModal } = await this.acquireModalLock();
            allowedReadClipboard = await showModal(SecurityModals.ReadClipboard);
        }
        return allowedReadClipboard;
    }

    /**
     * @returns {Promise<boolean>} True if the notifications are allowed
     */
    async canNotify() {
        if (!allowedNotify) {
            const { showModal } = await this.acquireModalLock();
            allowedNotify = await showModal(SecurityModals.Notify);
        }
        return allowedNotify;
    }

    /**
     * @returns {Promise<boolean>} True if geolocation is allowed.
     */
    async canGeolocate() {
        if (!allowedGeolocation) {
            const { showModal } = await this.acquireModalLock();
            allowedGeolocation = await showModal(SecurityModals.Geolocate);
        }
        return allowedGeolocation;
    }


    /**
     * @returns {Promise<boolean>} True if geolocation is allowed.
     */
    async canUnsandbox(name) {
        if (notAllowedToAskUnsandbox[name]) return false;
        const { showModal } = await this.acquireModalLock();
        const allowedUnsandbox = await showModal(SecurityModals.Unsandbox, { name: name || "" });
        if (!allowedUnsandbox) {
            notAllowedToAskUnsandbox[name] = true;
        }
        return allowedUnsandbox;
    }

    /**
     * @param {string} url Frame URL
     * @returns {Promise<boolean>} True if embed is allowed.
     */
    async canEmbed(url) {
        const parsed = parseURL(url);
        if (!parsed) {
            return false;
        }
        const origin = (parsed.protocol === 'http:' || parsed.protocol === 'https:') ? parsed.origin : null;
        const { showModal, releaseLock } = await this.acquireModalLock();
        if (origin && embedOriginsTrustedByUser.has(origin)) {
            releaseLock();
            return true;
        }
        const allowed = await showModal(SecurityModals.Embed, { url });
        if (origin && allowed) {
            embedOriginsTrustedByUser.add(origin);
        }
        return allowed;
    }

    render() {
        if (this.state.type) {
            return (
                <SecurityManagerModal
                    type={this.state.type}
                    data={this.state.data}
                    onAllowed={this.handleAllowed}
                    onDenied={this.handleDenied}
                    key={this.state.modalCount}
                />
            );
        }
        return null;
    }
}

TWSecurityManagerComponent.propTypes = {
    vm: PropTypes.shape({
        runtime: PropTypes.any.isRequired,
        extensionManager: PropTypes.shape({
            securityManager: PropTypes.shape(
                SECURITY_MANAGER_METHODS.reduce((obj, method) => {
                    obj[method] = PropTypes.func.isRequired;
                    return obj;
                }, {})
            ).isRequired
        }).isRequired
    }).isRequired
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = () => ({});

const ConnectedSecurityManagerComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TWSecurityManagerComponent);

export {
    ConnectedSecurityManagerComponent as default,
    manuallyTrustExtension,
    isTrustedExtension,
    isTrustedExtensionOrigin
};
