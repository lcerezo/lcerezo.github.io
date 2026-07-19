---
title: Gallery
permalink: /gallery/
layout: gallery
author: Luis
---

<link rel="stylesheet" href="/assets/css/gallery.css">

<p class="pg-kicker">Photographs</p>
<h1 class="pg-heading">Taken slowly, on purpose.</h1>
<p class="pg-sub">
All images © Luis E. Cerezo, all rights reserved — for prints or licensing,
<a href="/about/">get in touch</a>. For the trips, there's a
<a href="/gallery/map/">map of where these were taken</a>.
Older work lives on <a href="https://500px.com/lcerezo">500px</a> and
<a href="https://www.flickr.com/photos/luiscerezo">Flickr</a>.
</p>

<div id="photo-gallery" class="photo-gallery"></div>

<script id="pg-data" type="application/json">
{
  "cdnBase": {{ site.data.gallery.cdn_base | jsonify }},
  "watermark": {{ site.data.gallery.watermark | jsonify }},
  "watermarkText": {{ site.data.gallery.watermark_text | jsonify }},
  "albums": {{ site.data.gallery.albums | jsonify }}
}
</script>
<script src="/assets/js/gallery.js" defer></script>
