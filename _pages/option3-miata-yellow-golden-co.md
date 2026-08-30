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

Color is not incidental on these cars, so the table names it on every row.
Blazing Yellow is the {{ s.year }} Special Edition's own color — all four SEs in
the auction set wear it, and the one base car is a different yellow entirely.
Titanium Gray is likewise the {{ r.year }} Shinsen's package color. The blue LS
is the only car here in an ordinary color on an ordinary trim, which is exactly
why it is a useful check on the other numbers.

<div class="mm-table-wrap">
<table class="mm-table">
  <thead>
    <tr><th>Market</th><th>What it measures</th><th>Color</th><th class="mm-num">2002–03 NB2</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>No-reserve auction</td>
      <td>What buyers actually paid, five results</td>
      <td class="mm-color"><span class="mm-swatch" style="background:{{ s.swatch }}"></span>Blazing Yellow<span class="mm-tag">SE color</span></td>
      <td class="mm-num">${% include mm-thousands.html n=by_price.first.price %} – ${% include mm-thousands.html n=by_price.last.price %}</td>
    </tr>
    {%- if r.cars_range_low %}
    <tr>
      <td>cars.com market range</td>
      <td>Algorithmic retail band for the {{ r.year }} {{ r.trim }}</td>
      <td class="mm-color"><span class="mm-swatch" style="background:{{ r.swatch }}"></span>{{ r.exterior }}{% if r.color_note %}<span class="mm-tag">{{ r.color_note }}</span>{% endif %}</td>
      <td class="mm-num">${% include mm-thousands.html n=r.cars_range_low %} – ${% include mm-thousands.html n=r.cars_range_high %}</td>
    </tr>
    {%- endif %}
    {%- for x in retail %}
    <tr>
      <td>Retail ask, {{ x.seller | downcase }}</td>
      <td>
        {% include mm-thousands.html n=x.mileage %}-mile {{ x.trim }}, {{ x.transmission }}{% if x.all_in %}, all-in with fees{% endif %} ·
        <a href="{{ x.url }}" rel="noopener nofollow">{{ x.source }}</a>
      </td>
      <td class="mm-color"><span class="mm-swatch" style="background:{{ x.swatch }}"></span>{{ x.exterior }}{% if x.color_note %}<span class="mm-tag">{{ x.color_note }}</span>{% endif %}</td>
      <td class="mm-num">{% if x.all_in %}${% include mm-thousands.html n=x.all_in %}{% else %}${% include mm-thousands.html n=x.ask %}{% endif %}</td>
    </tr>
    {%- endfor %}
    <tr>
      <td>This car</td>
      <td>{% include mm-thousands.html n=s.mileage %} miles, {{ s.transmission }}, private</td>
      <td class="mm-color"><span class="mm-swatch" style="background:{{ s.swatch }}"></span>{{ s.exterior }}{% if s.color_note %}<span class="mm-tag">{{ s.color_note }}</span>{% endif %}</td>
      <td class="mm-num"><strong>${% include mm-thousands.html n=s.ask %}</strong></td>
    </tr>
  </tbody>
</table>
</div>

<p class="mm-footnote">
Neither retail car is a {{ s.year }} Special Edition. The Shinsen is a
{{ r.year }}-only package — Titanium Gray, dark blue top, blue cloth, factory
limited-slip — and it is a five-speed, so the subject car's six-speed is the
better gearbox. The blue LS is a six-speed, and at
{% include mm-thousands.html n=retail.last.mileage %} miles it is the closest
car on this page to the subject car's odometer. Facebook publishes no market
range and adds no fees, so its number is the seller's ask and nothing else.
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
      <td class="mm-color">{% if c.swatch %}<span class="mm-swatch" style="background:{{ c.swatch }}"></span>{% endif %}{{ c.exterior | default: "—" }}</td>
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

**There is now a closer car on mileage, and it is asking $8,900.** A
[62,000-mile blue LS six-speed](https://www.facebook.com/marketplace/item/1753622865787116/)
went up on Facebook Marketplace in Divide, Colorado four days ago — 3,000 miles
*under* the subject car, same gearbox, second owner, clean title, garaged. It
is the nearest car on the odometer anywhere in this packet, and its ask sits
$6,100 below the subject car's and inside the auction band rather than above
it. Sort every car in this packet by odometer and the pattern is hard to miss:
the two lowest-mileage cars are the Brooklyn no-sale at 60,300 miles and $8,600,
and this one at 62,000 and $8,900 — $300 apart. The subject car is third at
65,000 miles, asking $15,000. Two things keep that from being decisive. It is an ask,
not a sale — nobody has paid it. And it is a blue LS, not a Blazing Yellow
Special Edition, so part of that spread is trim and color that this data set
cannot price, since every auction comp here is yellow. But if the subject car
really is an LS, as cars.com has it, this is its closest comparable on the open
market and it is asking 59% of the subject car's number.

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

## Methodology

Comps are completed Cars & Bids auctions, read off each listing page after
close. Hammer price only — no buyer's fee, no transport, no post-sale
negotiation on the unsold car. Sample size is five, spanning May 2024 to
February 2026; treat it as a sketch of the market, not an appraisal. Retail
figures are live asking prices read off cars.com and Facebook Marketplace, not
transactions. No *completed sale* here matches the subject car's mileage, which
is the single biggest limitation of this packet — the closest car on the
odometer is a listing nobody has bought yet. Data lives in
[`_data/miata_market.yml`](https://github.com/lcerezo/lcerezo.github.io/blob/master/_data/miata_market.yml)
— adding a comp is one YAML entry.
