# 時計アプリ

GitHub Pages で動作する時計アプリです。TypeScript + Vite で構築され、簡単に Web 上で動作します。

## 📌 概要

このアプリは、ブラウザ上でリアルタイムな時計を表示するシンプルなアプリです。学習目的で作成されています。

## 🎯 制作の目的

- TypeScript と Vite の開発環境に慣れること
- GitHub Pages を使ったデプロイの練習
- Web アプリの構造を理解する

## 🛠️ 使用技術・ライブラリ

| 技術               | バージョン | 説明                              |
| ------------------ | ---------- | --------------------------------- |
| TypeScript         | ~5.8.3     | 型安全な JavaScript               |
| Vite               | ^6.3.5     | 高速フロントエンドビルドツール    |
| gh-pages           | ^6.3.0     | GitHub Pages へのデプロイ支援     |
| Vitest（npx 実行） | ^3.x       | テストフレームワーク（Jest 互換） |

## 🚀 セットアップ方法

このプロジェクトは Node.js 環境で動作します。

- 依存関係のインストール：npm install
- 開発用サーバーの起動：npm run dev
- ビルド：npm run build
- プレビュー（本番ビルド確認）：npm run preview
- GitHub Pages へのデプロイ：npm run deploy
- テストの実行：npm run test

## 📁 ディレクトリ構成

```
myclock/
├── client/ # フロントエンドアプリ（Vite + TypeScript）
│ ├── public/ # 静的ファイル（画像など）
│ ├── src/ # ソースコード
│ │ ├── app/ # アプリの中核となるクラスロジック
│ │ ├── init/ # 初期化用の処理（main.tsの補助など）
│ │ ├── lib/ # ヘルパー関数などの共通ユーティリティ
│ │ ├── styles/ # CSS・スタイル
│ │ ├── types/ # TypeScriptの型定義
│ │ └── ui/ # UI表示やDOM操作関連のロジック
│ ├── tests/ # テストコード（Vitestなど）
│ ├── index.html # エントリーポイントHTML
│ ├── package.json # npmスクリプトや依存管理
│ ├── tsconfig.json # TypeScriptの設定
│ └── vite.config.ts # Viteの設定ファイル
├── README.md # プロジェクトの説明ファイル
```

## 🌐 公開 URL
[こちら](https://jou-coding.github.io/myclock/)（※別タブで開くことをおすすめします）


## 🧪 テストについて

このプロジェクトには `Vitest` を導入していますが、現在のところテストコードは一部のみに限定されています。  
開発の中心が UI やロジックの構築であり、検証目的が主だったため、包括的なユニットテストは現段階では行っていません。

## 💡 ディレクトリ構成に関する補足

`client/` フォルダは本来、将来的に `server/` ディレクトリを追加してフルスタック構成にする想定で作成しました。  
ただし現在は、アプリの方向性がフロントエンド中心に固まったため、バックエンドの追加は見送っています。  
そのため、現行の構成はフロントエンド専用となっており、`client/` にすべての実装が集約されています。

## アラーム音について

このアプリケーションでは、Pixabay から取得した音源をアラームとして使用しています。

- 曲名: Relaxing
- 作者: Music_For_Videos
- 配布元: https://pixabay.com/music/modern-classical-relaxing-145038/
- ライセンス: Pixabay ライセンス（商用・非商用問わず使用可、クレジット不要）

※ 音源ファイルは `./public/alarm.mp3` に配置されています。

## 🪪 ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。  
詳しくは [LICENSE](./LICENSE) ファイルをご覧ください。
