---
locale: de
comments: true
date: 2007-11-01 22:29:09
layout: post
slug: firefox_abkurzung
title: Firefox Abkürzung
wordpress_id: 357
tags:
- Firefox
- Software
- Tipps und Tricks
---

Es gibt beim Firefox eine Funktion, die sehr sehr nützlich ist, aber von vielen
Menschen nicht genutzt wird:

Lesezeichen kann man Abkürzungen zuweisen unter denen diese aufrufbar sind.

Ich kann z.B. "wetter" in das URL-Feld eingeben und erhalte automatisch
[diesen Link](http://www.wetter.com/v2/?LANG=DE&LOC=7000&LOCFROM=0202&type=WORLD&id=20108).

Oder ich kann auch das hier eingeben:

![](/images/2007-11-01-firefox_abkurzung/firefox_wikipedia_step_1.png)

Dies führt mich dann automatisch zu der entsprechenden Seite in der Wikipedia. 

Um diese Funktion nutzen zu können, muss man zuerst ein Lesezeichen für die
betreffende Seite anlegen. Danach muss man im Lesezeichen-Manager vom Firefox
(zu erreichen unter "Lesezeichen > Lesezeichen-Manager...") die Eigenschaften
des entsprechenden Lesezeichens bearbeiten. Im Feld "Schlüsselwort" dann die
gewünschte Abkürzung eingeben.

Für meine Wetter-Abkürzung sieht das dann so aus:

![](/images/2007-11-01-firefox_abkurzung/firefox_wikipedia_step_2.png)

Nach dem Druck auf "OK" kann man nun in der Adresszeile "wetter" eingeben und
gelangt auf das Wetter in Münster.

Um nun auch die Wikipedia-Links benutzen zu können, muss man die URL etwas
verändern:

![](/images/2007-11-01-firefox_abkurzung/firefox_wikipedia_step_3.png)

Am Ende der URL ist ein "%s". Dieses wird bei der Eingabe der URL durch alles
ersetzt, was nach dem Schlüsselwort eingegeben wird. Also genau das, was wir
brauchen. Wenn ich "wiki Leonardo Da Vinci" eingebe, wird eine URL erzeugt, die
am Ende Leonardo Da Vinci enthält.
