---
locale: de
comments: true
date: 2007-05-05 09:35:21
layout: post
slug: ruby_on_rails_auf_deutsch
title: Ruby on Rails auf Deutsch
wordpress_id: 312
categories:
tags:
- Mac
- Ruby
---

Es gibt zwar schon einige Anleitungen, wie man Ruby On Rails
internationalisiert, die waren mir aber alle ein wenig zu kryptisch. Deswegen
hier mal meine eigene Version...



RoR kann auf die weit verbreitete GetText-Bibliothek zugreifen. Ihr habt
bestimmt schon mal .po-Dateien irgendwo rumliegen gesehen. Diese werden wir
gleich selber bearbeiten :smile: .

**gettext-bin installieren**

Dieser erste Schritt ist speziell nur für den Mac, da dort die gettext-bin
Utils nicht vorhanden sind, sprich: die Tools, die wir gleich brauchen werden,
sind noch nicht vorhanden. Linux-Nutzer können diesen normalerweise getrost
überspringen.

Als erstes sollte [fink installiert werden](http://fink.sourceforge.net/doc/users-guide/index.php).
Sobald dieses installiert ist, kann gettext-bin installiert werden. Dazu einfach ein Terminal
öffnen und folgendes eingeben:

`fink install gettext-bin`

Jetzt sollten die GetText-Tools installiert sein. Um das zu testen, einfach
folgendes in dem Terminal eingeben:

`msgmerge --help`

Danach sollte folgende Ausgabe erscheinen:

`no input files given Try `msgmerge --help' for more information.`

Bravo. gettext-bin ist nun installiert und wir können mit der eigentlichen
Arbeit beginnen.

**GetText in Ruby einrichten**

Als nächstes müssen wir nun das Ruby-GetText-System einrichten. Dazu im
Terminal folgendes eingeben:

`sudo gem install gettext`

Jetzt erscheint folgende Frage:

```
Select which gem to install for your platform (i686-darwin8.9.1)
 1. gettext 1.9.0 (mswin32)
 2. gettext 1.9.0 (ruby)
 3. gettext 1.8.0 (mswin32)
 4. gettext 1.8.0 (ruby)
 5. Skip this gem
 6. Cancel installation
>
```

Wir wählen natürlich Nummer 2.

**Das RoR Projekt vorbereiten**

Als letzter Schritt muss nun das jeweilige Projekt mit den GetText-Fähigkeiten
ausgerüstet werden. Dazu muss eine Datei namens _lib/tasks/gettext.rake_
erzeugt werden mit folgendem Inhalt:

``` ruby
# Added for Ruby-GetText-Package

desc "Create mo-files for L10n" 
task :makemo do 
  require 'gettext/utils'
  GetText.create_mofiles(true, "po", "locale") 
end

desc "Update pot/po files to match new version."
task :updatepo do require
  'gettext/utils' GetText.update_pofiles("APPLIKATION",
  Dir.glob("{app,lib}/**/*.{rb,rhtml}"), "APPLIKATION 1.2.0") 
end 
```

Bitte statt APPLIKATION den Namen der eigenen RoR-Applikation einsetzen. Dabei
die Versionsnummer auch passend abändern. Dieser Name und die Version sind
wichtig für die Übersetzungs-Dateien.

Ab nun kennt rake zwei weitere Befehle speziell für GetText.

In der Datei _app/controllers/application.rb_ müssen jetzt noch zwei Zeilen
ergänzt werden, danach ist alles fertig für die erste Benutzung.

Am Anfang der Datei: `require 'gettext/rails'`

Nach der class-Zeile: `init_gettext "APPLIKATION"`

Und bitte hier APPLIKATION ersetzen durch den Namen, der in der gettext.rake
definiert wurde.

**Erster Test**

Um nun zu testen, ob alles wirklich funktioniert, öffnet bitte eine der
.rhtml-Dateien und fügt dort folgende Zeile hinzu:

`_("Hello World!")`

Im Terminal müsst Ihr nun 

`rake updatepo`

aufrufen. Dies erzeugt die Datei po/APPLIKATION.pot. Um nun den Text ins
deutsche zu übersetzen, kopiert die Datei einfach nach po/de/APPLIKATION.po. 

Wenn Ihr nun die Datei öffnet, werdet Ihr sehen, das rake schon so einiges in
die Datei eingetragen hat. Jedes Feld jedes Model wurde schon vorgesehen für
die Übersetzung. Praktisch, oder?

Aber wir wollen ja eigentlich als ersten Schritt nur das Hello World
übersetzen. Sucht die Zeile msgid "Hello World!".  Das ist die ID des folgenden
Strings. Der folgende String ist allerdings noch leer: msgstr "". Einfach in
die "" das benötige Hallo Welt einsetzen und die Datei speichern.

Nachdem wir nun die Übersetzung geschrieben haben, müssen die po-Dateien noch
in das .mo-Format umgewandelt werden. Das erledigt folgendes Kommando:

`rake makemo`

Startet nun euren Rails-Server und schaut euch eure Seite an. Der Text wurde
nun übersetzt. Alle Fehlermeldungen für Formulare sind nun auch schon
automatisch übersetzt. Praktisch, oder?

**Übersetzung im täglichen Leben**

Ab jetzt ist's alles ganz einfach. Überall, wo Text übersetzt werden sollte,
einfach _("Text") eingeben. Um die neuen Texte in die vorhandenen .po-Dateien
einzufügen, einfach _rake updatepo_ eingeben und schon wird das Feld
hinzugefügt. Keine Angst, die vorhandenen Texte werden dabei nicht verändert.

**Weitere interessante Seiten**

  * Das GetText-Rails Beispiel, zu finden hier:
    `/usr/local/lib/ruby/gems/1.8/gems/gettext-1.9.0/samples/rails`
  * [GetText Übersetzungs-Howto](http://www.yotabanana.com/hiki/ruby-gettext-howto.html?ruby-gettext-howto)
  * [GetText im Rails-Manual](http://manuals.rubyonrails.com/read/chapter/105#page298)


