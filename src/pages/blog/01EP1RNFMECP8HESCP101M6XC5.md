---
layout: $/layouts/post.astro
title: "UniFi Protect G4 Doorbellを導入しました"
description: "UniFiのドアホンを取り寄せて設置したり、APIで遊んでみました。"
tags: ["UniFi", "自宅環境"]
author: Shota
authorTwitter: xioota
image: /images/posts/doorbell_01.jpg
date: 2020-11-01T11:21:49.455Z
---

![UniFi Protect G4 Doorbell](/images/posts/doorbell_01.jpg)

[UniFi Protect G4 Doorbell](https://store.ui.com/collections/unifi-protect-cameras/products/uvc-g4-doorbell)を導入したので、使用感などを書いていこうと思います。

[UniFi Protect G4 Doorbell](https://store.ui.com/collections/unifi-protect-cameras/products/uvc-g4-doorbell)は[Ring Doorbell](https://shop.ring.com/pages/doorbell-cameras)や[Google Nest Hello Doorbell](https://store.google.com/us/product/nest_hello_doorbell?hl=en-US)と同じくConnectedなインターホンで、共通して以下の機能を備えています。

* 呼び鈴を鳴らしたらスマホに通知
* モーションセンサーでカメラに動きがあったら録画したり、スマホに通知

## UniFi Protect G4 Doorbellの特徴

他の製品と比較して気に入ってる点は以下の点です。

* 映像データの保存にサブスクリプションしなくてよい
* 呼び鈴の通知が比較的早い([Ring Doorbell](https://shop.ring.com/pages/doorbell-cameras)と比較して)
* APIで遊べる

### 映像データの保存にサブスクリプションしなくてよい

リアルタイムでDoorbellの映像が見えるのは当たり前ですが、他の製品は保存はサブスクリプションになります。

[Ringのプラン](https://shop.ring.com/pages/protect-plans)は30USD/年(もしくは3USD/月)、[Google Nest Helloのプラン](https://store.google.com/us/product/nest_aware?hl=en-US)では60USD/年(もしくは6USD/月)となっています。（GoogleはGoogle Drive使えないのはかなり残念ですよね・・・）

その点、[UniFi Protect G4 Doorbell](https://store.ui.com/collections/unifi-protect-cameras/products/uvc-g4-doorbell)は[UniFi Cloud Key Plus](https://store.ui.com/collections/unifi-protect-nvr/products/unifi-cloudkey-gen2-plus)の1TBあるローカルストレージに保存されるので、買い切りです。ただし、そもそもUniFiでネットワーク構築していないと多分使えないので、UniFi製品を使っていないけど、Doorbellだけ検討している人にはおすすめではありません。（それゆえ、多くの比較サイトでは大抵「ring vs nest hello」みたいな感じでUniFiは全然取り上げられてない）

### 呼び鈴の通知が比較的早い

以前、[Ring Doorbell](https://shop.ring.com/pages/doorbell-cameras)を使っていたときは、呼び鈴が鳴ってから通知が来るまでの遅延や、アプリを開いてから映像に通信するまでの時間がかかりすぎて、応答性に難を感じていました。その点、UniFiはネットワークの会社ということもあってか、使えるレベルの速さだと感じます。ただ、スマホへのプッシュ通知にアナログのインターホンほどのリアルタイム性はないので、「使えるレベル」と表現した通り、多少のラグを感じます。

### APIで遊べる

公式でAPIを公開しているわけではないのですが、UniFi Protect APIを使って完全にローカルネットワークに閉じて、Doorbellの呼び鈴を検知してPCにお知らせするOSSを作りました。

呼び鈴がなるとブラウザを開いて、画像とどのメッセージを表示するか選択できます。

![通知を受け取ったときに開かれるブラウザの画像](/images/posts/doorbell_03.jpg)

表示するメッセージを選択すると、効果音とともにDoorbellにメッセージが表示されます。

![メッセージが表示されている画像](/images/posts/doorbell_04.jpg)

呼び鈴を鳴らした瞬間の画像を表示しているだけなので、話すことはできません。話したい場合はUniFiのアプリを使って話す運用です。そのため、話そうと思うと反応が遅れるのですが、話さないと出るか判断しかねる相手の場合、大抵こちらは困らないので、まぁいいかなと思っています。

OSSなので誰でも使えます。 `brew` で配布しているので、興味のある方は使ってみてください！

[![sawadashota/unifi-doorbell-chime - GitHub](https://gh-card.dev/repos/sawadashota/unifi-doorbell-chime.svg)](https://github.com/sawadashota/unifi-doorbell-chime)


## スマホに呼び鈴が通知されるのは便利か

外出先で（出れないけど）確認することができたり、防犯カメラ的な役割もあるので、ないよりあったほうがいいのは確かですが、使ってみると、スマホにしか通知がこないとそれはそれで不便です。家にいると、すぐ手に届く場所にスマホあるとは限らないし、大抵、スマホの通知音はそこまで大きく設定してないし、マナーモードにしているときもあります（家にいるのに呼び鈴に気づかないのは結構最悪ですよね）。そこで、引退したスマホを受話器専用にすることにしました。

![Doorbell用のスマホ](/images/posts/doorbell_02.jpg)

## イマイチなところ

スマートスピーカーとの連携は公式ではサポートされていません。一応、Apple HomePodと連携する[3rd Party製のOSS](https://github.com/hjdhjd/homebridge-unifi-protect)はありますが、[Google Nest Hello Doorbell](https://store.google.com/us/product/nest_hello_doorbell?hl=en-US)のようにNest Hubのようなモニター付きのスマートスピーカーと連携して映像を映しながら通話できなさそうな雰囲気です。

また、UniFi Protectスマホアプリで通話はできますが、音がハウリングするので、通話性能はかなりイマイチです。カメラでも集音する製品はありましたが、双方向の音声をスピーカーでやりとりする製品は今回が初めてで、このあたりの作り込みがまだまだなんですかね・・・今後のアップデートで改善されるのを願っています。

## おわりに

まだまだどのDoorbellも発展途上だなという印象を受けました。個人的には「出る」って意思決定をしたら玄関の鍵まで開いてほしいんですが、それが製品として出てくるのはまだまだ先かもしれません。どうにかして今これを実現したいなら、APIが使えるスマートロック、[SESAME](https://jp.candyhouse.co/)のAPIを駆使すればできそうな気がします。ただ、今年[Qrio](https://qrio.me/)を買ったばかりなので、これを我が家に実装するのは先の話になりそうです。
