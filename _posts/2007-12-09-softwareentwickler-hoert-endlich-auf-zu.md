---
locale: de
comments: true
date: 2007-12-09 10:54:20
layout: post
slug: softwareentwickler-hoert-endlich-auf-zu
title: Softwareentwickler, hört endlich auf zu pfuschen !
wordpress_id: 373
tags:
- Coding
- Sicherheit
---

Die letzten 12 Monate habe ich mit sehr sehr vielen Entwicklern über deren
Arbeitsbedingungen in unterschiedlichen Firmen geredet. Dabei ist mir eine
konstante Beobachtung aufgefallen, die ich sehr sehr beunruhigend finde:

**Überall wird gepfuscht!**



_Kleine Anmerkung: dieser Text bezieht sich nicht auf LexisNexis, sondern
andere Firmen deren Namen ich nicht nennen werde :smile: ._

Und ich meine nicht kleine Hacks, die einem das Leben einfacher machen, sondern
ich rede von Missachtung aller modernen Softwareentwicklungs-Standards. Das
fängt schon an bei der Sicherung der Quelltexte in einem Versionierungs-System.
Anscheinend gibt es in allen(!!) Firmen immer mindestens 2-3 Personen, die sich
konstant weigern, die Quelltexte in so ein System zu laden. Diese Personen
haben dann unterschiedlichste Methoden, wie sie Ihre Quelltexte mit anderen
Teilen, angefangen von dem Telefonat ("Meine Datei main_window.cpp ist vom 23.
und 24341 Bytes Groß" - "Meine ist älter, gib mal deine"), über eine Freigabe
auf einem Laufwerk (jeder Entwickler hat dabei seinen eigenen Share und man
muss nicht wissen, wie das Modul heißt, sondern welcher Entwickler dort zuletzt
daran gearbeitet hat) bis zur kompletten "Ne, Backups machen wir hier nicht und
ich entwickel eh alleine"-Methode.

Aber das ist ja nicht das einzige Problem. Es geht weiter mit

  * Ne, wir machen keine echte Datenbank dafür, eine Excel-Tabelle/Acccess DB
    ist viel besser
  * Der unternehmenskritische Cronjob? Der läuft auf meinem Desktop-PC, wo auch
    sonst?
  * Jeder hat doch das gleiche Passwort hier: 12345, du etwa nicht?
  * Sauber programmieren? Das ist doch sauber. Was hast du auszusetzen an der
    Methode boringHackForStupidBug() oder an der method23() ?

und diese Liste lässt sich ewig so weiter führen. Natürlich ist Access und
Excel für Nicht-Entwickler Ideal, aber wenn jemand sich schon "Entwickler"
nennt, sollte er wissen, das diese Dinger in 90% der Fälle nicht die richtige
Lösung sind, Methoden gute Namen und der Quelltext halbwegs aufgeräumt sein
sollte. 

Meistens hört man dann immer die Ausrede "Zeitdruck". Natürlich hat jeder von
uns Zeitdruck. Ich auch. Aber wie lange dauert es denn, einen Methodennamen zu
finden, der sinnig ist? 30 Sekunden? Die sparen jedenfalls viel Zeit, wenn man
die Methode in 6 Wochen reparieren muss und keiner mehr weiß, was die
eigentlich macht.

Das schlimmste daran ist, dass dies in der ganzen Industrie verbreitet ist.
Angefangen von kleinen 5-Mann-Unternehmen, über Web 2.0-Startups bis zu
10.000-Menschen-Firmen.

Ich will jetzt nicht sagen, das [LexisNexis](http://www.lexisnexis.de) perfekt
ist oder ich der beste Programmierer der Welt (ich hab letztens aus versehen
mal ein Drop-DB gemacht :wink: ), aber wenn man vorgesorgt hat (mit 'nem Backup),
ist sowas viel einfacher zu fixen. Wir versuchen wenigstens jeden Tag, uns
weiterzuentwickeln und trotz aller Widrigkeiten saubere Arbeit zu leisten. 

Macht das niemand sonst? Haben die meisten "Entwickler" etwa keine Scham oder
Stolz? 

Mir wäre es viel zu peinlich, zuzugeben, das meine Quellen niemals auf dem
Versionierungs-Server landen. Würdet Ihr mit 'nem 7 1/2 Tonner eine Brücke
überqueren, bei der die Arbeiter nicht zugeben würden, dass diese Brücke von
Ihnen stammt? Also ich nicht! Mir wird jetzt schon immer mulmig, wenn ich meine
EC-Karte in den Automaten schiebe. Ich kenne Geschichten über die Software, die
im Hintergrund abläuft, da ist das glatt ein Wunder, das immer die korrekte
Menge auf meinem Konto abgezogen wird :smile: .

Jeder Entwickler, der nicht wenigstens versucht, an sich zu arbeiten und
moderne Methoden einsetzen will, gehört eigentlich nicht mehr in die
Softwareentwicklung.

Mein Motto ist immer:

> Jeder, der seine zwei Jahre alten Quelltexte noch wirklich gut findet, ist
> ein schlechter Softwareentwickler!

Falls du dich jetzt persönlich angegriffen fühlst von mir, dem Besserwisser:
Mir egal, setzt dich endlich auf deinen Hintern und räum deinen Quelltext auf
:wink: .
