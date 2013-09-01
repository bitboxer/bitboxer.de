#!/usr/bin/env bash
jekyll build && rsync -avz --delete -e ssh _site/ bodo02@cygnus.uberspace.de:/var/www/virtual/bodo02/html
