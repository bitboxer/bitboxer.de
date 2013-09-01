---
comments: true
date: 2012-09-01 13:09:02
layout: post
slug: in-wich-i-rant-about-developing-on-android
title: In wich I rant about developing on Android
wordpress_id: 1163
categories:
- Development
---

The last two weeks I started to develop an Android app for a showcase
[putpat.tv](http://www.putpat.tv) is doing at the
[IFA](http://www.ifa-berlin.de). If you follow me on
[Twitter](http://twitter.com/bitboxer) you have noticed a few rants about
Android development.  For example this one:

<blockquote class="twitter-tweet"><p>Developing Android vs iPhone is like developing PHP vs Rails. Just creepy to think that android is from Google. Why Google, why?</p>&mdash; Bodo Tasche (@bitboxer) <a href="https://twitter.com/bitboxer/status/240685187686625280">August 29, 2012</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

At first I thought I was doing it wrong. It couldn't be that bad as I
felt it to be, right? But during the last weeks I talked with a few
Android devs and the conversation always went like this:

**Me:** Oh man, Android development sucks!    
**Other:** I don't know what you mean, it is pretty easy to develop apps.    
**Me:** Do you use the graphical gui editor?    
**Other:** No, that thing is broken, you have to edit the xml files by hand.    
**Me:** WTF?!
<!-- more -->

Strangely most Android devs find it totally okay for their IDE to be
completely broken. Xcode might not be the best IDE, but at least the
GUI Editor is working perfectly ;) . And even worse: if the GUI editor
would have worked as it would have ment to be, it would be a complete
usability fuck up. Why? Because Google decided to go the complete Java
way, which can be described as this:

> Java is a language to compile XML into bytecode

Basically the gui description language is XML. Sadly since the editor for
that is broken, you have to write it all by hand. And you have to write lots
of it. In tons of files. Oh, you need a nice border around this element?
Go ahead, add a new XML file and reference it in this xml file which
is referenced in another xml file and that other file is combined with
several other style, border and whatever definition xml files. Stuff
which I can do in Xcode with a little click in the properties pane of
that ui component is cluttered into 3 xml files I have to create.
Manually. Would the GUI editor work as expected, it would help me to
create those files, but basically it would open a wizard to create
those. No easy one click solution available. Because of that huge
amount of time you have to spent creating xml markup, it is pretty time
consuming to create good looking apps. This whole XML "solution" is also creating
another big problem. Because of the Android markets inconsistency you can't
develop your app for one fixed aspect ratio nor screen size. Your app has to
adjust to the different screen sizes of different devices of lots of manufacturers.
There are basically two solutions Google is offering you. And both suck.

1. Create a new layout for each new screen size and/or aspect ratio. This
   sucks because creating that layout XML is pretty hard and time consuming
   work. Added a new button? Go ahead, add it to all those different
   resolutions. Hurray.
2. Making the GUI scale for itself and create only one XML file. This sadly
   sucks because you have no easy GUI tool to define the scale behaviour
   for each component like in Xcode. You have to think hard and write the xml
   properties in the XML file by hand. And than check it on the different devices.
   Manually.

Pixel perfect layouts on Android devices? Forget it. You simply can't.
Your GUI designer will not be very happy with the end result. Gaps where
no gaps should have been, text not sitting perfectly where it belongs.
And I even did not start to rant about the font rendering issues I saw
and other stuff :( .

Animations? On iOS you have something called CoreAnimation. On Android
there is nothing that even comes close to that. Transitions for
different states of your ui components? 3 Lines of Objective-C code. Forget
that on Android. You have to write the animations by hand.

It is pretty easy to create really good looking apps with a few
clicks on iOS devices. On Android you need to invest more time into that. Way more.
That's the reason why iOS apps look better than Android apps. It is just
easier to build them. Google, if you want to have good looking apps on
your market store, fix that stuff.

Another weak spot is the lack of a good dependency managing solution. Yes,
there is Maven. And yes, you could invest 20 minutes to create a Maven
file for your Android project, BUT it is not working very well with the
way the Eclipse Android stuff is expecting the file layout. On iOS we
have [Cocoapods](http://cocoapods.org/). Okay, it is a very new thing, but at least there is a
decent solution. One with a nice centralized repo. Missing the Facebook
framework? Just enter `pod search facebook` and you will get a list of
packages you can use. Add one of the packages to your `Podfile`, enter
`pod install` and you are done. Your Xcode project now has all the
dependencies for that Library. In the Java world you have to google for
the jar, check if there is a maven repo somewhere that holds that jar
and if you are lucky that repo is working and you can fetch the stuff
from there. It is very strange that maven is still having the same
problems it had 7 years ago. In the Ruby world we have [rubygems.org](http://rubygems.org). A
nice centralized repository where you basically find everything.
Why is there nothing like that for Java? Because of all that
a lot of Android users just copy and paste jars around and do the
dependency stuff by hand. Or worse: copy and paste Java code snippets
around. Oh boy. World of pain.

The biggest problem I had as a guy who tried to learn the stuff was the
pure amount of idiots in the Android developer scene. Or to be fair: the
amount of idiots posting their so called solutions on StackOverflow. If
you search for Objective-C or Ruby stuff, you have a few morons that post
worst practices. But compared to the huge amount of morons posting in
the Android world I am living in a pretty nice place ;) .

In the end I managed to create an app that was decent enough to show it on the IFA.
Go see it on the Samsung booth :) . Basically it is an remote for your putpat.tv app on the
Samsung TV. Developing the communication between the tv and the android app was
really easy and I hope we will transform that into a full app in the near future.
