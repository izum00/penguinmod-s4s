import os
import subprocess
import shutil

# GitHubのリポジトリURL
repo_url = "https://github.com/izum00/penguinmod-s4s"

# 環境変数からトークンを取得
token = os.getenv("github_token")
if not token:
    raise RuntimeError("環境変数 'github_token' が設定されていません。")

# 認証情報付きのURLを作成
authed_url = repo_url.replace("https://", f"https://{token}@")

# カレントディレクトリのパス
current_dir = os.getcwd()

# Gitユーザー情報の設定
subprocess.run(["git", "config", "--global", "user.name", "izum00"], check=True)
subprocess.run([
    "git", "config", "--global", "user.email", 
    os.getenv("mail") or "default@example.com"
], check=True)

# Gitの安全設定
subprocess.run(["git", "config", "--global", "--add", "safe.directory", "/app"], check=True)

# .gitが存在していれば削除（Gitオブジェクト壊れ防止）
git_dir = os.path.join(current_dir, ".git")
if os.path.exists(git_dir):
    shutil.rmtree(git_dir)

# Gitの初期化とLFSの初期化（LFSが導入されていることが前提）
subprocess.run(["git", "init"], check=True)
subprocess.run(["git", "lfs", "install"], check=True)  # LFSが使われているなら必要
subprocess.run(["git", "remote", "add", "origin", authed_url], check=True)

# Gitの操作
subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", "auto commit from script"], check=True)
subprocess.run(["git", "branch", "-M", "main"], check=True)
subprocess.run(["git", "push", "-u", "origin", "main", "--force"], check=True)
