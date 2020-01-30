---
locale: de
comments: true
date: 2006-11-10 17:55:24
layout: post
slug: tag_cloud_plugin
title: Tag Cloud-Plugin
wordpress_id: 228
categories:
tags:
- b2evolution
- Coding
---

This is a simpe Plugin that creates a Tag-Cloud for you
[b2evolution](http://b2evolution.net)-blog.

**Example:**

![](/images/2006-11-10-tag_cloud_plugin/tag_cloud.png)

**Installation instructions:**

  1. Download the [plugin](http://evocms-plugins.svn.sourceforge.net/viewvc/*checkout*/evocms-plugins/tagcloud_plugin/trunk/_tagcloud.plugin.php).
  2. Copy the _tagcloud.plugin.php file into the "plugins" folder of your b2evolution installation.
  3. Login to the administrative interface for your blog.
  4. Install the Tag Cloud plugin from the Settings::Plug-ins::Available plugins table using the [Install] link.
  5. There is a bit of code to place in the _main.php file for any skin where
     you want the tag cloud to be used:  

``` php
<?php call_by_code( 'evo_TagCloud', array() ); ?>
```

I updated the Plugin for b2evolution 2.x. The new Version can be downloaded
[here](http://blog.wannawork.de/index.php?title=updated-to-b2evolution-2-x&more=1&c=1&tb=1&pb=1).
