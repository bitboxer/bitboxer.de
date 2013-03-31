---
comments: true
date: 2010-04-21 18:57:14
layout: post
slug: progressbar-in-ruby-console-scripts
title: Progressbar in Ruby console scripts
wordpress_id: 144
categories:
- Development
tags:
- Ruby
---

Yesterday I needed a little progress bar for a small ruby terminal script. Something like this:

![](http://bitboxer.de/wp-content/uploads/progress.png)

Sadly I could not find one, so I had to write it myself. 

You can install it with:

`gem install simple_progressbar`

The progressbar can't do very much at the moment. If you want to add more features, feel free to [fork it](http://github.com/bitboxer/simple_progressbar).

A small example for the gem:

`require 'simple_progressbar'

SimpleProgressbar.new.show("Installing stuff") do
  (0..10).each {|i|
    progress i*10
    sleep(1)
  }  
end`

