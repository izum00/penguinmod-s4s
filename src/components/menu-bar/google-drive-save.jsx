
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import Button from '../button/button.jsx';
import styles from './google-drive-save.css';

class GoogleDriveSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: localStorage.getItem('googleDriveAccessToken') || null,
            currentAccountEmail: localStorage.getItem('googleDriveAccountEmail') || null,
            currentAccountName: localStorage.getItem('googleDriveAccountName') || null,
            files: [],
            isModalOpen: false,
            isLoading: false
        };
        this.modalContentRef = React.createRef();
    }

    componentDidMount() {
        // 初期化処理
    }

    handleClick = () => {
        this.setState({isModalOpen: true});
    };

    handleCloseModal = () => {
        this.setState({isModalOpen: false});
    };
    handleOverlayClick = (e) => {
        // モーダルコンテンツ内をクリックした場合は閉じない
        if (this.modalContentRef.current && !this.modalContentRef.current.contains(e.target)) {
            this.handleCloseModal();
        }
    };
startGoogleLogin = () => {
    // 既存のトークン情報をクリア
    localStorage.removeItem('googleDriveAccessToken');
    localStorage.removeItem('googleDriveAccountEmail');
    localStorage.removeItem('googleDriveAccountName');
    
    const CLIENT_ID = "1033286471224-n9mv8l869fqikubj2e8q92n8ige3qr6r.apps.googleusercontent.com";
    const REDIRECT_URI = "https://soiz1-s4s-upload.hf.space/close2";
    const SCOPES = "https://www.googleapis.com/auth/drive.file";
    
    const messageListener = (event) => {
        if (event.data.token) {
            window.removeEventListener("message", messageListener);
            this.setState({
                accessToken: event.data.token,
                currentAccountEmail: event.data.email || null,
                currentAccountName: event.data.name || null,
                isModalOpen: true
            });
            
            this.fetchDriveFiles(event.data.token);
        }
    };
    window.addEventListener("message", messageListener);

    const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
        `client_id=${CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&response_type=token` +
        `&scope=${encodeURIComponent(SCOPES)}`;
    
    window.open(authUrl, "_blank", "width=500,height=600");
};

    fetchDriveFiles = async (accessToken) => {
        this.setState({isLoading: true});
        try {
            const response = await fetch("https://www.googleapis.com/drive/v3/files?q=(mimeType='application/x-scratch' or mimeType='image/png')", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const data = await response.json();
            this.setState({files: data.files || [], isLoading: false});
        } catch (error) {
            console.error("ファイル一覧取得エラー:", error);
            alert("error", "ファイル一覧の取得に失敗しました");
            this.setState({isLoading: false});
        }
    };

    renderModal() {
        if (!this.state.isModalOpen) return null;

        return (
            <div className={styles.modalOverlay} onClick={this.handleOverlayClick}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2>Googleドライブに保存</h2>
                        <button onClick={this.handleCloseModal} className={styles.closeButton}>×</button>
                    </div>
                    
                    <div className={styles.modalBody}>
                        {this.renderAuthSection()}
                        {this.state.accessToken && this.renderFileList()}
                    </div>
                </div>
            </div>
        );
    }

    renderAuthSection() {
        if (this.state.accessToken) {
            return (
                <div className={styles.authSection}>
                    <div className={styles.accountInfo}>
                        ログイン中: {this.state.currentAccountName || this.state.currentAccountEmail || 'Googleアカウント'}
                    </div>
                    <button 
                        onClick={this.handleChangeAccount}
                        className={styles.changeAccountButton}
                    >
                        アカウントを変更
                    </button>
                </div>
            );
        }
        
        return (
            <div className={styles.authSection}>
                <p>Googleでログインして、プロジェクトを保存または更新します。</p>
                <button 
                    onClick={this.startGoogleLogin}
                    className={styles.loginButton}
                >
                    Googleでログイン
                </button>
            </div>
        );
    }

    renderFileList() {
        if (this.state.isLoading) {
            return <div className={styles.loading}>読み込み中...</div>;
        }

        // プロジェクトファイルとサムネイルを関連付ける
        const projectFiles = this.state.files.filter(file => file.mimeType === 'application/x-scratch');
        const thumbnailFiles = this.state.files.filter(file => file.mimeType === 'image/png');

        if (projectFiles.length === 0) {
            return <div className={styles.noFiles}>保存されたファイルが見つかりません</div>;
        }

        return (
            <div className={styles.fileListContainer}>
                <div className={styles.fileListHeader}>
                    <h3>プロジェクト: {this.renderProjectTitle()}</h3>
                    <button 
                        onClick={this.handleNewFile}
                        className={styles.newFileButton}
                    >
                        新規保存
                    </button>
                </div>
                
                <div className={styles.fileList}>
                    {projectFiles.map(project => this.renderFileItem(project, thumbnailFiles))}
                </div>
            </div>
        );
    }

    renderProjectTitle() {
        const projectName = window.vm.runtime.projectName || "無題";
        
        return (
            <span 
                className={styles.projectTitle}
                onDoubleClick={this.handleEditProjectTitle}
            >
                {projectName}
            </span>
        );
    }

    renderFileItem(project, thumbnailFiles) {
        const thumbnail = thumbnailFiles.find(
            thumb => thumb.name === `Scratch-Thumbnail-${project.id}.png`
        );

        return (
            <div key={project.id} className={styles.fileItem}>
                <div className={styles.thumbnailContainer}>
                    {thumbnail ? (
                        <img 
                            src={`https://drive.google.com/thumbnail?id=${thumbnail.id}&sz=w300`}
                            alt="プロジェクトサムネイル"
                            className={styles.thumbnail}
                        />
                    ) : (
                        <div className={styles.thumbnailPlaceholder}>
                            サムネイルなし
                        </div>
                    )}
                </div>
                
                <h3 className={styles.fileName}>
                    {project.name.replace('.s4s.txt', '')}
                </h3>
                
                {this.renderShareLink(project.id)}
                
                <div className={styles.buttonGroup}>
                    <button 
                        onClick={() => this.handleLoadFile(project)}
                        className={styles.actionButton}
                    >
                        読み込む
                    </button>
                    <button 
                        onClick={() => this.handleReplaceFile(project)}
                        className={styles.actionButton}
                    >
                        上書き
                    </button>
                    <button 
                        onClick={() => this.handleShareFile(project.id)}
                        className={classNames(styles.actionButton, styles.shareButton)}
                    >
                        共有
                    </button>
                    <button 
                        onClick={() => this.handleDeleteFile(project, thumbnailFiles)}
                        className={classNames(styles.actionButton, styles.deleteButton)}
                    >
                        削除
                    </button>
                </div>
            </div>
        );
    }

renderShareLink(fileId) {
    const SHORT_URL = "https://s4.rf.gd/";
    
    return (
        <div className={styles.linkContainer}>
            <div className={styles.linkHeader}>
                <span>共有リンク:</span>
                <button 
                    onClick={() => this.copyToClipboard(`${SHORT_URL}${fileId}`)}
                    className={styles.copyButton}
                >
                    リンクをコピー
                </button>
                <button 
                    onClick={() => this.copyToClipboard(fileId)}
                    className={styles.copyButton}
                >
                    IDのみコピー
                </button>
            </div>
            <a 
                href={`${SHORT_URL}${fileId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkUrl}
            >
                {`${SHORT_URL}${fileId}`}
            </a>
        </div>
    );
}

    render() {
        return (
            <div>
                <Button
                    className={classNames(
                        this.props.className,
                        styles.saveButton
                    )}
                    onClick={this.handleClick}
                >
                    <FormattedMessage
                        defaultMessage="Googleドライブに保存"
                        description="Label for Google Drive save button"
                        id="google.drive.saveButton"
                    />
                </Button>
                
                {this.renderModal()}
            </div>
        );
    }

    // イベントハンドラメソッド
    handleChangeAccount = () => {
        this.setState({
            accessToken: null,
            currentAccountEmail: null,
            currentAccountName: null
        });
        localStorage.removeItem('googleDriveAccessToken');
        localStorage.removeItem('googleDriveAccountEmail');
        localStorage.removeItem('googleDriveAccountName');
    };

    handleEditProjectTitle = () => {
        const currentName = window.vm.runtime.projectName || "無題";
        const newName = prompt("プロジェクト名を入力してください", currentName);
        
        if (newName !== null) {
            window.vm.runtime.projectName = newName.trim() || "無題";
            this.forceUpdate();
        }
    };

handleNewFile = async () => {
    try {
        await this.saveToGoogleDrive(null, null);
        alert("success", "新規保存しました");
        this.fetchDriveFiles(this.state.accessToken);
    } catch (error) {
        console.error("新規保存エラー:", error);
        alert("error", "新規保存に失敗しました");
    }
};

    handleLoadFile = (project) => {
        const PROXY_URL = "https://soiz1-drive-proxy.hf.space/?file_id=";
        
        if (confirm(`"${project.name}"を読み込みますか？現在のプロジェクトは失われます。`)) {
            const url = `${PROXY_URL}${project.id}`;
            window.location.href = `?project_url=${encodeURIComponent(url)}`;
        }
    };

    handleReplaceFile = async (project) => {
        if (confirm(`"${project.name}"を現在のプロジェクトで上書きしますか？`)) {
            try {
                await this.saveToGoogleDrive(project.id, project.name);
                alert("success", "上書き保存しました");
                this.fetchDriveFiles(this.state.accessToken);
            } catch (error) {
                console.error("ファイル上書きエラー:", error);
                alert("error", "ファイルの上書きに失敗しました");
            }
        }
    };

    handleShareFile = (fileId) => {
        const SHARE_URL = "https://scratch-school.ct.ws/upload?id=";
        window.open(`${SHARE_URL}${fileId}`, "_blank");
    };

    handleDeleteFile = async (project, thumbnailFiles) => {
        if (confirm(`"${project.name}"とそのサムネイルを完全に削除しますか？この操作は元に戻せません。`)) {
            try {
                // プロジェクトファイルを削除
                await this.deleteFile(project.id);
                
                // 対応するサムネイルを探して削除
                const thumbnailToDelete = thumbnailFiles.find(
                    thumb => thumb.name === `Scratch-Thumbnail-${project.id}.png`
                );
                
                if (thumbnailToDelete) {
                    await this.deleteFile(thumbnailToDelete.id);
                }
                
                alert("success", "ファイルを削除しました");
                this.fetchDriveFiles(this.state.accessToken);
            } catch (error) {
                console.error("削除エラー:", error);
                alert("error", "ファイルの削除に失敗しました");
            }
        }
    };

    copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("success", "リンクをクリップボードにコピーしました"))
            .catch(() => alert("error", "リンクのコピーに失敗しました"));
    };

    // API操作メソッド
    async deleteFile(fileId) {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }
    }

    async saveToGoogleDrive(fileId, fileName) {
        // プロジェクトを保存
        const blob = await window.vm.saveProjectSb3();
        const projectName = window.vm.runtime.projectName || "無題";
        const nameToUse = fileName || `${projectName}.s4s.txt`;
        
        const metadata = {
            name: nameToUse,
            mimeType: "application/x-scratch",
        };

        const url = fileId 
            ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`
            : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";

        const form = new FormData();
        form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
        form.append("file", blob);

        const method = fileId ? "PATCH" : "POST";

        const uploadResponse = await fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`,
            },
            body: form,
        });

        if (!uploadResponse.ok) {
            throw new Error(await uploadResponse.text());
        }

        const fileData = await uploadResponse.json();

        // サムネイルを保存
        try {
            const thumbnailDataUrl = await this.getProjectThumbnail();
            const thumbnailBlob = await (await fetch(thumbnailDataUrl)).blob();
            const thumbnailMetadata = {
                name: `Scratch-Thumbnail-${fileData.id}.png`,
                mimeType: "image/png",
            };

            const existingThumbnailResponse = await fetch(
                `https://www.googleapis.com/drive/v3/files?q=name='${thumbnailMetadata.name}'`,
                {
                    headers: {
                        Authorization: `Bearer ${this.state.accessToken}`,
                    },
                }
            );

            const existingThumbnailData = await existingThumbnailResponse.json();
            const thumbnailFileId = existingThumbnailData.files?.[0]?.id;

            const thumbnailUrl = thumbnailFileId
                ? `https://www.googleapis.com/upload/drive/v3/files/${thumbnailFileId}?uploadType=multipart`
                : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";

            const thumbnailForm = new FormData();
            thumbnailForm.append("metadata", new Blob([JSON.stringify(thumbnailMetadata)], { type: "application/json" }));
            thumbnailForm.append("file", thumbnailBlob);

            const thumbnailMethod = thumbnailFileId ? "PATCH" : "POST";

            await fetch(thumbnailUrl, {
                method: thumbnailMethod,
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`,
                },
                body: thumbnailForm,
            });
        } catch (thumbnailError) {
            console.warn("サムネイルの保存に失敗しました:", thumbnailError);
        }

        if (!fileId) {
            await fetch(`https://www.googleapis.com/drive/v3/files/${fileData.id}/permissions`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role: "reader",
                    type: "anyone",
                }),
            });
        }
    }

    getProjectThumbnail() {
        return new Promise(resolve => {
            window.vm.renderer.requestSnapshot(uri => {
                resolve(uri);
            });
        });
    }
}

GoogleDriveSave.propTypes = {
    className: PropTypes.string,
    showAlert: PropTypes.func.isRequired
};

export default GoogleDriveSave;