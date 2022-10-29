---
layout: $/layouts/post.astro
title: UniFiで始める自宅ネットワーク入門
description: "今年に入ってからスイッチや防犯カメラなど、ものすごい勢いでUniFi製品を買い揃えています。どのUniFi製品をどう使っているのかをご紹介します。"
tags: ["UniFi", "自宅環境"]
author: Shota
authorTwitter: xioota
image: /images/posts/unifi_01.jpg
date: 2020-09-22T09:26:11.271Z
---

引っ越しや車の購入が相まって今年に入ってからものすごい勢いでUniFi製品を買い揃えているので、何をどう使っているのかご紹介したいと思います。

## UniFiとは

UniFiはネットワーク製品を販売しているアメリカの会社で、基本的に業務用ですが、一定クオリティ以上のネットワーク機器を自宅に導入したい人にもおすすめです。

[https://unifi-network.ui.com/](https://unifi-network.ui.com/)

WiFiだけでなく、防犯カメラや電話、アンテナ、ドアベルなども販売しており、それらをまとめてUniFiのネットワークで管理でき、データはサブスクリプションではなく、専用のローカルストレージを買い切りで使えるのが特徴です。
また、管理画面はローカルネットワークだけでなくインターネット越しにも接続できますが、これらのソフトウェアも無料で使用できるのが魅力です。

![ダッシュボード](/images/posts/unifi_04.jpg)

本家ではいろいろ売っていますが、日本のストアで購入できる製品はWiFi、防犯カメラ関連のみです。

[https://jp.store.ui.com/](https://jp.store.ui.com/)

ここにないものが欲しい場合は大抵、[ebay](https://www.ebay.com/) で探すことになります。

## 我が家に導入した製品

![UDMとPoE SwitchとCloud Key Gen2](/images/posts/unifi_01.jpg)

* [UniFi nanoHD Access Point](https://store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd-us)
* [UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)
* [UniFi Switch PoE 8 (150W)](https://store.ui.com/collections/unifi-network-routing-switching/products/unifi-switch-8-150w)
* [UniFi Protect G4-Bullet Camera](https://store.ui.com/collections/unifi-protect/products/unifi-protect-g4-bullet-camera) x 2
* [UniFi Cloud Key Plus](https://store.ui.com/collections/unifi-protect-nvr/products/unifi-cloudkey-gen2-plus)
* [NanoSwitch](https://www.ui.com/accessories/nanoswitch/) (未設置)
* [UniFi Protect G4 Doorbell](https://store.ui.com/collections/unifi-protect/products/uvc-g4-doorbell) (未設置)

いっぱい買ったなー・・・

## 賃貸時代に購入した[UniFi nanoHD Access Point](https://store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd-us)

1LDKのマンションに住んでいたときに購入し、単体で使ってました。今では3階建の戸建ての1Fのアクセスポイントとして使っています。

買った当時に住んでいた1LDKのマンションは1日に何回か接続が切れることがあり、その前に使っていたBuffaloのルーター（型番は忘れた）ではネットワークは復活してるのに再接続に時間がかかったり、自動で再接続してくれなかったり、自宅で仕事をするにはちょっとイライラしてました。
これを[UniFi nanoHD Access Point](https://store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd-us)に置き換えると、瞬断後の復帰が早くなって快適になりました。（これはUniFiが良いというより、そのマンションの回線とBuffaloのルータの問題だと思いますが...）

また、これをベトナムのマンションで備え付けのルータと交換したらかなり早くなったので、海外で回線が遅いと言ってる方はルータがボトルネックになってる可能性があるので、試してみる価値があるかもしれません。

## 戸建てなら[UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)がおすすめ

ただ、現在、もしくは近い未来に広い家に住むのであれば、1台目は[UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)がおすすめです。

[UniFi nanoHD Access Point](https://store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd-us)はただのアクセスポイントですが、[UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)はスイッチとしての機能やセキュリティゲートウェイなど、これ一台で一通りの機能を備えています。
[UniFi nanoHD Access Point](https://store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd-us)では2.4GHzがワンフロア内のみ行き届きますが、[UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)の場合は3階建ての戸建てでも、2階に設置すれば家中どこでも繋がります。

ただ、せっかく持ってるので、1階にアクセスポイントを設置して5GHzを拾えるようにしていますが、寝室で高速通信するために頑張らなくていいので、多くの人はこれ一台でWiFiは十分かもしれません。

## 角地の駐車場に防犯カメラは必須

我が家は角地でかつ車をガードできる仕切りを設置できるほどのスペースがありません。当て逃げが怖いのもあって、角にポールと防犯カメラを設置することにしました。

防犯カメラは [UniFi Protect G4-Bullet Camera](https://store.ui.com/collections/unifi-protect/products/unifi-protect-g4-bullet-camera) という製品がありますが、これ単体では動かないので、[UniFi Cloud Key Plus](https://store.ui.com/collections/unifi-protect-nvr/products/unifi-cloudkey-gen2-plus)も買う必要があります。ちょっと高く感じますが、1TBのストレージ付きなので、ストレージをクラウドに持ってサブスクリプションしたり、MicroSD
も大容量だとそこまで安くないので、総合的に考えると悪くなくないよう感じます。

カメラはPoE、[UniFi Cloud Key Plus](https://store.ui.com/collections/unifi-protect-nvr/products/unifi-cloudkey-gen2-plus
)はPoEまたはQuick Chargeなら電源供給できますが、わざわざQuick Charge対応のアダプタを買い揃えるくらいならPoE対応のスイッチを買ったほうがいいでしょう。そこで購入したのが[UniFi Switch PoE
 8 (150W)](https://store.ui.com/collections/unifi-network-routing-switching/products/unifi-switch-8-150w
 )になります。これがあれば、電源供給とネットワーク接続が1口にまとめられるので配線が減りますし、個々で電源供給しようにもアダプタがそこまで安くないのです・・・
 
### カメラは2台設置しかし・・・

俯瞰して見る用と車のナンバーを見るためのカメラの2台を設置することにしました。

屋内にある[UniFi Switch PoE 8 (150W)](https://store.ui.com/collections/unifi-network-routing-switching/products/unifi-switch-8-150w) に接続している [UniFi Protect G4-Bullet Camera](https://store.ui.com/collections/unifi-protect/products/unifi-protect-g4-bullet-camera) ですが、屋外に出すにあたってできるだけ家に穴をあけたくなったので、光回線が通っているCD管を通してLANケーブルを外に出すことにしました（ここでLANのコネクタをかしめるためのアイテムが新たに必要になる）。LANケーブルは屋外用のものを買ったので結構太め。そうすると2本目のLANケーブルが途中でせまくなってるCD管を通らない・・・。いや実際には通ったんですが、もっと伸ばして違うところに設置したいんですが、これ以上引っ張るのが怖いので2本通すのは諦めることに。

そこで、屋外用のスイッチである[NanoSwitch](https://www.ui.com/accessories/nanoswitch/) を買うことに。本家のストアにすら掲載がなかったのですが、なぜか日本の[Amazon](https://amzn.to/363xxTP)で購入できました。まだ到着待ちですが、これでCD管の中を通るのは1本になって、屋外のスイッチから最大3本のPoE接続ができるはず。

現在は暫定的にこんな感じでついてます。

![防犯カメラ](/images/posts/unifi_02.jpg)

### 早速ポール当て逃げ

駐車場にポールを設置した当日、外からなにやら大きい音がしたので見てみると、ポールが擦れてました。

![駐車場のポール](/images/posts/unifi_05.jpg)

まぁ外用なので、汚れるのはいいんですが、コンクリが乾いてなかったのでコンクリが割れてポールが内側に傾いてました。ので、やり直しコースです。悲しい。

防犯カメラで見てみると、当たってる瞬間と音を捉えていましたが、日が暮れていたのもあって設置した2台では動いてる車のナンバーはわかりませんでした。しかし、このときはたまたま[Ring](https://shop.ring.com/products/video-doorbell-3-plus)が違う角度から、ちょうど止まったところを捉えていて、ナンバーがわかりました。防犯カメラではわからなかったのになぜかドアベルのモーションセンサーで録画されてたのが決定打に。

昼間であれば動いていてもはっきりナンバーは見えるのですが、夜、動いてる車のナンバーを捉えるのは難しい・・・角度の問題もあると思うので試行錯誤して、だめだったら一番いいスペックの[UniFi Protect G4-PRO Camera](https://store.ui.com/collections/unifi-protect-cameras/products/unifi-protect-g4-pro-camera)を検討します。決定的瞬間は捉えても犯人が割り出せなきゃ意味ないですからね。

### ドアベルもUniFiに (未設置)

当て逃げ犯特定に大いに貢献した [Ring](https://shop.ring.com/products/video-doorbell-3-plus) ですが、少なくとも日本で使うにはいくつか難点があります。

* チャイムが鳴ってから接続が遅いことが多いし、たまにタイムアウトっぽくなってる
* バッテリー式だと1ヶ月持たずに要充電（有線は日本ではAC/ACアダプタとつなげればいける。バッテリーで動く分、他の海外ドアベル製品と比べると優れてはいる。）
* 30USD/year払わないと映像が保存されない（60日間）。無料はリアルタイムのみ
* Alexaと連携できるっぽいが日本ではできない？

特に一つ目の接続に時間かかるのが致命的です。Ring購入直後、発売されたのが [UniFi Protect G4 Doorbell](https://store.ui.com/collections/unifi-protect/products/uvc-g4-doorbell) です（悔しい）。こちらはRingと比較して

* 有線のみ（これもAC/ACアダプタでいけそう）
* 映像は[UniFi Cloud Key Plus](https://store.ui.com/collections/unifi-protect-nvr/products/unifi-cloudkey-gen2-plus)に保存できる

といった感じです。まだ届いてないので、このくらいしかわかりませんが、Ringで課題だった通信問題はUniFiはネットワークの会社だし、ローカルネットワークもうまく使って高速化している部分もあるようなので、そこに期待・・・！

（実際、買い換える本当の理由は私がいろいろいじって遊んでたら、壊れてしまい、外の音を拾えなくなってしまったからです。）

## まとめ

とりあえず[UniFi Dream Machine](https://store.ui.com/collections/routing-switching/products/unifi-dream-machine)を買おう！
