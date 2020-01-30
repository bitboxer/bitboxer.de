---
locale: de
comments: true
date: 2008-06-05 21:16:42
layout: post
slug: swingx-ws-maven-repository
title: swingx-ws Maven Repository
wordpress_id: 463
categories:
tags:
- Coding
- GPS
- Java
- Maven
- OpenStreetMap
---

[SwingLabs](http://swinglabs.org/) is a great resource for everyone who wants
to make their java applications look as nice as possible. The main
swingx-package is available in the main maven repository using this dependency:

```
      org.swinglabs
      swingx
      0.9.2
```

But sadly [Swingx-ws](https://swingx-ws.dev.java.net/) is missing. At the
moment only weekly snapshots exist on the SwingLabs-Homepage.

Today I uploaded swingx-ws to my own little maven2 repository because it will
be used in a little application I am playing with :smile: .

You can add swingx-ws to your project with this lines:

```
      org.swinglabs
      swingx-ws
      0.1-SNAPSHOT
```

You have to add this repository to your project:

```
      wannawork
      http://stuff.wannawork.de/maven2
```

This little application is done in less than 20 Lines of Code:

![](/images/2008-06-05-swingx-ws-maven-repository/maproute.png)

Some Links about the map component:

  * [Building Maps into Your Swing Application with the JXMapViewer](http://today.java.net/pub/a/today/2007/10/30/building-maps-into-swing-app-with-jxmapviewer.html)
  * [Mapping Mashups with the JXMapViewer](http://today.java.net/pub/a/today/2007/11/13/mapping-mashups-with-jxmapviewer.html)
  * [Example Applet](http://maps.joshy.net/applet/fancyapplet.html)

