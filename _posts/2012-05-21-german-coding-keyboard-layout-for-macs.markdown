---
comments: true
date: 2012-05-21 17:19:38
layout: post
slug: german-coding-keyboard-layout-for-macs
title: German mac keyboard layout for coders
wordpress_id: 944
categories:
- Software
---

![](/images/2012-05-21-german-coding-keyboard-layout-for-macs/aeoeue.jpg)

Besides talking about ruby and other stuff on the
[sigint](http://bitboxer.de/2012/05/20/sigint-2012/) I also talked with a few
guys about keyboard layouts. I struggled with the german keyboard layout for a
while now. It's very hard to access brackets ( []{} ) on it. Sadly those
brackets are very important if you write code. Even more if you write in
objective c. Choosing
[dvorak](http://de.wikipedia.org/wiki/Dvorak-Tastaturbelegung) or
[neo](http://de.wikipedia.org/wiki/Neo_(Tastaturbelegung)) would not help, both
need modifiers for the brackets, too. We discussed a lot of options and the
best one was to change the öäü keys back to brackets. With that solution you
have the best of both worlds. You don't need to change your writing habbit a
lot and you have fast access to those keys.

Luckily [Frederic](http://frederic-hemberger.de/) already started a keyboard
layout that I could use, but it didn't go far enough. I took his file and
enhanced it a little bit.

My keyboard layout for my mac now looks like a german keyboard with these keys
changed:

<table>
  <tbody><tr>
    <th>Key</th>
    <th>Normal</th>
    <th>Shift</th>
    <th>Alt</th>
    <th>Alt+Shift</th>
  </tr>
  <tr>
    <td>ö</td>
    <td>[</td>
    <td>{</td>
    <td>ö</td>
    <td>Ö</td>
  </tr>
  <tr>
    <td>ä</td>
    <td>]</td>
    <td>}</td>
    <td>ä</td>
    <td>Ä</td>
  </tr>
  <tr>
    <td>ü</td>
    <td>\</td>
    <td>|</td>
    <td>ü</td>
    <td>Ü</td>
  </tr>
  <tr>
    <td>ß</td>
    <td>~</td>
    <td>?</td>
    <td>ß</td>
    <td>˙</td>
  </tr>
</tbody></table>

If you are interested in using it, feel free to clone it from [github](https://github.com/bitboxer/de-coding.keylayout).
