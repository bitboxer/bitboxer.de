---
comments: true
date: 2012-06-21 05:19:58
layout: post
slug: terminal-can-i-haz-nice-welcome-image
title: Terminal, can I haz nice welcome image?
wordpress_id: 1028
categories:
- Development
---

During a presentation yesterday at the [cologne.rb](http://colognerb.de) [@railsbros_andi](https://twitter.com/#!/railsbros_andi) showed his terminal. It had a nice spiderman ascii art on top of the input line. This inspired me to investigate how to add a nice image when opening a new shell. 

My result looks like this:

![](http://bitboxer.de/wp-content/uploads/Bildschirmfoto-2012-06-21-um-00.37.27.png)

Now every time I open my shell, I am greeted by the joker. How cool is that ;) ? You can see the code behind that in [this commit](https://github.com/bitboxer/dotfiles/commit/4db662fcddfdf73728e65bd601be26b08977446b). 

But how did I do that? Luckily it was not that hard. After searching the web for possible image converters I found [icat](https://github.com/atextor/icat) on github. Simply install it and let it convert an image. Pipe that image to a text file and ``cat`` that at the start of your shell. Done.

`
brew install imlib2
git clone https://github.com/atextor/icat
cd icat
make
./icat ~/joker.png > ~/.dotfiles/logo.ascii
`

And now you have to find an image that you want to use :) .
