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
      --paper: #efe9dc;
      --ink: #000;
      --accent: #ff3b00;
      --grid: rgba(0,0,0,0.08);
    }

    html, body { background: var(--paper); }

    body {
      font-family: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: var(--ink);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
      background-image:
        repeating-linear-gradient(0deg, var(--grid) 0 1px, transparent 1px 40px),
        repeating-linear-gradient(90deg, var(--grid) 0 1px, transparent 1px 40px);
      overflow-x: hidden;
    }

    .tape {
      padding: 0.6rem 1rem;
      background: var(--ink);
      color: var(--paper);
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: 3px solid var(--accent);
    }

    .tape span { display: inline-block; padding-right: 2rem; }

    .wrap {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1.5rem 5rem;
      position: relative;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 3px solid var(--ink);
      padding-bottom: 0.5rem;
      margin-bottom: 1.5rem;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .meta .stamp {
      color: var(--paper);
      background: var(--accent);
      padding: 0.25rem 0.6rem;
      transform: rotate(-3deg);
      display: inline-block;
      font-weight: 900;
    }

    h1 {
      font-family: 'Arial Black', 'Helvetica Neue', Helvetica, sans-serif;
      font-weight: 900;
      font-size: clamp(4rem, 18vw, 11rem);
      line-height: 0.82;
      letter-spacing: -0.055em;
      text-transform: uppercase;
      margin: 0.5rem 0 1rem;
    }

    h1 .line-1 { display: block; }
    h1 .line-2 {
      display: block;
      color: var(--paper);
      -webkit-text-stroke: 2px var(--ink);
      text-stroke: 2px var(--ink);
      margin-left: 1rem;
    }
    h1 .line-3 {
      display: block;
      background: var(--accent);
      color: var(--paper);
      padding: 0 0.25em;
      margin-left: 3rem;
      transform: rotate(-1.2deg);
      transform-origin: left center;
    }

    .scribble {
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      display: inline-block;
      transform: rotate(-3deg);
      background: var(--ink);
      color: var(--paper);
      padding: 0.3rem 0.6rem;
      margin: 2rem 0 2.5rem 0;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    @media (min-width: 720px) {
      .grid {
        grid-template-columns: 1.1fr 1fr;
        gap: 2.5rem;
      }
    }

    .photo-block {
      position: relative;
      border: 4px solid var(--ink);
      background: var(--paper);
      align-self: start;
    }

    .photo-block img {
      display: block;
      width: 100%;
      height: auto;
    }

    .photo-block::after {
      content: 'EXHIBIT A';
      position: absolute;
      bottom: -14px;
      left: 12px;
      background: var(--accent);
      color: var(--paper);
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      padding: 0.25rem 0.6rem;
    }

    .arrow-svg {
      position: absolute;
      right: -20px;
      top: 40%;
      width: 120px;
      height: 80px;
      pointer-events: none;
      display: none;
    }

    @media (min-width: 720px) {
      .arrow-svg { display: block; }
    }

    .copy {
      font-family: 'Times New Roman', Times, serif;
      font-size: 1.2rem;
      line-height: 1.45;
      align-self: center;
    }

    .copy p + p { margin-top: 0.9rem; }

    .copy .underline {
      background: var(--accent);
      color: var(--paper);
      padding: 0 0.15em;
    }

    .cta-area {
      border-top: 3px solid var(--ink);
      border-bottom: 3px solid var(--ink);
      padding: 2.5rem 1rem;
      text-align: center;
      background:
        repeating-linear-gradient(
          -45deg,
          var(--paper) 0 14px,
          #e3ddcf 14px 28px
        );
    }

    .cta {
      display: inline-block;
      font-family: 'Arial Black', Helvetica, sans-serif;
      font-size: clamp(1.6rem, 5vw, 2.5rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      padding: 1.1rem 2rem;
      background: var(--ink);
      color: var(--paper);
      text-decoration: none;
      border: 4px solid var(--ink);
      box-shadow: 10px 10px 0 var(--accent);
      transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;
    }

    .cta:hover {
      background: var(--accent);
      transform: translate(-3px, -3px);
      box-shadow: 13px 13px 0 var(--ink);
    }

    .cta:active {
      transform: translate(5px, 5px);
      box-shadow: 3px 3px 0 var(--accent);
    }

    .footer-stamp {
      margin-top: 2rem;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-align: center;
      color: var(--ink);
      opacity: 0.7;
    }

    @media (max-width: 520px) {
      h1 .line-3 { margin-left: 0.5rem; }
      h1 .line-2 { margin-left: 0.5rem; }
    }
  </style>
</head>
<body>

<div class="tape" aria-hidden="true">
  <span>&#9733; LOST &amp; FOUND &#9733; LOST &amp; FOUND &#9733; LOST &amp; FOUND &#9733; LOST &amp; FOUND &#9733; LOST &amp; FOUND &#9733; LOST &amp; FOUND &#9733;</span>
</div>

<div class="wrap">
  <div class="meta">
    <span>FILE № 0001</span>
    <span class="stamp">Reward: a thank you</span>
  </div>

  <h1>
    <span class="line-1">You</span>
    <span class="line-2">Actually</span>
    <span class="line-3">Found It.</span>
  </h1>

  <span class="scribble">&larr; read this &darr;</span>

  <div class="grid">
    <div class="photo-block">
      <img src="/assets/images/found_dog.jpg" alt="A very grateful pup">
    </div>

    <div class="copy">
      <p>Most people would've walked on by.</p>
      <p>You <span class="underline">didn't.</span></p>
      <p>So whatever of mine you're holding &mdash; keys, wallet, dog, dignity &mdash; let's get it back to where it belongs.</p>
    </div>
  </div>

  <div class="cta-area">
    <a href="mailto:FOUND@luiscerezo.org?subject=FOUND%20IT" class="cta">
      I found it!
    </a>
  </div>

  <p class="footer-stamp">&mdash;&mdash; no questions asked &mdash;&mdash;</p>
</div>

</body>
</html>
