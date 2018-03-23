---
locale: de
comments: true
date: 2008-03-14 17:29:54
layout: post
slug: timemachine-bei-10-5-2-auf-einem-samba-s
title: TimeMachine bei 10.5.2 auf einem Samba-Share arbeiten lassen
wordpress_id: 404
categories:
tags:
- Mac
- Tipps und Tricks
---

**Achtung:** bitte ganz unten die letzten Kommentare lesen.

Nach meinem Update auf 10.5.2 funktionierte mein TimeMachine nicht mehr
korrekt. Es hat nur noch sporadisch Backups gemacht. Zum Schluss hat es gar
keine mehr machen können. 

Aber ich habe jetzt Dank
[Jan](http://www.blogadresse.de/2008/03/14/time-machine-will-nicht-mehr/)'s
Blogeintrag ein wenig weiter gegraben und dann in Konsole die Fehlermeldung
"backup failed with error: 20" gefunden. Damit habe ich dann
[diesen Thread](http://discussions.apple.com/message.jspa?messageID=6612269)
gefunden.

Die Lösung ist nun:

* Backup auf Samba-Netzwerklaufwerken ermöglichen. Dazu im Terminal folgendes
  eingeben:

`defaults write com.apple.systempreferences TMShowUnsupportedNetworkVolumes 1 `

* Eine .sparsebundle Datei anlegen und auf das Netzwerklaufwerk kopieren. Dazu
  im Terminal das hier eingeben:

`hdiutil create -size 90G -fs HFS+J -type SPARSEBUNDLE "MACNAME.sparsebundle"`

* Aber Achtung! Statt MACNAME den Namen des Macs eingeben. Bei mir war das "Bodo
  Tasches MacBook Pro 15".
  
  Nachdem die Datei erstellt wurde, diese dann kopieren.

*  TimeMachine sagen, dass es das Netzwerklaufwerk benutzen soll.

Fertig.
