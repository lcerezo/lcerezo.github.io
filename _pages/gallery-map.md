---
title: Trip map
permalink: /gallery/map/
layout: gallery
author: Luis
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<link rel="stylesheet" href="/assets/css/gallery.css">
<link rel="stylesheet" href="/assets/css/gallery-map.css">

<p class="pg-kicker">Trips</p>
<h1 class="pg-heading">Where these were taken</h1>
<p class="pg-sub">
Each trip, drawn from the photos themselves — dots are photographs, taken
where they're plotted. Click one. <a href="/gallery/">Back to the gallery</a>.
</p>

<div id="trip-map"></div>

<script id="pg-data" type="application/json">
{
  "cdnBase": {{ site.data.gallery.cdn_base | jsonify }},
  "watermark": {{ site.data.gallery.watermark | jsonify }},
  "watermarkText": {{ site.data.gallery.watermark_text | jsonify }},
  "albums": {{ site.data.gallery.albums | where_exp: "a", "a.hidden != true" | jsonify }}
}
</script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="/assets/js/gallery-map.js" defer></script>
