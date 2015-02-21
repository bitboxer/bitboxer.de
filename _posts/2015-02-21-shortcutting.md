---
comments: true
date: 2015-02-21 11:00
layout: post
slug: shortcutting
title: Shortcutting
categories:
- keyboard
image: /images/2015-02-21-shortcutting/shortcutting.jpg
copyright: "[CC-BY-NC-SA 2.0 Stephen Coles](https://www.flickr.com/photos/stewf/15151987409)"
---
In my [last post](http://bitboxer.de/2015/02/15/keyboard/) I promised a follow
up that explains the setup on my MacBook. And here it is.

For me typing is faster than using a mouse or a trackpad. Lifting the hand from
the keyboard and moving it to the mouse costs time and energy. Because of that I
am always trying new ways to remove the mouse cursor from whatever I do.

Maybe this article is an inspiration for you. And if you have more ideas, feel
free to ping me [on twitter](http://twitter.com/bitboxer).

# The layout

The german mac keyboard layout is problematic if you want to code. Things like {
[ ] } are hard to reach. Lots of developers I know switched to a US layout
because of that. I tried. But it's not for me. I hated to relearn the layout of
my keyboard. Because of that I did a trade-off. I swapped some keys on the german
layout in favour of the brackets. You can see my current layout in [this github
repo](https://github.com/bitboxer/de-coding.keylayout). If you want to create
your own layout, install
[Ukelele](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=ukelele)
and start playing around.

I also mod my keyboard using [Karabiner](https://pqrs.org/osx/karabiner) and
[seil](https://pqrs.org/osx/karabiner/seil.html.en). Ukelele is a nice tool, but
if you need more logic, you need to use those two. "[A modern space
cadet](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/)" inspired me to
play around with this. In my [current
configuration](https://github.com/bitboxer/keyboard) you will see that I remap
Caps Lock to Esc when pressing it only for a small amount of time and Ctrl when
pressing it longer. This sounds weird at first, but is really awesome when you
get used to it. My left Ctrl key is mapped to press Alt+Cmd+Ctrl at the same
time. This gives me another layer for shortcuts.

Sadly I also need to use Karabiner to switch the < and ^ keys on my keyboard.
The [WASD Keyboard](http://bitboxer.de/2015/02/15/keyboard/) is sending the
wrong keys for those.

# Helping hands

A custom layout is not enough. There are still too many things you need to use a
mouse for. Luckily there are lots of apps that help you to use your keyboard
instead.

[Alfred](http://www.alfredapp.com/) is my app launcher, calculator and a few
other things. I configured some custom workflows that are triggered by my left
Ctrl key. For example switching to chrome (left Ctrl+C) and my terminal (left Ctrl+I).

For moving windows I am using [moom](http://manytricks.com/moom/) right now. It
give me the possibility to define custom positions and bind keyboard shortcuts
to them. I won't say it's perfect, but most problems I have with these kind of
tools are based on missing APIs by Apple to do certain things.

Within chrome I am using
[vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)
to help me to navigate through a page and to open links with shortcuts. Pretty
neat little tool.

And as a final note: sadly you have to activate a setting in MacOS that enables
you to access all elements of a dialog with your keyboard. You will find it in
Settings > Keyboard > Shortcuts.

