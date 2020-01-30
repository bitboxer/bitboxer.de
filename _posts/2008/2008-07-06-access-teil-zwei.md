---
locale: de
comments: true
date: 2008-07-06 04:12:14
layout: post
slug: access-teil-zwei
title: Access, Teil Zwei
wordpress_id: 460
tags:
- Access
- Sicherheit
---

Ich habe mich ja letztens mal über
[Access](http://blog.wannawork.de/index.php/2008/06/02/access-pfui) aufgereget.
Aber gestern habe ich etwas erzählt bekommen, das ich echt übel finde. Das
ganze zeigt mir nämlich, das selbst angebliche "Access-Profis" pfuschen was das
Zeug hält.

Es gibt ein Access-Magazin, dessen Namen ich lieber hier nicht nenne, das eine
etwas "kreative" Art der Abo-Verwaltung hat 8O . Dieses Magazin hat nämlich ein
Online-Archiv aller Ausgaben. Man hat nur Zugriff auf diesen Bereich, wenn man
ein Abo besitzt.

Jetzt würde jeder sagen: klar, kein Problem. Jeder Nutzer bekommt einen eigenen
Datensatz mit der Information, ob er noch zahlender Kunde ist. Damit kann er
sich anmelden, sein Abo kündigen, etc. Sowas hustet ein normaler Programmierer
innerhalb sehr kurzer Zeit raus.

Und wie haben die das gelöst? Nun, ganz einfach. Jeden Monat wird ein neuer
Benutzername/Passwort-Login erzeugt und ins Heft gedruckt. Alle, die die
aktuellste Ausgabe haben, kennen nun den gemeinsamen Login für diesen Monat.

Aua.


