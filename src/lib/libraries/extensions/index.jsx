/* eslint-disable max-len */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import posenet4scratchIcon from './izum00/posenet4scratch/icon.png';
import posenet4scratchThumb from './izum00/posenet4scratch/thumb.png';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

// turbowarp & gallery icons
import twIcon from './tw/tw.svg';
import galleryIcon from './gallery/gallery.svg';
import customExtensionIcon from './custom/custom.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';
import sharkpoolGalleryIcon from './penguinmod/sharkpool-library.svg';

import ExtForgeIcon from './penguinmod/extforge.svg';
import turboBuilderIcon from './penguinmod/turbobuilder.png';
import turboBuilderDevIcon from './penguinmod/turbobuilder-dev.png';

import filesExtensionIcon from './penguinmod/extensions/files.svg';
import jgJSONExtensionIcon from './penguinmod/extensions/json.png';
import jgTailgatingExtensionIcon from './penguinmod/extensions/tailgating.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.svg';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.svg';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';
import jwXmlExtensionIcon from './penguinmod/extensions/xml.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import jwArrayExtensionThumb from './penguinmod/extensions/jwArray.svg';
import jwTargetsExtensionThumb from './penguinmod/extensions/jwTargets.svg';
import jwNumExtensionThumb from './penguinmod/extensions/jwNum.svg';
import jwColorExtensionThumb from './penguinmod/extensions/jwColor.svg';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.png';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 🙏
// import lmsMcUtilsIcon from './penguinmod/extensions/mcutils.png';
import lilyTempVariablesExtensionIcon from './penguinmod/orgtw/TempVariables2.svg';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.svg';
import gsaColorUtilExtensionIcon from './penguinmod/extensions/colorutil.png';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';
import spJSONExtensionIcon from './penguinmod/extensions/sp_json.svg';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.svg';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// sharkpool
import sharkpoolPrintingIcon from './penguinmod/extensions/printing.svg';
import sharkpoolTuneIcon from './penguinmod/extensions/tuneShark.svg';
import sharkpoolMBPIcon from './penguinmod/extensions/myBlocksPlus.svg';
import sharkpoolBCIcon from './penguinmod/extensions/BetterComments.svg';
import sharkpoolPEIcon from './penguinmod/extensions/particleEngine.svg';
import jgScriptsExtensionIcon from './penguinmod/extensions/scripts.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// jg: default icon if you are too lazy to make one and you want me to make one instead lololololololol
// gsa: ololololololo
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';

const urlParams = new URLSearchParams(location.search);

const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');

