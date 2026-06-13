# ALOHA TERRACE CAFE — Webサイト一式

## フォルダ構成

```
aloha-terrace-cafe/
├── index.html        … ページの中身(文章・構成)
├── css/
│   └── style.css     … 見た目(色・レイアウト・写真の指定)
├── js/
│   └── script.js     … 動き(スクロール演出)
└── images/           … 写真
    ├── terrace-morning.jpg   (朝のテラス／あなたの写真)
    ├── terrace-sunset.jpg    (夕日のテラス／あなたの写真)
    └── lunch.jpg             (ランチの料理)
```

## 見るには
`index.html` をダブルクリックするとブラウザで開きます。

## 写真について(大事)
このサイトの写真は2種類あります。

1.【あなたの実写真】… images/ フォルダの中の写真。
   - 朝のストーリー(terrace-morning.jpg)
   - 夕日のストーリー(terrace-sunset.jpg)
   これはオフラインでも表示されます。

2.【仮のフリー素材(Unsplash)】… 表紙・メニュー・お昼の店内など。
   ネット接続があるときだけ表示されます。
   お店の実写真ができたら、images/ に置いて、
   css/style.css の中の該当する url('https://...') を
   url('../images/ファイル名.jpg') に書き換えてください。
   (style.css の上のほうに、どこを差し替えればいいか
    コメントで書いてあります)

## 文章を直すには
店名・住所・電話番号・メニュー・値段などは、
index.html の中の文字を書き換えるだけで変わります。

## ネットに公開するには
このフォルダごと Netlify(netlify.com)などの無料サービスに
ドラッグ＆ドロップするだけで公開できます。
```
