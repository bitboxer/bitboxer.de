---
locale: de
comments: true
date: 2007-04-22 08:22:37
layout: post
slug: ruby_jsf_what_the_f_k
title: Ruby ? JSF ? What the f**k?!
wordpress_id: 303
tags:
- Coding
- Java
- PHP
- Ruby
- TV-Browser
---

Mich haben einige Leute gefragt, warum wir für den TV-Browser Leute mit Ruby
oder JSF Kenntnissen [suchen](http://blog.wannawork.de/index.php/2007/04/20/tv_browser_sucht_ruby_oder_jsf_entwickle"). 

Was ist JSF oder Ruby und warum kein PHP?



**Ruby**

[Ruby](http://www.ruby-lang.org/de) ist eine sehr gute Skript-Sprache. "Do more
with Less" ist da sehr wichtig. Man kann mit sehr wenig Code sehr viel machen.
Darauf aufbauend gibt's noch [Ruby on Rails](http://www.rubyonrails.org). Ruby
on Rails ist wirklich phantastisch. Innerhalb von wenigen Minuten kann man
recht viel erreichen. Einfach Datenbank anlegen, RoR sagen, wo die liegt, und
schon kann man auf die Tabellen als Objekte zugreifen, ohne eine Zeile SQL zu
schreiben. Am besten schaut Ihr euch mal ein paar [Videos
an](http://www.rubyonrails.org/screencasts), danach seit Ihr auch hin und weg
von dieser Technik.

Abgesehen von der Technik selber sind die Ruby-Leute alle anscheinend sehr
darauf bedacht, hübsche Seiten zu basteln. Spricht für die Community :smile: .

**JSF**

[JSF](http://java.sun.com/javaee/javaserverfaces/index.jsp") (Java Server
Faces) ist ein Java-Framework zum erstellen von Webseiten. Dabei schreibt man
keinen HTML-Code, sondern setzt die Seite mit Hilfe von Komponenten zusammen.
Dies sorgt für eine striktere Trennung zwischen Darstellung und Logik.
[Hier](http://jsftutorials.net/) gibt's einige Tutorials.

**Warum kein PHP?**

PHP ist natürlich 'ne tolle Sprache, aber JSF und Ruby haben sehr viele
Vorteile, die ich gerne mal in einem "richtigen" Projekt probieren wollte. Wenn
man sich die RoR Screencasts ansieht, wird man wohl eingestehen müssen, das RoR
ein besseres Framework ist, als PHP direkt. 

JSF hat gegenüber PHP den Vorteil, das man gezwungen ist, die Business-Logik
von der eigentlichen Webseite zu verbannen, so wie's eigentlich auch sein muss.
Nur so kann man in Enterprise-Umgebungen Software entwickeln. JSF hat gegenüber
RoR aber noch einiges aufzuholen. Manchmal merkt man doch sehr sehr stark, dass
bei JSF noch einiges im argen liegt :( .

Ein angenehmer Nebeneffekt von RoR und JSF ist, dass die Menschen, die denken,
sie können PHP, aber leider nur "Wurschtel"-Code produzieren, einfach außen vor
bleiben. Von diesen Leuten gibt's Momentan leider sau sau sau viele. Keine
Objekte, kaum Struktur im Quelltext, aber die Seite läuft. Wenn die
PHP-Community nicht aufpasst, wird PHP so langsam zum VB dieses Jahrzehnts :wink: .
Und lieber 2 qualitativ hochwertige Bewerbungen für das Projekt, als 40
"Wurschtler".

Vor einiger Zeit haben wir ja für ein Redesign der
[TV-Browser.org](http://www.tvbrowser.org)-Webseite PHP-Entwickler gesucht.
Teilweise hatte ich vor lauter Kopfschütteln echt starke Nackenschmerzen. Da
war leider sehr sehr sehr sehr viele Leute dabei, die keine Ahnung hatten von
Webdesign, geschweige denn von PHP. Und solche Leute lässt man nicht auf eine
Seite mit knappen 2000 Visits pro Tag. Als wir uns dann zwischen einigen
Kandidaten entscheiden mussten, haben wir uns dann leider für den falschen
Entschieden. Keinen Plan von CMS, gurkige Software und Verzögerungstaktik. Am
Ende mussten mein [Bruder](http://www.olivertasche.de) und ich
[TVBrowser.org](http://www.tvbrowser.org) selber zusammenbasteln.

Sowas will ich nicht nochmal erleben.
