---
locale: de
comments: true
date: 2008-06-23 11:39:25
layout: post
slug: farbprofile-und-firefox
title: Farbprofile und Firefox
wordpress_id: 478
tags:
- Firefox
- Tipps und Tricks
---

Habt Ihr euch auch schon mal gewundert, das eure Fotos im Firefox etwas flauer
aussehen als in eurem Lightroom, Photoshop, whatever? Das liegt an den
Farb-Profilen der Bilder. Der Firefox wertet diese Informationen leider nicht
aus und zeigt die Bilder deshalb etwas ausgewaschener.

Seit Firefox 3 gibt es eine optionale Einstellung für Farbprofile. Man kann
also dem Firefox sagen, das er doch die Farbprofile der Bilder nutzen soll. Das
führt dann dazu, das die Bilder korrekter dargestellt werden. Wenn dein OS auch
noch ein Farbprofil hat, das zu deinem Monitor passt, hast du dann genau das
Bild, das die Kamera aufgenommen hat.

Das ganze kann man in den Einstellungen des Firefox in _about:config_
aktivieren, in dem man die Einstellung _gfx.color_management.enabled_ auf
_true_ setzt. Alternativ kann man dafür auch [dieses
Plugin](https://addons.mozilla.org/en-US/firefox/addon/6891) verwenden. Diese
Einstellung ist deaktiviert, da auf einigen System die Bilder dann z.B. nicht
mehr 100%ig zum Hintergrund passen, da die Farbanpassungen des Entwicklers ohne
aktiviertes Farb-Profil gemacht worden sind.

Beispielbilder zu diesem Thema gibt es
[hier](http://www.dria.org/wordpress/archives/2008/04/29/633/) und
[hier](http://mozillalinks.org/wp/2007/08/color-management-support-added-to-firefox-3/).


