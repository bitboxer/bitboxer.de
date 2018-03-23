---
locale: en
comments: true
date: 2014-07-04 10:00
layout: post
slug: beanstalkd
title: beanstalkd
categories:
- talk
- presentation
- keynote
---
Yesterday I did a talk at the [Berlin Ruby Usergroup](http://berlin.onruby.de) about [beanstalkd](https://kr.github.io/beanstalkd/).

**A revolutionary idea: why not use a job queue system for your job queue?**

Most people use delayed job aka a database or resque/sidekiq for queuing. But why hack your way around a database or a "smarter memcache" to do a simple queue when there are other solutions that were build for this?

Beanstalkd is one of them. It's small. It's fast. It's awesome. And I show you why.

<script async class="speakerdeck-embed" data-id="73d8f510e5260131438f225375d05812" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
