---
locale: en
layout: post
title: "My blog framework wishlist"
date: 2013-04-07T09:27:43+02:00
comments: true
categories: 
---
I am now using [Octopress](http://octopress.org) for my blog. Was it an easy
switch? No. Was it worth it? Totally. I love working in [Markdown](http://daringfireball.net/projects/markdown/).
Getting rid of the hack that was called a [Markdown Wordpress plugin](http://michelf.ca/projects/php-markdown/) 
made my day. 

Do I like [Octopress](http://octopress.org)? Yes and no. Yes, because now I 
can write my stuff in Markdown. No, because Octopress feels weird. 

* To install plugins, I have to manually copy ruby files into my blog and 
  add them to my repo. If I want to update them, I have to do that again.
* If the plugin needs stylesheets to do it's job, I have to copy those
  files into other directories.
* There are only a few themes, and creating new themes is not very easy.

Basically it feels like I am doing everything manually. Welcome to Pre-Wordpress
blogging.

I also looked at other static site generators, but they all had different flaws. The most
common one: they try to parse HTML as XML. Why this is a problem? Just look at the
embed code that vimeo is giving you:

``` html
<iframe src="//player.vimeo.com/video/16287115" width="650" height="366" 
  frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
```

Do you see the `allowFullScreen`? That's a [boolean attribute](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#boolean-attributes).
Yes, it is legal HTML code, but would break any XML parser.

Long story short: never ever parse HTML with a XML parser that can't handle that.

So, what does a good static site generator blog framework look for me?

Like this:

* Uses markdown
* Doesn't parse HTML output as XML inside of the framework
* Plugins as external references<sup>[1]</sup>. And plugins can bring css with them that can be 
  overwritten by the theme of the user
* Themes as external references<sup>[1]</sup>
* Possibility to overwrite parts of the theme (HTML, CSS, ...)
* Live preview with a local server
* Deploy via RSync and Github
* The layout should be rendered via Sass/Haml or CSS/Erb or ... (just make it pluggable :wink: )
* Can understand Timezones and doesn't render new URLs when I am in a different time zone.
* I18n support

**1:** For example as gems or github links

Do you know a blogging framework that does most of this? If yes, please add it as a comment!
