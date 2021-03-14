---
locale: en
comments: true
date: 2021-03-14 00:00:00
layout: post
slug: three-things-you-mobile-api-should-have
title: "Three things your API for mobile apps should have"
categories: api
image: "/images/2021-03-15-mobile-api/image.jpg"
image_thumb: "/images/2021-03-15-mobile-api/thumb.jpg"
image_description: "A couple of mobile phones stacked upon each other"
copyright: Photo by <a href="https://unsplash.com/@halacious">HalGatewood</a>.
---
Every time I join a team as a freelancer I check a couple of things during my initial code review. Some are quite common, like:

* Is the onboarding document and README still up to date?
* Are the tests green?
* How much do they test?

...and many more.

Besides all those rather common checks I also check a few things regarding the design of the API (if the project has one). Most of the time there are some important things missing. For example, the following three things. 

## Decline too old clients

You always want to be able to see the version and type of your client. It’s nice to have for statistics, but also gets important if you want to introduce API breakage. You need a defined API response to force users to update the app. The app should get a return value that triggers a “Hey, this app needs an update to continue working“ screen. How you implement it depends on your API design. 

## Maintenance mode

You need a way to communicate a maintenance mode to your clients. The client then should show a warning or disable the app. Ideally, the app could continue to work, but that depends on what the app is about. As a bonus, you could show a message how long this maintenance will take, or show updates if this is an unexpected maintenance (for example because the [servers are on fire](https://www.reuters.com/article/us-france-ovh-fire-idUSKBN2B20NU)). Alternatively, link to a status page with further updates. 

## Communicate with the users

This is more optional than the two things above, but I found it rather useful. Build a way to communicate news to the users. Maybe as news section within the app, a popup dialog for urgent messages or something that fits your app design better. Having the possibility to inform about maintenance windows and to stay connected to your users reduces the bad reviews by **a lot**. Just make sure the news are not too spammy.