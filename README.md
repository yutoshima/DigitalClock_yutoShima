
# デジタル時計アプリ

このアプリは、異なるタイムゾーンとテーマを持つ複数の時計を追加できるReactベースのデジタル時計アプリケーションです。アプリはレスポンシブデザインを採用しており、デスクトップとモバイルデバイスの両方で快適に動作します。

## 特徴

- 異なるタイムゾーンを持つ複数の時計を追加可能
- 各時計に対して異なるテーマを切り替え可能
- デスクトップおよびモバイルデバイスに対応したレスポンシブデザイン

## 使用技術

- React
- Styled-components
- Moment-timezone

## はじめに

ローカル環境でアプリを実行するための手順は以下の通りです：

### 前提条件

お使いのマシンにNode.jsとnpmがインストールされていることを確認してください。

### インストール

1. リポジトリをクローンします：
   ```sh
   git clone https://github.com/your-username/digital-clock-app.git
   ```
2. プロジェクトディレクトリに移動します：
   ```sh
   cd digital-clock-app
   ```
3. 依存関係をインストールします：
   ```sh
   npm install
   ```

### 使用方法

1. 開発サーバーを起動します：
   ```sh
   npm start
   ```
2. ブラウザを開き、`http://localhost:3000`にアクセスします。

## プロジェクト構成

```
digital-clock-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddClockButton.js
│   │   ├── DigitalClock.js
│   │   └── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## コンポーネント

### `App.js`

テーマを設定し、時計の状態を管理する主要なコンポーネントです。新しい時計を追加し、テーマを変更するための関数を含みます。

### `DigitalClock.js`

指定されたタイムゾーンとテーマで時計を表示するコンポーネントです。UTC時刻とタイムゾーンのオフセットに基づいて毎秒時間を更新します。

### `AddClockButton.js`

新しい時計を追加するためのユーザーインターフェースを提供するコンポーネントです。ユーザーはタイムゾーンとテーマを選択できます。

## ライセンス

このプロジェクトはMITライセンスの下で配布されています。詳細は`LICENSE`ファイルをご覧ください。

## 謝辞

- [React](https://reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Moment-timezone](https://momentjs.com/timezone/)

## 連絡先

あなたの名前 - [your-email@example.com](mailto:your-email@example.com)

プロジェクトリンク: [https://github.com/your-username/digital-clock-app](https://github.com/your-username/digital-clock-app)
