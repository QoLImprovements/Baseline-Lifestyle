(function(){
  function fmt(n){
    var rounded = Math.round(n * 10) / 10;
    return (Math.abs(rounded - Math.round(rounded)) < 0.001) ? String(Math.round(rounded)) : rounded.toFixed(1);
  }

  function explain(percent){
    if(percent <= 1){
      return 'Almost pure long-slip massage. Fast movement, very little drag, best when you want the hands to travel freely.';
    }
    if(percent <= 3){
      return 'Very light drag. The stroke still moves quickly, but there is a small increase in control and cling.';
    }
    if(percent <= 5){
      return 'Light-balanced feel. More traction than a plain olive blend, without becoming heavy.';
    }
    if(percent <= 7){
      return 'Controlled but still mobile. A good midpoint for general body massage when you want some hold.';
    }
    if(percent <= 9){
      return 'Balanced middle ground: enough grip for controlled massage without making the stroke feel sticky.';
    }
    if(percent <= 11){
      return 'Noticeably richer drag. The hands slow down more and the blend feels more anchored on the skin.';
    }
    if(percent <= 13){
      return 'High-control glide. Useful when you want firmer traction and less free slip across the skin.';
    }
    return 'Richest drag. Maximum cling and the slowest stroke speed in this blend range.';
  }

  function explainCushion(percent){
    if(percent <= 0.2){
      return 'Very light cushion. The gel stays loose, quick-spreading, and easy to rinse, with minimal blade buffering.';
    }
    if(percent <= 0.4){
      return 'Light cushion. More body than the thinnest end, but still fast and fluid on wet skin.';
    }
    if(percent <= 0.7){
      return 'Balanced cushion. Enough density to keep the pass calm without making the gel feel heavy.';
    }
    if(percent <= 0.9){
      return 'High cushion. Denser, more protective shave gel with more hold under the blade and less collapse through the pass.';
    }
    return 'Maximum cushion. Thickest, most structured gel in this range; best when you want the strongest blade buffering.';
  }

  function explainBalancedCleanser(castor){
    if(castor <= 6){
      return 'Very light cleansing pull. Mostly safflower slip with only a small castor anchor.';
    }
    if(castor <= 10){
      return 'Middle-ground cleanse. Safflower stays dominant while castor adds more cling and sebum-lifting pull.';
    }
    if(castor <= 14){
      return 'Noticeably richer pull. More cling through massage, but still not as occlusive as the enhanced variant.';
    }
    return 'Strongest balanced-phase pull. Castor is prominent here, giving the cleanser a slower, grippier stroke.';
  }

  function explainEnhancedCleanser(olive){
    if(olive <= 14){
      return 'Lightest enhanced finish. Olive is present, but safflower still keeps the after-feel fairly restrained.';
    }
    if(olive <= 20){
      return 'Cushioned and slower-moving. Olive raises the occlusive after-feel while castor stays fixed for cleansing pull.';
    }
    if(olive <= 26){
      return 'Rich barrier-leaning finish. More olive means more lingering cushion after rinse-off.';
    }
    return 'Most occlusive setting in this range. Best when you want the cleanser to leave the fullest protective film.';
  }

  function explainBalmBalance(castor){
    if(castor <= 6){
      return 'Jojoba-led glide. Smoother, less clingy, and easier to spread thinly.';
    }
    if(castor <= 9){
      return 'Balanced protective slip. Enough castor for cling, with jojoba still dominant so the balm stays smoother and less tacky.';
    }
    if(castor <= 12){
      return 'More cling and grip. The balm feels denser on application and holds to the skin longer.';
    }
    return 'Highest cling in this range. Best when you want the balm to feel more anchored and cushiony.';
  }

  function explainBalmFirmness(wax){
    if(wax <= 6){
      return 'Soft-set balm. Faster melt on contact and easier pickup from the jar.';
    }
    if(wax <= 8.5){
      return 'Mid-firm balm. Enough wax for structure, but still easy to pick up and spread with finger warmth.';
    }
    if(wax <= 10){
      return 'Firmer set. More resistance in the jar and a slower melt across the skin.';
    }
    return 'Firmest set in this range. Best when you want stronger structure and more heat resistance.';
  }

  function activateCleanserVariant(name){
    var recipe = document.getElementById('r2');
    if(!recipe) return;
    Array.prototype.forEach.call(recipe.querySelectorAll('.variant-tab'), function(btn){
      var active = btn.getAttribute('data-variant') === name;
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
      btn.tabIndex = active ? 0 : -1;
    });

    Array.prototype.forEach.call(recipe.querySelectorAll('.variant-panel'), function(panel){
      var active = panel.getAttribute('data-variant-panel') === name;
      panel.hidden = !active;
    });

    // Keep derived Skincare surfaces synchronized after the selected variant changes.
    // URL/history ownership remains in the shared recipe router.
    if(typeof recipe.__baselineSyncVariantDetailState === 'function'){
      recipe.__baselineSyncVariantDetailState();
    }
    if(typeof window.refreshRecipeComedogenic === 'function'){
      window.refreshRecipeComedogenic(recipe);
    }
    if(typeof recipe.__baselineUpdatePrintSummary === 'function'){
      recipe.__baselineUpdatePrintSummary();
    }
    if(typeof recipe.__baselineRefreshMethodAmounts === 'function'){
      recipe.__baselineRefreshMethodAmounts();
    }

  }


  function normalizeMultiplierControls(root){
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll('.multiplier input'), function(input){
      try{
        if(input.type !== 'number') input.type = 'number';
      }catch(err){}
      input.setAttribute('step', '0.1');
      input.setAttribute('inputmode', 'decimal');
    });
  }

  function initMultiplierControlFixes(){
    if(document.body && document.body.dataset.multiplierFixBound === '1') return;
    if(document.body) document.body.dataset.multiplierFixBound = '1';
    normalizeMultiplierControls(document);
  }

  function initCleanserVariantTabs(){
    var recipe = document.getElementById('r2');
    if(!recipe) return;

    Array.prototype.forEach.call(recipe.querySelectorAll('.variant-tab'), function(btn){
      if(btn.dataset.bound === '1') return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function(){
        activateCleanserVariant(btn.getAttribute('data-variant'));
      });
    });

    var active = recipe.querySelector('.variant-tab[aria-selected="true"]');
    activateCleanserVariant(active ? active.getAttribute('data-variant') : 'balanced');
  }

  function paintTrack(slider){
    var min = Number(slider.min || 0);
    var max = Number(slider.max || 15);
    var val = Number(slider.value || 0);
    var pct = ((val - min) / (max - min)) * 100;
    slider.style.background = 'linear-gradient(90deg, rgba(188,95,70,0.82) 0%, rgba(188,95,70,0.82) ' + pct + '%, rgba(188,95,70,0.18) ' + pct + '%, rgba(188,95,70,0.18) 100%)';
  }

  function applyScaledDisplay(recipe, els, value, unit){
    Array.prototype.forEach.call(els, function(el){
      el.dataset.baseMin = String(value);
      el.dataset.baseMax = String(value);
      el.dataset.baseUnit = unit;
      el.dataset.baseDisplay = fmt(value) + ' ' + unit;
    });
    if(recipe && typeof recipe.__baselineApplyScaling === 'function'){
      recipe.__baselineApplyScaling();
    }else{
      Array.prototype.forEach.call(els, function(el){
        el.textContent = fmt(value) + ' ' + unit;
      });
    }
  }

  function syncOilCleanser(){
    var recipe = document.getElementById('r2');
    if(!recipe) return;

    var reactiveAmt = recipe.querySelectorAll('.r2-reactive-safflower-amt');
    applyScaledDisplay(recipe, reactiveAmt, 100, 'ml');

    var balancedSlider = document.getElementById('r2BalancedCastor');
    if(balancedSlider){
      var castor = Number(balancedSlider.value || 0);
      var safflower = 100 - castor;
      Array.prototype.forEach.call(recipe.querySelectorAll('.r2-balanced-castor-percent'), function(el){ el.textContent = fmt(castor); });
      Array.prototype.forEach.call(recipe.querySelectorAll('.r2-balanced-safflower'), function(el){ el.textContent = fmt(safflower); });
      applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-balanced-castor-amt'), castor, 'ml');
      applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-balanced-safflower-amt'), safflower, 'ml');
      var explainEl = document.getElementById('r2BalancedExplain');
      if(explainEl) explainEl.textContent = explainBalancedCleanser(castor);
      var breakdownEl = document.getElementById('r2BalancedBreakdown');
      if(breakdownEl){
        breakdownEl.innerHTML = '<strong>Blend:</strong> <span class="r2-balanced-safflower">' + fmt(safflower) + '%</span> safflower • <span class="r2-balanced-castor-percent">' + fmt(castor) + '%</span> castor';
      }
      paintTrack(balancedSlider);
    }

    var enhancedSlider = document.getElementById('r2EnhancedOlive');
    if(enhancedSlider){
      var olive = Number(enhancedSlider.value || 0);
      var castorFixed = 10;
      var safflowerEnhanced = 100 - castorFixed - olive;
      Array.prototype.forEach.call(recipe.querySelectorAll('.r2-enhanced-olive-percent'), function(el){ el.textContent = fmt(olive); });
      Array.prototype.forEach.call(recipe.querySelectorAll('.r2-enhanced-safflower'), function(el){ el.textContent = fmt(safflowerEnhanced); });
      applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-enhanced-safflower-amt'), safflowerEnhanced, 'ml');
      applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-enhanced-castor-amt'), castorFixed, 'ml');
      applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-enhanced-olive-amt'), olive, 'ml');
      var explainEnhancedEl = document.getElementById('r2EnhancedExplain');
      if(explainEnhancedEl) explainEnhancedEl.textContent = explainEnhancedCleanser(olive);
      var enhancedBreakdown = document.getElementById('r2EnhancedBreakdown');
      if(enhancedBreakdown){
        enhancedBreakdown.innerHTML = '<strong>Blend:</strong> <span class="r2-enhanced-safflower">' + fmt(safflowerEnhanced) + '%</span> safflower • 10% castor • <span class="r2-enhanced-olive-percent">' + fmt(olive) + '%</span> olive';
      }
      paintTrack(enhancedSlider);
    }

    var reactiveSlider = document.getElementById('r2Reactive');
    if(reactiveSlider) paintTrack(reactiveSlider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function getBalmOverallFeel(castor, wax){
    var oilBand = castor <= 7 ? 'low' : (castor >= 11 ? 'high' : 'mid');
    var firmBand = wax <= 6.5 ? 'soft' : (wax >= 9.5 ? 'firm' : 'mid');
    var map = {
      'low|soft':'Softest pickup with the quickest melt. Jojoba leads the slip, so the balm feels smoother and less cling-heavy.',
      'low|mid':'Smooth protective slip with a medium set. Jojoba stays forward, so the balm spreads cleanly without feeling loose.',
      'low|firm':'Firmer surface with a cleaner, drier pickup. Jojoba still keeps the stroke smoother than the higher-castor settings.',
      'mid|soft':'Soft-set protective balm with noticeable cling. Easy pickup, quicker melt, and a more cushioned stroke once spread.',
      'mid|mid':'Balanced protective slip with a medium set. Enough cling for cushioning, while pickup and spread stay controlled.',
      'mid|firm':'More structured balm with measured drag. Pickup is firmer and the finish stays anchored for longer.',
      'high|soft':'High cling with a softer set. The balm picks up easily but settles into a heavier, slower-moving protective layer.',
      'high|mid':'Dense, cling-led balm with a controlled set. Castor weight is obvious, while the structure keeps it from feeling loose.',
      'high|firm':'Most anchored setting in this range. Highest pickup resistance, slowest melt, and the strongest protective drag.'
    };
    return map[oilBand + '|' + firmBand] || map['mid|mid'];
  }

  function syncProtectiveTouchBalm(){
    var recipe = document.getElementById('r3');
    if(!recipe) return;

    var balanceSlider = document.getElementById('r3BalanceCastor');
    var firmnessSlider = document.getElementById('r3FirmnessWax');
    if(!balanceSlider || !firmnessSlider) return;

    var castor = Number(balanceSlider.value || 0);
    var jojoba = 46.5 - castor;
    var wax = Number(firmnessSlider.value || 0);
    var shea = 48 - wax;

    Array.prototype.forEach.call(recipe.querySelectorAll('.r3-balance-castor-readout'), function(el){ el.textContent = fmt(castor); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r3-balance-jojoba-readout'), function(el){ el.textContent = fmt(jojoba); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r3-firmness-carnauba-readout'), function(el){ el.textContent = fmt(wax); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r3-firmness-shea-readout'), function(el){ el.textContent = fmt(shea); });

    applyScaledDisplay(recipe, recipe.querySelectorAll('.r3-balance-castor-amt'), castor, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r3-balance-jojoba-amt'), jojoba, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r3-firmness-carnauba-amt'), wax, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r3-firmness-shea-amt'), shea, 'g');

    var explainEl = document.getElementById('r3OverallExplain');
    if(explainEl) explainEl.textContent = getBalmOverallFeel(castor, wax);
    var breakdownEl = document.getElementById('r3OverallBreakdown');
    if(breakdownEl){
      breakdownEl.innerHTML = '<strong>Selected variant:</strong> <span class="r3-balance-jojoba-readout">' + fmt(jojoba) + '</span>% jojoba • <span class="r3-balance-castor-readout">' + fmt(castor) + '</span>% castor • <span class="r3-firmness-shea-readout">' + fmt(shea) + '</span>% shea • <span class="r3-firmness-carnauba-readout">' + fmt(wax) + '</span>% carnauba • 5.0% calendula • 0.5% vitamin E';
    }

    paintTrack(balanceSlider);
    paintTrack(firmnessSlider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function syncShaveCushion(){
    var recipe = document.getElementById('r5');
    if(!recipe) return;
    var slider = document.getElementById('r5Cushion');
    if(!slider) return;

    var percent = Number(slider.value || 0);
    var guar = 240 * (percent / 100);
    var percentEls = recipe.querySelectorAll('.r5-cushion-percent');
    Array.prototype.forEach.call(percentEls, function(el){ el.textContent = fmt(percent); });

    var guarAmt = recipe.querySelector('.r5-cushion-guar-amt');
    if(guarAmt){
      guarAmt.dataset.baseMin = String(guar);
      guarAmt.dataset.baseMax = String(guar);
      guarAmt.dataset.baseUnit = 'g';
      guarAmt.dataset.baseDisplay = fmt(guar) + ' g';
    }

    if(recipe && typeof recipe.__baselineApplyScaling === 'function'){
      recipe.__baselineApplyScaling();
    }else if(guarAmt){
      guarAmt.textContent = fmt(guar) + ' g';
    }

    var explainEl = document.getElementById('r5CushionExplain');
    if(explainEl) explainEl.textContent = explainCushion(percent);

    var breakdownEl = document.getElementById('r5CushionBreakdown');
    if(breakdownEl){
      breakdownEl.innerHTML = '<strong>Blend:</strong> 240 ml water • 2 tbsp slippery elm • 5 ml glycerin • <span class="r5-cushion-percent">' + fmt(percent) + '%</span> guar • 1.25 ml jojoba';
    }

    paintTrack(slider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function explainOliveMassage(castor){
    if(castor <= 3){ return 'Fastest olive setting. Lighter traction, quicker spread, and the cleanest slip in this range.'; }
    if(castor <= 7){ return 'Balanced olive setting. Controlled glide with enough grip to keep the stroke deliberate.'; }
    if(castor <= 11){ return 'Heavier olive setting. More cling and a slower-working massage stroke.'; }
    return 'Most anchored olive setting. Slowest glide, richest drag, and the strongest lingering cushion.';
  }

  function syncMassageSlider(){
    var recipe = document.getElementById('r6');
    if(!recipe) return;
    var slider = document.getElementById('r6Glide');
    if(!slider) return;

    var castor = Number(slider.value || 0);
    var olive = 85 - castor;
    Array.prototype.forEach.call(recipe.querySelectorAll('.glide-percent, .glide-castor'), function(el){ el.textContent = fmt(castor); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.glide-olive'), function(el){ el.textContent = fmt(olive); });
    applyScaledDisplay(recipe, recipe.querySelectorAll('.glide-castor-amt'), castor, 'ml');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.glide-olive-amt'), olive, 'ml');

    var explainEl = document.getElementById('r6GlideExplain');
    if(explainEl) explainEl.textContent = explainOliveMassage(castor);
    var breakdownEl = document.getElementById('r6GlideBreakdown');
    if(breakdownEl){
      breakdownEl.innerHTML = '<strong>Current blend:</strong> 15% jojoba • <span class="glide-castor">' + fmt(castor) + '%</span> castor • <span class="glide-olive">' + fmt(olive) + '%</span> olive';
    }
    paintTrack(slider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function bindSlider(id, syncFn){
    var slider = document.getElementById(id);
    if(!slider){
      return;
    }
    if(slider.dataset.bound !== '1'){
      slider.dataset.bound = '1';
      slider.addEventListener('input', syncFn);
      slider.addEventListener('change', syncFn);
    }
    paintTrack(slider);
  }

  function sliderSaveStorageKey(key){
    var auth = (window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function') ? window.BASELINE_auth.get() : null;
    var user = auth && auth.authed ? String(auth.name || 'user').trim().toLowerCase() : 'guest';
    return '__baseline_slider_state__::' + user + '::' + key;
  }

  function applySavedControllerState(controller, syncFn){
    if(!controller) return;
    var saveKey = controller.getAttribute('data-slider-save-id');
    if(!saveKey) return;
    var auth = (window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function') ? window.BASELINE_auth.get() : null;
    if(!(auth && auth.authed)) return;
    try{
      var raw = localStorage.getItem(sliderSaveStorageKey(saveKey));
      if(!raw) return;
      var parsed = JSON.parse(raw);
      var sliders = Array.prototype.slice.call(controller.querySelectorAll('.glide-slider'));
      sliders.forEach(function(slider){
        var next = parsed && parsed[slider.id];
        if(typeof next !== 'undefined') slider.value = String(next);
      });
      if(typeof syncFn === 'function') syncFn();
    }catch(_e){}
  }

  function clearSliderStatus(controller){
    if(!controller) return;
    var status = controller.querySelector('.slider-save-status');
    if(status){
      status.textContent = '';
      status.removeAttribute('data-kind');
    }
    if(controller.__sliderStatusTimer){
      window.clearTimeout(controller.__sliderStatusTimer);
      controller.__sliderStatusTimer = null;
    }
  }

  function setSliderStatus(controller, text, kind){
    if(!controller) return;
    var status = controller.querySelector('.slider-save-status');
    if(!status) return;
    clearSliderStatus(controller);
    status.textContent = text || '';
    if(kind) status.setAttribute('data-kind', kind);
    if(text){
      controller.__sliderStatusTimer = window.setTimeout(function(){
        if(status.textContent === text) clearSliderStatus(controller);
      }, 2200);
    }
  }

  var SKIN_COMEDOGENIC = {
    'ing-shea': 1.0,
    'ing-carnauba': 1.0,
    'ing-calendula': 2.0,
    'ing-coconut': 4.0,
    'ing-olive': 2.0,
    'ing-avocado': 2.0,
    'ing-argan': 0.5,
    'ing-jojoba': 2.0,
    'ing-watermelon': 1.0,
    'ing-fractionated-coconut': 1.0,
    'ing-castor': 1.0,
    'ing-glycerin': 0.0,
    'ing-vitamin-e': 0.0,
    'ing-water': 0.0,
    'ing-witchhazel': 0.0,
    'ing-rosewater': 0.0,
    'ing-cucumber': 1.0,
    'ing-safflower': 0.5,
    'ing-slipperyelm': 0.0,
    'ing-guar': 0.0,
    'ing-vinegar': 0.0,
    'ing-lavender': 0.0,
    'ing-dead-sea-salt': 0.0,
    'ing-guar-gum': 0.0,
    'ing-cocoa-butter': 4.0,
    'ing-mango-butter': 2.0,
    'ing-kokum-butter': 2.0,
    'ing-apricot-kernel-oil': 2.0,
    'ing-red-raspberry-seed-oil': 2.0,
    'ing-candelilla-wax': 1.0,
    'ing-white-kaolin': 0.0,
    'ing-sage-leaf-powder': 0.0,
    'ing-peppermint-leaf-powder': 0.0
  };

  function parseDisplayedAmountValue(text){
    var m = String(text || '').replace(/,/g, '.').match(/-?\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : NaN;
  }

  function findRecipeIngredientsScope(recipeEl){
    var activePanel = recipeEl.querySelector('.variant-panel:not([hidden])');
    return activePanel || recipeEl;
  }

  function findRecipeComedogenicOutput(recipeEl){
    return recipeEl ? recipeEl.querySelector('.recipe-comedogenic-rating-value') : null;
  }

  function comedogenicBand(score){
    if(score < 0.5) return 'Very low relative clogging potential';
    if(score < 1.5) return 'Low relative clogging potential';
    if(score < 2.5) return 'Low–Moderate relative clogging potential';
    if(score < 3.5) return 'Moderate relative clogging potential';
    if(score < 4.5) return 'Moderately high relative clogging potential';
    return 'High relative clogging potential';
  }

  function updateRecipeComedogenic(recipeEl){
    if(!recipeEl) return;
    var scope = findRecipeIngredientsScope(recipeEl);
    var output = findRecipeComedogenicOutput(recipeEl);
    if(!scope || !output) return;
    var total = 0;
    var weighted = 0;
    Array.prototype.forEach.call(scope.querySelectorAll('li'), function(li){
      var link = li.querySelector('a.ing-link[data-ingredient]');
      if(!link) return;
      var ingId = String(link.getAttribute('data-ingredient') || '').trim();
      if(!Object.prototype.hasOwnProperty.call(SKIN_COMEDOGENIC, ingId)) return;
      var amtEl = li.querySelector('.amt');
      var raw = amtEl ? amtEl.textContent : li.textContent;
      var amount = parseDisplayedAmountValue(raw);
      if(!Number.isFinite(amount) || amount <= 0) return;
      var rating = Number(SKIN_COMEDOGENIC[ingId]);
      total += amount;
      weighted += amount * rating;
    });
    if(total <= 0){
      output.textContent = '0 (' + comedogenicBand(0) + ')';
      return;
    }
    var score = weighted / total;
    var displayScore = score.toFixed(1).replace(/\.0$/, '');
    output.textContent = displayScore + ' (' + comedogenicBand(score) + ')';
  }

  window.refreshRecipeComedogenic = updateRecipeComedogenic;

  function syncHydrationLayer(){
    var recipe = document.getElementById('r7');
    var slider = document.getElementById('r7Hydration');
    if(!recipe || !slider) return;

    var water = Number(slider.value || 80);
    if(!Number.isFinite(water)) water = 80;
    if(water < 70) water = 70;
    if(water > 90) water = 90;
    var glycerin = 100 - water;

    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-water-readout'), function(el){ el.textContent = fmt(water); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-glycerin-readout'), function(el){ el.textContent = fmt(glycerin); });

    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-water-amt'), function(span){
      span.dataset.baseMin = String(water);
      span.dataset.baseMax = String(water);
      span.dataset.baseUnit = 'ml';
      span.dataset.baseDisplay = fmt(water) + ' ml';
    });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-glycerin-amt'), function(span){
      span.dataset.baseMin = String(glycerin);
      span.dataset.baseMax = String(glycerin);
      span.dataset.baseUnit = 'ml';
      span.dataset.baseDisplay = fmt(glycerin) + ' ml';
    });

    if(recipe && typeof recipe.__baselineApplyScaling === 'function'){
      recipe.__baselineApplyScaling();
    }

    var explain = document.getElementById('r7Explain');
    if(explain){
      if(glycerin <= 15) explain.textContent = 'Lower humectant setting. Lighter feel with less surface hold and faster dry-down before sealing.';
      else if(glycerin >= 25) explain.textContent = 'Higher humectant setting. Stronger surface hold with a denser post-wash hydration layer before sealing.';
      else explain.textContent = 'Balanced hydration setting. Light water phase with enough glycerin to reduce depleted post-wash feel before sealing.';
    }

    var breakdown = document.getElementById('r7Breakdown');
    if(breakdown){
      breakdown.innerHTML = '<strong>Selected variant:</strong> <span class="r7-water-readout">' + fmt(water) + '%</span> rose water or water • <span class="r7-glycerin-readout">' + fmt(glycerin) + '%</span> vegetable glycerin';
    }

    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
    paintTrack(slider);
  }

  function decorateSliderSaves(){
    Array.prototype.forEach.call(document.querySelectorAll('.recipe-page .glide-controller'), function(controller){
      if(controller.dataset.sliderSaveReady === '1') return;
      var explainer = controller.querySelector('.glide-control-explainer');
      if(!explainer) return;
      var recipe = controller.closest('.recipe-page');
      if(!recipe) return;
      var panel = controller.closest('.variant-panel');
      var saveId = recipe.id + (panel && panel.getAttribute('data-variant-panel') ? (':' + panel.getAttribute('data-variant-panel')) : '');
      controller.setAttribute('data-slider-save-id', saveId);

      var row = explainer.querySelector(':scope > .slider-save-row');
      var saveBtn = row && row.querySelector('.slider-save-btn:not(.slider-default-btn)');
      var defaultBtn = row && row.querySelector('.slider-default-btn');
      var status = row && row.querySelector('.slider-save-status');
      if(!row){
        row = document.createElement('div');
        row.className = 'slider-save-row';
        saveBtn = document.createElement('button');
        saveBtn.type = 'button';
        saveBtn.className = 'slider-save-btn';
        saveBtn.textContent = 'Save as my setting';
        defaultBtn = document.createElement('button');
        defaultBtn.type = 'button';
        defaultBtn.className = 'slider-save-btn slider-default-btn';
        defaultBtn.textContent = 'Reset to recipe default';
        status = document.createElement('span');
        status.className = 'slider-save-status';
        row.appendChild(saveBtn);
        row.appendChild(defaultBtn);
        row.appendChild(status);
        explainer.appendChild(row);
      }
      if(!saveBtn || !defaultBtn || !status) return;

      var syncFn = function(){
        if(typeof controller.__baselineSliderSync === 'function') controller.__baselineSliderSync();
        else if(recipe.id === 'r2') syncOilCleanser();
        else if(recipe.id === 'r3') syncProtectiveTouchBalm();
        else if(recipe.id === 'r5') syncShaveCushion();
        else if(recipe.id === 'r6') syncMassageSlider();
        else if(recipe.id === 'r7') syncHydrationLayer();
      };

      Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'), function(slider){
        slider.addEventListener('input', function(){ clearSliderStatus(controller); });
        slider.addEventListener('change', function(){ clearSliderStatus(controller); });
      });

      saveBtn.addEventListener('click', function(){
        var auth = (window.BASELINE_auth && typeof window.BASELINE_auth.get === 'function') ? window.BASELINE_auth.get() : null;
        if(!(auth && auth.authed)) {
          setSliderStatus(controller, 'Log in to save slider position', 'notice');
          return;
        }
        try{
          var payload = {};
          Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'), function(slider){ payload[slider.id] = slider.value; });
          localStorage.setItem(sliderSaveStorageKey(saveId), JSON.stringify(payload));
          setSliderStatus(controller, 'Saved', 'saved');
        }catch(_e){
          setSliderStatus(controller, 'Could not save', 'error');
        }
      });

      defaultBtn.addEventListener('click', function(){
        Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'), function(slider){
          slider.value = String(slider.getAttribute('data-default-value') || slider.getAttribute('data-default') || slider.defaultValue || slider.value);
        });
        syncFn();
        setSliderStatus(controller, 'Defaults restored');
      });

      controller.dataset.sliderSaveReady = '1';
      applySavedControllerState(controller, syncFn);
    });
  }
  window.BASELINE_decorateRecipeSliderSaves = decorateSliderSaves;

  function initRecipeSliders(){
    initMultiplierControlFixes();
    initCleanserVariantTabs();
    bindSlider('r2BalancedCastor', syncOilCleanser);
    bindSlider('r2EnhancedOlive', syncOilCleanser);
    bindSlider('r3BalanceCastor', syncProtectiveTouchBalm);
    bindSlider('r3FirmnessWax', syncProtectiveTouchBalm);
    bindSlider('r5Cushion', syncShaveCushion);
    bindSlider('r6Glide', syncMassageSlider);
    bindSlider('r7Hydration', syncHydrationLayer);
    decorateSliderSaves();
    syncOilCleanser();
    syncProtectiveTouchBalm();
    syncShaveCushion();
    syncMassageSlider();
    syncHydrationLayer();
    Array.prototype.forEach.call(document.querySelectorAll('.recipe-page'), function(recipe){
      if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
    });
  }

  initRecipeSliders();
})();
