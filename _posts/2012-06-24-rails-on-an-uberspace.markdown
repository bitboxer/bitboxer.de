---
comments: true
date: 2012-06-24 16:51:29
layout: post
slug: rails-on-an-uberspace
title: Rails on Uberspace
wordpress_id: 1046
categories:
- Development
---

Last week I migrated a few projects to
[Uberspace](http://bitboxer.de/2012/06/17/moved-to-uberspace/). Some of them
are rails projects and I had to find a good way to run them on Uberspace. There
is an entry in the [Uberspace Wiki](http://uberspace.de/dokuwiki/cool:rails)
for using Rails, but that one is using FastCGI, so I had to find a
way to install passenger on my own. This is how I did it.

**Installing passenger**

First you have to change the ruby version and add the ``--user-install`` flag to your
rubygems settings. For details on this please see the [Uberspace Wiki](https://uberspace.de/dokuwiki/development:ruby).
And don't forget to read the bundler paragraph as well :wink: .

After that I had to install passenger:

```
gem install passenger
passenger-install-nginx-module
```

This will install passenger and builds a nginx with the passenger module
included. When asked for a location for nginx, answer that with `/home/USERNAME/nginx`.

Now nginx and passenger are installed. Next stop is configuring nginx to run on
the uberspace. Open the `~/nginx/conf/nginx.conf` and add this at the top:

```
daemon off;
```

This disables the daemon mode. We will run nginx with
[Daemontools](http://uberspace.de/dokuwiki/system:daemontools) and don't need
the ngnix deamon system.

And now in the server block you have to change a few things to make it look
like this:

```
listen       MYPORT;

location / {
    root   /home/MYUBERSPACE/MYRAILSPROJECT/current/public;
    passenger_enabled on;
}
```

Replace MYPORT with an unused port on that machine. Since you are sharing the
ports with all users on the uberspace machine, you have to check for a port
that is not already in use by another user. The root location must be the
public folder inside of the rails project.

**Configure memcache**

Next stop is memcache. Since the machine is used by a lot of other users, you
should try to remove load from the cpu. Using caching will fix this. Because
you are also sharing the ports, you can't just start a memcache on an unused
port. If you would do this and cache user data in the memcache, everyone would
have access to those. You don't want that to happen. The solution to this is
running memcache in unix sockets mode. The unix socket should be in your home
directory, that way only you can access the memcache. Sadly the 2.0 branch of
dalli (the memcache gem) does not support unix sockets
[anymore](http://github.com/mperham/dalli/issues/229), you have to use an old
version of it.

Change the memcache gem line in your `Gemfile` to this:

```
gem 'dalli', '~> 1.1.5'
```

And now configure your `cache_store` in `config/environments/production.rb` to
use the unix socket of your memcache.

``` ruby
config.cache_store = :dalli_store, '/home/MYUBERSPACE/memcached.sock'
```

**Starting the services**

Now everything should be configured correctly. It is time to start the nginx
and memcache. To do this we will use
[daemontools](http://uberspace.de/dokuwiki/system:daemontools). The daemontools
will start the processes and monitors them. If the uberspace needs to reboot,
it will also restart them.

First install the daemontools with this command:

```
uberspace-setup-svscan
```

Now you can add nginx to the daemontools like this:

```
uberspace-setup-service nginx ~/bin/nginx
```

And memcache like this:

```
uberspace-setup-service memcache /usr/bin/memcached -s $HOME/memcached.sock
```

With that daemontools installs and starts the services. Please look into the
[wiki](http://uberspace.de/dokuwiki/system:daemontools) for details.

**Redirect the apache requests**

Add this to the `.htaccess` file in `$HOME/html`

```
RewriteEngine on
RewriteRule ^(.*)$ http://localhost:MYPORT/$1 [P]
```

This will tell apache to proxy all requests on that domain to the nginx that is
accepting connections on MYPORT.

But always remember: you are sharing that host with other people. Don't
configure passenger with 40 workers...memory on that machine is a scarce
resource
