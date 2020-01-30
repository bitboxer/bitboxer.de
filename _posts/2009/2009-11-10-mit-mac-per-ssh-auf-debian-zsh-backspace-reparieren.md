---
locale: de
comments: true
date: 2009-11-10 21:45:56
layout: post
slug: mit-mac-per-ssh-auf-debian-zsh-backspace-reparieren
title: 'Mit Mac per SSH auf Debian ZSH : Backspace reparieren'
wordpress_id: 1505
categories:
tags:
- Coding
- Debian
- Mac
- Terminal
---

Ich hatte letztes Wochenende das Problem, dass ich von meinem Mac aus per SSH
auf ein Debian System mit ZSH zugreifen wollte, und da leider die
Backspace-Taste nicht funktioniert hat.

Leider bin ich nicht perfekt und brauche die Backspace-Taste andauernd. Zum
Glück gibt es aber eine Lösung. Und die sieht so aus:

``` bash
echo "bindkey '^?' backward-delete-char" >> ~/.zshrc 
echo "bindkey '^[[3~' delete-char" >> ~/.zshrc
```

Das erzeugt korrekte Keybindings für ZSH.
