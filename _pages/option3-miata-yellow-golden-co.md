---
title: "Option 3 — Miata SE, Blazing Yellow, Golden CO"
permalink: /option3-miata-yellow-golden-co/
author: Luis
sitemap: false
robots: noindex
---

<link rel="stylesheet" href="/assets/css/miata-market.css">

{% assign mm = site.data.miata_market %}
{% assign comps = mm.comps | sort: "date" | reverse %}
{% assign sold = comps | where: "sold", true %}
{% assign unsold = comps | where_exp: "c", "c.sold != true" %}

{%- comment -%} Sold prices, sorted ascending, for range + median. {%- endcomment -%}
{% assign priced = sold | where_exp: "c", "c.price" %}
{% assign by_price = priced | sort: "price" %}
{% assign total = 0 %}
{% for c in priced %}{% assign total = total | plus: c.price %}{% endfor %}

{% assign s = mm.subject %}
{% assign retail = mm.retail %}
{% assign r = retail.first %}
{% assign gap = mm.subject.ask | minus: by_price.last.price %}

<p class="mm-kicker">Comps packet · {{ mm.meta.updated | date: "%B %-d, %Y" }}</p>
<h1 class="mm-heading">{{ s.year }} Mazda {{ s.model }} SE — ${% include mm-thousands.html n=s.ask %}</h1>
<p class="mm-sub">
{% include mm-thousands.html n=s.mileage %} mi · {{ s.transmission }} ·
{{ s.exterior }} ·
<a href="{{ s.url }}" rel="noopener nofollow">{{ s.listing_source }}</a>
</p>

<div class="mm-subject">
  <p class="mm-subject-label">The car</p>
  <dl class="mm-subject-grid">
    <div><dt>Asking</dt><dd class="mm-subject-ask">${% include mm-thousands.html n=s.ask %}</dd></div>
    <div><dt>Mileage</dt><dd>{% include mm-thousands.html n=s.mileage %}</dd></div>
    <div><dt>Transmission</dt><dd>{{ s.transmission }}</dd></div>
    <div><dt>Color</dt><dd>{{ s.exterior }} / {{ s.interior }}</dd></div>
    <div><dt>VIN</dt><dd class="mm-vin">{{ s.vin }}</dd></div>
    <div><dt>Seller</dt><dd>{{ s.seller }}, {{ s.location }}</dd></div>
  </dl>
</div>

## The two markets side by side

Every car on this page is a yellow special edition except the Shinsen, which is
the Titanium Gray car — it is here because it is the only non-yellow
special-edition NB2 currently on the retail market.

<div class="mm-table-wrap">
<table class="mm-table">
  <thead>
    <tr><th>Market</th><th>What it measures</th><th>Color</th><th class="mm-num">2002–03 special-edition NB2</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>No-reserve auction</td>
      <td>What buyers actually paid, five results</td>
      <td>Yellow</td>
      <td class="mm-num">${% include mm-thousands.html n=by_price.first.price %} – ${% include mm-thousands.html n=by_price.last.price %}</td>
    </tr>
    <tr>
      <td>cars.com market range</td>
      <td>Algorithmic retail band for the {{ r.year }} {{ r.trim }}</td>
      <td>{{ r.exterior }}</td>
      <td class="mm-num">${% include mm-thousands.html n=r.cars_range_low %} – ${% include mm-thousands.html n=r.cars_range_high %}</td>
    </tr>
    <tr>
      <td>Retail ask, dealer</td>
      <td>{% include mm-thousands.html n=r.mileage %}-mile {{ r.trim }}, {{ r.transmission }}, all-in with fees</td>
      <td>{{ r.exterior }}</td>
      <td class="mm-num">${% include mm-thousands.html n=r.all_in %}</td>
    </tr>
    <tr>
      <td>This car</td>
      <td>{% include mm-thousands.html n=s.mileage %} miles, {{ s.transmission }}, private</td>
      <td>{{ s.exterior }}</td>
      <td class="mm-num"><strong>${% include mm-thousands.html n=s.ask %}</strong></td>
    </tr>
  </tbody>
</table>
</div>

<p class="mm-footnote">
The Shinsen is a {{ r.year }}-only package — Titanium Gray, dark blue top, blue
cloth, factory limited-slip — not the {{ s.year }} Special Edition. It is the
closest non-yellow special-edition NB2 on the retail market, which is why it is
here, but it is a five-speed. The subject car's six-speed is the more desirable
gearbox.
</p>

## Comparable sales — all yellow

