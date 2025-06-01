# ベースイメージとして Node.js を使用
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# ホストのファイルをコンテナにコピー
COPY . .
RUN apt-get update && apt-get install -y python3 python3-pip
RUN apt-get update && \
    apt-get install -y git-lfs && \
    git lfs install

ARG github_token
# translations ディレクトリを作成し、権限を設定
RUN mkdir -p /app/translations && chmod -R 777 /app/translations
RUN chmod -R 777 /app

# 依存関係をインストール（競合を無視）
RUN npm install --legacy-peer-deps

# OpenSSL の互換オプションを有効化
ENV NODE_OPTIONS="--openssl-legacy-provider"

# コンテナの起動時にサーバーを実行
CMD ["/bin/sh", "-c", "python3 app.py && npm start"]

# コンテナがリッスンするポート
EXPOSE 3000
