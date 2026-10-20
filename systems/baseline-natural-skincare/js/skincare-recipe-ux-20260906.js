/* Baseline Personal Care — static-first recipe interaction binding 2026-10-02. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_RECIPE_UX_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_UX_20260906__ = true;

  const document = global.document;
  function resolveId(raw){
    const value=String(raw || '').replace(/^#/,'').trim();
    if (/^r\d+$/i.test(value)) return value.toLowerCase();
    return null;
  }
  function recipeById(id){ return document.getElementById(resolveId(id) || ''); }

  function collapseAdjustments(recipe){
    if(!recipe) return;
    recipe.classList.remove('recipe-options-open');
    recipe.classList.remove('recipe-adjustments-open');
    const panel=recipe.querySelector(':scope > .recipe-adjustments-panel');
    const button=recipe.querySelector(':scope > .recipe-viewbar > .recipe-adjustments-toggle, :scope > .recipe-adjustments-row .recipe-adjustments-toggle');
    if(panel) panel.hidden=true;
    if(button) button.setAttribute('aria-expanded','false');
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

  function bindRecipeOpenAdjustmentReset(){
    if(global.__BASELINE_SKINCARE_RECIPE_ADJUSTMENT_RESET_20261003__) return;
    global.__BASELINE_SKINCARE_RECIPE_ADJUSTMENT_RESET_20261003__=true;
    document.addEventListener('click', event=>{
      const link=event.target && event.target.closest ? event.target.closest('#recipes a.recipe-open[data-recipe-id]') : null;
      if(!link) return;
      collapseAdjustments(recipeById(link.dataset.recipeId));
    }, true);
  }

  function startRecipeUx(){
    bindLipBalmFormula(recipeById('r12'));
    bindRecipeOpenAdjustmentReset();
  }

  startRecipeUx();
})(typeof window!=='undefined'?window:globalThis);
