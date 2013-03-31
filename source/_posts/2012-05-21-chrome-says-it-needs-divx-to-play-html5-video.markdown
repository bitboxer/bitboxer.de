---
comments: true
date: 2012-05-21 07:10:49
layout: post
slug: chrome-says-it-needs-divx-to-play-html5-video
title: Chrome says it needs divx to play html5 video?
wordpress_id: 924
categories:
- Software
---

Yesterday my chrome started to act strangely. On a few sites like [codeschool.com](http://codeschool.com) it showed an error explaining that it needed the divx plugin to play videos. At first I couldn't figure out why, but than I remembered that I installed the divx webplayer a few weeks ago and directly uninstalled it. 

I started to look for leftovers of that plugin. After searching for a little while I found it. Somehow the plugin was still in the chrome directory, but was not listed within chrome. Deleting its directory was the final fix for it.

`rm -rf "~/Library/Application Support/Google/Chrome/Default/Google/Chrome/Default/nneajnkjbffgblleaoojgaacokifdkhm"`

Never ever install the divx webplayer. It is not worth it :( .
