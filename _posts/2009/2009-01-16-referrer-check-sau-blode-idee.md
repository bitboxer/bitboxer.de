---
locale: de
comments: true
date: 2009-01-16 07:05:30
layout: post
slug: referrer-check-sau-blode-idee
title: Referrer-Check ?! Sau blöde Idee
wordpress_id: 795
categories:
tags:
- Coding
- Naiv
- StudiVZ
- Web
---

Es gibt sehr viele Leute, die seit Dienstag bei studiVZ, meinVZ und Co. keine
Bilder mehr sehen. Keine Profilphotos, keine hochgeladenen Photos, einfach gar
nix. Warum?

Tja, die von studiVZ haben sich entschieden, etwas sau blödes zu machen. Einen
sogenannten Referrer-Check. Der Webbrowser schickt standardmäßig jedesmal, wenn
man eine neue Seite aufruft, die URL mit, von wo man gerade gekommen ist. Den
sogenannten Referrer. Wenn man also von dieser Seite zu Zeit.de wechselt, kann
man bei Zeit.de sehen, von wo man gekommen ist. Das ist natürlich nicht gerade
gewollt von vielen Menschen, da dies stark in die Privatsphäre des Surfer
eingreift. Deswegen entfernen viele Firewalls und Proxies diese Information aus
dem Datenstrom. Es gibt auch einige Firefox-Plugins dafür, man kann den Firefox
aber auch direkt umkonfigurieren.

Der Bilder-Server von StudiVZ schaut nun jedesmal, wenn ein Bild angefragt
wird, von wo man gerade gekommen ist und liefert nur die Bilder aus, wenn man
von StudiVZ kommt. Damit verhindert man, das die Bilder in anderen Seiten
eingebaut werden, da dann der Referrer sagen würde, das man von einer anderen
Seite kommt. Und da fliegt er halt auf die Nase. Er findet keinen Referrer, da
dieser ja bewusst entfernt wird und liefert dann keine Bilder mehr aus. Mehr
Sicherheit bringt dieser Referrer aber auch nicht, da dieser Wert genauso
schnell gefälscht wie entfernt werden kann. 

Einen Referrer-Check baut nur ein, wer keine Ahnung von den Gepflogenheiten im
Netz hat. Sowas ist nämlich echt mal naiv :D . Noch cooler ist, das die Jungs
und Mädels da den Check nicht ausbauen, obwohl es im Hilfe-Forum sau viele
Beschwerden dazu gibt. Die gehen sogar einen Schritt weiter: die empfehlen das
Deaktivieren der Entfernung des Referrer. Wieder mal ein gutes Beispiel, wie
viel Wert dort auf Datenschutz gelegt wird.
