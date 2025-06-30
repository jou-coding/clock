# 時計アプリ

## 概要

ボタンを押すと、正確な一秒間隔で時刻が更新される時計アプリです。
内部では、setInterval によるずれを調整する処理を実装しています。

## 制作の目的

このプロジェクトは、**TypeScript や DOM 操作の基礎を学ぶための学習記録として作成**しました。

## 使用技術

- TypeScript
- Vite
- DOM 操作

## 使い方

- `client`ディレクトリに移動
- `npm i`を実行して依存パッケージをインストール
- `npm run dev`でローカルサーバーを起動

## 補足

JavaScript の`setInterval`は少しずつずれが蓄積する可能性があります。そのため、このアプリでは`1000 - (Date.now() % 1000)`を使い、次の一秒にピッタリ合わせてから時刻の更新を開始しています。

## ディレクトリ構成

```
client/
├── index.html
└── src/
    └── main.ts
```

## アラーム音について

このアプリケーションでは、Pixabay から取得した音源をアラームとして使用しています。

- 曲名: Relaxing
- 作者: Music_For_Videos
- 配布元: https://pixabay.com/music/modern-classical-relaxing-145038/
- ライセンス: Pixabay ライセンス（商用・非商用問わず使用可、クレジット不要）

※ 音源ファイルは `./public/alarm.mp3` に配置されています。