const menuItems = [
    {
        name: 'ImageClassifier2Scratch',
        extensionId: 'ic2scratch',
        collaborator: 'champierre',
        iconURL: 'https://github.com/champierre/ic2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch.png',
        insetIconURL: 'https://github.com/champierre/ic2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch-small.png',
        description: (
            <FormattedMessage
                defaultMessage='カメラ画像に写っているものを認識します。結果は英語で返されます。'
                description='Image Classifier Blocks.'
                id='gui.extension.ic2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'BlockAI',
        extensionId: 'https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/raw/main/block-ai.js',
        collaborator: 'TheShovel',
        iconURL: 'https://extensions.penguinmod.com/images/TheShovel/thumbnail-blockAI.png',
        insetIconURL: 'https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/resolve/main/BlockAI-ICON.png?download=true',
        description: 'geminiでコーディングのサポートをします。実験的で、間違った情報などを返す場合があります。',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
    },
{
    name: 'NewHandpose2Scratch',
    extensionId: 'newhandpose2scratch',
    collaborator: 'champierre',
    iconURL: 'https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png',
    insetIconURL: 'https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png',
    description: (
        <FormattedMessage
            defaultMessage='新しい手の形を認識する拡張機能です。かなり高速で、奥行き(z座標)は検出できません。'
            description='HandPose2Scratch Blocks.'
            id='gui.extension.newhandpose2scratchblocks.description'
        />
    ),
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    bluetoothRequired: false,
    helpLink: 'https://champierre.github.io/handpose2scratch/'
},
{
    name: 'Handpose2Scratch',
    extensionId: 'handpose2scratch',
    collaborator: 'champierre',
    iconURL: 'https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png',
    insetIconURL: 'https://github.com/champierre/handpose2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png',
    description: (
        <FormattedMessage
            defaultMessage='これは古い手のポーズトラッキングで、少し処理が遅いです。奥行き(z座標)も取得できます。'
            description='HandPose2Scratch Blocks.'
            id='gui.extension.handpose2scratchblocks.description'
        />
    ),
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    bluetoothRequired: false,
    helpLink: 'https://champierre.github.io/handpose2scratch/'
},
    {
        name: 'TM2Scratch',
        extensionId: 'tm2scratch',
        collaborator: 'Tsukurusha, YengawaLab and Google',
        iconURL: 'https://github.com/champierre/tm2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tm2scratch/tm2scratch.png',
        insetIconURL: 'https://github.com/champierre/tm2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/tm2scratch/tm2scratch-small.png',
        description: (
            <FormattedMessage
                defaultMessage='画像や音声を学習させよう。'
                description='画像や音声を学習させよう。'
                id='gui.extension.tm2scratchblocks.description'
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        translationMap: {
            'ja': {
                'gui.extension.tm2scratchblocks.description': '画像や音声を学習させよう。'
            },
            'ja-Hira': {
                'gui.extension.tm2scratchblocks.description': 'がぞうやおんせいをがくしゅうさせよう。'
            },
            'en': {
                'gui.extension.tm2scratchblocks.description': 'Recognize your own images and sounds.'
            },
            'zh-cn': {
                'gui.extension.tm2scratchblocks.description': 'Recognize your own images and sounds.'
            },
            'ko': {
                'gui.extension.tm2scratchblocks.description': '나의 이미지와 소리를 인식해볼까요'
            },
            'zh-tw': {
                'gui.extension.tm2scratchblocks.description': 'Recognize your own images and sounds.'
            }
        }
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
        extensionURL: 'ml2scratch',
        collaborator: 'champierre',
        iconURL: 'https://github.com/champierre/ml2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ml2scratch/ml2scratch.png',
        insetIconURL: 'https://github.com/champierre/ml2scratch/raw/refs/heads/master/scratch-gui/src/lib/libraries/extensions/ml2scratch/ml2scratch-small.png',
        description: (
            <FormattedMessage
                defaultMessage="プロジェクト内でカメラやステージの画像を学習・認識できます。"
                description="Description for ML2Scratch Blocks."
                id="gui.extension.ml2scratch.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        helpLink: 'https://github.com/champierre/ml2scratch/'
    },
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: 'https://www.adacraft.org/studio/static/assets/cc4d68fe9d6a77c7f35f9d5461b60967.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/posenet2scratch/master/scratch-gui/src/lib/libraries/extensions/posenet2scratch/posenet2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods', 'ai'],
        description: '特別なデバイスを使わずに、通常のWebカメラで人間のポーズを迅速かつ正確に検出します',
        featured: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: 'https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods', 'ai'],
        description: 'プロジェクトでフェイストラッキングを活用しましょう!',
        featured: true
    },
    {
        name: 'Handpose2scratch',
        extensionId: 'handpose2scratch',
        iconURL: 'https://raw.githubusercontent.com/champierre/handpose2scratch/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/handpose2scratch/master/scratch-gui/src/lib/libraries/extensions/handpose2scratch/handpose2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods'],
        description: '手の細かい部位の座標を取得・トラッキングできます。',
        featured: true
    },
    {
        name: 'p5js',
        extensionId: 'https://huggingface.co/datasets/soiz1/my-scratch-ai-extensions/raw/main/p5js.js',
        iconURL: 'https://www.adacraft.org/studio/static/assets/48d03d1d2794e30b221465fc07da79f7.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/ae362c23f226c3c27c295174205442fb.svg',
        collaborator: 'adacraft',
        internetConnectionRequired: true,
        tags: [],
        description: 'Some blocks that use the p5.js library.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        customInsetColor: '#CF63CF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ['scratch', 'graphics'],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        iconURL: animatedTextIconURL,
        insetIconURL: animatedTextInsetIconURL,
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: '文字に命を吹き込みます。元々、Scratch公式が開発中のものでした。',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        customInsetColor: '#74BDDC',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        credits: 'Google TTS',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: '#9966FF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="テキストを多くの言語に翻訳します。"
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="何でもキーに変えられます。"
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'Stage Camera',
        extensionId: 'pmCamera',
        iconURL: pmCameraExtensionIcon,
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                defaultMessage="ステージ上のどこにでもカメラを移動したり、拡大率を設定したりできます。"
                description="The description for the PenguinMod Camera extension."
                id="pm.extension.camera.description"
            />
        ),
        credits: 'Inspired by⠀⠀⠀⠀⠀⠀ DT-is-not-available',
        featured: true
    },
    {
        name: 'Files',
        extensionId: 'twFiles',
        twDeveloper: 'GarboMuffin',
        iconURL: filesExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp', 'datamgmt'],
        description: 'ファイルの読み取りと作成のためのブロック。',
        featured: true
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp', 'datamgmt'],
        description: '.sb3、s4s.txtファイルを含むzip形式のファイルを作成および編集します。',
        twDeveloper: 'CST1229',
        featured: true
    },
    {
        name: 'Pen+',
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/PenPlus.js',
        tags: ['categoryexpansion', 'graphics'],
        iconURL: 'https://extensions.penguinmod.com/images/ObviousAlexC/PenPlus.svg',
        description: 'Scratchのデフォルトのペン拡張機能を拡張します。テクスチャや色合いを使用して三角形を描いたり、画像を描画してピクセルを編集したりするためのブロックを追加します。',
        featured: true,
        extDeveloper: 'pinksheep2917'
    },
    {
        name: 'Sound Systems',
        extensionId: 'jgExtendedAudio',
        iconURL: jgExtendedAudioExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion', 'noisemaker'],
        description: 'より集中的なオーディオ作業のためのオーディオ グループ化システム。',
        featured: true
    },
    {
        name: 'Tune Shark V3',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark-V3.js',
        iconURL: sharkpoolTuneIcon,
        tags: ['penguinmod', 'categoryexpansion', 'noisemaker'],
        description: '複雑なサウンドコントロール、複数のオーディオ効果などを備えた高度なオーディオ エンジン。',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Sound Waves',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Sound-Waves.js',
        iconURL: 'https://extensions.penguinmod.com/images/SharkPool/Sound-Waves.svg',
        tags: ['penguinmod', 'noisemaker'],
        description: '音を作ろう！',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Motion Expansion',
        extensionId: 'pmMotionExpansion',
        iconURL: pmMotionExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: '移動や衝突のための小さなモーション ブロックが増えました。',
        featured: true,
        credits: 'Some blocks from NexusKitten'
    },
    {
        name: 'Events Expansion',
        extensionId: 'pmEventsExpansion',
        iconURL: pmEventsExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: '情報の送受信、特定のスプライトの通知、または物事が起こるタイミングをより適切に制御するためのイベントが増えます。',
        featured: true,
        credits: 'Some blocks from LilyMakesThings'
    },
    {
        name: 'Controls Expansion',
        extensionId: 'pmControlsExpansion',
        iconURL: pmControlsExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'アニメーション、複雑なシステム、またはよりクリーンな 1 回限りの使用ブロック用のコントロール ブロックが増えました。',
        featured: true,
        credits: '"new thread" by CubesterYT, CST1229, SharkPool'
    },
    {
        name: 'Sensing Expansion',
        extensionId: 'pmSensingExpansion',
        iconURL: pmSensingExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: "特定のユースケースやユーザーのデバイスとの対話のための、より多くのセンシング ブロック。",
        credits: 'Some blocks from SharkPool-SP',
        featured: true
    },
    {
        name: 'Operators Expansion',
        extensionId: 'pmOperatorsExpansion',
        iconURL: pmOperatorsExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'NAND、NOR、文字コードから文字への変換、複数行のテキストを行ごとに読み取るなどの演算子。',
        featured: true
    },
    {
        name: 'My Blocks+',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
        iconURL: sharkpoolMBPIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'カスタム入力、色などを使用して、プライベートまたはグローバルのカスタム ブロックを作成します。',
        extDeveloper: 'SharkPool, CST1229, 0znzw',
        featured: true
    },
    {
        name: 'Better Comments',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
        iconURL: sharkpoolBCIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'カスタマイズとマークダウンのサポートにより、コメントの見た目を良くします。',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'JSON',
        extensionId: 'jgJSON',
        iconURL: jgJSONExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'JSON オブジェクトと配列を処理するためのブロック。',
        featured: true
    },
    {
        name: 'Swift JSON',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/JSON-Array.js',
        iconURL: spJSONExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        extDeveloper: 'SharkPool',
        description: '潜在的に危険ですが、JSONオブジェクトと配列の処理を高速化する拡張機能です。プロジェクトでJSONを頻繁に使用する場合に推奨されます。',
        featured: true
    },
    {
        name: 'Particle Engine',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Particle-Engine.js',
        iconURL: sharkpoolPEIcon,
        tags: ['penguinmod', 'graphics'],
        description: 'クローンなしで強力なパーティクルエンジンを作成する',
        extDeveloper: 'SharkPool',
        featured: true
    },
    {
        name: 'Custom Styles',
        extensionId: 'shovelcss',
        iconURL: theshovelCustomStylesIcon,
        tags: ['penguinmod', 'graphics'],
        description: 'プロジェクト内の変数モニターとプロンプトの外観をカスタマイズします。',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: 'Griffpatch によって作成された物理処理をとても簡単にするBox2D拡張機能。',
        customInsetColor: '#D9F0FF',
        featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net, Arrow & GarboMuffin',
        description: 'さまざまなイージング関数と方向を使用して値をスムーズにアニメーション化します。',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Tailgating',
        extensionId: 'jgTailgating',
        description: 'RPG のパーティ メンバーのように、スプライトとクローンを他のスプライトとクローンの後ろをオフセットで追従させます。',
        iconURL: jgTailgatingExtensionIcon,
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Tile Grids',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Tile-Grids.js',
        iconURL: 'https://extensions.penguinmod.com/images/SharkPool/Tile-Grids.svg',
        tags: ['penguinmod'],
        description: 'スプライトをグリッド上に配置します。',
        extDeveloper: 'SharkPool-SP',
        featured: true
    },
    {
        name: 'Canvas Effects',
        extensionId: 'theshovelcanvaseffects',
        iconURL: theshovelCanvasEffectsIcon,
        tags: ['penguinmod', 'graphics'],
        description: 'ステージ全体に視覚効果を適用します。',
        extDeveloper: 'TheShovel',
        credits: 'SharkPool',
        featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        insetIconURL: turbowarpIcon,
        description: "Scratchのクローン機能を拡張します。",
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Skins',
        extensionId: 'https://extensions.turbowarp.org/Lily/Skins.js',
        tags: ['turbowarp', 'graphics'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Skins.svg',
        insetIconURL: turbowarpIcon,
        description: 'スプライトを他の画像や衣装として表示します。',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Multiple Timers',
        extensionId: 'jgTimers',
        iconURL: jgTimersExtensionIcon,
        tags: ['penguinmod'],
        description: '個別に制御できるタイマーを作成します。',
        eventSubmittor: 'Arrow',
        featured: true
    },
    {
        name: 'Temporary Variables',
        extensionId: 'tempVars',
        iconURL: gsaTempVariablesExtensionIcon,
        tags: ['penguinmod'],
        description: '1つのブロックスタック内でのみ使用する変数を作成します。一度しか使用しない変数で変数リストが乱雑になるのを防ぐのに役立ちます。',
        credits: 'LilyMakesThings',
        featured: true
    },
    {
        name: 'TurboWarp Temporary Variables',
        extensionId: 'lmsTempVars2',
        iconURL: lilyTempVariablesExtensionIcon,
        tags: ['turbowarp'],
        description: '使い捨てのランタイム変数またはスレッド変数を作成します。',
        insetIconURL: turbowarpIcon,
        credits: 'LilyMakesThings',
        featured: true
    },
    {
        name: 'Runtime Modifications',
        extensionId: 'jgRuntime',
        tags: ['penguinmod'],
        iconURL: jgRuntimeExtensionIcon,
        description: 'ステージやスプライトなどの Scratch オブジェクトを更新するためのブロック。',
        credits: 'TheShovel, showierdata9978, SharkPool',
        featured: true
    },
    {
        name: 'Font Manager',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/Font-Manager.js',
        iconURL: 'https://extensions.penguinmod.com/images/SharkPool/Font-Manager.svg',
        tags: ['penguinmod', 'graphics'],
        description: 'フォントを管理、作成、削除します。',
        credits: 'SharkPool, Ashimee',
        featured: true
    },
    {
        name: 'Storage',
        extensionId: 'jgStorage',
        iconURL: jgStorageExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'プロジェクトが閉じられた後でもデータを保存します。基本サーバーストレージも含まれます。',
        eventSubmittor: 'Fir & silvxrcat',
        featured: true
    },
    {
        name: 'HTTP',
        extensionId: 'https://extensions.turbowarp.org/godslayerakp/http.js',
        iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/http.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: '外部 Web サイトとやりとりするための包括的な拡張機能。',
        featured: true,
        internetConnectionRequired: true,
        customInsetColor: '#ff4d4d'
    },
    {
        name: 'CloudLink',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js',
        tags: ['turbowarp', 'penguinmod'],
        insetIconURL: cloudlinkIcon,
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg',
        description: '強力なWebSocket拡張機能。',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: true
    },
    {
        name: 'Scripts',
        extensionId: 'jgScripts',
        iconURL: jgScriptsExtensionIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'プロジェクトの実行中にブロックを使用してコンパイルされたスクリプトを作成します。',
        featured: true
    },
    {
        name: 'Pang API',
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: 'https://extensions.penguinmod.com/images/SammerLOL/pangapi.png',
        tags: ['penguinmod'],
        description: 'PenguinMod APIから情報を取得します。',
        extDeveloper: 'oc9x97, Ianyourgod',
        featured: true
    },
    {
        name: '3D Math',
        extensionId: 'https://extensions.penguinmod.com/extensions/ObviousAlexC/3DMath.js',
        iconURL: 'https://extensions.penguinmod.com/images/ObviousAlexC/3DMath.svg',
        tags: ['penguinmod', '3d', 'graphics', 'math'],
        description: '独自のスプライトベースの 3D エンジンを作成するためのユーティリティ。',
        extDeveloper: 'pinksheep2917',
        featured: true
    },
    /*{                                   i dont like this extension anymore it kinda sucks
        name: 'Extra Mathematics',
        extensionId: 'https://extensions.penguinmod.com/extensions/jwklong/mathematics.js',
        iconURL: 'https://extensions.penguinmod.com/images/jwklong/mathematics.png',
        tags: ['penguinmod', 'categoryexpansion', 'math'],
        description: 'とても複雑な数学拡張機能。',
        extDeveloper: 'jwklong',
        featured: false
    },*/
    {
        name: 'Random Utilities',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/random_utils.js',
        iconURL: 'https://extensions.penguinmod.com/images/Gen1x/randomutils.png',
        tags: ['penguinmod'],
        description: 'シードベースの数値生成、真の数値生成、UUID、ランダム文字列など、ランダム値の生成に関連する多くのブロック。',
        extDeveloper: 'G1nX',
        featured: true
    },
    {
        name: 'LZ Compress',
        extensionId: 'shovellzcompresss',
        iconURL: theshovelLzCompressIcon,
        tags: ['penguinmod', 'datamgmt'],
        description: 'lz-stringを使用してテキストを圧縮および解凍します。',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['penguinmod', 'datamgmt'],
        iconURL: jgPrismExtensionIcon,
        description: '特定のユースケースまたは主要な利便性のためのブロック。',
        featured: true
    },
    {
        name: 'Odd Messages',
        extensionId: 'oddMessage',
        tags: ['penguinmod'],
        iconURL: silvxrcatOddMessagesExtensionIcon,
        description: 'ログ記録と変数の利用。',
        featured: true,
        extDeveloper: 'silvxrcat'
    },
    {
        name: 'HTML iframe Elements',
        extensionId: 'jgIframe',
        iconURL: jgIframeExtensionIcon,
        tags: ['penguinmod'],
        description: 'HTML コンテンツまたは Web サイトを含むフレームを配置および移動するためのブロック。',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Color Picker',
        extensionId: 'shovelColorPicker',
        iconURL: theshovelColorPickerIcon,
        tags: ['penguinmod'],
        description: 'ユーザーが組み込みのカラーピッカーを使用して色を選択できるようにすることで、独自にカラーピッカーを作成する必要はありません。',
        extDeveloper: 'TheShovel',
        featured: true
    },
    {
        name: 'Color Utility Blocks',
        extensionId: 'colors',
        iconURL: gsaColorUtilExtensionIcon,
        tags: ['penguinmod'],
        description: '16 進数、RGB、HSV、10 進数の色やその他の色関連のコンバーター。',
        featured: true
    },
    {
        name: 'All Menus',
        extensionId: 'https://extensions.penguinmod.com/extensions/Lily/AllMenus.js',
        iconURL: 'https://extensions.penguinmod.com/images/Lily/AllMenus.svg',
        tags: ['penguinmod'],
        description: '各ブロックのすべてのドロップダウンメニューを抽出します。',
        extDeveloper: 'LilyMakesThings',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Labels"
                description="Name of Proto extension"
                id="jwProto.jwProtoExtension.name"
            />
        ),
        extensionId: 'jwProto',
        iconURL: jwProtoExtensionIcon,
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                // change this back if you update the extension to have more things
                defaultMessage="Labelling and Placeholders."
                description="Description of Proto extension"
                id="jwProto.jwProtoExtension.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Perlin Noise"
                description="Name of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.name"
            />
        ),
        extensionId: 'iygPerlin',
        tags: ['penguinmod'],
        iconURL: iygPerlinNoiseExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Perlinノイズを生成・使用するためのブロック。地形や雲などの生成に適しています。"
                description="Description of perlin noise extension"
                id="iygPerlin.iygPerlinExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'GamePad',
        extensionId: 'Gamepad',
        tags: ['turbowarp', 'hardware'],
        insetIconURL: turbowarpIcon,
        twDeveloper: 'GarboMuffin',
        iconURL: gp,
        description: (
            <FormattedMessage
                defaultMessage="ボタンをキーにマッピングするのではなく、ゲームパッドに直接アクセスします。"
                description="Description for the 'GamePad' extension"
                id="GamepadExtension.GamepadExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'Printing',
        tags: ['penguinmod', 'hardware'],
        extensionId: 'sharkpoolPrinting',
        iconURL: sharkpoolPrintingIcon,
        description: 'テキスト、画像、カスタム HTML をプリンターに印刷するためのダイアログを表示できます。',
        featured: true
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'xeltallivclipblend',
        iconURL: clippingblending,
        tags: ['turbowarp', 'graphics'],
        insetIconURL: turbowarpIcon,
        description: '指定された長方形領域の外側をクリッピングし、加法的なカラーブレンドを行います。',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage="マウスカーソルをステージ上に固定する拡張機能。"
                description="Scratch utilities"
                id="gui.extension.pointerlock.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        iconURL: 'https://extensions.turbowarp.org/images/cursor.png',
        description: (
            <FormattedMessage
                defaultMessage="ステージ上でのマウス カーソルの外観を変更する拡張機能。"
                description="Scratch utilities"
                id="gui.extension.MouseCursor.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: jgScratchAuthExtensionIcon,
        tags: ['penguinmod'],
        description: "Scratch 認証と対話して、プレーヤーが実際の Scratch ユーザーであることを証明します。",
        featured: true
    },
    {
        name: 'JavaScript',
        extensionId: 'jgJavascript',
        iconURL: jgJavascriptExtensionIcon,
        tags: ['penguinmod', 'programminglanguage'],
        description: 'JavaScript で記述された独自のカスタム コードを実行しましょう。',
        featured: true
    },
    {
        name: 'Arrays',
        extensionId: 'jwArray',
        iconURL: jwArrayExtensionThumb,
        tags: ['penguinmod', 'datamgmt'],
        description: '多目的配列にデータを効率的に保存します。',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Targets',
        extensionId: 'jwTargets',
        iconURL: jwTargetsExtensionThumb,
        tags: ['penguinmod'],
        description: 'スプライトとそのクローンへの直接アクセス。',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'Infinity',
        extensionId: 'jwNum',
        iconURL: jwNumExtensionThumb,
        tags: ['penguinmod', 'math'],
        description: '非常に大きな数値を扱える高度な数値タイプです。',
        extDeveloper: 'jwklong',
        credits: 'Naruyoko for ExpantaNum.js',
        featured: true
    },
    {
        name: 'Color',
        extensionId: 'jwColor',
        iconURL: jwColorExtensionThumb,
        tags: ['penguinmod', 'graphics'],
        description: '色に関わるあらゆるもののためのユーティリティ。',
        extDeveloper: 'jwklong',
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: '#FFBF00',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="ロボット作品に命を吹き込みます。"
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: '#FFAB19',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="モーターとセンサーを使って組み立てます。"
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="押す、引く、動く、回転するといった動作を感知します。"
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PenguinMod Extra Extensions"
                description="Name of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.name"
            />
        ),
        href: 'https://extensions.penguinmod.com/',
        extensionId: 'special_penguinmodExtensionLibrary',
        iconURL: penguinmodLibraryExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Penguinmodユーザーが投稿した拡張機能をいくつかご覧ください。新しいタブで開きます。"
                description="Description of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.description"
            />
        ),
        tags: ['penguinmod', 'library'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
                values={{
                    APP_NAME: "TurboWarp"
                }}
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: galleryIcon,
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="ここでは多くの TurboWarp 拡張機能をリストしていますが、extensions.turbowarp.org でさらに多くの拡張機能を見つけることができます。"
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['tw', 'turbowarp', 'library'],
        featured: true
    },
    {
        name: 'SharkPool\'s Extension Collection',
        href: 'https://soiz1-sharkpool-extension.hf.space?originPM=true',
        extensionId: 'special_sharkpoolExtensionLibrary',
        iconURL: sharkpoolGalleryIcon,
        description: 'SharkPool によって作成された多数の拡張機能。\nこのメニューが開いているときに拡張機能をクリックすると、プロジェクトに追加されます。CORS制限のため、別のホストですが機能は同じで自動更新されます。',
        credits: 'Listed in the site',
        tags: ['library'],
        featured: true
    },{
        // not really an extension, but it's easiest to present it as one
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'special_extforge',
        iconURL: ExtForgeIcon,
        description: 'ブロックベースの UI を使用して拡張機能を作成します。',
        extDeveloper: 'jwklong',
        isNew: true,
        tags: ['extcreate'],
        featured: true
    },
    /*{
        // not really an extension, but it's easiest to present it as one
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'special_turboBuilder',
        iconURL: turboBuilderIcon,
        description: 'スクラッチベースの UI を使用して独自の素晴らしい拡張機能を作成しましょう。',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['extcreate'],
        featured: true,
        disabled: !(IsLocal || IsLiveTests)
    },
    {
        // not really an extension, but it's easiest to present it as one
        name: 'TurboBuilder - Dev Branch',
        href: 'https://turbobuilder-dev.vercel.app/',
        extensionId: 'special_turboBuilderDev',
        iconURL: turboBuilderDevIcon,
        description: '最新の機能を備えた、公開されている開発者ブランチ。',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['extcreate'],
        featured: true
    },*/
    {
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="好きな拡張機能を読み込むことができます。"
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        featured: true
    }
];

