---
comments: true
date: 2017-10-14 18:00
layout: post
slug: legacy-javascript
title: "The jQuery legacy code team smell"
categories:
- javascript
- legacy
---
In the last couple of years I had lots of discussions with people about one
specific topic: what do you do with jQuery spaghetti code in legacy
applications. We all have been there in one point of our career. For me the
answer was pretty straight forward. There are three ways out of it. None of
them is easy, but the result will hopefully be worth it. There is only
one reason not to fix this problem: nobody needs to touch that part of the
application and it works fine as is. If you need to touch the code regularly,
you have to change something. But what? And how?

Usually the reason for that jQuery spaghetti code is that nobody in the team
is able to write good Javascript. Just switching the bad jQuery code with
bad React code will not help anybody. Paying an expert to replace the code
to use a modern Javascript framework will not help either. Your team needs to
get the knowledge to maintain the app and add new features.

It basically boils down to the following solutions:

## Teach them good Javascript

If you have a team of so called "full stack developers" where everyone is
supposed to write the frontend and the backend part of the application, figure
out a way that those developers are actually able to write frontend code.
Get someone to teach them a modern Javascript framework and have that person
available for at least a couple of months for code reviews. Getting everyone
up to modern standards will cost you a bit, but it is worth it. Just pointing
them to StackOverflow without someone to guide the team will not work. This is
basically why you probably ended up in the current situation.

## Throw out the Javascript

If your developers don't like Javascript at all and don't want to learn a modern
framework, just remove it. In 99% of the cases there is no actual reason
why you have that javascript in the first place. Most of it can be done with
[unpoly](https://unpoly.com/) anyway.

## Change the team structure

If you really need to have some features in Javascript and your current
developers don't want to touch Javascript, add Javascript developers to the
team. Make sure that all team members communicate well with each other and
understand what the different needs for each other are. The most important
part for you will be to make sure everyone works well together.
