---
locale: de
comments: true
date: 2006-10-25 21:14:37
layout: post
slug: cvsspam_fur_svn
title: CVSSpam für SVN
wordpress_id: 222
tags:
- Coding
- Software
---

Heute habe ich einigen Leuten in der Firma einen kleinen gefallen getan: seit
wir von CVS auf SVN gewechselt sind fehlte uns der gute alte
[CVSSpam](http://www.badgers-in-foil.co.uk/projects/cvsspam/).

Ja, es gibt bei SVN eine mitgelieferte Lösung, allerdings erzeugt die reine
Text-Mails ohne farbliche Hervorhebung.

Aber es gibt eine Lösung: SVN::Notify

SVN::Notify ist vergleichbar mit CVSSpam und erzeugt hübsche HTML-Mails. Ist
auch recht einfach zu installieren.

Auf der Konsole folgendes eingeben:

`perl -MCPAN -e shell`

Jetzt nur noch 2 Module installieren mit:

`install HTML::Entities install SVN::Notify`

Und schon ist es installiert.

Als letztes muss man SVN::Notify nur noch in den jeweiligen SVN-Projekten
aktivieren.

Dazu jetzt im `hooks`-Verzeichnis die Datei post-commit anlegen und folgendem
Inhalt einfügen:

```
#!/bin/sh svnnotify --repos-path "$1" --revision "$2" --to "developers@example.com;manager@example.com" --handler HTML::ColorDiff --svnlook /usr/bin/svnlook --with-diff --subject-prefix "[ProjektName]"
```

Als letztes diese Datei noch mit

`chmod a+x post-commit`

ausführbar machen und man ist fertig.
