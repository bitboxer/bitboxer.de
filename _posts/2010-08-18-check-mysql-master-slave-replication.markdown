---
comments: true
date: 2010-08-18 21:31:06
layout: post
slug: check-mysql-master-slave-replication
title: Check MySQL Master-Slave replication
wordpress_id: 269
categories:
- Development
tags:
- Homebrew
- MySQL
---

A lot of [guides](http://railslab.newrelic.com/scaling-rails) explain that you
can use MySQL master-slave replication to scale your database performance. But
nobody explains how to keep the database instances in synch. MySQL replications
are very shaky and tend to break and mess up stuff very easily. From my
standpoint the whole replication scheme looks like a smart hack into the MySQL
system.

Till today I used some self written scripts to check our systems. Nobody told
me that there was a perfect toolchain for this problem already existing:
[Maatkit](http://www.maatkit.org/). Maatkit offers a few commandline tools that
help you to keep the slaves in synch with your master.

Install it using brew:

```
brew install maatkit
```

Check tables for differences :

```
mk-table-checksum h=HOSTMASTER,u=USERMASTER,p=PASSWORDMASTER h=HOSTSLAVE,u=USERSLAVE,p=PASSWORDSLAVE -d DATABASE | mk-checksum-filter
```

And after you found differences you can even use Maatkit to repair those tables:

```
mk-table-sync --execute --sync-to-master h=SLAVEIP,u=USER,p=PASSWORD,D=DATABASE,t=TABLE
```

Besides repairing damaged tables Maatkit helps you to check if the slave
replication is still working.
[Mk-heartbeat](http://www.maatkit.org/doc/mk-heartbeat.html) updates a
heartbeat table in the master database and checks if the slave database has
been updated. I have written a small script that wraps the heartbeat check and
sends a mail if the slave replication has stopped.

More documentation can be found [here](http://www.maatkit.org/doc/) and a few
examples in [this presentation](http://www.scribd.com/doc/15014708/Make-Your-Life-Easier-with-Maatkit).

And yes, using couchdb would make this toolchain obsolete :smile: .
