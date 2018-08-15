# What's this ?

クリエイティブキッズキャンプの図書館ディスプレイ表示用のWebAppです。

**一部の画像ファイル・音源ファイルは著作権等の都合により削除しています。**

# Requirements

- Webカメラ

# Usage

```
$ git clone git@github.com:dream-exp/CreativeKidsCamp-public.git
$ sudo npm i
$ node server
```

でサーバが立ち上がります。

出力用の画面は `http://localhost:3000/index.html` に、画面切り替え用のコントローラ画面は `http://localhost:3000/control.html` に割り当てています。
出力用の画面はコントローラ画面から逐次変更できます。