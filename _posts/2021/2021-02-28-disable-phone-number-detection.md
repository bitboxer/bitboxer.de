---
locale: en
comments: true
date: 2021-02-28 00:00:00
layout: post
slug: disable-phone-detection
title: "Disable iOS/IE phone number detection"
categories: ios, dev, html
---
If you have a website with a lot of text on it, you might discover that iOS and Internet Explorer will sometimes add links when they think they discovered a phone number.

A lot of the time the detection is wrong and might even destroy a bit of the layout of the page.

To fix this you have to add some attributes to the page to disable the automatic format detection.

For IE you have to add the `x-ms-format-detection` attribute and set it to `none` in the `html` header, like so:

```html
<html lang="en" x-ms-format-detection="none">
````

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/x-ms-format-detection) for details.

For iOS/Safari you have to add this meta attribute:

```html
<meta name="format-detection" content="telephone=no">
```

See the [Apple Developer documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW1) for details.

It seems the list of stuff you have to add to a page to make it work smoothly everywhere gets longer and longer by every year.

A rather complete list of things you could put into the header can be found on [htmlhead.dev](https://htmlhead.dev/).
