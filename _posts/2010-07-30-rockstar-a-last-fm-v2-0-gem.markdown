---
locale: en
comments: true
date: 2010-07-30 22:03:11
layout: post
slug: rockstar-a-last-fm-v2-0-gem
title: Rockstar - a last.fm api v2.0 gem
wordpress_id: 228
categories:
- Development
tags:
- Ruby
---

A few weeks ago I added the possibilty to [scrobble your viewed music](http://www.putpat.tv/news/2010-07-06-scrobbel-dir-einen-brandneues-lastfm-feature)
videos to [putpat](http://www.putpat.tv). 

Sadly I couldn't find a gem that could do that. John Nunemakers
[scrobbler](http://scrobbler.rubyforge.org/) gem is very outdated and does not
use the new authentification api. After searching through all available forks I
made the decision to create my own fork of the old scrobbler gem. That fork is
called [rockstar](http://github.com/bitboxer/rockstar).

I tried to made it compatible with the old scrobbler gem and added a few new
features. For example now it's possible to get a list of events for a certain
location:

``` ruby 
geo = Rockstar::Geo.new

# Get events for a location
geo.events(:location => 'london').each do |e| 
    p "#{e.title} at #{e.venue.name}"
end
```

If you are missing a certain api call just write me, I will add that asap.
