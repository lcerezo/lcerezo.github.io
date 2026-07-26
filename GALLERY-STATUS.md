# Photo gallery — status & how to pick this back up

_Last updated: 2026-07-26. Everything below is live except where marked TODO._

## What exists

**Backend (deployed, account 030313612168, profile `personal-lec`, us-east-1)**
- CloudFront `EDR22FR3T5YHP` → `https://dlt23dunpqfwk.cloudfront.net`, fronting
  `s3://media.luiscerezo.org/public/` ONLY (originals outside `public/` are unreachable).
- S3 sealed: OAC + bucket policy = CloudFront-only; BlockPublicAccess on both
  `media.luiscerezo.org` and `luiscerezo.org` (their old public policies are inert).
- Origin/Referer guard (CloudFront Function): 403 unless request comes from
  luiscerezo.org or localhost:4000. CORS locked to same. `X-Robots-Tag: noindex`.
- IaC: OpenTofu (`tenv`), repo `~/src/luiscerezo.org-infra`, state in
  `s3://luiscerezo.org/tf-state/photo-gallery/`. `tofu plan` was clean at session end.
- S3 Inventory `logs-audit` on `luiscerezo.org` (daily CSV → `_inventory/`, scoped
  to `logs/`): ~583k access-log files back to 2014. TODO: lifecycle rule to expire.

**Frontend (this repo — all local/UNCOMMITTED, publishing = committing + pushing)**
- `/gallery/` — album-cover index → hash-routed album (`/gallery/#<slug>`) →
  masonry grid → canvas lightbox. Dark-room layout (`_layouts/gallery.html` +
  `assets/css/gallery.css`), lazy loading, scrape deterrents (canvas rendering,
  no <img src>, shield overlay, contextmenu blocked).
- `/gallery/map/` — Leaflet/OSM trip map; photo GPS → route polyline + clickable dots.
- Data: `_data/gallery.yml`. Per album: title/slug/description/cover/
  `cover_position` (CSS object-position for the cover crop)/`hidden`/photos.
  Per photo: file/title/alt/optional caption/watermark/lat/lon.
- Albums live: longmont-cruise-2026 (14 photos, X100F, no GPS),
  foxy (8 photos, 2012, no GPS).
- `hidden: true` on an album drops it at build time — the Liquid in
  `_pages/gallery.md` / `gallery-map.md` filters it before `jsonify`, so its
  photo URLs never reach the HTML. Assets stay in S3/the CDN untouched.
  Currently hidden: cotswolds-2019 (74 photos, 57 w/ GPS).
- The `/gallery/map/` link on `/gallery/` only renders when some visible album
  has GPS. Cotswolds was the only one, so the map is unlinked today (the page
  still builds and is reachable directly).

## Publish checklist (when done tinkering)
1. `git add` the gallery files (this file too if wanted) and push — GitHub Pages does the rest.
2. In `~/src/luiscerezo.org-infra/photo-gallery/terraform.tfvars` set
   `allow_localhost_dev = false`, then `tofu apply` (removes localhost from CDN allowlist).
3. Spot-check https://www.luiscerezo.org/gallery/ and /gallery/map/.

## Add a new album
```sh
cd ~/src/luiscerezo.org-infra/photo-gallery/scripts
export AWS_PROFILE=personal-lec PHOTOS_BUCKET=media.luiscerezo.org
./prepare_photos.sh <src-dir> <album-slug> --keep-exif            # review web-ready/<slug>/
./prepare_photos.sh <src-dir> <album-slug> --keep-exif --upload   # then upload
./emit_album_yaml.py web-ready/<album-slug> <album-slug> --trip-name "Nice Name"
# paste output into _data/gallery.yml under a new album block (title/slug/description/cover)
```
Flags: `--bake-watermark` burns the watermark into pixels; omit `--keep-exif` to
strip EXIF/GPS. Site-wide client-side watermark: `watermark:` in gallery.yml.

## Known knobs / open ideas (rough priority)
- Thumbnails: grid loads ~640px thumbs, lightbox fetches 2048px. Biggest win for
  bandwidth + scrape resistance. prepare_photos.sh would emit `thumbs/`.
- Lifecycle rule for `luiscerezo.org/logs/` once inventory report reviewed.
- Bucket versioning on `luiscerezo.org` (tf state lives there, no versioning today).
- Lambda-on-upload thumbnails + manifest (only if publish flow should be "just upload").
- Vanity domain photos.luiscerezo.org: ACM cert us-east-1 + grey-cloud CNAME in
  Cloudflare + `custom_domain` in tfvars.
- Cover crop per album: `cover_position: "center NN%"` (higher % = lower part of photo).
- If map GPS precision near home ever matters: fuzz coords in emit_album_yaml.py.

## Gotchas learned this session
- Browser cache bites: hard-refresh (⌘⇧R) after gallery.js/css changes.
- jekyll serve sometimes misses `_data/` changes — restart it.
- Replaced (same-name) S3 files need a CloudFront invalidation; new files don't.
- prepare_photos.sh lowercases filenames (IMG_x.jpg → img_x.jpg).
- Foxy originals have an old baked watermark © www.luiscerezo.org.