/*
----------------------------------------------
### NOTE TO PENGUINMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
    const extras = [
        {
            name: (
                <FormattedMessage
                    defaultMessage="HTML Canvas"
                    description="Name of Text extension"
                    id="canvas.name"
                />
            ),
            extensionId: 'newCanvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: (
                <FormattedMessage
                    defaultMessage="HTML キャンバスを使用した追加の描画ツール。他の拡張機能と併用すると効果的です。"
                    description="Description of Text extension"
                    id="text.description"
                />
            ),
            featured: true
        },
        {
            name: 'OLD Canvas',
            extensionId: 'canvas',
            iconURL: canvasExtensionBanner,
            tags: ['penguinmod'],
            insetIconURL: canvasExtensionIcon,
            customInsetColor: '#0094FF',
            description: 'HTML Canvas の非推奨バージョン。',
            featured: true
        },
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'ファイルの基本ブロック。これはTurboWarpファイル拡張子に置き換えられました。',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'クローンとメインスプライト間のデータ共有が主な機能ですが、他にもいくつかの小さな機能があります。この機能はTurboWarp Clones+拡張機能に置き換えられました。',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: '変数、リスト、および追加情報をファイルに保存し、それらを再度読み込みます。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="TurboWarp Blocks"
                    description="Name of TW extension"
                    id="tw.twExtension.name"
                    values={{
                        APP_NAME: "TurboWarp"
                    }}
                />
            ),
            extensionId: 'tw',
            twDeveloper: 'GarboMuffin',
            tags: ['turbowarp'],
            insetIconURL: turbowarpIcon,
            iconURL: twIcon,
            description: '奇妙な新しいブロック。感知拡張に置き換えられました。',
            featured: true
        },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod', 'joke'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: 'Christmas',
            extensionId: 'jgChristmas',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/christmas.png',
            tags: ['penguinmod', 'joke'],
            description: 'hooraye',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.png',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'joke'],
            description: 'これは本当に良い拡張機能です。今すぐ使ってください。',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.png',
            tags: ['penguinmod', 'joke'],
            description: '本日のスポンサーである sharkpool (the epic utilities) がお届けする、非常に優れたユーティリティ',
            featured: true
        },
        {
            name: 'CATS',
            extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
            iconURL: 'https://extensions.penguinmod.com/images/Gen1x/cats.png',
            tags: ['penguinmod', 'joke'],
            description: '猫に関するブロック。',
            extDeveloper: 'G1nX',
            featured: true
        },
        {
            name: 'McUtils',
            extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js',
            tags: ['turbowarp', 'joke'],
            iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
            insetIconURL: turbowarpIcon,
            description: 'ファーストフード店員のための基本的なユーティリティ',
            featured: true,
            twDeveloper: 'LilyMakesThings'
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'ペンギンブロックがあるのに猫ブロックなんて必要ない',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'fire in the hole',
            extensionId: 'https://extensions.penguinmod.com/extensions/JeremyGamer13/FireInTheHole.js',
            iconURL: 'https://library.penguinmod.com/files/emojis/cluelesssmile.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'エイプリルフールは長すぎたね、このジョークはもう面白くない',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
            tags: ['penguinmod'],
            description: '最終的にデフォルトのツールボックスに統合されたレガシー拡張機能。',
            featured: true
        },
        {
            name: 'XML',
            extensionId: 'jwXml',
            iconURL: jwXmlExtensionIcon,
            tags: ['penguinmod', 'datamgmt'],
            description: 'XMLデータの作成と取得を可能にします。データの変更はまだできません。',
            extDeveloper: 'jwklong',
            featured: true
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: '情報をログに記録し、コマンドを実行します。パッケージ化されたプロジェクトのデバッグや、ちょっとした変更に最適です。',
            featured: true
        },
        {
            name: 'Test Extension Loader',
            href: 'https://studio.penguinmod.com/loadExt.html',
            extensionId: 'special_testExtensionLibrary',
            iconURL: defaultExtensionIcon,
            description: 'ライブラリから拡張機能を読み込むテスト。開発者向け。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="OOP"
                    description="Name of OOP extension"
                    id="jwStructs.jwStructsExtension.name"
                />
            ),
            extensionId: 'jwStructs',
            tags: ['penguinmod'],
            iconURL: jwStructsExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="リストから削除されました。OOP ブロック。OOp は、オブジェクトとその相互作用を使用してアプリケーションやコンピュータ プログラムを設計するプログラミングパラダイムです。"
                    description="Description of OOP extension"
                    id="jwStructs.jwStructsExtension.description"
                />
            ),
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'レガシー拡張機能。古いブロックはもはや本来の用途を果たせません。PenguinModが特定のタスクを実行する際に要求する権限を管理するための直接ブロックです。',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: '拡張機能をテストして、可能かどうかを確認します。\nブロックは変更される可能性があり、プロジェクトが破損する可能性があるため、本番環境では使用しないでください。',
            credits: 'Some features added from LilyMakesThings, CubesterYT, TheShovel',
            featured: true
        },
        {
            name: '3D',
            extensionId: 'jg3d',
            iconURL: jg3dExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dInsetExtensionIcon,
            description: '3D の魔法を使ってプロジェクトに彩りを添えましょう。',
            featured: true
        },
        {
            name: '3D Physics',
            extensionId: 'fr3d',
            iconURL: fr3dPhysicsExtensionIcon,
            tags: ['penguinmod', '3d'],
            customInsetColor: '#D066FE',
            insetIconURL: fr3dPhysicsInsetExtensionIcon,
            description: '3D 拡張のための物理。',
            featured: true
        },
        {
            name: '3D Virtual Reality',
            extensionId: 'jg3dVr',
            iconURL: jg3dVrExtensionIcon,
            tags: ['penguinmod', 'hardware', '3d'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dVrInsetExtensionIcon,
            description: '開発中。互換性が損なわれる可能性があります。プレイヤーがあなたの世界に飛び込めるようにしましょう！',
            featured: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: '開発中',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: '開発中。Web サイトでできないことをパッケージ アプリケーションで実現できます。',
            featured: true
        },
        
        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
            tags: ['penguinmod'],
            description: '簡単なタスク用のクイックブロックを作成します。任意の円形の場所に挿入して、任意の値を返すように設定できます。',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Pathfinding"
                    description="Name of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.name"
                />
            ),
            extensionId: 'jgPathfinding',
            tags: ['penguinmod'],
            iconURL: jgPathfindingExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="(不安定または遅延あり。さらなる作業が必要です) スプライトがゲーム内の障害物にクリップするのではなく、障害物を回避できるようにします。"
                    description="Description of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.description"
                />
            ),
            featured: true
        },
        {
            name: 'Animation',
            extensionId: 'jgAnimation',
            iconURL: jgAnimationExtensionIcon,
            tags: ['penguinmod'],
            description: '開発中。現在バグがあり、機能が不足しています。',
            featured: true
        },
        {
            name: 'Virtual Reality',
            extensionId: 'jgVr',
            iconURL: jgVrExtensionIcon,
            tags: ['penguinmod', 'hardware'],
            description: '開発中',
            credits: 'Vadik1',
            featured: true
        }
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
