/* Baseline Personal Care — canonical My Routine bootstrap v35.

   OWNERSHIP / BOOT CONTRACT
   -------------------------
   1. Resolve the requested clean My Routine page synchronously.
   2. Select the outer My Routine section before asynchronous routine/account work.
   3. Repair only the small compatibility surface expected by the base workspace.
   4. Load the remaining My Routine owners strictly in dependency order.

   No loading screen, polling loop, route-after-render correction or competing
   Summary/Plan renderer belongs in this file.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_BOOTSTRAP_V35__) return;
  global.__BASELINE_SKINCARE_ROUTINE_BOOTSTRAP_V35__=true;

  const document=global.document;
  const ROUTE_BASE='/baseline-natural-skincare/my-routine';
  const VIEWS=['log','summary','plan','public'];
  let recipeObserver=null;
  let started=false;

  function requestedRoutineView() {
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const clean=path.match(/^\/baseline-natural-skincare\/my-routine\/(log|summary|plan|public)$/i);
    if (clean) return String(clean[1]).toLowerCase();

    try {
      const url=new URL(global.location.href);
      const legacy=String(url.searchParams.get('routine-view') || '');
      if (VIEWS.includes(legacy)) return legacy;
    } catch (_error) {}

    /* Bare/legacy My Routine entry points resolve deterministically to Log.
       No browser-stored view state participates in first paint. */
    if (/^\/baseline-natural-skincare\/my-routine$/i.test(path)) return 'log';
    if (String(global.location?.hash || '').toLowerCase()==='#tab=routine') return 'log';
    return '';
  }
  function selectOuterRoutine(view) {
    document.documentElement.setAttribute('data-initial-skincare-tab','routine');
    document.documentElement.setAttribute('data-initial-routine-view',view);
    try { global.BASELINE_selectTab?.('routine',{ silentHistory:true }); } catch (_error) {}

    document.querySelectorAll('.tab[data-target]').forEach((button)=>{
      const selected=button.dataset.target==='routine';
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    const routine=document.getElementById('routine');
    if (routine) { routine.hidden=false;routine.classList.add('active'); }
    document.querySelectorAll('main.wrap>.section').forEach((section)=>{
      if (section!==routine) section.classList.remove('active');
    });
  }
  function canonicaliseRoute(view) {
    try {
      const url=new URL(global.location.href);
      const desired=`${ROUTE_BASE}/${view}`;
      const legacy=['routine-view','routine-plan','routine-filter','routine-date'].some((key)=>url.searchParams.has(key)) || Boolean(url.hash);
      if (url.pathname!==desired || legacy) {
        url.pathname=desired;
        ['routine-view','routine-plan','routine-filter','routine-date'].forEach((key)=>url.searchParams.delete(key));
        url.hash='';
        global.history.replaceState(global.history.state,'',url.pathname+url.search);
      }
    } catch (_error) {}
  }
  function bootstrapCleanRoute() {
    const view=requestedRoutineView();
    if (!view) return;
    selectOuterRoutine(view);
    canonicaliseRoute(view);
  }

  /* Parser-loaded immediately before skincare-routine.js. This executes in the
     same parser task, before DOMContentLoaded and before routine_state.php waits. */
  bootstrapCleanRoute();

  function ensureRoutineModelContract() {
    const base=global.BASELINE_SKINCARE_ROUTINE_MODEL;
    if (!base || base.__baselineRoutineContractV3) return;

    const actions=Array.from(base.ACTIONS || []);
    const groups=Array.from(base.GROUPS || []);
    const shavingIds=Object.freeze(['shave','electric-shave','beard-trim','nose-ear-hair-trim']);
    const shavingMethods=Object.freeze(Array.from(base.SHAVING_METHODS || []));
    const actionById=(value)=>base.ACTION_BY_ID?.get?.(String(value || '')) || actions.find((item)=>String(item?.id || '')===String(value || '')) || null;
    const actionGroups=Object.freeze(groups.map((entry)=>{
      const label=typeof entry==='string'?entry:String(entry?.label || entry?.name || '');
      return Object.freeze({ label,ids:Object.freeze(actions.filter((action)=>String(action?.group || '')===label).map((action)=>String(action.id))) });
    }).filter((entry)=>entry.label && entry.ids.length));
    const cleanText=(value,maximum=1200)=>String(value==null?'':value).trim().slice(0,Math.max(0,Number(maximum)||0));
    const localDate=(value)=>{
      if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
      const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
      if (match) return new Date(Number(match[1]),Number(match[2])-1,Number(match[3]));
      const parsed=new Date(value || Date.now());
      return Number.isNaN(parsed.getTime())?new Date():new Date(parsed.getFullYear(),parsed.getMonth(),parsed.getDate());
    };
    const todayIso=()=>base.isoDate(new Date());
    const isFutureDate=(value)=>base.isoDate(value)>todayIso();
    const clampLogDate=(value)=>{
      const next=base.isoDate(value || new Date());
      return next>todayIso()?todayIso():next;
    };
    const configureLogDateInput=(input,value)=>{
      const next=clampLogDate(value || input?.value || todayIso());
      if (input) { input.max=todayIso();input.value=next; }
      return next;
    };
    const normaliseTime=(value)=>(base.TIMES || []).some((entry)=>entry.value===value)?value:'anytime';
    const normaliseShavingMethod=(value)=>shavingMethods.some((entry)=>entry.value===value)?value:'wet-cartridge';
    const escapeHtml=(value)=>String(value==null?'':value).replace(/[&<>"']/g,(character)=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[character]));
    const createItem=(actionId)=>{
      const definition=actionById(actionId) || actionById('custom') || actions[0];
      const id=global.crypto?.randomUUID?`routine-${global.crypto.randomUUID()}`:`routine-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
      return base.normaliseItem({ id,actionId:definition?.id || 'custom',title:definition?.title || 'Self-Care Action' });
    };

    global.BASELINE_SKINCARE_ROUTINE_MODEL=Object.freeze(Object.assign({},base,{
      __baselineRoutineContractV3:true,
      TIME_OPTIONS:base.TIMES || [],
      FREQUENCY_OPTIONS:base.FREQUENCIES || [],
      SHAVING_ACTION_IDS:shavingIds,
      SHAVING_METHOD_OPTIONS:shavingMethods,
      ACTION_GROUPS:actionGroups,
      actionById,cleanText,escapeHtml,localDate,todayIso,isFutureDate,clampLogDate,
      configureLogDateInput,normaliseTime,normaliseShavingMethod,createItem
    }));
  }
  ensureRoutineModelContract();

  function exposeAllBaselineRecipes() {
    const base=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    if (!base || base.__baselineAllRecipesV2) return;
    const escape=(value)=>String(value==null?'':value).replace(/[&<>"']/g,(character)=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[character]));
    function allRecipes() {
      const seen=new Set();
      return Array.from(document.querySelectorAll('#recipes .recipe-page,#recipes [data-recipe-slug]')).map((card,index)=>{
        const title=String(card.querySelector('h3,h2')?.textContent || '').trim();
        const id=String(card.id || card.dataset.recipeSlug || `recipe-${index+1}`).trim();
        if (!id || !title || seen.has(id)) return null;
        seen.add(id);return { id,title };
      }).filter(Boolean).sort((a,b)=>a.title.localeCompare(b.title,'en-GB',{ sensitivity:'base' }));
    }
    function selectionDetails(value,actionId) {
      const selected=String(value || '');
      if (selected.startsWith('recipe:')) {
        const recipe=allRecipes().find((item)=>item.id===selected.slice(7));
        return recipe?{ source:'recipe',name:recipe.title }:{ source:'recipe',name:'' };
      }
      return base.selectionDetails(value,actionId);
    }
    function optionsHtml(actionId,selected='') {
      const recipes=allRecipes();
      const products=base.relevantProducts(actionId);
      const recipeOptions=recipes.map((item)=>`<option value="recipe:${escape(item.id)}"${selected===`recipe:${item.id}`?' selected':''}>${escape(item.title)}</option>`).join('');
      const productOptions=products.map((item)=>`<option value="product:${escape(item.id)}"${selected===`product:${item.id}`?' selected':''}>${escape(item.brand)} — ${escape(item.name)}</option>`).join('');
      return `<option value="">No product selected</option><optgroup label="Baseline Skincare Recipes">${recipeOptions}</optgroup><optgroup label="UK Product Library">${productOptions}</optgroup><optgroup label="Other"><option value="custom"${selected==='custom'?' selected':''}>Custom product…</option></optgroup>`;
    }
    global.BASELINE_SKINCARE_PRODUCT_LIBRARY=Object.freeze(Object.assign({},base,{
      __baselineAllRecipesV2:true,recipeProducts:allRecipes,selectionDetails,optionsHtml
    }));
  }

  function preserveCompletedLogDates() {
    const base=global.BASELINE_SKINCARE_ROUTINE_MODEL;
    if (!base || base.__baselineKeepCompletedDateV2) return;
    const originalDueStatus=base.dueStatus?.bind(base);
    if (typeof originalDueStatus!=='function') return;
    global.BASELINE_SKINCARE_ROUTINE_MODEL=Object.freeze(Object.assign({},base,{
      __baselineKeepCompletedDateV2:true,
      dueStatus(itemValue,value,logs) {
        const status=originalDueStatus(itemValue,value,logs);
        try {
          const item=base.normaliseItem(itemValue);
          const date=base.isoDate(value);
          const entries=base.normaliseLogs(logs)?.[date] || {};
          if (entries[item.id]?.completed) return Object.assign({},status,{ due:true,detail:'Completed on this date' });
        } catch (_error) {}
        return status;
      }
    }));
  }

  function normaliseRecipeOptions() {
    const library=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const recipes=typeof library?.recipeProducts==='function'?library.recipeProducts():[];
    if (!Array.isArray(recipes) || !recipes.length) return;
    const signature=recipes.map((item)=>`${item.id}:${item.title}`).join('|');
    document.querySelectorAll('#routineItems [data-field="productSelection"]').forEach((select)=>{
      const selected=String(select.value || '');
      let group=select.querySelector('optgroup[label="Baseline Skincare Recipes"],optgroup[label="My Recipes"]');
      if (!group) {
        group=document.createElement('optgroup');
        const first=select.querySelector('optgroup');
        if (first) select.insertBefore(group,first);else select.appendChild(group);
      }
      group.label='Baseline Skincare Recipes';
      if (group.dataset.recipeSignature!==signature) {
        group.dataset.recipeSignature=signature;
        group.replaceChildren(...recipes.map((item)=>{
          const option=document.createElement('option');option.value=`recipe:${item.id}`;option.textContent=item.title;return option;
        }));
      }
      if (Array.from(select.options).some((option)=>option.value===selected)) select.value=selected;
    });
  }
  function bindRecipeOptionNormaliser() {
    normaliseRecipeOptions();
    document.addEventListener('baseline:routine-rendered',normaliseRecipeOptions);
    const items=document.getElementById('routineItems');
    if (items && typeof MutationObserver!=='undefined') {
      recipeObserver?.disconnect();
      recipeObserver=new MutationObserver(()=>global.requestAnimationFrame(normaliseRecipeOptions));
      recipeObserver.observe(items,{ childList:true,subtree:true });
    }
  }

  function start() {
    if (started) return;started=true;
    exposeAllBaselineRecipes();
    preserveCompletedLogDates();
    if (!global.BASELINE_SKINCARE_ROUTINE || !global.BASELINE_SKINCARE_ROUTINE_MODEL) {
      try { console.error('Skincare My Routine prerequisites were not available at DOM readiness.'); } catch (_error) {}
      return;
    }
    bindRecipeOptionNormaliser();
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{ once:true });
  else start();
  global.addEventListener('pagehide',()=>recipeObserver?.disconnect(),{ once:true });
})(typeof window!=='undefined'?window:globalThis);
