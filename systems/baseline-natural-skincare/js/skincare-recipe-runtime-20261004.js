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

  function explainOilCleanser(castor, olive){
    if(olive >= 24){
      return 'Richest barrier setting. Olive is prominent, giving the slowest, most cushioned and most occlusive finish in the available range.';
    }
    if(olive >= 10){
      if(castor >= 14) return 'Enhanced Barrier with strong cleansing pull: richer olive cushion combined with a noticeably grippier castor-led massage.';
      if(castor <= 4) return 'Enhanced Barrier with light cleansing pull: olive adds cushion while castor stays restrained.';
      return 'Enhanced Barrier territory: olive adds a richer protective after-feel while castor maintains controlled cleansing pull.';
    }
    if(castor <= 1){
      return 'Reactive reference area. Safflower carries almost the entire formula for the lightest, simplest cleansing feel.';
    }
    if(castor <= 6){
      return 'Light cleansing pull. Safflower remains strongly dominant with only a small increase in castor grip.';
    }
    if(castor <= 12){
      return 'Balanced reference area. Castor adds controlled cleansing pull while the finish stays comparatively light when olive is low.';
    }
    return 'Strong cleansing pull. Higher castor gives more cling, traction and a slower-moving massage while safflower remains the main phase.';
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
    var castorSlider = document.getElementById('r2CleansingPull');
    var oliveSlider = document.getElementById('r2BarrierRichness');
    if(!castorSlider || !oliveSlider) return;

    var castor = Number(castorSlider.value || 0);
    var olive = Number(oliveSlider.value || 0);
    if(!Number.isFinite(castor)) castor = 10;
    if(!Number.isFinite(olive)) olive = 0;
    castor = Math.max(0, Math.min(18, castor));
    olive = Math.max(0, Math.min(30, olive));
    var safflower = 100 - castor - olive;

    Array.prototype.forEach.call(recipe.querySelectorAll('.r2-castor-percent'), function(el){ el.textContent = fmt(castor); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r2-olive-percent'), function(el){ el.textContent = fmt(olive); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r2-safflower-percent'), function(el){ el.textContent = fmt(safflower); });

    applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-safflower-amt'), safflower, 'ml');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-castor-amt'), castor, 'ml');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r2-olive-amt'), olive, 'ml');

    var oliveRow = recipe.querySelector('.r2-olive-row');
    if(oliveRow){
      var oliveIncluded = olive > 0;
      oliveRow.hidden = !oliveIncluded;
      oliveRow.setAttribute('aria-hidden', oliveIncluded ? 'false' : 'true');
    }

    var explainEl = document.getElementById('r2OverallExplain');
    if(explainEl) explainEl.textContent = explainOilCleanser(castor, olive);

    var breakdownEl = document.getElementById('r2Breakdown');
    if(breakdownEl){
      breakdownEl.innerHTML = '<strong>Current blend:</strong> <span class="r2-safflower-percent">' + fmt(safflower) + '%</span> safflower • <span class="r2-castor-percent">' + fmt(castor) + '%</span> castor • <span class="r2-olive-percent">' + fmt(olive) + '%</span> olive';
    }

    paintTrack(castorSlider);
    paintTrack(oliveSlider);
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

  var SLIDER_API='/systems/baseline-natural-skincare/api/skincare_data.php';
  var sliderServerState={loaded:false,revision:0,sliders:{},loadPromise:null,saveBlocked:false};

  function sliderAuth(){
    try{return window.BASELINE_auth&&typeof window.BASELINE_auth.get==='function'?window.BASELINE_auth.get():null;}
    catch(_e){return null;}
  }

  function sliderRevisionEvent(){
    try{document.dispatchEvent(new CustomEvent('baseline:skincare-resource-revision',{detail:{revision:sliderServerState.revision}}));}catch(_e){}
  }

  async function loadSliderServerState(force){
    var auth=sliderAuth();
    if(!(auth&&auth.ready&&auth.authed)){
      sliderServerState.loaded=Boolean(auth&&auth.ready);
      sliderServerState.sliders={};
      return false;
    }
    if(sliderServerState.loaded&&!force)return true;
    if(sliderServerState.loadPromise&&!force)return sliderServerState.loadPromise;
    sliderServerState.loadPromise=(async function(){
      try{
        var response=await fetch(SLIDER_API,{credentials:'same-origin',headers:{Accept:'application/json'}});
        var data=await response.json().catch(function(){return null;});
        if(response.ok&&data&&data.ok){
          sliderServerState.revision=Number(data.revision||0);
          sliderServerState.sliders=data.sliders&&typeof data.sliders==='object'?data.sliders:{};
          sliderServerState.loaded=true;
          sliderServerState.saveBlocked=false;
          sliderRevisionEvent();
          return true;
        }
      }catch(_e){}
      return false;
    })();
    try{return await sliderServerState.loadPromise;}
    finally{sliderServerState.loadPromise=null;}
  }

  function controllerValues(controller){
    var values={};
    Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'),function(slider){values[slider.id]=String(slider.value);});
    return values;
  }

  function resetControllerToDefaults(controller,syncFn){
    Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'),function(slider){
      slider.value=String(slider.getAttribute('data-default-value')||slider.getAttribute('data-default')||slider.defaultValue||slider.value);
    });
    if(typeof syncFn==='function')syncFn();
  }

  async function replaceSliderServerState(next){
    if(sliderServerState.saveBlocked)return false;
    try{
      var response=await fetch(SLIDER_API,{
        method:'POST',credentials:'same-origin',
        headers:{Accept:'application/json','Content-Type':'application/json'},
        body:JSON.stringify({action:'replace_sliders',sliders:next,expectedRevision:sliderServerState.revision})
      });
      var data=await response.json().catch(function(){return null;});
      if(response.ok&&data&&data.ok){
        sliderServerState.revision=Number(data.revision||sliderServerState.revision||0);
        sliderServerState.sliders=data.sliders&&typeof data.sliders==='object'?data.sliders:next;
        sliderServerState.loaded=true;
        sliderServerState.saveBlocked=false;
        sliderRevisionEvent();
        return true;
      }
      if(response.status===409&&data&&data.error==='revision_conflict')await loadSliderServerState(true);
      sliderServerState.saveBlocked=true;
    }catch(_e){sliderServerState.saveBlocked=true;}
    return false;
  }

  async function applyServerControllerState(controller,syncFn){
    if(!controller)return;
    var auth=sliderAuth();
    if(!(auth&&auth.ready&&auth.authed))return;
    if(!(await loadSliderServerState(false)))return;
    var saveId=controller.getAttribute('data-slider-save-id');
    var saved=saveId&&sliderServerState.sliders?sliderServerState.sliders[saveId]:null;
    if(!saved&&saveId==='r7'&&sliderServerState.sliders.r7&&sliderServerState.sliders.r7.r7Hydration!==undefined){
      var oldWater=Number(sliderServerState.sliders.r7.r7Hydration);
      if(Number.isFinite(oldWater))saved={r7Glycerin:String(100-oldWater),r7Inulin:'0'};
    }
    if(controller.dataset.skipServerSliderRestore==='1'){delete controller.dataset.skipServerSliderRestore;return;}
    if(!saved||typeof saved!=='object')return;
    Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'),function(slider){
      if(Object.prototype.hasOwnProperty.call(saved,slider.id))slider.value=String(saved[slider.id]);
    });
    if(typeof syncFn==='function')syncFn();
  }

  async function writeControllerServerState(controller,syncFn){
    var auth=sliderAuth();
    if(!(auth&&auth.ready&&auth.authed))throw new Error('login_required');
    if(!(await loadSliderServerState(false)))throw new Error('server_unavailable');
    var saveId=controller.getAttribute('data-slider-save-id');
    if(!saveId)throw new Error('missing_slider_id');
    var next=Object.assign({},sliderServerState.sliders);
    next[saveId]=controllerValues(controller);
    if(!(await replaceSliderServerState(next)))throw new Error('save_failed');
    if(typeof syncFn==='function')syncFn();
    return true;
  }

  async function removeControllerServerState(controller,syncFn){
    var auth=sliderAuth();
    if(!(auth&&auth.ready&&auth.authed))return false;
    if(!(await loadSliderServerState(false)))return false;
    var saveId=controller.getAttribute('data-slider-save-id');
    if(!saveId)return false;
    var next=Object.assign({},sliderServerState.sliders);
    delete next[saveId];
    var ok=await replaceSliderServerState(next);
    if(ok&&typeof syncFn==='function')syncFn();
    return ok;
  }

  document.addEventListener('baseline:skincare-resource-revision',function(event){
    var revision=Number(event.detail&&event.detail.revision);
    if(Number.isFinite(revision)&&revision>=0)sliderServerState.revision=revision;
  });
  try{
    window.BASELINE_auth&&window.BASELINE_auth.onChange&&window.BASELINE_auth.onChange(function(){
      sliderServerState.loaded=false;sliderServerState.sliders={};sliderServerState.revision=0;sliderServerState.saveBlocked=false;
      loadSliderServerState(false);
    });
  }catch(_e){}

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
    'ing-colloidal-oatmeal': 0.0,
    'ing-marshmallow-root-powder': 0.0,
    'ing-inulin-powder': 0.0,
    'ing-olive-squalane': 0.5,
    'ing-extra-virgin-coconut-oil': 4.0,
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
    var glycerinSlider = document.getElementById('r7Glycerin');
    var inulinSlider = document.getElementById('r7Inulin');
    if(!recipe || !glycerinSlider || !inulinSlider) return;

    var glycerin = Number(glycerinSlider.value || 20);
    var inulin = Number(inulinSlider.value || 0);
    if(!Number.isFinite(glycerin)) glycerin = 20;
    if(!Number.isFinite(inulin)) inulin = 0;
    glycerin = Math.max(10, Math.min(30, glycerin));
    inulin = Math.max(0, Math.min(5, inulin));
    var water = 100 - glycerin - inulin;

    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-water-readout'), function(el){ el.textContent = fmt(water); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-glycerin-readout'), function(el){ el.textContent = fmt(glycerin); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r7-inulin-readout'), function(el){ el.textContent = fmt(inulin); });

    applyScaledDisplay(recipe, recipe.querySelectorAll('.r7-water-amt'), water, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r7-glycerin-amt'), glycerin, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r7-inulin-amt'), inulin, 'g');

    var explain = document.getElementById('r7Explain');
    if(explain){
      if(glycerin >= 25 && inulin >= 3) explain.textContent = 'Highest-hold setting: stronger glycerin surface persistence combined with a more noticeable inulin-conditioned feel.';
      else if(glycerin >= 25) explain.textContent = 'Higher glycerin setting. Stronger humectant hold and a denser surface feel before sealing.';
      else if(inulin >= 3) explain.textContent = 'Moderate glycerin with higher inulin. The layer remains fluid while adding more dissolved conditioning support.';
      else if(glycerin <= 15 && inulin <= 1) explain.textContent = 'Lightest setting. Lower glycerin and little or no inulin give the quickest, least tacky finish.';
      else if(inulin === 0) explain.textContent = 'Original water-and-glycerin formula range with no inulin added.';
      else explain.textContent = 'Balanced hydration layer with moderate glycerin and optional inulin support.';
    }

    var breakdown = document.getElementById('r7Breakdown');
    if(breakdown){
      breakdown.innerHTML = '<strong>Current blend:</strong> <span class="r7-water-readout">' + fmt(water) + '%</span> filtered water • <span class="r7-glycerin-readout">' + fmt(glycerin) + '%</span> vegetable glycerin • <span class="r7-inulin-readout">' + fmt(inulin) + '%</span> inulin';
    }

    paintTrack(glycerinSlider);
    paintTrack(inulinSlider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function syncSkinSoftMassageOil(){
    var recipe = document.getElementById('r15');
    var slider = document.getElementById('r15Apricot');
    if(!recipe || !slider) return;

    var apricot = Number(slider.value || 0);
    if(!Number.isFinite(apricot)) apricot = 0;
    apricot = Math.max(0, Math.min(20, apricot));
    var jojoba = 35 - apricot;

    Array.prototype.forEach.call(recipe.querySelectorAll('.r15-apricot-readout'), function(el){ el.textContent = fmt(apricot); });
    Array.prototype.forEach.call(recipe.querySelectorAll('.r15-jojoba-readout'), function(el){ el.textContent = fmt(jojoba); });

    applyScaledDisplay(recipe, recipe.querySelectorAll('.r15-squalane-amt'), 45, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r15-jojoba-amt'), jojoba, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r15-apricot-amt'), apricot, 'g');
    applyScaledDisplay(recipe, recipe.querySelectorAll('.r15-coconut-amt'), 20, 'g');

    var explain = document.getElementById('r15Explain');
    if(explain){
      if(apricot <= 2.5) explain.textContent = 'Original-style blend: squalane-led softness with the jojoba phase almost fully intact and coconut adding body.';
      else if(apricot <= 7.5) explain.textContent = 'Slightly softer carrier-oil feel while jojoba still clearly leads the adjustable phase.';
      else if(apricot <= 12.5) explain.textContent = 'Balanced jojoba-and-apricot character with a richer emollient glide than the original blend.';
      else if(apricot <= 17.5) explain.textContent = 'Apricot-forward adjustable phase: softer, richer spread with less of the jojoba-led wax-ester character.';
      else explain.textContent = 'Maximum apricot setting. Richest apricot-led glide while squalane and coconut remain fixed.';
    }

    var breakdown = document.getElementById('r15Breakdown');
    if(breakdown){
      breakdown.innerHTML = '<strong>Current blend:</strong> 45% olive squalane • <span class="r15-jojoba-readout">' + fmt(jojoba) + '%</span> jojoba • <span class="r15-apricot-readout">' + fmt(apricot) + '%</span> apricot kernel oil • 20% extra virgin coconut oil';
    }

    paintTrack(slider);
    if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
  }

  function controllerSyncFn(controller){
    var recipe = controller ? controller.closest('.recipe-page') : null;
    if(!recipe) return function(){};

    return function(){
      if(typeof controller.__baselineSliderSync === 'function'){
        return controller.__baselineSliderSync();
      }
      if(recipe.id === 'r2') return syncOilCleanser();
      if(recipe.id === 'r3') return syncProtectiveTouchBalm();
      if(recipe.id === 'r5') return syncShaveCushion();
      if(recipe.id === 'r6') return syncMassageSlider();
      if(recipe.id === 'r7') return syncHydrationLayer();
      if(recipe.id === 'r15') return syncSkinSoftMassageOil();
    };
  }

  function applyAllServerSliderStates(){
    Array.prototype.forEach.call(document.querySelectorAll('.recipe-page .glide-controller[data-slider-save-id]'), function(controller){
      applyServerControllerState(controller, controllerSyncFn(controller));
    });
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

      var syncFn = controllerSyncFn(controller);

      Array.prototype.forEach.call(controller.querySelectorAll('.glide-slider'), function(slider){
        slider.addEventListener('input', function(){ clearSliderStatus(controller); });
        slider.addEventListener('change', function(){ clearSliderStatus(controller); });
      });

      saveBtn.addEventListener('click', async function(){
        var auth = sliderAuth();
        if(!(auth && auth.ready && auth.authed)) {
          setSliderStatus(controller, 'Log in to save slider position', 'notice');
          return;
        }
        setSliderStatus(controller, 'Saving…', 'notice');
        try{
          await writeControllerServerState(controller, syncFn);
          setSliderStatus(controller, 'Saved', 'saved');
        }catch(_e){
          setSliderStatus(controller, 'Could not save', 'error');
        }
      });

      defaultBtn.addEventListener('click', async function(){
        resetControllerToDefaults(controller, syncFn);
        var auth = sliderAuth();
        if(auth && auth.ready && auth.authed){
          var removed = await removeControllerServerState(controller, syncFn);
          setSliderStatus(controller, removed ? 'Defaults restored' : 'Defaults restored for this view', removed ? 'saved' : 'notice');
        }else{
          setSliderStatus(controller, 'Defaults restored');
        }
      });

      controller.dataset.sliderSaveReady = '1';
    });

    applyAllServerSliderStates();
  }
  window.BASELINE_decorateRecipeSliderSaves = decorateSliderSaves;

  function migrateLegacyOilCleanserVariantRoute(){
    try{
      var path = String(window.location.pathname || '').replace(/\/+$/,'');
      if(path !== '/baseline-natural-skincare/recipes/anhydrous-oil-cleanser') return;
      var params = new URLSearchParams(window.location.search || '');
      var variant = String(params.get('variant') || '').toLowerCase();
      if(!variant){
        variant = String(document.documentElement.getAttribute('data-initial-recipe-variant') || '').toLowerCase();
      }
      if(!variant) return;

      var castor = document.getElementById('r2CleansingPull');
      var olive = document.getElementById('r2BarrierRichness');
      if(!castor || !olive) return;

      if(variant === 'reactive'){
        castor.value = '0';
        olive.value = '0';
      }else if(variant === 'enhanced'){
        castor.value = '10';
        olive.value = '18';
      }else{
        castor.value = '10';
        olive.value = '0';
      }

      var controller = castor.closest('.glide-controller');
      if(controller) controller.dataset.skipServerSliderRestore = '1';

      params.delete('variant');
      var query = params.toString();
      var next = path + (query ? ('?' + query) : '') + String(window.location.hash || '');
      window.history.replaceState(window.history.state, '', next);
    }catch(_e){}
  }

  function initRecipeSliders(){
    initMultiplierControlFixes();
    bindSlider('r2CleansingPull', syncOilCleanser);
    bindSlider('r2BarrierRichness', syncOilCleanser);
    bindSlider('r3BalanceCastor', syncProtectiveTouchBalm);
    bindSlider('r3FirmnessWax', syncProtectiveTouchBalm);
    bindSlider('r5Cushion', syncShaveCushion);
    bindSlider('r6Glide', syncMassageSlider);
    bindSlider('r7Glycerin', syncHydrationLayer);
    bindSlider('r7Inulin', syncHydrationLayer);
    bindSlider('r15Apricot', syncSkinSoftMassageOil);
    migrateLegacyOilCleanserVariantRoute();
    decorateSliderSaves();
    syncOilCleanser();
    syncProtectiveTouchBalm();
    syncShaveCushion();
    syncMassageSlider();
    syncHydrationLayer();
    syncSkinSoftMassageOil();
    Array.prototype.forEach.call(document.querySelectorAll('.recipe-page'), function(recipe){
      if(window.refreshRecipeComedogenic) window.refreshRecipeComedogenic(recipe);
    });

    try{
      document.addEventListener('baseline:skincare-saved-data', function(event){
        var detail = event && event.detail ? event.detail : null;
        if(detail && detail.status === 'ready'){
          sliderServerState.loaded = false;
          applyAllServerSliderStates();
        }
      });
    }catch(_e){}

    try{
      if(window.BASELINE_auth && typeof window.BASELINE_auth.onChange === 'function'){
        window.BASELINE_auth.onChange(function(auth){
          sliderServerState.loaded = false;
          sliderServerState.loading = null;
          sliderServerState.revision = 0;
          sliderServerState.sliders = {};
          if(auth && auth.ready && auth.authed){
            applyAllServerSliderStates();
          }else if(auth && auth.ready){
            Array.prototype.forEach.call(document.querySelectorAll('.recipe-page .glide-controller[data-slider-save-id]'), function(controller){
              if(controller.dataset.skipServerSliderRestore === '1'){
                delete controller.dataset.skipServerSliderRestore;
                return;
              }
              resetControllerToDefaults(controller, controllerSyncFn(controller));
            });
          }
        });
      }
    }catch(_e){}
  }
  initRecipeSliders();
})();
