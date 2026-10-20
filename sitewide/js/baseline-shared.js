/* Baseline Lifestyle — Shared Behaviour
   - Banner system dropdown
   - Tabbed sections
   - “Open one recipe” mode
   - Ingredient library filtering + recipe→ingredient deep linking
   - Per‑recipe batch multiplier + measurement conversions (weight / volume / cups & spoons)
*/

(function(){
  "use strict";
  const BASELINE_SHARED_BUILD = "SITEWIDE_UNIVERSAL_RECIPE_TEMPLATE_20260824_3";
  try{ document.documentElement.setAttribute("data-baseline-shared-js", BASELINE_SHARED_BUILD); }catch(_e){}
  try{
    if(window.__BASELINE_SHARED__){ return; }
    window.__BASELINE_SHARED__ = true;
  }catch(_e){}

  // ---------------------------
  // Utilities
  // ---------------------------
  const q  = (sel, root=document) => root.querySelector(sel);
  const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const BASELINE_BEATS_ICON_SVG = '<svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2v-.2a6 6 0 0 0-12 0v.2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3v-5z"/></svg>';
  const BASELINE_CONTACT_ICON_SVG = '<svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M3.5 5.5h17v13h-17z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m4.5 7 7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const BASELINE_AUTH_ICON_SVG = '<svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 12.2a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8z"/><path d="M4.8 21a7.2 7.2 0 0 1 14.4 0H4.8z"/></svg>';


  function setupSitewideInfoPopovers(){
    if(window.__BASELINE_INFO_POPOVERS__) return;
    window.__BASELINE_INFO_POPOVERS__ = true;

    const portal = document.createElement('aside');
    portal.id = 'blInfoPopover';
    portal.className = 'bl-info-popover';
    portal.setAttribute('role', 'tooltip');
    portal.setAttribute('aria-live', 'polite');
    portal.hidden = true;
    document.body.appendChild(portal);

    let activeButton = null;
    let pinned = false;
    let positionFrame = 0;

    function escapeInfoText(value){
      return String(value == null ? '' : value).replace(/[&<>"']/g, character => ({
        '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
      }[character]));
    }

    function infoHtml(button){
      const controls = String(button.getAttribute('aria-controls') || '').trim();
      const source = controls ? document.getElementById(controls) : null;
      if(source) return source.innerHTML;
      const title = String(button.getAttribute('data-bl-info-title') || '').trim();
      const text = String(button.getAttribute('data-bl-info-text') || '').trim();
      if(!title && !text) return '';
      return (title ? '<strong>' + escapeInfoText(title) + '</strong>' : '') +
        (text ? '<p>' + escapeInfoText(text) + '</p>' : '');
    }

    function setExpanded(button, expanded){
      if(button) button.setAttribute('aria-expanded', String(Boolean(expanded)));
    }

    function positionPortal(){
      if(!activeButton || portal.hidden) return;
      if(positionFrame) cancelAnimationFrame(positionFrame);
      positionFrame = requestAnimationFrame(function(){
        positionFrame = 0;
        if(!activeButton || portal.hidden) return;
        const rect = activeButton.getBoundingClientRect();
        const margin = 12;
        const gap = 11;
        const viewportWidth = Math.max(320, window.innerWidth || document.documentElement.clientWidth || 320);
        const viewportHeight = Math.max(320, window.innerHeight || document.documentElement.clientHeight || 320);
        const width = Math.min(portal.offsetWidth || 390, viewportWidth - (margin * 2));
        const height = Math.min(portal.offsetHeight || 180, viewportHeight - (margin * 2));
        let left = Math.min(Math.max(margin, rect.right - width), viewportWidth - width - margin);
        let top = rect.bottom + gap;
        let placement = 'below';
        if(top + height > viewportHeight - margin && rect.top - gap - height >= margin){
          top = rect.top - gap - height;
          placement = 'above';
        }
        portal.dataset.placement = placement;
        portal.style.setProperty('--bl-info-left', left + 'px');
        portal.style.setProperty('--bl-info-top', Math.max(margin, top) + 'px');
        const arrowLeft = Math.min(Math.max(left + 18, rect.left + (rect.width / 2) - 7), left + width - 30);
        const arrowTop = placement === 'above' ? Math.max(margin, top + height - 7) : Math.max(margin, top - 7);
        portal.style.setProperty('--bl-info-arrow-left', arrowLeft + 'px');
        portal.style.setProperty('--bl-info-arrow-top', arrowTop + 'px');
      });
    }

    function closeInfo(){
      if(activeButton) setExpanded(activeButton, false);
      activeButton = null;
      pinned = false;
      portal.hidden = true;
      portal.dataset.pinned = 'false';
      portal.innerHTML = '';
    }

    function openInfo(button, shouldPin){
      if(!button) return;
      const html = infoHtml(button);
      if(!html) return;
      if(activeButton && activeButton !== button) setExpanded(activeButton, false);
      activeButton = button;
      pinned = Boolean(shouldPin);
      portal.innerHTML = html;
      portal.hidden = false;
      portal.dataset.pinned = String(pinned);
      setExpanded(button, true);
      positionPortal();
    }

    document.addEventListener('pointerover', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-bl-info-button]') : null;
      if(!button || event.pointerType !== 'mouse' || button.contains(event.relatedTarget)) return;
      if(activeButton === button && pinned) return;
      openInfo(button, false);
    });

    document.addEventListener('pointerout', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-bl-info-button]') : null;
      if(!button || event.pointerType !== 'mouse' || button.contains(event.relatedTarget)) return;
      if(activeButton === button && !pinned) closeInfo();
    });

    document.addEventListener('focusin', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-bl-info-button]') : null;
      if(button && !(activeButton === button && pinned)) openInfo(button, false);
    });

    document.addEventListener('focusout', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-bl-info-button]') : null;
      if(button && activeButton === button && !pinned && !button.contains(event.relatedTarget)) closeInfo();
    });

    document.addEventListener('click', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-bl-info-button]') : null;
      if(button){
        event.preventDefault();
        event.stopPropagation();
        if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
        const isPinnedOpen = activeButton === button && pinned;
        if(isPinnedOpen) closeInfo();
        else openInfo(button, true);
        return;
      }
      if(pinned && !portal.contains(event.target)) closeInfo();
    }, true);

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape' && activeButton){
        const button = activeButton;
        closeInfo();
        try{ button.focus({ preventScroll:true }); }catch(_e){}
      }
    });
    window.addEventListener('resize', positionPortal, { passive:true });
    window.addEventListener('scroll', positionPortal, { passive:true, capture:true });

    window.BASELINE_info = Object.freeze({
      open:function(button, options){ openInfo(button, Boolean(options && options.pinned)); },
      close:closeInfo,
      reposition:positionPortal,
      refresh:function(){ if(activeButton) openInfo(activeButton, pinned); }
    });
  }

  function clearOuterEmbedSnapshot(win){
    if(!win) return;
    try{
      const loc=win.location;
      if(loc && /^#view=/.test(String(loc.hash || ''))){
        win.history.replaceState(null,'',String(loc.pathname || '') + String(loc.search || ''));
      }
    }catch(_e){}
  }

  function getTopWindowForSiteNavigation(){
    try{
      if(window.top && window.top.location) return window.top;
    }catch(_e){}
    return window;
  }

  function resolveIndexHrefForWindow(targetWin){
    try{
      const base = (targetWin && targetWin.location && targetWin.location.href)
        ? targetWin.location.href
        : (document.baseURI || window.location.href);
      return new URL('index.html', base).href;
    }catch(_e){
      try{ return new URL('index.html', window.location.href).href; }catch(__e){ return 'index.html'; }
    }
  }

  function emitSiteNavigationStart(targetHref){
    // Non-blocking page-leaving notification. Cross-page navigation is handled
    // by the browser's native anchor/navigation machinery; this event exists
    // only so page modules can abort fetches/timers during a real unload.
    try{ clearPendingNavScroll(); }catch(_e){}
    try{
      window.dispatchEvent(new CustomEvent('baseline:page-leaving', { detail:{ href:String(targetHref || '') } }));
    }catch(_e){
      try{ window.dispatchEvent(new Event('baseline:page-leaving')); }catch(__e){}
    }
    try{
      document.dispatchEvent(new CustomEvent('baseline:site-navigate', { detail:{ href:String(targetHref || '') } }));
    }catch(_e){}
    return true;
  }

  function buildForcedHomeHref(targetWin){
    return '/home/1';
  }

  function navigateHomeForGood(){
    const targetWin = getTopWindowForSiteNavigation();
    const targetHref = buildForcedHomeHref(targetWin);

    try{ clearOuterEmbedSnapshot(window); }catch(_e){}
    try{ if(targetWin !== window) clearOuterEmbedSnapshot(targetWin); }catch(_e){}

    try{
      if(!emitSiteNavigationStart(targetHref)) return;
      targetWin.location.assign(targetHref);
      return;
    }catch(_e){}

    try{ window.location.assign(targetHref); }catch(_e){ try{ window.location.assign(targetHref); }catch(__e){ try{ window.location.href = targetHref; }catch(___e){} } }
  }

  function navigateToIndexHome(){
    navigateHomeForGood();
  }

  function clamp(n, min, max){
    n = Number(n);
    if(Number.isNaN(n)) return min;
    return Math.min(max, Math.max(min, n));
  }

  function isMobileViewport(){
    try{
      return !!(window.matchMedia && window.matchMedia('(max-width: 900px)').matches);
    }catch(_e){
      return (window.innerWidth || 0) <= 900;
    }
  }



  // BASELINE-SAFE-NAMED-ROUTES-20260607
  const BASELINE_CLEAN_PAGE_ROUTES = Object.freeze({
    'baseline-food-approach.html': { base:'/baseline-food-approach', defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', 'diet-log':'diet-log' } },
    'baseline-massage.html': { base:'/baseline-massage', defaultTab:'system', tabs:{ system:'system', library:'library', planner:'planner' } },
    'baseline-natural-skincare.html': { base:'/baseline-natural-skincare', defaultTab:'system', tabs:{ system:'system', recipes:'recipes', ingredients:'ingredient-library', support:'skin-support-system', routine:'my-routine' } },
    'baseline-psychology.html': { base:'/baseline-psychology', defaultTab:'system', tabs:{ system:'system', paralinguistics:'paralinguistics' } },
    'baseline-badminton-session.html': { base:'/baseline-badminton-session', defaultTab:'system', tabs:{ system:'system', gameplan:'game-plan', standings:'ratings-standings', roster:'players-pairs', history:'session-history' } },
    'baseline-fitness.html': { base:'/baseline-fitness', defaultTab:'system', tabs:{ system:'system', routine:'my-plan', library:'library', achievements:'achievements', 'my-plan':'my-plan', 'my-routine':'my-plan', 'my-body':'my-body' } }
  });
  const BASELINE_CLEAN_PAGE_LINKS = Object.freeze({
    'index.html':'/home/1', 'home.html':'/home/1', 'home':'/home/1',
    'baseline-food-approach.html':'/baseline-food-approach/system',
    'baseline-massage.html':'/baseline-massage/system',
    'baseline-natural-skincare.html':'/baseline-natural-skincare/system',
    'baseline-psychology.html':'/baseline-psychology/system',
    'baseline-badminton-session.html':'/baseline-badminton-session/system',
    'baseline-fitness.html':'/baseline-fitness/system',
    'baseline-games-hub.html':'/baseline-games-hub/games-hub'
  });
  function routePageFileFromPath(pathname){
    const path = String(pathname || '').toLowerCase();
    if(/\/home(?:\/[12])?\/?$/.test(path) || /\/index\.html\/?$/.test(path) || path === '/' || path === '') return 'index.html';
    if(/\/baseline-food-approach(?:\/|$)/.test(path)) return 'baseline-food-approach.html';
    if(/\/baseline-massage(?:\/|$)/.test(path)) return 'baseline-massage.html';
    if(/\/baseline-natural-skincare(?:\/|$)/.test(path)) return 'baseline-natural-skincare.html';
    if(/\/baseline-psychology(?:\/|$)/.test(path)) return 'baseline-psychology.html';
    if(/\/baseline-badminton-session(?:\/|$)/.test(path)) return 'baseline-badminton-session.html';
    if(/\/baseline-fitness(?:\/|$)/.test(path)) return 'baseline-fitness.html';
    if(/\/baseline-games-hub(?:\/|$)/.test(path)) return 'baseline-games-hub.html';
    return (path.split('/').pop() || 'index.html').toLowerCase();
  }
  function cleanRouteConfigForCurrentPage(){ return BASELINE_CLEAN_PAGE_ROUTES[routePageFileFromPath(location.pathname || '')] || null; }
  function cleanRouteStateFromPath(){
    try{
      const cfg = cleanRouteConfigForCurrentPage();
      if(!cfg || !cfg.defaultTab) return null;
      if(cfg.hashTabs){
        const hashMatch = /^#tab=([^&]+)/.exec(String(location.hash || ''));
        if(hashMatch && hashMatch[1]){
          let requested = hashMatch[1];
          try{ requested = decodeURIComponent(requested); }catch(_e){}
          if(cfg.tabs && cfg.tabs[requested]) return { kind:'tab', tabId:requested, raw:String(location.href || '') };
        }
      }
      const path = String(location.pathname || '').toLowerCase().replace(/\/+$/,'');
      if(/^\/baseline-fitness\/my-routine(?:\/(?:log|summary|public|plan(?:\/(?:calisthenics|cardio|other|sports))?))?$/.test(path)){
        return { kind:'tab', tabId:'my-plan', raw:path };
      }
      if(/^\/baseline-fitness\/my-body(?:\/(?:profile|services))?$/.test(path)){
        return { kind:'tab', tabId:'my-body', raw:path };
      }
      if(/^\/baseline-fitness\/my-plan(?:\/(?:completed|future))?$/.test(path)){
        return { kind:'tab', tabId:'my-plan', raw:path };
      }
      if(/^\/baseline-natural-skincare\/my-routine(?:\/(?:log|summary|plan|public))?$/.test(path)){
        return { kind:'tab', tabId:'routine', raw:path };
      }
      const recipeDetail = path.match(/\/recipes\/([^\/?#]+)$/i);
      if(recipeDetail && recipeDetail[1]){
        return { kind:'tab', tabId:'recipes', raw:path };
      }
      const skincareIngredientDetail = path.match(/\/baseline-natural-skincare\/ingredient-library\/([^\/?#]+)$/i);
      if(skincareIngredientDetail && skincareIngredientDetail[1]){
        const ingredientId = skincareIngredientIdForSlug(skincareIngredientDetail[1]);
        return ingredientId
          ? { kind:'ingredient', ingredientId:ingredientId, recipeFilter:null, raw:path }
          : { kind:'tab', tabId:'ingredients', raw:path };
      }
      const slug = (path.split('/').filter(Boolean).pop() || '');
      const bySlug = {};
      Object.keys(cfg.tabs || {}).forEach(function(tabId){ bySlug[cfg.tabs[tabId]] = tabId; });
      const tabId = bySlug[slug] || cfg.defaultTab;
      if(!tabId) return null;
      const filter = new URLSearchParams(location.search || '').get('filter') || null;
      if(tabId === 'ingredients' && filter) return { kind:'ingredients', recipeFilter:filter, raw:path };
      return { kind:'tab', tabId:tabId, recipeFilter:filter, raw:path };
    }catch(_e){ return null; }
  }
  function cleanUrlForTab(tabId){
    try{
      const cfg = cleanRouteConfigForCurrentPage();
      if(!cfg || !cfg.defaultTab) return '';
      const requested = String(tabId || cfg.defaultTab);
      const selected = cfg.tabs[requested] ? requested : cfg.defaultTab;
      if(cfg.hashTabs) return cfg.base + '#tab=' + encodeURIComponent(selected);
      const slug = cfg.tabs[selected] || cfg.tabs[cfg.defaultTab] || '';
      return slug ? (cfg.base + '/' + slug) : cfg.base;
    }catch(_e){ return ''; }
  }

  function cleanRouteForPageHref(hrefRaw, labelText){
    const href = String(hrefRaw || '').trim();
    const label = String(labelText || '').trim().toLowerCase();
    const pathOnly = href.split('#')[0].split('?')[0].replace(/^https?:\/\/[^/]+/i, '');
    const skincareRoute = pathOnly.match(/^\/?baseline-natural-skincare\/(system|recipes|ingredient-library|skin-support-system|my-routine)\/?$/i);
    if(skincareRoute){
      const tabBySlug = { system:'system', recipes:'recipes', 'ingredient-library':'ingredients', 'skin-support-system':'support', 'my-routine':'routine' };
      const tabId = tabBySlug[String(skincareRoute[1] || '').toLowerCase()] || 'system';
      return '/baseline-natural-skincare/' + String(skincareRoute[1] || 'system').toLowerCase();
    }
    const stripped = href.split('#')[0].split('?')[0].replace(/^\/+/, '');
    const targetFile = (stripped.split('/').pop() || '').toLowerCase();
    if(label === 'home' || href === '/' || href === './' || href === '.' || targetFile === '' || targetFile === 'home.html' || targetFile === 'index.html') return '/home/1';
    if(/baseline-games-hub(?:\.html)?(?:#tab=hub)?$/i.test(href)) return '/baseline-games-hub/games-hub';
    return BASELINE_CLEAN_PAGE_LINKS[targetFile] || href;
  }



  // BASELINE-NATIVE-NAV-STABILITY: if the page is restored from bfcache,
  // ensure no stale leaving marker can suppress/alter paint.
  try{ window.addEventListener('pageshow', function(){ document.documentElement.classList.remove('bl-site-is-leaving'); }); }catch(_e){}

  // ---------------------------
  // Recipe caption model + authoring template
  // ---------------------------
  const BASELINE_RECIPE_CAPTION_MODEL = Object.freeze({
    name: 'baseline-recipe-caption-v1',
    rule: 'Primary role; secondary effect.',
    maxLength: 140
  });

  window.BASELINE_RECIPE_CAPTION_MODEL = BASELINE_RECIPE_CAPTION_MODEL;

  window.BASELINE_getRecipeAuthoringTemplate = function(app){
    const system = String(app || (document.body && document.body.dataset && document.body.dataset.app) || '').trim().toLowerCase();
    const sections = system === 'skin'
      ? ['Method', 'Storage & Use', 'Notes']
      : system === 'food'
        ? ['Method', 'Serving & Use', 'Body & Sensory Notes']
        : ['Method', 'Notes'];
    const details = system === 'skin'
      ? ['Purpose', 'Formula Profile', 'How the Formulation Works', 'Design Rationale', 'Variables & Fixed Elements', 'Limitations & Trade-offs']
      : system === 'food'
        ? ['Purpose', 'Recipe Profile', 'How the Recipe Works', 'Design Rationale', 'Variables & Fixed Elements', 'Limitations & Trade-offs']
        : ['Purpose', 'Profile', 'How It Works', 'Design Rationale', 'Variables & Fixed Elements', 'Limitations & Trade-offs'];

    return {
      authority: 'sitewide',
      shell: [
        'Title',
        'Batch',
        'Recipe views',
        'Adjustments',
        'Batch multiplier',
        'Measurement Type',
        'Scale By Ingredient',
        'Recipe-specific controls'
      ],
      presentation: {
        titleFont: 'var(--font-soft)',
        titleSize: '28px',
        titleLineHeight: 1.25,
        detailsLayout: 'single-column',
        viewOrder: ['Recipe', 'Details', 'Guidance', 'Show All']
      },
      sections,
      details,
      detailCount: 6,
      guidanceSectionCount: 2,
      id: 'r-next',
      category: system === 'skin' ? 'Recipe' : 'Stovetop',
      title: 'Recipe title',
      infoLinkText: 'Recipe Ingredient Information',
      meta: system === 'skin'
        ? ['Skin feel: note any important skin, scent, or tolerance context here.']
        : ['Equipment: list the equipment here.', 'Allergens: list the allergens here.'],
      navigationRule: {
        summary: 'One sitewide recipe shell owns Food and Skincare recipe navigation and view state.',
        instruction: 'Use BASELINE_openRecipe, BASELINE_showAllRecipes, and BASELINE_selectTab. Clean /recipes/<slug> routes keep the parent system shell; recipe content may come from an accountable source file but must be rendered through the universal recipe template.'
      },
      ingredientSections: [
        {
          title: 'Base',
          items: [
            {
              ingredientId: 'ing-example',
              label: 'Example ingredient',
              quantity: { value: 10, unit: 'g' },
              caption: 'Primary role; secondary effect.',
              methodStep: 1
            }
          ]
        }
      ],
      method: [
        { title: 'Step title', text: 'Write the method instruction here.' }
      ]
    };
  };

  window.BASELINE_validateRecipeCaptionText = function(text){
    const value = String(text || '').trim();
    if(!value) return { ok:false, reason:'Caption is required.' };
    if(value.length > BASELINE_RECIPE_CAPTION_MODEL.maxLength){
      return { ok:false, reason:'Caption is too long.' };
    }
    if(!/[.;:]/.test(value)){
      return { ok:false, reason:'Caption should contain a short functional break.' };
    }
    return { ok:true };
  };

  window.BASELINE_validateRecipeAuthoringInput = function(input){
    const out = { ok:true, errors:[] };
    if(!input || typeof input !== 'object'){
      return { ok:false, errors:['Recipe input must be an object.'] };
    }
    const sections = Array.isArray(input.ingredientSections) ? input.ingredientSections : [];
    if(!sections.length) out.errors.push('ingredientSections is required.');
    sections.forEach((section, sIdx)=>{
      const items = Array.isArray(section && section.items) ? section.items : [];
      if(!items.length) out.errors.push('ingredientSections[' + sIdx + '] must contain items.');
      items.forEach((item, iIdx)=>{
        const captionCheck = window.BASELINE_validateRecipeCaptionText(item && item.caption);
        if(!captionCheck.ok) out.errors.push('ingredientSections[' + sIdx + '].items[' + iIdx + '].caption: ' + captionCheck.reason);
      });
    });
    out.ok = out.errors.length === 0;
    return out;
  };

  function ensureRecipeIngredientCaptions(root=document){
    const app = (document.body && document.body.dataset && document.body.dataset.app) ? document.body.dataset.app : 'food';
    const profiles = (window.BASELINE_INGREDIENT_PROFILES && window.BASELINE_INGREDIENT_PROFILES[app]) || {};
    qsa('#recipes li[data-method-step]', root).forEach(li=>{
      const existing = String(li.getAttribute('data-tip') || '').trim();
      if(existing) return;
      const links = qsa('a.ing-link[data-ingredient]', li);
      for(const link of links){
        const id = String(link.getAttribute('data-ingredient') || '').trim();
        const note = id && profiles[id] && typeof profiles[id].notes === 'string' ? profiles[id].notes.trim() : '';
        if(note){
          li.setAttribute('data-tip', note);
          if(!link.getAttribute('title')) link.setAttribute('title', note);
          break;
        }
      }
    });
  }

  window.ensureRecipeIngredientCaptions = ensureRecipeIngredientCaptions;

  // ---------------------------
  // Themed number steppers (replaces unthemed native spinners)
  // ---------------------------
  function enhanceNumberStepper(inputEl){
    if(!inputEl || inputEl.tagName !== 'INPUT' || String(inputEl.type || '').toLowerCase() !== 'number'){
      return inputEl;
    }

    let wrapper = inputEl.parentElement;
    let stepper = null;
    let upBtn = null;
    let downBtn = null;
    const preauthored = !!(wrapper && wrapper.classList && wrapper.classList.contains('bl-number'));

    if(preauthored){
      stepper = q('.bl-number-stepper', wrapper);
      upBtn = q('.bl-step-up', wrapper);
      downBtn = q('.bl-step-down', wrapper);
      if(!stepper || !upBtn || !downBtn) return wrapper;
      if(wrapper.dataset.stepperBound === '1') return wrapper;
    }else{
      wrapper = document.createElement('div');
      wrapper.className = 'bl-number' + (inputEl.className ? (' ' + inputEl.className) : '');

      stepper = document.createElement('div');
      stepper.className = 'bl-number-stepper';
      stepper.setAttribute('aria-hidden', 'false');

      upBtn = document.createElement('button');
      upBtn.type = 'button';
      upBtn.className = 'bl-step bl-step-up';
      upBtn.innerHTML = '<span aria-hidden="true">&#9650;</span>';

      downBtn = document.createElement('button');
      downBtn.type = 'button';
      downBtn.className = 'bl-step bl-step-down';
      downBtn.innerHTML = '<span aria-hidden="true">&#9660;</span>';
    }

    function getConfiguredStep(){
      const datasetRaw = parseFloat(String((inputEl.dataset && inputEl.dataset.stepperStep) || '').replace(',', '.'));
      if(Number.isFinite(datasetRaw) && datasetRaw > 0) return datasetRaw;
      const raw = parseFloat(String(inputEl.step || '').replace(',', '.'));
      return Number.isFinite(raw) && raw > 0 ? raw : 0.01;
    }

    function getConfiguredMin(){
      const datasetRaw = parseFloat(String((inputEl.dataset && inputEl.dataset.stepperMin) || '').replace(',', '.'));
      if(Number.isFinite(datasetRaw)) return datasetRaw;
      const raw = parseFloat(String(inputEl.min || '').replace(',', '.'));
      return Number.isFinite(raw) ? raw : 0.01;
    }

    function syncStepperLabels(){
      const stepText = String(getConfiguredStep()).replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
      upBtn.setAttribute('aria-label', 'Increase value by ' + stepText);
      upBtn.title = 'Increase by ' + stepText;
      downBtn.setAttribute('aria-label', 'Decrease value by ' + stepText);
      downBtn.title = 'Decrease by ' + stepText;
    }

    function formatValue(n){
      const rounded = Math.round(Number(n) * 1000) / 1000;
      return String(rounded).replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
    }

    function nudge(direction){
      const step = getConfiguredStep();
      const min = getConfiguredMin();
      let current = NaN;
      try{ current = parseFloat(String(inputEl.value || '').replace(',', '.').trim()); }catch(_e){ current = NaN; }
      if(!Number.isFinite(current)) current = Math.max(1, min);
      current += (direction * step);
      if(current < min) current = min;
      inputEl.value = formatValue(current);
      try{ inputEl.dispatchEvent(new Event('input', { bubbles:true })); }catch(_e){}
      try{ inputEl.dispatchEvent(new Event('change', { bubbles:true })); }catch(_e){}
      try{ inputEl.focus({ preventScroll:true }); }catch(_e){ try{ inputEl.focus(); }catch(__e){} }
    }

    syncStepperLabels();

    upBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      nudge(1);
    });

    downBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      nudge(-1);
    });

    if(!preauthored){
      wrapper.appendChild(inputEl);
      stepper.appendChild(upBtn);
      stepper.appendChild(downBtn);
      wrapper.appendChild(stepper);
    }
    wrapper.dataset.stepperBound = '1';
    return wrapper;
  }


  // ---------------------------
  // Themed custom selects
  // (Ensures the OPEN dropdown list matches the site theme.)
  // ---------------------------
  const BL_SELECT_KEY = '__bl_select__';
  const enhancedSelects = new Set();
  let activeSelectApi = null;
  let selectFallthroughBlockUntil = 0;

  function blockSelectFallthrough(ms){
    const wait = Number.isFinite(Number(ms)) ? Number(ms) : 180;
    selectFallthroughBlockUntil = Math.max(selectFallthroughBlockUntil, Date.now() + Math.max(0, wait));
  }

  function isPrimaryActionOrLinkTarget(target){
    try{
      return !!(target && target.closest && target.closest('a[href], button, input, textarea, select, label, [role="button"], .action, .tab, .game-row, [data-select-game], [data-action], [data-toggle-panel]'));
    }catch(_e){
      return false;
    }
  }

  function consumeSelectEvent(e, prevent, immediate){
    if(!e) return;
    if(prevent){
      try{ e.preventDefault(); }catch(_e){}
    }
    try{ e.stopPropagation(); }catch(_e){}
    if(immediate){
      try{
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      }catch(_e){}
    }
  }

  function eventInsideSelect(api, target){
    if(!api || !target) return false;
    try{ if(api.wrapper && api.wrapper.contains(target)) return true; }catch(_e){}
    try{ if(api.menu && api.menu.contains(target)) return true; }catch(_e){}
    return false;
  }

  try{
    // Absorb synthetic/ghost clicks generated after choosing a dropdown option.
    // This is not an overlay and never blocks the trigger/menu itself.
    ['pointerdown','mousedown','touchstart','click'].forEach(function(evtName){
      document.addEventListener(evtName, function(e){
        if(Date.now() > selectFallthroughBlockUntil) return;
        if(eventInsideSelect(activeSelectApi, e && e.target)) return;
        // Do not force real links/buttons to need a second tap after a dropdown closes.
        if(isPrimaryActionOrLinkTarget(e && e.target)) return;
        consumeSelectEvent(e, true, true);
      }, true);
    });
  }catch(_e){}

  function shouldEnhanceSelect(){
    try{
      if(!window.matchMedia) return true;
      // Only enhance when the device behaves like a desktop (avoids mobile tap/scroll traps).
      return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }catch(_e){
      return true;
    }
  }

  function closeAllSelectMenus(except){
    enhancedSelects.forEach(sel=>{
      const api = sel && sel[BL_SELECT_KEY];
      if(!api) return;
      if(except && api.wrapper === except) return;
      api.close(true);
    });
  }

  function refreshEnhancedSelect(selectEl){
    const api = selectEl && selectEl[BL_SELECT_KEY];
    if(api){
      try{ api.close(true); }catch(_e){}
      api.buildMenu();
      api.sync();
      api.syncStyle();
    }
  }

  function enhanceSelect(selectEl){
    if(!selectEl || selectEl[BL_SELECT_KEY]) return;
    if(selectEl.multiple) return;
    // The compact recipe variant chooser must remain native. Enhancing it creates
    // a cloned button plus the native select, which produces ghost/overlap text in
    // the recipe option strip.
    try{
      if(selectEl.classList && selectEl.classList.contains('recipe-variant-select')) return;
    }catch(_e){}
    try{ if(selectEl.matches && (selectEl.matches('[data-native-select="true"]') || selectEl.matches('select[data-hardship]'))) return; }catch(_e){}
    if(!shouldEnhanceSelect()) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'bl-select' + (selectEl.className ? (' ' + selectEl.className) : '');

    const parent = selectEl.parentNode;
    if(!parent) return;
    parent.insertBefore(wrapper, selectEl);
    wrapper.appendChild(selectEl);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bl-select-btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', selectEl.getAttribute('aria-label') || 'Select');

    const menu = document.createElement('div');
    menu.className = 'bl-select-menu';
    menu.hidden = true;
    menu.setAttribute('role', 'listbox');

    wrapper.appendChild(btn);
    wrapper.appendChild(menu);

    let api = null;
    let menuMountedToBody = false;
    let optionCommitPending = false;

    function onGlobalPointerDown(e){
      if(!api || menu.hidden) return;
      if(eventInsideSelect(api, e && e.target)) return;
      close(true);
    }

    function onGlobalReposition(){
      if(!api || menu.hidden) return;
      positionMenu();
    }

    function mountMenuToBody(){
      if(menuMountedToBody) return;
      try{
        document.body.appendChild(menu);
        menuMountedToBody = true;
        menu.classList.add('bl-select-menu--portal');
      }catch(_e){}
    }

    function restoreMenuToWrapper(){
      try{
        if(menuMountedToBody){
          wrapper.appendChild(menu);
          menuMountedToBody = false;
        }
      }catch(_e){}
      menu.classList.remove('bl-select-menu--portal');
      menu.style.removeProperty('--bl-select-menu-top');
      menu.style.removeProperty('--bl-select-menu-left');
      menu.style.removeProperty('--bl-select-menu-width');
    }

    function positionMenu(){
      try{
        const rect = btn.getBoundingClientRect();
        const docEl = document.documentElement;
        const vw = Math.max(320, window.innerWidth || docEl.clientWidth || 320);
        const vh = Math.max(320, window.innerHeight || docEl.clientHeight || 320);
        const margin = 8;
        const width = Math.max(180, Math.min(rect.width || 180, vw - (margin * 2)));
        let left = Math.min(Math.max(margin, rect.left), vw - width - margin);
        let top = rect.bottom + 8;

        menu.style.setProperty('--bl-select-menu-width', width + 'px');
        menu.style.setProperty('--bl-select-menu-left', left + 'px');
        menu.style.setProperty('--bl-select-menu-top', top + 'px');

        const h = Math.min(menu.scrollHeight || menu.offsetHeight || 260, Math.floor(vh * 0.55), 360);
        const spaceBelow = vh - rect.bottom - margin - 8;
        const spaceAbove = rect.top - margin - 8;
        if(spaceBelow < Math.min(h, 180) && spaceAbove > spaceBelow){
          top = Math.max(margin, rect.top - Math.min(h, spaceAbove) - 8);
        }
        menu.style.setProperty('--bl-select-menu-top', top + 'px');
      }catch(_e){}
    }

    // Keep the custom select self-contained. The open menu is portal-positioned
    // above page controls, so sliders/buttons cannot draw over it or receive its click.
    ['pointerdown','mousedown','mouseup','pointerup','touchstart','touchmove','touchend','click'].forEach(function(evtName){
      wrapper.addEventListener(evtName, function(e){ consumeSelectEvent(e, false); }, false);
      menu.addEventListener(evtName, function(e){ consumeSelectEvent(e, false); }, false);
    });

    // Mark as fully enhanced (CSS uses this to hide the native select).
    wrapper.setAttribute('data-bl-enhanced', '1');

    // Remove native select from tab order (button replaces interaction).
    if(selectEl.tabIndex >= 0) selectEl.tabIndex = -1;

    function sync(){
      const opt = selectEl.selectedOptions && selectEl.selectedOptions[0];
      const label = opt ? (opt.textContent || '').trim() : '';
      const prefix = selectEl.dataset ? String(selectEl.dataset.blPrefix || '').trim() : '';
      btn.textContent = (prefix && label) ? (prefix + ': ' + label) : (label || prefix || 'Select…');
      btn.disabled = !!selectEl.disabled;
      qsa('[role="option"]', menu).forEach(o=>{
        const v = o.getAttribute('data-value');
        o.setAttribute('aria-selected', (v === selectEl.value) ? 'true' : 'false');
      });
    }

    function syncStyle(){
      const cs = window.getComputedStyle(selectEl);
      btn.style.padding = cs.padding;
      btn.style.borderRadius = cs.borderRadius;
      btn.style.border = cs.border;
      btn.style.backgroundColor = cs.backgroundColor;
      btn.style.backgroundImage = cs.backgroundImage;
      btn.style.backgroundPosition = cs.backgroundPosition;
      btn.style.backgroundSize = cs.backgroundSize;
      btn.style.backgroundRepeat = cs.backgroundRepeat;
      btn.style.color = cs.color;
      btn.style.font = cs.font;
      btn.style.fontWeight = cs.fontWeight;
      btn.style.letterSpacing = cs.letterSpacing;
      btn.style.lineHeight = cs.lineHeight;
      btn.style.boxShadow = cs.boxShadow;
      btn.style.height = cs.height;
    }

    function buildMenu(){
      menu.innerHTML = '';
      const opts = Array.from(selectEl.options || []);
      opts.forEach(o=>{
        if(o.hidden || o.getAttribute('hidden') !== null || (o.disabled && String(o.value || '') === '') || (String(o.value || '') === '' && !String(o.textContent || '').trim())) return;
        const item = document.createElement('button');
        item.type = 'button';
        item.setAttribute('role', 'option');
        item.setAttribute('data-value', o.value);
        item.setAttribute('aria-selected', o.selected ? 'true' : 'false');
        item.textContent = (o.textContent || '').trim();
        item.disabled = o.disabled;

        function commitOption(e, closeDelay){
          consumeSelectEvent(e, true, true);
          if(item.disabled || optionCommitPending) return;
          optionCommitPending = true;
          selectEl.value = o.value;
          selectEl.dispatchEvent(new Event('change', { bubbles:true }));
          sync();
          blockSelectFallthrough(180);
          window.setTimeout(function(){
            close(false);
            optionCommitPending = false;
            try{ btn.focus({ preventScroll:true }); }catch(_e){ try{ btn.focus(); }catch(__e){} }
          }, Number.isFinite(Number(closeDelay)) ? Number(closeDelay) : 120);
        }

        ['pointerdown','mousedown','touchstart'].forEach(function(evtName){
          item.addEventListener(evtName, function(e){
            consumeSelectEvent(e, true, true);
          }, true);
        });

        const pointerSelectionEvents = (window.PointerEvent ? ['pointerup'] : ['mouseup','touchend']);
        pointerSelectionEvents.forEach(function(evtName){
          item.addEventListener(evtName, function(e){
            commitOption(e, 120);
          }, true);
        });

        item.addEventListener('click', function(e){
          if(optionCommitPending){
            consumeSelectEvent(e, true, true);
            return;
          }
          commitOption(e, 120);
        }, true);

        item.addEventListener('keydown', function(e){
          if(e.key === 'Enter' || e.key === ' '){
            commitOption(e, 120);
          }
        });

        menu.appendChild(item);
      });
    }

    function open(){
      if(btn.disabled) return;
      closeAllSelectMenus(wrapper);
      buildMenu();
      sync();
      syncStyle();
      wrapper.classList.add('is-open');
      mountMenuToBody();
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      activeSelectApi = api;
      try{ document.body.classList.add('bl-select-menu-open'); }catch(_e){}
      positionMenu();
      try{ window.requestAnimationFrame(positionMenu); }catch(_e){}
      try{ document.addEventListener('pointerdown', onGlobalPointerDown, true); }catch(_e){}
      try{ window.addEventListener('resize', onGlobalReposition, true); }catch(_e){}
      try{ window.addEventListener('scroll', onGlobalReposition, true); }catch(_e){}
    }

    function close(silent){
      menu.hidden = true;
      wrapper.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      try{ document.removeEventListener('pointerdown', onGlobalPointerDown, true); }catch(_e){}
      try{ window.removeEventListener('resize', onGlobalReposition, true); }catch(_e){}
      try{ window.removeEventListener('scroll', onGlobalReposition, true); }catch(_e){}
      restoreMenuToWrapper();
      if(activeSelectApi === api) activeSelectApi = null;
      try{ document.body.classList.remove('bl-select-menu-open'); }catch(_e){}
      if(!silent) sync();
    }

    btn.addEventListener('click', function(e){
      consumeSelectEvent(e, true, true);
      if(menu.hidden) open(); else close();
    });

    btn.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        close();
        return;
      }
      if(e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown'){
        e.preventDefault();
        if(menu.hidden) open();
        const selected = q('[role="option"][aria-selected="true"]', menu) || q('[role="option"]', menu);
        if(selected) selected.focus();
      }
    });

    menu.addEventListener('keydown', function(e){
      const items = qsa('[role="option"]', menu).filter(x=>!x.disabled);
      if(!items.length) return;
      const idx = Math.max(0, items.indexOf(document.activeElement));

      if(e.key === 'Escape'){
        e.preventDefault();
        close();
        btn.focus();
        return;
      }
      if(e.key === 'ArrowDown'){
        e.preventDefault();
        items[Math.min(items.length - 1, idx + 1)].focus();
      }
      if(e.key === 'ArrowUp'){
        e.preventDefault();
        items[Math.max(0, idx - 1)].focus();
      }
      if(e.key === 'Home'){
        e.preventDefault();
        items[0].focus();
      }
      if(e.key === 'End'){
        e.preventDefault();
        items[items.length - 1].focus();
      }
    });

    selectEl.addEventListener('change', function(){
      sync();
      syncStyle();
      if(!menu.hidden) positionMenu();
    });

    api = { wrapper, btn, menu, open, close, buildMenu, sync, syncStyle, positionMenu };
    selectEl[BL_SELECT_KEY] = api;
    enhancedSelects.add(selectEl);

    buildMenu();
    sync();
    syncStyle();

    try{ wrapper.setAttribute('data-bl-enhanced','1'); }catch(_e){}
  }

  function enhanceAllSelects(root=document){
    if(!shouldEnhanceSelect()) return;
    qsa('select', root).forEach(enhanceSelect);
  }
  window.BASELINE_enhanceAllSelects = enhanceAllSelects;
  window.BASELINE_refreshEnhancedSelect = refreshEnhancedSelect;

  // ---------------------------
  // History + scroll policy
  // ---------------------------
  const BASELINE_HISTORY_KEY = '__baseline_nav_v1__';

  // ---------------------------
  // Scroll root (supports fixed banner + internal scroll container)
  // ---------------------------
  function getScrollRoot(){
    return q('.bl-scroll');
  }

  function scrollRootTo(y, behavior='auto'){
    const root = getScrollRoot();
    if(root){
      root.scrollTo({ top: Math.max(0, y), left: 0, behavior });
      return;
    }
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior });
  }

  function getScrollTop(){
    const root = getScrollRoot();
    return root ? root.scrollTop : window.pageYOffset;
  }

  let __bl_pendingNavTimer = null;
  function clearPendingNavScroll(){
    try{
      if(__bl_pendingNavTimer !== null){
        window.clearTimeout(__bl_pendingNavTimer);
        __bl_pendingNavTimer = null;
      }
    }catch(_e){}
  }

  function queueNavScroll(fn, delay){
    clearPendingNavScroll();
    __bl_pendingNavTimer = window.setTimeout(()=>{
      __bl_pendingNavTimer = null;
      try{ fn(); }catch(_e){}
    }, Math.max(0, Number(delay) || 0));
  }

  function _blNormUrl(u){ try{ return String(u||'').replace(/^\.\//,''); }catch(_e){ return String(u||''); } }


  function targetFileFromHref(hrefRaw){
    try{
      return (String(hrefRaw || '').trim().split('#')[0].split('?')[0].split('/').pop() || '').toLowerCase();
    }catch(_e){
      return '';
    }
  }

  function isHomeHref(hrefRaw){
    const href = String(hrefRaw || '').trim().toLowerCase();
    const file = targetFileFromHref(href);
    return href === '/' || href === './' || href === '.' || file === 'index.html' || file === 'home.html';
  }

  function hardNavigate(hrefRaw){
    const href = String(hrefRaw || '').trim();
    if(!href) return;

    const currentFile = ((location.pathname.split('/').pop() || '') || 'index.html').toLowerCase();
    const targetFile = targetFileFromHref(href);

    if(isHomeHref(href)){
      const homeUrl = new URL('index.html', document.baseURI || window.location.href).href;
      if(!emitSiteNavigationStart(homeUrl)) return;
      if(currentFile === 'index.html'){
        try{ window.location.replace(homeUrl); }catch(_e){ window.location.href = homeUrl; }
      }else{
        try{ window.location.assign(homeUrl); }catch(_e){ window.location.href = homeUrl; }
      }
      return;
    }

    if(targetFile && currentFile && targetFile === currentFile){
      if(!emitSiteNavigationStart(href)) return;
      location.reload();
      return;
    }

    try{ if(!emitSiteNavigationStart(href)) return; window.location.assign(href); }catch(_e){ window.location.href = href; }
  }

  function currentHtmlBasePath(){
    try{
      const path = String(location.pathname || '');
      const m = path.match(/^(.*?\.html)(?:\/.*)?$/i);
      return m ? m[1] : path;
    }catch(_e){ return location.pathname || ''; }
  }

  function recipeSlugText(text){
    try{
      return String(text || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/-+/g, '-') || 'recipe';
    }catch(_e){
      return String(text || 'recipe').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'recipe';
    }
  }

  function recipeSlugForElement(el){
    if(!el) return '';
    const ds = el.dataset || {};
    if(ds.recipeSlug) return String(ds.recipeSlug || '').trim();
    const title = q('h3,h2', el);
    return recipeSlugText(title ? title.textContent : (el.id || 'recipe'));
  }

  function recipeIdForToken(token){
    token = String(token || '').trim();
    if(!token) return '';
    token = token.replace(/^#/, '').replace(/^recipe=/i, '');
    token = decodeURIComponent(token);
    const lower = token.toLowerCase();
    const direct = document.getElementById(lower);
    if(direct && direct.classList && direct.classList.contains('recipe-page')) return lower;

    // Recipe routes exist in two legitimate shells:
    // 1. embedded catalogue cards inside #recipes;
    // 2. standalone recipe documents containing one .recipe-page card.
    // Resolve against both so a clean slug route can reconstruct the same
    // recipe/subview state after refresh regardless of which shell served it.
    const recipes = qsa('.recipe-page[id]');
    for(const el of recipes){
      const id = String(el.id || '').toLowerCase();
      if(id === lower) return id;
      const slug = recipeSlugForElement(el).toLowerCase();
      if(slug === lower) return id;
    }
    return lower;
  }

  function normalizeRecipeSubView(value){
    const next = String(value || '').trim().toLowerCase();
    return ['details','guidance','show-all'].includes(next) ? next : 'standard';
  }

  function recipePathStateFromLocation(){
    try{
      const path = decodeURIComponent(String(location.pathname || ''));
      const m = path.match(/\/(?:baseline-food-approach|baseline-natural-skincare)\/recipes\/([^\/?#]+)\/?$/i)
        || path.match(/\.html\/([^\/?#]+)\/?$/i);
      if(!m || !m[1]) return null;
      const id = recipeIdForToken(m[1]);
      if(!id) return null;
      let recipeView = 'standard';
      let recipeVariant = '';
      try{
        const params = new URLSearchParams(location.search || '');
        recipeView = normalizeRecipeSubView(params.get('view'));
        recipeVariant = String(params.get('variant') || '').trim();
      }catch(_e){}
      return { kind:'recipe', recipeId:id, recipeView:recipeView, recipeVariant:recipeVariant, raw:path };
    }catch(_e){ return null; }
  }

  function recipeBaseUrlForCurrentPage(){
    const cleanRecipesUrl = cleanUrlForTab('recipes');
    if(cleanRecipesUrl) return cleanRecipesUrl.replace(/\/+$/,'');
    const file = routePageFileFromPath(location.pathname || '');
    if(file === 'baseline-food-approach.html') return '/baseline-food-approach/recipes';
    if(file === 'baseline-natural-skincare.html') return '/baseline-natural-skincare/recipes';
    return currentHtmlBasePath().replace(/\/+$/,'');
  }

  function recipeUrlForId(id){
    const recipeId = recipeIdForToken(id);
    const el = recipeId ? document.getElementById(recipeId) : null;
    const slug = recipeSlugForElement(el) || recipeSlugText(recipeId || id || 'recipe');
    return recipeBaseUrlForCurrentPage() + '/' + encodeURIComponent(slug);
  }

  const SKINCARE_INGREDIENT_SLUG_BY_ID = Object.freeze({
    'ing-shea':'shea-butter',
    'ing-cucumber':'cucumber-seed-oil',
    'ing-argan':'argan',
    'ing-jojoba':'jojoba-oil',
    'ing-olive-squalane':'olive-squalane',
    'ing-extra-virgin-coconut-oil':'extra-virgin-coconut-oil',
    'ing-lavender':'lavender',
    'ing-safflower':'safflower',
    'ing-vitamin-e':'vitamin-e',
    'ing-castor':'castor-oil',
    'ing-olive':'olive',
    'ing-carnauba':'carnauba',
    'ing-calendula':'calendula',
    'ing-water':'water',
    'ing-witchhazel':'witchhazel',
    'ing-rosewater':'rosewater',
    'ing-cucumber-hydrosol':'cucumber-hydrosol',
    'ing-glycerin':'glycerin',
    'ing-slipperyelm':'slipperyelm',
    'ing-guar-gum':'guar-gum',
    'ing-avocado':'avocado',
    'ing-cocoa-butter':'cocoa-butter',
    'ing-mango-butter':'mango-butter',
    'ing-kokum-butter':'kokum-butter',
    'ing-apricot-kernel-oil':'apricot-kernel-oil',
    'ing-red-raspberry-seed-oil':'red-raspberry-seed-oil',
    'ing-candelilla-wax':'candelilla-wax',
    'ing-colloidal-oatmeal':'colloidal-oatmeal',
    'ing-marshmallow-root-powder':'marshmallow-root-powder',
    'ing-inulin-powder':'inulin-powder',
    'ing-sunflower-lecithin-powder':'sunflower-lecithin-powder',
    'ing-white-kaolin':'white-kaolin-clay',
    'ing-sage-leaf-powder':'sage-leaf-powder',
    'ing-peppermint-leaf-powder':'peppermint-leaf-powder',
    'ing-fractionated-coconut':'fractionated-coconut',
    'ing-watermelon':'watermelon',
    'ing-dead-sea-salt':'dead-sea-salt',
    'ing-epsom':'epsom',
    'ing-vinegar':'vinegar'
  });

  function skincareIngredientIdForSlug(slug){
    let token = String(slug || '').trim().toLowerCase();
    try{ token = decodeURIComponent(token); }catch(_e){}
    const ids = Object.keys(SKINCARE_INGREDIENT_SLUG_BY_ID);
    for(const ingredientId of ids){
      if(SKINCARE_INGREDIENT_SLUG_BY_ID[ingredientId] === token) return ingredientId;
    }
    return '';
  }

  function skincareIngredientPathStateFromLocation(){
    try{
      if(routePageFileFromPath(location.pathname || '') !== 'baseline-natural-skincare.html') return null;
      const path = decodeURIComponent(String(location.pathname || ''));
      const match = path.match(/\/baseline-natural-skincare\/ingredient-library\/([^\/?#]+)\/?$/i);
      if(!match || !match[1]) return null;
      const ingredientId = skincareIngredientIdForSlug(match[1]);
      const recipeFilter = new URLSearchParams(location.search || '').get('filter') || null;
      return ingredientId ? { kind:'ingredient', ingredientId:ingredientId, recipeFilter:recipeFilter, raw:path } : null;
    }catch(_e){ return null; }
  }

  function skincareIngredientUrlForId(ingredientId, recipeFilter){
    const slug = SKINCARE_INGREDIENT_SLUG_BY_ID[String(ingredientId || '').trim()];
    if(!slug) return '';
    const base = '/baseline-natural-skincare/ingredient-library/' + encodeURIComponent(slug);
    const filter = String(recipeFilter || '').trim();
    return filter ? (base + '?filter=' + encodeURIComponent(filter)) : base;
  }

  function recipeTokenFromHref(href){
    const raw = String(href || '').trim();
    if(!raw) return '';
    if(raw[0] === '#'){
      if(/^#recipe=/i.test(raw)) return raw.replace(/^#recipe=/i, '');
      if(/^#r\d+/i.test(raw)) return raw.slice(1);
      return raw.slice(1);
    }
    try{
      const u = new URL(raw, document.baseURI || window.location.href);
      const hash = String(u.hash || '');
      if(/^#recipe=/i.test(hash)) return hash.replace(/^#recipe=/i, '');
      if(/^#r\d+/i.test(hash)) return hash.slice(1);
      const path = decodeURIComponent(u.pathname || '');
      const m = path.match(/\/recipes\/([^\/?#]+)\/?$/i) || path.match(/\.html\/([^\/?#]+)\/?$/i);
      return m && m[1] ? m[1] : '';
    }catch(_e){
      const clean = decodeURIComponent(raw);
      const m = clean.match(/\/recipes\/([^\/?#]+)\/?$/i) || clean.match(/\.html\/([^\/?#]+)\/?$/i);
      return m && m[1] ? m[1] : '';
    }
  }

  function urlWithoutHash(){
    return currentHtmlBasePath() + location.search;
  }

  function buildViewStateHash(state){
    if(!state || typeof state !== 'object') return '';

    if(state.kind === 'recipe' && state.recipeId){
      return '#recipe=' + encodeURIComponent(state.recipeId);
    }

    if(state.kind === 'support' && state.supportId){
      return '#support=' + encodeURIComponent(state.supportId);
    }

    if(state.kind === 'ingredient' && state.ingredientId){
      let hash = '#' + String(state.ingredientId || '');
      if(state.recipeFilter){
        hash += '&filter=' + encodeURIComponent(state.recipeFilter);
      }
      return hash;
    }

    if(state.kind === 'ingredients'){
      let hash = '#tab=ingredients';
      if(state.recipeFilter){
        hash += '&filter=' + encodeURIComponent(state.recipeFilter);
      }
      return hash;
    }

    if(state.kind === 'tab' && state.tabId){
      let hash = '#tab=' + encodeURIComponent(state.tabId);
      if(state.tabId === 'ingredients' && state.recipeFilter){
        hash += '&filter=' + encodeURIComponent(state.recipeFilter);
      }
      return hash;
    }

    return '';
  }

  function cleanUrlWithOptionalFilter(tabId, recipeFilter){
    const cleanUrl = cleanUrlForTab(tabId);
    if(!cleanUrl) return '';
    const filter = String(recipeFilter || '').trim();
    return filter ? (cleanUrl + '?filter=' + encodeURIComponent(filter)) : cleanUrl;
  }

  function urlForNavState(state){
    if(state && state.kind === 'recipe' && state.recipeId){
      const base = recipeUrlForId(state.recipeId);
      const recipeView = normalizeRecipeSubView(state.recipeView || 'standard');
      const recipeVariant = String(state.recipeVariant || '').trim();
      const params = new URLSearchParams();
      if(recipeView !== 'standard') params.set('view', recipeView);
      if(recipeVariant) params.set('variant', recipeVariant);
      const query = params.toString();
      return query ? (base + '?' + query) : base;
    }
    if(state && state.kind === 'ingredient' && state.ingredientId){
      const routePageFile = routePageFileFromPath(location.pathname || '');
      if(routePageFile === 'baseline-natural-skincare.html'){
        const cleanIngredientUrl = skincareIngredientUrlForId(state.ingredientId, state.recipeFilter || '');
        if(cleanIngredientUrl) return cleanIngredientUrl;
      }
      if(routePageFile === 'baseline-food-approach.html'){
        const ingredientsBase = cleanUrlForTab('ingredients') || '/baseline-food-approach/ingredient-library';
        const filter = String(state.recipeFilter || '').trim();
        return ingredientsBase
          + (filter ? ('?filter=' + encodeURIComponent(filter)) : '')
          + '#' + encodeURIComponent(state.ingredientId);
      }
    }
    if(state && state.kind === 'tab' && state.tabId){
      const cleanUrl = cleanUrlWithOptionalFilter(state.tabId, state.recipeFilter || '');
      if(cleanUrl) return cleanUrl;
    }
    if(state && state.kind === 'ingredients'){
      const cleanUrl = cleanUrlWithOptionalFilter('ingredients', state.recipeFilter || '');
      if(cleanUrl) return cleanUrl;
    }
    return urlWithoutHash() + buildViewStateHash(state);
  }

  function isIngredientDeepLinkHash(hash){
    // Hashes used by the Baseline in-page router. Preserve them on load; stripping
    // #tab=... during cross-page navigation can desynchronise the visible page from
    // the URL and leave a blank/loading surface after repeated dropdown switching.
    return /^(#ing-|#recipe=|#tab=|#recipes$|#ingredients$|#support$|#support=|#support-|#r\d+$)/i.test(hash || '');
  }


function parseViewStateHash(hash){
  hash = String(hash || '');
  if(!hash || hash[0] !== '#') return { raw: hash };

  // Ingredient deep links may carry params: #ing-water&filter=r2
  if(/^#ing-/.test(hash)){
    const parts = hash.slice(1).split('&');
    const ingredientId = parts[0];
    const params = {};
    parts.slice(1).forEach(p=>{
      const kv = p.split('=');
      const k = decodeURIComponent(kv[0] || '').trim();
      const v = decodeURIComponent((kv[1] || '').trim());
      if(k) params[k] = v;
    });
    let queryFilter = null;
    try{ queryFilter = new URLSearchParams(location.search || '').get('filter') || null; }catch(_e){}
    return {
      kind: 'ingredient',
      ingredientId,
      recipeFilter: (params.filter || params.recipe || queryFilter || null),
      raw: hash
    };
  }

  if(/^#recipe=/.test(hash)){
    return { kind:'recipe', recipeId: recipeIdForToken(hash.replace(/^#recipe=/,'')), raw: hash };
  }

  // Legacy deep links still exist in authored HTML (#rN, #support-card, #ingredients).
  // Normalize them into the shared router model so browser refresh restores the
  // correct in-page view instead of falling back to the overview/default tab.
  if(/^#r\d+$/i.test(hash)){
    return { kind:'recipe', recipeId: recipeIdForToken(hash.replace(/^#/,'')), raw: hash };
  }

  if(/^#support=/.test(hash)){
    return { kind:'support', supportId: decodeURIComponent(hash.replace(/^#support=/,'')), raw: hash };
  }

  if(/^#support-[a-z0-9_-]+$/i.test(hash)){
    return { kind:'support', supportId: hash.replace(/^#/,'').toLowerCase(), raw: hash };
  }

  if(/^#ingredients$/i.test(hash)){
    return { kind:'tab', tabId:'ingredients', raw: hash };
  }

  if(/^#recipes$/i.test(hash)){
    return { kind:'tab', tabId:'recipes', raw: hash };
  }

  if(/^#support$/i.test(hash)){
    return { kind:'tab', tabId:'support', raw: hash };
  }

  // Tab state may carry params: #tab=ingredients&filter=r2
  if(/^#tab=/.test(hash)){
    const q = hash.replace(/^#tab=/,'');
    const parts = q.split('&');
    const tabId = decodeURIComponent(parts[0] || '');
    const params = {};
    parts.slice(1).forEach(p=>{
      const kv = p.split('=');
      const k = decodeURIComponent(kv[0] || '').trim();
      const v = decodeURIComponent((kv[1] || '').trim());
      if(k) params[k] = v;
    });
    return {
      kind:'tab',
      tabId,
      recipeFilter: (params.filter || params.recipe || null),
      raw: hash
    };
  }

  return { raw: hash };
}


  function urlWithHash(){
    return location.pathname + location.search + (location.hash || '');
  }

  function _stripEphemeralForCompare(st){
    // Ignore transient fields that should not create new history entries.
    if(!st || typeof st !== 'object') return st;
    const out = { ...st };
    delete out.scrollY;
    delete out._ts;
    return out;
  }

  function setNavState(next, opts={}){
    const url = (typeof opts.url === 'string') ? opts.url : urlWithoutHash();
    const wrapper = (next && typeof next === 'object') ? { [BASELINE_HISTORY_KEY]: next } : {};

    // Capture scroll position into the *current* entry before pushing a new one.
    try{
      const cur = getNavState();
      const curWrap = (cur && typeof cur === 'object') ? { [BASELINE_HISTORY_KEY]: { ...cur, scrollY: getScrollTop() } } : { [BASELINE_HISTORY_KEY]: { scrollY: getScrollTop() } };
      // Preserve any safe view-state hashes (#recipe=, #tab=, #ing-, #support=) to avoid hash stripping.
      history.replaceState(curWrap, '', urlWithHash());
    }catch(_e){}

    // De-dupe: avoid pushing the exact same state+url repeatedly (breaks Back behaviour).
    try{
      const prev = getNavState();
      const prevUrl = urlWithHash();
      const sameUrl = (_blNormUrl(url) === _blNormUrl(prevUrl));
      const sameState = JSON.stringify(_stripEphemeralForCompare(prev || null)) === JSON.stringify(_stripEphemeralForCompare(next || null));
      if(!opts.replace && sameUrl && sameState){
        return;
      }
    }catch(_e){}

    try{
      if(opts.replace) history.replaceState(wrapper, '', url);
      else history.pushState(wrapper, '', url);
    }catch(e){
      // If state fails (rare), still attempt a URL update (no redirects).
      try{
        if(opts.replace) history.replaceState(null, '', url);
        else history.pushState(null, '', url);
      }catch(_e){}
    }


    // Broadcast router writes so same-origin shells (for example the offline
    // index embed) can mirror the child view immediately after pushState /
    // replaceState. Relying on hashchange alone is not enough because the
    // History API does not emit hashchange when it updates the URL.
    try{
      window.dispatchEvent(new CustomEvent('baseline:navigation-state', {
        detail: { state: next || null, url: url }
      }));
    }catch(_e){}

  }

  // Persist scroll position into the current history entry so Back/Forward restores
  // the *actual* scroll where the user left (including when leaving via browser controls).
  let __bl_scrollSavePending = false;
  function saveScrollToHistory(){
    if(__bl_scrollSavePending) return;
    __bl_scrollSavePending = true;
    window.requestAnimationFrame(()=>{
      __bl_scrollSavePending = false;
      try{
        const cur = getNavState();
        const next = (cur && typeof cur === 'object') ? { ...cur, scrollY: getScrollTop() } : { scrollY: getScrollTop() };
        const wrap = { [BASELINE_HISTORY_KEY]: next };
        history.replaceState(wrap, '', urlWithHash());
      }catch(_e){}
    });
  }

  function setupScrollPersistence(){
    try{ if(window.__BL_SCROLLPERSIST_BOUND__) return; window.__BL_SCROLLPERSIST_BOUND__=true; }catch(_e){}
    const root = getScrollRoot();
    const target = root || window;
    try{
      target.addEventListener('scroll', saveScrollToHistory, { passive:true });
    }catch(_e){}
    // Capture the latest scroll before the page is cached/unloaded.
    try{ window.addEventListener('pagehide', saveScrollToHistory, { passive:true }); }catch(_e){}
    try{
      document.addEventListener('visibilitychange', ()=>{
        if(document.visibilityState === 'hidden') saveScrollToHistory();
      }, { passive:true });
    }catch(_e){}
  }

  function getNavState(stateObj){
    const s = (stateObj !== undefined) ? stateObj : history.state;
    return (s && s[BASELINE_HISTORY_KEY]) ? s[BASELINE_HISTORY_KEY] : null;
  }

  (function enforceNoJumpOnLoad(){
    if('scrollRestoration' in history) history.scrollRestoration = 'manual';

    const h = location.hash || '';
    if(h && !isIngredientDeepLinkHash(h)){
      // Remove only non-router anchors to avoid landing mid-page with the header hidden.
      setNavState(getNavState(), { replace:true, url: urlWithoutHash() });
      scrollRootTo(0, 'auto');
    }
  })();


  function normalisePageHref(hrefRaw, labelText){
    return cleanRouteForPageHref(hrefRaw, labelText);
  }

  // ---------------------------
  // Banner: System menu
  // ---------------------------
  function setupSystemMenu(){
    const toggle = q('.bl-system-toggle');
    const menu   = q('.bl-system-menu');
    if(!toggle || !menu) return;

    function close(){
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    function open(){
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(menu.hidden) open(); else close();
    });


    // Keep clicks inside the menu from triggering the outside-click closer.
    menu.addEventListener('click', (e)=>{ e.stopPropagation(); });

    // Close after a selection; allow the anchor's native navigation.
    qsa('a[href]', menu).forEach(a=>{
      a.addEventListener('click', ()=>{ setTimeout(close, 0); });
    });

    // Close on outside click
    document.addEventListener('click', close);

    // Close on escape
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });
  }

  // ---------------------------
  // Tabs
  // ---------------------------
  function setupTabs(){
    const tabs = qsa('.tab[data-tab], .tab[data-target]');
    // Tabs are handled by baseline-tabs.js as a fail-safe. Avoid double-binding.
    if(typeof window.BASELINE_selectTab === 'function') return;
    if(!tabs.length) return;

    const sections = qsa('.section[id]');
    const sectionsById = new Map(sections.map(s => [s.id, s]));

    // Avoid optional chaining for broader browser support.
    const tabId = (t)=>{
      if(!t) return '';
      const ds = t.dataset || {};
      return (String(ds.tab || ds.target || '')).trim();
    };

    function selectTab(id, opts={}){
      if(!id || !sectionsById.has(id)) return;
      clearPendingNavScroll();

      // First-paint route markers are bootstrap-only. Once the live tab
      // controller is running, they must never keep a section or tab pinned.
      try{
        document.documentElement.removeAttribute('data-initial-section');
        if(id !== 'recipes'){
          document.documentElement.removeAttribute('data-initial-recipe-route');
          document.documentElement.removeAttribute('data-initial-recipe-pending');
          document.documentElement.removeAttribute('data-initial-recipe-slug');
          document.documentElement.removeAttribute('data-initial-recipe-view');
          document.documentElement.removeAttribute('data-initial-recipe-variant');
        }
      }catch(_e){}

      // Skincare's first-paint routine markers are bootstrap-only. Once the
      // user leaves My Routine they must not keep forcing #routine visible.
      try{
        if(document.body && document.body.dataset && document.body.dataset.app === 'skin' && id !== 'routine'){
          document.documentElement.removeAttribute('data-initial-skincare-tab');
          document.documentElement.removeAttribute('data-initial-routine-view');
        }
      }catch(_e){}

      tabs.forEach(t=>{
        const selected = tabId(t) === id;
        t.classList.toggle('active', selected);
        t.setAttribute('aria-selected', selected ? 'true' : 'false');
      });

      sections.forEach(s => s.classList.toggle('active', s.id === id));

      if(!opts.silentHistory){
        // Always mirror the active tab into a safe view-state hash. This keeps
        // browser refresh, embedded/offline routing, and Back/Forward aligned.
        try{
          const nextState = { kind: 'tab', tabId: id };
          setNavState(nextState, { url: urlForNavState(nextState) });
        }catch(_e){ /* history is non-critical */ }
      }

      /* Sitewide tab policy: changing tabs must not force-scroll the page. */
    }

    // Expose for other behaviours (ingredient deep links, recipe navigation, etc.)
    window.BASELINE_selectTab = selectTab;
    window.BASELINE_getTabId = tabId;

    tabs.forEach(tab=>{
      tab.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = tabId(tab);
        if(!id || !sectionsById.has(id)) return;

        // Special rule: the Recipes tab always shows the overview (never the last opened recipe).
        if(id === 'recipes' && typeof window.BASELINE_showAllRecipes === 'function'){
          window.BASELINE_showAllRecipes({ silentHistory:false });
          return;
        }

        selectTab(id);
      });
    });

    // Default selection:
    // - Prefer any existing in-page nav state (supports reload/refresh without losing context).
    // - Then fall back to safe state hashes (#tab=, #recipe=, #ing-).
    // - Otherwise select the first tab.
    let initial = null;

    try{
      const st = getNavState();
      if(st && st.kind === 'tab' && st.tabId) initial = st.tabId;
      else if(st && st.kind === 'ingredient') initial = 'ingredients';
      else if(st && st.kind === 'recipe') initial = 'recipes';
    }catch(_e){}

    try{
      const rv = cleanRouteStateFromPath();
      if(rv && rv.kind === 'tab' && rv.tabId) initial = rv.tabId;
      else if(rv && rv.kind === 'ingredient') initial = 'ingredients';
    }catch(_e){}

    try{
      const h = location.hash || '';
      const hv = parseViewStateHash(h);
      if(hv && hv.kind === 'tab' && hv.tabId) initial = hv.tabId;
      else if(hv && hv.kind === 'recipe') initial = 'recipes';
      else if(hv && hv.kind === 'ingredient') initial = 'ingredients';
    }catch(_e){}

    const first = tabId(tabs[0]);
    const fallback = (first && sectionsById.has(first)) ? first : null;

    const chosen = (initial && sectionsById.has(initial)) ? initial : fallback;
    if(chosen){
      selectTab(chosen, { silentHistory:true });
      try{
        const hv = parseViewStateHash(location.hash || '');
        if(hv && hv.kind === 'tab' && hv.tabId){
          const cleanUrl = cleanUrlForTab(hv.tabId);
          if(cleanUrl){
            history.replaceState({ [BASELINE_HISTORY_KEY]: { kind:'tab', tabId:hv.tabId } }, '', cleanUrl);
          }
        }
      }catch(_e){}
    }
  }

  // ---------------------------
  // Recipes: open-one mode
  // ---------------------------
  function foodRecipeRecordForToken(token){
    try{
      const value = String(token || '').trim().toLowerCase().replace(/^#/, '').replace(/^recipe=/i, '');
      if(!value || !Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX)) return null;
      return window.BASELINE_FOOD_RECIPE_INDEX.find(recipe=>{
        if(!recipe) return false;
        return String(recipe.id || '').toLowerCase() === value
          || String(recipe.slug || '').toLowerCase() === value;
      }) || null;
    }catch(_e){ return null; }
  }

  async function hydrateFolderBackedRecipeSource(token){
    try{
      if(routePageFileFromPath(location.pathname || '') !== 'baseline-food-approach.html') return null;
      const record = foodRecipeRecordForToken(token);
      if(!record || !record.slug) return null;

      const slug = String(record.slug || '').trim().toLowerCase();
      const recipesSection = q('#recipes');
      const host = recipesSection ? q('.recipes', recipesSection) : null;
      if(!recipesSection || !host) return null;

      const existingById = record.id ? document.getElementById(String(record.id)) : null;
      if(existingById && recipesSection.contains(existingById)) return existingById;
      const existingBySlug = q('.recipe-page[data-recipe-slug="' + CSS.escape(slug) + '"]', host);
      if(existingBySlug) return existingBySlug;

      const sourceUrl = '/systems/baseline-food-approach/recipes/' + encodeURIComponent(slug) + '.html';
      const response = await fetch(sourceUrl, {
        method:'GET',
        credentials:'same-origin',
        cache:'no-store',
        headers:{'Accept':'text/html'}
      });
      if(!response.ok) throw new Error('recipe_source_' + response.status);

      const sourceHtml = await response.text();
      const sourceDoc = new DOMParser().parseFromString(sourceHtml, 'text/html');
      const sourceCard = sourceDoc.querySelector('.recipe-page[data-recipe-slug="' + CSS.escape(slug) + '"]');
      if(!sourceCard) throw new Error('recipe_source_missing_card');

      const card = document.importNode(sourceCard, true);
      card.classList.remove('active', 'is-open');
      card.classList.add('recipe-universal-template');
      card.style.display = '';
      host.appendChild(card);
      return card;
    }catch(error){
      console.error('[Baseline recipe] Food recipe hydration failed:', error);
      return null;
    }
  }

  async function hydrateFolderBackedRecipeCollection(){
    try{
      if(routePageFileFromPath(location.pathname || '') !== 'baseline-food-approach.html') return [];
      if(!Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX)) return [];
      const cards = await Promise.all(
        window.BASELINE_FOOD_RECIPE_INDEX.map(recipe=>hydrateFolderBackedRecipeSource(recipe && (recipe.id || recipe.slug)))
      );
      return cards.filter(Boolean);
    }catch(error){
      console.error('[Baseline recipe] Food recipe collection hydration failed:', error);
      return [];
    }
  }

  function setupRecipeActionBars(){
    const recipesSection = q('#recipes');
    if(!recipesSection) return;

    qsa('#recipes .recipe-page[id]', recipesSection).forEach(card=>{
      let actions = q(':scope > .recipe-actions', card);
      const looseBack = q(':scope > .back-btn', card);
      const loosePrint = q(':scope > .print-btn', card);

      if(!actions){
        if(!looseBack && !loosePrint) return;
        actions = document.createElement('div');
        actions.className = 'recipe-actions';
        card.insertAdjacentElement('afterbegin', actions);
      }

      let right = q(':scope > .recipe-actions-right', actions);
      if(!right){
        right = document.createElement('div');
        right.className = 'recipe-actions-right';
      }

      const backButtons = [];
      const printButtons = [];

      qsa(':scope > .back-btn', actions).forEach(btn=> backButtons.push(btn));
      qsa(':scope > .print-btn', actions).forEach(btn=> printButtons.push(btn));
      if(looseBack && looseBack.parentElement === card) backButtons.push(looseBack);
      if(loosePrint && loosePrint.parentElement === card) printButtons.push(loosePrint);

      backButtons.forEach(btn=>{
        btn.textContent = 'Back To Recipes';
        if(btn.parentElement !== actions){
          actions.insertBefore(btn, actions.firstChild || null);
        }
      });

      if(right.parentElement !== actions){
        actions.appendChild(right);
      }

      printButtons.forEach(btn=>{
        if(btn.parentElement !== right){
          right.appendChild(btn);
        }
      });
    });
  }

  function setupRecipes(){
    const recipesSection = q('#recipes');
    if(!recipesSection) return;

    const recipeMain = q('.recipe-main', recipesSection) || recipesSection;
    function activateRecipesTabSilently(){
      if(typeof window.BASELINE_selectTab === 'function'){
        window.BASELINE_selectTab('recipes', { silentHistory:true });
      }
    }

    function setRecipeVisibility(activeId){
      qsa('.recipe-page', recipesSection).forEach(el=>{
        const isActive = !!activeId && (el.id === activeId);
        if(!activeId){
          el.style.display = '';
        }else{
          el.style.display = isActive ? 'block' : 'none';
        }
        // Keep legacy recipe-page CSS hooks in sync with the shared router.
        el.classList.toggle('is-open', isActive);
        // Used by CSS for focused-view-only controls (e.g., Scale by ingredient)
        el.classList.toggle('active', isActive);
      });
    }

    function openRecipe(id, opts={}){
      id = recipeIdForToken(id);
      const liveCard = id ? document.getElementById(id) : null;
      if(!liveCard || !recipesSection.contains(liveCard) || !liveCard.classList.contains('recipe-page')) return;

      recipesSection.classList.add('recipe-open-mode', 'recipe-focus', 'recipe-detail-open');
      activateRecipesTabSilently();
      setRecipeVisibility(id);
      // Ensure buttons + scaling tools are present in focused view (sitewide).
      setupRecipeActionBars();
      setupRecipeTools({ onlyId: id });
      try{
        document.documentElement.removeAttribute('data-initial-section');
        document.documentElement.removeAttribute('data-initial-recipe-route');
        document.documentElement.removeAttribute('data-initial-recipe-pending');
        document.documentElement.removeAttribute('data-initial-recipe-slug');
        document.documentElement.removeAttribute('data-initial-recipe-view');
      }catch(_e){}
      // Keep existing back links/buttons available; no extra banner is injected.

      if(!opts.silentHistory){
        // A deliberate recipe-open action always starts on Recipe.
        // Subview restoration belongs only to router/history restoration
        // (silentHistory), so a stale ?view=details route can never leak into
        // a newly opened recipe.
        const nextState = { kind: 'recipe', recipeId: id, recipeView: 'standard' };
        setNavState(nextState, { url: urlForNavState(nextState) });
        try{
          if(typeof liveCard.__baselineSetRecipeView === 'function'){
            liveCard.__baselineSetRecipeView('standard', { syncRoute:false });
          }
        }catch(_e){}
      }

      // Auto-scroll to the top of the focused recipe card (offset for the fixed home bar).
      if(opts && opts.noScroll) return;

      const card = document.getElementById(id);
      if(card){
        // Defer until after layout updates (display toggles + tool injection).
        setTimeout(()=>{
          const root = getScrollRoot();
          if(root){
            const y = card.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 12;
            scrollRootTo(y, 'auto');
          }else{
            const hb = document.querySelector('.bl-homebar');
            const hbH = hb ? hb.getBoundingClientRect().height : 0;
            const y = card.getBoundingClientRect().top + getScrollTop() - hbH - 12;
            scrollRootTo(y, 'auto');
          }
        }, 0);
      }
    }

    function showAll(opts={}){
      recipesSection.classList.remove('recipe-open-mode', 'recipe-focus', 'recipe-detail-open');
      setRecipeVisibility(null);

      activateRecipesTabSilently();
      try{
        document.documentElement.removeAttribute('data-initial-section');
        document.documentElement.removeAttribute('data-initial-recipe-route');
        document.documentElement.removeAttribute('data-initial-recipe-slug');
        document.documentElement.removeAttribute('data-initial-recipe-view');
      }catch(_e){}

      if(!opts.silentHistory){
        const recipesState = { kind: 'tab', tabId: 'recipes' };
        setNavState(recipesState, { url: urlForNavState(recipesState) });
      }
    }

    // Expose for other behaviours (ingredient filter “view recipe” link, router, etc.)
    window.BASELINE_openRecipe = (id, opts={}) => openRecipe(id, opts);
    window.BASELINE_showAllRecipes = (opts={}) => showAll(opts);

    // One shared back-navigation owner. Folder-backed Food recipes author a
    // real fallback link, while older Skincare markup used inline onclick.
    // Capture the action before either path can reload or double-handle it.
    recipesSection.addEventListener('click', (e)=>{
      const back = e.target && e.target.closest ? e.target.closest('.back-btn') : null;
      if(!back || !recipesSection.contains(back)) return;
      e.preventDefault();
      e.stopPropagation();
      showAll({ silentHistory:false });
    }, { capture:true });

    // Link clicks inside recipes section
    qsa('a.recipe-open', recipesSection).forEach(a=>{
      a.addEventListener('click', function(e){
        const href = a.getAttribute('href') || '';
        let id = (a.dataset && a.dataset.recipeId) ? a.dataset.recipeId : '';
        if(!id) id = recipeTokenFromHref(href);
        id = recipeIdForToken(id);
        if(!id) return;
        const liveCard = document.getElementById(id);
        if(!liveCard || !recipesSection.contains(liveCard)) return;
        e.preventDefault();
        openRecipe(id);
      });
    });

    
    // Overview list: clicking a recipe link opens focused recipe view
    recipesSection.addEventListener('click', (e)=>{
      const a = e.target.closest('#recipes-overview a[href], .recipe-overview a[href], a.recipe-open[href]');
      if(!a) return;
      const href = (a.getAttribute('href')||'').trim();
      let id = (a.dataset && a.dataset.recipeId) ? a.dataset.recipeId : '';
      if(!id) id = recipeTokenFromHref(href);
      id = recipeIdForToken(id);
      if(!id) return;
      let liveCard = document.getElementById(id);
      if(!liveCard || !recipesSection.contains(liveCard)){
        const token = (a.dataset && a.dataset.recipeId) ? a.dataset.recipeId : recipeTokenFromHref(href);
        if(foodRecipeRecordForToken(token)){
          e.preventDefault();
          hydrateFolderBackedRecipeSource(token).then(card=>{
            if(card) openRecipe(card.id);
          });
        }
        return;
      }
      e.preventDefault();
      openRecipe(id);
    }, { capture:true });


    // Overview: make recipe titles clickable (opens that recipe)
    recipesSection.addEventListener('click', (e)=>{
      const h3 = e.target.closest('.recipe-page h3');
      if(!h3) return;
      const card = h3.closest('.recipe-page[id]');
      if(!card) return;

      // If already in focused view, do nothing
      if(recipesSection.classList.contains('recipe-open-mode')) return;

      openRecipe(card.id);
    });

    // “Find out more about the ingredients here →” links
    // Switch tabs + apply recipe filter and scroll to the ingredient section (prevents ‘blank’ scroll positions).
    qsa('#recipes a[data-scroll-to-ingredients]', recipesSection).forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();

        const recipeEl = a.closest('.recipe-page[id]');
        const recipeId = recipeEl ? recipeEl.id : null;

        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('ingredients', { silentHistory:true });
        }

        if(recipeId && typeof window.BASELINE_setIngredientFilter === 'function'){
          window.BASELINE_setIngredientFilter(recipeId, { silentHistory:true });
        }

        const ingTop = q('#ingredients');
        if(ingTop){
          ingTop.scrollIntoView({ behavior:'auto', block:'start' });
        }

        const ingredientsState = { kind: 'ingredients', recipeFilter: recipeId || null };
        setNavState(ingredientsState, { url: urlForNavState(ingredientsState) });
      });
    });
  }

  // Build/validate recipe overview + side-nav lists, and order recipe cards alphabetically.
  // - If recipe cards declare data-category, we treat the page as category-based and
  //   rebuild the overview + side nav directly from the recipe cards.
  // - Otherwise, we just sort existing lists (preserving any descriptions already in HTML).
  function setupRecipeOverviewAndOrdering(){
    const recipesSection = document.getElementById('recipes');
    if(!recipesSection) return;
    const recipesContainer = recipesSection.querySelector('.recipes');
    const recipeCards = Array.from(recipesSection.querySelectorAll('.recipe-page[id]'));
    if(!recipesContainer || !recipeCards.length) return;

    const getTitle = (card) => {
      const h = card.querySelector('h3');
      return (h ? h.textContent : card.id || '').trim();
    };

    // 1) Order recipe cards alphabetically (landing card stays at the top)
    const sortedCards = recipeCards.slice().sort((a,b) => getTitle(a).localeCompare(getTitle(b)));
    sortedCards.forEach(card => recipesContainer.appendChild(card));

    // 2) Update overview + nav lists.
    // Personal Care has promoted and folder-backed recipes with authored
    // descriptors. Its canonical recipe-navigation module owns that landing
    // content; the generic category rebuilder must never strip those labels.
    const recipePageFile = routePageFileFromPath(location.pathname || '');
    const isSkincareRecipeCollection = recipePageFile === 'baseline-natural-skincare.html';
    const isFoodRecipeCollection = recipePageFile === 'baseline-food-approach.html'
      && Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX);
    if(isSkincareRecipeCollection || isFoodRecipeCollection) return;

    const hasCategories = sortedCards.some(c => c.dataset && typeof c.dataset.category === 'string' && c.dataset.category.trim() !== '');

    if(hasCategories){
      const categoryOrder = ['Dehydrator', 'Pressure Cooker', 'Stovetop'];
      const byCategory = new Map();

      sortedCards.forEach(card => {
        const cat = (card.dataset.category || 'Recipes').trim() || 'Recipes';
        const list = byCategory.get(cat) || [];
        list.push({ id: card.id, title: getTitle(card) });
        byCategory.set(cat, list);
      });

      // sort within each category
      for(const [cat, items] of byCategory){
        items.sort((a,b) => a.title.localeCompare(b.title));
      }

      const cats = Array.from(byCategory.keys()).sort((a,b) => {
        const ai = categoryOrder.indexOf(a);
        const bi = categoryOrder.indexOf(b);
        if(ai !== -1 || bi !== -1){
          if(ai === -1) return 1;
          if(bi === -1) return -1;
          return ai - bi;
        }
        return a.localeCompare(b);
      });

      // Landing overview rebuild (remove existing lists/headings, keep intro copy)
      const landingCard = recipesSection.querySelector('#recipes-landing');
      if(landingCard){
        const kids = Array.from(landingCard.children);
        const cut = kids.findIndex(el => el.tagName === 'H4' || el.tagName === 'UL');
        if(cut !== -1){
          for(let i = kids.length - 1; i >= cut; i--){
            landingCard.removeChild(kids[i]);
          }
        }

        cats.forEach(cat => {
          if(cat !== 'Recipes'){
            const h4 = document.createElement('h4');
            h4.textContent = cat;
            landingCard.appendChild(h4);
          }

          const ul = document.createElement('ul');
          (byCategory.get(cat) || []).forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            try{ a.href = recipeUrlForId(item.id); }catch(_e){ a.href = `#${item.id}`; }
            a.textContent = item.title;
            a.className = 'recipe-open';
            a.dataset.recipeId = item.id;
            li.appendChild(a);
            ul.appendChild(li);
          });
          landingCard.appendChild(ul);
        });
      }
    }else{
      // No categories: just sort any existing overview/nav lists alphabetically by their link text.
      const sortList = (ul) => {
        const items = Array.from(ul.querySelectorAll(':scope > li'));
        items.sort((a,b) => {
          const at = (a.querySelector('a') ? a.querySelector('a').textContent : a.textContent).trim();
          const bt = (b.querySelector('a') ? b.querySelector('a').textContent : b.textContent).trim();
          return at.localeCompare(bt);
        });
        items.forEach(li => ul.appendChild(li));
      };

      const landingCard = recipesSection.querySelector('#recipes-landing');
      if(landingCard){
        landingCard.querySelectorAll('ul').forEach(sortList);
      }
    }
  }

  // ---------------------------
  // Ingredient library: filter by recipe + deep-linking
  // ---------------------------
  function setupIngredientFiltering(){
    const ingredientsSection = q('#ingredients');
    if(!ingredientsSection) return;

    const select = q('#ingredientFilter');
    const clearBtn = q('#clearIngredientFilter') || q('#ingredientClearBtn');
    const linkWrap = q('#ingredientRecipeLink');

    if(!select) return;

    const ingredientCards = qsa('#ingredients .lib .card[id^="ing-"]');
    const ingredientById = new Map(ingredientCards.map(c => [c.id, c]));

    // Expose for history router
    window.BASELINE_scrollToIngredient = function(ingredientId){
      const el = ingredientById.get(ingredientId) || q(`#${CSS.escape(ingredientId)}`);
      if(el) el.scrollIntoView({behavior:'auto', block:'start'});
    };

    // Build recipe list from embedded recipe cards. Personal Care can also
    // register folder-backed recipes without duplicating their recipe body here.
    const recipeCards = qsa('#recipes .recipe.card.recipe-page[id]');
    const routePageFile = routePageFileFromPath(location.pathname || '');
    const isSkincare = routePageFile === 'baseline-natural-skincare.html';
    const isFood = routePageFile === 'baseline-food-approach.html';
    const recipes = recipeCards.map(card => {
      const h = q('h3', card);
      const name = (h && h.textContent ? h.textContent : (card.id || '')).trim();
      return { id: card.id, name, external:false, href:'' };
    });
    if(isFood && Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX)){
      window.BASELINE_FOOD_RECIPE_INDEX.forEach(recipe=>{
        if(!recipe || !recipe.id || recipes.some(existing=>existing.id===recipe.id)) return;
        recipes.push({
          id:String(recipe.id),
          name:String(recipe.title || recipe.id),
          external:true,
          href:String(recipe.href || '')
        });
      });
    }
    if(isSkincare){
      recipes.push({
        id:'r12',
        name:'Lip/ balm',
        external:true,
        href:'/baseline-natural-skincare/recipes/testing-lip-balm'
      });
    }

    // Build map: recipeId -> Set(ingredientIds).
    // Skincare recipe ingredient links are real record URLs, not recipe-path
    // hashes. This keeps one public URL responsible for one visible record and
    // lets browser Back/Forward restore the originating recipe naturally.
    const recipeToIngredients = new Map();
    if(isFood && Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX)){
      window.BASELINE_FOOD_RECIPE_INDEX.forEach(recipe=>{
        if(!recipe || !recipe.id) return;
        recipeToIngredients.set(String(recipe.id), new Set(
          Array.isArray(recipe.ingredients) ? recipe.ingredients.map(String) : []
        ));
      });
    }
    if(isSkincare){
      recipeToIngredients.set('r12', new Set([
        'ing-cocoa-butter','ing-mango-butter','ing-kokum-butter',
        'ing-apricot-kernel-oil','ing-avocado','ing-red-raspberry-seed-oil',
        'ing-candelilla-wax','ing-vitamin-e'
      ]));
    }
    qsa('#recipes a.ing-link[data-from-recipe][data-ingredient]').forEach(a=>{
      const rid = a.getAttribute('data-from-recipe');
      const iid = a.getAttribute('data-ingredient');
      if(!rid || !iid) return;
      if(!recipeToIngredients.has(rid)) recipeToIngredients.set(rid, new Set());
      recipeToIngredients.get(rid).add(iid);

      if(isSkincare){
        const cleanIngredientUrl = skincareIngredientUrlForId(iid, rid);
        if(cleanIngredientUrl) a.setAttribute('href', cleanIngredientUrl);
      }else if(isFood){
        const ingredientsBase = cleanUrlForTab('ingredients') || '/baseline-food-approach/ingredient-library';
        a.setAttribute('href', ingredientsBase + '?filter=' + encodeURIComponent(rid) + '#' + encodeURIComponent(iid));
      }
    });

    // Populate dropdown (replace existing options except “all”)
    select.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'All ingredients';
    select.appendChild(allOpt);

    // Alphabetical list by recipe name
    recipes
      .slice()
      .sort((a,b)=>a.name.localeCompare(b.name))
      .forEach(r=>{
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.name;
        select.appendChild(opt);
      });

    // If the select is using the themed enhancement, rebuild its menu now that options exist.
    try{ refreshEnhancedSelect(select); }catch(_e){}

    function applyFilter(recipeId){
      const showAll = !recipeId || recipeId === 'all';
      const allowed = showAll ? null : (recipeToIngredients.get(recipeId) || new Set());

      ingredientCards.forEach(card=>{
        if(showAll){
          card.style.display = '';
          return;
        }
        card.style.display = allowed.has(card.id) ? '' : 'none';
      });

      // Link to view the recipe
      if(linkWrap){
        linkWrap.innerHTML = '';
        try{ linkWrap.style.display = showAll ? 'none' : 'block'; }catch(_e){}
        if(!showAll){
          const recipe = recipes.find(r=>r.id===recipeId);
          const a = document.createElement('a');
          a.className = 'action';
          a.textContent = recipe ? `View recipe: ${recipe.name}` : 'View recipe';
          if(recipe && recipe.external && recipe.href){
            // Folder-backed recipes use native navigation. Do not feed them into
            // BASELINE_openRecipe because there is intentionally no embedded card.
            a.href = recipe.href;
          }else{
            a.href = `#${recipeId}`;
            a.addEventListener('click', (e)=>{
              e.preventDefault();
              if(typeof window.BASELINE_openRecipe === 'function'){
                window.BASELINE_openRecipe(recipeId);
              }else{
                if(typeof window.BASELINE_selectTab === 'function'){
                  window.BASELINE_selectTab('recipes', { silentHistory:true });
                }else{
                  const recipesTab = q('.tab[data-tab="recipes"], .tab[data-target="recipes"]');
                  if(recipesTab) recipesTab.click();
                }
              }
            });
          }
          linkWrap.appendChild(a);
        }
      }
    }

    // Expose so ingredient links can set the filter
    let suppressHist = false;

    window.BASELINE_setIngredientFilter = function(recipeId, opts){
      opts = opts || {};
      suppressHist = true;
      select.value = recipeId || 'all';
      applyFilter(select.value);
      try{ refreshEnhancedSelect(select); }catch(_e){}
      suppressHist = false;

      if(!opts.silentHistory){
        try{
          const rf = (select.value && select.value !== 'all') ? select.value : null;
          const ingredientsState = { kind: 'ingredients', recipeFilter: rf };
          setNavState(ingredientsState, { url: urlForNavState(ingredientsState) });
        }catch(_e){}
      }
    };

    select.addEventListener('change', ()=>{
      applyFilter(select.value);
      if(!suppressHist){
        try{
          const rf = (select.value && select.value !== 'all') ? select.value : null;
          const ingredientsState = { kind: 'ingredients', recipeFilter: rf };
          setNavState(ingredientsState, { url: urlForNavState(ingredientsState) });
        }catch(_e){}
      }
    });

    if(clearBtn){
      clearBtn.addEventListener('click', ()=>{
        select.value = 'all';
        applyFilter('all');
        try{ refreshEnhancedSelect(select); }catch(_e){}
        try{
          const ingredientsState = { kind: 'ingredients', recipeFilter: null };
          setNavState(ingredientsState, { url: urlForNavState(ingredientsState) });
        }catch(_e){}
      });
    }

    // Default: all (or restore from URL view-state hash)
    try{
      const hv = parseViewStateHash(location.hash || '');
      if(hv && hv.kind === 'tab' && hv.tabId === 'ingredients' && hv.recipeFilter){
        select.value = hv.recipeFilter;
        applyFilter(hv.recipeFilter);
      }else{
        applyFilter('all');
      }
    }catch(_e){
      applyFilter('all');
    }

    // Legacy hash-based ingredient clicks remain only for non-Skincare systems.
    // Skincare authors canonical /ingredient-library/<slug> URLs and never creates
    // a recipe#ing-* navigation state.
    if(!isSkincare) qsa('#recipes a.ing-link[data-from-recipe][data-ingredient]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href') || '';
        if(!isFood && !href.startsWith('#')) return;

        const ingredientId = a.getAttribute('data-ingredient') || (href.startsWith('#') ? href.slice(1).split('&')[0] : '');
        const recipeId = a.getAttribute('data-from-recipe');

        // Switch to ingredients tab
        e.preventDefault();
        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('ingredients', { silentHistory:true });
        }else{
          const ingredientsTab = q('.tab[data-tab="ingredients"], .tab[data-target="ingredients"]');
          if(ingredientsTab) ingredientsTab.click();
        }

        // Apply filter for that recipe
        if(recipeId){
          select.value = recipeId;
          applyFilter(recipeId);
          try{ refreshEnhancedSelect(select); }catch(_e){}
        }

        // Scroll to the ingredient card
        queueNavScroll(()=>{
          const el = ingredientById.get(ingredientId) || q(`#${CSS.escape(ingredientId)}`);
          if(el) el.scrollIntoView({behavior:'auto', block:'start'});
          const ingredientState = { kind: 'ingredient', ingredientId: ingredientId, recipeFilter: recipeId || null };
          const foodIngredientsBase = isFood ? (cleanUrlForTab('ingredients') || '/baseline-food-approach/ingredient-library') : '';
          const nextUrl = isFood
            ? (foodIngredientsBase + (recipeId ? ('?filter=' + encodeURIComponent(recipeId)) : '') + '#' + encodeURIComponent(ingredientId))
            : (urlWithoutHash() + (`#${ingredientId}` + (recipeId ? ('&filter=' + encodeURIComponent(recipeId)) : '')));
          setNavState(ingredientState, { url: nextUrl });
        }, 50);
      });
    });

    // Deep link: if landing on #ing-..., ensure ingredients tab is active
    const hash = (location.hash || '');
    if(hash.startsWith('#ing-')){
      const hv = parseViewStateHash(hash);
      const ingId = (hv && hv.ingredientId) ? hv.ingredientId : hash.slice(1).split('&')[0];

      if(typeof window.BASELINE_selectTab === 'function'){
        window.BASELINE_selectTab('ingredients', { silentHistory:true });
      }else{
        const ingredientsTab = q('.tab[data-tab="ingredients"], .tab[data-target="ingredients"]');
        if(ingredientsTab) ingredientsTab.click();
      }

      // If a filter is encoded in the URL, apply it.
      try{
        const rf = (hv && hv.recipeFilter) ? hv.recipeFilter : null;
        if(rf){
          select.value = rf;
          applyFilter(rf);
          try{ refreshEnhancedSelect(select); }catch(_e){}
        }
      }catch(_e){}

      // Allow layout to settle before scrolling
      queueNavScroll(()=>{
        const el = ingredientById.get(ingId) || q(`#${CSS.escape(ingId)}`);
        if(el) el.scrollIntoView({behavior:'auto', block:'start'});
      }, 60);
    }
  }

  // ---------------------------
  // Support library: deep-linking + cross-links
  // ---------------------------
  function setupSupportLibrary(){
    const supportSection = q('#support');
    if(!supportSection) return;

    const supportCards = qsa('#support .lib .card[id^="support-"]');
    const supportById = new Map(supportCards.map(c => [c.id, c]));

    window.BASELINE_scrollToSupportCard = function(cardId){
      const el = supportById.get(cardId) || q(`#${CSS.escape(cardId)}`);
      if(el) el.scrollIntoView({ behavior:'auto', block:'start' });
    };

    // Generic “jump to ingredient card” links (used in support library and elsewhere).
    qsa('a.ing-jump[href^="#ing-"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href') || '';
        if(!href.startsWith('#ing-')) return;
        const ingredientId = href.slice(1);

        e.preventDefault();
        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('ingredients', { silentHistory:true });
        }
        queueNavScroll(()=>{
          if(typeof window.BASELINE_scrollToIngredient === 'function'){
            window.BASELINE_scrollToIngredient(ingredientId);
          }
          setNavState({ kind:'ingredient', ingredientId: ingredientId, recipeFilter:null }, { url: urlWithoutHash() + `#${ingredientId}` });
        }, 50);
      });
    });

    // Support links: switch to Support tab and scroll to the referenced card.
    qsa('a.support-open, a[href^="#support="]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href') || '';
        if(!href.startsWith('#support=')) return;
        const cardId = decodeURIComponent(href.replace(/^#support=/, ''));
        if(!cardId) return;
        e.preventDefault();

        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('support', { silentHistory:true });
        }

        queueNavScroll(()=>{
          if(typeof window.BASELINE_scrollToSupportCard === 'function'){
            window.BASELINE_scrollToSupportCard(cardId);
          }
          setNavState({ kind:'support', supportId: cardId }, { url: urlWithoutHash() + `#support=${encodeURIComponent(cardId)}` });
        }, 60);
      });
    });

    // Recipe links inside the support library should open the relevant recipe view.
    qsa('#support a.recipe-open[href]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href') || '';
        let rid = (a.dataset && a.dataset.recipeId) ? a.dataset.recipeId : '';
        if(!rid && href.startsWith('#')) rid = href.slice(1);
        if(!rid){
          try{
            const u = new URL(href, document.baseURI || window.location.href);
            const m = decodeURIComponent(u.pathname || '').match(/\.html\/([^\/?#]+)\/?$/i);
            if(m && m[1]) rid = m[1];
          }catch(_e){}
        }
        rid = recipeIdForToken(rid);
        if(!rid) return;
        e.preventDefault();
        if(typeof window.BASELINE_openRecipe === 'function'){
          window.BASELINE_openRecipe(rid);
        }
      });
    });

    // Deep link: if landing on #support=..., ensure Support tab is active.
    const hash = (location.hash || '');
    if(hash.startsWith('#support=')){
      const cardId = decodeURIComponent(hash.replace(/^#support=/,''));
      if(typeof window.BASELINE_selectTab === 'function'){
        window.BASELINE_selectTab('support', { silentHistory:true });
      }
      queueNavScroll(()=>{
        if(cardId && typeof window.BASELINE_scrollToSupportCard === 'function'){
          window.BASELINE_scrollToSupportCard(cardId);
        }
      }, 70);
    }
  }

  // ---------------------------
  // Per-recipe multiplier + measurement conversions
  // ---------------------------
  function setupRecipeTools(opts){
    opts = opts || {};
    const onlyId = opts.onlyId || null;

    const recipeScope = q('#recipes');
    const recipeSelectorBase = recipeScope
      ? '#recipes .recipe.card.recipe-page'
      : '.recipe.card.recipe-page';

    let recipes = [];
    if(onlyId){
      try{
        recipes = qsa(recipeSelectorBase + '[id="' + CSS.escape(String(onlyId)) + '"]');
      }catch(_e){
        recipes = qsa(recipeSelectorBase + '[id]');
      }
    }else{
      recipes = qsa(recipeSelectorBase + '[id]');
    }
    if(!recipes.length) return;

    setupRecipeActionBars();

    const app = (document.body && document.body.dataset && document.body.dataset.app) ? document.body.dataset.app : 'food';
    const PROFILES = (window.BASELINE_INGREDIENT_PROFILES && window.BASELINE_INGREDIENT_PROFILES[app]) || {};
    const MEAS = window.BASELINE_MEASURE_CONSTANTS || { ml_per_tsp: 5, ml_per_tbsp: 15, ml_per_cup: 250, ml_per_drop: 0.05 };

    const FRACTIONS = {
      "¼": 0.25, "½": 0.5, "¾": 0.75,
      "⅐": 1/7, "⅑": 1/9, "⅒": 1/10,
      "⅓": 1/3, "⅔": 2/3,
      "⅕": 0.2, "⅖": 0.4, "⅗": 0.6, "⅘": 0.8,
      "⅙": 1/6, "⅚": 5/6,
      "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875
    };

    function isFractionChar(ch){ return Object.prototype.hasOwnProperty.call(FRACTIONS, ch); }

    function canonicalUnit(u){
      if(!u) return '';
      const s = String(u).trim().toLowerCase();
      if(s.startsWith('cup')) return 'cup';
      if(s === 'tbsp' || s.startsWith('tablespoon')) return 'tbsp';
      if(s === 'tsp' || s.startsWith('teaspoon')) return 'tsp';
      if(s === 'g' || s.startsWith('gram')) return 'g';
      if(s === 'kg' || s.startsWith('kilo')) return 'kg';
      if(s === 'ml') return 'ml';
      if(s === 'l' || s.startsWith('litre') || s.startsWith('liter')) return 'l';
      if(s.startsWith('drop')) return 'drop';
      if(s.startsWith('pinch')) return 'pinch';
      return s;
    }

    function parseSingleQty(raw){
      let s = String(raw).trim();
      if(!s) return NaN;

      // "1 1/2" or "1 ½"
      if(/\s/.test(s)){
        const parts = s.split(/\s+/).filter(Boolean);
        let sum = 0;
        parts.forEach(p=>{ sum += parseSingleQty(p); });
        return sum;
      }

      // "1/2"
      if(s.includes('/')){
        const [a,b] = s.split('/');
        const n = parseFloat(a);
        const d = parseFloat(b);
        if(Number.isFinite(n) && Number.isFinite(d) && d !== 0) return n/d;
      }

      let total = 0;
      const m = s.match(/^\d+(?:\.\d+)?/);
      if(m){
        total += parseFloat(m[0]);
        s = s.slice(m[0].length);
      }

      // Remaining fraction chars
      for(const ch of s){
        if(isFractionChar(ch)) total += FRACTIONS[ch];
      }

      return total;
    }

    function parseQtyToken(raw){
      const s = String(raw).trim().replace(/[—-]/g,'–'); // normalise dash
      const parts = s.split('–').map(p=>p.trim()).filter(Boolean);
      if(parts.length >= 2){
        return { min: parseSingleQty(parts[0]), max: parseSingleQty(parts[1]) };
      }
      const v = parseSingleQty(s);
      return { min: v, max: v };
    }

    function formatFraction(value, denoms){
          const sign = value < 0 ? '-' : '';
          const v = Math.abs(value);

          const whole = Math.floor(v + 1e-9);
          const frac = v - whole;

          // Near integer
          if(frac < 0.02){
            return sign + String(whole);
          }
          if(1 - frac < 0.02){
            return sign + String(whole + 1);
          }

          let best = null;

          for(const d of denoms){
            const n = Math.round(frac * d);

            if(n === 0) continue;

            // Avoid premature “carry” when a coarse denominator rounds up (e.g., 0.75 with denom 2).
            // Track carry as a candidate and let finer denominators win when they fit better.
            if(n === d){
              const err = Math.abs(frac - 1);
              if(!best || err < best.err){
                best = { kind: 'carry', err };
              }
              continue;
            }

            const approx = n / d;
            const err = Math.abs(frac - approx);

            if(!best || err < best.err){
              best = { kind: 'frac', n, d, err };
            }
          }

          if(!best){
            // fallback
            return sign + v.toFixed(2).replace(/\.00$/,'');
          }

          if(best.kind === 'carry'){
            return sign + String(whole + 1);
          }

          // Try unicode for common fractions
          const fracKey = `${best.n}/${best.d}`;
          const unicode = {
            "1/2":"½","1/4":"¼","3/4":"¾",
            "1/3":"⅓","2/3":"⅔",
            "1/5":"⅕","2/5":"⅖","3/5":"⅗","4/5":"⅘",
            "1/6":"⅙","5/6":"⅚",
            "1/8":"⅛","3/8":"⅜","5/8":"⅝","7/8":"⅞"
          }[fracKey];

          const fracStr = unicode || `${best.n}/${best.d}`;
          if(whole === 0){
            return sign + fracStr;
          }
          return sign + `${whole}${fracStr}`;
        }


    function formatNumber(value, style){
      if(!Number.isFinite(value)) return '';
      const v = value;
      const abs = Math.abs(v);

      function stripZeros(s){
        return String(s)
          .replace(/\.0+$/,'')
          .replace(/(\.\d*?)0+$/,'$1')
          .replace(/\.$/,'');
      }

      function smallDecimal(val){
        const a = Math.abs(val);
        if(a === 0) return '0';
        if(a < 0.01) return stripZeros((Math.round(val * 1000) / 1000).toFixed(3));
        if(a < 0.1) return stripZeros((Math.round(val * 100) / 100).toFixed(2));
        if(a < 1)   return stripZeros((Math.round(val * 10) / 10).toFixed(1));
        return stripZeros((Math.round(val * 100) / 100).toFixed(2));
      }

      if(style === 'g'){
        // For grams, do not round away meaningful decimals.
        // (e.g., 38.5 g must remain 38.5 g so multipliers stay transparent.)
        const rounded = (abs >= 1) ? (Math.round(v * 10) / 10) : (Math.round(v * 100) / 100);
        return stripZeros(rounded.toFixed(abs >= 1 ? 1 : 2));
      }

      if(style === 'ml'){
        // For ml: keep practical kitchen precision.
        // - >= 1 ml: 0.1 ml precision
        // - < 1 ml: 0.1 ml precision (so tiny amounts don't imply false exactness)
        const rounded = (Math.round(v * 10) / 10);
        return stripZeros(rounded.toFixed(1));
      }

      if(style === 'drop'){
        return String(Math.round(v));
      }

      if(style === 'l' || style === 'kg'){
        if(abs >= 10) return String(Math.round(v));
        return stripZeros((Math.round(v * 100) / 100).toFixed(2));
      }

      // cups/spoons/count
      if(style === 'tsp' || style === 'tbsp' || style === 'cup' || style === 'count'){
        // Avoid displaying 0 for very small-but-nonzero amounts.
        if(abs > 0 && abs < 0.125) return smallDecimal(v);
        return formatFraction(v, [2,3,4,8]);
      }

      return formatFraction(v, [2,3,4,8]);
    }

    function unitLabel(unit, value){
      const u = canonicalUnit(unit);
      const abs = Math.abs(value);
      const plural = abs !== 1;

      if(u === 'cup') return plural ? 'cups' : 'cup';
      if(u === 'tbsp') return 'tbsp';
      if(u === 'tsp') return 'tsp';
      if(u === 'g') return 'g';
      if(u === 'kg') return 'kg';
      if(u === 'ml') return 'ml';
      if(u === 'l') return plural ? 'litres' : 'litre';
      if(u === 'drop') return plural ? 'drops' : 'drop';
      if(u === 'pinch') return plural ? 'pinches' : 'pinch';
      return unit || '';
    }

    function getProfile(ingredientId){
      return (ingredientId && PROFILES && PROFILES[ingredientId]) ? PROFILES[ingredientId] : null;
    }

    function toGrams(value, unit, profile){
      const u = canonicalUnit(unit);
      if(!Number.isFinite(value)) return null;

      if(u === 'g') return value;
      if(u === 'kg') return value * 1000;

      if(u === 'ml'){
        if(profile && typeof profile.g_per_ml === 'number') return value * profile.g_per_ml;
        return null;
      }
      if(u === 'l'){
        if(profile && typeof profile.g_per_ml === 'number') return value * 1000 * profile.g_per_ml;
        return null;
      }

      if(u === 'cup'){
        if(profile && typeof profile.g_per_cup === 'number') return value * profile.g_per_cup;
        if(profile && typeof profile.g_per_ml === 'number') return value * MEAS.ml_per_cup * profile.g_per_ml;
        return null;
      }
      if(u === 'tbsp'){
        if(profile && typeof profile.g_per_tbsp === 'number') return value * profile.g_per_tbsp;
        if(profile && typeof profile.g_per_cup === 'number') return value * (profile.g_per_cup / (MEAS.ml_per_cup / MEAS.ml_per_tbsp));
        if(profile && typeof profile.g_per_ml === 'number') return value * MEAS.ml_per_tbsp * profile.g_per_ml;
        return null;
      }
      if(u === 'tsp'){
        if(profile && typeof profile.g_per_tsp === 'number') return value * profile.g_per_tsp;
        if(profile && typeof profile.g_per_tbsp === 'number') return value * (profile.g_per_tbsp / 3);
        if(profile && typeof profile.g_per_ml === 'number') return value * MEAS.ml_per_tsp * profile.g_per_ml;
        return null;
      }

      if(u === 'count'){
        if(profile && typeof profile.g_per_unit === 'number') return value * profile.g_per_unit;
        if(profile && typeof profile.ml_per_unit === 'number' && typeof profile.g_per_ml === 'number'){
          return value * profile.ml_per_unit * profile.g_per_ml;
        }
        return null;
      }

      if(u === 'drop'){
        if(profile && typeof profile.g_per_drop === 'number') return value * profile.g_per_drop;
        if(profile && typeof profile.g_per_ml === 'number'){
          const mlPerDrop = (profile && typeof profile.ml_per_drop === 'number') ? profile.ml_per_drop : MEAS.ml_per_drop;
          return value * mlPerDrop * profile.g_per_ml;
        }
        return null;
      }

      if(u === 'pinch'){
        if(profile && typeof profile.g_per_pinch === 'number') return value * profile.g_per_pinch;
        // Practical fallback: 1 pinch ≈ 1/16 tsp
        if(profile && typeof profile.g_per_tsp === 'number') return value * (profile.g_per_tsp / 16);
        if(profile && typeof profile.g_per_tbsp === 'number') return value * (profile.g_per_tbsp / 48);
        if(profile && typeof profile.g_per_ml === 'number') return value * (MEAS.ml_per_tsp / 16) * profile.g_per_ml;
        return null;
      }

      return null;
    }

    function toMl(value, unit, profile){
      const u = canonicalUnit(unit);
      if(!Number.isFinite(value)) return null;

      if(u === 'ml') return value;
      if(u === 'l') return value * 1000;

      if(u === 'cup') return value * MEAS.ml_per_cup;
      if(u === 'tbsp') return value * MEAS.ml_per_tbsp;
      if(u === 'tsp') return value * MEAS.ml_per_tsp;
      if(u === 'pinch') return value * (MEAS.ml_per_tsp / 16);
      

      if(u === 'g'){
        if(profile && typeof profile.g_per_ml === 'number' && profile.g_per_ml !== 0) return value / profile.g_per_ml;
        if(profile && typeof profile.g_per_cup === 'number' && profile.g_per_cup !== 0) return (value / profile.g_per_cup) * MEAS.ml_per_cup;
        // Support powders defined via spoon weights (e.g., guar gum: g_per_tsp).
        // This ensures Volume / Cups & Spoons modes don't fall back to grams when a
        // reasonable teaspoon/tablespoon conversion exists.
        if(profile && typeof profile.g_per_tbsp === 'number' && profile.g_per_tbsp !== 0){
          return (value / profile.g_per_tbsp) * MEAS.ml_per_tbsp;
        }
        if(profile && typeof profile.g_per_tsp === 'number' && profile.g_per_tsp !== 0){
          return (value / profile.g_per_tsp) * MEAS.ml_per_tsp;
        }
        return null;
      }
      if(u === 'kg'){
        const grams = value * 1000;
        return toMl(grams, 'g', profile);
      }

      if(u === 'count'){
        if(profile && typeof profile.ml_per_unit === 'number') return value * profile.ml_per_unit;
        return null;
      }

      if(u === 'drop'){
        const mlPerDrop = (profile && typeof profile.ml_per_drop === 'number') ? profile.ml_per_drop : MEAS.ml_per_drop;
        return value * mlPerDrop;
      }

      return null;
    }

    function chooseCupSpoonUnit(ml){
      if(ml === null || !Number.isFinite(ml)) return null;
      // Prefer cups for bigger volumes, tbsp for mid, tsp for small.
      if(ml >= MEAS.ml_per_cup / 4) return { unit: 'cup', unitMl: MEAS.ml_per_cup, style: 'cup' };
      if(ml >= MEAS.ml_per_tbsp / 2) return { unit: 'tbsp', unitMl: MEAS.ml_per_tbsp, style: 'tbsp' };
      return { unit: 'tsp', unitMl: MEAS.ml_per_tsp, style: 'tsp' };
    }

    function stripZeros(s){
      return String(s)
        .replace(/\.0+$/,'')
        .replace(/(\.\d*?)0+$/,'$1')
        .replace(/\.$/,'');
    }

    function isNiceFraction(v, denoms, tol){
      if(!Number.isFinite(v)) return false;
      denoms = denoms || [2,3,4,8];
      tol = (typeof tol === 'number') ? tol : 0.02;

      const abs = Math.abs(v);
      // Near integer
      if(Math.abs(abs - Math.round(abs)) <= tol) return true;

      const whole = Math.floor(abs + 1e-9);
      const frac = abs - whole;

      let bestErr = Infinity;
      for(const d of denoms){
        const n = Math.round(frac * d);
        const approx = n / d;
        const err = Math.abs(frac - approx);
        if(err < bestErr) bestErr = err;
      }
      return bestErr <= tol;
    }

    function formatKitchenValue(v, unit){
      // Precision-first: if a clean fraction, show fraction; otherwise show decimal (no ml in cups mode).
      const denoms = [2,3,4,8];
      if(isNiceFraction(v, denoms, 0.02)){
        return formatFraction(v, denoms);
      }
      const abs = Math.abs(v);
      // Keep sensible decimals
      const dec = (abs < 1) ? 2 : (abs < 10 ? 2 : 1);
      return stripZeros((Math.round(v * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec));
    }

    function dropsFromMl(ml, profile){
      const mlPerDrop = (profile && typeof profile.ml_per_drop === 'number') ? profile.ml_per_drop : MEAS.ml_per_drop;
      if(!Number.isFinite(mlPerDrop) || mlPerDrop <= 0) return null;
      return ml / mlPerDrop;
    }

    function renderDropsFromMl(mlMin, mlMax, profile){
      const dMin = dropsFromMl(mlMin, profile);
      const dMax = dropsFromMl(mlMax, profile);
      if(dMin === null || dMax === null) return null;
      const min = Math.max(0, Math.round(dMin));
      const max = Math.max(0, Math.round(dMax));
      if(Math.abs(min - max) <= 0){
        return { text: String(min), value: min };
      }
      return { text: `${String(Math.min(min,max))}–${String(Math.max(min,max))}`, value: Math.max(min,max) };
    }

    function renderRange(min, max, style){
      if(!Number.isFinite(min)) return '';
      const same = Number.isFinite(max) ? Math.abs(min - max) < 1e-6 : true;
      if(same){
        return formatNumber(min, style);
      }
      return `${formatNumber(min, style)}–${formatNumber(max, style)}`;
    }

    function isKitchenRangeViable(min, max){
      if(!Number.isFinite(min)) return false;
      const hi = Number.isFinite(max) ? max : min;
      return isNiceFraction(min, [2,3,4,8], 0.02) && isNiceFraction(hi, [2,3,4,8], 0.02);
    }

    function isLikelyLiquidProfile(profile, ingredientId){
      const id = String(ingredientId || '').toLowerCase();
      if(/(?:^|-)water(?:$|-)|lemon|hydrosol|witchhazel|rosewater|vinegar|olive|argan|jojoba|watermelon|mct|castor|cucumber/.test(id)) return true;
      const label = String((profile && profile.label) || '').toLowerCase();
      return /water|juice|oil|hydrosol|vinegar|witch hazel|rose water/.test(label);
    }

    function preferredMetricMode(unit, profile, ingredientId){
      const u = canonicalUnit(unit);
      if(u === 'ml' || u === 'l' || u === 'drop') return 'volume';
      if(u === 'g' || u === 'kg') return 'weight';
      if(u === 'count'){
        if(profile && typeof profile.g_per_unit === 'number') return 'weight';
        if(profile && typeof profile.ml_per_unit === 'number') return 'volume';
        return 'standard';
      }
      if(u === 'cup' || u === 'tbsp' || u === 'tsp' || u === 'pinch'){
        if(isLikelyLiquidProfile(profile, ingredientId)) return 'volume';
        if(toGrams(1, u, profile) !== null) return 'weight';
        if(toMl(1, u, profile) !== null) return 'volume';
      }
      return 'standard';
    }

    function renderMetricPrimaryWithKitchenSecondary(base, opts, kitchen){
      const metricMode = preferredMetricMode(base.unit, opts.profile, opts.ingredientId);
      const resolvedMode = (metricMode === 'standard') ? 'standard' : metricMode;
      const metricDisp = computeDisplay(base, { ...opts, mode: resolvedMode, _skipKitchenFallback: true });
      const metricText = (metricDisp && metricDisp.text) ? metricDisp.text : '';
      if(!metricText) return { text: kitchen.text };
      return { text: `${metricText} (${kitchen.text})` };
    }

    function computeDisplay(base, opts){
      const { multiplier, mode, profile, ingredientId } = opts;
      const unit = canonicalUnit(base.unit);
      const scaledMin = base.min * multiplier;
      const scaledMax = base.max * multiplier;

      // Drops: keep drops as primary, show acknowledgements in brackets for weight/volume/cups
      if(unit === 'drop'){
        const dropsText = `${renderRange(scaledMin, scaledMax, 'drop')} ${unitLabel('drop', (Number.isFinite(scaledMax)?scaledMax:scaledMin))}`;

        if(mode === 'weight'){
          const gMin = toGrams(scaledMin, 'drop', profile);
          const gMax = toGrams(scaledMax, 'drop', profile);
          if(gMin !== null){
            const gText = renderRange(gMin, gMax, 'g');
            return { text: `${dropsText} (${gText} g)` };
          }
          return { text: dropsText };
        }

        if(mode === 'volume'){
          const mlMin = toMl(scaledMin, 'drop', profile);
          const mlMax = toMl(scaledMax, 'drop', profile);
          if(mlMin !== null){
            const mlText = renderRange(mlMin, mlMax, 'ml');
            return { text: `${dropsText} (${mlText} ml)` };
          }
          return { text: dropsText };
        }

        if(mode === 'cups'){
          // In cups/spoons mode we do not display ml; drops are already a kitchen tool.
          return { text: dropsText };
        }

        return { text: dropsText };
      }

      // Standard: scale in original unit
      if(mode === 'standard'){
        const isSeaSalt = (ingredientId === 'ing-sea-salt');

        // If an ingredient can be reasonably expressed as a pinch at tiny scales, do so.
        if(isSeaSalt && profile && typeof profile.g_per_pinch === 'number' && profile.g_per_pinch > 0){
          const gMin = toGrams(scaledMin, unit, profile);
          const gMax = toGrams(scaledMax, unit, profile);
          if(gMin !== null){
            const pinchUnits = Math.max(gMin, gMax) / profile.g_per_pinch;
            if(pinchUnits > 0 && pinchUnits <= 1.25){
              const gText = renderRange(gMin, gMax, 'g');
              return { text: `pinch (≈ ${gText} g)` };
            }
          }
        }

        // Present small litres and kilograms in ml / g to avoid "0 litres" / "0 kg".
        if(unit === 'l'){
          const mlMin = scaledMin * 1000;
          const mlMax = scaledMax * 1000;
          if(Math.max(mlMin, mlMax) < 1000){
            const mlText = renderRange(mlMin, mlMax, 'ml');
            return { text: `${mlText} ml` };
          }
          const lText = renderRange(scaledMin, scaledMax, 'l');
          return { text: `${lText} ${unitLabel('l', (Number.isFinite(scaledMax)?scaledMax:scaledMin))}`.trim() };
        }

        if(unit === 'kg'){
          const gMin = scaledMin * 1000;
          const gMax = scaledMax * 1000;
          if(Math.max(gMin, gMax) < 1000){
            const gText = renderRange(gMin, gMax, 'g');
            // For tiny gram amounts, add a practical kitchen cue.
        if(Math.max(gMin, gMax) > 0 && Math.max(gMin, gMax) < 1){
          return { text: `${gText} g (a pinch)` };
        }

        return { text: `${gText} g` };
          }
          const kgText = renderRange(scaledMin, scaledMax, 'kg');
          return { text: `${kgText} ${unitLabel('kg', (Number.isFinite(scaledMax)?scaledMax:scaledMin))}`.trim() };
        }

        const style = (unit === 'tbsp') ? 'tbsp'
          : (unit === 'tsp') ? 'tsp'
          : (unit === 'cup') ? 'cup'
          : (unit === 'count') ? 'count'
          : (unit === 'g') ? 'g'
          : (unit === 'ml') ? 'ml'
          : unit;

        const qtyText = renderRange(scaledMin, scaledMax, style);
        const label = unitLabel(unit, Number.isFinite(scaledMax)?scaledMax:scaledMin);

        // Practical cues for tiny quantities (avoid misleading "0" and keep instructions usable).
        if(unit === 'g' && Math.max(scaledMin, scaledMax) > 0 && Math.max(scaledMin, scaledMax) < 1){
          return { text: `${qtyText} ${label} (a pinch)` };
        }
        if(unit === 'ml' && Math.max(scaledMin, scaledMax) > 0 && Math.max(scaledMin, scaledMax) < 1){
          const drops = renderDropsFromMl(scaledMin, scaledMax, profile);
          const dropHint = drops ? ` (≈ ${drops.text} ${unitLabel('drop', drops.value)})` : ' (a drop)';
          return { text: `${qtyText} ${label}${dropHint}` };
        }

        // count has no label
        return { text: unit === 'count' ? qtyText : `${qtyText} ${label}`.trim() };
      }

      // Weight mode: prefer grams
      if(mode === 'weight'){
        const gMin = toGrams(scaledMin, unit, profile);
        const gMax = toGrams(scaledMax, unit, profile);
        if(gMin === null) {
          // fallback
          const qtyText = renderRange(scaledMin, scaledMax, unit === 'g' ? 'g' : 'cup');
          const label = unitLabel(unit, Number.isFinite(scaledMax)?scaledMax:scaledMin);
          return { text: unit === 'count' ? qtyText : `${qtyText} ${label}`.trim() };
        }
        const gText = renderRange(gMin, gMax, 'g');

        // If we converted from a count-based ingredient, keep the count context visible.
        if(unit === 'count' && profile && typeof profile.g_per_unit === 'number'){
          const countText = renderRange(scaledMin, scaledMax, 'cup');
          const label = profile.label || 'units';
          return { text: `${gText} g (≈ ${countText} × ${label})` };
        }

        // For tiny gram amounts, add a practical kitchen cue.
        if(Math.max(gMin, gMax) > 0 && Math.max(gMin, gMax) < 1){
          return { text: `${gText} g (a pinch)` };
        }

        return { text: `${gText} g` };
      }

      // Volume mode: prefer ml/l
      if(mode === 'volume'){
        const mlMin = toMl(scaledMin, unit, profile);
        const mlMax = toMl(scaledMax, unit, profile);
        if(mlMin === null){
          // fallback
          const qtyText = renderRange(scaledMin, scaledMax, unit === 'g' ? 'g' : 'cup');
          const label = unitLabel(unit, Number.isFinite(scaledMax)?scaledMax:scaledMin);
          return { text: unit === 'count' ? qtyText : `${qtyText} ${label}`.trim() };
        }

        // Present as litres for >= 1000 ml
        const useL = (Math.max(mlMin, mlMax) >= 1000);
        if(useL){
          const lMin = mlMin / 1000;
          const lMax = mlMax / 1000;
          const lText = renderRange(lMin, lMax, 'l');
          return { text: `${lText} ${unitLabel('l', (Number.isFinite(lMax)?lMax:lMin))}` };
        }

        const mlText = renderRange(mlMin, mlMax, 'ml');

        // If we converted from a count-based ingredient, keep the count context visible.
        if(unit === 'count' && profile && typeof profile.ml_per_unit === 'number'){
          const countText = renderRange(scaledMin, scaledMax, 'cup');
          const label = profile.label || 'units';
          return { text: `${mlText} ml (≈ ${countText} × ${label})` };
        }

        // For very small liquid amounts, keep ml precision and add a practical cue.
        if(Math.max(mlMin, mlMax) > 0 && Math.max(mlMin, mlMax) < 1){
          const drops = renderDropsFromMl(mlMin, mlMax, profile);
          const dropHint = drops ? ` (≈ ${drops.text} ${unitLabel('drop', drops.value)})` : ' (a drop)';
          return { text: `${mlText} ml${dropHint}` };
        }

        return { text: `${mlText} ml` };
      }

      // Measuring cups/spoons mode
      // - Default: show kitchen units (cups/tbsp/tsp).
      // - If the ingredient is expressed in metric (g/ml) and should stay metric for precision,
      //   show metric first with a kitchen bracket (e.g., "38 g (1/27 cup)").
      if(mode === 'cups'){
        const mlMin = toMl(scaledMin, unit, profile);
        const mlMax = toMl(scaledMax, unit, profile);

        const metricPrimary = (unit === 'g' || unit === 'kg' || unit === 'ml' || unit === 'l') || (profile && profile.force_metric_in_cups === true);

        // Metric-first branch (precision): keep g/ml as primary, add a kitchen bracket when we can.
        if(metricPrimary){
          let metricText = '';
          try{
            const metricDisp = computeDisplay(base, { multiplier, mode: 'standard', profile, ingredientId });
            metricText = (metricDisp && metricDisp.text) ? metricDisp.text : '';
          }catch(_e){}

          // Kitchen bracket (only when we have a usable volume estimate).
          if(mlMin !== null){
            // Very small amounts: show drops (no ml in this mode).
            if(Math.max(mlMin, mlMax) > 0 && Math.max(mlMin, mlMax) < 1){
              const drops = renderDropsFromMl(mlMin, mlMax, profile);
              if(drops){
                const baseOut = metricText || (unit === 'g' || unit === 'kg' ? `${renderRange(scaledMin, scaledMax, 'g')} g` : `${renderRange(mlMin, mlMax, 'ml')} ml`);
                return { text: `${baseOut} (${drops.text} ${unitLabel('drop', drops.value)})` };
              }
              return { text: metricText || '≈ 1 drop' };
            }

            let pick = chooseCupSpoonUnit(Math.max(mlMin, mlMax));
            if(!pick) pick = { unit:'tsp', unitMl: MEAS.ml_per_tsp };

            const vMin = mlMin / pick.unitMl;
            const vMax = mlMax / pick.unitMl;
            const same = Math.abs(vMin - vMax) < 1e-6;

            let kText = '';
            if(same){
              kText = formatKitchenValue(vMin, pick.unit);
            }else{
              kText = `${formatKitchenValue(vMin, pick.unit)}–${formatKitchenValue(vMax, pick.unit)}`;
            }

            const kLabel = unitLabel(pick.unit, (Number.isFinite(vMax)?vMax:vMin));
            const baseOut = metricText || (unit === 'g' || unit === 'kg' ? `${renderRange(scaledMin, scaledMax, 'g')} g` : `${renderRange(mlMin, mlMax, 'ml')} ml`);
            return { text: `${baseOut} (${kText} ${kLabel})`.trim() };
          }

          // If we cannot estimate a volume (missing profile), keep metric only.
          if(metricText) return { text: metricText };

          // Last resort fallback
          const qtyText = renderRange(scaledMin, scaledMax, unit === 'kg' ? 'kg' : (unit === 'l' ? 'l' : unit));
          const label = unitLabel(unit, (Number.isFinite(scaledMax)?scaledMax:scaledMin));
          return { text: unit === 'count' ? qtyText : `${qtyText} ${label}`.trim() };
        }

        // Kitchen-first branch (default)
        if(mlMin === null){
          // fallback: keep original unit; add a best-effort kitchen bracket when possible.
          const style = (unit === 'tbsp') ? 'tbsp'
            : (unit === 'tsp') ? 'tsp'
            : (unit === 'cup') ? 'cup'
            : (unit === 'count') ? 'count'
            : (unit === 'g') ? 'g'
            : unit;

          const qtyText = renderRange(scaledMin, scaledMax, style);
          const label = unitLabel(unit, Number.isFinite(scaledMax)?scaledMax:scaledMin);
          let baseText = (unit === 'count') ? qtyText : `${qtyText} ${label}`.trim();

          // If we cannot convert grams to kitchen units (missing profile), approximate 1 g ≈ 1 ml to provide a bracket cue.
          if(unit === 'g'){
            try{
              const approxMlMin = scaledMin;
              const approxMlMax = scaledMax;
              let pick = chooseCupSpoonUnit(Math.max(approxMlMin, approxMlMax));
              if(!pick) pick = { unit:'tsp', unitMl: MEAS.ml_per_tsp };
              const vMin = approxMlMin / pick.unitMl;
              const vMax = approxMlMax / pick.unitMl;
              const same = Math.abs(vMin - vMax) < 1e-6;
              const kText = same ? formatKitchenValue(vMin, pick.unit) : `${formatKitchenValue(vMin, pick.unit)}–${formatKitchenValue(vMax, pick.unit)}`;
              const kLabel = unitLabel(pick.unit, (Number.isFinite(vMax)?vMax:vMin));
              baseText = `${baseText} (${kText} ${kLabel})`.trim();
            }catch(_e){}
          }
          return { text: baseText };
        }

        // Very small amounts: show drops (no ml in this mode)
        if(Math.max(mlMin, mlMax) > 0 && Math.max(mlMin, mlMax) < 1){
          const drops = renderDropsFromMl(mlMin, mlMax, profile);
          if(drops){
            return { text: `≈ ${drops.text} ${unitLabel('drop', drops.value)}` };
          }
          return { text: '≈ 1 drop' };
        }

        // Choose a kitchen tool unit by magnitude.
        let pick = chooseCupSpoonUnit(Math.max(mlMin, mlMax));
        if(!pick) pick = { unit:'tsp', unitMl: MEAS.ml_per_tsp };

        const vMin = mlMin / pick.unitMl;
        const vMax = mlMax / pick.unitMl;

        const same = Math.abs(vMin - vMax) < 1e-6;
        let qtyText = '';
        if(same){
          qtyText = formatKitchenValue(vMin, pick.unit);
        }else{
          qtyText = `${formatKitchenValue(vMin, pick.unit)}–${formatKitchenValue(vMax, pick.unit)}`;
        }

        const label = unitLabel(pick.unit, (Number.isFinite(vMax)?vMax:vMin));
        const kitchenText = `${qtyText} ${label}`.trim();

        // Sitewide rule: if the cups/spoons amount is awkward to measure,
        // switch to metric primary and keep the kitchen amount in brackets.
        if(opts && opts._skipKitchenFallback !== true && !isKitchenRangeViable(vMin, vMax)){
          return renderMetricPrimaryWithKitchenSecondary(base, opts, { text: kitchenText, unit: pick.unit, min: vMin, max: vMax });
        }

        return { text: kitchenText };
      }
      // Fallback
      return { text: '' };
    }

    function parseLeadingAmountFromText(text){
      const original = String(text || '');
      const leadingWs = (original.match(/^\s+/) || [''])[0];
      const t = original.slice(leadingWs.length);

      // Pinch
      if(/^pinch\b/i.test(t)){
        return {
          leadingWs,
          matchedText: 'Pinch',
          restText: t.replace(/^pinch\b/i,'').replace(/^\s+/, ' '),
          unit: 'pinch',
          min: 1,
          max: 1
        };
      }

      // Read quantity-ish characters from the start
      let i = 0;
      while(i < t.length){
        const ch = t[i];

        // Allow spaces *inside* mixed fractions (e.g., "1 1/2"), but not trailing spaces.
        if(ch === ' '){
          const next = t[i+1] || '';
          const nextOk =
            (next >= '0' && next <= '9') ||
            next === '/' ||
            isFractionChar(next);
          if(nextOk){
            i++;
            continue;
          }
          break;
        }

        const ok =
          (ch >= '0' && ch <= '9') ||
          ch === '.' || ch === '/' ||
          ch === '–' || ch === '-' || ch === '—' ||
          isFractionChar(ch);

        if(!ok) break;
        i++;
      }

      const qtyRaw = t.slice(0,i).trim();
      if(!qtyRaw) return null;

      let rest = t.slice(i);

      // Unit token (if present)
      const restTrim = rest.replace(/^\s+/, '');
      const unitMatch = restTrim.match(/^(cups?|cup|tbsp|tablespoons?|tsp|teaspoons?|ml|g|kg|l|litre|liter|drops?|drop|pinch(?:es)?)(\b|$)/i);

      let unitRaw = '';
      let afterUnit = restTrim;

      if(unitMatch){
        unitRaw = unitMatch[1];
        afterUnit = restTrim.slice(unitMatch[1].length);
      }

      const unit = unitRaw ? canonicalUnit(unitRaw) : 'count';
      const qty = parseQtyToken(qtyRaw);

      const matchedText = (unitRaw ? `${qtyRaw} ${unitRaw}` : qtyRaw).trim();
      const restText = (unitRaw ? afterUnit : rest).replace(/^\s+/, ' ');

      return {
        leadingWs,
        matchedText,
        restText,
        unit,
        min: qty.min,
        max: qty.max
      };
    }

    function ensureIngredientIdsOnLis(recipeEl){
      qsa('ul li', recipeEl).forEach(li=>{
        if(li.dataset && li.dataset.ingredient) return;
        const a = q('a.ing-link[data-ingredient]', li);
        if(a && a.dataset.ingredient){
          li.dataset.ingredient = a.dataset.ingredient;
        }
      });
    }

    function wrapAmounts(recipeEl){
      // Wrap amounts opportunistically.
      // Note: we do NOT hard-return after the first pass because recipes can be opened/closed,
      // and some DOM is constructed lazily (e.g., scale-by-ingredient blocks).
      ensureIngredientIdsOnLis(recipeEl);

      qsa('ul li', recipeEl).forEach(li=>{
        // Skip if already has an .amt span or if this is a thickness-swap-driven line
        if(q('.amt', li)) return;
        if(q('.thickness-swap', li) && !li.textContent.trim().match(/^\d/)){
          // Lines that start with a thickness span are handled separately.
          return;
        }

        // Find the first meaningful text node
        const firstTextNode = Array.from(li.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.nodeValue && n.nodeValue.trim().length);
        if(!firstTextNode) return;

        const parsed = parseLeadingAmountFromText(firstTextNode.nodeValue);
        if(!parsed) return;

        // Create span
        const span = document.createElement('span');
        span.className = 'amt';
        span.dataset.baseMin = String(parsed.min);
        span.dataset.baseMax = String(parsed.max);
        span.dataset.baseUnit = parsed.unit;
        span.dataset.baseDisplay = parsed.matchedText;

        span.textContent = parsed.matchedText;

        // Replace the text node with: leading ws + span + rest
        const frag = document.createDocumentFragment();
        if(parsed.leadingWs) frag.appendChild(document.createTextNode(parsed.leadingWs));
        frag.appendChild(span);
        if(parsed.restText) frag.appendChild(document.createTextNode(parsed.restText));

        firstTextNode.parentNode.replaceChild(frag, firstTextNode);
      });


      // Also wrap inline quantities (e.g., Yield lines or Method steps)
      // so they scale correctly when Batch/Multiplier changes.
      (function wrapInlineAmounts(){
        try{
          if(recipeEl.dataset && recipeEl.dataset.inlineAmountsWrapped === '1') return;
        }catch(_e){}

        // Match patterns like: 100 g, 5 ml, 1-2 tsp, 1/2 tbsp, 6 drops
        const UNIT_WORDS = '(?:tsp|teaspoons?|tbsp|tablespoons?|cup|cups|ml|l|litre|liter|g|kg|drop|drops)';
        const QTY_CHARS  = '[0-9¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞./\\s\\-–—]';
        const reInline = new RegExp('\\b(' + QTY_CHARS + '+?)\\s*(' + UNIT_WORDS + ')\\b', 'gi');

        function mapInlineUnit(raw){
          const s = String(raw || '').trim().toLowerCase();
          if(s.indexOf('teaspoon') === 0) return 'tsp';
          if(s.indexOf('tablespoon') === 0) return 'tbsp';
          if(s === 'litre' || s === 'liter') return 'l';
          if(s === 'drops') return 'drop';
          if(s === 'cups') return 'cup';
          return canonicalUnit(s);
        }

        function shouldSkipTextNode(node){
          if(!node || !node.parentNode) return true;
          const p = node.parentElement;
          if(!p) return true;
          if(p.closest && p.closest('.amt')) return true;
          const tag = (p.tagName || '').toUpperCase();
          if(tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return true;
          if(p.closest && p.closest('button, a, input, select, textarea')) return true;
          // Avoid wrapping inside ingredient list items (handled separately)
          if(p.closest && p.closest('ul li')) return true;
          return false;
        }

        function wrapTextNode(node){
          const t = node && node.nodeValue ? String(node.nodeValue) : '';
          if(!t) return;

          reInline.lastIndex = 0;
          let m = null;
          let last = 0;
          const frag = document.createDocumentFragment();
          let changed = false;

          while((m = reInline.exec(t))){
            const start = m.index;
            const end   = reInline.lastIndex;
            const qtyRaw  = (m[1] || '').trim();
            const unitRaw = (m[2] || '').trim();

            const qty = parseQtyToken(qtyRaw);
            if(!Number.isFinite(qty.min) || qty.min <= 0) continue;

            if(start > last) frag.appendChild(document.createTextNode(t.slice(last, start)));

            const span = document.createElement('span');
            span.className = 'amt';
            span.dataset.baseMin = String(qty.min);
            span.dataset.baseMax = String(Number.isFinite(qty.max) ? qty.max : qty.min);
            span.dataset.baseUnit = mapInlineUnit(unitRaw);
            span.dataset.baseDisplay = t.slice(start, end);
            span.textContent = span.dataset.baseDisplay;
            frag.appendChild(span);

            last = end;
            changed = true;
          }

          if(!changed) return;
          if(last < t.length) frag.appendChild(document.createTextNode(t.slice(last)));
          node.parentNode.replaceChild(frag, node);
        }

        try{
          const targets = qsa('p, ol li', recipeEl);
          targets.forEach(root=>{
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
              acceptNode: (node)=> shouldSkipTextNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            });
            const nodes = [];
            let n = walker.nextNode();
            while(n){
              nodes.push(n);
              n = walker.nextNode();
            }
            nodes.forEach(wrapTextNode);
          });
        }catch(_e){}

        try{ recipeEl.dataset.inlineAmountsWrapped = '1'; }catch(_e){}
      })();

      recipeEl.dataset.amountsWrapped = '1';
    }

    function autosizeSelect(selectEl){
      if(!selectEl) return;

      // On narrow screens, let CSS manage full-width controls.
      if(window.matchMedia && window.matchMedia('(max-width: 520px)').matches){
        selectEl.style.width = '';
        return;
      }

      const opts = Array.from(selectEl.options || []);
      if(!opts.length) return;

      const cs = window.getComputedStyle(selectEl);
      const font = cs.font || `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;

      const canvas = autosizeSelect._canvas || (autosizeSelect._canvas = document.createElement('canvas'));
      const ctx = canvas.getContext('2d');
      ctx.font = font;

      let max = 0;
      for(const o of opts){
        const w = ctx.measureText((o.textContent || '').trim()).width;
        if(w > max) max = w;
      }

      const padding = 56; // caret + divider + internal padding
      const minW = 140;
      const maxW = 520;
      const width = Math.min(maxW, Math.max(minW, Math.ceil(max + padding)));
      selectEl.style.width = width + 'px';
    }

    function autosizeAllSelects(){
      qsa('.multiplier select, .scale-tools select').forEach(autosizeSelect);
    }

    function injectMethodAmounts(recipeEl){
      try{ qsa('.method-amt-inject', recipeEl).forEach(el=>el.remove()); }catch(_e){}
      try{ qsa('[data-method-tag-key]', recipeEl).forEach(el=>{ delete el.dataset.methodTagKey; }); }catch(_e){}
      if(!recipeEl) return;

      function normSpaces(value){
        return String(value || '')
          .replace(/\s+/g, ' ')
          .replace(/\s*([–—-])\s*/g, ' $1 ')
          .trim();
      }
      function normalizeStage(value){
        return normSpaces(value)
          .toLowerCase()
          .replace(/\bstage\b/g, ' ')
          .replace(/[^a-z0-9%]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
      }
      function getLeadToken(value){
        const match=normalizeStage(value).match(/[a-z]+/);
        return match ? match[0] : '';
      }
      function sanitizeForMethodPill(value){
        let out=String(value || '');
        out=out.replace(/\s*\((?:\s*or\b[^)]*|[^)]*of\s+your\s+choosing[^)]*)\)\s*/gi, ' ');
        out=out.replace(/\s+or\s+nut\s+butter\s+of\s+your\s+choosing\b/gi, '');
        return normSpaces(out);
      }
      function amountFromLi(li){
        const amt=q('.amt',li);
        const amtText=amt ? normSpaces(amt.textContent || '') : '';
        if(amtText) return amtText;

        const swap=q('.thickness-swap',li);
        if(swap){
          const value=normSpaces(swap.textContent || '');
          const unit=normSpaces((q('.thickness-unit',li) || {}).textContent || '');
          const combined=normSpaces(value && unit ? value+' '+unit : value || unit);
          if(combined) return combined;
        }

        const raw=normSpaces(li.textContent || '');
        let match=raw.match(/^([\d¼½¾⅓⅔⅛⅜⅝⅞./\s-]+)\s*(g|kg|ml|l|tbsp|tsp|cups?|drops?|pinch(?:es)?|cloves?|%|grams?|millilit(?:er|re)s?)\b/i);
        if(match) return normSpaces(match[1]+' '+match[2]);

        match=raw.match(/[–—-]\s*([\d¼½¾⅓⅔⅛⅜⅝⅞./\s-]+)\s*(g|kg|ml|l|tbsp|tsp|cups?|drops?|pinch(?:es)?|cloves?|%|grams?|millilit(?:er|re)s?)\b/i);
        if(match) return normSpaces(match[1]+' '+match[2]);

        return '';
      }
      function getStepInfo(step,index){
        const strong=q('strong',step);
        let title='';
        if(strong) title=normSpaces((strong.textContent || '').replace(/:$/,''));
        if(!title){
          const raw=normSpaces(step.textContent || '');
          const match=raw.match(/^([^:]{1,120}):/);
          if(match) title=normSpaces(match[1] || '');
        }
        if(!title) title='step '+(index+1);
        return {
          index:index+1,
          element:step,
          key:normalizeStage(title),
          lead:getLeadToken(title),
          text:normalizeStage(step.textContent || '')
        };
      }
      function actionScore(info){
        const key=String(info && info.key || '');
        if(/\b(add|combine|mix|blend|stir|whisk|fold|melt|dissolve|disperse|hydrate|whip|beat|knead|cook|simmer|boil|bake|roast|toast|heat|pour|season|top|coat|soak|marinate|press|process)\b/.test(key)) return 4;
        if(/\b(place|transfer|spread|apply|form|shape|rest|chill|cool)\b/.test(key)) return 3;
        if(/\b(weigh|measure|set\s+(?:the\s+)?sliders?|note|preheat|gather|equipment|clean\s+and\s+dry)\b/.test(key)) return 0;
        return 2;
      }
      function normalizeIngredientTerm(value){
        let out=String(value || '')
          .replace(/\([^)]*\)/g,' ')
          .replace(/[–—]/g,'-')
          .toLowerCase();
        out=out
          .replace(/\b(?:gluten\s*-?\s*free|unrefined|refined|uncooked|softened|finely|very|superfine|powdered|chopped|sliced|juiced|raw|roasted|unhulled|whole|dried|ground|plain|fresh|frozen|food|pharmaceutical|grade|white|organic)\b/g,' ')
          .replace(/[^a-z0-9%]+/g,' ')
          .replace(/\s+/g,' ')
          .trim();
        return out;
      }
      function addTerm(set,value){
        const term=normalizeIngredientTerm(value);
        if(!term || term.length<2) return;
        set.add(term);

        const core=term
          .replace(/\b(?:oil|butter|wax|powder|flour|seed|leaf|clay|blend|mixture)\b/g,' ')
          .replace(/\s+/g,' ')
          .trim();
        if(core.length>=3) set.add(core);

        const words=core.split(/\s+/).filter(word=>word.length>=4 && !['kernel','water'].includes(word));
        if(words.length===1) set.add(words[0]);
        else if(words.length>1){
          set.add(words.slice(-2).join(' '));
          const last=words[words.length-1];
          if(last.length>=5) set.add(last);
        }
      }
      function buildTerms(li){
        const terms=new Set();

        qsa('a.ing-link',li).forEach(anchor=>addTerm(terms,anchor.textContent || ''));

        qsa('strong',li).forEach(strong=>{
          if(strong.closest('li.ing-subhead')) return;
          addTerm(terms,strong.textContent || '');
        });

        let raw=normSpaces(li.textContent || '');
        const amount=amountFromLi(li);
        if(amount && raw.toLowerCase().startsWith(amount.toLowerCase())){
          raw=raw.slice(amount.length).trim();
        }
        raw=raw.replace(/^[–—-]\s*/,'');
        if(/[–—-]/.test(raw)){
          const parts=raw.split(/\s+[–—-]\s+/);
          if(parts[0] && parts[0].length<100) addTerm(terms,parts[0]);
        }else{
          addTerm(terms,raw);
        }

        return Array.from(terms).filter(Boolean);
      }
      function termInStep(term,stepText){
        if(!term || !stepText) return false;
        if(stepText.includes(term)) return true;
        if(term.endsWith('s') && stepText.includes(term.slice(0,-1))) return true;
        if(stepText.includes(term+'s')) return true;
        return false;
      }
      function isAfter(a,b){
        return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
      }
      function nearestSectionTitle(li,ingredientHeading,methodHeading,headings){
        let title='Ingredients';
        headings.forEach(heading=>{
          if(heading===ingredientHeading || heading===methodHeading) return;
          if(isAfter(ingredientHeading,heading) && isAfter(heading,li)) title=normSpaces(heading.textContent || title);
        });
        return title;
      }
      function isIngredientCandidate(li,sectionTitle){
        if(!li || li.classList.contains('ing-subhead')) return false;
        if(/^(ingredient roles?|roles?|nutrition|serving ideas?|body\s*&?\s*sensory notes?|storage|notes?|comedogenic considerations?)\b/i.test(sectionTitle)) return false;
        if(li.dataset && li.dataset.methodStep) return true;
        if(q('.amt,.thickness-swap,a.ing-link',li)) return true;
        const raw=normSpaces(li.textContent || '');
        return /\d/.test(raw) && /(?:\b(?:g|kg|ml|l|tbsp|tsp|cups?|drops?|pinch(?:es)?|cloves?|grams?|millilit(?:er|re)s?)\b|%)/i.test(raw);
      }

      // Variant recipes can contain several complete Ingredients + Method
      // blocks. Method tags must describe the ingredient list the viewer can
      // currently see, never a hidden/default variant.
      const variantPanels=qsa('.variant-panel',recipeEl);
      const activeVariantPanels=variantPanels.filter(panel=>{
        if(panel.hidden) return false;
        if(String(panel.getAttribute('aria-hidden') || '').toLowerCase()==='true') return false;
        return true;
      });
      const methodScope=activeVariantPanels[0] || recipeEl;

      const headings=qsa('h2,h3,h4',methodScope);
      const ingredientHeading=headings.find(h=>/^ingredients\b/i.test(normSpaces(h.textContent || '')));
      const methodHeading=headings.find(h=>/^method\b/i.test(normSpaces(h.textContent || '')));
      if(!ingredientHeading || !methodHeading) return;

      let methodOl=null;
      let cursor=methodHeading.nextElementSibling;
      while(cursor){
        if(cursor.tagName==='OL'){ methodOl=cursor; break; }
        if(/^H[234]$/i.test(cursor.tagName || '')) break;
        cursor=cursor.nextElementSibling;
      }
      if(!methodOl) return;

      const steps=Array.from(methodOl.children || [])
        .filter(el=>el && el.tagName==='LI')
        .map((step,index)=>getStepInfo(step,index));
      if(!steps.length) return;

      const ingredientLis=qsa('li',methodScope).filter(li=>{
        if(!isAfter(ingredientHeading,li) || !isAfter(li,methodHeading)) return false;
        if(li.closest('ol')) return false;
        if(li.hidden || String(li.getAttribute('aria-hidden') || '').toLowerCase()==='true') return false;
        const hiddenAncestor=li.closest('[hidden], [aria-hidden="true"]');
        if(hiddenAncestor && methodScope.contains(hiddenAncestor)) return false;
        try{
          const style=window.getComputedStyle(li);
          if(style && (style.display==='none' || style.visibility==='hidden')) return false;
        }catch(_e){}
        const sectionTitle=nearestSectionTitle(li,ingredientHeading,methodHeading,headings);
        return isIngredientCandidate(li,sectionTitle);
      });
      if(!ingredientLis.length) return;

      const entries=ingredientLis.map((li,index)=>{
        const explicit=String((li.dataset && li.dataset.methodStep) || '')
          .split(',')
          .map(value=>parseInt(value.trim(),10))
          .filter(value=>Number.isFinite(value) && value>0 && value<=steps.length);
        const sectionTitle=nearestSectionTitle(li,ingredientHeading,methodHeading,headings);
        const scopeKey=(methodScope.id || (methodScope.dataset && methodScope.dataset.variantPanel) || 'main');
        const key=(recipeEl.id || 'recipe')+'-'+scopeKey+'-method-ing-'+(index+1);
        const ingredientIds=qsa('a.ing-link[data-ingredient]',li)
          .map(anchor=>String(anchor.dataset.ingredient || '').trim())
          .filter(Boolean)
          .sort();
        const terms=buildTerms(li);
        const identity=ingredientIds.length ? ingredientIds.join('|') : (terms[0] || key);
        li.dataset.methodTagKey=key;
        return {
          key,
          li,
          identity,
          display:sanitizeForMethodPill(normSpaces(li.textContent || '')),
          explicit,
          sectionKey:normalizeStage(sectionTitle),
          sectionLead:getLeadToken(sectionTitle),
          terms,
          genericTerm:terms.some(term=>['water','salt','sea salt'].includes(term)),
          raw:normalizeStage(li.textContent || '')
        };
      }).filter(entry=>entry.display);
      if(!entries.length) return;

      const identityCounts=new Map();
      entries.forEach(entry=>identityCounts.set(entry.identity,(identityCounts.get(entry.identity) || 0)+1));

      function bestNaturalMatch(entry){
        const matches=steps.filter(info=>entry.terms.some(term=>termInStep(term,info.text)));
        const substantive=matches.filter(info=>actionScore(info)>=2);
        const pool=substantive.length ? substantive : matches;
        if(!pool.length) return null;
        return pool.slice().sort((a,b)=>{
          const scoreDiff=actionScore(b)-actionScore(a);
          return scoreDiff || a.index-b.index;
        })[0];
      }
      function bestExplicitMatch(entry){
        if(!entry.explicit.length) return null;
        const candidates=entry.explicit.map(index=>steps[index-1]).filter(Boolean);
        return candidates.slice().sort((a,b)=>{
          const scoreDiff=actionScore(b)-actionScore(a);
          return scoreDiff || a.index-b.index;
        })[0] || null;
      }
      function bestSectionMatch(entry){
        const matches=steps.filter(info=>{
          if(entry.sectionKey && info.key && entry.sectionKey===info.key) return true;
          if(entry.sectionLead && info.lead && entry.sectionLead===info.lead) return true;
          return false;
        });
        if(!matches.length) return null;
        return matches.slice().sort((a,b)=>{
          const scoreDiff=actionScore(b)-actionScore(a);
          return scoreDiff || a.index-b.index;
        })[0];
      }
      function bestCategoryMatch(entry){
        const categoryWords=['oil','oils','butter','butters','wax','waxes','powder','powders','water','salt','spice','spices','herb','herbs','oats','nuts','seeds','flour','milk'];
        const categories=categoryWords.filter(word=>entry.raw.includes(word));
        if(!categories.length) return null;
        const matches=steps.filter(info=>categories.some(word=>info.text.includes(word)));
        if(!matches.length) return null;
        return matches.slice().sort((a,b)=>{
          const scoreDiff=actionScore(b)-actionScore(a);
          return scoreDiff || a.index-b.index;
        })[0];
      }

      const placements=new Map();
      entries.forEach(entry=>{
        /* Authored data-method-step is the recipe's explicit first-use contract.
           Never let natural-language heuristics move that ingredient elsewhere;
           heuristics are only a fallback for unassigned ingredient rows. */
        const explicit=bestExplicitMatch(entry);
        let target=explicit || null;

        if(!target){
          const natural=bestNaturalMatch(entry);
          if(natural && actionScore(natural)>=2) target=natural;
          if(!target) target=natural;
          if(!target) target=bestSectionMatch(entry);
          if(!target) target=bestCategoryMatch(entry);
          if(!target) target=steps.find(info=>actionScore(info)>=3) || steps[0];
        }

        if(!target) return;
        const list=placements.get(target.index) || [];
        list.push(entry);
        placements.set(target.index,list);
      });

      steps.forEach(info=>{
        const list=placements.get(info.index) || [];
        if(!list.length) return;

        const wrap=document.createElement('div');
        wrap.className='method-amt-inject';
        wrap.dataset.methodAmounts='first-use';

        const label=document.createElement('span');
        label.className='method-amt-label';
        label.textContent='Amounts:';
        wrap.appendChild(label);

        list.forEach(entry=>{
          const pill=document.createElement('span');
          pill.className='method-amt';
          pill.dataset.methodIngredientKey=entry.key;
          pill.textContent=entry.display;
          wrap.appendChild(pill);
        });

        info.element.appendChild(wrap);
      });
    }

function buildControls(recipeEl){
      if(!recipeEl || (recipeEl.dataset && recipeEl.dataset.recipeControlsBound === '1')) return;

      const h3 = q('h3,h2,h1', recipeEl);
      if(!h3) return;

      let titleRow = (h3.parentElement && h3.parentElement.classList && h3.parentElement.classList.contains('recipe-title-row'))
        ? h3.parentElement : null;

      let controls = q('.recipe-controls[data-static-recipe-controls="1"]', recipeEl);
      const preauthored = !!controls;
      if(!preauthored && q('.recipe-controls', recipeEl)) return;

      let multInput = null;
      let measSelect = null;
      let applyBtn = null;
      let resetBtn = null;
      let printSummary = null;

      const isOatPorridge = (recipeEl && recipeEl.dataset && recipeEl.dataset.oatToggle === '1');
      let oatType = 'jumbo';
      let oatLabelEl = null;
      let oatToggleEl = null;
      let oatBtnJumbo = null;
      let oatBtnPorridge = null;
      let thickSlider = null;
      let thickSliderReadout = null;
      const hasThickness = !!q('.thickness-swap', recipeEl);

      function thicknessValue(){
        if(!thickSlider) return 'moderate';
        const n = Number(thickSlider.value);
        return n <= 0 ? 'thin' : n >= 2 ? 'thick' : 'moderate';
      }

      function syncThicknessSliderReadout(){
        if(!thickSliderReadout) return;
        const value = thicknessValue();
        thickSliderReadout.textContent = value === 'thin' ? 'Thin' : value === 'thick' ? 'Thick' : 'Moderate';
      }

      function buildThicknessSlider(){
        const controller = document.createElement('div');
        controller.className = 'glide-controller recipe-slider-template thickness-slider-controller';
        controller.setAttribute('data-slider-count','1');

        const main = document.createElement('div');
        main.className = 'glide-control-main';

        const head = document.createElement('div');
        head.className = 'glide-slider-head';

        const label = document.createElement('div');
        label.className = 'glide-label';
        label.textContent = 'Thickness';

        thickSliderReadout = document.createElement('div');
        thickSliderReadout.className = 'glide-readout';
        thickSliderReadout.textContent = 'Moderate';

        head.appendChild(label);
        head.appendChild(thickSliderReadout);

        const wrap = document.createElement('div');
        wrap.className = 'glide-slider-wrap';

        thickSlider = document.createElement('input');
        thickSlider.type = 'range';
        thickSlider.className = 'glide-slider thickness-slider';
        thickSlider.min = '0';
        thickSlider.max = '2';
        thickSlider.step = '1';
        thickSlider.value = '1';
        thickSlider.dataset.defaultValue = '1';
        thickSlider.setAttribute('aria-label','Thickness: Thin, Moderate, or Thick');

        wrap.appendChild(thickSlider);

        const scale = document.createElement('div');
        scale.className = 'glide-scale';
        const left = document.createElement('span');
        left.textContent = 'Thin';
        const right = document.createElement('span');
        right.textContent = 'Thick';
        scale.appendChild(left);
        scale.appendChild(right);

        main.appendChild(head);
        main.appendChild(wrap);
        main.appendChild(scale);
        controller.appendChild(main);
        return controller;
      }

      function makeControlRow(rowClass, labelValue, controlEl, trailingEl, labelClass){
        const row = document.createElement('div');
        row.className = 'recipe-control-row' + (rowClass ? (' ' + rowClass) : '');

        const label = (labelValue && labelValue.nodeType === 1)
          ? labelValue
          : (function(){
              const el = document.createElement('span');
              el.className = 'label' + (labelClass ? (' ' + labelClass) : '');
              el.textContent = String(labelValue || '');
              return el;
            })();

        if(labelClass && label.classList) label.classList.add(labelClass);
        row.appendChild(label);
        if(controlEl) row.appendChild(controlEl);

        const trailingEls = Array.isArray(trailingEl) ? trailingEl : (trailingEl ? [trailingEl] : []);
        trailingEls.forEach(function(el){ if(el) row.appendChild(el); });
        return row;
      }

      if(preauthored){
        multInput = q('input.multiplier-input', controls);
        measSelect = q('.measure-select', controls);
        applyBtn = q('.recipe-apply', controls);
        resetBtn = q('.reset', controls);
        printSummary = q('.print-summary', recipeEl);


        if(isOatPorridge){
          oatToggleEl = q('.oat-toggle', controls);
          oatBtnJumbo = oatToggleEl ? q('.oat-option[data-oat-type="jumbo"], .oat-option:first-child', oatToggleEl) : null;
          oatBtnPorridge = oatToggleEl ? q('.oat-option[data-oat-type="porridge"], .oat-option:last-child', oatToggleEl) : null;
          if(!oatToggleEl){
            oatLabelEl = document.createElement('span');
            oatLabelEl.className = 'label oat-label';
            oatLabelEl.textContent = 'Type of oats';
            oatToggleEl = document.createElement('div');
            oatToggleEl.className = 'oat-toggle';
            oatToggleEl.setAttribute('role','group');
            oatToggleEl.setAttribute('aria-label','Type of oats');
            oatBtnJumbo = document.createElement('button');
            oatBtnJumbo.type='button';
            oatBtnJumbo.className='oat-option is-active';
            oatBtnJumbo.dataset.oatType='jumbo';
            oatBtnJumbo.textContent='Jumbo Oats';
            oatBtnPorridge = document.createElement('button');
            oatBtnPorridge.type='button';
            oatBtnPorridge.className='oat-option';
            oatBtnPorridge.dataset.oatType='porridge';
            oatBtnPorridge.textContent='Porridge Oats';
            oatToggleEl.appendChild(oatBtnJumbo);
            oatToggleEl.appendChild(oatBtnPorridge);
            controls.appendChild(makeControlRow('recipe-control-row--oat', oatLabelEl, oatToggleEl));
          }
        }

        if(hasThickness && !thickSlider){
          controls.appendChild(makeControlRow('recipe-control-row--thickness recipe-control-row--thickness-slider', '', buildThicknessSlider()));
        }

        if(!multInput || !measSelect || !resetBtn || !printSummary) return;
        enhanceNumberStepper(multInput);
        buildScaleByIngredient(recipeEl, controls, multInput, apply);
        autosizeSelect(measSelect);
        enhanceSelect(measSelect);
      }else{
        if(!titleRow){
          titleRow = document.createElement('div');
          titleRow.className = 'recipe-title-row';
          h3.insertAdjacentElement('beforebegin', titleRow);
          titleRow.appendChild(h3);
        }

        controls = document.createElement('div');
        controls.className = 'multiplier recipe-controls';
        controls.setAttribute('data-layout-contract', 'title-batch-measurement-scale');

        const multLabel = document.createElement('span');
        multLabel.className = 'label batch-label';
        multLabel.textContent = 'Batch Multiplier';
        multInput = document.createElement('input');
        multInput.type = 'number';
        multInput.min = '0';
        multInput.step = 'any';
        multInput.dataset.stepperStep = '0.5';
        multInput.dataset.stepperMin = '0.5';
        multInput.value = '1';
        multInput.inputMode = 'decimal';
        multInput.className = 'multiplier-input batch-input';
        multInput.setAttribute('aria-label', 'Batch multiplier');
        const batchField = enhanceNumberStepper(multInput);
        if(batchField && batchField.classList) batchField.classList.add('batch-input');

        const measLabel = document.createElement('span');
        measLabel.className = 'label meas-label';
        measLabel.textContent = 'Measurement Type';
        measSelect = document.createElement('select');
        measSelect.className = 'measure-select';
        measSelect.setAttribute('aria-label', 'Measurement Type');
        measSelect.innerHTML = `
          <option value="standard">Standard Variance</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
          <option value="cups">Measuring Cups &amp; Spoons</option>
        `;

        if(isOatPorridge){
          oatLabelEl = document.createElement('span');
          oatLabelEl.className = 'label oat-label';
          oatLabelEl.textContent = 'Type of oats';

          oatToggleEl = document.createElement('div');
          oatToggleEl.className = 'oat-toggle';
          oatToggleEl.setAttribute('role', 'group');
          oatToggleEl.setAttribute('aria-label', 'Type of oats');

          oatBtnJumbo = document.createElement('button');
          oatBtnJumbo.type = 'button';
          oatBtnJumbo.className = 'oat-option is-active';
          oatBtnJumbo.dataset.oatType = 'jumbo';
          oatBtnJumbo.textContent = 'Jumbo Oats';

          oatBtnPorridge = document.createElement('button');
          oatBtnPorridge.type = 'button';
          oatBtnPorridge.className = 'oat-option';
          oatBtnPorridge.dataset.oatType = 'porridge';
          oatBtnPorridge.textContent = 'Porridge Oats';

          oatToggleEl.appendChild(oatBtnJumbo);
          oatToggleEl.appendChild(oatBtnPorridge);
        }

        if(isOatPorridge) controls.classList.add('has-oat-toggle');
        if(hasThickness) controls.classList.add('has-thickness');

        applyBtn = document.createElement('button');
        applyBtn.type = 'button';
        applyBtn.className = 'apply recipe-apply batch-apply';
        applyBtn.textContent = 'Apply';
        applyBtn.setAttribute('aria-label', 'Apply batch multiplier changes');
        try{ applyBtn.dataset.mobileBatchApply = '1'; }catch(_e){}

        resetBtn = document.createElement('button');
        resetBtn.type = 'button';
        resetBtn.className = 'reset';
        resetBtn.textContent = 'Reset';

        controls.appendChild(makeControlRow('recipe-control-row--batch', multLabel, batchField, applyBtn));
        controls.appendChild(makeControlRow('recipe-control-row--measurement', measLabel, measSelect, resetBtn));

        (titleRow || h3).insertAdjacentElement('afterend', controls);
        buildScaleByIngredient(recipeEl, controls, multInput, apply);

        if(oatToggleEl){
          controls.appendChild(makeControlRow('recipe-control-row--oat', oatLabelEl, oatToggleEl));
        }
        if(hasThickness){
          controls.appendChild(makeControlRow('recipe-control-row--thickness recipe-control-row--thickness-slider', '', buildThicknessSlider()));
        }

        autosizeSelect(measSelect);
        enhanceSelect(measSelect);

        printSummary = document.createElement('div');
        printSummary.className = 'print-summary';
        printSummary.textContent = 'Batch quantity: 1 • Measurement: Standard Variance';
        controls.insertAdjacentElement('afterend', printSummary);
      }

      if(recipeEl.dataset) recipeEl.dataset.recipeControlsBound = '1';

      (function tagIngredientsList(){
        const headings = qsa('h4', recipeEl);
        const ingH = headings.find(h => /^ingredients\b/i.test((h.textContent || '').trim()));
        if(!ingH) return;
        let el = ingH.nextElementSibling;
        while(el && el.tagName !== 'UL') el = el.nextElementSibling;
        if(el && !el.classList.contains('ingredients-list')) el.classList.add('ingredients-list');

        // A single ingredient group needs no synthetic heading. Preserve only
        // authored subgroup headings when the recipe genuinely has categories.
        try{
          if(el){
            const subheads = qsa(':scope > li.ing-subhead', el);
            if(subheads.length === 1){
              const label = String(subheads[0].textContent || '').trim().toLowerCase();
              if(label === 'main') subheads[0].remove();
            }
          }
        }catch(_e){}
      })();

      function setOatType(nextType, opts){
        if(!isOatPorridge) return;
        opts = opts || {};
        const t = (nextType === 'porridge') ? 'porridge' : 'jumbo';
        oatType = t;
        if(oatBtnJumbo){
          oatBtnJumbo.classList.toggle('is-active', t === 'jumbo');
          oatBtnJumbo.setAttribute('aria-pressed', t === 'jumbo' ? 'true' : 'false');
        }
        if(oatBtnPorridge){
          oatBtnPorridge.classList.toggle('is-active', t === 'porridge');
          oatBtnPorridge.setAttribute('aria-pressed', t === 'porridge' ? 'true' : 'false');
        }

        const oatLink = q('a.oat-type-link', recipeEl);
        if(oatLink){
          const ingId = (t === 'porridge') ? oatLink.dataset.porridgeIngredient : oatLink.dataset.jumboIngredient;
          const label = (t === 'porridge') ? oatLink.dataset.porridgeLabel : oatLink.dataset.jumboLabel;
          if(ingId){
            oatLink.dataset.ingredient = ingId;
            oatLink.setAttribute('href', '#' + ingId);
            if(label) oatLink.textContent = label;
            const li = oatLink.closest('li');
            if(li && li.dataset) li.dataset.ingredient = ingId;
          }
        }

        const waterLi = q('li[data-oat-water="1"]', recipeEl);
        if(waterLi){
          wrapAmounts(recipeEl);
          const amtSpan = q('.amt', waterLi);
          const baseRaw = (t === 'porridge') ? waterLi.dataset.oatWaterPorridge : waterLi.dataset.oatWaterJumbo;
          const base = Number(baseRaw);
          if(amtSpan && Number.isFinite(base) && base > 0){
            amtSpan.dataset.baseMin = String(base);
            amtSpan.dataset.baseMax = String(base);
            amtSpan.dataset.baseUnit = 'ml';
            amtSpan.dataset.baseDisplay = `${base} ml`;
          }
        }

        qsa('.oat-water-method', recipeEl).forEach(span=>{
          const ds = span.dataset || {};
          span.textContent = (t === 'porridge') ? (ds.porridge || span.textContent) : (ds.jumbo || span.textContent);
        });
        qsa('.oat-time-method', recipeEl).forEach(span=>{
          const ds = span.dataset || {};
          span.textContent = (t === 'porridge') ? (ds.porridge || span.textContent) : (ds.jumbo || span.textContent);
        });

        if(opts.skipApply){
          updatePrintSummary();
          return;
        }
        apply();
      }

      function updatePrintSummary(){
        const batch = (multInput.value || '1.0');
        const measRaw = (measSelect.value || 'standard');
        const measLabel = (measRaw === 'standard') ? 'Standard Variance'
          : (measRaw === 'weight') ? 'Weight'
          : (measRaw === 'volume') ? 'Volume'
          : 'Measuring Cups & Spoons';

        const parts = [];
        const activeVariant = q('.variant-tab[aria-selected="true"]', recipeEl);
        if(activeVariant){
          const vLabel = (activeVariant.textContent || '').trim();
          if(vLabel) parts.push(`Variant: ${vLabel}`);
        }
        parts.push(`Batch quantity: ${batch}`, `Measurement: ${measLabel}`);
        if(hasThickness){
          const t = thicknessValue();
          const tLabel = t.charAt(0).toUpperCase() + t.slice(1);
          parts.push(`Thickness: ${tLabel}`);
        }
        if(isOatPorridge){
          const oLabel = (oatType === 'porridge') ? 'Porridge Oats' : 'Jumbo Oats';
          parts.push(`Type of oats: ${oLabel}`);
        }
        const activePanel = q('.variant-panel:not([hidden])', recipeEl) || q('.variant-panel', recipeEl);
        const breakdown = activePanel ? q('.glide-breakdown', activePanel) : q('.glide-breakdown', recipeEl);
        if(breakdown){
          const b = (breakdown.textContent || '').replace(/^\s*Selected variant:\s*/i, '').replace(/\s+/g, ' ').trim();
          if(b) parts.push(`Selected: ${b}`);
        }
        if(recipeEl.dataset && recipeEl.dataset.scaleSummary){
          parts.push(recipeEl.dataset.scaleSummary);
        }
        printSummary.textContent = parts.join(' • ');
      }

      try{ recipeEl.__baselineUpdatePrintSummary = updatePrintSummary; }catch(_e){}
      updatePrintSummary();

      if(isOatPorridge && oatToggleEl){
        oatBtnJumbo.addEventListener('click', ()=> setOatType('jumbo'));
        oatBtnPorridge.addEventListener('click', ()=> setOatType('porridge'));
        setOatType('jumbo', {skipApply:true});
      }

      function apply(){
        updatePrintSummary();
        wrapAmounts(recipeEl);
        let raw = NaN;
        try{ raw = parseFloat((multInput.value || '').trim()); }catch(_e){ raw = NaN; }
        if(!Number.isFinite(raw) || raw <= 0){
          raw = 1;
          multInput.value = '1';
        }
        const multiplier = clamp(raw, 0.01, Infinity);
        try{ if(raw !== multiplier) multInput.value = String(multiplier); }catch(_e){}
        const mode = measSelect.value || 'standard';

        qsa('.amt', recipeEl).forEach(span=>{
          const baseMin = parseFloat(span.dataset.baseMin);
          const baseMax = parseFloat(span.dataset.baseMax);
          const baseUnit = span.dataset.baseUnit;
          if(!Number.isFinite(baseMin)) return;

          const li = span.closest('li');
          let ingredientId = '';
          if(li && li.dataset && li.dataset.ingredient) ingredientId = li.dataset.ingredient;
          if(!ingredientId && li){
            const ingA = q('a.ing-link[data-ingredient]', li);
            if(ingA && ingA.dataset && ingA.dataset.ingredient) ingredientId = ingA.dataset.ingredient;
          }
          const profile = getProfile(ingredientId);
          const display = computeDisplay(
            { min: baseMin, max: Number.isFinite(baseMax) ? baseMax : baseMin, unit: baseUnit },
            { multiplier, mode, profile, ingredientId }
          );
          if(display && display.text) span.textContent = display.text;
        });

        const thickness = thicknessValue();
        qsa('.thickness-swap', recipeEl).forEach(span=>{
          const ds = span.dataset || {};
          const raw = thickness === 'thin' ? (ds.thicknessThin || ds.thin) : thickness === 'thick' ? (ds.thicknessThick || ds.thick) : (ds.thicknessModerate || ds.moderate);
          if(!raw) return;

          const qty = parseQtyToken(raw);
          const baseMin = qty.min;
          const baseMax = qty.max;
          const li = span.closest('li');
          let ingredientId = '';
          if(li && li.dataset && li.dataset.ingredient) ingredientId = li.dataset.ingredient;
          if(!ingredientId && li){
            const ingA = q('a.ing-link[data-ingredient]', li);
            if(ingA && ingA.dataset && ingA.dataset.ingredient) ingredientId = ingA.dataset.ingredient;
          }
          const profile = getProfile(ingredientId);
          const display = computeDisplay(
            { min: baseMin, max: Number.isFinite(baseMax) ? baseMax : baseMin, unit: 'tbsp' },
            { multiplier, mode, profile, ingredientId }
          );
          if(display && display.text){
            const parts = display.text.trim().split(/\s+/);
            const qtyPart = parts[0] || '';
            const unitPart = parts.slice(1).join(' ') || '';
            span.textContent = qtyPart;
            const unitEl = span.parentElement ? q('.thickness-unit', span.parentElement) : null;
            if(unitEl && unitPart) unitEl.textContent = unitPart;
          }
        });

        injectMethodAmounts(recipeEl);
        if(typeof window.refreshRecipeComedogenic === 'function'){
          try{ window.refreshRecipeComedogenic(recipeEl); }catch(_e){}
        }
      }

      try{ recipeEl.__baselineApplyScaling = apply; }catch(_e){}

      function reset(){
        try{ if(recipeEl && recipeEl.dataset) delete recipeEl.dataset.scaleSummary; }catch(_e){}
        multInput.value = '1';
        measSelect.value = 'standard';
        if(thickSlider){
          thickSlider.value = '1';
          syncThicknessSliderReadout();
        }
        if(isOatPorridge){
          setOatType('jumbo', {skipApply:true});
        }else{
          updatePrintSummary();
        }
        wrapAmounts(recipeEl);
        qsa('.amt', recipeEl).forEach(span=>{
          if(span.dataset.baseDisplay) span.textContent = span.dataset.baseDisplay;
        });
        qsa('.thickness-swap', recipeEl).forEach(span=>{
          const ds = span.dataset || {};
          const raw = ds.thicknessModerate || ds.moderate;
          if(!raw) return;
          span.textContent = String(raw);
          const unitEl = span.parentElement ? q('.thickness-unit', span.parentElement) : null;
          if(unitEl) unitEl.textContent = 'tbsp';
        });
        injectMethodAmounts(recipeEl);
        if(typeof window.refreshRecipeComedogenic === 'function'){
          try{ window.refreshRecipeComedogenic(recipeEl); }catch(_e){}
        }
      }

      if(applyBtn){
        applyBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); apply(); });
      }

      multInput.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
          e.preventDefault();
          apply();
        }
      });

      let __applyTimer = null;
      function scheduleApply(){
        const v = (multInput.value || '').trim();
        if(v === '' || v === '.' || v === '-' || v === '–') return;
        const n = parseFloat(v);
        if(!Number.isFinite(n) || n <= 0) return;
        if(__applyTimer) clearTimeout(__applyTimer);
        __applyTimer = setTimeout(()=>{ try{ apply(); }catch(_e){} }, 120);
      }

      if(!isMobileViewport()){
        multInput.addEventListener('input', scheduleApply);
        multInput.addEventListener('change', scheduleApply);
        multInput.addEventListener('blur', scheduleApply);
        measSelect.addEventListener('change', scheduleApply);
      }
      if(thickSlider){
        const syncThickness = ()=>{ syncThicknessSliderReadout(); try{ apply(); }catch(_e){} };
        thickSlider.addEventListener('input', syncThickness);
        thickSlider.addEventListener('change', syncThickness);
        syncThicknessSliderReadout();
      }
      resetBtn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); reset(); });
    }

    function buildScaleByIngredient(recipeEl, controlsEl, multInput, applyFn){
      let block = q('.scale-block', recipeEl);
      const preauthored = !!block;
      let toggle = block ? q('.scale-toggle', block) : null;
      let panel = block ? q('.scale-tools', block) : null;
      let label = panel ? q('.label', panel) : null;
      let ingSelect = panel ? q('.scale-ingredient-select', panel) : null;
      let unitSelect = panel ? q('.scale-unit-select', panel) : null;
      let amountInput = panel ? q('.scale-amount-input', panel) : null;
      let btn = panel ? q('.scale-apply', panel) : null;
      let msg = block ? q('.scale-msg', block) : null;

      if(preauthored && block.dataset.scaleBound === '1') return;

      if(!preauthored){
        block = document.createElement('div');
        block.className = 'scale-block';

        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'scale-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Scale By Ingredient';

        panel = document.createElement('div');
        panel.className = 'multiplier scale-tools';
        panel.hidden = true;

        label = document.createElement('span');
        label.className = 'label';
        label.textContent = 'Use:';

        ingSelect = document.createElement('select');
        ingSelect.className = 'scale-ingredient-select';
        ingSelect.setAttribute('aria-label', 'Ingredient');
        ingSelect.innerHTML = '<option value="" selected disabled>Choose ingredient…</option>';

        unitSelect = document.createElement('select');
        unitSelect.className = 'scale-unit-select';
        unitSelect.setAttribute('aria-label', 'Unit');
        unitSelect.innerHTML = `
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="ml">ml</option>
          <option value="l">l</option>
          <option value="tsp">tsp</option>
          <option value="tbsp">tbsp</option>
          <option value="cup">cup</option>
          <option value="count">count</option>
          <option value="drop">drop</option>
        `;

        amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.min = '0';
        amountInput.step = 'any';
        amountInput.inputMode = 'decimal';
        amountInput.placeholder = 'Enter Quantity';
        amountInput.className = 'scale-amount-input';
        amountInput.setAttribute('aria-label', 'Ingredient quantity');
        amountInput.title = 'Ingredient quantity';

        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'scale-apply';
        btn.textContent = 'Scale Recipe';

        msg = document.createElement('div');
        msg.className = 'scale-msg note';

        panel.appendChild(label);
        panel.appendChild(ingSelect);
        panel.appendChild(unitSelect);
        panel.appendChild(amountInput);
        panel.appendChild(btn);

        block.appendChild(toggle);
        block.appendChild(panel);
        block.appendChild(msg);

        if(controlsEl){
          controlsEl.appendChild(block);
        }else{
          const controls = q('.recipe-controls', recipeEl);
          if(controls) controls.appendChild(block);
          else recipeEl.insertAdjacentElement('afterbegin', block);
        }
      }

      if(!toggle || !panel || !ingSelect || !unitSelect || !amountInput || !btn || !msg) return;
      enhanceSelect(ingSelect);
      enhanceSelect(unitSelect);
      block.dataset.scaleBound = '1';

      let items = [];

      function showMsg(t){
        msg.textContent = t || '';
      }

      function populate(){
        wrapAmounts(recipeEl);

        items = [];
        ingSelect.innerHTML = '<option value="" selected disabled>Choose ingredient…</option>';
        ingSelect.selectedIndex = 0;
        ingSelect.value = '';

        // Locate ingredient list items for this recipe.
        // Use multiple authoring-safe routes because Food and Skincare recipes do
        // not all have the exact same DOM shape. Creamy Mushroom Sauce, for example,
        // uses <ul data-ingredients-list> and span-driven thickness quantities.
        function collectIngredientLis(){
          const found = [];
          const seen = new Set();

          function excluded(li){
            return !li || !!li.closest('.recipe-landing, #recipes-landing, .recipe-top-bar, .recipe-actions, .recipe-option-strip, .recipe-edit-options, .scale-block, .print-summary, .method-amt-inject');
          }

          function addLi(li){
            if(excluded(li)) return;
            if(seen.has(li)) return;
            seen.add(li);
            found.push(li);
          }

          function addFromUl(ul){
            if(!ul) return;
            Array.from(ul.children || []).forEach(child=>{
              if(child && child.tagName === 'LI') addLi(child);
            });
          }

          // 1) Explicitly marked list wins.
          qsa('ul[data-ingredients-list], ul.ingredients-list', recipeEl).forEach(addFromUl);

          // 2) Formal Ingredients heading, allowing "(View)" text and helper links.
          const headings = qsa('h4,h3,h2', recipeEl);
          headings.forEach(h=>{
            const title = (h.textContent || '').replace(/\s+/g, ' ').replace(/\(\s*view\s*\)/ig, '').trim();
            if(!/^ingredients\b/i.test(title)) return;
            let cursor = h.nextElementSibling;
            while(cursor){
              if(cursor.tagName === 'UL'){
                addFromUl(cursor);
                break;
              }
              if(/^H[234]$/i.test(cursor.tagName || '') && !/^ingredients\b/i.test((cursor.textContent || '').replace(/\s+/g, ' ').trim())){
                break;
              }
              cursor = cursor.nextElementSibling;
            }
          });

          // 3) Fallback: any ingredient link that is not in navigation/controls/method pills.
          qsa('a.ing-link[data-ingredient], a.ing-link', recipeEl).forEach(a=>{
            const li = a.closest('li');
            if(li) addLi(li);
          });

          return found;
        }

        let ingredientLis = collectIngredientLis();

        if(!ingredientLis.length){
          ingSelect.disabled = true;
          btn.disabled = true;
          toggle.disabled = false;
          showMsg('No ingredient list found for scaling.');
          refreshEnhancedSelect(ingSelect);
          refreshEnhancedSelect(unitSelect);
          return;
        }

        const aggregated = new Map();

        // Reset options and measured-ingredient cache
        items = [];
        ingSelect.innerHTML = '<option value="" selected disabled>Choose ingredient…</option>';
        ingSelect.selectedIndex = 0;
        ingSelect.value = '';

        function parseScaleAmountFromLi(li){
          const amt = q('.amt', li);
          if(amt){
            const value = Number(amt.dataset.baseMax || amt.dataset.baseMin || 0);
            const unit = amt.dataset.baseUnit || 'count';
            if(Number.isFinite(value) && value > 0) return { value, unit };
          }

          // Recipes such as Creamy Mushroom Sauce store adjustable amounts as
          // <span class="thickness-swap">4</span> <span class="thickness-unit">tbsp</span>.
          const thicknessAmount = q('.thickness-swap', li);
          if(thicknessAmount){
            const raw =
              (thicknessAmount.textContent || '').trim() ||
              (thicknessAmount.dataset && (thicknessAmount.dataset.thicknessModerate || thicknessAmount.dataset.moderate || thicknessAmount.dataset.thicknessThin || thicknessAmount.dataset.thin || thicknessAmount.dataset.thicknessThick || thicknessAmount.dataset.thick)) ||
              '';
            const unitText = ((q('.thickness-unit', li) || {}).textContent || '').trim();
            const parsedThickness = parseLeadingAmountFromText((raw + ' ' + unitText).trim());
            const value = parsedThickness ? Number(parsedThickness.max || parsedThickness.min || 0) : 0;
            if(parsedThickness && Number.isFinite(value) && value > 0){
              return { value, unit: parsedThickness.unit || canonicalUnit(unitText) || 'count' };
            }
          }

          const textSources = [];
          const fullText = (li.textContent || '').replace(/\s+/g, ' ').trim();
          if(fullText) textSources.push(fullText);
          Array.from(li.childNodes || []).forEach(n=>{
            if(n.nodeType === Node.TEXT_NODE && n.nodeValue && n.nodeValue.trim().length){
              textSources.push(n.nodeValue);
            }
          });

          for(const source of textSources){
            const parsed = parseLeadingAmountFromText(source);
            const value = parsed ? Number(parsed.max || parsed.min || 0) : 0;
            if(parsed && Number.isFinite(value) && value > 0){
              return { value, unit: parsed.unit || 'count' };
            }
          }
          return null;
        }

        ingredientLis.forEach(li=>{
          const a = q('a.ing-link[data-ingredient]', li) || q('a.ing-link', li);
          const ingredientId = (li.dataset && li.dataset.ingredient) || (a && a.dataset ? a.dataset.ingredient : '') || '';
          if(!ingredientId) return;

          const name = a ? (a.textContent || '').trim() : 'Ingredient';

          const parsedAmount = parseScaleAmountFromLi(li);
          if(!parsedAmount) return;

          const baseNeedRaw = Number(parsedAmount.value || 0);
          const baseUnitRaw = parsedAmount.unit || 'count';

          if(!Number.isFinite(baseNeedRaw) || baseNeedRaw <= 0) return;

          const baseUnit = canonicalUnit(baseUnitRaw);
          const profile = getProfile(ingredientId);

          const baseG = toGrams(baseNeedRaw, baseUnit, profile);
          const baseMl = toMl(baseNeedRaw, baseUnit, profile);

          let entry = aggregated.get(ingredientId);
          if(!entry){
            entry = { ingredientId, name, sumG:0, hasG:false, sumMl:0, hasMl:false, sumCount:0, countUnit:null };
            aggregated.set(ingredientId, entry);
          }else if(name){
            entry.name = name;
          }

          // Prefer aggregating in grams when possible (more consistent across unit choices).
          if(baseG !== null){
            entry.sumG += baseG;
            entry.hasG = true;
          }else if(baseMl !== null){
            entry.sumMl += baseMl;
            entry.hasMl = true;
          }else{
            // Fallback: only aggregate identical non-convertible units (e.g., count).
            if(entry.countUnit && entry.countUnit !== baseUnit){
              entry.sumCount = Math.max(entry.sumCount, baseNeedRaw);
            }else{
              entry.countUnit = baseUnit;
              entry.sumCount += baseNeedRaw;
            }
          }
        });

        // Build the dropdown from unique ingredient IDs (no the numbered suffix suffixes).
        const list = Array.from(aggregated.values())
          .filter(e=>{
            return (e.hasG && e.sumG > 0) || (e.hasMl && e.sumMl > 0) || (e.sumCount > 0);
          })
          .sort((a,b)=> (a.name || '').localeCompare(b.name || ''));

        list.forEach(entry=>{
          let baseMax = 0;
          let baseUnit = 'count';

          if(entry.hasG){
            baseMax = entry.sumG;
            baseUnit = 'g';
          }else if(entry.hasMl){
            baseMax = entry.sumMl;
            baseUnit = 'ml';
          }else{
            baseMax = entry.sumCount;
            baseUnit = entry.countUnit || 'count';
          }

          const idx = items.length;
          items.push({ ingredientId: entry.ingredientId, name: entry.name, baseMax, baseUnit });

          const opt = document.createElement('option');
          opt.value = String(idx);
          opt.textContent = entry.name;
          ingSelect.appendChild(opt);
        });

        const has = items.length > 0;
        ingSelect.disabled = !has;
        btn.disabled = !has;
        toggle.disabled = false;
        ingSelect.selectedIndex = 0;
        ingSelect.value = '';

        autosizeSelect(ingSelect);
        autosizeSelect(unitSelect);
        refreshEnhancedSelect(ingSelect);
        refreshEnhancedSelect(unitSelect);
        showMsg(has ? '' : 'No measurable ingredients found for scaling.');
      }

      function setUnitDefaultForItem(item){
        const u = canonicalUnit(item.baseUnit || '');
        const allowed = new Set(['g','kg','ml','l','tsp','tbsp','cup','count','drop']);
        unitSelect.value = allowed.has(u) ? u : 'g';
        autosizeSelect(unitSelect);
        unitSelect.dispatchEvent(new Event('change', { bubbles:true }));
        refreshEnhancedSelect(unitSelect);
      }

      function scaleNow(){
        const idx = Number(ingSelect.value);
        if(!Number.isFinite(idx) || !items[idx]){
          showMsg('Choose an ingredient first.');
          return;
        }

        const have = Number(amountInput.value);
        if(!Number.isFinite(have) || have <= 0){
          showMsg('Enter how much you have.');
          return;
        }

        const item = items[idx];
        const baseNeed = Number(item.baseMax);
        if(!Number.isFinite(baseNeed) || baseNeed <= 0){
          showMsg('This ingredient cannot be used for scaling.');
          return;
        }

        const haveUnit = canonicalUnit(unitSelect.value || 'g');
        const baseUnit = canonicalUnit(item.baseUnit || 'count');
        const profile = getProfile(item.ingredientId);

        let factor = null;

        const baseG = toGrams(baseNeed, baseUnit, profile);
        const haveG = toGrams(have, haveUnit, profile);
        if(baseG !== null && haveG !== null && baseG > 0){
          factor = haveG / baseG;
        }else{
          const baseMl = toMl(baseNeed, baseUnit, profile);
          const haveMl = toMl(have, haveUnit, profile);
          if(baseMl !== null && haveMl !== null && baseMl > 0){
            factor = haveMl / baseMl;
          }else if(baseUnit === haveUnit){
            factor = have / baseNeed;
          }
        }

        if(factor === null || !Number.isFinite(factor)){
          showMsg('That unit cannot be converted for this ingredient.');
          return;
        }

        const clamped = Math.max(0.01, factor);
        multInput.value = String(clamped);
        applyFn();

        const suffix = (factor !== clamped && clamped === 0.01)
          ? ' Minimum is 0.01 batch.'
          : '';

        const unitTxt = unitLabel(haveUnit, have);
        const line1 = `Scaled to batch ${multInput.value} using ${have} ${unitTxt} of ${item.name}.${suffix}`.trim();
        const line2 = 'Rounded to the nearest usable unit (g/ml or measurement tool).';
        try{
          if(recipeEl && recipeEl.dataset) recipeEl.dataset.scaleSummary = line1;
          if(recipeEl && typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
        }catch(_e){}
        showMsg(line1 + '\n' + line2);
      }

      toggle.addEventListener('click', ()=>{
        const willOpen = !block.classList.contains('is-open');
        block.classList.toggle('is-open', willOpen);
        panel.hidden = !willOpen;
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

        if(willOpen){
          populate();
          autosizeAllSelects();
          // Start on the ingredient chooser so the first required step is selectable.
          const ingApi = ingSelect && ingSelect[BL_SELECT_KEY];
          try{
            if(ingApi && ingApi.btn) ingApi.btn.focus({ preventScroll:true });
            else ingSelect.focus({ preventScroll:true });
          }catch(_e){
            try{ ingSelect.focus(); }catch(__e){}
          }
        }
      });

      ingSelect.addEventListener('change', ()=>{
        const idx = Number(ingSelect.value);
        if(Number.isFinite(idx) && items[idx]){
          setUnitDefaultForItem(items[idx]);
        }
      });

      btn.addEventListener('click', scaleNow);
      amountInput.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
          e.preventDefault();
          scaleNow();
        }
      });
    }

    function ensureLiteralRecipeStructure(recipeEl){
      if(recipeEl && recipeEl.dataset && recipeEl.dataset.staticRecipeShell === '1') return;
      qsa('.variant-switcher', recipeEl).forEach(sw=>{
        const prev = sw.previousElementSibling;
        if(prev && prev.tagName === 'H4' && /^variants$/i.test((prev.textContent || '').trim())) return;
        const h = document.createElement('h4');
        h.className = 'variant-heading';
        h.textContent = 'Variants';
        sw.insertAdjacentElement('beforebegin', h);
      });
      qsa('.scaler-heading', recipeEl).forEach(h=>{ try{ h.remove(); }catch(_e){} });
      try{
        const infoLinks = qsa('a.info-link[data-scroll-to-ingredients], a.info-link[href="#ingredients"]', recipeEl);
        if(infoLinks.length){
          const headings = qsa('h4,h3,h2', recipeEl);
          let ingredientsHeading = headings.find(h=>/^ingredients\b/i.test(String(h.textContent || '').trim()));
          if(ingredientsHeading){
            if(!ingredientsHeading.classList.contains('recipe-ingredients-heading')){
              const raw = String(ingredientsHeading.textContent || '').replace(/\s*\(\s*View\s*\)\s*$/i, '').trim() || 'Ingredients';
              ingredientsHeading.textContent = raw;
              ingredientsHeading.classList.add('recipe-ingredients-heading');
            }
            infoLinks.forEach((link, idx)=>{
              link.textContent = '(View)';
              link.classList.add('recipe-info-view-link', 'print-hide');
              link.setAttribute('aria-label', 'View recipe ingredient information');
              if(idx === 0){
                ingredientsHeading.appendChild(document.createTextNode(' '));
                ingredientsHeading.appendChild(link);
              }else{
                try{ link.remove(); }catch(_e){}
              }
            });
          }
        }
      }catch(_e){}
    }

    function setupRecipeCompactOptions(recipeEl){
      if(!recipeEl || (recipeEl.dataset && recipeEl.dataset.compactOptionsReady === '1')) return;
      const controls = q('.recipe-controls', recipeEl);
      const printSummary = q('.print-summary', recipeEl);
      const titleRow = q('.recipe-title-row', recipeEl) || q('h3,h2,h1', recipeEl);
      if(!titleRow || !controls || !printSummary) return;

      let strip = q('.recipe-option-strip[data-static-recipe-shell="1"]', recipeEl);
      let editBody = q('.recipe-edit-options[data-static-recipe-shell="1"]', recipeEl);
      let adjustmentsBtn = q('.recipe-adjustments-toggle[data-static-recipe-shell="1"]', recipeEl);
      const preauthored = !!(strip && editBody && adjustmentsBtn);

      if(!strip){
        strip = document.createElement('div');
        strip.className = 'recipe-option-strip recipe-standard-controls print-hide';
      }
      ['pointerdown','mousedown','touchstart','click'].forEach(function(evtName){
        strip.addEventListener(evtName, function(e){ e.stopPropagation(); });
      });

      const variantSwitcher = q('.variant-switcher', recipeEl);
      let variantSelect = null;
      if(variantSwitcher && !preauthored){
        variantSwitcher.classList.add('recipe-native-variant-switcher', 'print-hide');
        const field = document.createElement('div');
        field.className = 'recipe-variant-field';
        variantSelect = document.createElement('select');
        variantSelect.className = 'recipe-variant-select';
        variantSelect.setAttribute('aria-label', 'Select Variant');
        const placeholderOpt = document.createElement('option');
        placeholderOpt.value = '';
        placeholderOpt.textContent = 'Select Variant';
        placeholderOpt.selected = true;
        placeholderOpt.disabled = true;
        placeholderOpt.hidden = true;
        variantSelect.appendChild(placeholderOpt);
        qsa('.variant-tab', variantSwitcher).forEach(btn=>{
          const opt = document.createElement('option');
          opt.value = btn.getAttribute('data-variant') || btn.textContent.trim();
          opt.textContent = btn.textContent.trim();
          variantSelect.appendChild(opt);
        });
        const activeVariant = q('.variant-tab[aria-selected="true"]', variantSwitcher);
        if(activeVariant){
          const initialVariant = activeVariant.getAttribute('data-variant') || activeVariant.textContent.trim();
          if(initialVariant) variantSelect.value = initialVariant;
        }
        field.appendChild(variantSelect);
        strip.appendChild(field);

        variantSelect.addEventListener('change', (event)=>{
          try{ if(event) event.stopPropagation(); }catch(_e){}
          if(!variantSelect.value) return;
          const btn = q('.variant-tab[data-variant="' + CSS.escape(variantSelect.value) + '"]', variantSwitcher);
          if(btn){
            btn.click();
            const chosenValue = variantSelect.value;
            window.setTimeout(()=>{
              if(chosenValue) variantSelect.value = chosenValue;
              if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
              try{ if(typeof recipeEl.__baselineApplyScaling === 'function') recipeEl.__baselineApplyScaling(); }catch(_e){}
            }, 0);
          }
        });
      }

      let detailsVariantSwitcher = null;
      const detailsIntro = q(':scope > .recipe-details-intro', recipeEl);
      if(variantSwitcher && detailsIntro){
        const variantButtons = qsa('.variant-tab', variantSwitcher);
        if(variantButtons.length > 1){
          const detailsField = document.createElement('div');
          detailsField.className = 'recipe-details-variant-field print-hide';

          const detailsLabel = document.createElement('div');
          detailsLabel.className = 'recipe-details-variant-label';
          detailsLabel.textContent = 'Variance';

          detailsVariantSwitcher = document.createElement('div');
          detailsVariantSwitcher.className = 'recipe-details-variant-switcher';
          detailsVariantSwitcher.setAttribute('role', 'tablist');
          detailsVariantSwitcher.setAttribute('aria-label', 'Select recipe variance');

          variantButtons.forEach(btn=>{
            const tag = document.createElement('button');
            tag.type = 'button';
            tag.className = 'recipe-variant-tag';
            tag.setAttribute('role', 'tab');
            tag.setAttribute('data-variant', btn.getAttribute('data-variant') || btn.textContent.trim());
            tag.textContent = btn.textContent.trim();
            tag.addEventListener('click', event=>{
              try{ if(event) event.stopPropagation(); }catch(_e){}
              const value = tag.getAttribute('data-variant') || '';
              const nativeBtn = q('.variant-tab[data-variant="' + CSS.escape(value) + '"]', variantSwitcher);
              if(nativeBtn) nativeBtn.click();
            });
            detailsVariantSwitcher.appendChild(tag);
          });

          detailsField.append(detailsLabel, detailsVariantSwitcher);
          detailsIntro.insertAdjacentElement('afterbegin', detailsField);

          const detailSummary = document.createElement('div');
          detailSummary.className = 'recipe-detail-block recipe-selected-variance-detail';
          const summaryHeading = document.createElement('h4');
          summaryHeading.textContent = 'Selected Variance';
          const summaryText = document.createElement('p');
          detailSummary.append(summaryHeading, summaryText);
          detailsField.insertAdjacentElement('afterend', detailSummary);

          const selectedVariantValue = ()=>{
            const active = q('.variant-tab[aria-selected="true"]', variantSwitcher) || variantButtons[0];
            return active ? (active.getAttribute('data-variant') || active.textContent.trim()) : '';
          };

          const syncVariantDetailState = ()=>{
            const active = q('.variant-tab[aria-selected="true"]', variantSwitcher) || variantButtons[0];
            if(!active) return;
            const value = active.getAttribute('data-variant') || active.textContent.trim();
            const label = active.textContent.trim();
            if(variantSelect && value) variantSelect.value = value;

            if(detailsVariantSwitcher){
              qsa('.recipe-variant-tag', detailsVariantSwitcher).forEach(tag=>{
                const selected = tag.getAttribute('data-variant') === value;
                tag.setAttribute('aria-selected', selected ? 'true' : 'false');
                tag.tabIndex = selected ? 0 : -1;
              });
            }

            const activePanel = value
              ? q('.variant-panel[data-variant-panel="' + CSS.escape(value) + '"]', recipeEl)
              : q('.variant-panel:not([hidden])', recipeEl);
            const feel = activePanel ? q('.glide-explain', activePanel) : null;
            const breakdown = activePanel ? q('.glide-breakdown', activePanel) : null;
            const detailParts = [];
            if(feel && String(feel.textContent || '').trim()) detailParts.push(String(feel.textContent || '').trim());
            if(breakdown && String(breakdown.textContent || '').trim()){
              detailParts.push(String(breakdown.textContent || '').replace(/^\s*(?:Selected variant|Current blend):\s*/i,'').replace(/\s+/g,' ').trim());
            }
            summaryText.textContent = label + (detailParts.length ? ' — ' + detailParts.join(' ') : '');

            qsa('[data-recipe-variant-detail]', detailsIntro).forEach(el=>{
              const allowed = String(el.getAttribute('data-recipe-variant-detail') || '')
                .split(/\s+/).map(v=>v.trim()).filter(Boolean);
              el.hidden = allowed.length > 0 && !allowed.includes(value);
            });
          };

          const syncVariantRoute = (historyMode='replace')=>{
            if(!(recipeEl.classList.contains('active') || recipeEl.classList.contains('is-open'))) return;
            try{
              const value = selectedVariantValue();
              const nextState = {
                kind:'recipe',
                recipeId:recipeEl.id,
                recipeView:normalizeRecipeSubView(recipeEl.dataset.recipeView || 'standard'),
                recipeVariant:value,
                scrollY:getScrollTop()
              };
              setNavState(nextState, { replace:historyMode !== 'push', url:urlForNavState(nextState) });
            }catch(_e){}
          };

          const setVariant = (value, options={})=>{
            const chosen = String(value || '').trim();
            if(!chosen) return false;
            const btn = q('.variant-tab[data-variant="' + CSS.escape(chosen) + '"]', variantSwitcher);
            if(!btn) return false;
            if(btn.getAttribute('aria-selected') !== 'true') btn.click();
            syncVariantDetailState();
            if(options.syncRoute) syncVariantRoute(options.historyMode || 'replace');
            return true;
          };

          variantButtons.forEach(btn=>{
            btn.addEventListener('click', ()=>{
              window.setTimeout(()=>{
                syncVariantDetailState();
                syncVariantRoute('push');
              }, 0);
            });
          });

          try{
            recipeEl.__baselineSyncVariantDetailState = syncVariantDetailState;
            recipeEl.__baselineSetRecipeVariant = setVariant;
            recipeEl.__baselineGetRecipeVariant = selectedVariantValue;
          }catch(_e){}

          let routeVariant = '';
          try{
            const routeState = recipePathStateFromLocation();
            const routeId = routeState && routeState.recipeId ? recipeIdForToken(routeState.recipeId) : '';
            if(routeState && routeId === recipeEl.id) routeVariant = String(routeState.recipeVariant || '').trim();
          }catch(_e){}
          if(routeVariant) setVariant(routeVariant, { syncRoute:false });
          syncVariantDetailState();
        }
      }

      const formulaRows = qsa(':scope > .recipe-control-row--oat, :scope > .recipe-control-row--thickness', controls);
      if(formulaRows.length){
        let formulaControls = q(':scope > .recipe-formula-controls', strip);
        if(!formulaControls){
          formulaControls = document.createElement('div');
          formulaControls.className = 'recipe-formula-controls';
          strip.appendChild(formulaControls);
        }
        formulaRows.forEach(row=> formulaControls.appendChild(row));
      }

      if(!preauthored){
        adjustmentsBtn = document.createElement('button');
        adjustmentsBtn.type = 'button';
        adjustmentsBtn.className = 'recipe-adjustments-toggle print-hide';
        adjustmentsBtn.setAttribute('aria-expanded', 'false');
        adjustmentsBtn.textContent = 'Adjustments';

        editBody = document.createElement('div');
        editBody.className = 'recipe-edit-options recipe-adjustments-panel print-hide';
        editBody.hidden = true;

        titleRow.insertAdjacentElement('afterend', printSummary);
        printSummary.insertAdjacentElement('afterend', strip);
        strip.insertAdjacentElement('afterend', editBody);
        controls.classList.add('recipe-edit-controls');
        editBody.appendChild(controls);
      }else{
        controls.classList.add('recipe-edit-controls');
      }

      try{
        recipeEl.classList.remove('recipe-options-open');
        recipeEl.classList.remove('recipe-adjustments-open');
      }catch(_e){}
      editBody.hidden = true;
      adjustmentsBtn.setAttribute('aria-expanded', 'false');

      adjustmentsBtn.addEventListener('click', ()=>{
        const open = !recipeEl.classList.contains('recipe-adjustments-open');
        recipeEl.classList.toggle('recipe-adjustments-open', open);
        // Retain the legacy class only as a compatibility hook for the existing
        // control CSS. Recipe-specific controls are independently forced visible
        // by the universal template contract.
        recipeEl.classList.toggle('recipe-options-open', open);
        editBody.hidden = !open;
        adjustmentsBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      let methodRefreshFrame=0;
      function refreshMethodAmountsFromVisibleIngredients(){
        const run=()=>{
          methodRefreshFrame=0;
          try{ injectMethodAmounts(recipeEl); }catch(_e){}
        };
        if(typeof window.requestAnimationFrame === 'function'){
          if(methodRefreshFrame) window.cancelAnimationFrame(methodRefreshFrame);
          methodRefreshFrame=window.requestAnimationFrame(()=>{
            methodRefreshFrame=window.requestAnimationFrame(run);
          });
        }else{
          window.setTimeout(run, 0);
        }
      }
      try{ recipeEl.__baselineRefreshMethodAmounts = refreshMethodAmountsFromVisibleIngredients; }catch(_e){}

      qsa('.variant-tab', recipeEl).forEach(btn=>{
        btn.addEventListener('click', ()=>{
          window.setTimeout(()=>{
            const v = btn.getAttribute('data-variant') || btn.textContent.trim();
            if(variantSelect && v) variantSelect.value = v;
            if(typeof recipeEl.__baselineSyncVariantDetailState === 'function') recipeEl.__baselineSyncVariantDetailState();
            if(typeof window.refreshRecipeComedogenic === 'function') window.refreshRecipeComedogenic(recipeEl);
            if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
            refreshMethodAmountsFromVisibleIngredients();
          }, 0);
        });
      });

      qsa('input[type="range"]', recipeEl).forEach(slider=>{
        slider.addEventListener('input', ()=>{
          if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
          refreshMethodAmountsFromVisibleIngredients();
        });
        slider.addEventListener('change', ()=>{
          if(typeof recipeEl.__baselineUpdatePrintSummary === 'function') recipeEl.__baselineUpdatePrintSummary();
          refreshMethodAmountsFromVisibleIngredients();
        });
      });

      qsa('.slider-default-btn, .slider-reset-btn', recipeEl).forEach(button=>{
        button.addEventListener('click', refreshMethodAmountsFromVisibleIngredients);
      });

      try{ recipeEl.__baselineAdjustmentsButton = adjustmentsBtn; }catch(_e){}
      if(recipeEl.dataset) recipeEl.dataset.compactOptionsReady = '1';
    }

    function setupRecipeUniversalTemplate(recipeEl){
      if(!recipeEl || (recipeEl.dataset && recipeEl.dataset.universalTemplateReady === '1')) return;
      const titleRow = q('.recipe-title-row', recipeEl) || q('h3,h2,h1', recipeEl);
      const strip = q('.recipe-option-strip', recipeEl);
      const editBody = q('.recipe-edit-options', recipeEl);
      if(!titleRow || !strip || !editBody) return;

      recipeEl.classList.add('recipe-universal-template');

      let metaRow = q('.recipe-meta-row[data-static-recipe-shell="1"]', recipeEl);
      let metaSummary = metaRow ? q('.recipe-meta-summary', metaRow) : null;
      let adjustmentsRow = q('.recipe-adjustments-row[data-static-recipe-shell="1"]', recipeEl);
      let tabs = q('.recipe-subtabs[data-static-recipe-shell="1"]', recipeEl);
      const preauthored = !!(metaRow && metaSummary && adjustmentsRow && tabs);

      function addMeta(label, value, className){
        const item = document.createElement('span');
        item.className = 'recipe-meta-item' + (className ? (' ' + className) : '');
        const key = document.createElement('span');
        key.className = 'recipe-meta-key';
        key.textContent = label + ':';
        const val = document.createElement('span');
        val.className = 'recipe-meta-value';
        val.textContent = String(value || '').trim();
        item.append(key, document.createTextNode(' '), val);
        metaSummary.appendChild(item);
        return val;
      }

      let batchMetaValue = null;

      if(preauthored){
        // Canonical metadata policy: every recipe shows one Batch item only.
        // Remove older Yield/extra metadata so no recipe displays contradictory
        // or redundant values such as "Yield: 1 recipe batch • Batch: 1×".
        qsa('.recipe-meta-item', metaSummary).forEach(item=>{
          const key = q('.recipe-meta-key', item);
          const label = String(key ? key.textContent : '').replace(/:\s*$/,'').trim().toLowerCase();
          if(label !== 'batch') item.remove();
        });
        batchMetaValue = q('.recipe-batch-meta-value', metaRow) || q('.recipe-meta-item .recipe-meta-value', metaRow);
        if(batchMetaValue){
          batchMetaValue.classList.add('recipe-batch-meta-value');
          batchMetaValue.textContent = '1×';
        }
      }else{
        metaRow = document.createElement('div');
        metaRow.className = 'recipe-meta-row';
        metaSummary = document.createElement('div');
        metaSummary.className = 'recipe-meta-summary';
        metaRow.appendChild(metaSummary);

        batchMetaValue = addMeta('Batch', '1×');
        if(batchMetaValue) batchMetaValue.classList.add('recipe-batch-meta-value');

        const adjustmentsBtnForRow = recipeEl.__baselineAdjustmentsButton || q('.recipe-adjustments-toggle', recipeEl);
        adjustmentsRow = document.createElement('div');
        adjustmentsRow.className = 'recipe-adjustments-row print-hide';
        if(adjustmentsBtnForRow) adjustmentsRow.appendChild(adjustmentsBtnForRow);

        tabs = document.createElement('div');
        tabs.className = 'recipe-subtabs print-hide';
        tabs.setAttribute('role', 'tablist');
        tabs.setAttribute('aria-label', 'Recipe views');
        const tabDefs = [
          ['standard', 'Standard View'],
          ['details', 'Details'],
          ['guidance', 'Guidance'],
          ['show-all', 'Show All']
        ];
        tabDefs.forEach(([id, label])=>{
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'recipe-subtab';
          button.dataset.recipeSubtab = id;
          button.setAttribute('role', 'tab');
          button.setAttribute('aria-selected', id === 'standard' ? 'true' : 'false');
          button.textContent = label;
          tabs.appendChild(button);
        });

        titleRow.insertAdjacentElement('afterend', metaRow);
        metaRow.insertAdjacentElement('afterend', adjustmentsRow);
        adjustmentsRow.insertAdjacentElement('afterend', editBody);
        editBody.insertAdjacentElement('afterend', tabs);
        tabs.insertAdjacentElement('afterend', strip);
      }

      const adjustmentsBtn = recipeEl.__baselineAdjustmentsButton || q('.recipe-adjustments-toggle', recipeEl);

      let viewbar = q(':scope > .recipe-viewbar', recipeEl);
      if(!viewbar){
        viewbar = document.createElement('div');
        viewbar.className = 'recipe-viewbar print-hide';
        metaRow.insertAdjacentElement('afterend', viewbar);
      }
      if(tabs.parentElement !== viewbar) viewbar.appendChild(tabs);
      if(adjustmentsBtn && adjustmentsBtn.parentElement !== viewbar) viewbar.appendChild(adjustmentsBtn);
      if(adjustmentsRow){
        adjustmentsRow.classList.add('recipe-adjustments-row-retired');
        adjustmentsRow.hidden = true;
      }
      if(editBody.previousElementSibling !== viewbar){
        viewbar.insertAdjacentElement('afterend', editBody);
      }
      if(strip.previousElementSibling !== editBody){
        editBody.insertAdjacentElement('afterend', strip);
      }

      const legacyPrintSummary = q('.print-summary', recipeEl);
      if(legacyPrintSummary) legacyPrintSummary.classList.add('recipe-legacy-print-summary');

      const batchInput = q('input.multiplier-input', recipeEl);
      function tidyNumber(value){
        const rounded = Math.round(Number(value) * 100) / 100;
        return Number.isInteger(rounded) ? String(rounded) : String(rounded);
      }
      function syncUniversalRecipeMeta(){
        let batch = batchInput ? parseFloat(batchInput.value || '1') : 1;
        if(!Number.isFinite(batch) || batch <= 0) batch = 1;
        if(batchMetaValue) batchMetaValue.textContent = tidyNumber(batch) + '×';
      }
      if(batchInput){
        batchInput.addEventListener('input', syncUniversalRecipeMeta);
        batchInput.addEventListener('change', syncUniversalRecipeMeta);
      }
      syncUniversalRecipeMeta();
      try{ recipeEl.__baselineSyncUniversalRecipeMeta = syncUniversalRecipeMeta; }catch(_e){}

      function headingGroup(text){
        const t = String(text || '').replace(/\(\s*view\s*\)/ig, '').replace(/\s+/g, ' ').trim().toLowerCase();
        if(!t) return '';
        if(/(?:^|\s)ingredients? roles?\b|^meta\b|^formula\b|technical|breakdown/.test(t)) return 'details';
        if(/^ingredients?\b/.test(t) || /^method\b/.test(t)) return 'standard';
        if(/storage|\buse\b|serving|body\s*&\s*sensory|comedogenic|safety|preservation|^notes?\b/.test(t)) return 'guidance';
        return '';
      }

      function markContainer(container){
        if(!container) return;
        const children = Array.from(container.children || []);
        let current = '';
        let seenRecognisedHeading = false;
        children.forEach((child, index)=>{
          if(child === metaRow || child === editBody || child === tabs || child === strip || child.classList.contains('recipe-actions') || child.classList.contains('recipe-title-row') || child.classList.contains('print-summary')){
            return;
          }
          if(child.classList.contains('variant-panel')){
            markContainer(child);
            return;
          }
          if(/^H[1-4]$/i.test(child.tagName || '')){
            const group = headingGroup(child.textContent || '');
            if(group){
              current = group;
              seenRecognisedHeading = true;
              child.dataset.recipeViewGroup = group;
            }else if(container.classList && container.classList.contains('variant-panel') && !seenRecognisedHeading){
              // Variant name heading belongs with the make-the-recipe view.
              current = 'standard';
              child.dataset.recipeViewGroup = 'standard';
            }else{
              current = '';
            }
            return;
          }
          if(current){
            child.dataset.recipeViewGroup = current;
          }else if(container.classList && container.classList.contains('variant-panel') && !seenRecognisedHeading){
            child.dataset.recipeViewGroup = 'standard';
          }
        });
      }

      if(!preauthored){
        markContainer(recipeEl);
        qsa('.variant-panel', recipeEl).forEach(markContainer);
  
        // Recipe-specific controls are part of Standard View, never hidden behind
        // the Adjustments utility panel.
        strip.dataset.recipeViewGroup = 'standard';
        qsa('.glide-controller', recipeEl).forEach(controller=>{
          controller.dataset.recipeViewGroup = 'standard';
          const previous = controller.previousElementSibling;
          if(previous && previous.matches && previous.matches('p')){
            previous.classList.add('recipe-slider-intro-legacy');
          }
        });
  
        // Existing status/meta prose is deeper information once the compact metadata
        // row represents it. This prevents the Testing sentence and ad-hoc Meta prose
        // from cluttering Standard View.
        qsa(':scope > p.note', recipeEl).forEach(note=>{
          const text = String(note.textContent || '');
          if(/formulation currently being tested/i.test(text) || /\b(?:Yield|Equipment|Allergens?)\s*:/i.test(text) || /Barrier-first.*Vegan/i.test(text)){
            note.dataset.recipeViewGroup = 'details';
          }
        });
        qsa('p', recipeEl).forEach(p=>{
          if(/^\s*Total\s*[–—:-]/i.test(String(p.textContent || ''))){
            p.dataset.recipeViewGroup = 'details';
          }
        });
  
        // The ingredient-library link is supporting information, not part of the
        // minimal make-the-recipe view. Keep it available in Details and Show All.
        qsa('.recipe-info-view-link, .info-link', recipeEl).forEach(link=>{
          link.dataset.recipeViewGroup = 'details';
        });
  
        function normalizeEmphasis(){
          qsa('ol > li > strong:first-child', recipeEl).forEach(strong=>{
            const value = String(strong.textContent || '').trim();
            if(!value) return;
            if(/^[0-9¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/.test(value)) return;
            strong.classList.add('recipe-method-action');
            const next = strong.nextSibling;
            if(next && next.nodeType === Node.TEXT_NODE && /^\s*:/.test(next.nodeValue || '') && !/:$/.test(value)){
              strong.textContent = value + ':';
              next.nodeValue = String(next.nodeValue || '').replace(/^\s*:\s*/, ' ');
            }
          });
          qsa('.ing-subhead > strong', recipeEl).forEach(strong=> strong.classList.add('recipe-subgroup-label'));
          qsa('[data-recipe-view-group="details"] li > strong:first-child', recipeEl).forEach(strong=> strong.classList.add('recipe-detail-label'));
          qsa('[data-recipe-view-group="guidance"] li > strong:first-child, [data-recipe-view-group="guidance"] p > strong:first-child', recipeEl).forEach(strong=> strong.classList.add('recipe-guidance-label'));
        }
        normalizeEmphasis();
      }

      function setView(view, options={}){
        const next = normalizeRecipeSubView(view);
        recipeEl.dataset.recipeView = next;
        qsa('.recipe-subtab', tabs).forEach(button=>{
          button.setAttribute('aria-selected', button.dataset.recipeSubtab === next ? 'true' : 'false');
        });
        qsa('[data-recipe-view-group]', recipeEl).forEach(el=>{
          const group = el.dataset.recipeViewGroup || '';
          const visible = next === 'show-all' || group === next;
          el.classList.toggle('recipe-view-hidden', !visible);
          if(el.classList && el.classList.contains('recipe-details-intro')){
            el.hidden = !visible;
          }
        });
        // Adjustments only belong to the make-the-recipe surfaces.
        // Leaving Recipe/Show All also closes the panel so no adjustment state
        // remains open while Details or Guidance is being read.
        const adjustmentsAvailable = next === 'standard' || next === 'show-all';
        if(adjustmentsBtn) adjustmentsBtn.classList.toggle('recipe-view-hidden', !adjustmentsAvailable);
        if(!adjustmentsAvailable){
          recipeEl.classList.remove('recipe-options-open');
          recipeEl.classList.remove('recipe-adjustments-open');
          editBody.hidden = true;
          adjustmentsBtn.setAttribute('aria-expanded', 'false');
        }else{
          editBody.classList.remove('recipe-view-hidden');
        }
        metaRow.classList.remove('recipe-view-hidden');
        tabs.classList.remove('recipe-view-hidden');
        viewbar.classList.remove('recipe-view-hidden');

        // Recipe subview is route state, not transient DOM state. User clicks
        // push a history entry; restoration/programmatic sync may replace one.
        if(options && options.syncRoute && recipeEl.id
          && (recipeEl.classList.contains('active') || recipeEl.classList.contains('is-open'))){
          try{
            const nextState = {
              kind:'recipe',
              recipeId:recipeEl.id,
              recipeView:next,
              recipeVariant:(typeof recipeEl.__baselineGetRecipeVariant === 'function' ? recipeEl.__baselineGetRecipeVariant() : ''),
              scrollY:getScrollTop()
            };
            setNavState(nextState, { replace:options.historyMode !== 'push', url:urlForNavState(nextState) });
          }catch(_e){}
        }
      }

      qsa('.recipe-subtab', tabs).forEach(button=>{
        button.addEventListener('click', event=>{
          event.preventDefault();
          event.stopPropagation();
          setView(button.dataset.recipeSubtab || 'standard', { syncRoute:true, historyMode:'push' });
        });
      });

      // Initialise from the clean recipe route when this card is the current
      // recipe. This prevents a late template enhancement from resetting a
      // refreshed ?view=details|guidance|show-all route back to Recipe.
      let authoredInitialView = 'standard';
      try{
        const routeState = recipePathStateFromLocation();
        const routeId = routeState && routeState.recipeId ? recipeIdForToken(routeState.recipeId) : '';
        if(routeState && routeId === recipeEl.id){
          authoredInitialView = normalizeRecipeSubView(routeState.recipeView || 'standard');
        }
      }catch(_e){}
      setView(authoredInitialView, { syncRoute:false });
      try{ recipeEl.__baselineSetRecipeView = setView; }catch(_e){}
      if(recipeEl.dataset) recipeEl.dataset.universalTemplateReady = '1';
    }

    function normalizeRecipeSliderPlacement(recipeEl){
      const scopes = [recipeEl, ...qsa('.variant-panel', recipeEl)];
      scopes.forEach(scope=>{
        const directChildren = Array.from(scope.children || []);
        const ingredientHeading = directChildren.find(el =>
          /^H[1-4]$/i.test(el.tagName || '') &&
          /^ingredients\b/i.test(String(el.textContent || '').trim())
        );
        if(!ingredientHeading) return;

        const sliders = directChildren.filter(el =>
          el.classList && el.classList.contains('glide-controller')
        );
        if(!sliders.length) return;

        sliders.forEach(slider=>{
          if(slider.nextElementSibling === ingredientHeading) return;
          scope.insertBefore(slider, ingredientHeading);
        });
      });
    }

    function normalizeRecipeSliderTemplate(recipeEl){
      qsa('.glide-controller', recipeEl).forEach(controller=>{
        // Paired sliders used to be wrapped in .glide-control-stack. Physically
        // flatten that wrapper so the universal grid owns both slider columns
        // directly; this prevents page-local stack rules from creating unequal widths.
        qsa(':scope > .glide-control-stack', controller).forEach(stack=>{
          Array.from(stack.children || []).forEach(child=>{
            if(child.classList && child.classList.contains('glide-control-main')){
              controller.insertBefore(child, stack);
            }
          });
          try{ stack.remove(); }catch(_e){}
        });

        const controls = qsa(':scope > .glide-control-main', controller);
        if(!controls.length) return;

        controller.classList.add('recipe-slider-template');
        controller.dataset.sliderCount = String(controls.length > 1 ? 2 : 1);

        qsa('.recipe-slider-instruction, .glide-variable-help', controller).forEach(el=>{
          try{ el.remove(); }catch(_e){}
        });

        const explainers = qsa('.glide-control-explainer', controller);
        if(explainers.length){
          const explainer = explainers[0];
          const title = q('.glide-explain-title', explainer);
          if(title) title.textContent = 'Overall Feel';
          qsa('.glide-breakdown', explainer).forEach(el=>{
            el.hidden = true;
            el.setAttribute('aria-hidden', 'true');
          });
        }
      });
    }

    recipes.forEach(recipeEl=>{
      // Prepare
      wrapAmounts(recipeEl);
      ensureLiteralRecipeStructure(recipeEl);
      buildControls(recipeEl);
      setupRecipeCompactOptions(recipeEl);
      setupRecipeUniversalTemplate(recipeEl);
      normalizeRecipeSliderTemplate(recipeEl);
      normalizeRecipeSliderPlacement(recipeEl);

      // Ensure method "Amounts:" pills exist immediately on first render.
      // Each ingredient is emitted only at its first assigned/actual-use step.
      try{ injectMethodAmounts(recipeEl); }catch(_e){}
    });

    // Initial sizing of all dropdowns
    autosizeAllSelects();

    // Keep dropdown widths in sync with responsive breakpoints
    let _selectRaf = null;
    window.addEventListener('resize', ()=>{
      if(_selectRaf) cancelAnimationFrame(_selectRaf);
      _selectRaf = requestAnimationFrame(()=>{
        _selectRaf = null;
        autosizeAllSelects();
      });
    });
  }

  // ---------------------------
  // Print helper (kept global)
  // ---------------------------
  window.printCard = function(cardId){
    const card = document.getElementById(cardId);
    if(!card) return;

    // Ensure the recipe display matches the current controls before printing.
    try{
      if(typeof card.__baselineApplyScaling === 'function') card.__baselineApplyScaling();
    }catch(_e){}

    // Mark the current recipe as the print target (CSS prints only this card).
    qsa('#recipes .recipe-page.print-target').forEach(el=>el.classList.remove('print-target'));
    card.classList.add('print-target');

    document.body.classList.add('printing-recipe');

    // Use the browser print dialog (no popups).
    window.print();
  };

  // Support Ctrl/Cmd+P in focused recipe view (prints the visible recipe card cleanly).
  window.addEventListener('beforeprint', ()=>{
    const recipesSection = q('#recipes');
    if(!recipesSection) return;

    if(document.body.classList.contains('printing-recipe')) return;

    // If a single recipe is visible (open mode), print only that one.
    const visible = qsa('#recipes .recipe-page').filter(el=>{
      const st = window.getComputedStyle(el);
      return st && st.display !== 'none' && st.visibility !== 'hidden';
    });

    if(visible.length === 1){
      qsa('#recipes .recipe-page.print-target').forEach(el=>el.classList.remove('print-target'));
      visible[0].classList.add('print-target');
      document.body.classList.add('printing-recipe');
    }
  });

  window.addEventListener('afterprint', ()=>{
    document.body.classList.remove('printing-recipe');
    qsa('#recipes .recipe-page.print-target').forEach(el=>el.classList.remove('print-target'));
  });

  

  // ---------------------------
  // Ensure recipe ingredient wording matches the ingredient library titles
  // (prevents drift like "dried basil" vs "Basil (Dried)")
  // ---------------------------
  function syncIngredientLinkLabels(){
    const map = new Map();

    // Ingredient cards are in the Ingredients tab/section.
    qsa('#ingredients .card[id^="ing-"]').forEach(card=>{
      const id = card.id;
      const h3 = q('h3', card);
      const title = h3 ? (h3.textContent || '').trim() : '';
      if(id && title) map.set(id, title);
    });

    if(!map.size) return;

    qsa('a.ing-link[data-ingredient]').forEach(a=>{
      // Oat type links are intentionally dynamic.
      if(a.classList.contains('oat-type-link')) return;
      const id = a.dataset ? a.dataset.ingredient : '';
      if(!id) return;
      const title = map.get(id);
      if(title) a.textContent = title;
    });
  }
// ---------------------------
  // Boot
  // ---------------------------
  async function bootBaselineShared(){
    try{ if(window.__BL_SHARED_BOOTED__) return; window.__BL_SHARED_BOOTED__ = true; }catch(_e){}
    // Load one final geometry/alignment authority after each system's theme.
    // Every full-width gradient is painted in viewport coordinates, so its
    // centre and colour stops cannot drift when a scrollbar or nested wrapper
    // changes the element's own width.
    (function ensureGradientAlignmentStylesheet(){
      try{
        const build = 'BASELINE_GRADIENT_ALIGNMENT_20260801_1';
        const href = '/sitewide/css/baseline-gradient-alignment.css?v=' + build;
        let link = document.querySelector('link[data-baseline-gradient-alignment]');
        if(!link){
          link = document.createElement('link');
          link.rel = 'stylesheet';
          link.setAttribute('data-baseline-gradient-alignment','true');
        }
        if(link.getAttribute('href') !== href) link.setAttribute('href',href);
        document.head.appendChild(link);
      }catch(_e){ /* the existing canonical header remains the safe fallback */ }
    })();
    // ------------------------------------------------------------
    // Theme sync for root element
    // ------------------------------------------------------------
    // Some browsers paint the scrollbar gutter using the root (<html>) background.
    // Our gradients are applied to <body> via [data-app]. To avoid any white/grey
    // seams beside the scrollbar and to keep scrollbars on-theme, we mirror the
    // theme background + scrollbar tokens onto <html>.
    (function syncRootTheme(){
      try{
        const body = document.body;
        if(!body) return;
        const cs = getComputedStyle(body);
        const root = document.documentElement;

        // Mirror theme tokens (defined per page in baseline-themes.css)
        ['--scroll-track','--scroll-thumb','--scroll-thumb-hover','--page-bg'].forEach(v=>{
          const val = (cs.getPropertyValue(v) || '').trim();
          if(val) root.style.setProperty(v, val);
        });

        // Mirror the computed background so the gutter matches the active page theme.
        const bgImg = cs.backgroundImage;
        const bgCol = cs.backgroundColor;
        if(bgImg && bgImg !== 'none'){
          root.style.backgroundImage = bgImg;
          root.style.backgroundColor = bgCol;
          root.style.backgroundAttachment = 'fixed';
          root.style.backgroundSize = '100vw 100vh';
          root.style.backgroundPosition = 'left top';
        }else{
          const pageBg = (cs.getPropertyValue('--page-bg') || '').trim();
          if(pageBg){
            root.style.background = pageBg;
            root.style.backgroundAttachment = 'fixed';
            root.style.backgroundSize = '100vw 100vh';
            root.style.backgroundPosition = 'left top';
          }
        }
      }catch(_e){ /* no-op */ }
    })();

    function applyNavState(state){
      if(!state || typeof state !== 'object'){
        state = cleanRouteStateFromPath();
        if(!state || typeof state !== 'object') return;
      }

      if(state.kind === 'tab'){
        if(state.tabId === 'recipes' && typeof window.BASELINE_showAllRecipes === 'function'){
          window.BASELINE_showAllRecipes({ silentHistory:true });
          return;
        }
        if(typeof window.BASELINE_selectTab === 'function' && state.tabId){
          window.BASELINE_selectTab(state.tabId, { silentHistory:true });
        }
        return;
      }

      if(state.kind === 'recipe'){
        if(typeof window.BASELINE_openRecipe === 'function' && state.recipeId){
          window.BASELINE_openRecipe(state.recipeId, { silentHistory:true, noScroll:true });
          try{
            const card=document.getElementById(recipeIdForToken(state.recipeId));
            if(card){
              if(typeof card.__baselineSetRecipeVariant === 'function' && state.recipeVariant){
                card.__baselineSetRecipeVariant(state.recipeVariant, { syncRoute:false });
              }
              if(typeof card.__baselineSetRecipeView === 'function'){
                card.__baselineSetRecipeView(normalizeRecipeSubView(state.recipeView || 'standard'), { syncRoute:false });
              }
            }
          }catch(_e){}
        }
        return;
      }

      if(state.kind === 'ingredients'){
        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('ingredients', { silentHistory:true });
        }
        if(state.recipeFilter && typeof window.BASELINE_setIngredientFilter === 'function'){
          window.BASELINE_setIngredientFilter(state.recipeFilter, { silentHistory:true });
        }
        return;
      }

      if(state.kind === 'ingredient'){
        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('ingredients', { silentHistory:true });
        }
        if(state.recipeFilter && typeof window.BASELINE_setIngredientFilter === 'function'){
          window.BASELINE_setIngredientFilter(state.recipeFilter, { silentHistory:true });
        }
        // If scrollY is present, prefer restoring the exact scroll position (Back/Forward).
        // Otherwise, scroll to the ingredient anchor.
        if(!(typeof state.scrollY === 'number')){
          if(state.ingredientId && typeof window.BASELINE_scrollToIngredient === 'function'){
            window.BASELINE_scrollToIngredient(state.ingredientId);
          }
        }
        return;
      }

      if(state.kind === 'support'){
        if(typeof window.BASELINE_selectTab === 'function'){
          window.BASELINE_selectTab('support', { silentHistory:true });
        }
        if(!(typeof state.scrollY === 'number')){
          if(state.supportId && typeof window.BASELINE_scrollToSupportCard === 'function'){
            window.BASELINE_scrollToSupportCard(state.supportId);
          }
        }
        return;
      }
    }

    if(!window.__BL_POPSTATE_BOUND__){
      window.__BL_POPSTATE_BOUND__ = true;
      window.addEventListener('popstate', (e)=>{
      const st = getNavState(e.state);
      applyNavState(st);
      try{
        if(st && typeof st.scrollY === 'number'){
          window.setTimeout(()=>{ try{ scrollRootTo(st.scrollY, 'auto'); }catch(_e){} }, 0);
        }
      }catch(_e){}
    });
    }


    // Sync the page background token to <html> so the scrollbar gutter never shows white.
    try{
      const styles = getComputedStyle(document.body);
      const bg = styles.getPropertyValue('--page-bg');
      if(bg && bg.trim()){
        document.documentElement.style.setProperty('--page-bg', bg.trim());
        const accent = styles.getPropertyValue('--accent');
        if(accent && accent.trim()) document.documentElement.style.setProperty('--accent', accent.trim());
      }
    }catch(e){}

    // Ensure comedogenic ranges are normalised to the highest value (used for recipe-relevance).
    function maxifyComedogenicRanges(html){
      return html.replace(/(\b\d+(?:\.\d+)?\b)\s*[–-]\s*(\b\d+(?:\.\d+)?\b)/g, function(_, a, b){
        return b;
      });
    }
    function applyComedogenicMax(){
      // Ingredient meta lines
      qsa('.meta-line').forEach(el=>{
        const t = (el.textContent || '').toLowerCase();
        if(t.includes('comedogenic')){
          el.innerHTML = maxifyComedogenicRanges(el.innerHTML);
        }
      });

      // Recipe sections: “Comedogenic considerations” lists
      qsa('.recipe-page h4').forEach(h=>{
        const t = (h.textContent || '').toLowerCase();
        if(!t.includes('comedogenic')) return;
        let nxt = h.nextElementSibling;
        if(nxt && nxt.tagName === 'UL'){
          nxt.querySelectorAll('li').forEach(li=>{
            li.innerHTML = maxifyComedogenicRanges(li.innerHTML);
          });
        }
      });

      // Support card (if present)
      const support = document.getElementById('support-comedogenic-rating');
      if(support){
        support.innerHTML = maxifyComedogenicRanges(support.innerHTML);
      }
    }

// ---------------------------------------------------------------------------
  // Sitewide: Account auth + favourites + binaural player (banner right side)
  // ---------------------------------------------------------------------------

  const sitewideApi = window.BASELINE_api;
  const API_BASE = sitewideApi.base;
  const IS_FILE_PROTOCOL = !!sitewideApi.isFile;
  const apiJson = sitewideApi.json;
  const resourceRevisions = sitewideApi.revisions;
  const rememberResourceRevision = (resource,data)=>resourceRevisions?.remember?.(resource,data);
  const revisionedResourceBody = (resource,body)=>resourceRevisions?.withExpected?.(resource,body) || Object.assign({ expectedRevision:0 },body);

  function ensureDefaultHomebarScaffold(){
    if(q('.bl-top-header')) return null;

    let homebar = q('.bl-homebar');
    if(!homebar){
      homebar = document.createElement('div');
      homebar.className = 'bl-homebar';
      homebar.setAttribute('role', 'navigation');
      homebar.setAttribute('aria-label', 'BaselineLifestyle');
      if(document.body.firstChild) document.body.insertBefore(homebar, document.body.firstChild);
      else document.body.appendChild(homebar);
    }

    let inner = q('.bl-homebar-inner', homebar);
    if(!inner){
      inner = document.createElement('div');
      inner.className = 'bl-homebar-inner';
      homebar.appendChild(inner);
    }

    let nav = q('.bl-topnav', inner);
    if(!nav){
      nav = document.createElement('nav');
      nav.className = 'bl-topnav';
      nav.setAttribute('aria-label', 'Site');

      const currentFile = ((location.pathname.split('/').pop() || '') || 'index.html').toLowerCase();
      [
        ['index.html', 'Home'],
        ['baseline-food-approach.html', 'Baseline Food Approach'],
        ['baseline-massage.html', 'Baseline Massage'],
        ['baseline-natural-skincare.html', 'Baseline Personal Care'],
        ['baseline-fitness.html', 'Baseline Fitness'],
        ['baseline-badminton-session.html', 'Baseline Badminton Session'],
        ['baseline-games-hub.html', 'Baseline Games Hub']
      ].forEach(([href, label])=>{
        const a = document.createElement('a');
        a.href = normalisePageHref(href, label);
        a.textContent = label;
        const targetFile = (href.split('/').pop() || '').toLowerCase();
        if(targetFile && currentFile && targetFile === currentFile){
          a.setAttribute('aria-current', 'page');
        }
        nav.appendChild(a);
      });

      inner.appendChild(nav);
    }

    return inner;
  }

  function positionFlyoutToToggle(fly, toggle){
    if(!fly || !toggle || fly.hidden) return;
    try{
      const mobile = isMobileViewport();
      if(mobile){
        const margin = 10;
        const safeTop = 'calc(10px + env(safe-area-inset-top, 0px))';
        fly.style.position = 'fixed';
        fly.style.left = margin + 'px';
        fly.style.right = margin + 'px';
        fly.style.top = safeTop;
        fly.style.width = 'auto';
        fly.style.maxHeight = 'calc(100svh - 20px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))';
        fly.style.overflowY = 'auto';
        return;
      }

      fly.style.position = 'fixed';
      fly.style.width = '';
      fly.style.maxHeight = '';
      fly.style.overflowY = '';

      const margin = 14;
      const gap = 8;
      const rect = toggle.getBoundingClientRect();
      const box = fly.getBoundingClientRect();
      const flyWidth = Math.min(box.width || fly.offsetWidth || 440, Math.max(280, window.innerWidth - (margin * 2)));
      const flyHeight = box.height || fly.offsetHeight || 0;

      let left = rect.right - flyWidth;
      left = Math.max(margin, Math.min(left, window.innerWidth - flyWidth - margin));

      let top = rect.bottom + gap;
      if(flyHeight){
        top = Math.max(margin, Math.min(top, window.innerHeight - flyHeight - margin));
      }

      fly.style.left = left + 'px';
      fly.style.right = 'auto';
      fly.style.top = top + 'px';
    }catch(_e){}
  }


  const authClient = window.BASELINE_auth;
  const authState = authClient.state;
  const authSnapshot = authClient.get;
  const refreshAuth = authClient.refresh;
  const fetchAuthProviders = authClient.fetchProviders;
  const authLogin = authClient.login;
  const authRegister = authClient.register;
  const authRequestPasswordReset = authClient.requestPasswordReset;
  const authVerifyPasswordReset = authClient.verifyPasswordReset;
  const authCompletePasswordReset = authClient.completePasswordReset;
  const authLogout = authClient.logout;
  const onAuthChange = authClient.onChange;
  function setupHomebarRightControls(){
    function isHomePage(){
      return !!(document.body && document.body.dataset && document.body.dataset.app === 'home');
    }

    function currentAuthButtonLabel(){
      return 'Account';
    }

    const BEATS_ICON_SVG = BASELINE_BEATS_ICON_SVG;
    const CONTACT_ICON_SVG = BASELINE_CONTACT_ICON_SVG;
    const AUTH_ICON_SVG = BASELINE_AUTH_ICON_SVG;

    function ensureControl(right, id, iconHtml, label, options){
      if(!right || !id) return null;
      options = options || {};
      const href = String(options.href || '').trim();
      const ariaLabel = String(options.ariaLabel || label).trim() || label;
      const tagName = href ? 'a' : 'button';
      let control = q('#' + id, right) || q('#' + id);

      if(control && control.tagName.toLowerCase() !== tagName){
        const replacement = document.createElement(tagName);
        control.replaceWith(replacement);
        control = replacement;
      }
      if(!control){
        control = document.createElement(tagName);
      }

      control.id = id;
      control.className = 'bl-mini-btn';
      if(href){
        control.setAttribute('href', href);
        control.removeAttribute('type');
        control.removeAttribute('aria-expanded');
      }else{
        control.type = 'button';
        control.setAttribute('aria-expanded', 'false');
        control.removeAttribute('href');
      }
      control.innerHTML = '<span class="bl-btn-icon" aria-hidden="true">' + iconHtml + '</span><span class="bl-btn-label">' + label + '</span>';
      control.setAttribute('aria-label', ariaLabel);

      if(control.parentNode !== right) right.appendChild(control);
      return control;
    }

    function ensureRightControls(container){
      if(!container) return null;
      let right = q('.bl-homebar-right', container);
      if(!right){
        right = document.createElement('div');
        right.className = 'bl-homebar-right';
        container.appendChild(right);
      }
      if(!isHomePage()) ensureControl(right, 'bl-beats-toggle', BEATS_ICON_SVG, 'Binaural');
      const contact = ensureControl(right, 'bl-contact-toggle', CONTACT_ICON_SVG, 'Contact', { ariaLabel:'Contact Baseline Lifestyle' });
      const auth = ensureControl(right, 'bl-auth-toggle', AUTH_ICON_SVG, currentAuthButtonLabel());
      if(contact && auth && contact.nextSibling !== auth) right.insertBefore(contact, auth);
      return right;
    }

    function closePagesMenu(btn, menu){
      if(!btn || !menu) return;
      menu.hidden = true;
      btn.setAttribute('aria-expanded','false');
    }

    function openPagesMenu(btn, menu){
      if(!btn || !menu) return;
      closeMobileActionsMenu();
      menu.hidden = false;
      btn.setAttribute('aria-expanded','true');
      try{ positionFlyoutToToggle(menu, btn); }catch(_e){}
    }

    function closeMobileActionsMenu(){
      const menu = q('#bl-mobile-actions-menu');
      const toggle = q('#bl-mobile-actions-toggle');
      if(menu) menu.hidden = true;
      if(toggle) toggle.setAttribute('aria-expanded','false');
    }

    function ensureMobileActionsMenu(right){
      if(!right) return null;

      let wrap = q('.bl-mobile-actions', right);
      if(!wrap){
        wrap = document.createElement('div');
        wrap.className = 'bl-mobile-actions';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.id = 'bl-mobile-actions-toggle';
        toggle.className = 'bl-mini-btn bl-mobile-actions-toggle';
        toggle.setAttribute('aria-label','Open site controls');
        toggle.setAttribute('aria-haspopup','menu');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-controls','bl-mobile-actions-menu');
        toggle.innerHTML = '<span class="bl-btn-icon" aria-hidden="true"><svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false"><path d="m6.5 9 5.5 5.5L17.5 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="bl-btn-label">Site controls</span>';

        const menu = document.createElement('div');
        menu.id = 'bl-mobile-actions-menu';
        menu.className = 'bl-mobile-actions-menu';
        menu.setAttribute('role','menu');
        menu.hidden = true;

        wrap.append(toggle, menu);
        right.appendChild(wrap);
      }

      const toggle = q('#bl-mobile-actions-toggle', wrap);
      const menu = q('#bl-mobile-actions-menu', wrap);
      if(!toggle || !menu) return wrap;

      function targetIcon(target){
        const icon = q('.bl-btn-icon', target);
        if(icon) return icon.innerHTML;
        const svg = q('svg', target);
        return svg ? svg.outerHTML : '';
      }

      function rebuild(){
        menu.replaceChildren();
        [
          ['bl-auth-toggle','Account'],
          ['blProtectedKey','Protected sections'],
          ['bl-contact-toggle','Contact'],
          ['bl-beats-toggle','Binaural']
        ].forEach(function(entry){
          const target = document.getElementById(entry[0]);
          if(!target) return;

          const item = document.createElement('button');
          item.type = 'button';
          item.className = 'bl-mobile-actions-item';
          item.setAttribute('role','menuitem');
          item.innerHTML =
            '<span class="bl-mobile-actions-item-icon" aria-hidden="true">' + targetIcon(target) + '</span>' +
            '<span class="bl-mobile-actions-item-label">' + entry[1] + '</span>';
          item.addEventListener('click', function(event){
            event.preventDefault();
            event.stopPropagation();
            closeMobileActionsMenu();
            window.requestAnimationFrame(function(){
              if(document.contains(target)) target.click();
            });
          });
          menu.appendChild(item);
        });
      }

      if(wrap.dataset.blMobileActionsBound !== '1'){
        wrap.dataset.blMobileActionsBound = '1';

        toggle.addEventListener('click', function(event){
          event.preventDefault();
          event.stopPropagation();
          if(menu.hidden){
            const pagesMenu = q('.bl-pages-menu');
            const pagesToggle = q('#bl-pages-toggle');
            if(pagesMenu && !pagesMenu.hidden) closePagesMenu(pagesToggle, pagesMenu);
            rebuild();
            menu.hidden = false;
            toggle.setAttribute('aria-expanded','true');
          }else{
            closeMobileActionsMenu();
          }
        });

        menu.addEventListener('click', function(event){
          event.stopPropagation();
        });

        document.addEventListener('click', function(event){
          if(menu.hidden || wrap.contains(event.target)) return;
          closeMobileActionsMenu();
        });

        document.addEventListener('keydown', function(event){
          if(event.key === 'Escape' && !menu.hidden){
            closeMobileActionsMenu();
            try{ toggle.focus({ preventScroll:true }); }catch(_e){}
          }
        });

        window.addEventListener('resize', function(){
          if(!isMobileViewport()) closeMobileActionsMenu();
        }, { passive:true });
      }

      rebuild();
      return wrap;
    }

    function bindPagesDropdown(dd){
      if(!dd || dd.dataset.blPagesBound === '1') return;
      const btn = q('.bl-pages-btn, #bl-pages-toggle', dd);
      const menu = q('.bl-pages-menu', dd);
      if(!btn || !menu) return;
      if(!dd.hasAttribute('data-protected-current-section')){
        const exactLabel = currentLabelFromMenu(menu);
        btn.replaceChildren();
        const label = document.createElement('span');
        label.className = 'bl-pages-label';
        label.textContent = exactLabel;
        const caret = document.createElement('span');
        caret.className = 'bl-pages-caret';
        caret.setAttribute('aria-hidden','true');
        caret.textContent = '\u25be';
        btn.append(label,caret);
        btn.setAttribute('aria-label',exactLabel);
      }
      dd.dataset.blPagesBound = '1';
      btn.setAttribute('aria-haspopup','menu');
      btn.setAttribute('aria-expanded', menu.hidden ? 'false' : 'true');
      menu.setAttribute('role', menu.getAttribute('role') || 'menu');

      function close(){ closePagesMenu(btn, menu); }
      function open(){ openPagesMenu(btn, menu); }

      btn.addEventListener('click', function(e){
        try{ e.preventDefault(); e.stopPropagation(); }catch(_e){}
        if(menu.hidden) open(); else close();
      });

      menu.addEventListener('click', function(e){
        try{ e.stopPropagation(); }catch(_e){}
      });

      qsa('a[href]', menu).forEach(function(a){
        if(a.__bl_pages_nav_bound) return;
        a.__bl_pages_nav_bound = true;
        a.classList.add('bl-pages-link');
        a.setAttribute('role', a.getAttribute('role') || 'menuitem');
        const href = normalisePageHref((a.getAttribute('href') || '').trim(), a.textContent || '');
        if(href) a.setAttribute('href', href);
        a.addEventListener('click', function(e){
          const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1;
          if(modified) return;
          const raw = (a.getAttribute('href') || '').trim();
          if(!raw || raw.charAt(0) === '#') return;

          // Let the browser perform normal cross-page navigation. The previous
          // custom History/API route could fight with page unload/reload on some
          // browsers and make rapid HTML switching hang the tab.
          close();
          try{
            const resolved = new URL(raw, document.baseURI || window.location.href).href;
            emitSiteNavigationStart(resolved);
          }catch(_e){}
        });
      });

      document.addEventListener('click', function(e){
        if(menu.hidden) return;
        if(dd.contains(e.target)) return;
        close();
      }, { capture:true });

      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') close();
      });

      window.addEventListener('resize', function(){
        if(!menu.hidden) positionFlyoutToToggle(menu, btn);
      }, { passive:true });
    }

    function orderedPageLinks(sourceLinks){
      const byHref = new Map();
      (sourceLinks || []).forEach(function(a){
        const href = normalisePageHref((a.getAttribute('href') || '').trim(), a.textContent || '');
        if(!href) return;
        byHref.set(href, a);
      });
      const desired = [
        ['/home/1','Home'],
        ['/baseline-food-approach/system','Baseline Food Approach'],
        ['/baseline-massage/system','Baseline Massage'],
        ['/baseline-natural-skincare/system','Baseline Personal Care'],
        ['/baseline-fitness/system','Baseline Fitness'],
        ['/baseline-badminton-session/system','Baseline Badminton Session'],
        ['/baseline-games-hub/games-hub','Baseline Games Hub']
      ];
      const currentFile = routePageFileFromPath(location.pathname || '');
      const out = [];
      desired.forEach(function(pair){
        const href = pair[0];
        const label = pair[1];
        let src = byHref.get(href);
        const a = document.createElement('a');
        a.href = href;
        a.className = 'bl-pages-link';
        a.setAttribute('role','menuitem');
        a.textContent = src ? ((src.textContent || '').trim() || label) : label;
        if(routePageFileFromPath(href) === currentFile) a.setAttribute('aria-current','page');
        out.push(a);
        byHref.delete(href);
      });
      byHref.forEach(function(src, href){
        const a = document.createElement('a');
        a.href = href;
        a.className = 'bl-pages-link';
        a.setAttribute('role','menuitem');
        a.textContent = (src.textContent || '').trim() || href;
        if(src.hasAttribute('aria-current')) a.setAttribute('aria-current','page');
        out.push(a);
      });
      return out;
    }

    function currentLabelFromMenu(menu){
      let currentLabel = 'Pages';
      const current = menu ? q('a[aria-current="page"]', menu) : null;
      if(current) currentLabel = (current.textContent || '').trim() || currentLabel;
      return currentLabel;
    }

    function ensurePagesDropdown(inner, nav){
      let dd = q('.bl-pages-dd', inner);
      if(dd) return dd;
      const links = nav ? Array.from(nav.querySelectorAll('a[href]')) : [];
      const ddNew = document.createElement('div');
      ddNew.className = 'bl-pages-dd';
      const menu = document.createElement('div');
      menu.className = 'bl-pages-menu';
      menu.setAttribute('role','menu');
      menu.hidden = true;
      orderedPageLinks(links).forEach(function(a){ menu.appendChild(a); });
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bl-mini-btn bl-pages-btn';
      btn.id = 'bl-pages-toggle';
      btn.setAttribute('aria-haspopup','menu');
      btn.setAttribute('aria-expanded','false');
      btn.textContent = currentLabelFromMenu(menu) + ' \u25be';
      ddNew.appendChild(btn);
      ddNew.appendChild(menu);
      if(nav && nav.parentNode === inner) inner.insertBefore(ddNew, nav);
      else inner.insertBefore(ddNew, inner.firstChild || null);
      return ddNew;
    }

    let inner = q('.bl-homebar-inner');
    if(!inner){
      const homeHeader = q('.bl-top-header');
      if(homeHeader){
        try{
          if(!homeHeader.style.position) homeHeader.style.position = 'relative';
        }catch(_e){}
        const rightHome = ensureRightControls(homeHeader);
        ensureMobileActionsMenu(rightHome);
        try{
          rightHome.style.position = 'absolute';
          rightHome.style.top = '14px';
          rightHome.style.right = '14px';
        }catch(_e){}
        return;
      }
      inner = ensureDefaultHomebarScaffold();
      if(!inner) return;
    }

    const nav = q('.bl-topnav', inner);
    const dd = ensurePagesDropdown(inner, nav);
    bindPagesDropdown(dd);

    if(nav){
      try{
        nav.classList.add('bl-topnav--hidden');
        nav.setAttribute('aria-hidden','true');
      }catch(_e){}
    }
    try{ document.documentElement.classList.add('bl-pages-dd-ready'); }catch(_e){}

    let spacer = q('.bl-homebar-spacer', inner);
    if(!spacer){
      spacer = document.createElement('div');
      spacer.className = 'bl-homebar-spacer';
      spacer.setAttribute('aria-hidden','true');
      const rightBefore = q('.bl-homebar-right', inner);
      if(rightBefore) inner.insertBefore(spacer, rightBefore);
      else inner.appendChild(spacer);
    }

    const right = ensureRightControls(inner);
    ensureMobileActionsMenu(right);

    function sync(){
      try{
        const w = Math.ceil((right && right.getBoundingClientRect ? right.getBoundingClientRect().width : 0) || 0);
        inner.style.setProperty('--homebar-right-width', w + 'px');
      }catch(_e){}
    }
    sync();
    window.addEventListener('resize', sync, { passive:true });
    try{ onAuthChange(sync); }catch(_e){}
  }

  // When the banner is allowed to wrap (left-aligned nav), its height becomes
  // content-dependent. Keep --homebar-h synced so scroll offsets and the fixed
  // scroll container remain correct.
  function syncHomebarHeight(){
    const hb = q('.bl-homebar');
    if(!hb) return;
    const MIN_HOMEBAR_HEIGHT = 56;
    const set = ()=>{
      try{
        const cs = window.getComputedStyle ? window.getComputedStyle(hb) : null;
        const hidden = !!(cs && cs.display === 'none');
        const rectH = hidden ? 0 : Math.ceil(hb.getBoundingClientRect().height || 0);
        const inner = q('.bl-homebar-inner', hb);
        const innerH = (!hidden && inner) ? Math.ceil((inner.getBoundingClientRect().height || 0) + 16) : 0;
        const currentRaw = String(document.documentElement.style.getPropertyValue('--homebar-h') || '').replace('px','');
        const current = Number(currentRaw);
        const safeCurrent = Number.isFinite(current) ? current : 0;
        const h = Math.max(MIN_HOMEBAR_HEIGHT, rectH, innerH, safeCurrent > 0 ? safeCurrent : 0);
        document.documentElement.style.setProperty('--homebar-h', h + 'px');
      }catch(_e){
        try{ document.documentElement.style.setProperty('--homebar-h', MIN_HOMEBAR_HEIGHT + 'px'); }catch(__e){}
      }
    };
    try{ window.BASELINE_syncHomebarHeight = set; }catch(_e){}
    set();
    window.addEventListener('resize', set, { passive:true });
    try{
      // Also resync after auth label changes (button width can force wrapping).
      onAuthChange(()=>set());
    }catch(_e){}
    try{
      document.addEventListener('baseline:homebar-resync', function(){ set(); setTimeout(set, 0); setTimeout(set, 60); setTimeout(set, 180); });
    }catch(_e){}
    // Defer once to catch late font/layout changes.
    setTimeout(set, 0);
    setTimeout(set, 50);
  }

  
  function setupTopnavNavigation(){
    // Native links are more reliable for cross-page navigation than routing
    // through custom History API code. Leave anchors to the browser.
    return;
  }



  function setupDelegatedSiteNavigation(){
    // Intentionally no delegated interception for .html links. Native browser
    // navigation prevents URL/content mismatch during rapid dropdown switching.
    return;
  }


function setupContactFlyout(){
    const toggle = q('#bl-contact-toggle');
    if(!toggle) return;

    let fly = q('#bl-contact-flyout');
    if(!fly){
      fly = document.createElement('div');
      fly.id = 'bl-contact-flyout';
      fly.className = 'bl-flyout';
      fly.hidden = true;
      fly.innerHTML = `
        <div class="card bl-contact-card">
          <h3>Contact</h3>
          <p class="bl-contact-copy">Want to ask a question, share thoughts, or suggest ideas for future additions? I’d like to hear from you.</p>
          <div class="bl-contact-email-row">
            <span class="bl-contact-email-icon" aria-hidden="true">${BASELINE_CONTACT_ICON_SVG}</span>
            <a class="bl-contact-email" href="mailto:contact@baselinelifestyle.org">contact@baselinelifestyle.org</a>
          </div>
        </div>
      `;
      document.body.appendChild(fly);
    }

    toggle.setAttribute('aria-controls','bl-contact-flyout');
    toggle.setAttribute('aria-haspopup','true');

    function positionContactFlyout(){
      positionFlyoutToToggle(fly, toggle);
    }
    function close(){
      fly.hidden = true;
      toggle.setAttribute('aria-expanded','false');
    }
    function open(){
      fly.hidden = false;
      toggle.setAttribute('aria-expanded','true');
      positionContactFlyout();
      window.requestAnimationFrame(positionContactFlyout);
    }
    function toggleOpen(){
      if(fly.hidden) open(); else close();
    }

    toggle.addEventListener('click', (e)=>{
      e.preventDefault();
      toggleOpen();
    }, { passive:false });

    window.addEventListener('resize', ()=>{
      if(!fly.hidden) positionContactFlyout();
    }, { passive:true });
    document.addEventListener('scroll', ()=>{
      if(!fly.hidden) positionContactFlyout();
    }, { passive:true, capture:true });

    document.addEventListener('mousedown', (e)=>{
      if(fly.hidden) return;
      const t = e.target;
      if(t === toggle || (toggle.contains && toggle.contains(t))) return;
      if(fly.contains(t)) return;
      close();
    }, { passive:true });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && !fly.hidden) close();
    });
  }


function setupAuthFlyout(){
    const toggle = q('#bl-auth-toggle');
    if(!toggle) return;


    let fly = q('#bl-auth-flyout');
    if(!fly){
      fly = document.createElement('div');
      fly.id = 'bl-auth-flyout';
      fly.className = 'bl-flyout';
      fly.hidden = true;
      fly.innerHTML = `
        <div class="card">
          <h3>Account</h3>

          <div class="bl-auth-authed" hidden>
            <div class="row" style="justify-content:space-between; align-items:center; flex-wrap:wrap;">
              <span class="bl-pill">👤 <strong id="bl-auth-name"></strong></span>
              <button type="button" class="bl-mini-btn" id="bl-auth-logout">Log out</button>
            </div>

            <div class="bl-auth-meta" id="bl-auth-email-out"></div>
            <div class="divider"></div>

            <div id="bl-fav-links" class="bl-auth-links-stack">
              <div class="bl-auth-fieldgroup">
                <label for="bl-favs-food-select">Baseline Food Favorites</label>
                <select id="bl-favs-food-select" aria-label="Baseline Food Favorites"></select>
              </div>

              <div class="bl-auth-fieldgroup">
                <label for="bl-favs-skin-select">Baseline Personal Care Favorites</label>
                <select id="bl-favs-skin-select" aria-label="Baseline Personal Care Favorites"></select>
              </div>

              <div class="bl-auth-fieldgroup bl-auth-fitness-link-wrap">
                <a class="bl-auth-fitness-link" href="/baseline-fitness/my-plan">Baseline Fitness Plan</a>
              </div>
            </div>
          </div>

          <div class="bl-auth-shell">
            <div class="bl-auth-view-switch" role="tablist" aria-label="Account options">
              <button type="button" class="bl-mini-btn bl-auth-switch" data-auth-switch="signup">Sign Up</button>
              <button type="button" class="bl-mini-btn bl-auth-switch" data-auth-switch="recover">Recovery</button>
            </div>

            <form class="bl-auth-form" data-auth-view="login" autocomplete="on">
              <label for="bl-auth-identifier-in">Email or name</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-identifier-in" type="text" inputmode="email" maxlength="254" placeholder="you@example.com" autocomplete="username" />
              </div>

              <label for="bl-auth-pass-in">Password</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-pass-in" type="password" minlength="8" maxlength="128" placeholder="Enter password" autocomplete="current-password" />
              </div>

              <div class="row">
                <button type="button" class="bl-mini-btn" id="bl-auth-login">Log in</button>
              </div>

            </form>

            <form class="bl-auth-form" data-auth-view="signup" autocomplete="on" hidden>
              <label for="bl-auth-signup-name">Display name</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-signup-name" type="text" inputmode="text" maxlength="40" placeholder="Display name" autocomplete="nickname" />
              </div>

              <label for="bl-auth-signup-email">Email</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-signup-email" type="email" inputmode="email" maxlength="254" placeholder="you@example.com" autocomplete="email" />
              </div>

              <label for="bl-auth-signup-pass">Password</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-signup-pass" type="password" minlength="8" maxlength="128" placeholder="At least 8 characters" autocomplete="new-password" />
              </div>

              <label for="bl-auth-signup-pass-2">Confirm password</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-signup-pass-2" type="password" minlength="8" maxlength="128" placeholder="Repeat password" autocomplete="new-password" />
              </div>

              <div class="row">
                <button type="button" class="bl-mini-btn" id="bl-auth-signup">Sign Up</button>
              </div>

            </form>

            <form class="bl-auth-form" data-auth-view="recover" autocomplete="on" hidden>
              <p class="muted bl-auth-helper">Use your account email to generate a password reset link.</p>

              <label for="bl-auth-recover-email">Email</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-recover-email" type="email" inputmode="email" maxlength="254" placeholder="you@example.com" autocomplete="email" />
              </div>

              <div class="row">
                <button type="button" class="bl-mini-btn" id="bl-auth-recover">Send reset link</button>
              </div>
            </form>

            <form class="bl-auth-form" data-auth-view="reset" autocomplete="on" hidden>
              <p class="muted bl-auth-helper" id="bl-auth-reset-hint">Checking reset link…</p>

              <label for="bl-auth-reset-pass">New password</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-reset-pass" type="password" minlength="8" maxlength="128" placeholder="Choose a new password" autocomplete="new-password" />
              </div>

              <label for="bl-auth-reset-pass-2">Confirm new password</label>
              <div class="bl-auth-input-shell">
                <input id="bl-auth-reset-pass-2" type="password" minlength="8" maxlength="128" placeholder="Repeat new password" autocomplete="new-password" />
              </div>

              <div class="row">
                <button type="button" class="bl-mini-btn" id="bl-auth-reset-submit">Save new password</button>
              </div>
            </form>

            <div class="status" id="bl-auth-status" aria-live="polite"></div>
          </div>
        </div>
      `;
      document.body.appendChild(fly);
    }

    function close(){
      fly.hidden = true;
      toggle.setAttribute('aria-expanded','false');
    }
    function positionAuthFlyout(){
      positionFlyoutToToggle(fly, toggle);
    }

    function open(){
      try{
        if(authUi && authUi.currentView !== 'reset') switchAuthView('login', { keepStatus:true });
      }catch(_e){}
      fly.hidden = false;
      toggle.setAttribute('aria-expanded','true');
      positionAuthFlyout();
      window.requestAnimationFrame(positionAuthFlyout);
      try{
        const focusTarget = q('.bl-auth-form:not([hidden]) input', fly);
        if(focusTarget) focusTarget.focus();
      }catch(_e){}
    }
    function toggleOpen(){
      if(fly.hidden) open(); else close();
    }

    toggle.addEventListener('click', function(e){
      e.preventDefault();
      toggleOpen();
    }, { passive:false });

    window.addEventListener('resize', ()=>{
      if(!fly.hidden) positionAuthFlyout();
    }, { passive:true });
    document.addEventListener('scroll', ()=>{
      if(!fly.hidden) positionAuthFlyout();
    }, { passive:true, capture:true });

    function closeAuthOnOutsidePointer(e){
      if(fly.hidden) return;
      const t = e.target;
      if(t === toggle || (toggle && toggle.contains && toggle.contains(t))) return;
      if(fly.contains(t)) return;
      close();
    }
    document.addEventListener('mousedown', closeAuthOnOutsidePointer, { passive:true });
    document.addEventListener('touchstart', closeAuthOnOutsidePointer, { passive:true });
    document.addEventListener('pointerdown', closeAuthOnOutsidePointer, { passive:true });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && !fly.hidden) close();
    });

    const statusEl = q('#bl-auth-status', fly);
    const authShell = q('.bl-auth-shell', fly);
    const authSwitches = Array.from(fly.querySelectorAll('[data-auth-switch]'));
    const authForms = Array.from(fly.querySelectorAll('[data-auth-view]'));
    const authEmailOut = q('#bl-auth-email-out', fly);
    const resetHint = q('#bl-auth-reset-hint', fly);

    function escapeHtml(value){
      return String(value || '').replace(/[&<>"']/g, (c)=>({
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&#39;'
      }[c] || c));
    }

    function setStatus(msg, tone){
      if(!statusEl) return;
      statusEl.className = 'status';
      if(tone){
        statusEl.classList.add('is-' + String(tone));
      }
      statusEl.innerHTML = msg || '';
      if(!fly.hidden) positionAuthFlyout();
    }

    function authErrorMessage(result, fallback){
      const data = (result && result.data) || {};
      const err = String(data.error || fallback || 'request_failed');
      const endpoint = String(data.endpoint || '').trim();
      const status = (result && result.status) ? (' HTTP ' + result.status + '.') : '';

      if(err === 'api_returned_html' || err === 'api_non_json_response' || err === 'bad_json_response' || err === 'bad_json' || err === 'empty_response'){
        return '❌ Login API response is not valid JSON.' + status +
          (endpoint ? (' Check <code>' + escapeHtml(endpoint) + '</code>.') : ' Check <code>/api/login.php</code>.') +
          ' The API should return JSON only, not an HTML error page or PHP warning.';
      }

      if(err === 'network_error'){
        return '❌ Could not reach the login API. Check that <code>/api/login.php</code> exists on this domain.';
      }

      if(err === 'server_required'){
        return '❌ Login requires the website API server. It will not work from a local file preview.';
      }

      return '❌ ' + escapeHtml(err.replace(/_/g, ' '));
    }

    const authUi = {
      currentView: 'login',
      resetToken: '',
      resetVerified: false,
    };

    function urlState(){
      try{ return new URL(window.location.href); }catch(_e){ return null; }
    }

    function getResetTokenFromUrl(){
      try{
        const url = new URL(window.location.href);
        return String(url.searchParams.get('bl-reset') || '').trim();
      }catch(_e){
        return '';
      }
    }

    function clearResetTokenFromUrl(){
      try{
        const url = new URL(window.location.href);
        if(!url.searchParams.has('bl-reset')) return;
        url.searchParams.delete('bl-reset');
        window.history.replaceState({}, document.title, url.toString());
      }catch(_e){}
    }

    function clearAuthStatusFromUrl(){
      try{
        const url = new URL(window.location.href);
        if(!url.searchParams.has('bl-auth')) return;
        url.searchParams.delete('bl-auth');
        window.history.replaceState({}, document.title, url.toString());
      }catch(_e){}
    }

    function showGoogleButtons(){
      // Google sign-in/sign-up buttons have been removed.
    }

    function switchAuthView(view, opts){
      opts = opts || {};
      const nextView = String(view || 'login');
      authUi.currentView = nextView;

      authForms.forEach(form=>{
        const show = form.getAttribute('data-auth-view') === nextView;
        form.hidden = !show;
      });
      authSwitches.forEach(btn=>{
        const active = btn.getAttribute('data-auth-switch') === nextView;
        btn.classList.toggle('is-active', active);
      });

      if(authShell){
        authShell.setAttribute('data-auth-view', nextView);
      }

      if(!opts.keepStatus){
        setStatus('');
      }

      showGoogleButtons();

      if(!fly.hidden){
        window.requestAnimationFrame(()=>{
          try{
            const focusTarget = q('.bl-auth-form:not([hidden]) input', fly);
            if(focusTarget) focusTarget.focus();
          }catch(_e){}
          positionAuthFlyout();
        });
      }
    }

    async function syncAuthProviders(){
      try{ await fetchAuthProviders(); }catch(_e){}
      showGoogleButtons();
    }

    async function prepareResetView(token){
      token = String(token || '').trim();
      authUi.resetToken = token;
      authUi.resetVerified = false;

      if(!token){
        switchAuthView('recover', { keepStatus:true });
        return;
      }

      switchAuthView('reset', { keepStatus:true });
      if(resetHint){
        resetHint.textContent = 'Checking reset link…';
      }
      setStatus('Checking reset link…');

      const r = await authVerifyPasswordReset(token);
      if(r && r.data && r.data.ok && r.data.valid){
        authUi.resetVerified = true;
        if(resetHint){
          const emailHint = String(r.data.emailHint || '').trim();
          resetHint.textContent = emailHint
            ? ('Reset password for ' + emailHint + '.')
            : 'Choose a new password for your account.';
        }
        setStatus('Reset link verified.', 'success');
      }else{
        if(resetHint){
          resetHint.textContent = 'This reset link is no longer valid.';
        }
        setStatus('❌ Reset link invalid or expired. Generate a new one below.', 'error');
        switchAuthView('recover', { keepStatus:true });
      }
    }

    async function maybeHandleResetFromUrl(){
      const token = getResetTokenFromUrl();
      if(!token) return;
      await prepareResetView(token);
      if(fly.hidden) open();
    }

    function handleAuthStatusFromUrl(){
      const url = urlState();
      if(!url) return;
      if(!url.searchParams.has('bl-auth')) return;
      // Clear stale Google callback markers without showing Google UI.
      clearAuthStatusFromUrl();
    }

    function renderAuthUI(){
      const authed = !!authState.authed;
      const bannerLabel = 'Account';
      try{
        const iconNode = toggle.querySelector('.bl-btn-icon');
        const labelNode = toggle.querySelector('.bl-btn-label');
        if(iconNode) iconNode.innerHTML = BASELINE_AUTH_ICON_SVG;
        if(labelNode) labelNode.textContent = bannerLabel;
        if(!iconNode || !labelNode){
          toggle.innerHTML = '<span class="bl-btn-icon" aria-hidden="true">' + BASELINE_AUTH_ICON_SVG + '</span><span class="bl-btn-label">' + bannerLabel + '</span>';
        }
      }catch(_e){
        toggle.innerHTML = '<span class="bl-btn-icon" aria-hidden="true">' + BASELINE_AUTH_ICON_SVG + '</span><span class="bl-btn-label">' + bannerLabel + '</span>';
      }
      toggle.setAttribute('aria-label', bannerLabel);

      const authedBox = q('.bl-auth-authed', fly);
      const shell = q('.bl-auth-shell', fly);
      const nameOut = q('#bl-auth-name', fly);
      const logoutBtn = q('#bl-auth-logout', fly);

      if(authed){
        if(authedBox) authedBox.hidden = false;
        if(shell) shell.hidden = true;
        if(logoutBtn) logoutBtn.hidden = false;
        if(nameOut) nameOut.textContent = String(authState.name || '');
        if(authEmailOut){
          authEmailOut.textContent = String(authState.email || '').trim();
          authEmailOut.hidden = !String(authState.email || '').trim();
        }
      }else{
        if(authedBox) authedBox.hidden = true;
        if(shell) shell.hidden = false;
        if(logoutBtn) logoutBtn.hidden = true;
        if(nameOut) nameOut.textContent = '';
        if(authEmailOut){
          authEmailOut.textContent = '';
          authEmailOut.hidden = true;
        }

        const token = getResetTokenFromUrl();
        if(token){
          prepareResetView(token);
        }else if(authUi.currentView === 'reset'){
          switchAuthView('login', { keepStatus:true });
        }
      }

      showGoogleButtons();
    }

    async function doLogin(){
      const identifier = (q('#bl-auth-identifier-in', fly)?.value || '').trim();
      const pass = (q('#bl-auth-pass-in', fly)?.value || '');
      if(!identifier || !pass){
        setStatus('Enter your email/name and password.', 'error');
        return;
      }

      setStatus('Signing in…');
      const r = await authLogin(identifier, pass);
      if(r && r.data && r.data.ok){
        setStatus('✅ Signed in.', 'success');
        setTimeout(()=>{ try{ close(); }catch(_e){} }, 240);
      }else{
        setStatus(authErrorMessage(r, 'login_failed'), 'error');
      }
    }

    async function doSignup(){
      const name = (q('#bl-auth-signup-name', fly)?.value || '').trim();
      const email = (q('#bl-auth-signup-email', fly)?.value || '').trim();
      const pass = (q('#bl-auth-signup-pass', fly)?.value || '');
      const pass2 = (q('#bl-auth-signup-pass-2', fly)?.value || '');

      if(!name || !email || !pass || !pass2){
        setStatus('Complete name, email, and both password fields.', 'error');
        return;
      }
      if(pass !== pass2){
        setStatus('Passwords do not match.', 'error');
        return;
      }

      setStatus('Creating account…');
      const r = await authRegister({ name, email, password: pass });
      if(r && r.data && r.data.ok){
        setStatus('✅ Account created.', 'success');
        setTimeout(()=>{ try{ close(); }catch(_e){} }, 240);
      }else{
        setStatus(authErrorMessage(r, 'register_failed'), 'error');
      }
    }

    async function doRecover(){
      const email = (q('#bl-auth-recover-email', fly)?.value || '').trim();
      if(!email){
        setStatus('Enter the account email you want to recover.', 'error');
        return;
      }

      setStatus('Preparing reset link…');
      const r = await authRequestPasswordReset(email);
      if(r && r.data && r.data.ok){
        if(r.data.resetUrl){
          setStatus(
            '✅ Reset link ready. <a href="' + escapeHtml(String(r.data.resetUrl)) + '">Open password reset</a>.',
            'success'
          );
        }else{
          setStatus('✅ Reset instructions sent if the account exists.', 'success');
        }
      }else{
        setStatus(authErrorMessage(r, 'recovery_failed'), 'error');
      }
    }

    async function doResetPassword(){
      const token = String(authUi.resetToken || getResetTokenFromUrl() || '').trim();
      const pass = (q('#bl-auth-reset-pass', fly)?.value || '');
      const pass2 = (q('#bl-auth-reset-pass-2', fly)?.value || '');

      if(!token){
        setStatus('Reset token missing. Generate a new reset link.', 'error');
        switchAuthView('recover', { keepStatus:true });
        return;
      }
      if(!pass || !pass2){
        setStatus('Enter and confirm the new password.', 'error');
        return;
      }
      if(pass !== pass2){
        setStatus('New password fields must match.', 'error');
        return;
      }

      setStatus('Saving new password…');
      const r = await authCompletePasswordReset(token, pass, pass2);
      if(r && r.data && r.data.ok){
        clearResetTokenFromUrl();
        authUi.resetToken = '';
        authUi.resetVerified = false;
        setStatus('✅ Password reset complete. You are now signed in.', 'success');
        setTimeout(()=>{ try{ close(); }catch(_e){} }, 260);
      }else{
        setStatus(authErrorMessage(r, 'password_reset_failed'), 'error');
      }
    }

    authSwitches.forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        const view = String(btn.getAttribute('data-auth-switch') || 'login');
        if(view === 'reset'){
          await maybeHandleResetFromUrl();
          return;
        }
        switchAuthView(view);
      });
    });

    q('#bl-auth-login', fly)?.addEventListener('click', doLogin);
    q('#bl-auth-signup', fly)?.addEventListener('click', doSignup);
    q('#bl-auth-recover', fly)?.addEventListener('click', doRecover);
    q('#bl-auth-reset-submit', fly)?.addEventListener('click', doResetPassword);

    const loginForm = q('.bl-auth-form[data-auth-view="login"]', fly);
    const signupForm = q('.bl-auth-form[data-auth-view="signup"]', fly);
    const recoverForm = q('.bl-auth-form[data-auth-view="recover"]', fly);
    const resetForm = q('.bl-auth-form[data-auth-view="reset"]', fly);
    if(loginForm && !loginForm.__bl_submit_bound){
      loginForm.__bl_submit_bound = true;
      loginForm.addEventListener('submit', function(e){ e.preventDefault(); doLogin(); });
    }
    if(signupForm && !signupForm.__bl_submit_bound){
      signupForm.__bl_submit_bound = true;
      signupForm.addEventListener('submit', function(e){ e.preventDefault(); doSignup(); });
    }
    if(recoverForm && !recoverForm.__bl_submit_bound){
      recoverForm.__bl_submit_bound = true;
      recoverForm.addEventListener('submit', function(e){ e.preventDefault(); doRecover(); });
    }
    if(resetForm && !resetForm.__bl_submit_bound){
      resetForm.__bl_submit_bound = true;
      resetForm.addEventListener('submit', function(e){ e.preventDefault(); doResetPassword(); });
    }
    q('#bl-auth-logout', fly)?.addEventListener('click', async (e)=>{
      try{
        e.preventDefault();
        e.stopPropagation();
      }catch(_e){}
      setStatus('Logging out…');
      const r = await authLogout();
      const ok = !!(r && r.data && r.data.ok);
      if(ok){
        [
          '#bl-auth-identifier-in',
          '#bl-auth-pass-in',
          '#bl-auth-signup-name',
          '#bl-auth-signup-email',
          '#bl-auth-signup-pass',
          '#bl-auth-signup-pass-2',
          '#bl-auth-recover-email',
          '#bl-auth-reset-pass',
          '#bl-auth-reset-pass-2',
        ].forEach(sel=>{
          const el = q(sel, fly);
          if(el) el.value = '';
        });
        setStatus('', '');
        switchAuthView('login', { keepStatus:true });
        renderAuthUI();
        close();
      }else{
        const err = String((r && r.data && r.data.error) || 'logout_failed');
        setStatus('❌ ' + err.replace(/_/g, ' '), 'error');
      }
    });

    onAuthChange(renderAuthUI);
    switchAuthView('login', { keepStatus:true });
    renderAuthUI();
    syncAuthProviders();
    maybeHandleResetFromUrl();
    handleAuthStatusFromUrl();

    // Favourites dropdowns (Food + Skincare)
    const favFoodSel = q('#bl-favs-food-select', fly);
    const favSkinSel = q('#bl-favs-skin-select', fly);

    function recipeTitle(appKey,id){
      const recipeId=String(id || '');
      try{
        const live=document.getElementById(recipeId);
        const heading=live?.querySelector?.(':scope > .recipe-title-row h2, :scope > .recipe-title-row h3, :scope > h2, :scope > h3, h2, h3');
        const title=String(heading?.textContent || '').trim();
        if(title) return title;
      }catch(_e){}
      try{
        if(appKey==='food' && Array.isArray(window.BASELINE_FOOD_RECIPE_INDEX)){
          const entry=window.BASELINE_FOOD_RECIPE_INDEX.find(item=>String(item?.id || '')===recipeId);
          const title=String(entry?.title || entry?.name || '').trim();
          if(title) return title;
        }
      }catch(_e){}
      return 'Recipe ' + recipeId;
    }

    async function loadFavIds(appKey){
      if(!authState.authed) return [];
      if(IS_FILE_PROTOCOL) return [];
      const r = await apiJson(API_BASE + '/favourites.php?app=' + encodeURIComponent(appKey));
      if(r?.data?.ok) rememberResourceRevision('favourites',r.data);
      const ids = (r && r.data && r.data.ok && Array.isArray(r.data.ids)) ? r.data.ids : [];
      return ids.map(String);
    }

    function fillSelect(sel, ids, appKey){
      if(!sel) return;
      const esc = (x)=>String(x||'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
      const opts = ['<option value="">Choose…</option>'];
      ids.forEach(id=>{
        const label = recipeTitle(appKey,id);
        opts.push('<option value="' + esc(id) + '">' + esc(label) + '</option>');
      });
      sel.innerHTML = opts.join('');
    }

    async function refreshFavDropdowns(){
      if(!favFoodSel && !favSkinSel) return;
      if(!authState.authed){
        if(favFoodSel){ favFoodSel.innerHTML = '<option value="">—</option>'; favFoodSel.disabled = true; }
        if(favSkinSel){ favSkinSel.innerHTML = '<option value="">—</option>'; favSkinSel.disabled = true; }
        return;
      }
      if(favFoodSel) favFoodSel.disabled = false;
      if(favSkinSel) favSkinSel.disabled = false;
      try{
        const [foodIds, skinIds] = await Promise.all([loadFavIds('food'), loadFavIds('skincare')]);
        fillSelect(favFoodSel, foodIds, 'food');
        fillSelect(favSkinSel, skinIds, 'skincare');
      }catch(_e){
        if(favFoodSel) favFoodSel.innerHTML = '<option value="">Could not load favourites</option>';
        if(favSkinSel) favSkinSel.innerHTML = '<option value="">Could not load favourites</option>';
      }
    }

    function openFav(appKey, recipeId){
      if(!recipeId) return;
      const cur = (document.body && document.body.dataset && document.body.dataset.app) ? String(document.body.dataset.app) : '';
      const curKey = (cur === 'food') ? 'food' : (cur === 'skin' ? 'skincare' : '');
      if(curKey === appKey){
        // Avoid pushing intermediate history entries (tab + overview) — we only want the final recipe state.
        try{
          if(typeof window.BASELINE_selectTab === 'function') window.BASELINE_selectTab('recipes', { silentHistory:true });
          if(typeof window.BASELINE_showAllRecipes === 'function') window.BASELINE_showAllRecipes({ silentHistory:true });
          if(typeof window.BASELINE_openRecipe === 'function') window.BASELINE_openRecipe(recipeId, { silentHistory:false });
        }catch(_e){}
        close();
        return;
      }
      const href = (appKey === 'skincare')
        ? ('/baseline-natural-skincare.html/' + encodeURIComponent(recipeSlugForElement(document.getElementById(recipeId)) || recipeId))
        : ('/baseline-food-approach.html/' + encodeURIComponent(recipeSlugForElement(document.getElementById(recipeId)) || recipeId));
      window.location.href = href;
    }

    if(favFoodSel && !favFoodSel.__bl_bound){
      favFoodSel.__bl_bound = true;
      favFoodSel.addEventListener('change', ()=>{
        const rid = String(favFoodSel.value||'');
        openFav('food', rid);
        favFoodSel.value = '';
      });
    }

    if(favSkinSel && !favSkinSel.__bl_bound){
      favSkinSel.__bl_bound = true;
      favSkinSel.addEventListener('change', ()=>{
        const rid = String(favSkinSel.value||'');
        openFav('skincare', rid);
        favSkinSel.value = '';
      });
    }

    onAuthChange(refreshFavDropdowns);
    document.addEventListener('baseline:favs-changed', refreshFavDropdowns);
    refreshFavDropdowns();


    // Expose a helper for other features (e.g., favourites) to prompt login.
    try{ window.BASELINE_openAuth = open; }catch(_e){}
  }

  
function setupBinauralFlyout(){
  const toggle = q('#bl-beats-toggle');
  if(!toggle) return;

  let fly = q('#bl-beats-flyout');
  if(!fly){
    fly = document.createElement('div');
    fly.id = 'bl-beats-flyout';
    fly.className = 'bl-flyout';
    fly.hidden = true;
    fly.innerHTML = `
      <div class="card bl-player">
        <h3>Binaural Beats</h3>
        <p class="muted">These presets are optional and subjective. Keep volume comfortable. If you feel discomfort, stop.</p>

        <div class="row" style="margin-top:10px;">
          <button type="button" class="bl-mini-btn" id="bl-beats-start">Start</button>
          <button type="button" class="bl-mini-btn" id="bl-beats-stop">Stop</button>
        </div>

        <label>Beat frequency (Hz)</label>
        <div class="row" style="margin-top:6px;">
          <input id="bl-beat-hz" type="range" min="0.5" max="40" step="0.1" value="8" />
          <input id="bl-beat-hz-num" type="number" min="0.5" max="40" step="0.1" value="8" style="text-align:center;" />
        </div>

        <label>Carrier tone (Hz)</label>
        <div class="row" style="margin-top:6px;">
          <input id="bl-carrier-hz" type="range" min="60" max="1000" step="1" value="220" />
          <input id="bl-carrier-hz-num" type="number" min="60" max="1000" step="1" value="220" style="text-align:center;" />
        </div>

        <label>Beat volume</label>
        <input id="bl-beat-vol" type="range" min="0" max="1" step="0.01" value="0.6" />

        <label>Presets</label>
        <div class="row" style="margin-top:6px;">
          <select id="bl-preset-select" aria-label="Preset"></select>
        </div>

        <div id="bl-user-presets" style="margin-top:12px;"></div>
        <div class="status" id="bl-beats-status"></div>
      </div>
    `;
    document.body.appendChild(fly);
  }

  function positionBeatsFlyout(){
    positionFlyoutToToggle(fly, toggle);
  }

  function close(){
    fly.hidden = true;
    toggle.setAttribute('aria-expanded','false');
  }

  const statusEl = q('#bl-beats-status', fly);
  const setStatus = (m)=>{ if(statusEl) statusEl.textContent = m || ''; };

  // ------------------------------------------------------------------
  // Audio engine (beds/ambience fully removed)
  // ------------------------------------------------------------------
  let ctx = null;
  let beatGain = null;
  let oscL = null;
  let oscR = null;
  let panL = null;
  let panR = null;

  const state = {
    running:false,
    beatHz: 8,
    carrierHz: 220,
    beatVol: 0.6,
    presetKey: 'fitness:0',
    presetIsCustom: false,
  };

  function ensureCtx(){
    if(ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) throw new Error('no_audio_context');
    ctx = new AC();
    beatGain = ctx.createGain();
    beatGain.gain.value = 0;
    beatGain.connect(ctx.destination);
    return ctx;
  }

  function fadeGain(node, target, tc){
    if(!node || !ctx) return;
    tc = (typeof tc === 'number') ? tc : 0.03;
    try{
      const now = ctx.currentTime;
      node.gain.cancelScheduledValues(now);
      node.gain.setTargetAtTime(target, now, tc);
    }catch(_e){}
  }

  function stopNodes(){
    try{ if(oscL){ oscL.stop(); oscL.disconnect(); } }catch(_e){}
    try{ if(oscR){ oscR.stop(); oscR.disconnect(); } }catch(_e){}
    try{ if(panL) panL.disconnect(); }catch(_e){}
    try{ if(panR) panR.disconnect(); }catch(_e){}
    oscL = oscR = panL = panR = null;
  }

  function hardStopNow(){
    // Hard stop to prevent “stuck on” across navigation / bfcache.
    try{ fadeGain(beatGain, 0, 0.01); }catch(_e){}
    stopNodes();
    state.running = false;

    try{
      if(ctx){
        try{ ctx.close(); }catch(_e){}
      }
    }catch(_e){}
    ctx = null;
    beatGain = null;
    setStatus('Stopped');
  }

  function resumeBinauralContextIfNeeded(){
    try{
      if(state.running && ctx && ctx.state === 'suspended' && typeof ctx.resume === 'function'){
        ctx.resume().catch(function(){});
      }
    }catch(_e){}
  }

  // Hard-stop only when the page is actually leaving. Do not stop desktop
  // binaural playback merely because the browser/tab loses foreground focus.
  try{
    window.addEventListener('pagehide', hardStopNow);
    window.addEventListener('pageshow', (e)=>{ if(e && e.persisted) hardStopNow(); else resumeBinauralContextIfNeeded(); });
    document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) resumeBinauralContextIfNeeded(); });
    window.addEventListener('focus', resumeBinauralContextIfNeeded);
  }catch(_e){}

  function applyOscFreq(){
    if(!ctx || !oscL || !oscR) return;
    const left  = Math.max(1, state.carrierHz - (state.beatHz/2));
    const right = Math.max(1, state.carrierHz + (state.beatHz/2));
    try{
      oscL.frequency.setTargetAtTime(left,  ctx.currentTime, 0.015);
      oscR.frequency.setTargetAtTime(right, ctx.currentTime, 0.015);
    }catch(_e){}
  }

  function start(){
    try{ ensureCtx(); }catch(_e){ setStatus('Audio not available in this browser.'); return; }
    try{ if(ctx && ctx.state === 'suspended' && typeof ctx.resume === 'function') ctx.resume().catch(function(){}); }catch(_resumeError){}
    if(state.running){ setStatus('Already running.'); return; }

    stopNodes();

    oscL = ctx.createOscillator();
    oscR = ctx.createOscillator();
    oscL.type = 'sine';
    oscR.type = 'sine';

    panL = ctx.createStereoPanner();
    panR = ctx.createStereoPanner();
    panL.pan.value = -1;
    panR.pan.value = 1;

    oscL.connect(panL); panL.connect(beatGain);
    oscR.connect(panR); panR.connect(beatGain);

    applyOscFreq();

    // Start gain from silence to avoid clicks.
    fadeGain(beatGain, state.beatVol, 0.02);

    try{ oscL.start(); oscR.start(); }catch(_e){}
    state.running = true;
    setStatus('Playing');
  }

  function stop(){
    fadeGain(beatGain, 0, 0.03);
    setTimeout(()=>{ hardStopNow(); }, 120);
  }

  function markCustom(){
    state.presetIsCustom = true;
    const presetSel = q('#bl-preset-select', fly);
    if(presetSel) presetSel.value = 'custom';
  }

  function setBeatHz(v){
    const hz = Math.max(0.5, Math.min(40, Number(v)||8));
    state.beatHz = hz;
    applyOscFreq();
    const r = q('#bl-beat-hz', fly);
    const n = q('#bl-beat-hz-num', fly);
    if(r) r.value = String(hz);
    if(n) n.value = String(hz);
    markCustom();
  }

  function setCarrierHz(v){
    const hz = Math.max(60, Math.min(1000, Number(v)||220));
    state.carrierHz = hz;
    applyOscFreq();
    const r = q('#bl-carrier-hz', fly);
    const n = q('#bl-carrier-hz-num', fly);
    if(r) r.value = String(hz);
    if(n) n.value = String(hz);
    markCustom();
  }

  function setBeatVol(v){
    const x = Math.max(0, Math.min(1, Number(v)||0));
    state.beatVol = x;
    if(beatGain && ctx) fadeGain(beatGain, x, 0.02);
    const r = q('#bl-beat-vol', fly);
    if(r) r.value = String(x);
    markCustom();
  }

  // Wire controls
  q('#bl-beats-start', fly)?.addEventListener('click', start);
  q('#bl-beats-stop', fly)?.addEventListener('click', stop);

  q('#bl-beat-hz', fly)?.addEventListener('input', (e)=>setBeatHz(e.target.value));
  q('#bl-beat-hz-num', fly)?.addEventListener('change', (e)=>setBeatHz(e.target.value));
  q('#bl-carrier-hz', fly)?.addEventListener('input', (e)=>setCarrierHz(e.target.value));
  q('#bl-carrier-hz-num', fly)?.addEventListener('change', (e)=>setCarrierHz(e.target.value));

  q('#bl-beat-vol', fly)?.addEventListener('input', (e)=>setBeatVol(e.target.value));

  // Presets (beds/ambience removed)
  const presets = {
    fitness: [
      { name:'Strength Focus', hz:14 },
      { name:'Cardio Rhythm', hz:11 },
      { name:'Isometric Steady', hz:9 },
      { name:'Yoga Flow', hz:7 },
      { name:'Post‑Workout Downshift', hz:5 },
    ],
    food: [
      { name:'Kitchen Focus', hz:12 },
      { name:'Flavor Flow', hz:8 },
      { name:'Food Calm', hz:6 },
    ],
    skin: [
      { name:'Skincare Ritual', hz:8 },
      { name:'Soothe', hz:6 },
      { name:'Night Downshift', hz:4 },
    ],
    more: [
      { name:'Deep Work', hz:15 },
      { name:'Light Focus', hz:10 },
      { name:'Relax', hz:7.5 },
      { name:'Sleep', hz:2.5 },
    ]
  };

  function esc(s){
    return String(s||'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }

  const presetSel = q('#bl-preset-select', fly);

  function presetLabel(groupKey, p){
    const groupName = ({fitness:'Fitness', food:'Food', skin:'Skincare', more:'Comprehensive'})[groupKey] || groupKey;
    return `${groupName}: ${p.name} — ${p.hz} Hz`;
  }

  function rebuildPresetSelect(){
    if(!presetSel) return;
    const order = ['fitness','food','skin','more'];
    const opts = ['<option value="custom">Custom (current)</option>'];
    order.forEach(g=>{
      (presets[g]||[]).forEach((p,i)=>{
        const val = `${g}:${i}`;
        opts.push(`<option value="${val}">${esc(presetLabel(g,p))}</option>`);
      });
    });
    presetSel.innerHTML = opts.join('');
  }

  rebuildPresetSelect();

  function applySelectedPreset(){
    if(!presetSel) return;
    const raw = String(presetSel.value||'custom');
    if(raw === 'custom'){
      state.presetIsCustom = true;
      return;
    }
    const parts = raw.split(':');
    const g = parts[0] || 'fitness';
    const idx = parseInt(parts[1]||'0',10) || 0;
    const list = presets[g] || presets.fitness;
    const p = list[idx] || list[0];
    if(!p) return;

    // Selecting a preset applies immediately and becomes the active preset.
    state.presetIsCustom = false;
    state.presetKey = raw;
    setBeatHz(p.hz);
    state.presetIsCustom = false;
    if(presetSel) presetSel.value = raw;
    setStatus('Preset: ' + p.name);
  }

  presetSel?.addEventListener('change', applySelectedPreset);

  function syncUiToState(){
    try{ q('#bl-beat-hz', fly).value = String(state.beatHz); }catch(_e){}
    try{ q('#bl-beat-hz-num', fly).value = String(state.beatHz); }catch(_e){}
    try{ q('#bl-carrier-hz', fly).value = String(state.carrierHz); }catch(_e){}
    try{ q('#bl-carrier-hz-num', fly).value = String(state.carrierHz); }catch(_e){}
    try{ q('#bl-beat-vol', fly).value = String(state.beatVol); }catch(_e){}
    if(presetSel) presetSel.value = state.presetIsCustom ? 'custom' : state.presetKey;
  }

  // ------------------------------------------------------------------
  // User presets (requires auth). Beds removed; any stored bed fields are ignored.
  // ------------------------------------------------------------------
  const userHost = q('#bl-user-presets', fly);

  async function loadUserPresets(){
    if(!userHost) return;
    if(!authState.authed){
      userHost.innerHTML = '<p class="muted">Log in to save & load your own presets.</p>';
      return;
    }

    if(IS_FILE_PROTOCOL){
      userHost.innerHTML = '<p class="muted">Saved presets require the website server.</p>';
      return;
    }
    let list = [];
    const r = await apiJson(API_BASE + '/binaural.php');
    if(r?.data?.ok) rememberResourceRevision('binaural',r.data);
    list = (r && r.data && r.data.ok && Array.isArray(r.data.presets)) ? r.data.presets : [];

    userHost.innerHTML = `
      <details>
        <summary><strong>Saved presets</strong> (${list.length})</summary>
        <div style="margin-top:10px;" id="bl-user-preset-list"></div>
      </details>
      <div style="margin-top:10px;">
        <label>Save current as</label>
        <div class="row" style="margin-top:6px;">
          <input id="bl-save-preset-name" type="text" maxlength="40" placeholder="e.g. My Focus" />
          <button type="button" class="bl-mini-btn" id="bl-save-preset">⭐ Save</button>
        </div>
      </div>
    `;

    const listHost = q('#bl-user-preset-list', userHost);
    if(listHost){
      list.forEach(p=>{
        const wrap = document.createElement('div');
        wrap.style.display='flex';
        wrap.style.gap='8px';
        wrap.style.alignItems='center';
        wrap.style.margin='8px 0';

        const loadBtn = document.createElement('button');
        loadBtn.type='button';
        loadBtn.className='bl-mini-btn';
        loadBtn.textContent = `${p.name} — ${p.beat_hz} Hz`;
        loadBtn.title = `Carrier ${p.carrier_hz} Hz`;
        loadBtn.addEventListener('click', ()=>{
          setBeatHz(p.beat_hz);
          setCarrierHz(p.carrier_hz);
          setBeatVol(p.beat_vol);
          setStatus('Loaded: ' + p.name);
          markCustom();
        });

        const delBtn = document.createElement('button');
        delBtn.type='button';
        delBtn.className='bl-mini-btn';
        delBtn.textContent = '✕';
        delBtn.title = 'Delete';
        delBtn.addEventListener('click', async ()=>{
          const deleted = await apiJson(API_BASE + '/binaural.php', { method:'POST', body:revisionedResourceBody('binaural',{ action:'delete', name:p.name }) });
          if(deleted?.data?.ok) rememberResourceRevision('binaural',deleted.data);
          if(deleted?.status===409 && deleted?.data?.error==='revision_conflict'){
            await loadUserPresets();
            setStatus('Presets changed elsewhere. The latest account presets were reloaded; please delete again.');
            return;
          }
          await loadUserPresets();
          setStatus('Deleted: ' + p.name);
        });

        wrap.appendChild(loadBtn);
        wrap.appendChild(delBtn);
        listHost.appendChild(wrap);
      });
    }

    q('#bl-save-preset', userHost)?.addEventListener('click', async ()=>{
      const nm = (q('#bl-save-preset-name', userHost)?.value || '').trim();
      if(!nm){ setStatus('Enter a preset name to save.'); return; }

      const payload = {
        action: 'save',
        name: nm,
        beat_hz: state.beatHz,
        carrier_hz: state.carrierHz,
        beat_vol: state.beatVol,
      };

      const r = await apiJson(API_BASE + '/binaural.php', { method:'POST', body:revisionedResourceBody('binaural',payload) });
      if(r && r.data && r.data.ok){
        rememberResourceRevision('binaural',r.data);
        await loadUserPresets();
        setStatus('Saved: ' + nm);
      }else if(r?.status===409 && r?.data?.error==='revision_conflict'){
        await loadUserPresets();
        setStatus('Presets changed elsewhere. The latest account presets were reloaded; please save again.');
      }else{
        setStatus('Could not save preset.');
      }
    });
  }

  // Load user presets when auth changes (and on open).
  onAuthChange(loadUserPresets);

  function open(){
    fly.hidden = false;
    toggle.setAttribute('aria-expanded','true');
    positionBeatsFlyout();
    window.requestAnimationFrame(positionBeatsFlyout);
    syncUiToState();
    loadUserPresets();
  }

  function toggleOpen(){
    if(fly.hidden) open(); else close();
  }

  // Open/close bindings
  toggle.addEventListener('click', (e)=>{ e.preventDefault(); toggleOpen(); }, { passive:false });

  window.addEventListener('resize', ()=>{
    if(!fly.hidden) positionBeatsFlyout();
  }, { passive:true });
  document.addEventListener('scroll', ()=>{
    if(!fly.hidden) positionBeatsFlyout();
  }, { passive:true, capture:true });

  document.addEventListener('mousedown', (e)=>{
    if(fly.hidden) return;
    const t = e.target;
    if(t === toggle) return;
    if(fly.contains(t)) return;
    close();
  }, { passive:true });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !fly.hidden) close();
  });
}

function setupRecipeFavourites(){

    const app = (document.body && document.body.dataset && document.body.dataset.app) ? String(document.body.dataset.app) : '';
    const appKey = (app === 'food') ? 'food' : (app === 'skin' ? 'skincare' : '');
    if(!appKey) return;

    const recipes = q('#recipes');
    if(!recipes) return;

    const cards = qsa('.recipe-page[id]', recipes);
    if(!cards.length) return;

    const favBootstrap = (()=>{
      try{
        const value = window.__BASELINE_RECIPE_FAVOURITES_BOOTSTRAP__;
        if(!value || String(value.app || '') !== appKey) return null;
        try{ delete window.__BASELINE_RECIPE_FAVOURITES_BOOTSTRAP__; }catch(_e){}
        return value;
      }catch(_e){ return null; }
    })();

    let favSet = new Set(
      favBootstrap?.ready && favBootstrap?.authed && Array.isArray(favBootstrap.ids)
        ? favBootstrap.ids.map(String)
        : []
    );
    let favOnly = false;
    let favsReady = !!favBootstrap?.ready;
    let favAuthed = !!(favBootstrap?.ready && favBootstrap?.authed);
    let favRequest = 0;
    if(favBootstrap?.ready && favBootstrap?.authed && Number.isFinite(Number(favBootstrap.revision))){
      rememberResourceRevision('favourites',favBootstrap);
    }

    // Expose for banner shortcuts
    try{
      window.BASELINE_setFavOnly = (on)=>{
        if(!authState.authed){
          try{ if(typeof window.BASELINE_openAuth === 'function') window.BASELINE_openAuth(); }catch(_e){}
          return;
        }
        favOnly = !!on;
        const btn = q('#fav-only-toggle');
        if(btn) btn.textContent = favOnly ? '⭐ Showing favourites' : '⭐ My favourites';
        updateButtons();
      };
    }catch(_e){}

    // Auto-open favourites-only mode when coming from the Account flyout
    try{
      const sp = new URLSearchParams(location.search || '');
      if(sp.get('favs') === '1' || sp.get('favourites') === '1'){
        favOnly = true;
      }
    }catch(_e){}

    function updateButtons(){
      cards.forEach(card=>{
        const id = card.id;
        const btn = q('.fav-btn', card);
        const isFav = favSet.has(id);
        if(favAuthed && btn){
          btn.classList.remove('tip-show');
          btn.removeAttribute('data-tip');
        }
        if(btn){
          btn.disabled = false;
          btn.setAttribute('aria-busy', favsReady ? 'false' : 'true');
          btn.classList.toggle('is-fav', isFav);
          btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
          btn.setAttribute('aria-label', !favsReady ? 'Loading favourite state' : !favAuthed ? 'Favorite recipe. Log in required to favorite this recipe.' : isFav ? 'Remove favorite' : 'Save favorite');
          try{ btn.removeAttribute('title'); }catch(_e){}
          btn.textContent = isFav ? '★' : '☆';
        }
      });

      // Filter overview list
      const overview = q('#recipes-overview');
      if(overview){
        qsa('a[href^="#"]', overview).forEach(a=>{
          const href = (a.getAttribute('href')||'').slice(1);
          const show = !favOnly || favSet.has(href);
          a.parentElement && (a.parentElement.style.display = show ? '' : 'none');
        });
      }

      // Hide cards when in favourites-only mode (only when not in open mode)
      const inOpen = recipes.classList.contains('recipe-open-mode');
      if(!inOpen){
        cards.forEach(card=>{
          const show = !favOnly || favSet.has(card.id);
          card.style.display = show ? '' : 'none';
        });
      }
    }

    async function refreshFavs(){
      const request = ++favRequest;
      if(!authState.ready) return;
      if(!authState.authed){
        favOnly = false;
        favAuthed = false;
        favSet = new Set();
        favsReady = true;
        updateButtons();
        return;
      }
      favAuthed = true;
      const r = await apiJson(API_BASE + '/favourites.php?app=' + encodeURIComponent(appKey));
      if(request !== favRequest || !authState.authed) return;
      if(!r?.data?.ok || !Array.isArray(r.data.ids)) return;
      rememberResourceRevision('favourites',r.data);
      favSet = new Set(r.data.ids.map(String));
      favAuthed = true;
      favsReady = true;
      updateButtons();
    }

    function showFavouriteCaption(recipeId){
      const card = document.getElementById(String(recipeId || ''));
      const btn = card ? q('.recipe-title-row > .fav-btn', card) : null;
      if(!btn) return;
      qsa('.recipe-title-row > .fav-btn.tip-show', recipes).forEach(other=>{
        if(other === btn) return;
        other.classList.remove('tip-show');
        other.removeAttribute('data-tip');
      });
      btn.setAttribute('data-tip','log in required to favorite this recipe.');
      btn.classList.add('tip-show');
    }

    async function toggleFav(recipeId){
      if(!favsReady) return;
      if(!favAuthed){
        showFavouriteCaption(recipeId);
        return;
      }
      const r = await apiJson(API_BASE + '/favourites.php', { method:'POST', body:revisionedResourceBody('favourites',{ app:appKey,recipeId }) });
      if(r && r.data && r.data.ok){
        rememberResourceRevision('favourites',r.data);
        favAuthed = true;
        favsReady = true;
        if(r.data.favourited) favSet.add(String(recipeId));
        else favSet.delete(String(recipeId));
        updateButtons();
        try{ document.dispatchEvent(new CustomEvent('baseline:favs-changed')); }catch(_e){}
      }else if(r?.status===409 && r?.data?.error==='revision_conflict'){
        await refreshFavs();
      }
    }
    // Inject per-recipe favourite buttons (placed next to the recipe title; keeps Print aligned).
    cards.forEach(card=>{
      const id = card.id;
      const h3 = q(':scope > h2', card) || q(':scope > h3', card) || q('h2,h3', card);
      if(!h3) return;

      // Ensure title row wrapper exists.
      let row = (h3.parentElement && h3.parentElement.classList && h3.parentElement.classList.contains('recipe-title-row'))
        ? h3.parentElement : null;
      if(!row){
        row = document.createElement('div');
        row.className = 'recipe-title-row';
        h3.insertAdjacentElement('beforebegin', row);
        row.appendChild(h3);
      }

      try{
        const titleStyle = getComputedStyle(h3);
        if(titleStyle && titleStyle.fontSize) row.style.setProperty('--recipe-title-font-size', titleStyle.fontSize);
        if(titleStyle && titleStyle.lineHeight && titleStyle.lineHeight !== 'normal'){
          row.style.setProperty('--recipe-title-line-height', titleStyle.lineHeight);
        }else{
          row.style.setProperty('--recipe-title-line-height', '1.15');
        }
      }catch(_e){}

      if(!q('.fav-btn', row)){
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'fav-btn';
        btn.disabled = false;
        btn.setAttribute('aria-pressed','false');
        btn.textContent = '☆';
        btn.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); toggleFav(id); });
        btn.addEventListener('blur', ()=>{
          btn.classList.remove('tip-show');
          btn.removeAttribute('data-tip');
        });
        row.appendChild(btn);
      }

      // Safety: remove any legacy fav buttons that were injected into action bars.
      qsa('.recipe-actions-right .fav-btn', card).forEach(x=>{ try{ x.remove(); }catch(_e){} });
    });

    // Apply the server-bootstrap state immediately so the first painted star is authoritative.
    updateButtons();

    // Add a favourites toggle on the recipes landing card.
    const landing = q('#recipes-landing');
    if(landing && !q('#fav-only-toggle', landing)){
      const wrap = document.createElement('div');
      wrap.style.marginTop = '10px';
      wrap.style.display = 'flex';
      wrap.style.gap = '10px';
      wrap.style.flexWrap = 'wrap';

      const btn = document.createElement('button');
      btn.id = 'fav-only-toggle';
      btn.type = 'button';
      btn.className = 'bl-mini-btn';
      btn.textContent = '⭐ My favourites';
      btn.addEventListener('click', ()=>{
        if(!authState.authed){
          try{ if(typeof window.BASELINE_openAuth === 'function') window.BASELINE_openAuth(); }catch(_e){}
          return;
        }
        favOnly = !favOnly;
        btn.textContent = favOnly ? '⭐ Showing favourites' : '⭐ My favourites';
        updateButtons();
      });
      wrap.appendChild(btn);
      landing.appendChild(wrap);
    }

    onAuthChange(refreshFavs);
    refreshFavs();

    // If the user exits focused recipe view (via Back / Show all), re-apply
    // the favourites-only filter automatically.
    try{
      const obs = new MutationObserver(()=>{ try{ updateButtons(); }catch(_e){} });
      obs.observe(recipes, { attributes:true, attributeFilter:['class'] });
    }catch(_e){}
  }

// --------------------------------------------------------------------
    // Resilient boot sequence
    // 
    // Tabs are "critical path" UI. Previously, any exception earlier in the
    // init chain could prevent tabs from binding, making the site feel broken.
    // We now isolate each setup call so one failure cannot cascade.
    // --------------------------------------------------------------------
    const safeInit = (name, fn) => {
      try{
        const key = String(name||'').trim() || 'init';
        const bag = (window.__BL_INIT_DONE__ = window.__BL_INIT_DONE__ || new Set());
        if(bag.has(key)) return;
        bag.add(key);
        if(typeof fn === 'function') fn();
      }catch(e){
        console.error('[Baseline init] ' + name + ' failed:', e);
      }
    };

    const runAfterFirstPaint = (fn)=>{
      try{
        if(window.requestAnimationFrame){
          window.requestAnimationFrame(()=>{ window.setTimeout(fn, 0); });
          return;
        }
      }catch(_e){}
      try{ window.setTimeout(fn, 0); }catch(_e){ try{ fn(); }catch(__e){} }
    };

    const contentViewHash = String(location.hash || '');
    const cleanContentRoute = cleanRouteStateFromPath();
    const routePageFile = routePageFileFromPath(location.pathname || '');
    const isSkincarePage = routePageFile === 'baseline-natural-skincare.html';
    const needsImmediateContentUi = /^(#recipe=|#r\d+$|#tab=recipes|#tab=ingredients|#ingredients$|#recipes$|#support$|#support=|#support-|#ing-)/i.test(contentViewHash)
      || !!recipePathStateFromLocation()
      || !!(cleanContentRoute && cleanContentRoute.kind === 'ingredient')
      || !!(cleanContentRoute && cleanContentRoute.kind === 'tab' && ['recipes','ingredients','support'].includes(cleanContentRoute.tabId))
      || (!isSkincarePage && !!q('.recipe.card.recipe-page'));

    // Critical-path UI first so the banner and tabs paint without waiting on recipe-wide enhancement work.
    safeInit('sitewide information popovers', setupSitewideInfoPopovers);
    safeInit('homebar right controls', setupHomebarRightControls);
    safeInit('homebar height', syncHomebarHeight);
    safeInit('topnav navigation', setupTopnavNavigation);
    safeInit('delegated site navigation', setupDelegatedSiteNavigation);
    safeInit('scroll persistence', setupScrollPersistence);
    safeInit('system menu', setupSystemMenu);
    safeInit('tabs', setupTabs);

    try{
      if(typeof window.BASELINE_selectTab !== 'function') setupTabs();
    }catch(e){
      console.error('[Baseline init] tabs fallback failed:', e);
    }

    const initContentUi = ()=>{
      safeInit('recipe overview ordering', setupRecipeOverviewAndOrdering);
      safeInit('recipes', setupRecipes);
      safeInit('recipe action bars', setupRecipeActionBars);
      safeInit('recipe favourites', setupRecipeFavourites);
      safeInit('ingredient filtering', setupIngredientFiltering);
      safeInit('support library', setupSupportLibrary);
      safeInit('ingredient link label sync', syncIngredientLinkLabels);
      safeInit('recipe ingredient captions', ()=> ensureRecipeIngredientCaptions(document));
      safeInit('recipe tools', setupRecipeTools);
      safeInit('comedogenic max', applyComedogenicMax);
      safeInit('select enhancement', ()=> enhanceAllSelects(document));
    };

    let contentUiStarted = false;
    let contentUiPromise = null;
    const ensureContentUi = ()=>{
      if(contentUiPromise) return contentUiPromise;
      contentUiStarted = true;
      contentUiPromise = (async()=>{
        if(routePageFile === 'baseline-food-approach.html'){
          await hydrateFolderBackedRecipeCollection();
        }
        initContentUi();
      })();
      return contentUiPromise;
    };
    try{
      window.BASELINE_ensureContentUi = ensureContentUi;
    }catch(_e){}

    const bindLazyContentUi = ()=>{
      const shouldStartForTarget = (target)=>{
        try{
          const tab = target && target.closest ? target.closest('.tab[data-target], .tab[data-tab]') : null;
          if(tab){
            const id = String((tab.dataset && (tab.dataset.target || tab.dataset.tab)) || '').trim();
            if(id && id !== 'system') return true;
          }
          const link = target && target.closest ? target.closest('a[href^="#recipe="], a[href^="#r"], a[href^="#ing-"], a[href^="#ingredients"], a[href^="#recipes"], a.recipe-open, a.ing-link, a.ing-jump, [data-scroll-to-ingredients]') : null;
          return !!link;
        }catch(_e){ return false; }
      };
      try{
        document.addEventListener('pointerdown', (e)=>{
          if(!shouldStartForTarget(e.target)) return;
          const tab = e.target && e.target.closest ? e.target.closest('.tab[data-target], .tab[data-tab]') : null;
          if(isSkincarePage && tab) return;
          ensureContentUi();
        }, { capture:true, passive:true });
        document.addEventListener('click', (e)=>{
          if(!shouldStartForTarget(e.target)) return;
          const tab = e.target && e.target.closest ? e.target.closest('.tab[data-target], .tab[data-tab]') : null;
          if(isSkincarePage && tab){
            window.setTimeout(ensureContentUi, 0);
            return;
          }
          ensureContentUi();
          try{
            const a = e.target && e.target.closest ? e.target.closest('a[href*="#recipe="], a.recipe-open') : null;
            if(a){
              const href = String(a.getAttribute('href') || '');
              let token = '';
              if(a.dataset && a.dataset.recipeId) token = a.dataset.recipeId;
              if(!token){
                const hashPart = href.indexOf('#') >= 0 ? href.slice(href.indexOf('#')) : '';
                if(/^#recipe=/i.test(hashPart)) token = hashPart.replace(/^#recipe=/i, '');
                else if(/^#r\d+/i.test(hashPart)) token = hashPart.slice(1);
              }
              if(token && typeof window.BASELINE_openRecipe === 'function'){
                const liveCard = document.getElementById(recipeIdForToken(token));
                const recipesSection = document.getElementById('recipes');
                if(liveCard && recipesSection && recipesSection.contains(liveCard)){
                  e.preventDefault();
                  window.BASELINE_openRecipe(token, { silentHistory:false });
                }
              }
            }
          }catch(_e){}
        }, { capture:true });
      }catch(_e){}
    };

    // Start server-session resolution immediately. The Account control has a
    // stable label, so authentication no longer causes a banner-width repaint.
    safeInit('auth refresh', ()=>{ try{ refreshAuth(); }catch(_e){} });

    const initSecondaryUi = ()=>{
      safeInit('contact flyout', setupContactFlyout);
      safeInit('auth flyout', setupAuthFlyout);
      safeInit('binaural flyout', setupBinauralFlyout);
    };

    if(needsImmediateContentUi){
      await ensureContentUi();
      runAfterFirstPaint(initSecondaryUi);
    }else{
      bindLazyContentUi();
      runAfterFirstPaint(initSecondaryUi);
    }

    // Seed the first history entry so the browser Back button returns to the prior in-page view (not the index).

    const initialHash = location.hash || '';
    const initialHashView = initialHash ? parseViewStateHash(initialHash) : null;
    const initialRecipeView = recipePathStateFromLocation();
    const initialIngredientView = skincareIngredientPathStateFromLocation();
    const initialCleanRouteView = cleanRouteStateFromPath();

    // Repair legacy hybrid URLs such as /recipes/a-recipe#ing-jojoba.
    // A clean ingredient record gets its own page URL; one address must not
    // describe both a recipe and an ingredient at the same time.
    if(initialRecipeView && initialHashView && initialHashView.kind === 'ingredient'
      && routePageFileFromPath(location.pathname || '') === 'baseline-natural-skincare.html'){
      const cleanIngredientUrl = skincareIngredientUrlForId(initialHashView.ingredientId, initialHashView.recipeFilter || '');
      if(cleanIngredientUrl){
        window.location.replace(cleanIngredientUrl);
        return;
      }
    }

    const initialView = initialRecipeView || initialIngredientView || initialHashView || initialCleanRouteView;

    // Restore view from URL state hashes (prevents broken deep links and preserves
    // ingredient-filter params such as #tab=ingredients&filter=r2).
    if(initialView && initialView.kind === 'recipe'){
      const rid = initialView.recipeId || '';
      if(typeof window.BASELINE_openRecipe === 'function' && rid){
        window.BASELINE_openRecipe(rid, { silentHistory:true, noScroll: !!recipePathStateFromLocation() });
        try{
          const card=document.getElementById(recipeIdForToken(rid));
          if(card){
            if(typeof card.__baselineSetRecipeVariant === 'function' && initialView.recipeVariant){
              card.__baselineSetRecipeVariant(initialView.recipeVariant, { syncRoute:false });
            }
            if(typeof card.__baselineSetRecipeView === 'function'){
              card.__baselineSetRecipeView(normalizeRecipeSubView(initialView.recipeView || 'standard'), { syncRoute:false });
            }
          }
        }catch(_e){}
      }
      // Canonicalise legacy #recipe=rN/#rN links to the named path URL without adding history.
      // Preserve a recipe subview carried by the clean route so refresh can reconstruct it.
      try{
        const nextState = {
          kind:'recipe',
          recipeId:rid,
          recipeView:normalizeRecipeSubView(initialView.recipeView || 'standard'),
          recipeVariant:String(initialView.recipeVariant || '').trim()
        };
        setNavState(nextState, { replace:true, url: urlForNavState(nextState) });
      }catch(_e){}
    }else if(initialView && initialView.kind === 'tab'){
      const tabId = initialView.tabId || 'system';
      if(typeof window.BASELINE_selectTab === 'function' && tabId){
        window.BASELINE_selectTab(tabId, { silentHistory:true });
      }
      if(tabId === 'ingredients' && typeof window.BASELINE_setIngredientFilter === 'function'){
        window.BASELINE_setIngredientFilter(initialView.recipeFilter || null, { silentHistory:true });
      }
      try{
        if(tabId === 'ingredients'){
          const nextState = { kind: 'ingredients', recipeFilter: initialView.recipeFilter || null };
          setNavState(nextState, { replace:true, url: urlForNavState(nextState) });
        }else{
          const nextState = { kind: 'tab', tabId: tabId };
          const rawCleanRoute = String(initialView.raw || '').toLowerCase().replace(/\/+$/,'');
          let ownedSubviewQuery = false;
          try{
            const routeParams = new URLSearchParams(location.search || '');
            ownedSubviewQuery =
              (routePageFile === 'baseline-massage.html' && (routeParams.has('planner-mode') || routeParams.has('library-category'))) ||
              (routePageFile === 'baseline-food-approach.html' && (routeParams.has('view') || routeParams.has('date'))) ||
              (routePageFile === 'baseline-badminton-session.html' && routeParams.has('gameplan-view')) ||
              (routePageFile === 'baseline-psychology.html' && routeParams.has('psych-view'));
          }catch(_e){}
          const preserveNestedRoutinePath =
            ownedSubviewQuery ||
            /^\/baseline-fitness\/my-routine(?:\/(?:log|summary|public|plan(?:\/(?:calisthenics|cardio|other|sports))?))?$/.test(rawCleanRoute) ||
            /^\/baseline-fitness\/my-body(?:\/(?:profile|services))?$/.test(rawCleanRoute) ||
            /^\/baseline-fitness\/my-plan(?:\/(?:completed|future))?$/.test(rawCleanRoute) ||
            /^\/baseline-natural-skincare\/my-routine(?:\/(?:log|summary|plan|public))?$/.test(rawCleanRoute);
          const nextUrl = preserveNestedRoutinePath
            ? String(location.pathname || '') + String(location.search || '') + String(location.hash || '')
            : urlForNavState(nextState);
          setNavState(nextState, { replace:true, url: nextUrl });
        }
      }catch(_e){}
    }else if(initialView && initialView.kind === 'ingredient'){
      if(typeof window.BASELINE_selectTab === 'function'){
        window.BASELINE_selectTab('ingredients', { silentHistory:true });
      }
      if(typeof window.BASELINE_setIngredientFilter === 'function'){
        window.BASELINE_setIngredientFilter(initialView.recipeFilter || null, { silentHistory:true });
      }
      if(typeof window.BASELINE_scrollToIngredient === 'function' && initialView.ingredientId){
        queueNavScroll(()=> window.BASELINE_scrollToIngredient(initialView.ingredientId), 60);
      }
      try{ const nextState = { kind: 'ingredient', ingredientId: initialView.ingredientId || '', recipeFilter: initialView.recipeFilter || null }; setNavState(nextState, { replace:true, url: urlForNavState(nextState) }); }catch(_e){}
    }else if(initialView && initialView.kind === 'support'){
      const sid = initialView.supportId || '';
      if(typeof window.BASELINE_selectTab === 'function' && sid){
        window.BASELINE_selectTab('support', { silentHistory:true });
      }
      if(typeof window.BASELINE_scrollToSupportCard === 'function' && sid){
        queueNavScroll(()=> window.BASELINE_scrollToSupportCard(sid), 70);
      }
      try{ const nextState = { kind: 'support', supportId: sid }; setNavState(nextState, { replace:true, url: urlForNavState(nextState) }); }catch(_e){}
    }else{
      // If we already have an in-page nav state (e.g., after a reload),
      // restore it instead of forcing the default first tab.
      const existing = getNavState();
      if(existing){
        applyNavState(existing);
        try{ setNavState(existing, { replace:true, url: urlForNavState(existing) }); }catch(_e){}
      }else{
        const activeTabEl = q('.tab[aria-selected="true"]');
        const activeTab = activeTabEl ? (activeTabEl.dataset.target || activeTabEl.dataset.tab) : null;
        try{ const nextState = { kind: 'tab', tabId: activeTab || 'system' }; setNavState(nextState, { replace:true, url: urlForNavState(nextState) }); }catch(_e){}
      }
    }

    try{
      if(!window.__BASELINE_RECIPE_HASHCHANGE_BOUND__){
        window.__BASELINE_RECIPE_HASHCHANGE_BOUND__ = true;
        window.addEventListener('hashchange', function(){
          try{
            const view = parseViewStateHash(location.hash || '');
            if(view && view.kind === 'recipe' && view.recipeId){
              ensureContentUi();
              if(typeof window.BASELINE_openRecipe === 'function'){
                window.BASELINE_openRecipe(view.recipeId, { silentHistory:true });
              }
            }else if(view && view.kind === 'tab' && view.tabId && typeof window.BASELINE_selectTab === 'function'){
              window.BASELINE_selectTab(view.tabId, { silentHistory:true });
            }
          }catch(_e){}
        });
      }
    }catch(_e){}
  }

  if(document.body){
    bootBaselineShared();
  }else{
    document.addEventListener('DOMContentLoaded', bootBaselineShared, { once:true });
  }
})();
