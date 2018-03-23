---
locale: de
comments: true
date: 2005-07-31 14:07:04
layout: post
slug: daap_server_for_itunes_on_suse_9_3
title: daap Server for iTunes on Suse 9.3
wordpress_id: 85
tags:
- Linux
- mt-daapd
---

I created a Suse 9.3 RPM-Package for [mt-daapd](http://www.mt-daapd.org).

Mt-daapd is a daap-Server. With a daap-Server it's possible to auto-share your
Music on your Server with every iTunes in your Home-Network. I use it to share
my Music with my iBook. Never copy Music or see unplayable Music (if the share
is not mounted) in your Playlist again :smile: .

Simply start the Service and you will see the Music in your iTunes.

**Download:**

[mt-daapd-0.2.1.1-1.suse93.i586.rpm](/images/2005-07-31-daap_server_for_itunes_on_suse_9_3/mt-daapd-0.2.1.1-1.suse93.i586.rpm)

(Beware: This is my first self created RPM :wink: )

**Installation:**

Install the rpm, change the mp3_dir in `/etc/mt-daapd.conf` to your
Music-Directory and startup the Service via Yast.
