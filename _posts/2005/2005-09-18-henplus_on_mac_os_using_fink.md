---
locale: de
comments: true
date: 2005-09-18 20:56:16
layout: post
slug: henplus_on_mac_os_using_fink
title: Henplus on Mac OS using Fink
wordpress_id: 104
categories:
tags:
- Mac
- Software
---

I can't live without it: [Henplus](http://henplus.sf.net). It's a great commandline interface to JDBC-Databases.

To install Henplus on Mac OS X you need to follow these few steps:

  * [Install Fink](http://fink.sourceforge.net/doc/users-guide/index.php)
  * Enter : `sudo fink install readline-java` in the Terminal
  * Modify the `build.xml`, this modifies the classpath to the location of the `libreadline-java.jar`:

``` xml
<target name="compile" depends="prepare,Version.java" description="compile it">
 <javac srcdir="${src}" destdir="${classes}" classpath="/sw/share/java/readline-java/libreadline-java.jar"/>
</target>
```

  * Modify the `bin/henplus`-Skript and changes the Library-Paths to the Fink-Installation

```
LD_LIBRARY_PATH=/sw/lib:$THISDIR/../lib:/usr/lib/jni:$LD_LIBRARY_PATH
CLASSPATH=$CLASSPATH:/sw/share/java/readline-java/libreadline-java.jar   
```

  * Create a Symbolic Link to `/sw/lib/libJavaReadline.jnilb` in the Directory `~/Library/Java/Extensions`
  * Run `sudo ant install`
  * Install all your needed JDBC-Drivers in `/usr/share/henplus`
  * That's it
