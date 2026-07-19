/**
 * Trip map — plots GPS-tagged gallery photos on a Leaflet map.
 *
 * Each album with GPS photos becomes a route: a polyline through the photo
 * points in capture order, plus a dot per photo. Clicking a dot opens the
 * photo in a canvas-rendered viewer (same protection model as the gallery:
 * no <img src>, contextmenu/drag suppressed, optional watermark).
 *
 * Reads the same JSON blob (#pg-data) as gallery.js.
 */
(function () {
  'use strict';

  var dataEl = document.getElementById('pg-data');
  var mapEl = document.getElementById('trip-map');
  if (!dataEl || !mapEl || typeof L === 'undefined') return;

  var cfg;
  try {
    cfg = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  var ROUTE_COLORS = ['#c0392b', '#2471a3', '#1e8449', '#af601a', '#6c3483'];

  var map = L.map(mapEl, { scrollWheelZoom: true });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // ---- viewer (canvas, protected) ----------------------------------------
  var viewer = document.createElement('div');
  viewer.className = 'pg-lightbox';
  viewer.innerHTML =
    '<button class="pg-lb-close" aria-label="Close">&times;</button>' +
    '<canvas></canvas>' +
    '<div class="pg-lb-caption"></div>';
  document.body.appendChild(viewer);
  ['contextmenu', 'dragstart'].forEach(function (evt) {
    viewer.addEventListener(evt, function (e) { e.preventDefault(); });
  });
  viewer.querySelector('.pg-lb-close').addEventListener('click', close);
  viewer.addEventListener('click', function (e) { if (e.target === viewer) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  var canvas = viewer.querySelector('canvas');
  var captionEl = viewer.querySelector('.pg-lb-caption');

  function close() {
    viewer.classList.remove('pg-open');
    document.body.style.overflow = '';
  }

  function drawWatermark(ctx, w, h, text) {
    var size = Math.max(14, Math.round(Math.min(w, h) / 28));
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.font = '600 ' + size + 'px "Helvetica Neue", Arial, sans-serif';
    ctx.textBaseline = 'bottom';
    ctx.textAlign = 'right';
    ctx.lineWidth = Math.max(1, size / 10);
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.strokeText(text, w - size, h - size * 0.8);
    ctx.fillText(text, w - size, h - size * 0.8);
    ctx.restore();
  }

  function openPhoto(photo, albumTitle) {
    var url = cfg.cdnBase.replace(/\/$/, '') + '/' + photo.file.replace(/^\//, '');
    fetch(url, { mode: 'cors', credentials: 'omit' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.blob();
      })
      .then(function (blob) { return createImageBitmap(blob); })
      .then(function (bitmap) {
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);
        var wm = photo.watermark !== undefined ? photo.watermark : cfg.watermark;
        if (wm) drawWatermark(ctx, bitmap.width, bitmap.height, cfg.watermarkText || '©');
        captionEl.textContent = (photo.title || '') + ' — ' + albumTitle;
        viewer.classList.add('pg-open');
        document.body.style.overflow = 'hidden';
      })
      .catch(function () { /* leave map as-is on fetch failure */ });
  }

  // ---- routes -------------------------------------------------------------
  var allPoints = [];
  var legend = [];

  cfg.albums.forEach(function (album, ai) {
    var located = album.photos.filter(function (p) {
      return typeof p.lat === 'number' && typeof p.lon === 'number';
    });
    if (!located.length) return;

    var color = ROUTE_COLORS[ai % ROUTE_COLORS.length];
    var latlngs = located.map(function (p) { return [p.lat, p.lon]; });
    allPoints = allPoints.concat(latlngs);
    legend.push({ title: album.title, color: color, count: located.length });

    L.polyline(latlngs, {
      color: color,
      weight: 3,
      opacity: 0.55,
      dashArray: '6 8'
    }).addTo(map);

    located.forEach(function (photo) {
      var dot = L.circleMarker([photo.lat, photo.lon], {
        radius: 7,
        color: '#fff',
        weight: 2,
        fillColor: color,
        fillOpacity: 0.95
      }).addTo(map);
      dot.bindTooltip(photo.title || album.title, { direction: 'top', offset: [0, -6] });
      dot.on('click', function () { openPhoto(photo, album.title); });
    });
  });

  if (allPoints.length) {
    map.fitBounds(L.latLngBounds(allPoints), { padding: [40, 40] });
  } else {
    map.setView([20, 0], 2);
    mapEl.insertAdjacentHTML('afterend',
      '<p class="notice">No GPS-tagged photos yet.</p>');
  }

  // ---- legend -------------------------------------------------------------
  if (legend.length) {
    var box = L.control({ position: 'bottomleft' });
    box.onAdd = function () {
      var div = L.DomUtil.create('div', 'trip-map-legend');
      div.innerHTML = legend.map(function (l) {
        return '<span><i style="background:' + l.color + '"></i>' +
          l.title + ' (' + l.count + ')</span>';
      }).join('');
      return div;
    };
    box.addTo(map);
  }
})();
