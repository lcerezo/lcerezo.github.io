---
title: "YOU FOUND MY THING!"
permalink: /found/
layout: null
---

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You Found It!</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --paper: #f3ebdd;
      --paper-2: #ece2d0;
      --ink: #2b211a;
      --ink-soft: #6b5d52;
      --accent: #b6462c;
      --accent-dark: #8f3620;
      --rule: #d8c9b2;
    }

    body {
      font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, serif;
      background: var(--paper);
      background-image:
        radial-gradient(ellipse at top, rgba(255,255,255,0.35), transparent 60%),
        radial-gradient(ellipse at bottom, rgba(139,99,61,0.08), transparent 55%);
      color: var(--ink);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      width: 100%;
      max-width: 460px;
      padding: 3rem 1.5rem 4rem;
      text-align: center;
      animation: fadeIn 0.9s ease-out;
    }

    .eyebrow {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--ink-soft);
      margin-bottom: 1.25rem;
    }

    .eyebrow::before,
    .eyebrow::after {
      content: '';
      display: inline-block;
      width: 1.4rem;
      height: 1px;
      background: var(--rule);
      vertical-align: middle;
      margin: 0 0.6rem 0.2rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: 400;
      font-style: italic;
      line-height: 1.05;
      letter-spacing: -0.01em;
      margin-bottom: 0.75rem;
      color: var(--ink);
    }

    h1 .amp {
      color: var(--accent);
      font-weight: 400;
    }

    .subtitle {
      font-size: 1.05rem;
      color: var(--ink-soft);
      font-style: italic;
      margin-bottom: 2.25rem;
    }

    .polaroid {
      display: inline-block;
      background: #fdfaf3;
      padding: 0.75rem 0.75rem 2.5rem;
      box-shadow:
        0 1px 2px rgba(43,33,26,0.08),
        0 14px 30px rgba(43,33,26,0.18);
      transform: rotate(-2deg);
      margin: 0.5rem auto 2rem;
      position: relative;
    }

    .polaroid::after {
      content: 'thank you';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.6rem;
      font-family: 'Bradley Hand', 'Segoe Script', 'Comic Sans MS', cursive;
      font-size: 1.1rem;
      color: var(--ink-soft);
    }

    .polaroid img {
      display: block;
      width: 260px;
      max-width: 70vw;
      height: auto;
    }

    .note {
      text-align: left;
      font-size: 1.08rem;
      line-height: 1.65;
      color: var(--ink);
      margin: 0 auto 2rem;
      max-width: 380px;
    }

    .note p + p { margin-top: 0.9rem; }

    .divider {
      width: 40px;
      height: 1px;
      background: var(--rule);
      margin: 2rem auto;
    }

    .cta {
      display: inline-block;
      padding: 0.95rem 1.75rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: #fdfaf3;
      background: var(--accent);
      border: none;
      border-radius: 2rem;
      text-decoration: none;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .cta:hover {
      background: var(--accent-dark);
      transform: translateY(-1px);
    }

    .signoff {
      margin-top: 2.5rem;
      font-size: 0.95rem;
      color: var(--ink-soft);
      font-style: italic;
    }

    .signoff .name {
      display: block;
      margin-top: 0.35rem;
      font-family: 'Bradley Hand', 'Segoe Script', 'Snell Roundhand', cursive;
      font-style: normal;
      font-size: 1.6rem;
      color: var(--ink);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (min-width: 600px) {
      h1 { font-size: 3.5rem; }
      .polaroid img { width: 300px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .container { animation: none; }
    }
  </style>
</head>
<body>

<div class="container">
  <div class="eyebrow">a small note</div>

  <h1>You found it.</h1>
  <p class="subtitle">And that makes you rare.</p>

  <div class="polaroid">
    <img src="/assets/images/found_dog.jpg" alt="A very grateful pup">
  </div>

  <div class="note">
    <p>Whatever of mine you've got in your hands &mdash; thank you for bothering to track down its owner. Most people wouldn't.</p>
    <p>Drop me a line and we'll sort out the handoff.</p>
  </div>

  <a href="mailto:FOUND@luiscerezo.org?subject=FOUND%20IT" class="cta">
    Email me &rarr;
  </a>

  <div class="divider"></div>

  <p class="signoff">
    with gratitude,
    <span class="name">Luis</span>
  </p>
</div>

</body>
</html>
