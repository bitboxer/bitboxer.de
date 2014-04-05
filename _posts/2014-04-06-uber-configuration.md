---
comments: true
date: 2014-04-06 20:00
layout: post
slug: uber-configuration
title: Über configuration or how to drive your pair insane
categories:
- configuration
- pairing
---

![A toolbox](/images/2014-04-06-uber-configuration/toolbox.jpg)
([cc-by-nc-sa 2.0](https://creativecommons.org/licenses/by-nc-sa/2.0/) by [dk_spook](https://secure.flickr.com/photos/dk_spook/2421009077))


A lot of us love to configure our tools. It makes us
super efficient. At least we hope it does. Sometimes it's just
procrastination, but in most cases we really want to achieve something. We want
to be faster. Type less. Have more time for the important things. Don't want to
enter that long command again and again when we could [alias](https://github.com/r00k/dotfiles/blob/master/zsh/aliases) it to one character. Or bind it to a keyboard shortcut.

I can read other [dotfiles](https://github.com/bitboxer/dotfiles) for
hours and think about the implications of those settings to my daily
life. My most loved section in the [vim berlin usergroup](http://vimberlin.de)
is the "show us your .vimrc" part.

But there are consequences you have to think about when you change your
configuration.

Most of you now think of something like this:

> [@laktek](https://twitter.com/laktek) i don&#39;t like to change the default settings on any computer. i like to be able to start fresh with minimal fuss.
> 
> Chad Fowler ([@chadfowler](https://twitter.com/chadfowler)) [January 19,
2014](https://twitter.com/chadfowler/statuses/424901123045335040)

There is another consequence that is even more problematic. Your pair should be able
to use your computer (or the same shell as you) without struggling too much.
If you change your keyboard layout to [dvorak](https://en.wikipedia.org/wiki/Dvorak_Simplified_Keyboard)
and remap every setting in your editor, you might be more efficient in what you
do, but your pair will have problems using that highly specialized setup.

This breaks the "keep your pair happy" rule.

In a big way.

Or to put it in a more egocentric perspective: you loose the ability to work on
other computers that don't use your current setup.

Do I think that you should never change the default setting of your system? No.
But you need to think about the implication of each change you do on your system.

For me it comes down to four basic rules.

**Has this change implications for my pair?**

If this change is in an area I don't touch while paring, it's okay to add. E.g.
Mail.app settings, (most) browser extensions etc. .

**Is there a way I can do this without problems for my pair?**

If the change is in an area I use while pairing, it should not interfere with
the usual behavior. Don't remap a command to another one that is
doing something completely different. For example aliasing grep with ack. Usually you can
create another "namespace" for your new way of doing things. If this is not
possible:

**Can I add a switch to deactivate this setting?**

You love that new configuration that might confuse your pair? Than add a "pairing" mode where these settings are deactivated.
But don't forget to ask yourself:

**Do I cripple myself?**

This is the most important question. You should know how to use a system with
the default settings. That means you should know how vim works before you
configure the hell out of it. And you need to remember those ways for your
pairing session. If you learn a new tool, always try to learn it with it's
default settings first. If you memorize them, you can try to optimize for
speed. But never loose the ability to go back to those defaults.

Some companies have company wide dotfiles. For
example [thoughtbot](https://github.com/thoughtbot/dotfiles). I would call this
a "dotfiles" by committee approach. If everyone can agree on a subset of
setting, pairing is easy because everyone has the same setup.

And yes, I had to learn all this the hard way. But now I am 99.5% pair
compatible. I switched back to zsh, added a keyboard layout switcher, a way
to start vim with a plain vanilla setup and installed Sublime.

Sadly the reasoning above led me to the decision that I should not build a [vim foot pedal](https://github.com/alevchuk/vim-clutch), even though I really love the idea of having one :neckbeard: