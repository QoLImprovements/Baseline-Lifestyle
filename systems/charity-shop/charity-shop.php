<?php
declare(strict_types=1);

require __DIR__ . '/../../sitewide/api/config.php';

bl_session_start();
bl_no_cache_headers();

$accessUntil = (int)($_SESSION['charity_shop_access_until'] ?? 0);
if($accessUntil <= time()){
  unset($_SESSION['charity_shop_access_until']);
  header('Location: /home/1?protected=locked', true, 302);
  exit;
}
?>
<!DOCTYPE html>
<html lang="en" data-app="charity-shop">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="description" content="Charity shop operational guidance for hanging, size cubing, clothing sizes, shoes and duvet bedding.">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>Charity Shop Guidance | Baseline Lifestyle</title>
  <meta name="theme-color" content="#6f1218">
  <style>html[data-app="charity-shop"],body[data-app="charity-shop"]{margin:0;min-height:100%;color:#0c2232;background:linear-gradient(90deg,#6f1218 0%,#861920 12%,#9f2426 25%,#b43724 38%,#c44f1f 50%,#b43724 62%,#9f2426 75%,#861920 88%,#6f1218 100%);}</style>
  <link rel="canonical" href="https://baselinelifestyle.org/baseline-charity-shop/guidance">
  <link rel="stylesheet" href="/sitewide/css/baseline-themes.css?v=20260602_1347dropdownportalopaque">
  <link rel="stylesheet" href="/sitewide/css/baseline-sitewide.css?v=SITEWIDE_INFO_POPOVER_20260706_2">
  <link rel="stylesheet" href="/sitewide/css/baseline-header-canonical.css?v=SITEWIDE_WIDTH_AUTHORITY_20260607">
  <link rel="stylesheet" href="/sitewide/css/baseline-pattern.css?v=20260527gradienttruth">
  <link rel="stylesheet" href="/systems/charity-shop/css/charity-shop.css?v=CHARITY_GUIDANCE_20260728_2">
  <link rel="stylesheet" href="/sitewide/css/baseline-protected-access.css?v=BASELINE_PROTECTED_ACCESS_20260801_3" data-protected-access-style="true">
  <link rel="stylesheet" href="/sitewide/css/baseline-protected-key-placement.css?v=BASELINE_PROTECTED_ACCESS_20260801_3" data-protected-key-placement="true">
  <link rel="stylesheet" href="/sitewide/css/baseline-ui-fixes.css?v=BASELINE_PROTECTED_ACCESS_20260801_3" data-baseline-ui-fixes="true">
  <link rel="stylesheet" href="/systems/charity-shop/css/charity-shop-cashing-and-artwork.css?v=CHARITY_CSS_CONSOLIDATED_20261020_1" data-charity-cashing-corrections="true">
  <link rel="stylesheet" href="/systems/charity-shop/css/charity-shop-final-coherence.css?v=CHARITY_DROPDOWN_ACCESS_20260801_2">
  <link rel="stylesheet" href="/sitewide/css/baseline-gradient-alignment.css?v=BASELINE_GRADIENT_ALIGNMENT_20260801_1" data-baseline-gradient-alignment="true">
  <style id="charityCashToBankWhiteAuthority">
    /* CHARITY-CASH-TO-BANK-INLINE-AUTHORITY-20260803: final visual authority after all linked styles. */
    html body[data-app="charity-shop"] #operations-cashing .charity-total-line--final > span,
    html body[data-app="charity-shop"] #operations-cashing .charity-total-line--final > output,
    html body[data-app="charity-shop"] #charityCashToBank{
      color:#fff!important;
      -webkit-text-fill-color:#fff!important;
    }
  </style>
