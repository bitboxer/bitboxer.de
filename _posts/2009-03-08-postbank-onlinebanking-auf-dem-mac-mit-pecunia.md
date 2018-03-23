---
locale: de
comments: true
date: 2009-03-08 11:37:26
layout: post
slug: postbank-onlinebanking-auf-dem-mac-mit-pecunia
title: Postbank Onlinebanking auf dem Mac mit Pecunia
wordpress_id: 1061
categories:
tags:
- Mac
- Onlinebanking
- OpenSource
---

[![pecunia](/images/2009-03-08-postbank-onlinebanking-auf-dem-mac-mit-pecunia/pecunia-150x150.jpg)](/images/2009-03-08-postbank-onlinebanking-auf-dem-mac-mit-pecunia/pecunia.jpg)

Ich habe  gestern ein wenig mit Onlinebanking auf dem Mac rum gespielt. Leider
gibt es anscheinend nur einige wenige Programme. Diese sehen allerdings
meistens echt scheiße aus und sind dazu auch noch nicht gut zu bedienen. Ich
würde das ja teilweise in Kauf nehmen, wenn die OpenSource währen, sind die
aber nicht. Für hässlichen Schrott bezahle ich aber nicht :smile: .

Zum Glück gibt es ein kleines OpenSource Projekt, das wirklich gut aussieht und
sehr vielversprechend ist. Momentan kann die Anwendung "nicht viel", aber die
Roadmap sieht gut aus. Genau das, was ich haben will. Das Programm nennt sich
"[Pecunia](http://www.pecuniabanking.de)".  Es kann mittels HBCI mit der Bank
kommunizieren und zeigt übersichtlich die aktuellen Kontostände an. Man kann
sogar schon bestimmte Umsätze automatisch zu Kategorieen zuweisen und
auswerten. Die Auswertung dieser Umsätze ist leider noch etwas rudimentär, aber
was noch nicht ist, kann ja noch werden.

Um Pecunia mit der Postbank zu benutzen, sind folgende Daten anzugeben:

<table>
<tbody><tr><th>Bankleitzahl:</th><td>BLZ deiner Postbank</td></tr>
<tr><th>Benutzerkennung:</th><td>deine Kontonummer</td></tr>
<tr><th>Kundennummer:</th><td>deine Kontonummer</td></tr>
<tr><th>Pin/Tan-Kennung:</th><td>egal</td></tr>
<tr><th>Bank-URL:</th><td>https://hbci.postbank.de/banking/hbci.do</td></tr>
<tr><th>SSL3:</th><td>ja</td></tr>
<tr><th>HBCI-Version:</th><td>220</td></tr>
</tbody></table>

Als PIN wird dann nicht der Zugang zum Direktbanking verlangt, sondern der
5-stellige PIN, der dir mal zugeschickt worden ist.

Da wird es bestimmt auch mal bald einen Wizard für geben, oder :smile: ?

Danke nochmal an [Jan](http://www.blogadresse.de/) für den
[Tipp](http://twitter.com/crashtron/status/1249632942)!
