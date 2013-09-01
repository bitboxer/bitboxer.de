---
comments: true
date: 2011-11-27 08:01:14
layout: post
slug: how-i-survived-one-week-without-an-adblocker
title: How I survived one week without an adblocker
wordpress_id: 624
categories:
- Development
- Websites
---

Last week I did a little experiment. I tried to surf the net without an
activated adblocker. And I survived! Till then I never touched any site without
one. Exactly like you do. For over 10 years. And then I turned it off. To be
fair I have to say that I did not turn of the popup-blocker that is built into
chrome, but everything else was deactivated.

At first I was a little bit afraid of doing this. Will I still be able to read
my news, blogs and other content on the net? Will I see tons of click-overlays,
blinking flash adverts and other annoying stuff that made me install an
adblocker in the first place?

The first hour of surfing without an adblocker was eye opening. Advertisement
has learnt a lot in the last 10 years. And the site owners too. Most of the
sites changed from "ads right were the user is most annoyed to see one" into
"ads were they don't piss off the user". And most of the ads have learned that
lesson, too. 

In the second hour of surfing I did something I would not expect to do _ever_.
I actually clicked on an advert that interested me. It was the ad for a
computer game I wanted to buy. And after seeing the trailer on the ad-site I
bought it. To be fair I would have bought that game anyway and clicking on ads
was very rare in that week. There were only a handfull of ads I clicked on. And
most of them didn't interest me after I saw their site.

In the next few days I got the feeling that I was wrong in activating the
adblocker on all sites. Most sites do respect you and try to make money with
ads and think hard on where to place them. Sadly there were exceptions. Some
sites love to put a video ad in full browser window size that you have to click
away. With activated sound. But those were rare.

After the week was over I thought about activating the adblocker again, but I
felt I did not need it for most sites. I only want to punish sites that didn't
respect me and tried to do evil stuff with ads. Stuff that I think was not
okay. Like those full screen ads.

Sadly Adblock Plus, the adblocker of my choice, did not have a nice gui
interface for that "blacklist mode". If you know how to write the filter rules,
you could have the plugin only filter ads on certain sites. But I didn't want
to do that manually. So I forked the plugin and added that feature. The fork
can be found here:

[https://github.com/bitboxer/charma_adblockplus_chrome](https://github.com/bitboxer/charma_adblockplus_chrome)

If you clone that repo and load the plugin into your chrome, you can activate
the blacklist mode in the last tab of the settings panel. After that the
adblocker is deactivated on all sites and you can enable it for specific sites
with a click on the icon in the url bar.

And I really encourage you to at least try this for a few hours. The internet
can only be free if we allow ads. Only those few sites who do annoy you with
bad designed ads need to be punished. Not all sites.

**TL;DR**: Ads are not that bad like they used to be. Try to switch to an
adblocker that only enables adblocking on bad sites, not on all sites. I have
created a [fork](https://github.com/bitboxer/charma_adblockplus_chrome) of
adblock plus for chrome that does this.