</head>
<body data-app="charity-shop" data-page="charity-shop-guidance">
  <div class="bl-homebar" role="navigation" aria-label="Charity shop guidance navigation">
    <div class="bl-homebar-inner">
      <div class="bl-pages-dd" data-protected-current-section="charity-shop">
        <button class="bl-mini-btn bl-pages-btn" id="bl-pages-toggle" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Charity Shop, locked site"><span class="bl-protected-site-label">Charity Shop</span><span class="bl-protected-site-key" aria-hidden="true"></span><span class="bl-protected-site-caret" aria-hidden="true">&#9662;</span></button>
        <div class="bl-pages-menu" role="menu" hidden>
          <a class="bl-pages-link" role="menuitem" href="/home/1">Home</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-food-approach/system">Baseline Food Approach</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-massage/system">Baseline Massage</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-natural-skincare/system">Baseline Personal Care</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-fitness/system">Baseline Fitness</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-badminton-session/system">Baseline Badminton Session</a>
          <a class="bl-pages-link" role="menuitem" href="/baseline-games-hub/games-hub">Baseline Games Hub</a>
        </div>
      </div>
      <button id="blProtectedKey" class="bl-protected-key" type="button" aria-haspopup="dialog" aria-controls="blProtectedAccessOverlay" aria-expanded="false" aria-label="Open protected sections" title="Protected sections"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg></button>
      <div class="bl-homebar-spacer" aria-hidden="true"></div>
      <div class="bl-homebar-right" aria-label="Site controls">
        <button id="bl-beats-toggle" class="bl-mini-btn" type="button" aria-label="Binaural" aria-expanded="false"><span class="bl-btn-icon" aria-hidden="true"><svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2v-.2a6 6 0 0 0-12 0v.2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3v-5z"></path></svg></span><span class="bl-btn-label">Binaural</span></button>
        <button id="bl-auth-toggle" class="bl-mini-btn" type="button" aria-label="Account" aria-expanded="false"><span class="bl-btn-icon" aria-hidden="true"><svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 12.2a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8z"></path><path d="M4.8 21a7.2 7.2 0 0 1 14.4 0H4.8z"></path></svg></span><span class="bl-btn-label">Account</span></button>
      </div>
    </div>
  </div>

  <div class="bl-scroll charity-scroll">
    <header class="hero charity-hero" id="top">
      <div class="hero-inner">
        <div>
          <div class="title" role="heading" aria-level="1">Charity Shop Guidance</div>
          <div class="subtitle">Clear back-room systems that prevent avoidable shop-floor problems.</div>
        </div>
      </div>
      <nav class="tabs charity-main-tabs" aria-label="Charity shop guidance sections" role="tablist">
        <button class="tab charity-main-tab" id="charityMainOperations" type="button" role="tab" aria-selected="true" aria-controls="operations" data-charity-target="operations">Shop Operations</button>
        <button class="tab charity-main-tab" id="charityMainSizes" type="button" role="tab" aria-selected="false" aria-controls="sizes" data-charity-target="sizes">Clothing &amp; Houseware Sizes</button>
      </nav>
    </header>

    <main class="wrap charity-wrap">
      <section class="section charity-main-section active" id="operations" role="tabpanel" aria-labelledby="charityMainOperations" tabindex="0">
        <nav class="charity-subtabs" role="tablist" aria-label="Shop operations guidance">
          <button class="charity-subtab" id="operationsOverviewTab" type="button" role="tab" aria-selected="true" aria-controls="operations-overview" data-charity-subtarget="overview">Systems</button>
          <button class="charity-subtab" id="operationsHangingTab" type="button" role="tab" aria-selected="false" aria-controls="operations-hanging" data-charity-subtarget="hanging">Hang It Right</button>
          <button class="charity-subtab" id="operationsCubingTab" type="button" role="tab" aria-selected="false" aria-controls="operations-cubing" data-charity-subtarget="cubing">Cube It Right</button>
          <button class="charity-subtab" id="operationsCashingTab" type="button" role="tab" aria-selected="false" aria-controls="operations-cashing" data-charity-subtarget="cashing" tabindex="-1">Cashing Up</button>
        </nav>

        <div class="charity-subpanel active" id="operations-overview" role="tabpanel" aria-labelledby="operationsOverviewTab" tabindex="0">
          <div class="charity-grid charity-grid--overview">
            <figure class="card charity-card charity-card--wide charity-artwork-card" data-charity-artwork="back-room-consequences"><img src="/systems/charity-shop/artwork.php?asset=back-room-consequences&amp;v=20260730_1" alt="Back-room choices and shop-floor consequences charity shop poster" loading="eager" decoding="async"><figcaption>Back-room choices. Shop-floor consequences.</figcaption></figure>
            <article class="card charity-card charity-card--wide charity-statement">
              <p class="charity-kicker">Back-room choices. Shop-floor consequences.</p>
              <h2>When agreed systems are not followed, the consequences do not disappear.</h2>
              <p>Someone else has to deal with them. A loose garment, incorrect cube or unclear size creates extra work on the shop floor and makes the shop harder for customers and volunteers to use.</p>
            </article>

            <article class="card charity-card">
              <h2>Wrong cube</h2>
              <p>A garment can be placed on the wrong rail, missed by the customer who needs it, returned to the wrong place, or treated as unreliable information.</p>
            </article>
            <article class="card charity-card">
              <h2>Loose hanging</h2>
              <p>Clothes can unclip during browsing or rail movement, fall onto the floor, crease, become dirty and require repeated rehanging.</p>
            </article>
            <article class="card charity-card">
              <h2>Customer impact</h2>
              <p>Customers may complain that sizes are wrong, clothes keep falling or that more care should have been taken before items were put out for sale.</p>
            </article>
            <article class="card charity-card">
              <h2>Volunteer impact</h2>
              <p>Shop-floor volunteers have to stop what they are doing, explain the problem, calm the situation and put the item or rail right.</p>
            </article>

            <article class="card charity-card charity-card--wide charity-checklist">
              <h2>The working principle</h2>
              <div class="charity-principles">
                <div><strong>Check</strong><span>Read the label and inspect the item first.</span></div>
                <div><strong>Use the guide</strong><span>Convert unclear or unfamiliar sizing before choosing a cube.</span></div>
                <div><strong>Complete the task</strong><span>Secure, cube and check the item before it reaches the rail.</span></div>
              </div>
            </article>
          </div>
        </div>

        <div class="charity-subpanel" id="operations-hanging" role="tabpanel" aria-labelledby="operationsHangingTab" tabindex="0" hidden>
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <p class="charity-kicker">Trousers, skirts, shorts and other garments requiring clips</p>
              <h2>Secure it the first time. No sagging.</h2>
              <p>Correct clipping keeps garments secure and presentable, reduces unclipping and reduces time spent tidying the rails.</p>
            </article>

            <article class="card charity-card charity-step-card">
              <span class="charity-step-number">1</span>
              <h2>Push both clips to the end stops</h2>
              <p>Use the maximum clip width available. Both clips should be pushed fully out to the ends of the hanger before the garment is attached.</p>
              <div class="charity-rule">Maximum clip width = better support and less sagging.</div>
            </article>

            <article class="card charity-card charity-step-card">
              <span class="charity-step-number charity-step-number--green">2</span>
              <h2>Pull the waistband taut</h2>
              <p>Grip the garment firmly and evenly. The waistband should sit straight, firm and taut rather than drooping between or outside the clips.</p>
              <div class="charity-rule charity-rule--green">Grip firmly and evenly to help prevent catching and slipping.</div>
            </article>

            <article class="card charity-card charity-card--wide charity-step-card">
              <span class="charity-step-number charity-step-number--teal">3</span>
              <h2>Too wide? Fold the complete sides around the back</h2>
              <ol class="charity-ordered-list">
                <li>Do not leave excess width sagging inside and outside the clips.</li>
                <li>Fold the complete side sections neatly around the back of the garment.</li>
                <li>Keep the front and back aligned and straight.</li>
                <li>Secure the folded sections behind using the full gripping length of each clip.</li>
              </ol>
            </article>

            <article class="card charity-card charity-card--wide charity-final-check">
              <h2>Final check before the rail goes out</h2>
              <p>Rehang anything loose, uneven or likely to slip. The garment should remain secure when the hanger is lifted and moved.</p>
            </article>
          </div>
        </div>

        <div class="charity-subpanel" id="operations-cubing" role="tabpanel" aria-labelledby="operationsCubingTab" tabindex="0" hidden>
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <p class="charity-kicker">Check | Guide | Cube</p>
              <h2>The right cube gets the right garment to the right customer.</h2>
            </article>

            <article class="card charity-card charity-step-card">
              <span class="charity-step-number">1</span>
              <h2>Check the garment label</h2>
              <p>Read the size before choosing a cube. Identify whether the label shows a UK, EU, US or letter size.</p>
              <div class="charity-warning">When the label is unclear, use the measurements in the size guide. Do not guess.</div>
            </article>

            <article class="card charity-card charity-step-card">
              <span class="charity-step-number charity-step-number--green">2</span>
              <h2>Use the correct size guide</h2>
              <ul>
                <li><strong>Ladies:</strong> use a UK numeric cube. Convert EU, US or letter sizes.</li>
                <li><strong>Men's tops, shirts and jackets:</strong> use a letter-size cube.</li>
                <li><strong>Men's trousers:</strong> use the waist-size cube.</li>
              </ul>
            </article>

            <article class="card charity-card charity-card--wide charity-step-card">
              <span class="charity-step-number charity-step-number--teal">3</span>
              <h2>Fit the correct cube before the garment reaches the rail</h2>
              <p>Match the cube to the shop size, check that it is readable and place the garment on the correct rail.</p>
              <div class="charity-equation">Label size = converted shop size = cube size</div>
            </article>

            <article class="card charity-card charity-card--success">
              <h2>Why we do this</h2>
              <ul>
                <li>Customers find sizes quickly.</li>
                <li>Rails correctly ordered from the start are easier to maintain.</li>
                <li>Browsed items are easier to return to the correct rail.</li>
              </ul>
            </article>

            <article class="card charity-card charity-card--danger">
              <h2>Impact of a wrong cube</h2>
              <p><strong>Wrong cube = wrong rail.</strong></p>
              <ul>
                <li>Customers cannot find or trust the size.</li>
                <li>Garments may be missed, causing a lost sale.</li>
                <li>Complaints, re-cubing and re-sorting follow.</li>
              </ul>
            </article>
          </div>
        </div>
        <div class="charity-subpanel charity-cashing-panel" id="operations-cashing" role="tabpanel" aria-labelledby="operationsCashingTab" tabindex="-1" hidden>
  <div class="charity-cashup">
    <header class="card charity-card charity-card--wide charity-cashup-heading">
      <p class="charity-kicker">COUNT | MAKE FLOAT | CASH TO BANK</p>
      <h2>Cashing Up</h2>
      <p>Enter the number of each note and coin in the till. The page makes up the £100 float first, then calculates the remaining Cash To Bank.</p>
    </header>
    <section class="card charity-card charity-cash-table-card" aria-labelledby="charityCashCountTitle">
      <h3 id="charityCashCountTitle">Cash In Till</h3>
      <div class="charity-cash-table-wrap">
        <table class="charity-cash-table">
          <thead><tr><th scope="col">Note or coin</th><th scope="col">How many</th><th scope="col">Value</th></tr></thead>
          <tbody>
