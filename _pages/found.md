---
title: "YOU FOUND MY THING!"
permalink: /found/
layout: null
redirect_from:
  - /Found/
  - /FOUND/
  - /Found
  - /FOUND
---

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You Found It!</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
      background: #0a0a1a;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
    }

    .found-container {
      width: 100%;
      max-width: 480px;
      padding: 2rem 1.25rem 3rem;
      text-align: center;
      animation: fadeInUp 0.8s ease-out;
    }

    .found-badge {
      display: inline-block;
      background: linear-gradient(135deg, #00c853, #00e676);
      color: #0a0a1a;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2.2rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #ffd700, #ff6b6b, #ffd700);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #aaa;
      margin-bottom: 1.5rem;
    }

    .dog-photo-wrapper {
      position: relative;
      margin: 0 auto 1.5rem;
      width: 75vw;
      max-width: 320px;
      aspect-ratio: auto;
    }

    .dog-photo-wrapper::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 1.25rem;
      background: linear-gradient(135deg, #ffd700, #ff6b6b, #7c4dff, #00e5ff, #ffd700);
      background-size: 300% 300%;
      animation: borderRotate 4s ease infinite;
      z-index: 0;
    }

    .dog-photo {
      position: relative;
      z-index: 1;
      width: 100%;
      height: auto;
      border-radius: 1rem;
      display: block;
    }

    .message-card {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem 1.25rem;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
    }

    .message-card p {
      font-size: 1.05rem;
      line-height: 1.6;
      color: #ddd;
    }

    .message-card p + p {
      margin-top: 0.75rem;
    }

    .message-card strong {
      color: #fff;
    }

    .cta-button {
      display: block;
      width: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: #0a0a1a;
      background: linear-gradient(135deg, #00e676, #00c853);
      border: none;
      border-radius: 0.75rem;
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 20px rgba(0, 230, 118, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 30px rgba(0, 230, 118, 0.5);
    }

    .cta-button:active {
      transform: translateY(0);
    }

    .alt-contact {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #888;
    }

    .alt-contact a {
      color: #7c9dff;
      text-decoration: none;
    }

    .paw-prints {
      margin-top: 2rem;
      font-size: 1.5rem;
      letter-spacing: 0.5rem;
      opacity: 0.3;
    }

    /* Confetti canvas */
    #confetti-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }

    @keyframes borderRotate {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @media (min-width: 600px) {
      .found-container { padding: 3rem 2rem 4rem; }
      h1 { font-size: 2.8rem; }
    }
  </style>
</head>
<body>

<canvas id="confetti-canvas"></canvas>

<div class="found-container">
  <div class="found-badge">Thank you!</div>
  <h1>You Found My Thing!</h1>
  <p class="subtitle">You're a good human. This one thanks you.</p>

  <div class="dog-photo-wrapper">
    <img src="/assets/images/found_dog.jpg" alt="A very grateful pup" class="dog-photo">
  </div>

  <div class="message-card">
    <p><strong>Thank you so much</strong> for taking the time to look for the proper owner.</p>
    <p>Please reach out and I'll connect with you ASAP.</p>
  </div>

  <a href="mailto:FOUND@luiscerezo.org?subject=FOUND%20IT" class="cta-button">
    Email Me &rarr; FOUND@luiscerezo.org
  </a>

  <p class="alt-contact">or email directly: <a href="mailto:FOUND@luiscerezo.org">FOUND@luiscerezo.org</a></p>

  <div class="paw-prints" aria-hidden="true">&#128062; &#128062; &#128062;</div>
</div>

<script>
(function() {
  var canvas = document.getElementById('confetti-canvas');
  var ctx = canvas.getContext('2d');
  var pieces = [];
  var running = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var colors = ['#ffd700','#ff6b6b','#00e676','#7c4dff','#00e5ff','#ff9100','#e040fb'];

  for (var i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      drift: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  var startTime = Date.now();

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var elapsed = Date.now() - startTime;
    var fadeStart = 3000;

    var allDone = true;
    for (var i = 0; i < pieces.length; i++) {
      var p = pieces[i];
      p.y += p.speed;
      p.x += p.drift;
      p.rot += p.rotSpeed;

      if (elapsed > fadeStart) {
        p.opacity = Math.max(0, p.opacity - 0.008);
      }

      if (p.opacity <= 0) continue;
      allDone = false;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    if (allDone) {
      running = false;
      canvas.remove();
      return;
    }
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
</script>

</body>
</html>
