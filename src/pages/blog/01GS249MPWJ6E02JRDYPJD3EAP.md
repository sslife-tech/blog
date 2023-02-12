---
layout: $/layouts/post.astro
title: "auひかりV×Dream Machine Special EditionでIPv6を利用する"
description: "auひかりV(5G)の回線で、Dream Machine Special Editionで構築したネットワークでIPv6を利用できるように設定する方法を紹介します。"
tags: [UniFi]
author: Shota
authorTwitter: xioota
image: /images/posts/udmse_ipv6/udm_se.jpg
date: 2023-02-12T06:16:46.557Z
---

![Dream Machine Special Edition](/images/posts/udmse_ipv6/udm_se.jpg)

[auひかりV(5G)]の回線で、[Dream Machine Special Edition] (UDM SE)で構築したネットワークでIPv6を利用できるように設定する方法を紹介します。

## 構成

構成は至ってシンプルで、HGWの後ろにUDM SEを置いています。

HGW(Aterm BL3000HM)はONUとルータが内蔵されており、そこからさらにUDM 
SEを置くと二重ルータとなってしまいます。2023年2月現在、UniFi製品はIPoEに対応していないので、auひかり以外にしたとしても5GbE/10GbEの環境でUniFiを使いたいなら、二重ルータは避けられないはず・・・

![構成図](/images/posts/udmse_ipv6/ipv6_arch.svg)

一応、各リンク載せておきます。

* [auひかりV(5G)]
* [HGW]
* [Dream Machine Special Edition] (UDM SE)


## HGWの設定

### [IPv6ルーティング設定](https://www.aterm.jp/function/bl3000hm/guide/web_ipv6route.html) でルーティングを追加

設定例

![WANの設定](/images/posts/udmse_ipv6/ipv6_routing.jpg)

* 宛先ネットワーク: `3ffe:ffff:1000::/64`
* リンクローカルアドレス: `fe80::1`
* インターフェイス: `LAN`

### [DHCPv6サーバ設定](https://www.aterm.jp/function/bl3000hm/guide/web_dhcpv6_serverset.html) 

「配布する情報」を「RA:プレフィックス配布 DHCPv6:プレフィックス/IPv6アドレス配布」に設定します。

![WANの設定](/images/posts/udmse_ipv6/dhcpv6.jpg)

## UDM SE

### InternetでIPv6をDHCPv6で有効化する

![WANの設定](/images/posts/udmse_ipv6/wan.jpg)

### NetworksでIPv6を有効化する

![WANの設定](/images/posts/udmse_ipv6/lan.jpg)

「DHCPv6/RDNSS DNS Control」は必須ではないですが、設定するとDNS6が有効化されます。IPv6のDNSは以下のサイトから探せます。

* https://blog.halpas.com/archives/4502
* https://www.osradar.com/the-best-dns-servers-with-ipv6-for-fast-surfing/

## 検証

以下のサイトにアクセスしてIPv6通信できているか確認してみましょう！

* https://test-ipv6.com/
* https://ipv6-test.com/
* https://www.kame.net/
  * IPv6でアクセスすると亀がダンスする。IPv4だと静止画像が表示される
* https://www.so-net.ne.jp/common/IPv6/
* https://www.iij.ad.jp/IPv6/ipv4v6.html
* https://www.so-net.ne.jp/common/IPv6/
* https://v6test.ocn.ne.jp/

[Dream Machine Special Edition]:https://jp.store.ui.com/products/dream-machine-se
[auひかりV(5G)]:https://www.au.com/internet/auhikari_10-5g/
[HGW]:https://www.au.com/support/service/internet/guide/modem/bl3000hm/