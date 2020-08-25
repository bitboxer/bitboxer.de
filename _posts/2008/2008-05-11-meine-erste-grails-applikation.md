---
locale: de
comments: true
date: 2008-05-11 20:17:00
layout: post
slug: meine-erste-grails-applikation
title: Meine erste Grails-Applikation
wordpress_id: 442
tags:
- Java
---

Ich habe letzte Woche in der Firma meine erste Grails-Applikation deployed. War
keine sehr komplexe Anwendung, nur ein paar Formulare und Listen, aber gut
genug für einen ersten Test in [Grails](http://grails.org/).

Grails hat, genauso wie [Rails](http://www.rubyonrails.org), als Kern-Paradigma
"Convention over Configuration". Auf Deutsch gesagt legt Grails fest, wo welche
Dateien liegen. Dies minimiert den Konfigurations-Aufwand auf ein absolutes
minimum und man kann sofort loslegen.

Jeder, der schon mal eine Spring-Konfigurations-Datei geschrieben hat, oder
begonnen hat, Hendriks
[Tutorial](http://www.icanmakeit.de/2008/01/31/developing-lightweight-java-web-applications-with-jsf-facelets-jpa-spring-and-shale-part-1-the-primer/)
zu lesen, wird verstehen, warum ich denke, das dieses Vorgehen für die meisten
Anwendungen besser geeignet ist, um schnell Ergebnisse zu erzielen.

Ein hübscher Nebeneffekt der Vorgaben ist, das jede Anwendung gleich
strukturiert ist. Auspacken und wie zuhause fühlen.

Aber warum Grails nutzen, wenn man doch gleich Rails nutzen kann? Nun ja, das
habe ich mich zu beginn auch gefragt, aber nachdem ich jetzt ein bisschen damit
rum gespielt habe, muss ich sagen, das Grails schon einige Vorzüge gegenüber
Rails hat. 

Der wichtigste Vorzug ist die gesunde Basis: Grails baut auf Spring, Hibernate
und einigen weiteren bekannten Java-Bibliotheken auf. Es ist also alles schon
erprobt und für einen JavaEE-Entwickler bekannt. Der andere Vorteil gegenüber
Rails ist das Deployment auf einen Java Application Server. Man muss nicht
einen Rails-Server neben dem Glassfish-Server laufen lassen. Und zuletzt kann
man vorhandene hausinterne Java-Klassen und Bibliotheken in Grails nutzen und
umgekehrt.

Einige Nachteile gibt es natürlich auch. Capistrano ist nicht vorhanden, aber
mit den War-Files geht's fast genauso bequem. Leider gibt es keine
Migration-Files, sprich: Grails kann Tabellenstrukturen zwar verändern, aber
sollten Daten von Spalten in andere Datentypen migriert werden, kann man dafür
kein automatisch ablaufendes Skript erstellen, das während des Deployments der
Anwendung ausgeführt wird. Es gibt aber Plugins, die sowas in Grails
ermöglichen, nur habe ich die noch nicht getestet.

Natürlich sollte man Grails nicht immer einsetzen, bei sehr großen, komplexen
Anwendungen wäre es bestimmt Fehl am Platz. Aber die entwickelt man ja nicht
alle Tage. Die meisten Anwendungen sind kleinere Tools. Und gerade diese kann
man so noch schneller entwickeln.
