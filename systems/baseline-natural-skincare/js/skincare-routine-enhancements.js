/* Baseline Natural Skincare — deterministic My Routine enhancement loader.

   OWNERSHIP CONTRACT — DO NOT BREAK IN FUTURE EDITS
   --------------------------------------------------
   1. skincare-routine.js is the data/editor owner. It must initialise first.
   2. skincare-routine-sitewide-v4.js maps Skincare data into shared My Routine.
   3. baseline-public-routine-groups-v1.js is the one shared read-only viewer.
   4. baseline-routine-authority-v7.js owns shared coherence/state decoration.
   5. baseline-routine-experience-v9.js remains the compatibility normaliser.
   6. baseline-routine-experience-v10.js is the FINAL sitewide presentation rule.

   There is deliberately NO Skincare-only interaction renderer after the shared
   authorities. Skincare contributes its data and palette; My Routine behaviour,
   typography, dropdowns, calendar markers, summaries and public views remain
   sitewide and reusable by Fitness and future systems. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V28__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V28__=true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V27__=true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V26__=true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V25__=true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V24__=true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V23__=true;

  const document=global.document;
  const MAX_WAIT_MS=6000;
  let recipeOptionObserver=null;

  function exposeAllBaselineRecipes() {
    const base=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    if (!base || base.__baselineAllRecipesV2) return;
    const escape=(value) => String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
    function allRecipes() {
      const seen=new Set();
      return Array.from(document.querySelectorAll('#recipes .recipe-page,#recipes [data-recipe-slug]')).map((card,index) => {
        const title=String(card.querySelector('h3,h2')?.textContent || '').trim();
        const id=String(card.id || card.dataset.recipeSlug || `recipe-${index+1}`).trim();
        if (!id || !title || seen.has(id)) return null;
        seen.add(id);return { id,title };
      }).filter(Boolean).sort((a,b) => a.title.localeCompare(b.title,'en-GB',{ sensitivity:'base' }));
    }
    function selectionDetails(value,actionId) {
      const selected=String(value || '');
      if (selected.startsWith('recipe:')) {
        const recipe=allRecipes().find((item) => item.id===selected.slice(7));
        return recipe ? { source:'recipe',name:recipe.title } : { source:'recipe',name:'' };
      }
      return base.selectionDetails(value,actionId);
    }
    function optionsHtml(actionId,selected='') {
      const recipes=allRecipes();
      const products=base.relevantProducts(actionId);
      const recipeOptions=recipes.map((item) => `<option value="recipe:${escape(item.id)}"${selected===`recipe:${item.id}`?' selected':''}>${escape(item.title)}</option>`).join('');
      const productOptions=products.map((item) => `<option value="product:${escape(item.id)}"${selected===`product:${item.id}`?' selected':''}>${escape(item.brand)} — ${escape(item.name)}</option>`).join('');
      return `<option value="">No product selected</option><optgroup label="Baseline Skincare Recipes">${recipeOptions}</optgroup><optgroup label="UK Product Library">${productOptions}</optgroup><optgroup label="Other"><option value="custom"${selected==='custom'?' selected':''}>Custom product…</option></optgroup>`;
    }
    global.BASELINE_SKINCARE_PRODUCT_LIBRARY=Object.freeze(Object.assign({},base,{
      __baselineAllRecipesV2:true,
      recipeProducts:allRecipes,
      selectionDetails,
      optionsHtml
    }));
  }

  function normaliseRecipeOptions() {
    const library=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const recipes=typeof library?.recipeProducts==='function' ? library.recipeProducts() : [];
    if (!Array.isArray(recipes) || !recipes.length) return;
    const signature=recipes.map((item) => `${item.id}:${item.title}`).join('|');
    document.querySelectorAll('#routineItems [data-field="productSelection"]').forEach((select) => {
      const selected=String(select.value || '');
      let group=select.querySelector('optgroup[label="Baseline Skincare Recipes"],optgroup[label="My Recipes"]');
      if (!group) {
        group=document.createElement('optgroup');
        const firstGroup=select.querySelector('optgroup');
        if (firstGroup) select.insertBefore(group,firstGroup); else select.appendChild(group);
      }
      group.label='Baseline Skincare Recipes';
      if (group.dataset.recipeSignature!==signature) {
        group.dataset.recipeSignature=signature;
        group.replaceChildren(...recipes.map((item) => {
          const option=document.createElement('option');
          option.value=`recipe:${item.id}`;option.textContent=item.title;
          return option;
        }));
      }
      if (Array.from(select.options).some((option) => option.value===selected)) select.value=selected;
    });
  }

  function bindRecipeOptionNormaliser() {
    normaliseRecipeOptions();
    document.addEventListener('baseline:routine-rendered',normaliseRecipeOptions);
    const items=document.getElementById('routineItems');
    if (items && typeof MutationObserver!=='undefined') {
      recipeOptionObserver?.disconnect();
      recipeOptionObserver=new MutationObserver(normaliseRecipeOptions);
      recipeOptionObserver.observe(items,{ childList:true,subtree:true });
    }
  }

  function installBootShield() {
    document.documentElement.setAttribute('data-skincare-routine-booting','true');
    if (document.getElementById('skincareRoutineBootShieldStyle')) return;
    const style=document.createElement('style');style.id='skincareRoutineBootShieldStyle';
    style.textContent=`
      html[data-skincare-routine-booting="true"] #routine{visibility:hidden!important}
      #routine :is(.routine-item,.routine-log-item,.routine-summary-item,.routine-plan-group,.routine-log-group){transition:none!important;animation:none!important}
      #routineSummary .routine-summary-group[hidden],
      #routineSummary .routine-summary-item[hidden]{display:none!important}
    `;
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => document.documentElement.removeAttribute('data-skincare-routine-booting')));
  }

  function releaseBootShieldWhenStable() {
    return new Promise((resolve) => {
      const root=document.getElementById('routine');
      if (!root || typeof MutationObserver==='undefined') { releaseBootShield();resolve();return; }
      let quietTimer=0;let maxTimer=0;let finished=false;
      const done=() => {
        if (finished) return;finished=true;
        clearTimeout(quietTimer);clearTimeout(maxTimer);observer.disconnect();
        normaliseRecipeOptions();releaseBootShield();resolve();
      };
      const settle=() => { clearTimeout(quietTimer);quietTimer=global.setTimeout(done,180); };
      const observer=new MutationObserver(settle);
      observer.observe(root,{ childList:true,subtree:true });
      maxTimer=global.setTimeout(done,1400);
      settle();
    });
  }

  function load(src,marker) {
    const existing=document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded==='true') return Promise.resolve();
      return new Promise((resolve,reject) => { existing.addEventListener('load',resolve,{ once:true });existing.addEventListener('error',reject,{ once:true }); });
    }
    return new Promise((resolve,reject) => {
      const script=document.createElement('script');script.src=src;script.async=false;script.setAttribute(marker,'true');
      script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });
      script.addEventListener('error',reject,{ once:true });document.head.appendChild(script);
    });
  }

  function waitForBaseRoutine() {
    const started=Date.now();
    return new Promise((resolve,reject) => {
      const check=() => {
        if (global.BASELINE_SKINCARE_ROUTINE && global.BASELINE_SKINCARE_ROUTINE_MODEL) { resolve();return; }
        if (Date.now()-started>=MAX_WAIT_MS) { reject(new Error('Skincare base routine did not initialise.'));return; }
        global.setTimeout(check,25);
      };
      check();
    });
  }

  exposeAllBaselineRecipes();
  installBootShield();

  waitForBaseRoutine()
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260807_5','data-baseline-routine-system'))
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260807_10','data-skincare-routine-sitewide-v4'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_3','data-baseline-public-routine-groups'))
    .then(() => load('/sitewide/js/baseline-routine-authority-v7.js?v=BASELINE_ROUTINE_AUTHORITY_20260807_3','data-baseline-routine-authority-v7'))
    .then(() => load('/sitewide/js/baseline-routine-experience-v9.js?v=BASELINE_ROUTINE_EXPERIENCE_20260807_1','data-baseline-routine-experience-v9'))
    .then(() => load('/sitewide/js/baseline-routine-experience-v10.js?v=BASELINE_ROUTINE_EXPERIENCE_20260808_2','data-baseline-routine-experience-v10'))
    .then(() => global.BASELINE_RoutineExperienceV10Ready || Promise.resolve())
    .then(() => { bindRecipeOptionNormaliser();return releaseBootShieldWhenStable(); })
    .catch((error) => { releaseBootShield();try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {} });

  global.addEventListener('pagehide',() => recipeOptionObserver?.disconnect(),{ once:true });
})(typeof window!=='undefined'?window:globalThis);