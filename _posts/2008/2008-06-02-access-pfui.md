---
locale: de
comments: true
date: 2008-06-02 17:32:34
layout: post
slug: access-pfui
title: Access ? Pfui !
wordpress_id: 459
tags:
- Access
- Coding
- Micro$oft
- Sicherheit
- Software
---

Es gibt leider sehr viele Menschen, die voll auf M$ Access schwören, es gäbe
nix Besseres um "eben mal schnell" eine kleine "Datenbank" anzulegen. Dass
führt dann dazu, das sich alle möglichen, mehr oder weniger fähigen, Menschen
eigene Access-Datenbanken basteln. 

Das ganze bringt aber massive Probleme mit sich, darunter zum Beispiel auch
Datenschutz, wie eindrucksvoll [hier ](http://www.heise.de/newsticker/Daten-von-tausenden-Studenten-der-Uni-Magdeburg-im-Netz--/meldung/108545)
zu sehen.

Access verleitet Anfänger dazu, Datenbank-Monster zu schreiben, diese dann mit
Daten-Müll vollzuhauen und dann einige Monate später diese Daten dann
Entwicklern zu geben mit dem Kommentar : "Schau mal was ich hübsches gemacht
habe". 

Dass dann in dieser Datenbank dann viel Mist steht, wie z.b. "Einfach eine 0
Anhängen statt der 2" in dem Feld, das als "Faxnummer" betitelt ist, ist leider
anscheinend zwangsläufig. Ganz abgesehen davon, das diese "Datenbank" total
[unnormalisiert](http://de.wikipedia.org/wiki/Normalisierung_%28Datenbank%29)
ist und statt einer normalen "M:N"-Beziehung einfach eine Tabelle mit 255
Spalten und 1000 Zeilen besitzt. Oh, ich vergaß: da Access leider nur 255
Spalten nutzen kann, gibt es eine 2. Tabelle die dann den Rest der Daten
enthält :( . Eine Access-Datenbank ist auch alles andere als schnell und von
Usability will ich nicht mal anfangen.

Es gibt dann natürlich Leute, die eine Access mit einer MS SQL-Server-Datenbank
verbinden, damit man wenigstens die Daten halbwegs sicher gespeichert hat. Aber
das hilft nur bedingt. Die Daten und die Struktur sind genauso schlecht, das
Berechtigungs-Schema nur schwer einzubauen.

Würdet Ihr eine geladene, ungesicherte Pistole in einem vollen Kindergarten in
die Mitte des Raumes legen? Nein? Wieso dann einfach jedem eine Access geben?

Wenn Datenbank, dann bitte schön ordentlich. Das Ganze muss auch nicht extrem
aufwändig implementiert werden. Eine Grails-Applikation ist in ein paar Minuten
geschrieben.

Natürlich kann so kein Anwender mehr direkt SQL-Statements ausführen, aber wer
sowas erlaubt, braucht sich auch nicht wundern, dass der Datenbank-Server alle
3 Stunden einmal zusammenbricht weil mal wieder jemand "ein cooles
SQL-Statement" abfeuert.