<tr data-cash-row="gbp50">
  <th scope="row">£50</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp50">Number of £50 items</label>
      <input id="cash-gbp50" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp50" data-pence="5000"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp50">£0.00</output></td>
</tr>
<tr data-cash-row="gbp20">
  <th scope="row">£20</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp20">Number of £20 items</label>
      <input id="cash-gbp20" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp20" data-pence="2000"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp20">£0.00</output></td>
</tr>
<tr data-cash-row="gbp10">
  <th scope="row">£10</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp10">Number of £10 items</label>
      <input id="cash-gbp10" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp10" data-pence="1000"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp10">£0.00</output></td>
</tr>
<tr data-cash-row="gbp5">
  <th scope="row">£5</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp5">Number of £5 items</label>
      <input id="cash-gbp5" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp5" data-pence="500"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp5">£0.00</output></td>
</tr>
<tr data-cash-row="gbp2">
  <th scope="row">£2</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp2">Number of £2 items</label>
      <input id="cash-gbp2" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp2" data-pence="200"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp2">£0.00</output></td>
</tr>
<tr data-cash-row="gbp1">
  <th scope="row">£1</th>
  <td><label class="charity-cash-visually-hidden" for="cash-gbp1">Number of £1 items</label>
      <input id="cash-gbp1" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="gbp1" data-pence="100"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="gbp1">£0.00</output></td>
</tr>
<tr data-cash-row="p50">
  <th scope="row">50p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p50">Number of 50p items</label>
      <input id="cash-p50" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p50" data-pence="50"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p50">£0.00</output></td>
</tr>
<tr data-cash-row="p20">
  <th scope="row">20p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p20">Number of 20p items</label>
      <input id="cash-p20" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p20" data-pence="20"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p20">£0.00</output></td>
</tr>
<tr data-cash-row="p10">
  <th scope="row">10p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p10">Number of 10p items</label>
      <input id="cash-p10" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p10" data-pence="10"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p10">£0.00</output></td>
</tr>
<tr data-cash-row="p5">
  <th scope="row">5p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p5">Number of 5p items</label>
      <input id="cash-p5" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p5" data-pence="5"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p5">£0.00</output></td>
</tr>
<tr data-cash-row="p2">
  <th scope="row">2p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p2">Number of 2p items</label>
      <input id="cash-p2" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p2" data-pence="2"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p2">£0.00</output></td>
</tr>
<tr data-cash-row="p1">
  <th scope="row">1p</th>
  <td><label class="charity-cash-visually-hidden" for="cash-p1">Number of 1p items</label>
      <input id="cash-p1" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="p1" data-pence="1"></td>
  <td><output class="charity-cash-subtotal" data-subtotal="p1">£0.00</output></td>
</tr>
          </tbody>
        </table>
      </div>
      <section class="charity-cash-totals" aria-labelledby="charityCashTotalsTitle">
        <h3 id="charityCashTotalsTitle">Till Totals</h3>
        <div class="charity-total-line"><span>Total Count</span><output id="charityCashTotal" aria-live="polite">£0.00</output></div>
        <div class="charity-float-line"><span>Float made</span><output id="charityFloatTotal" aria-live="polite">£0.00</output></div>
        <div class="charity-total-line charity-total-line--final"><span>Cash To Bank</span><output id="charityCashToBank" aria-live="polite">£0.00</output></div>
        <p class="charity-cash-result-label">The amount remaining after the float has been set aside</p>
      </section>
    </section>
    <div class="charity-cash-lower-grid">
      <section class="card charity-card charity-float-maker" aria-labelledby="charityFloatMakerTitle">
        <h3 id="charityFloatMakerTitle">Float Summary</h3>
        <p class="charity-float-copy">Use this selection of notes and change to make up the float.</p>
        <div class="charity-float-table-wrap">
          <table class="charity-float-table">
            <thead><tr><th scope="col">Money</th><th scope="col">Aim</th><th scope="col">Keep</th><th scope="col">Value</th></tr></thead>
            <tbody>
<tr data-float-row="gbp5">
  <th scope="row">£5</th>
  <td>6 (Max)</td>
  <td><output data-float-count="gbp5">0</output></td>
  <td><output data-float-value="gbp5">£0.00</output></td>
</tr>
<tr data-float-row="gbp1">
  <th scope="row">£1</th>
  <td>55 (Max)</td>
  <td><output data-float-count="gbp1">0</output></td>
  <td><output data-float-value="gbp1">£0.00</output></td>
</tr>
<tr data-float-row="p50">
  <th scope="row">50p</th>
  <td>15></td>
  <td><output data-float-count="p50">0</output></td>
  <td><output data-float-value="p50">£0.00</output></td>
</tr>
<tr data-float-row="p20">
  <th scope="row">20p</th>
  <td>15></td>
  <td><output data-float-count="p20">0</output></td>
  <td><output data-float-value="p20">£0.00</output></td>
</tr>
<tr data-float-row="p10">
  <th scope="row">10p</th>
  <td>15></td>
  <td><output data-float-count="p10">0</output></td>
  <td><output data-float-value="p10">£0.00</output></td>
</tr>
<tr data-float-row="p5">
  <th scope="row">5p</th>
  <td>15></td>
  <td><output data-float-count="p5">0</output></td>
  <td><output data-float-value="p5">£0.00</output></td>
</tr>
<tr data-float-row="p2">
  <th scope="row">2p</th>
  <td>15></td>
  <td><output data-float-count="p2">0</output></td>
  <td><output data-float-value="p2">£0.00</output></td>
</tr>
<tr data-float-row="p1">
  <th scope="row">1p</th>
  <td>15></td>
  <td><output data-float-count="p1">0</output></td>
  <td><output data-float-value="p1">£0.00</output></td>
</tr>
            </tbody>
          </table>
        </div>
        <div class="charity-float-total-line"><span>Float total</span><output id="charityFloatMakerTotal">£0.00</output></div>
        <p class="charity-float-status" id="charityFloatStatus" role="status" aria-live="polite"></p>
        <p class="charity-float-fallback" id="charityFloatFallback" hidden></p>
      </section>
      <section class="card charity-card charity-cheque-summary" aria-labelledby="charityBankBookTitle">
        <div class="charity-cheque-heading"><div><p class="charity-kicker">POUNDS - PENCE</p><h3 id="charityBankBookTitle">Cash To Bank Book</h3></div></div>
        <p>Copy these grouped Cash To Bank amounts into the Cash To Bank Book.</p>
        <div class="charity-cheque-rows">
<div class="charity-cheque-row"><span>£50 notes</span><output data-bank-book-keys="gbp50">0 - 00</output></div>
<div class="charity-cheque-row"><span>£20 notes</span><output data-bank-book-keys="gbp20">0 - 00</output></div>
<div class="charity-cheque-row"><span>£10 notes</span><output data-bank-book-keys="gbp10">0 - 00</output></div>
<div class="charity-cheque-row"><span>£5 notes</span><output data-bank-book-keys="gbp5">0 - 00</output></div>
<div class="charity-cheque-row"><span>£2 coins</span><output data-bank-book-keys="gbp2">0 - 00</output></div>
<div class="charity-cheque-row"><span>£1 coins</span><output data-bank-book-keys="gbp1">0 - 00</output></div>
<div class="charity-cheque-row"><span>50p + 20p</span><output data-bank-book-keys="p50,p20">0 - 00</output></div>
<div class="charity-cheque-row"><span>10p + 5p</span><output data-bank-book-keys="p10,p5">0 - 00</output></div>
<div class="charity-cheque-row"><span>2p + 1p</span><output data-bank-book-keys="p2,p1">0 - 00</output></div>
        </div>
        <div class="charity-bank-total-line"><span>Total Cash To Bank</span><output id="charityBankBookTotal" aria-live="polite">£0.00</output></div>
      </section>
    </div>
  </div>
</div>
      </section>

      <section class="section charity-main-section" id="sizes" role="tabpanel" aria-labelledby="charityMainSizes" tabindex="0" hidden>
        <nav class="charity-subtabs" role="tablist" aria-label="Clothing and houseware size guides">
          <button class="charity-subtab" id="sizesLadiesTab" type="button" role="tab" aria-selected="true" aria-controls="sizes-ladies" data-charity-subtarget="ladies">Ladies' Sizes</button>
          <button class="charity-subtab" id="sizesMensTab" type="button" role="tab" aria-selected="false" aria-controls="sizes-mens" data-charity-subtarget="mens">Men's Sizes</button>
          <button class="charity-subtab" id="sizesShoesTab" type="button" role="tab" aria-selected="false" aria-controls="sizes-shoes" data-charity-subtarget="shoes">Shoe Sizes</button>
          <button class="charity-subtab" id="sizesDuvetTab" type="button" role="tab" aria-selected="false" aria-controls="sizes-duvet" data-charity-subtarget="duvet">Duvet Sizes</button>
        </nav>

        <div class="charity-subpanel active" id="sizes-ladies" role="tabpanel" aria-labelledby="sizesLadiesTab" tabindex="0">
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <h2>Ladies' size guide</h2>
              <p><strong>UK numeric sizes are used for the shop.</strong> EU, US and letter sizes are conversion information. Approximate body measurements help when a label is unclear; fit style can vary.</p>
            </article>

            <article class="card charity-card charity-card--wide charity-table-card">
              <h2>Numeric conversion chart</h2>
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>UK numeric</th><th>EU</th><th>US</th><th>Bust</th><th>Waist</th><th>Hips</th></tr></thead>
                  <tbody>
                    <tr><td>4</td><td>32</td><td>0</td><td>30 in / 76 cm</td><td>23 in / 58 cm</td><td>33 in / 84 cm</td></tr>
                    <tr><td>6</td><td>34</td><td>2</td><td>32 in / 81 cm</td><td>25 in / 64 cm</td><td>35 in / 89 cm</td></tr>
                    <tr><td>8</td><td>36</td><td>4</td><td>33 in / 84 cm</td><td>26 in / 66 cm</td><td>36 in / 91 cm</td></tr>
                    <tr><td>10</td><td>38</td><td>6</td><td>35 in / 89 cm</td><td>28 in / 71 cm</td><td>38 in / 97 cm</td></tr>
                    <tr><td>12</td><td>40</td><td>8</td><td>37 in / 94 cm</td><td>30 in / 76 cm</td><td>40 in / 102 cm</td></tr>
                    <tr><td>14</td><td>42</td><td>10</td><td>39 in / 99 cm</td><td>32 in / 81 cm</td><td>42 in / 107 cm</td></tr>
                    <tr><td>16</td><td>44</td><td>12</td><td>41 in / 104 cm</td><td>34 in / 86 cm</td><td>44 in / 112 cm</td></tr>
                    <tr><td>18</td><td>46</td><td>14</td><td>44 in / 112 cm</td><td>37 in / 94 cm</td><td>47 in / 119 cm</td></tr>
                    <tr><td>20</td><td>48</td><td>16</td><td>46 in / 117 cm</td><td>39 in / 99 cm</td><td>49 in / 124 cm</td></tr>
                    <tr><td>22</td><td>50</td><td>18</td><td>49 in / 124 cm</td><td>42 in / 107 cm</td><td>52 in / 132 cm</td></tr>
                    <tr><td>24</td><td>52</td><td>20</td><td>51 in / 130 cm</td><td>44 in / 112 cm</td><td>54 in / 137 cm</td></tr>
                    <tr><td>26</td><td>54</td><td>22</td><td>53 in / 135 cm</td><td>47 in / 119 cm</td><td>56 in / 142 cm</td></tr>
                    <tr><td>28</td><td>56</td><td>24</td><td>56 in / 142 cm</td><td>50 in / 127 cm</td><td>59 in / 150 cm</td></tr>
                    <tr><td>30</td><td>58</td><td>26</td><td>59 in / 150 cm</td><td>53 in / 135 cm</td><td>62 in / 157 cm</td></tr>
                    <tr><td>32</td><td>60</td><td>28</td><td>62 in / 157 cm</td><td>56 in / 142 cm</td><td>65 in / 165 cm</td></tr>
                    <tr><td>34</td><td>62</td><td>30</td><td>65 in / 165 cm</td><td>59 in / 150 cm</td><td>68 in / 173 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-table-card">
              <h2>Letter-size conversion</h2>
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>UK numeric</th><th>Letter size</th></tr></thead>
                  <tbody>
                    <tr><td>4</td><td>XXS</td></tr><tr><td>6</td><td>XS</td></tr><tr><td>8-10</td><td>S</td></tr>
                    <tr><td>12-14</td><td>M</td></tr><tr><td>16-18</td><td>L</td></tr><tr><td>20-22</td><td>XL</td></tr>
                    <tr><td>24-26</td><td>XXL</td></tr><tr><td>28-30</td><td>3XL</td></tr><tr><td>32</td><td>4XL</td></tr><tr><td>34</td><td>5XL</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-checklist">
              <h2>Shop rules</h2>
              <ul>
                <li>Use the UK numeric size for the shop.</li>
                <li>Use EU, US and letter sizes to convert garments into UK sizes.</li>
                <li>When the label is unclear, use measurements to help sort it.</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="charity-subpanel" id="sizes-mens" role="tabpanel" aria-labelledby="sizesMensTab" tabindex="0" hidden>
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <h2>Men's size guide</h2>
              <p><strong>Letter sizes are used for men's tops, shirts and jackets.</strong> Men's trousers use the waist size. Measurements are approximate and fit style can vary.</p>
            </article>

            <article class="card charity-card charity-card--wide charity-table-card">
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>Letter size</th><th>Neck</th><th>Chest</th><th>Waist</th></tr></thead>
                  <tbody>
                    <tr><td>XS</td><td>13-13.5 in / 33-34 cm</td><td>34-36 in / 86-91 cm</td><td>28-30 in / 71-76 cm</td></tr>
                    <tr><td>S</td><td>14-14.5 in / 36-37 cm</td><td>36-38 in / 91-97 cm</td><td>30-32 in / 76-81 cm</td></tr>
                    <tr><td>M</td><td>15-15.5 in / 38-39 cm</td><td>38-40 in / 97-102 cm</td><td>32-34 in / 81-86 cm</td></tr>
                    <tr><td>L</td><td>16-16.5 in / 41-42 cm</td><td>40-42 in / 102-107 cm</td><td>34-36 in / 86-91 cm</td></tr>
                    <tr><td>XL</td><td>17-17.5 in / 43-44 cm</td><td>42-44 in / 107-112 cm</td><td>36-38 in / 91-97 cm</td></tr>
                    <tr><td>XXL</td><td>18-18.5 in / 46-47 cm</td><td>44-46 in / 112-117 cm</td><td>38-40 in / 97-102 cm</td></tr>
                    <tr><td>3XL</td><td>19-19.5 in / 48-50 cm</td><td>46-48 in / 117-122 cm</td><td>40-42 in / 102-107 cm</td></tr>
                    <tr><td>4XL</td><td>20-20.5 in / 51-52 cm</td><td>48-50 in / 122-127 cm</td><td>42-44 in / 107-112 cm</td></tr>
                    <tr><td>5XL</td><td>21-21.5 in / 53-55 cm</td><td>50-52 in / 127-132 cm</td><td>44-46 in / 112-117 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-card--wide charity-checklist">
              <h2>Shop rules</h2>
              <ul>
                <li>Use the letter size for men's tops, shirts and jackets.</li>
                <li>Use the waist size on men's trousers.</li>
                <li>Use neck and chest measurements to help convert a garment to the nearest size.</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="charity-subpanel" id="sizes-shoes" role="tabpanel" aria-labelledby="sizesShoesTab" tabindex="0" hidden>
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <h2>Shoe size guide</h2>
              <p><strong>UK sizes are used for the shop.</strong> EU conversions and foot lengths are approximate because brands vary; use them to help convert unclear labels.</p>
            </article>

            <article class="card charity-card charity-card--wide charity-table-card">
              <h2>Ladies' shoes</h2>
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>UK</th><th>Europe (EU)</th><th>Foot length</th></tr></thead>
                  <tbody>
                    <tr><td>2</td><td>35</td><td>21.3-22.0 cm</td></tr><tr><td>3</td><td>36</td><td>22.1-22.9 cm</td></tr>
                    <tr><td>4</td><td>37</td><td>23.0-23.8 cm</td></tr><tr><td>5</td><td>38</td><td>23.9-24.6 cm</td></tr>
                    <tr><td>6</td><td>39</td><td>24.7-25.4 cm</td></tr><tr><td>7</td><td>40</td><td>25.5-26.2 cm</td></tr>
                    <tr><td>8</td><td>41</td><td>26.3-27.1 cm</td></tr><tr><td>9</td><td>42</td><td>27.2-27.9 cm</td></tr>
                    <tr><td>10</td><td>43</td><td>28.0-28.8 cm</td></tr><tr><td>11</td><td>44</td><td>28.9-29.6 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-card--wide charity-table-card">
              <h2>Men's shoes</h2>
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>UK</th><th>Europe (EU)</th><th>Foot length</th></tr></thead>
                  <tbody>
                    <tr><td>4</td><td>37</td><td>23.0-23.8 cm</td></tr><tr><td>5</td><td>38</td><td>23.9-24.6 cm</td></tr>
                    <tr><td>6</td><td>39</td><td>24.7-25.4 cm</td></tr><tr><td>7</td><td>40</td><td>25.5-26.2 cm</td></tr>
                    <tr><td>8</td><td>41</td><td>26.3-27.1 cm</td></tr><tr><td>9</td><td>42</td><td>27.2-27.9 cm</td></tr>
                    <tr><td>10</td><td>43</td><td>28.0-28.8 cm</td></tr><tr><td>11</td><td>44</td><td>28.9-29.6 cm</td></tr>
                    <tr><td>12</td><td>45</td><td>29.7-30.5 cm</td></tr><tr><td>13</td><td>46</td><td>30.6-31.3 cm</td></tr>
                    <tr><td>14</td><td>47</td><td>31.4-32.2 cm</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-card--wide charity-checklist">
              <h2>Shop rules</h2>
              <ul>
                <li>Use the UK size for the shop.</li>
                <li>Use the EU size to convert shoes into UK sizes.</li>
                <li>Check that both shoes are the same size and belong to the same pair.</li>
                <li>When the size is unclear, check the label inside the shoe.</li>
                <li>Sizes outside these practical chart ranges also exist; always use the size printed inside the shoe when it is legible.</li>
              </ul>
            </article>
          </div>
        </div>
        <div class="charity-subpanel" id="sizes-duvet" role="tabpanel" aria-labelledby="sizesDuvetTab" tabindex="0" hidden>
          <div class="charity-grid">
            <article class="card charity-card charity-card--wide">
              <h2>Duvet size guide</h2>
              <p>Use the duvet or duvet-cover size label first. When no usable label is visible, measure the duvet cover width by length and use the nearest standard duvet size.</p>
            </article>

            <article class="card charity-card charity-card--wide charity-table-card">
              <div class="charity-table-scroll">
                <table>
                  <thead><tr><th>UK size</th><th>Measurement (cm)</th><th>Measurement (inches)</th><th>Typical use</th></tr></thead>
                  <tbody>
                    <tr><td>Cot Bed</td><td>120 x 150 cm</td><td>47 x 59 in</td><td>Cot bed duvet</td></tr>
                    <tr><td>Single</td><td>135 x 200 cm</td><td>53 x 79 in</td><td>Single bed duvet</td></tr>
                    <tr><td>Double</td><td>200 x 200 cm</td><td>79 x 79 in</td><td>Double bed duvet</td></tr>
                    <tr><td>King</td><td>225 x 220 cm</td><td>89 x 87 in</td><td>King-size duvet</td></tr>
                    <tr><td>Super King</td><td>260 x 220 cm</td><td>102 x 87 in</td><td>Super-king duvet</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article class="card charity-card charity-card--wide charity-checklist">
              <h2>Duvet-cover sorting rules</h2>
              <ul>
                <li>Use the duvet or duvet-cover size label first.</li>
                <li>When no usable label is visible, use the duvet-cover measurements to sort it.</li>
                <li>Measure the full width x length of the duvet cover.</li>
                <li>Duvet-cover measurements are approximate and may vary slightly by brand.</li>
              </ul>
            </article>

            <article class="card charity-card">
              <h2>Measure clearly</h2>
              <p>Lay the duvet cover as flat as practical. Measure its full width and full length rather than a folded section.</p>
            </article>
            <article class="card charity-card">
              <h2>Choose the nearest duvet size</h2>
              <p>Compare the duvet-cover measurements with the duvet table and use the nearest recognised UK duvet size when no usable label is present.</p>
            </article>
          </div>
        </div>
      </section>

    </main>
  </div>

  <script defer src="/sitewide/js/baseline-protected-access.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1"></script>
  <script defer src="/sitewide/js/baseline-api.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1"></script>
  <script defer src="/sitewide/js/baseline-store.js?v=SITEWIDE_STORE_BOUNDARY_20260802_1"></script>
  <script defer src="/sitewide/js/baseline-auth.js?v=SITEWIDE_AUTH_CLIENT_20260802_1"></script>
  <script defer src="/sitewide/js/baseline-shared.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1"></script>
  <script defer src="/systems/charity-shop/js/charity-float.js?v=CHARITY_FLOAT_20260801_1"></script>
  <script defer src="/systems/charity-shop/js/charity-shop.js?v=CHARITY_FLOAT_COPY_20260801_2"></script>
</body>
</html>
