---
comments: true
date: 2016-02-07 13:00:00
layout: post
slug: opensource-tipping-point
title: OpenSource Tipping Point
categories:
- OpenSource
---
In the last couple of months there have been lots of people talking about
problems in OpenSource. And I think this tweet sums it up pretty well:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ancient Chinese curse: &quot;May you have a successful open source project.&quot;</p>&mdash; Justin Searls (@searls) <a href="https://twitter.com/searls/status/413734376137302018">December 19, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

But what exactly is the problem with successful open source projects? Why is it
so bad to have one?

Let me start with a small disclaimer. My perspective comes from a lot of
experience with a couple of projects I was lucky to be part of in my career.
Some of them a bit bigger, like [TV-Browser](http://tvbrowser.org), to really
small ones like [Git-Commit-Notifier](https://github.com/git-commit-notifier).

For me there are two kinds of OpenSource projects. Those run by companies and
those run by people in their spare time. Project run by companies have their
[own
issues](https://github.com/strongloop/express/issues/2844#issuecomment-171785075)
and because of that I won't talk about them here. I know that this distinction
is not easy to do. Lots of projects move from one group to the other or are in
between. But let's focus on the hobby OpenSource projects.

So why do you start to write code in your spare time? There are several reasons.
Most of the time it's to solve an issue that you see. A missing piece of
software, a task that could be automated. Or to finally work on something you
love after that 8 hour job writing code in a language you don't like. Some
people don't get why we do it. But on the other hand they also don't get why
some people collect smurfs. Everyone has their hobby. And that's how it should
be.

For 99% of the OpenSource projects out there life is pretty okaish. If you are
lucky you will get some pull requests once in a while. The project is solving
the issue you wanted to solve and you have fun while working on it. But for the
other 1% live can get really nasty.

With success you automatically face a few issues.

The first one is assholes. There are people out there that don't understand
that you work on that project in your spare time. That they are not entitled to
get any support from you. You don't have to implement features someone demands.
They haven't payed anything, you haven't promised anything.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Open source maintainers are people, too. Remember to thank them for the hard work they do for free!</p>&mdash; Lauren Tan ☠ (@sugarpirate_) <a href="https://twitter.com/sugarpirate_/status/687677545198829569">January 14, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

You might think that this is something we should take for granted. But sadly
not. [This example](https://github.com/plataformatec/devise/issues/3832)
demonstrates this pretty nicely. If you are really unlucky, like me, you attract
some lunatics that will hunt down your phone number and call you. At 2 o'clock
in the morning. And scream into the phone demanding something to be fixed by the
end of the day. Yes, this happend to me. At least once every other month during
my active time on TV-Browser.

The only solution to this is a Code of Conduct, pointing people to that and
closing the issues. Without a Code of Conduct you have no rules, nothing to show
them.

The second problem is the feeling of pressure. When people are starting to use
your little pet project and you have 100.000 users, it gets harder and harder to
release a new version or deploy your app. The little monster on your shoulder
will start to say "have I thought about everything?". You will get bug requests
and think "shit, now 100.000 users have this problem". The automatic reaction is
to jump to your computer and fix it. Because you feel that you have to. Your
users depend on you. And that is the ticket to burn out. Like
[here](https://github.com/rubysherpas/paranoia/pull/277).

Sadly there is no good solution for this. Some people develop a thick skin and
ignore it. Schedule their open source time into the calender. Or formalize the
development process with a team and roles. It all depends on the project and the
people participating in it. And yes, stopping the project is a valid option,
too. Your health and well being is way more important than helping 100.000 users
to fix this minor bug in your open source project.

The last important issue I see is money. I don't think in the way
[Nadia](https://medium.com/@nayafia/how-i-stumbled-upon-the-internet-s-biggest-blind-spot-b9aa23618c58#.7me9lec3g)
is. When I say money is an issue, I don't think in forms of revenue or salary.
Most open source stuff is done as hobby anyway. Sometimes a business comes out of it.
But for most this is not what they aim for. As I said, sadly hard to understand
for lots of people.

What I mean with money is costs. You build a library distribution system for
this little toy language. A year later that toy language is the hot shit and
people hammer your small private server. This is usually an interesting moment
for the community of that language. Is there someone willing to step up and pay
the servers that are needed? Who is responsible for this important
infrastructure of that new language? It would be awesome if there was an public
entity paying for those servers. Having that kind of service in the hand of a
private run company can be problematic. In the ruby world we have
[RubyTogether](https://rubytogether.org) for this. Which is awesome.

Sometimes I think that we should have something more global. A VC tax that goes
directly into an entity that pays the bills for all open source projects. I
know that this has issues, too...but one can still dream :wink:.

