---
layout: $/layouts/post.astro
title: "積水ハウスの建売住宅をスマートホーム化してみた"
description: "積水ハウスの建売住宅の電子錠や照明をIoT化したり、余剰電力に合わせてテスラの充電をオートスケーリングするようにしました。"
tags: ["スマートホーム", "積水ハウス"]
author: Shota
authorTwitter: xioota
image: /images/posts/smarthome/status.jpg
date: 2024-08-22T04:08:05.755Z
---

今年、建売の戸建て住宅を購入しました！抜け感のあるリビング、Ⅱ型キッチン、陶器でできた外壁など、ハード面では大満足なんですが、建物自体は1,2年前に立てられたということもあり、スマートホームという観点ではイマイチでした。今回は、積水ハウスの建売住宅をスマートホーム化する方法について書いていきます。

※最近では、[プラットフォームハウスタッチ](https://www.sekisuihouse.co.jp/pfh/)が提供されているので、注文住宅はもちろん、建売住宅もスマートホーム化が進んでいるとは思います。

※今回紹介する方法は第二種電気工事士の資格が必要です。また、この記事を参考に電気工事する場合は、自己責任で行ってください。

## お品書き

* ALPHA 電子錠のIoT化
* 照明スイッチのIoT化
* 余剰電力とテスラ充電の自動連動システム
* 実現できなかったこと

## ALPHA 電子錠のIoT化

積水ハウスの建売住宅には、電子錠として [ALPHA 電子錠](https://www.kk-alpha.com/lock/electronic/ps800_ms800.html) がついていることが多いと思います。この電子錠は玄関に近づいてボタンを押したら（もしくはカードリーダーにカードをかざしたら）玄関の施錠・解錠できるというもので、これ自体は便利なのですが、外出先から施錠されていることを確認したり、されていなかったら施錠するといったことができません。

我が家のインターホンはPanasonic製のインターホン（[テレビドアホン VL-SWD505KF](https://panasonic.jp/door/p-db/VL-SWD505KF.html)）がついており、外出先から[ドアホンコネクトアプリ](https://jpn.faq.panasonic.com/app/answers/detail/a_id/18936/~/%E3%83%89%E3%82%A2%E3%83%9B%E3%83%B3%E3%82%B3%E3%83%8D%E3%82%AF%E3%83%88%EF%BC%88%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E5%B0%82%E7%94%A8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%89) を使用してドアホンにアクセスでき、また、電子錠の操作もできる機種でしたので、ALPHA 電子錠の電気錠操作盤と接続することで、ドアホンのアプリ越しに施錠されているか確認でき、されていなかったら施錠するといったことができるようになりました。

![コントロールパネルとインターホン](/images/posts/smarthome/nitch.jpg)

接続には以下のものが必要です。

* [JEM-Aアダプタ VL-JY1](https://panasonic.jp/door/p-db/VL-JY1.html)
* 3線式ケーブル (JEM-Aアダプタ VL-JY1とインターホンの接続用)

3線式ケーブルはJEM-Aアダプタ VL-JY1の取扱説明書に記載されているので、それを参考にしてください。

施工完了し、インターホンで接続設定すると、 [ドアホンコネクトアプリ](https://jpn.faq.panasonic.com/app/answers/detail/a_id/18936/~/%E3%83%89%E3%82%A2%E3%83%9B%E3%83%B3%E3%82%B3%E3%83%8D%E3%82%AF%E3%83%88%EF%BC%88%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E5%B0%82%E7%94%A8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%89) から確認できるようになります。また、一定時間以上、解錠されていると、アプリ通知を飛ばすこともできます。

![施錠中](/images/posts/smarthome/doorphoneconnect.jpg)

ちなみにアプリの仕様として、無条件に遠隔解錠することはできません。便利が行き過ぎるとセキュリティ的にどうかなと思っていたので、個人的には良い仕様だなと思いました。

## 照明スイッチのIoT化

以前、住んでいた住居ではHueを使って、IoT化していました。同じ要領でいけるかなと思いきや、ダウンライトが多かったり、間接照明は対応する製品がなかったりするため、Hueを採用することはできませんでした。

電球ではなく、大工事することなく、スイッチをIoT化することができ、PSEもついている商品はないかなーと探していたところ、[アドバンスシリーズ リンクプラス](https://www2.panasonic.biz/jp/densetsu/haisen/switch_concent/advance/lineup/linkplus/) という商品を見つけました。

![アドバンスシリーズ リンクプラス](/images/posts/smarthome/switch.jpg)

スイッチを交換するだけで、[スイッチアプリ](https://www2.panasonic.biz/jp/densetsu/haisen/switch_concent/advance/lineup/linkplus/app/) からBluetoothでスイッチのON/OFFができるようになります。自分はベッドでゴロゴロしている状態から寝室の照明が消せればよかったので、これで十分... と思っていました。しかし、このスイッチアプリが遅すぎて、正直、使い物になりません。照明のON/OFFの反応が遅いのは構わないが、操作するために、アプリを開くことに10秒以上かかるのは、ちょっと...。ということで、スマートスピーカーから操作できるようにしました。

スマートスピーカーと連携するには追加で [リンクプラス用無線アダプタ](https://www2.panasonic.biz/jp/densetsu/haisen/switch_concent/advance/lineup/linkplus/wireless_adapter/) が必要です。アレクサやGoogle HomeではPanasonicの公式スキルを使うこことができますが、Apple HomeKit と連携する場合は、 [Homebridge](https://homebridge.io/) を使う必要があります。リンクプラス用無線アダプタは、ECHONET Lite の単機能照明クラス、照明システムクラスに対応しているので、それに対応したプラグインを使えば連携できます。（私は[@neerajbaid/homebridge-echonet-lite](https://github.com/neerajbaid/homebridge-echonet-lite) を使っています。）iPhoneユーザーとしては、Siriやコントロールセンターから操作できるのが便利すぎて気に入っています。

スイッチが1つ1.5万、リンクプラス用無線アダプタが2.5万ほどするので、スイッチひとつだけだと、かなりコスパが悪そうに見えてしまいますが、Hueだと電球単位でダウンライト1つ1.5万するので、寝室の4つの電球を交換するだけで6万はかかってしまいます。そう考えると、今後はスイッチ単位で増設できるリンクプラスのほうが実は安くつきそうです。

## 余剰電力とテスラ充電の自動連動システム

我が家は太陽光2.5kw太陽光パネルがついていますが、蓄電池はありません。最近の売電価格は新規契約でも16円/kWh程度で、買電単価の半分以下です。そのため、なるべく、売電せずに自家消費したい。ということで、余剰電力に応じてテスラの充電のON/OFFやアンペアを調整できるようにしました。

[tesla-home-powerflow-optimizer](https://github.com/sawadashota/tesla-home-powerflow-optimizer)

実装には、[Fleet API](https://developer.tesla.com/docs/fleet-api/getting-started/what-is-fleet-api) を使用していますが、レートリミットがかなり厳しく設定（読み取り: 200 requests / vehicle / day | 車両起動: 15 requests / vehicle / day | 充電コマンド: 5 request / vehicle / day）されており、なるべくAPIリクエストを減らすように調整をしているものの、それでも、結構な頻度でレートリミットに引っかかってしまうので、引き続きチューニングしていこうと思います。

![月の電力使用量](/images/posts/smarthome/total.jpg)

この仕組みを入れたことで、売電量が100kWh/月から40 - 50kWh/月に減り、7月は約1000円程度安くなりました。春秋は余剰電力が増えるはずなので、さらに効果的になるかもしれません。（Grafanaのグラフの数字が整合性取れていないのは御愛嬌...）

余談ですが、レートリミットを気にしながら、TeslaのAPIを叩くのではなく、[アドバンスシリーズ リンクプラス](https://www2.panasonic.biz/jp/densetsu/haisen/switch_concent/advance/lineup/linkplus/) から200Vに対応したスイッチが出れば、EVスイッチを交換するのでもいいのですが、残念ながらそんな商品はないようです...。


## 実現できなかったこと

### シャッターのIoT化

我が家のシャッターは文化シャッター製で、リモコン操作ができるものですが、問い合わせをしてみても残念ながらIoT化する方法が見つかりませんでした。スマートではないですが、[SESAME Bot 2](https://jp.candyhouse.co/products/sesamebot2)のような指ロボットでリモコン操作できるようにしようかなと思っています。

## おわりに

ソフトウェアエンジニアが第二種電気工事資格を取って自分の家をカスタマイズできると楽しいぞ！
