---
locale: de
comments: true
date: 2007-10-30 21:27:03
layout: post
slug: sicherheitsprufung_fur_anfanger
title: Sicherheitsprüfung für Anfänger :)
wordpress_id: 356
tags:
- Coding
---

Ich habe heute eine kleine Anwendung gefunden, die eine massive
Sicherheitslücke hatte. Deswegen hier mal eine kleine Information, was man
nicht machen sollte:

Das Programm hat als Parameter die Information bekommen, welche Datei nun
angezeigt werden sollte, z.B. so:

`http://firma.de/cgi-bin/programm/anzeige.cgi?anzeige=willkommen.html`

Wenn man sowas sieht, sollte man dann eigentlich sofort stutzig werden. Bin ich
dann auch. Das, was man dann zwangsläufig probieren sollte, ist sowas:

`http://firma.de/cgi-bin/programm/anzeige.cgi?anzeige=../../../../../../etc/passwd`

Natürlich muss man da mit dem "../" etwas experimentieren.

Leider hat die Anwendung, die ich heute gefunden habe, da dann schön die passwd
angezeigt. Jemand, der sowas programmiert, gehört echt auf 'ne einsame Insel
weit weit weg von jedem Computer.

Und wenn man sowas entdeckt: sofort melden und nicht ignorieren nach dem Motto:
"mir egal!" oder "Et hätt noch immer jut jegangen" :(
