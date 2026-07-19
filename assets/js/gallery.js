/**
 * Photo gallery — album index + hash-routed album views.
 *
 *   /gallery/            → index of album covers
 *   /gallery/#<slug>     → that album's masonry grid
 *
 * Protection model (deterrence, not DRM — see PHOTO_PROTECTION.md in the
 * infra repo): images are fetched and painted onto <canvas> (no <img src>
 * to scrape or "Save Image As"), a transparent shield absorbs right-clicks,
 * contextmenu/drag/copy are suppressed, optional watermark is composited
 * onto the pixels, and the CDN only answers requests with the site's
 * Origin/Referer.
 *
 * Config comes from a JSON <script id="pg-data"> blob emitted by gallery.md.
 */
(function () {
  'use strict';

  var dataEl = document.getElementById('pg-data');
  var root = document.getElementById('photo-gallery');
  if (!dataEl || !root) return;

  var cfg;
  try {
    cfg = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  // ---- deterrents --------------------------------------------------------
  ['contextmenu', 'dragstart', 'selectstart', 'copy'].forEach(function (evt) {
    root.addEventListener(evt, function (e) { e.preventDefault(); });
  });

  // ---- canvas helpers ----------------------------------------------------
  var bitmapCache = {}; // url -> Promise<ImageBitmap>

  function loadBitmap(url) {
    if (!bitmapCache[url]) {
      bitmapCache[url] = fetch(url, { mode: 'cors', credentials: 'omit' })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + url);
          return r.blob();
        })
        .then(function (blob) { return createImageBitmap(blob); });
    }
    return bitmapCache[url];
  }

  function cdnUrl(file) {
    return cfg.cdnBase.replace(/\/$/, '') + '/' + file.replace(/^\//, '');
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

  function paint(canvas, bitmap, watermark) {
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);
    if (watermark) drawWatermark(ctx, bitmap.width, bitmap.height, cfg.watermarkText || '©');
  }

  function wantsWatermark(photo) {
    return photo.watermark !== undefined ? photo.watermark : cfg.watermark;
  }

  // Only fetch when the tile approaches the viewport.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      entry.target._pgLoad();
    });
  }, { rootMargin: '400px' });

  // ---- lightbox ----------------------------------------------------------
  var lb = document.createElement('div');
  lb.className = 'pg-lightbox';
  lb.innerHTML =
    '<button class="pg-lb-close" aria-label="Close">&times;</button>' +
    '<button class="pg-lb-prev" aria-label="Previous">&#8249;</button>' +
    '<canvas></canvas>' +
    '<div class="pg-lb-caption"></div>' +
    '<button class="pg-lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(lb);
  ['contextmenu', 'dragstart'].forEach(function (evt) {
    lb.addEventListener(evt, function (e) { e.preventDefault(); });
  });

  var lbCanvas = lb.querySelector('canvas');
  var lbCaption = lb.querySelector('.pg-lb-caption');
  var lbPhotos = [];
  var lbIndex = -1;

  function showLightbox(photos, index) {
    lbPhotos = photos;
    lbIndex = index;
    var photo = photos[index];
    loadBitmap(cdnUrl(photo.file)).then(function (bitmap) {
      paint(lbCanvas, bitmap, wantsWatermark(photo));
      lbCaption.textContent = (photo.title || '') + (photo.caption ? ' — ' + photo.caption : '');
      lb.classList.add('pg-open');
      document.body.style.overflow = 'hidden';
    }).catch(function () {});
  }

  function closeLightbox() {
    lb.classList.remove('pg-open');
    document.body.style.overflow = '';
    lbIndex = -1;
  }

  function step(delta) {
    if (lbIndex < 0) return;
    showLightbox(lbPhotos, (lbIndex + delta + lbPhotos.length) % lbPhotos.length);
  }

  lb.querySelector('.pg-lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.pg-lb-prev').addEventListener('click', function () { step(-1); });
  lb.querySelector('.pg-lb-next').addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lbIndex < 0) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  // ---- views -------------------------------------------------------------
  function clear() {
    root.innerHTML = '';
    window.scrollTo(0, 0);
  }

  function lazyCanvasTile(el, canvas, file, watermark) {
    el._pgLoad = function () {
      loadBitmap(cdnUrl(file))
        .then(function (bitmap) {
          paint(canvas, bitmap, watermark);
          el.classList.add('pg-loaded');
        })
        .catch(function () { el.remove(); });
    };
    observer.observe(el);
  }

  function renderIndex() {
    clear();
    var grid = document.createElement('div');
    grid.className = 'pg-index';
    root.appendChild(grid);

    cfg.albums.forEach(function (album) {
      var tile = document.createElement('div');
      tile.className = 'pg-cover';
      tile.tabIndex = 0;
      tile.setAttribute('role', 'link');
      tile.setAttribute('aria-label', album.title);

      var canvas = document.createElement('canvas');
      var shield = document.createElement('div');
      shield.className = 'pg-shield';

      var meta = document.createElement('div');
      meta.className = 'pg-cover-meta';
      var title = document.createElement('p');
      title.className = 'pg-cover-title';
      title.textContent = album.title;
      var sub = document.createElement('p');
      sub.className = 'pg-cover-sub';
      sub.textContent = album.photos.length + ' photographs' +
        (album.description ? ' · ' + album.description : '');
      meta.appendChild(title);
      meta.appendChild(sub);

      tile.appendChild(canvas);
      tile.appendChild(shield);
      tile.appendChild(meta);
      grid.appendChild(tile);

      function open() { location.hash = album.slug; }
      tile.addEventListener('click', open);
      tile.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });

      // cover_position: CSS object-position for the cover crop, e.g.
      // "center 70%" to keep the lower part of the photo in frame.
      if (album.cover_position) canvas.style.objectPosition = album.cover_position;

      var coverFile = album.cover || (album.photos[0] && album.photos[0].file);
      if (coverFile) lazyCanvasTile(tile, canvas, coverFile, false);
    });
  }

  function renderAlbum(album) {
    clear();

    var back = document.createElement('button');
    back.className = 'pg-back';
    back.textContent = '← all albums';
    back.addEventListener('click', function () { location.hash = ''; });
    root.appendChild(back);

    var heading = document.createElement('h2');
    heading.className = 'pg-heading';
    heading.textContent = album.title;
    root.appendChild(heading);

    if (album.description) {
      var desc = document.createElement('p');
      desc.className = 'pg-sub';
      desc.textContent = album.description;
      root.appendChild(desc);
    }

    var grid = document.createElement('div');
    grid.className = 'pg-grid';
    root.appendChild(grid);

    album.photos.forEach(function (photo, i) {
      var fig = document.createElement('figure');
      fig.className = 'pg-item';
      fig.tabIndex = 0;
      fig.setAttribute('role', 'img');
      fig.setAttribute('aria-label', photo.alt || photo.title || 'photo');

      var canvas = document.createElement('canvas');
      var shield = document.createElement('div');
      shield.className = 'pg-shield';

      var caption = document.createElement('figcaption');
      caption.textContent = (photo.title || '') + (photo.caption ? ' — ' + photo.caption : '');

      fig.appendChild(canvas);
      fig.appendChild(shield);
      fig.appendChild(caption);
      grid.appendChild(fig);

      fig.addEventListener('click', function () { showLightbox(album.photos, i); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showLightbox(album.photos, i);
        }
      });

      lazyCanvasTile(fig, canvas, photo.file, wantsWatermark(photo));
    });
  }

  function route() {
    closeLightbox();
    var slug = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var album = null;
    for (var i = 0; i < cfg.albums.length; i++) {
      if (cfg.albums[i].slug === slug) { album = cfg.albums[i]; break; }
    }
    if (album) renderAlbum(album);
    else renderIndex();
  }

  window.addEventListener('hashchange', route);
  route();
})();
