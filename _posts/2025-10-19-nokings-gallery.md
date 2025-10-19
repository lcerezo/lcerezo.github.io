---
title: NO KINGS 2025 Gallery
date: 2025-10-19
header:
  show_overlay_excerpt: false
---

NO KINGS 2025

We fought a revolution to reject monarchy. Protesting keeps that spirit alive. When power forgets it answers to the people, we remind them. These are a few photos of my favorite protest signs.

<div id="gallery-container" class="photo-gallery">
  <div class="gallery-grid"></div>
  <div id="lightbox" class="lightbox">
    <span class="close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
    <div class="lightbox-nav">
      <button class="nav-btn prev">&lt;</button>
      <button class="nav-btn next">&gt;</button>
    </div>
  </div>
</div>

<style>
.photo-gallery {
  margin: 20px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.lightbox {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
}

.lightbox.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
}

.close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10000;
}

.close:hover {
  color: #ccc;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateY(-50%);
  pointer-events: none;
}

.nav-btn {
  pointer-events: all;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
}
</style>

<script>
(function() {
  const images = [
    '/assets/images/nokings2025/IMG_0711.jpg',
    '/assets/images/nokings2025/IMG_0712.jpg',
    '/assets/images/nokings2025/IMG_0713.jpg',
    '/assets/images/nokings2025/IMG_0714.jpg',
    '/assets/images/nokings2025/IMG_0715.jpg',
    '/assets/images/nokings2025/IMG_0716.jpg',
    '/assets/images/nokings2025/IMG_0717.jpg',
    '/assets/images/nokings2025/IMG_0718.jpg',
    '/assets/images/nokings2025/IMG_0719.jpg',
    '/assets/images/nokings2025/IMG_0720.jpg',
    '/assets/images/nokings2025/IMG_0721.jpg',
    '/assets/images/nokings2025/IMG_0722.jpg',
    '/assets/images/nokings2025/IMG_0723.jpg',
    '/assets/images/nokings2025/IMG_0724.jpg'
  ];

  let currentImageIndex = 0;
  const galleryGrid = document.querySelector('.gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.nav-btn.prev');
  const nextBtn = document.querySelector('.nav-btn.next');

  // Create gallery grid
  images.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `NO KINGS 2025 - Photo ${index + 1}`;
    img.loading = 'lazy';
    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(item);
  });

  function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = images[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
  }

  function showPrev() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
  }

  // Event listeners
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
})();
</script>
