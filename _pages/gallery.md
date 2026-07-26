---
title: Gallery
permalink: /gallery/
layout: gallery
author: Luis
---

<link rel="stylesheet" href="/assets/css/gallery.css">

{% assign pg_albums = site.data.gallery.albums | where_exp: "a", "a.hidden != true" %}
{% assign pg_has_gps = false %}
{% for a in pg_albums %}
  {% assign located = a.photos | where_exp: "p", "p.lat" %}
  {% if located.size > 0 %}{% assign pg_has_gps = true %}{% endif %}
{% endfor %}

<p class="pg-kicker">Photographs</p>
<h1 class="pg-heading">Taken slowly, on purpose.</h1>
<p class="pg-sub">
All images © Luis E. Cerezo, all rights reserved — for prints or licensing,
<a href="/about/">get in touch</a>.{% if pg_has_gps %} For the trips, there's a
<a href="/gallery/map/">map of where these were taken</a>.{% endif %}
Older work lives on <a href="https://500px.com/lcerezo">500px</a> and
<a href="https://www.flickr.com/photos/luiscerezo">Flickr</a>.
</p>

<div id="photo-gallery" class="photo-gallery"></div>

<script id="pg-data" type="application/json">
{
  "cdnBase": {{ site.data.gallery.cdn_base | jsonify }},
  "watermark": {{ site.data.gallery.watermark | jsonify }},
  "watermarkText": {{ site.data.gallery.watermark_text | jsonify }},
  "albums": {{ pg_albums | jsonify }}
}
</script>
<script src="/assets/js/gallery.js" defer></script>
