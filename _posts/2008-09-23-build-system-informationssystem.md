---
locale: de
comments: true
date: 2008-09-23 20:56:07
layout: post
slug: build-system-informationssystem
title: Build-System-Informationssystem
wordpress_id: 515
tags:
- Coding
- Linux
- Spielzeug
---

In [einigen](http://hudson.gotdns.com/wiki/pages/viewpage.action?pageId=20250625)
[Blogs](http://weblogs.java.net/blog/kohsuke/archive/2006/11/diyorb_my_own_e.html)
finden sich lustige Ideen, um den aktuellen Status der Quelltexte zu
visualisieren. 

Mit Hilfe von [Hudson](http://hudson.dev.java.net) sollte sowieso jeder
mindestens täglich die Software erzeugen und testen lassen. Den Status nur
versteckt auf einer Webseite und in EMail-Postfächern anzugeben reicht aber
manchmal nicht. Um dem ganzen richtig Nachdruck zu verleihen sollte man das
einfach mit Lampen im Flur darstellen.

Zum Glück kann man Hudson recht einfach erweitern und diese Funktionalität
hinzufügen. Bei [Last.fm](http://blog.last.fm/2008/08/01/quality-control) gbt
es neben den 3 Bären für den Status des Quelltextes auch noch zusätzlich eine
hübsche analoge Anzeige für die Last auf den Webservern...die Möglichkeiten
sind also schier endlos :smile: . 

So etwas zu basteln sollte nicht zu schwer sein. Man braucht eigentlich nur ein
[USB-Interface](http://www.conrad.de/goto.php?artikel=191137) mit dem
dazugehörigen [Linux-Treibern](http://sourceforge.net/projects/k8055d/). Mit
ein paar Zeilen Code kann man so die 8 digitalen und 2 analogen Ausgänge mit
Daten befüttern.
