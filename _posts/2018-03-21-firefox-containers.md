---
comments: true
date: 2018-03-21 08:00:00
layout: post
slug: firefox-containers
title: "Cookies in Containers"
categories:
- Firefox
- Cookies
---
My privacy is important to me online. Because of that
I never surf without an [adblocker](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
and [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/).

Lately I added another layer of privacy protection. [Firefox Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/).
Firefox Containers started as a [Test Pilot](https://testpilot.firefox.com/experiments) project
and was moved to regular add on status.

What does it do? It basically creates little information bubbles that don't expose
data to the other. If you don't want amazon to follow you around on the net while
you read the news, create a container for news reading and one for shopping on amazon.
Everything that is put in container A does not have access to data stored in container B.
Need a different login for a page because of work? No problem, open it in another container titled "work".

After I combined this with three other add ons, I had what I always wanted. A system
that throws away most cookies after I leave the page that created them. It remembers
cookies for specific pages, but does not leak information to those sites when I 
surf the web.

I created a shopping container that openes automatically when I surf to amazon.com, but
amazon will not be able to track me when I surf on the web. Without the hassle of 
logging in to amazon each time I visit the site.

My browser will delete all data for 80% of the pages that I opened after I
close the tab. Only a handful of pages are opened automatically in specific
containers and keep their cookies.

My additional add ons are:

## [Switch Container](https://addons.mozilla.org/en-US/firefox/addon/switch-container/)

This add on makes it possible to switch the container for a page you have opened. This
helps me when I excitedly opened the page in the wrong container.

## [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/)

This add on is configured to throw away every cookie. With the exception that it does
not throw them away for specific containers.

## [I don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/i-dont-care-about-cookies/)

If you throw away all cookies all the time, you will see lots and lots of cookie warnings.
Luckily this add on will prevent them from showing up.
