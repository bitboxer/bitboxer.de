---
locale: en
comments: true
date: 2017-08-06 17:00
layout: post
slug: ssh-with-clipboard
title: "SSH with clipboard support"
categories:
- vagrant
- clipboard
- linux
---
This week I stopped working full time on [SignDict](https://signdict.org) and
started a new job at [Wooga](https://wooga.com). Starting a new job often
means to adapt to new ways of working. One of the biggest changes for me is
that from now on I am working in a VirtualBox on a Debian system. That box
is setup using [Vagrant](https://www.vagrantup.com/) and relies heavily on docker
and other nice litte things.

One of the problems I had at first was the clipboard. I wanted to have a working
clipboard between my Mac and the ssh sessions on the virtual machines. After
tinkering for an hour I now have a working solution. I think this
could be valuable to others, so here it is :wink:.

First step:

Install `xorg` and `xsel` on your Linux boxes. If you prefer to
do it manually run this line:

```
sudo apt install xorg xsel
```

The clipboard will use the X11 protocol. Xsel is a nice command line util that
exposes this to you.

After that install
[Neovim](https://github.com/neovim/neovim/wiki/Installing-Neovim) and add the
following line to the config if you want to use the system clipboard for all
operations:

```
set clipboard+=unnamedplus
```

Neovim uses xsel to read and write to the clipboard.

Next up start install and start [XQuartz](https://www.xquartz.org/). It is important
to start it before you open the ssh sessions. I have added it to my startup elements
of my user on the Mac.

If you use vagrant add this line:

```
config.ssh.forward_x11 = true
```

After that you can use `vagrant ssh` to ssh to your box and have a working
clipboard in your Neovim on your linux boxes. You can also start the ssh client
manually using `ssh -X user@ip` to enable the X11 protocol.

You can also pipe to the clipboard using `echo "hello" | xsel -b` or read
it with `xsel -b`.

Small warning: you should only enable the X11 to trusted servers. Never allow
it for servers you don't have under your own control.

**Update:** If you also use tmux inside of your vagrant box, you might need
the [tmux-yank](https://github.com/tmux-plugins/tmux-yank) plugin to make it
all work inside of your shell.