<div class="mm-table-wrap">
<table class="mm-table">
  <thead>
    <tr>
      <th>Ended</th>
      <th>Car</th>
      <th class="mm-num">Miles</th>
      <th>Trans</th>
      <th>Color</th>
      <th>Seller</th>
      <th class="mm-num">Bids</th>
      <th class="mm-num">Result</th>
    </tr>
  </thead>
  <tbody>
  {% for c in comps %}
    <tr>
      <td class="mm-date">{% if c.date %}{{ c.date | date: "%b %-d, %Y" }}{% else %}—{% endif %}</td>
      <td>
        <a href="{{ c.url }}" rel="noopener nofollow">{{ c.year }} {{ c.model }}{% if c.trim %} {{ c.trim }}{% endif %}</a>
        {% if c.reserve == false %}<span class="mm-tag">no reserve</span>{% endif %}
        {% if c.location %}<span class="mm-loc">{{ c.location }}</span>{% endif %}
        {% if c.notes %}<span class="mm-notes">{{ c.notes }}</span>{% endif %}
      </td>
      <td class="mm-num">{% if c.mileage %}{% include mm-thousands.html n=c.mileage %}{% else %}—{% endif %}</td>
      <td>{{ c.transmission | default: "—" }}</td>
      <td>{{ c.exterior | default: "—" }}</td>
      <td>{{ c.seller | default: "—" }}</td>
      <td class="mm-num">{{ c.bids | default: "—" }}</td>
      <td class="mm-num">
        {%- if c.price -%}
          <span class="mm-price {% if c.sold %}mm-price--sold{% else %}mm-price--nosale{% endif %}">${% include mm-thousands.html n=c.price %}</span>
          {%- unless c.sold %}<span class="mm-flag">bid to, no sale</span>{% endunless -%}
        {%- else -%}—{%- endif -%}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>

{% if unsold.size > 0 %}
<p class="mm-footnote">
{{ unsold.size }} of {{ comps.size }} did not meet reserve. That number is the
high bid — a floor on value, not a sale.
</p>
{% endif %}

## Reading the comps against this car

