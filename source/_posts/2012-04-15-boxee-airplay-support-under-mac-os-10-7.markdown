---
comments: true
date: 2012-04-15 07:49:07
layout: post
slug: boxee-airplay-support-under-mac-os-10-7
title: Boxee Airplay Support under Mac OS 10.7
wordpress_id: 793
categories:
- Software
---

I had a few troubles getting Airplay to work under Mac OS 10.7. The solution is
to disable IPv6 on your Mac :( .

To do this, you have to open the terminal and enter this:

```
networksetup -setv6off Ethernet 
networksetup -setv6off wi-fi
```

After you restart iTunes, it will finally be able to connect to your Boxee.

Sadly the Boxee guys don't [want to fix this issue](http://jira.boxee.tv/browse/BOXEE-12755).
Disabling IPv6 is a very drastic move  :( .
