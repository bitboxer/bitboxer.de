---
locale: de
comments: true
date: 2010-03-26 09:43:27
layout: post
slug: git-commit-emails-mit-html
title: Git Commit EMails mit HTML
wordpress_id: 1593
categories:
tags:
- Coding
- Git
---

Bei [putpat.tv](http://putpat.tv) sind wir vor einiger Zeit auf
[Git](http://git-scm.com/) umgestiegen. Alles in allem war der Umstieg ziemlich
reibungslos und mit coolen Tools wie [GitX](http://gitx.frim.nl/) macht das
entwickeln gleich noch mehr Spaß. Bis jetzt habe ich nur 2 Probleme gefunden,
die etwas gestört haben:

  * Wenn jemand ein Verzeichnis zu einem symbolischen Link umwandelt, gibt es
    Probleme bei Git. Die kann man zwar beheben, aber für einen Git-Dau war das
    schon etwas erschreckend, was dann mit dem eigenen Repository passiert :smile: 
  * Keine ordentlichen Commit-EMails mehr.

Gerade der letzte Punkt war ganz schön ätzend. Es gibt zwar ein von Git
mitgeliefertes Skript für Commit-Mails (und viele Varianten des Skripts draußen
im Netz), aber diese haben uns nicht wirklich überzeugt. 

  * Jeder Push wird in einer einzigen Mail abgehandelt. Wenn man mehrere
    getrennte Commits in das zentrale Repository gepusht hat, gab es nur eine
    Mail und man musste beim Lesen der Mail ziemlich mitdenken.
  * Die Mail wird in Plain-Text verschickt. Das macht das lesen der Diffs nicht
    gerade einfach.
  * Das Skript ist ein Shellskript und nicht wirklich gut anpassbar auf unsere
    Bedürfnisse

Nach ein wenig Suchen habe ich allerdings ein Ruby-Projekt gefunden, das eine
gute Basis für unsere Version eines Git-Commit-Notifiers war. Das ganze Skript
habe ich ein wenig aufbohrt mit weiteren Features und ein Gem daraus erzeugt.
Mein Fork findet sich bei Github in meinem
[Repository](https://github.com/git-commit-notifier/git-commit-notifier).

Die Mails sehen dann ungefähr so aus:

[![](/images/2010-03-26-git-commit-emails-mit-html/gitcommitnotifieremailpq3.png)](/images/2010-03-26-git-commit-emails-mit-html/gitcommitnotifieremailpq3.png)

Um das ganze auch selber zu nutzen, muss man einfach das Gem installieren mit

`sudo gem install git-commit-notifier`

und dann in dem jeweiligen Git-Projekt im Hooks-Verzeichnis eine ausführbare Datei mit dem Namen "post-receive" anlegen mit folgendem Inhalt:

``` bash
#!/bin/sh
git-commit-notifier path_to_config.yml
```

Ein Beispiel für die Konfigurations-Datei findet sich
[hier](http://github.com/git-commit-notifier/git-commit-notifier/blob/master/config/git-notifier-config.yml.sample).

Fertig. Jetzt werden schöne HTML-Mails geschickt.
