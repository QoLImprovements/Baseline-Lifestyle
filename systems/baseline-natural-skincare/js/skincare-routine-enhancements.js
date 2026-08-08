/* Baseline Natural Skincare — deterministic My Routine loader v29.

   PERFORMANCE / OWNERSHIP CONTRACT
   --------------------------------
   1. skincare-routine.js owns routine data and its base controls.
   2. skincare-routine-sitewide-v4.js owns Skincare grouping/calendar mapping.
   3. baseline-public-routine-groups-v1.js owns the shared read-only viewer.
   4. baseline-routine-stability-v11.js is the only final shared interaction layer.

   Scripts are inserted together with async=false. Browsers can fetch them in
   parallel while still executing them in insertion order. Do not restore the
   former serial promise waterfall or the v7/v9/v10 competing DOM normalisers.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V29__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V29__ = true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V28__ = true;

  const document = global.document;
  const MAX_WAIT_MS = 3000;
  let recipeOptionObserver = null;

  function exposeAllBaselineRecipes() {
    const base = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    if (!base || base.__baselineAllRecipesV2) return;
    const escape = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[character]));
    function allRecipes() {
      const seen = new Set();
      return Array.from(document.querySelectorAll('#recipes .recipe-page,#recipes [data-recipe-slug]')).map((card,index) => {
        const title = String(card.querySelector('h3,h2')?.textContent || '').trim();
        const id = String(card.id || card.dataset.recipeSlug || `recipe-${index + 1}`).trim();
        if (!id || !title || seen.has(id)) return null;
        seen.add(id);
        return { id,title };
      }).filter(Boolean).sort((a,b) => a.title.localeCompare(b.title,'en-GB',{ sensitivity:'base' }));
    }
    function selectionDetails(value,actionId) {
      const selected = String(value || '');
      if (selected.startsWith('recipe:')) {
        const recipe = allRecipes().find((item) => item.id === selected.slice(7));
        return recipe ? { source:'recipe',name:recipe.title } : { source:'recipe',name:'' };
      }
      return base.selectionDetails(value,actionId);
    }
    function optionsHtml(actionId,selected='') {
      const recipes = allRecipes();
      const products = base.relevantProducts(actionId);
      const recipeOptions = recipes.map((item) => `<option value="recipe:${escape(item.id)}"${selected === `recipe:${item.id}` ? ' selected' : ''}>${escape(item.title)}</option>`).join('');
      const productOptions = products.map((item) => `<option value="product:${escape(item.id)}"${selected === `product:${item.id}` ? ' selected' : ''}>${escape(item.brand)} — ${escape(item.name)}</option>`).join('');
      return `<option value="">No product selected</option><optgroup label="Baseline Skincare Recipes">${recipeOptions}</optgroup><optgroup label="UK Product Library">${productOptions}</optgroup><optgroup label="Other"><option value="custom"${selected === 'custom' ? ' selected' : ''}>Custom product…</option></optgroup>`;
    }
    global.BASELINE_SKINCARE_PRODUCT_LIBRARY = Object.freeze(Object.assign({},base,{
      __baselineAllRecipesV2:true,
      recipeProducts:allRecipes,
      selectionDetails,
      optionsHtml
    }));
  }

  /* A completed weekly/specific-day entry must stay due on the date it was
     logged, otherwise checking it makes its own checkbox disappear and it can
     never be corrected later. Patch the model before skincare-routine.js boots. */
  function preserveCompletedLogDates() {
    const base = global.BASELINE_SKINCARE_ROUTINE_MODEL;
    if (!base || base.__baselineKeepCompletedDateV1) return;
    const originalDueStatus = base.dueStatus?.bind(base);
    if (typeof originalDueStatus !== 'function') return;
    global.BASELINE_SKINCARE_ROUTINE_MODEL = Object.freeze(Object.assign({},base,{
      __baselineKeepCompletedDateV1:true,
      dueStatus(itemValue,value,logs) {
        const status = originalDueStatus(itemValue,value,logs);
        try {
          const item = base.normaliseItem(itemValue);
          const date = base.isoDate(value);
          const entries = base.normaliseLogs(logs)?.[date] || {};
          if (entries[item.id]?.completed) return Object.assign({},status,{ due:true });
        } catch (_error) {}
        return status;
      }
    }));
  }

  function normaliseRecipeOptions() {
    const library = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const recipes = typeof library?.recipeProducts === 'function' ? library.recipeProducts() : [];
    if (!Array.isArray(recipes) || !recipes.length) return;
    const signature = recipes.map((item) => `${item.id}:${item.title}`).join('|');
    document.querySelectorAll('#routineItems [data-field="productSelection"]').forEach((select) => {
      const selected = String(select.value || '');
      let group = select.querySelector('optgroup[label="Baseline Skincare Recipes"],optgroup[label="My Recipes"]');
      if (!group) {
        group = document.createElement('optgroup');
        const firstGroup = select.querySelector('optgroup');
        if (firstGroup) select.insertBefore(group,firstGroup); else select.appendChild(group);
      }
      group.label = 'Baseline Skincare Recipes';
      if (group.dataset.recipeSignature !== signature) {
        group.dataset.recipeSignature = signature;
        group.replaceChildren(...recipes.map((item) => {
          const option = document.createElement('option');
          option.value = `recipe:${item.id}`;
          option.textContent = item.title;
          return option;
        }));
      }
      if (Array.from(select.options).some((option) => option.value === selected)) select.value = selected;
    });
  }

  function bindRecipeOptionNormaliser() {
    normaliseRecipeOptions();
    document.addEventListener('baseline:routine-rendered',normaliseRecipeOptions);
    const items = document.getElementById('routineItems');
    if (items && typeof MutationObserver !== 'undefined') {
      recipeOptionObserver?.disconnect();
      recipeOptionObserver = new MutationObserver(() => global.requestAnimationFrame(normaliseRecipeOptions));
      recipeOptionObserver.observe(items,{ childList:true,subtree:true });
    }
  }

  function installBootShield() {
    document.documentElement.setAttribute('data-skincare-routine-booting','true');
    if (document.getElementById('skincareRoutineBootShieldStyle')) return;
    const style = document.createElement('style');
    style.id = 'skincareRoutineBootShieldStyle';
    style.textContent = `
      html[data-skincare-routine-booting="true"] #routine{position:relative!important;min-height:240px!important}
      html[data-skincare-routine-booting="true"] #routine>*{visibility:hidden!important}
      html[data-skincare-routine-booting="true"] #routine::before{
        content:"Loading My Routine…";visibility:visible!important;position:absolute;inset:22px auto auto 50%;transform:translateX(-50%);
        width:min(90%,760px);box-sizing:border-box;padding:20px 24px;border:1px solid var(--border,var(--border-2,currentColor));
        border-radius:18px;background:var(--card-bg,var(--filter-bg,Canvas));color:var(--ink,currentColor);font:inherit;font-size:18px;font-weight:800;text-align:center
      }
      #routine :is(.routine-item,.routine-log-item,.routine-summary-item,.routine-plan-group,.routine-log-group){transition:none!important;animation:none!important}
    `;
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => document.documentElement.removeAttribute('data-skincare-routine-booting')));
  }

  function ensureStyle() {
    const href = '/sitewide/css/baseline-routine-stability-v11.css?v=BASELINE_ROUTINE_STABILITY_20260808_1';
    const existing = document.querySelector('link[data-baseline-routine-stability-v11]');
    if (existing) return Promise.resolve();
    return new Promise((resolve) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset.baselineRoutineStabilityV11 = 'true';
      link.addEventListener('load',resolve,{ once:true });
      link.addEventListener('error',resolve,{ once:true });
      document.head.appendChild(link);
    });
  }

  function waitForBaseRoutine() {
    const started = Date.now();
    return new Promise((resolve,reject) => {
      const check = () => {
        if (global.BASELINE_SKINCARE_ROUTINE && global.BASELINE_SKINCARE_ROUTINE_MODEL) { resolve(); return; }
        if (Date.now() - started >= MAX_WAIT_MS) { reject(new Error('Skincare base routine did not initialise.')); return; }
        global.setTimeout(check,16);
      };
      check();
    });
  }

  function loadOrderedParallel(entries) {
    const pending = entries.map(({ src,marker }) => {
      const existing = document.querySelector(`script[${marker}]`);
      if (existing) {
        if (existing.dataset.loaded === 'true' || existing.readyState === 'complete') return Promise.resolve();
        return new Promise((resolve,reject) => {
          existing.addEventListener('load',resolve,{ once:true });
          existing.addEventListener('error',reject,{ once:true });
        });
      }
      return new Promise((resolve,reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.setAttribute(marker,'true');
        script.addEventListener('load',() => { script.dataset.loaded = 'true'; resolve(); },{ once:true });
        script.addEventListener('error',reject,{ once:true });
        document.head.appendChild(script);
      });
    });
    return Promise.all(pending);
  }

  exposeAllBaselineRecipes();
  preserveCompletedLogDates();
  installBootShield();
  const styleReady = ensureStyle();

  waitForBaseRoutine()
    .then(() => loadOrderedParallel([
      { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260807_5', marker:'data-baseline-routine-system' },
      { src:'/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260808_11', marker:'data-skincare-routine-sitewide-v4' },
      { src:'/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_3', marker:'data-baseline-public-routine-groups' },
      { src:'/sitewide/js/baseline-routine-stability-v11.js?v=BASELINE_ROUTINE_STABILITY_20260808_1', marker:'data-baseline-routine-stability-v11' }
    ]))
    .then(() => styleReady)
    .then(() => {
      bindRecipeOptionNormaliser();
      releaseBootShield();
    })
    .catch((error) => {
      releaseBootShield();
      try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {}
    });

  global.addEventListener('pagehide',() => recipeOptionObserver?.disconnect(),{ once:true });
})(typeof window !== 'undefined' ? window : globalThis);
