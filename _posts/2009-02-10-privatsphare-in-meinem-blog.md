---
locale: de
comments: true
date: 2009-02-10 18:52:25
layout: post
slug: privatsphare-in-meinem-blog
title: Privatsphäre in meinem Blog
wordpress_id: 909
categories:
- Freiheit
tags:
- Datenschutz
- Freiheit
---

Ich wurde gestern Abend gefragt, was in meinem Blog für Daten aufgezeichnet
werden und in welchem Umfang eine Nachverfolgung der Nutzer möglich ist. Da
dies bestimmt so einige Menschen interessiert, hier mal klar aufgeschlüsselt,
was hier auf der Webseite passiert.

**Logging auf dem Server**

Der Server erzeugt ein ganz normales Apache-Logfile, in dem die Zugriffe
inklusive IP-Adresse gespeichert sind. Diese Daten werden nicht gesichert und
verlassen den Server nicht. Seit dem 1. Juni 2012 wird dieser Dienst bei
[Uberspace](https://uberspace.de) gehostet. Die IP-Adressen werden dort nur
anonymisiert im Logfile gespeichert.

**Eingebundene Dienste**

Ich setzt auf allen meinen Webseiten die
[Google-Analytics](http://analytics.google.com/) ein, um das Nutzerverhalten zu
untersuchen und meine Seiten zu optimieren. Das ist natürlich für einige
Menschen echt unheimlich, da einfach mal Daten zu Google zu schicken. Google
bekommt über ein kleines Javascript mit, welche IP-Adresse auf welchen Seiten
rumgesurft hat. Zusammen mit der IP während der Suche _könnte man_ ein Profil
von deiner Person zusammenbasteln.

Solltest du dies nicht wollen, solltest du in deinem Adblocker folgende Url die
Url *http://www.google-analytics.com/ga.js* aufnehmen.

Desweiteren nutze ich [Gravatar.com](http://gravatar.com) um für die Kommentare
Bilder von den kommentierenden Menschen einzubinden. Bei Gravatar kann man für
seine EMail-Adresse ein Bild hinterlegen. Darüber kann Gravatar sehen, welche
Person auf welche Seite einen Kommentar hinterlassen hat. Um das Bild zu
bekommen, wird allerdings nicht die EMail-Adresse an Gravatar geschickt,
sondern ein MD5-Hash. Das bedeutet, Gravatar bekommt nicht die EMail-Adresse
von Personen, die nicht angemeldet sind bei Gravatar, allerdings einen Hash,
der relativ eindeutig zuordenbar ist. Über diesen Hash _könnte man_ ein Profil
deiner Person zusammenbasteln.

Solltest du dies nicht wollen, solltest du auf jeder Seite, die Gravatar nutzt,
eine andere Mail-Adresse für deinen Kommentar eintragen.

Für Kommentare wird [Disqus](http://disqus.com) benutzt. Alle Kommentare werden
dort gespeichert.

Das war es, was hier passiert. Ich hoffe, jetzt ist das wirklich klar. Bei
weiteren Fragen verlinke ich einfach auf diesen Eintrag :smile: .
