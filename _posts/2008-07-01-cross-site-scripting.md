---
locale: de
comments: true
date: 2008-07-01 19:33:28
layout: post
slug: cross-site-scripting
title: Cross-Site Scripting
wordpress_id: 480
categories:
tags:
- Coding
- Sicherheit
---

Okay, damit auch der letzte Programmierer es rafft, mal hier ein kleiner Exkurs
zum Thema Hacken von Webseiten.

Es gibt etwas, das man bei Webseiten echt vermeiden sollte: Eingaben von
Nutzern ungefiltert wieder auf der Webseite auszugeben. Zum Beispiel den Text,
der in einem Eingabefeld eingegeben wird, direkt auf der Seite darstellen mit:

``` php
<?php 
echo "Die Suche nach " . $suchbegriff ." hat leider keinen Treffer ergeben";
?>
```

Warum man das nicht darf? Ganz einfach. Wenn man nun in dem Eingabefeld
folgendes eingibt:

``` html
<script>alert("XSS");</script>
```

wird auf der Webseite folgendes Stück HTML erzeugt:

``` html
Die Suche nach <script>alert("XSS");</script> hat leider keinen Treffer ergeben
```

Und das führt dazu, dass dieser Code ausgeführt wird. Der Nutzer sieht also
diese Alert-Box.

Alert-Boxen sind natürlich noch harmlos, aber man kann hier so gut wie alles
unterbringen. Zum Beispiel kann man so die Seite eines Web-Shops so umbauen,
dass der Nutzer denkt, er wäre noch auf der Seite von dem Betreiber, aber in
Wirklichkeit gibt er seine Kreditkarten-Daten gerade auf einer anderen Seite
ein.

Das ganze ist also höchst gefährlich!

Der Fix dazu ist aber verflucht einfach:

``` php
<?php 
echo "Die Suche nach " . htmlspecialchars($suchbegriff,ENT_QUOTES) . " hat leider keinen Treffer ergeben";
?>
```

Dies führt dazu, das die > und < durch &gt; und &lt; ersetzt werden und der
Code nicht mehr ausgeführt werden kann.

Ihr werdet erschreckt sein, welche gut besuchten Internetseiten diese Fehler
aufweisen. Gebt einfach mal:

``` html
<script>alert("XSS");</script>
```

in ein paar Suchfeldern von Webseiten ein, Ihr werdet überrascht sein, wie
viele dumme Idioten anscheinend für die Erstellung von Webseiten verantwortlich
sind!

Bei [Wikipedia](http://de.wikipedia.org/wiki/Cross-Site_Scripting) gibt's einen
auch einen Artikel mit weiteren verlinkten Texten zu dem Thema.

