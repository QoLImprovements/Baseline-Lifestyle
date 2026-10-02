/* Baseline Natural Skincare — static-first recipe interaction binding 2026-10-02. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_RECIPE_UX_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_UX_20260906__ = true;

  const document = global.document;
  const ROUTE_BASE = '/baseline-natural-skincare/recipes/';
  const PROMOTIONS = Object.freeze({
    r8: { slug:'calming-shave-gel' },
    r9: { slug:'tooth-polishing-powder' },
    r10:{ slug:'microcurrent-glide-gel' }
  });
  const REPLACED_IDS = Object.freeze({ r4:'r10', r5:'r8' });
  const OLD_SLUGS = Object.freeze({
    'hydrating-conductive-mist':'r10',
    'testing-microcurrent-conductive-gel':'r10',
    'testing-shaving-gel':'r8',
    'testing-natural-tooth-brightening-powder':'r9'
  });

  function recipeHref(slug){ return ROUTE_BASE + slug; }
  function resolveId(raw){
    const value=String(raw || '').replace(/^#/,'').trim();
    if (/^r\d+$/i.test(value)) return value.toLowerCase();
    return null;
  }
  function recipeById(id){ return document.getElementById(resolveId(id) || ''); }

  function visibleGroups(recipe,view){
    if(!recipe) return;
    const next=['standard','details','guidance','show-all'].includes(view)?view:'standard';
    recipe.dataset.recipeView=next;
    recipe.querySelectorAll(':scope > .recipe-subtabs .recipe-subtab').forEach(button=>{
      const selected=button.dataset.recipeSubtab===next;
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    recipe.querySelectorAll('[data-recipe-view-group]').forEach(el=>{
      const group=String(el.dataset.recipeViewGroup || '');
      const show=next==='show-all' || group===next;
      el.classList.toggle('recipe-view-hidden',!show);
    });
    const details=recipe.querySelector(':scope > .recipe-details-intro');
    if(details){
      const showDetails=next==='details' || next==='show-all';
      details.classList.toggle('recipe-view-hidden',!showDetails);
      details.hidden=!showDetails;
    }
  }

  function resetRecipeView(recipe){
    if(!recipe) return;
    try{ recipe.__baselineSetRecipeView?.('standard'); }catch(_error){}
    visibleGroups(recipe,'standard');
  }

  function bindRecipeSubtabs(){
    document.querySelectorAll('#recipes .recipe-page').forEach(recipe=>{
      recipe.querySelectorAll(':scope > .recipe-subtabs .recipe-subtab').forEach(button=>{
        if(button.dataset.recipeUxBound==='1') return;
        button.dataset.recipeUxBound='1';
        button.addEventListener('click',()=>{
          visibleGroups(recipe,String(button.dataset.recipeSubtab || 'standard'));
        });
      });
    });
  }

  function bindLipBalmFormula(recipe){
    if(!recipe || recipe.id!=='r12' || recipe.dataset.lipBalmFormulaBound==='1') return;
    recipe.dataset.lipBalmFormulaBound='1';

    const defaults=Object.freeze({
      cocoa:20,mango:15,kokum:10,apricot:25.5,avocado:15,raspberry:11,candelilla:3,vitaminE:0.5
    });

    function fmt(value){
      const n=Number(value);
      if(!Number.isFinite(n)) return '0';
      return Math.abs(n-Math.round(n))<0.001 ? String(Math.round(n)) : n.toFixed(1);
    }

    function setAmount(key,value){
      const el=recipe.querySelector('[data-formula-key="'+key+'"]');
      if(!el) return;
      const text=fmt(value)+' g';
      el.textContent=text;
      el.dataset.baseDisplay=text;
      el.dataset.baseMin=String(value);
      el.dataset.baseMax=String(value);
      el.dataset.baseUnit='g';
    }

    function refreshScaledDisplay(){
      try{ recipe.__baselineApplyScaling?.(); }catch(_error){}
      try{ recipe.__baselineUpdatePrintSummary?.(); }catch(_error){}
      try{ recipe.__baselineRefreshMethodAmounts?.(); }catch(_error){}
    }

    function update(){
      const butter=recipe.querySelector('#r12ButterCharacter');
      const structure=recipe.querySelector('#r12Structure');
      if(!butter || !structure) return;

      const kokum=Number(butter.value);
      const mango=25-kokum;
      const candelilla=Number(structure.value);
      const apricot=28.5-candelilla;

      setAmount('cocoa',defaults.cocoa);
      setAmount('mango',mango);
      setAmount('kokum',kokum);
      setAmount('apricot',apricot);
      setAmount('avocado',defaults.avocado);
      setAmount('raspberry',defaults.raspberry);
      setAmount('candelilla',candelilla);
      setAmount('vitamin-e',defaults.vitaminE);

      const butterReadout=recipe.querySelector('#r12ButterReadout');
      if(butterReadout) butterReadout.textContent=fmt(mango)+'% mango • '+fmt(kokum)+'% kokum';
      const structureReadout=recipe.querySelector('#r12StructureReadout');
      if(structureReadout) structureReadout.textContent=fmt(candelilla)+'% candelilla • '+fmt(apricot)+'% apricot kernel oil';

      const overallFeel=recipe.querySelector('#r12OverallExplain');
      if(overallFeel){
        if(kokum <= 7.5 && candelilla <= 2.5){
          overallFeel.textContent='Creamier, softer-melting balm with a richer glide and lighter structural hold.';
        }else if(kokum >= 12.5 && candelilla >= 3.5){
          overallFeel.textContent='Firmest, most durable setting with a drier pickup and the strongest structural hold.';
        }else if(kokum >= 12.5){
          overallFeel.textContent='Firmer butter-led feel with a drier pickup while keeping the wax level moderate.';
        }else if(candelilla >= 3.5){
          overallFeel.textContent='More durable, wax-supported set while keeping the butter balance relatively creamy.';
        }else{
          overallFeel.textContent='Balanced rich balm with a smooth set, controlled glide and durable protective finish.';
        }
      }
      refreshScaledDisplay();
    }

    const butter=recipe.querySelector('#r12ButterCharacter');
    const structure=recipe.querySelector('#r12Structure');
    const controller=recipe.querySelector('.glide-controller');
    if(controller) controller.__baselineSliderSync=update;
    if(butter){ butter.addEventListener('input',update); butter.addEventListener('change',update); }
    if(structure){ structure.addEventListener('input',update); structure.addEventListener('change',update); }
    update();
    try{ global.BASELINE_decorateRecipeSliderSaves?.(); }catch(_error){}
  }

  function canonicaliseOldRecipePath(){
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const match=path.match(/^\/baseline-natural-skincare\/recipes\/([^/]+)$/i);
    if(!match) return;
    const old=String(match[1] || '').toLowerCase();
    const id=OLD_SLUGS[old];
    const meta=id && PROMOTIONS[id];
    if(!meta) return;
    try{ global.history.replaceState(global.history.state,'',recipeHref(meta.slug)+String(global.location.search || '')); }catch(_error){}
  }

  function openPromotedRecipeForPath(){
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const match=path.match(/^\/baseline-natural-skincare\/recipes\/([^/]+)$/i);
    if(!match) return;
    const slug=String(match[1] || '').toLowerCase();
    const hit=Object.entries(PROMOTIONS).find(([,meta])=>meta.slug===slug);
    const id=hit ? hit[0] : OLD_SLUGS[slug];
    if(!id) return;
    try{ global.BASELINE_openRecipe?.(id,{ silentHistory:true }); }catch(_error){}
    resetRecipeView(recipeById(id));
  }

  function wrapRecipeOpen(){
    if(global.__BASELINE_SKINCARE_RECIPE_OPEN_RESET_20260906__) return;
    global.__BASELINE_SKINCARE_RECIPE_OPEN_RESET_20260906__=true;
    const original=typeof global.BASELINE_openRecipe==='function'?global.BASELINE_openRecipe:null;
    if(!original) return;
    global.BASELINE_openRecipe=function(id,opts){
      let next=String(id || '');
      if(REPLACED_IDS[next]) next=REPLACED_IDS[next];
      const result=original.call(this,next,opts || {});
      resetRecipeView(recipeById(next));
      return result;
    };
  }

  function startRecipeUx(){
    canonicaliseOldRecipePath();
    bindRecipeSubtabs();
    bindLipBalmFormula(recipeById('r12'));
    wrapRecipeOpen();
    openPromotedRecipeForPath();
  }

  startRecipeUx();
})(typeof window!=='undefined'?window:globalThis);
