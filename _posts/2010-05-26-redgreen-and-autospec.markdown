---
comments: true
date: 2010-05-26 06:30:54
layout: post
slug: redgreen-and-autospec
title: Redgreen and autospec
wordpress_id: 172
categories:
- Development
tags:
- autospec
- autotest
- rails
- redgreen
- Ruby
---

I use the redgreen gem for autotest to highlight errors in another color. Sadly
that broke my autospec:

``` bash
invalid option: --autospec
Test::Unit automatic runner.
Usage: -e [options] [-- untouched arguments]
```

If you want to use redgreen **and** have a working autospec, you should change
your `.autotest` file to this:

``` ruby
require 'redgreen/autotest' unless ENV['RSPEC']
```
