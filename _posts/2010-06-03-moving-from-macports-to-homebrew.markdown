---
comments: true
date: 2010-06-03 07:04:29
layout: post
slug: moving-from-macports-to-homebrew
title: Moving from MacPorts to Homebrew
wordpress_id: 179
categories:
- Software
tags:
- Homebrew
---

Using MacPorts? You should really think about moving to
[Homebrew](http://mxcl.github.com/homebrew/). Why?

  * Homebrew  installs packages into their own isolated prefixes and then
    symlinked into /usr/local.
  * It uses the libs that are already installed, no need to compile another
    perl, openssl or x11 and other stuff that can be found on your mac. Don't
    waste time and disc space.
  * Way better command line user interface
  * Homebrew and it's installation scripts are hosted at
    [Github](http://github.com/mxcl/homebrew)
  * The installation scripts (aka recepies) and Homebrew itself are written in
    ruby.

Moving from MacPorts to Homebrew sounds a little bit scary. MacPorts has tons
of compiled stuff on your system. But you can do this. Trust me :) .

First, uninstall MacPorts:

``` bash
sudo port -f uninstall installed
```

Second step: remove everything that is left from MacPorts (_check for MySQL and
other stuff in /opt/local first_) :

``` bash
sudo rm -rf /opt/local
sudo rm -rf /Applications/DarwinPorts
sudo rm -rf /Applications/MacPorts
sudo rm -rf /Library/LaunchDaemons/org.macports.*
sudo rm -rf /Library/Receipts/DarwinPorts*.pkg
sudo rm -rf /Library/Receipts/MacPorts*.pkg
sudo rm -rf /Library/StartupItems/DarwinPortsStartup
sudo rm -rf /Library/Tcl/darwinports1.0
sudo rm -rf /Library/Tcl/macports1.0
sudo rm -rf ~/.macports
```

Alternatively you can move those directories to another place and delete them
if everything is okay (if you don't trust your Timemachine ;) ).

After that you should remove the `/opt/local/bin`  from your `$PATH`.

Now install Homebrew with the command you find
[here](https://github.com/mxcl/homebrew/wiki/installation).

Yeah! You can now start install packages like wget with

```
brew install wget
```

There is only one little catch: if you have installed ruby gems that depend on
libs from your MacPorts directory, you have to recompile them. I had to
recompile my rmagick gem because it used the now deleted ImageMagick from
MacPorts.
