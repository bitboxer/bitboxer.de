---
locale: de
comments: true
date: 2009-08-04 09:41:37
layout: post
slug: meine-terminal-settings
title: Meine Terminal-Settings
wordpress_id: 1351
categories:
tags:
- Coding
- Terminal
---

_Achtung, Coder-Content nur für Linux/Mac-Terminal Geeks :smile:_

Ryan Bates (der [Railscasts](http://railscasts.com/)-Typ :wink: ) hat vor einiger
Zeit seine Einstellungen für sein Terminal auf [Github hochgeladen](http://github.com/ryanb/dotfiles/)
und mir somit einen anstoß geben, dies ebenfalls zu tun. 

Meine Einstellungen basieren auf denen von Ryan, allerdings ohne die
Unterstützung für Bash. Diese war nicht wirklich ausgereift und ZSH ist eh viel
besser :smile: . Mein Fork findet sich [hier](http://github.com/bodo/dotfiles/).

Momentan habe ich nur Kleinigkeiten verbessert und Maven Tab-Completion
hinzugefügt, aber an den Settings arbeite ich jetzt laufend :smile: .

Um meine Settings zu nutzen, muss zuerst ZSH aktiviert werden:

`chsh -s /bin/zsh`

ZSH sollte man unbedingt ausprobieren, alleine schon wg. der viel besseren
Tab-Vervollständigung.

Jetzt kann man meine Settings installieren:

` git clone git://github.com/bodo/dotfiles ~/.dotfiles cd ~/.dotfiles rake install`

Am besten schaut man sich vorher mal die Settings an, die ich gewählt habe.
Insbesondere die Dateien  _gitconfig_ und _zsh/config_. 

Mal sehen, wenn ich die Tage nochmal Zeit habe, werde ich das ganze so
anpassen, das es für Mac und Linux out-of-the-box funktioniert. Einige Pfade
sind momentan noch Mac-Spezifisch.

**Update:** Und jetzt funktionieren die Settings auf Linux UND Mac. Die
OS-Spezifischen Sachen sind nun in .zsh/osspecific/ ausgelagert .
