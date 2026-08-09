/* Baseline Natural Skincare — deterministic My Routine loader v33.

   PERFORMANCE / OWNERSHIP CONTRACT
   --------------------------------
   - No loading screen and no hidden/placeholder My Routine page.
   - Base Skincare owns data and native controls.
   - skincare-routine-sitewide-v5.js is the single Skincare grouping/calendar owner.
   - baseline-public-routine-viewonly-v4.js renders Public Routines as View Only My Routine.
   - baseline-routine-coherence-v12.js is the sole shared behaviour/state finisher.
   - No boot polling: parser-loaded prerequisites are available by DOMContentLoaded.
   - Runtime dependencies execute strictly in declared dependency order.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V33__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V33__ = true;
  const document = global.document;
  let recipeOptionObserver = null;
  let started = false;

  function ensureRoutineModelContract() {
    const base = global.BASELINE_SKINCARE_ROUTINE_MODEL;
    if (!base || base.__baselineRoutineContractV3) return;
    const shavingIds = Object.freeze(['shave','electric-shave','beard-trim','nose-ear-hair-trim']);
    const shavingMethods = Object.freeze(Array.from(base.SHAVING_METHODS || []));
    const actions = Array.from(base.ACTIONS || []);
    const groups = Array.from(base.GROUPS || []);
    const actionById = (value) => base.ACTION_BY_ID?.get?.(String(value || '')) || actions.find((item) => String(item?.id || '') === String(value || '')) || null;
    const actionGroups = Object.freeze(groups.map((entry) => {
      const label = typeof entry === 'string' ? entry : String(entry?.label || entry?.name || '');
      return Object.freeze({ label,ids:Object.freeze(actions.filter((action) => String(action?.group || '') === label).map((action) => String(action.id))) });
    }).filter((entry) => entry.label && entry.ids.length));
    const cleanText = (value,maximum=1200) => String(value == null ? '' : value).trim().slice(0,Math.max(0,Number(maximum) || 0));
    const localDate = (value) => {
      if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
      const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
      if (match) return new Date(Number(match[1]),Number(match[2])-1,Number(match[3]));
      const parsed=new Date(value || Date.now());
      return Number.isNaN(parsed.getTime()) ? new Date() : new Date(parsed.getFullYear(),parsed.getMonth(),parsed.getDate());
    };
    const todayIso = () => base.isoDate(new Date());
    const isFutureDate = (value) => base.isoDate(value) > todayIso();
    const clampLogDate = (value) => {
      const next=base.isoDate(value || new Date());
      return next > todayIso() ? todayIso() : next;
    };
    const configureLogDateInput = (input,value) => {
      const next=clampLogDate(value || input?.value || todayIso());
      if (input) { input.max=todayIso();input.value=next; }
      return next;
    };
    const normaliseTime = (value) => (base.TIMES || []).some((entry) => entry.value===value) ? value : 'anytime';
    const normaliseShavingMethod = (value) => shavingMethods.some((entry) => entry.value===value) ? value : 'wet-cartridge';
    const escapeHtml = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
    const createItem = (actionId) => {
      const definition=actionById(actionId) || actionById('custom') || actions[0];
      const id=global.crypto?.randomUUID ? `routine-${global.crypto.randomUUID()}` : `routine-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
      return base.normaliseItem({ id,actionId:definition?.id || 'custom',title:definition?.title || 'Self-Care Action' });
    };
    global.BASELINE_SKINCARE_ROUTINE_MODEL = Object.freeze(Object.assign({},base,{
      __baselineRoutineContractV3:true,
      TIME_OPTIONS:base.TIMES || [],
      FREQUENCY_OPTIONS:base.FREQUENCIES || [],
      SHAVING_ACTION_IDS:shavingIds,
      SHAVING_METHOD_OPTIONS:shavingMethods,
      ACTION_GROUPS:actionGroups,
      actionById,
      cleanText,
      escapeHtml,
      localDate,
      todayIso,
      isFutureDate,
      clampLogDate,
      configureLogDateInput,
      normaliseTime,
      normaliseShavingMethod,
      createItem
    }));
  }

  ensureRoutineModelContract();

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

  function loadScript({ src,marker }) {
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
  }

  function loadOrdered(entries) {
    return entries.reduce((chain,entry) => chain.then(() => loadScript(entry)),Promise.resolve());
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
    loadOrdered([
      { src:'/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260808_6',marker:'data-baseline-routine-system' },
      { src:'/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v5.js?v=SKINCARE_SITEWIDE_ROUTINE_20260809_5',marker:'data-skincare-routine-sitewide-v5' },
      { src:'/sitewide/js/baseline-public-routine-viewonly-v4.js?v=BASELINE_PUBLIC_ROUTINE_VIEWONLY_20260809_2',marker:'data-baseline-public-routine-viewonly-v4' },
      { src:'/sitewide/js/baseline-routine-coherence-v12.js?v=BASELINE_ROUTINE_COHERENCE_20260809_8',marker:'data-baseline-routine-coherence-v12' }
    ])
      .then(bindRecipeOptionNormaliser)
      .catch((error) => { try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {} });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{ once:true });
  else start();
  global.addEventListener('pagehide',() => recipeOptionObserver?.disconnect(),{ once:true });
})(typeof window !== 'undefined' ? window : globalThis);