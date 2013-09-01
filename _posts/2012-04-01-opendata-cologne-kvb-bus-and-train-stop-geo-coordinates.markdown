---
comments: true
date: 2012-04-01 17:43:15
layout: post
slug: opendata-cologne-kvb-bus-and-train-stop-geo-coordinates
title: OpenData - Cologne (KVB) bus and train stop geo coordinates
wordpress_id: 744
categories:
- Opendata
---

Today I played around with OpenStreetMap to get all geo locations for the stops
of the cologne train and bus system. I needed those as preparation for the
[Advance Hackathon](http://hackathon.advance-conference.com/) in April. To my
surprise it was relatively easy to get those out of OSM.

If you want to grap some datapoints from OSM, you just have to follow these
steps:

  1. Download the map data you need from
     [Cloudmade](http://downloads.cloudmade.com) or
     [Geofabrik](http://www.geofabrik.de/data/download.html).
  2. Download
     [osmosis](http://wiki.openstreetmap.org/wiki/Osmosis#Latest_Stable_Version)
  3. Filter the needed data with osmosis.

To get the cologne train stops you need to start osmosis like this:

```
osmosis --read-xml nordrhein-westfalen.osm --bb left=6.7481 right=7.1322 top=51.8251 bottom=50.7633 --tf accept-nodes railway=tram_stop,station,halt --tf reject-ways --tf reject-relations --write-xml trainstop.osm
```

The bus stops can be collected like this: 

```
osmosis --read-xml nordrhein-westfalen.osm --bb left=6.7481 right=7.1322 top=51.8251 bottom=50.7633 --tf accept-nodes highway=bus_stop --tf reject-ways --tf reject-relations --write-xml busstop.osm
```

After a little data parsing session I got the result I needed. All locations
for all stops and their KVB-ID.  You can use the KVB-ID on the KVB-Website to
see detailed informations of that station. The URL for those look like this:

[http://www.kvb-koeln.de/german/hst/overview/KVB-ID/](http://www.kvb-koeln.de/german/hst/overview/885/)

The data can be found in [this git repo](https://github.com/bitboxer/kvb_geo).
