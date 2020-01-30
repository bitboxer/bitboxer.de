---
locale: de
comments: true
date: 2008-06-12 17:53:57
layout: post
slug: i-blue-747-mit-mac-nutzen
title: i-Blue 747 mit Mac und Linux nutzen
wordpress_id: 469
categories:
tags:
- bluelog
- GPS
- Linux
- Mac
- OpenStreetMap
---

Ich habe gestern endlich meinen [GPS-Tracker](http://blog.wannawork.de/index.php/2008/05/29/openstreetmap)
bekommen. Nach ein bisschen googlen und experimentieren habe ich den [i-Blue 747](http://www.transystem.com.tw/p-gps-iblue747.htm)
auch unter Mac und Linux zum laufen gebracht.

Um den Tracker zu nutzen, muss einfach [der Treiber "CP210x USB to UART Bridge "](http://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
installiert werden. Unter Ubuntu ist der Treiber praktischerweise schon mit im
Kernel integriert.

Danach zuerst den Tracker in den Modus "Navigation" stellen und dann mit dem PC
verbinden. Das Betriebssystem legt dann ein neues serielles Device an, das man
mit unterschiedlicher Software ansteuern kann.

Alternativ müsste das ganze auch per Bluetooth funktionieren, dann muss man das
Gerät per Bluetooth verbinden und ein serielles Device dafür anlegen.

Jetzt muss man nur noch die Daten von dem Tracker runterladen. Momentan nutze
ich dafür die Test-Version von [Mac Travel Recorder](http://www.mrose.nl/mactravelrecorder/index.htm).
Leider ist die Software weder stabil noch billig. 49$ für etwas, das alle paar
Minuten abstürzt, müssen ja nicht sein. Alternativ gibt es noch eine
Java-Anwendung namens [MTK GPS Datalogger Device Control](http://sourceforge.net/projects/bt747/).
Leider ist diese sehr hässlich und unübersichtlich. Aber ich plane gerade, den
Kern der Anwendung zu nehmen und darauf eine wirklich schöne Swing-Anwendung
aufzusetzen.

Nachdem man die Daten dann aus dem Gerät geladen hat, kann man diese nach
[GPX](http://de.wikipedia.org/wiki/GPX) konvertieren und dann in allen
möglichen Anwendungen nutzen.

Momentan nutze ich die Daten für [JOSM](http://josm.openstreetmap.de/) und für
Lightroom. Für Lightroom gibt es nämlich ein schönes Plugin namens [Geotag Lightroom Plugin](http://code.google.com/p/geotag-lightroom-plugin/),
mit dem man die Photos anhand des Datums mit einem GPS-Track verbinden kann.


