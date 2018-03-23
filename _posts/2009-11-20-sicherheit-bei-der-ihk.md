---
locale: de
comments: true
date: 2009-11-20 15:45:13
layout: post
slug: sicherheit-bei-der-ihk
title: Sicherheit bei der IHK ?!
wordpress_id: 1510
categories:
tags:
- Datenschutz
- Sicherheit
---

Ich komme gerade aus dem Kopfschütteln nicht mehr raus. Die IHK, oder genauer,
deren Dienstleister, hat ein interessante Vorstellung von Datenschutz und
Sicherheit.

Vorhin habe ich einen Newsletter der IHK erhalten. Aber die IHK will natürlich
garantieren, das dieser Newsletter auch für jeden klar Sichtbar von der IHK
geschickt wurde. Normalerweise macht man jetzt irgendwas mit Email-Signaturen
und so. Aber das ist anscheinend zu kompliziert für die IHK-Zielgruppe. Man hat
sich was ganz kreatives einfallen lassen. Kommt Ihr nie drauf.

In jeder verschickten EMail steht im Kopf folgendes:

> ************T R A I N E X - M A I L**************************************    
> * SICHERHEITSKONTROLLE: Der Absender dieser E-Mail (*****@ihk-nordwestfalen.de)    
> * kann als authentifziert gelten, wenn folgende Aussage richtig ist:    
> * Ihr Passwort ist 8 Zeichen lang    
> * und das zweite Zeichen Ihres Passwortes ist das Zeichen: z    

Coole Idee, oder? Das ganze hat gleich mehrere Probleme:


  * Der Absender der Mail war "****@webb24.de", also jemand ganz anderes. Das
    würde mich schon echt misstrauisch machen.
  * Was noch viel schlimmer ist: Die haben mein Passwort im Klartext
    gespeichert bei sich
  * Jetzt ist jedem, der meine Mail mitlesen kann, klar, wie lang das Passwort
    ist und welches das 2. Zeichen ist. Viel einfacher kann man es niemandem
    machen, ein Passwort zu knacken.
  * Wieso macht das klar, wer die Mail verschickt hat? Ich könnte auch alles
    mögliche andere dahin schreiben.

Das ganze hat mich so dermaßen gewurmt, das ich da direkt mal hingeschrieben
habe. Die Antworten von dem Dienstleiter waren echt erschütternd. Darum lieber
Dienstleister, hier nochmal: heutzutage macht man das ganze anders.

  * Verschlüsselte Passwörter in der Datenbank. Und zwar mit Salt. Dann kan man
    nie aus dem Datenbank-Eintrag das Passwort zurückrechnen.
  * EMail unterschreibt man mit Signaturen, die die Echtheit wirklich
    gewährleisten.
  * Niemals Teile des Passwortes durch die Gegend schicken, oder sogar die
    Länge des Passwortes.

