---
comments: true
date: 2010-04-18 15:05:05
layout: post
slug: chrome-passwordmaker
title: Chrome Passwordmaker
wordpress_id: 123
categories:
- Software
tags:
- Chrome
---

![](/images/2010-04-18-chrome-passwordmaker/Bildschirmfoto-2010-04-18-um-16.04.36.png) 

There are three options to create passwords for websites:

  * Use one password for all sites. This is stupid and very dangerous. Don't do
    this.
  * Create a password for each site you visit and remember them somehow. There
    are a lot of tools to help you with this and store all passwords for all
    sites.
  * Use a hash algorithm to create a unique password for each site. This is not
    as safe as the 2nd method, but more convenient.

I used the 3rd method using a plugin for Firefox called "Passwordmaker". Since
I switched to Chrome, I couldn't use that anymore. Searching in the chrome
extension library showed one extension that used the passwordmaker hashing
algorithm, but sadly that one was a bad joke. It simply wrapped a html page
into a chrome extension. It was barely usable. A perfect opportunity to learn
how to write extensions for chrome :) . If you want a good chrome password
generator, you can now find my version in the chrome extension library.

[Install it now](https://chrome.google.com/extensions/detail/ocjkdaaapapjpmipmhiadedofjiokogj).

The code for the extension can be found on
[github](http://github.com/bitboxer/chrome-passwordmaker).
