---
locale: en
comments: true
date: 2012-10-03 11:12:46
layout: post
slug: ruby-vs-python
title: Ruby -vs- Python
wordpress_id: 1294
categories:
- Development
---

![](/images/2012-10-03-ruby-vs-python/ruby-vs-python.png)

Ruby and Python. Two languages. Two communities. Both have a similar target: to
make software development better. Better than Java, better than PHP and better
for everyone. But where is the difference? And what language is "better"? For
the last question I can say: none is better. Both camps are awesome and do tons
of great stuff. But for the first question the answer is longer. And I hope to
provide that in this little article.



Is the difference in the toolset around the language? No, I don't think so.
Both have good package managers, tons of libraries for all kind of stuff and a
few decent web frameworks. Both promote test driven development. On the
language side one is whitespace sensitive, the other isn't. Is that so
important? Maybe a little, but I think there is something else that is way more
important. The culture. 

It all started with a stupid python troll at the
[Sigint](http://sigint.ccc.de/) that wanted to troll our
[cologne.rb](http://colognerb.de) booth. To be prepared for the next troll
attack I started to investigate Python. For that I talked with a lot of Python
guys and wrote a few little things in Python to get a feel for the language and
the ecosystem. Luckily at the [FrOSCon](http://froscon.org) our Ruby booth was
right next to the [pycologne](http://wiki.python.de/pycologne/) folks and we
talked a lot about the differences. During that time I got the feeling that I
know what is different in the culture of both parties. Last month I had the
opportunity to test my theory in real life. The
[cologne.rb](http://colognerb.de) and the [django cologne](http://djangocologne.de) 
folks did a joined meetup. And I took the opportunity to test my theory. And it
got confirmed by lots of the Python people.

Okay, now what is the difference in the culture? It is pretty easy. Python
folks are really conservative and afraid of change, Ruby folks love the new
shiny stuff even if it breaks older things. It's that simple. But it has huge
consequences. One you can see for example in the adaption of Ruby 1.9 vs Python
3. Both new versions did tons of breaking changes. A lot of code needed changes
to run on the new plattform. In the Ruby world the transition went pretty
quick. In the Python world it is very troublesome. Some Python people even say
that Python 3 is broken and all energy should be focused on the 2.x-branch of
the language. The Ruby community saw the opportunities. The Python community
only saw the update problems. Yes, there have been update problems in the Ruby
world, but we found an easy way to fix this:
[isitruby19.com](http://isitruby19.com/). A simple plattform that showed if the
gem is ready for 1.9. And if it wasn't and the gem was important, it got fixed
with pull requests or something similar. And the problems went away fast.

Both models of thinking have pros and cons. The Python world is more stable,
you can update your django installation without much troubles. But that also
means new technology is only added very slowly. The Ruby world loves changes.
So much that most of the "new stuff" in the Python world was tested in the Ruby
world first. We love changes so much that the Rails core is build around that
idea. You can easily change nearly everything and extend everything. Most of
the new stuff the Rails Core Team is testing right now for version 4 is
available as plugin for Rails 3. This is pretty interesting if you love new
things, love change, and love playing around with stuff. If you don't and hate
the idea of breaking changes, you maybe are better suited with the Python way.
But don't be afraid of breaking changes. They are all pretty well documented in
the release guides. It's not voodoo.

I for myself love the Ruby mindset. Something like Rails or Asset Pipelines or
all the other things would not be possible if we are stuck with "no, don't
change that, it works pretty well that way". Someone has to be the leader.
Someone has to play around with new ideas. Yes, some ideas won't fly, some are
removed pretty quickly. But at least we tried them. Yes, I know that some
people prefer the conservative way. If you consider yourself to be like that,
you should at least try Python. I stay with Ruby.
