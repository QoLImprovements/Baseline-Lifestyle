/* Baseline Natural Skincare — deterministic My Routine loader v30.

   PERFORMANCE / OWNERSHIP CONTRACT
   --------------------------------
   - No loading screen and no hidden/placeholder My Routine page.
   - Base Skincare owns data and native controls.
   - skincare-routine-sitewide-v4.js owns Skincare grouping/calendar structure.
   - baseline-public-routine-viewonly-v4.js renders Public Routines as View Only My Routine.
   - baseline-routine-coherence-v12.js is the sole shared behaviour finisher.
   - No boot polling: parser-loaded prerequisites are available by DOMContentLoaded.
   - Dependencies start fetching together and execute in dependency order.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V30__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V30__ = true;
  const document = global.document;
  let recipeOptionObserver = null;
  let started = false;

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

  function preserveCompletedLogDates() {
    const base = global.BASELINE_SKINCARE_ROUTINE_MODEL;
    if (!base || base.__baselineKeepCompletedDateV2) return;
    const originalDueStatus = base.dueStatus?.bind(base);
    if (typeof originalDueStatus !== 'function') return;
    global.BASELINE_SKINCARE_ROUTINE_MODEL = Object.freeze(Object.assign({},base,{
      __baselineKeepCompletedDateV2:true,
      dueStatus(itemValue,value,logs) {
        const status = originalDueStatus(itemValue,value,logs);
        try {
          const item = base.normaliseItem(itemValue);
          const date = base.isoDate(value);
          const entries = base.normaliseLogs(logs)?.[date] || {};
          if (entries[item.id]?.completed) return Object.assign({},status,{ due:true,detail:'Completed on this date' });
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
        script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });
        script.addEventListener('error',reject,{ once:true });
        document.head.appendChild(script);
      });
    });
    return Promise.all(pending);
  }

  function start() {
    if (started) return;
    started = true;
    exposeAllBaselineRecipes();
    preserveCompletedLogDates();
    if (!global.BASELINE_SKINCARE_ROUTINE || !global.BASELINE_SKINCARE_ROUTINE_MODEL) {
      try { console.error('Skincare My Routine prerequisites were not available at DOM readiness.'); } catch (_error) {}
      return;
    }
    loadOrderedParallel([
      { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260808_6',marker:'data-baseline-routine-system' },
      { src:'/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260808_12',marker:'data-skincare-routine-sitewide-v4' },
      { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260808_1',marker:'data-baseline-public-routine-viewonly-v4' },
      { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260808_4',marker:'data-baseline-routine-coherence-v12' }
    ])
      .then(bindRecipeOptionNormaliser)
      .catch((error) => { try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {} });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{ once:true });
  else start();
  global.addEventListener('pagehide',() => recipeOptionObserver?.disconnect(),{ once:true });
})(typeof window !== 'undefined' ? window : globalThis);
