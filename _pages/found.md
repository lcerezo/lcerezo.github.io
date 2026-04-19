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
      --bg: #f6f4ef;
      --ink: #111111;
      --ink-soft: #555555;
      --rule: #111111;
      --accent: #d6442c;
    }

    html, body { background: var(--bg); }

    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: var(--ink);
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .masthead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--rule);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 600;
    }

    .masthead .issue { color: var(--ink-soft); font-weight: 500; }

    .wrap {
      max-width: 640px;
      margin: 0 auto;
      padding: 4rem 1.5rem 5rem;
      animation: rise 0.8s ease-out;
    }

    .kicker {
      display: inline-flex;
      align-items: baseline;
      gap: 0.6rem;
      font-size: 0.72rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 1.75rem;
    }

    .kicker .num {
      color: var(--ink);
      font-variant-numeric: tabular-nums;
    }

    h1 {
      font-size: clamp(3rem, 10vw, 5.75rem);
      font-weight: 800;
      line-height: 0.95;
      letter-spacing: -0.035em;
      margin-bottom: 1.5rem;
    }

    h1 .accent { color: var(--accent); }

    .deck {
      font-family: 'Iowan Old Style', Georgia, serif;
      font-size: clamp(1.15rem, 2.6vw, 1.4rem);
      line-height: 1.4;
      color: var(--ink-soft);
      font-style: italic;
      max-width: 38ch;
      margin-bottom: 3rem;
    }

    figure {
      margin: 0 0 3rem;
    }

    figure img {
      display: block;
      width: 100%;
      height: auto;
      filter: saturate(0.92) contrast(1.02);
    }

    figcaption {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 0.65rem;
      padding-top: 0.6rem;
      border-top: 1px solid var(--ink);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 600;
    }

    figcaption .credit { color: var(--ink-soft); font-weight: 500; }

    .body {
      font-family: 'Iowan Old Style', Georgia, serif;
      font-size: 1.15rem;
      line-height: 1.55;
      max-width: 56ch;
      margin-bottom: 2.5rem;
    }

    .body p + p { margin-top: 1rem; }

    .body .dropcap::first-letter {
      float: left;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 800;
      font-size: 4.2rem;
      line-height: 0.85;
      padding: 0.35rem 0.75rem 0 0;
      color: var(--accent);
    }

    .cta-row {
      display: flex;
      justify-content: center;
      padding-top: 2.5rem;
      border-top: 1px solid var(--ink);
    }

    .cta {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      padding: 1.1rem 1.75rem;
      font-size: 0.85rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--bg);
      background: var(--accent);
      text-decoration: none;
      box-shadow: 6px 6px 0 var(--ink);
      transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;
    }

    .cta:hover {
      background: var(--ink);
      transform: translate(-2px, -2px);
      box-shadow: 8px 8px 0 var(--accent);
    }

    .cta:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 var(--ink);
    }

    @keyframes rise {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: reduce) {
      .wrap { animation: none; }
    }

    @media (max-width: 540px) {
      .wrap { padding: 2.5rem 1.25rem 3.5rem; }
      .masthead { padding: 1rem 1.25rem; }
    }
  </style>
</head>
<body>

<header class="masthead">
  <span>Luis&nbsp;E.&nbsp;Cerezo</span>
  <span class="issue">Lost &amp; Found &nbsp;/&nbsp; Vol. 01</span>
</header>

<main class="wrap">
  <div class="kicker">
    <span class="num">№ 01</span>
    <span>&mdash; A note to a good stranger</span>
  </div>

  <h1>You found<br>something <span class="accent">of mine.</span></h1>

  <p class="deck">Which, statistically speaking, makes you one of the good ones.</p>

  <figure>
    <img src="/assets/images/found_dog.jpg" alt="A very grateful pup">
    <figcaption>
      <span>Exhibit&nbsp;A</span>
      <span class="credit">The beneficiary, pictured</span>
    </figcaption>
  </figure>

  <div class="body">
    <p class="dropcap">Thank you for taking a minute to track down the owner of whatever you're holding. Most people would've shrugged and walked on &mdash; you didn't.</p>
    <p>Send me a quick note and we'll figure out the handoff. Coffee's on me if you're nearby.</p>
  </div>

  <div class="cta-row">
    <a href="mailto:FOUND@luiscerezo.org?subject=FOUND%20IT" class="cta">
      I found it!
    </a>
  </div>
</main>

</body>
</html>
