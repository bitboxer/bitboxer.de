---
comments: true
date: 2014-10-26 20:00:00
layout: post
slug: teaching-ruby
title: Teaching Ruby
categories:
- ruby
- railsgirls
- lotus
---
I helped to tutor on a few [RailsGirls](http://railsgirls.org) Workshops in the
last two years. After one of the workshops at the beginning of the year I
formed a weekly learners group with my Co-Coach
[Jan](http://unexpected-co.de/).  Sadly we could not find a curriculum to use
as a starting point for our group, so we improvised one.

In this post I will try to explain what we did.

# First steps

Most of the people in our group had done the RailsGirls Workshop. They had lots
of energy to start writing webapps. During the Workshop they wrote a little
webapp that let them create entries, upload images and show the list of items.
But most of it is just copy and paste. Not really understanding what is going
on.  That's okay. This is the whole point of the workshop. To ignite the wish
to learn more. And it works perfectly.

But for a real course you need to start from the beginning. And give everyone
enough time to understand everything. And because of that we needed to start
with ruby before we could dive into creating websites with HTML, CSS and all
the other things that you need to know for that.

We decided that the best thing to start with was to use the [codecademy ruby
track](http://www.codecademy.com/en/tracks/ruby) as an outline.

Every week we would teach a topic and let the students do the course for that
topic as a homework. At the beginning of each lesson we did a little recap to
make sure everyone understood everything. And if not, we would just try to
recap it.

# Sheeps, it's all about sheeps

After we went through the course we thought we need something to strengthen the
knowledge before going on. We only had puts and the console at this point. But
we wanted to have something that is funny enough to keep everyone interested.
We needed a little game.

We called it our sheep simulator. For this we created a field with grass on it
and sheeps that moved on that field. Every time the sheep touched the electric
wire that surrounds the field they lost a point. After that was finished we
added a wolf that tried to kill the sheep.

With the help of emoji it looks like this:

![Sheeps](/images/2014-10-26-teaching-ruby/sheeps.png)

Not bad for the first real programm, right :wink: ?

# Web is where the people are

After we had a solid base of ruby, it was time to dive into the world of the
wide web.  A lot of people advise to start with something like
[Sinatra](http://www.sinatrarb.com/) and not full blown Rails. Rails is too
overwhelming for beginners. All those files and concepts are very hard to
understand if you just started writing little programs. With the help of
Sinatra you could teach the communication part first and than move to Rails for
the next steps. Sadly that means you have to learn Sinatra first and than
another framework for the next phase.

Luckily there is a better solution. It's called [Lotus](http://lotusrb.org/).
This framework is really new, but ideal for teaching. Lotus consists of loosely
coupled gems that only deal with one part of the stack. Because of that you can
start with a small router, teach how the browser requests work and add more
stuff later on. Week after week we add another component and grow our little
app into a real website. We simply add another lotus gem and add that feature
to our codebase. There is no need to distract our students with files and
concepts that they don't understand (yet). After the router we added
controllers, than views and templates and after that models.

And since the core concepts are relatively similar to Rails, we will be able to
do the switch to Rails after we trained everything. Our students will know how
MVC works by focusing on one part at a time. Really awesome.

So this is what we did so far. What do you think? How do you teach ruby to
beginners?

