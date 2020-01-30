---
locale: de
comments: true
date: 2008-07-02 22:28:53
layout: post
slug: tools-fuer-softwareentwickler-teams
title: Tools für Softwareentwickler-Teams
wordpress_id: 481
categories:
tags:
- Coding
---

Gerade wurde ich gefragt, was für Software ich als Minimum für ein Team von
Softwareentwicklern ansehe. Meine Liste sieht so aus:

**Versionskontrollsystem**

Ohne Versionskontrolle geht wirklich nix. Damit steht und fällt alles. Ich habe
schon gesehen, das Leute Versionen von Dateien per Telefon abgeglichen haben
:( .

**Nr 1:** Meine Datei hallo.java ist vom 08.03. und ist 20 KB groß.    
**Nr 2:** Okay, dann ist deine neuer, stell die mal in meinen Netzwerk-Ordner

Und damit das nicht passiert, und alle die aktuellste Version haben, braucht
man eine [Versionsverwaltung](http://de.wikipedia.org/wiki/Versionsverwaltung).

Jetzt gibt es natürlich verschiedene Geschmacksrichtungen. Sehr beliebt sind
momentan z.B. [Subversion](http://de.wikipedia.org/wiki/Subversion_(Software)),
[Bazaar](http://de.wikipedia.org/wiki/Bazaar) und
[GIT](http://de.wikipedia.org/wiki/GIT).

Meine Empfehlung wäre Subversion (kurz SVN), da es von sehr vielen
Entwickler-Tools unterstützt wird. Gute Lektüre dazu ist das [SVN Red Book](http://svnbook.red-bean.com/).

Dazu dann noch am besten zusätzlich ein Web-Frontend zum schnellen
durchklicken, wie z.B. [ViewSVN](http://viewsvn.berlios.de/) und schon ist man
fertig.

**Ticket-System**

Damit man Aufgaben verteilen und eine Historie dieser Aufgaben hat, sollte man
auch noch ein Ticket-System nutzen. Das ganze macht das Arbeiten zwar etwas
bürokratischer, aber langfristig wird man durch die vielen gewonnen Daten
belohnt. Man kann so genau nachhalten, wann man was gemacht hat und hat so
genug Beweise, um zu zeigen, das man nicht derjenige ist, der Schuld an einem
Problem hat :smile: .

Am besten ist das Ticket-System auch noch mit dem Versionsverwaltungs-System
verbunden, damit man bei jedem Ticket gleich sehen kann, welche Änderungen im
Quelltext dazu gehören.

Gängig sind dafür [Trac](http://trac.edgewall.org/),
[Redmine](http://www.redmine.org/) oder
[Jira](http://www.atlassian.com/software/jira/).

Trac fühlt sich etwas "outdated" an, Administration über Kommandozeile, Tickets
können nicht Projektübergreifend verschoben werden usw. Empfehlen würde ich
Redmine oder Jira. Jira ist allerdings nicht OpenSource und kostenpflichtig.
Redmine fehlen leider (noch) einige relativ wichtigen Features. Darunter z.B.
die Möglichkeit, Menschen als zusätzlich beteiligte Personen zum Ticket
hinzuzufügen, aber das kommt in der nächsten Version. Jira fühlt sich insgesamt
besser an, ist aber auch schwerer zu administrieren.

**Continuus Integration**

Damit man sicherstellen kann, das die Software immer korrekt im SVN gelandet
ist und auch wirklich kompiliert, ist ein sog. Continuus Integration Server
wichtig. Dieser baut in vordefinierten Abständen die Software neu und
verschickt im Fehlerfall EMails. Diesen Server kann man auch nutzen, um jede
Nacht eine neue Version der Software zu bauen und z.B. an Tester zu verteilen.

Hierfür würde ich [Hudson](http://hudson.dev.java.net) empfehlen.

**Chat-System**

Ein Team lebt durch die Kommunikation. Deswegen ist es optional möglich, ein
System zu installieren, mit dem die Nutzer chatten können. Viele Firmen
erlauben es nicht, das man sich mit ICQ, AOL usw verbindet, daher sollte eine
interne Lösung vorgezogen werden. 

Hierfür eignen sich wunderbar Clients, die Chatten über Bonjour ermöglichen.
Dies erspart das Einrichten eines Servers. Adium, Pidgin und einige mehr
unterstützen dieses Protokoll. Alle Clients finden sich ganz automatisch im
lokalen Netz. Alternativ kommt noch Jabber in Frage, dafür benötigt man dann
einen [XMPP-Server](http://de.wikipedia.org/wiki/XMPP). Eine Liste von
Programmen, die Jabber unterstützen,  findet sich
[hier](http://www.jabber.org/servers).

Das ist also das, was ich an Softwarekomponenten installieren würde. Am besten
dann so gut wie es geht in die Umgebung integriert, überall sollten z.B. die
selben Passwörter genutzt werden, damit die Akzeptanz dieser Dienste nicht
unnötig behindert wird.

Habe ich was vergessen?