**The one comp that matters most didn't sell.** In September 2024 a Brooklyn
dealer listed a
[60,300-mile Blazing Yellow six-speed SE](https://carsandbids.com/auctions/3OPJkvla/2002-mazda-mx-5-miata-special-edition)
— the closest thing in this set to the subject car, 4,700 miles *under* it — and
it stalled at $8,600 without meeting reserve. Before that number gets used
against this listing, note what was wrong with it: a dealer selling with a
$175 doc fee and a $24 prep fee, tires with 2019 and 2009 date codes, and
disclosed corrosion on the underbody. It was a low-mileage car presented like
inventory. Its failure is a data point about *presentation*, not about what
60,000-mile NB2s are worth.

**Mileage was not what separated the sold cars.** The top result, $10,100, had
107,400 miles. The cheapest sold car had 124,500. Among cars that actually
changed hands, the odometer explains almost none of the spread. That is partly
why the subject car's 65,000 miles is an argument the comps can't settle: this
data has no successful low-mileage sale in it at all. The mileage is a real
asset and an unpriced one.

**A third pedal is worth roughly $1,200.** The
[4-speed automatic](https://carsandbids.com/auctions/KP841BVK/2002-mazda-mx-5-miata-special-edition)
brought $8,600 at 99,900 miles this past February — the most recent result here
and the only 2026 data point. The six-speeds sold at $9,800 and $10,100. The
subject car is on the right side of that.

**Trim is worth about $3,500.** The one base car — five-speed, Vivid Yellow,
124,500 miles, torn soft top — brought $6,300 against a $9,800–$10,100 band for
Special Edition six-speeds. Every other car here is a Blazing Yellow SE, which
makes this set a fairly tight read on exactly the subject car's configuration.

**One caution on the listing copy.** cars.com has the trim as *LS*, while the
seller's notes call it a limited edition and cite 1,500 built. Those are
different claims, and a buyer who knows NB2s will notice. I could not verify the
1,500 figure from any source in this research — I would either substantiate it
or drop the number and simply say Special Edition, since the color and the
six-speed already do that work.

## What the data says won't earn a higher price

Useful mostly as a warning against spending money before selling.

**Fixing things first.** The clearest lesson in the set: VIN
`JM1NB353220231148` sold for
[$10,100 in May 2024](https://carsandbids.com/auctions/KPQRAo7N/2002-mazda-mx-5-miata-special-edition)
at 107,400 miles. Its new owner then put in a timing belt, water pump, all four
shocks, brakes, a fuel filter, a shifter rebuild and fresh fluids — and
[resold it for $9,800](https://carsandbids.com/auctions/KD1bZolM/2002-mazda-mx-5-miata-special-edition)
twelve months later. Thousands of dollars of correct, documented maintenance
returned *negative $300*. Do not sink money into this car expecting the sale
price to follow it.

**Deep service records.** Same car, eleven dated line items, receipts in hand.
It came second on price and still lost to its own previous sale.

## What I'd do with this listing

**Hold the number, but arm it.** cars.com's own market range supports low-to-mid
teens, so ${% include mm-thousands.html n=s.ask %} does not need to come down on
principle. What it needs is evidence, because the auction data gives any
informed buyer a $10,100 club to swing. Right now the listing asserts low
mileage and a limited edition; it should prove both.

**Photograph the underside.** This is the single highest-leverage change. Four
of the five auction comps disclosed corrosion on underbody components or brake
hardware — at every price point, including the $10,100 winner. A genuinely clean
underside is the one attribute in this whole data set that nobody has
demonstrated and everybody would pay for. If this car has it, that is the
premium, and it lives in about six photographs.

**Fix the trim copy.** cars.com lists it as *LS*; the notes call it a limited
edition and cite 1,500 built. Pick one story, and drop the production figure
unless it can be sourced — the color and the six-speed already establish what it
is, and an unverifiable number invites a buyer to doubt the rest.

**Don't spend money getting it ready.** The clearest finding in the auction data:
a full timing belt, water pump, shocks, brakes and fluids returned *negative
$300* on resale. Fresh tires are worth doing if the date codes are old, since two
comps were dinged for that. Beyond tires and a detail, mechanical spending will
not come back.

**Know the floor and the tool for it.** If the car has to move on a deadline, a
no-reserve auction is what the data actually measures, and it lands high-$8,000s
to low-$11,000s for a car like this — probably the top of that band on 65,000
miles. All four no-reserve cars sold; the one reserve car went home. Below about
$11,000, an auction is the better instrument than a private listing. Above it,
patience is.

**Expect the negotiation to land in the twelves.** The nearest live retail
comparable is a $12,888 all-in Shinsen with more miles and one fewer gear, and
cars.com calls that a *good deal* against its own band. A private six-speed with
65,000 miles asking $15,000 and settling in the $12,000s would be consistent with
everything on this page.

## Why the two numbers disagree

**Auction says ${% include mm-thousands.html n=by_price.first.price %}–${% include mm-thousands.html n=by_price.last.price %}.** Five recorded {{ mm.meta.source }} results,
May 2024 through February 2026. Nothing cleared
${% include mm-thousands.html n=by_price.last.price %}. Against that ceiling the
ask is ${% include mm-thousands.html n=gap %} high.

**Retail says low-to-mid teens.** A
[{{ r.year }} {{ r.trim }}]({{ r.url }}) with {% include mm-thousands.html n=r.mileage %}
miles — 10,000 more than the subject car, and a five-speed instead of a six — is
listed at ${% include mm-thousands.html n=r.all_in %} all-in, and cars.com tags
it a *{{ r.cars_badge }}* because its own market range for the vehicle is
**${% include mm-thousands.html n=r.cars_range_low %}–${% include mm-thousands.html n=r.cars_range_high %}**.

That second number is the one that matters to a retail buyer. Shopping cars.com,
they are shown a market range that *starts* near $13,000 for a comparable
special edition with worse specs. Set against that,
${% include mm-thousands.html n=s.ask %} for a 65,000-mile six-speed is a normal
ask — arguably a defensible one.

The auction data still matters, for two reasons. It is what a *knowledgeable*
buyer will quote back, and it is what the car brings if the seller ever needs it
gone on a deadline. The gap between the two is the cost of patience: roughly
$4,000, paid in months on market.

## Methodology

Comps are completed Cars & Bids auctions, read off each listing page after
close. Hammer price only — no buyer's fee, no transport, no post-sale
negotiation on the unsold car. Sample size is five, spanning May 2024 to
February 2026; treat it as a sketch of the market, not an appraisal. No comp
here matches the subject car's mileage, which is the single biggest limitation
of this packet. Data lives in
[`_data/miata_market.yml`](https://github.com/lcerezo/lcerezo.github.io/blob/master/_data/miata_market.yml)
— adding a comp is one YAML entry.
