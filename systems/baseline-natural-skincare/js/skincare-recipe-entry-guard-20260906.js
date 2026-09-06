/* Baseline Natural Skincare — recipe entry/reset guard 2026-09-06. */
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_RECIPE_ENTRY_GUARD_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_ENTRY_GUARD_20260906__=true;
  const document=global.document;

  function applyView(recipe,view){
    if(!recipe) return;
    const next=['standard','details','guidance','show-all'].includes(view)?view:'standard';
    try{ recipe.__baselineSetRecipeView?.(next); }catch(_e){}
    recipe.dataset.recipeView=next;
    recipe.querySelectorAll(':scope > .recipe-subtabs .recipe-subtab').forEach(button=>{
      const selected=button.dataset.recipeSubtab===next;
      button.setAttribute('aria-selected',selected?'true':'false');
      if(button.dataset.recipeSubtab==='standard') button.textContent='Recipe';
    });
    recipe.querySelectorAll('[data-recipe-view-group]').forEach(el=>{
      const group=String(el.dataset.recipeViewGroup || '');
      const show=next==='show-all' || group===next;
      el.classList.toggle('recipe-view-hidden',!show);
    });
    const details=recipe.querySelector(':scope > .recipe-details-intro');
    if(details) details.classList.toggle('recipe-view-hidden',!(next==='details' || next==='show-all'));
  }

  function reset(recipe){ applyView(recipe,'standard'); }
  function currentOpenRecipe(){
    const section=document.getElementById('recipes');
    if(!section) return null;
    return Array.from(section.querySelectorAll('.recipe-page')).find(recipe=>{
      if(!recipe.isConnected) return false;
      const style=global.getComputedStyle?global.getComputedStyle(recipe):null;
      return (recipe.classList.contains('is-open') || section.classList.contains('recipe-open-mode') || section.classList.contains('recipe-detail-open')) && (!style || style.display!=='none');
    }) || null;
  }
  function resetCurrent(){ const recipe=currentOpenRecipe(); if(recipe) reset(recipe); }

  function initialise(){
    document.querySelectorAll('#recipes .recipe-page').forEach(recipe=>applyView(recipe,recipe.dataset.recipeView || 'standard'));
    global.setTimeout(resetCurrent,0);
  }

  document.addEventListener('click',event=>{
    const link=event.target?.closest?.('.recipe-open');
    const heading=event.target?.closest?.('.recipe-page > h3');
    const recipe=link ? document.getElementById(String(link.dataset.recipeId || '')) : heading?.closest?.('.recipe-page');
    if(recipe) global.setTimeout(()=>reset(recipe),0);
  },false);
  global.addEventListener('popstate',()=>global.setTimeout(resetCurrent,0));
  global.addEventListener('hashchange',()=>global.setTimeout(resetCurrent,0));

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initialise,{once:true});
  else initialise();
  global.setTimeout(initialise,180);
  global.setTimeout(initialise,700);
})(typeof window!=='undefined'?window:globalThis);
