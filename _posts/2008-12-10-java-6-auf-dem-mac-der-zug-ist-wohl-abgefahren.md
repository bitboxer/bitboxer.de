---
locale: de
comments: true
date: 2008-12-10 08:14:40
layout: post
slug: java-6-auf-dem-mac-der-zug-ist-wohl-abgefahren
title: Java 6 auf dem Mac ? Der Zug ist wohl abgefahren
wordpress_id: 748
categories:
tags:
- Apple
- Java
- Mac
---

Mittlerweile sind es einige Monate her, seit dem ich mich zuerst über Java 6
auf dem Mac [gefreut](http://blog.wannawork.de/2008/04/30/na-endlich-java-6-fuer-mac/) 
habe um dann entsetzt festzustellen, das leider die Version 
[echt unbrauchbar ist](http://blog.wannawork.de/2008/05/01/java-6-on-mac-worst-release-ever/).

Nachdem ich nun neun Monate gewartet habe, habe ich am Wochenende mal probiert,
den TV-Browser auf dem Mac auf Java 6 zum laufen zu bringen. Leider ohne
erfolg. Es gab leider zwei sehr große Probleme:

  1. **Grafikfehler** - Die farbliche Hinterlegung von Sendungen funktionierte
     nicht vernünftig. Teilweise waren statt der gerade laufenden Sendung
     einfach alle Sendungen blau hinterlegt.
  2. **Abstürze** - Das war das schlimmere Problem. Alle paar Minuten ist die
     Anwendung abgestürzt mit einem Java-Core-Crashlog. D.h. einem Fehler in
     der Java Runtime.

Ich bin auch nicht der einzige, der diese Probleme hat. Beschwerden über diese
zwei Punkte gibt es überall im Netz.

Apple hat vor einigen Jahren damit geworden, das der Mac die beste Plattform
zum Entwickeln unter Java ist. Dies stimmte auch. Aber mittlerweile ist der Mac
eigentlich die letzte Plattform, auf der man Java entwickeln will. Schade. Sehr
schade.

[Soylatte](http://landonf.bikemonkey.org/static/soylatte/), der OpenJDK-Port
für den Mac ist leider auch (noch immer) nicht die erste Wahl als Ersatz. Es
ist einfach noch nicht so weit. Und wenn man sich ansieht, wie schnell es damit
geht, sieht es so aus, als ob das Projekt eine nette Idee war, aber nicht
wirklich fortgeführt wird :( .

**Update:** Anscheinend haben die Grafikfehler etwas mit den Abstürzen zu tun.
Die Anzeigekomponente des TV-Browsers provoziert irgendwie Crashes in der VM.
Die Methode fillRect, die Vierecke zeichnet, ist eventuell anfällig für
Abstürze unter bestimmten Randbedingungen :(

**Update 2:** Okay, das sollte nun gefixt sein. Danke
[Bananeweizen](http://www.ohloh.net/accounts/Bananeweizen)!
