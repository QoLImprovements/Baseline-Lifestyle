/* Baseline Natural Skincare — final recipe copy and interaction alignment 2026-09-06. */
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_RECIPE_FINALISE_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_FINALISE_20260906__=true;
  var document=global.document;

  var OVERVIEW={
    r10:'Microcurrent Glide Gel — water-based conductive gel with sustained glide for microcurrent treatment.',
    r9:'Tooth Polishing Powder — kaolin, sage and peppermint powder for occasional surface-stain removal.'
  };
  var DETAILS={
    r10:{
      'Formula profile':'Water-based gel • leave on during device treatment, then rinse or wipe away • vegan • 40 g batch • unpreserved / freshly prepared • thick gel • wet, high-glide finish.',
      'How the formulation works':'Water provides the conductive medium; glycerin extends wet glide; dissolved Dead Sea salt provides electrolytes; guar gives the gel enough stationary structure to remain underneath the device.',
      'Design rationale':'Glycerin is kept high enough to extend working time without becoming the dominant phase. Guar provides stationary gel structure so the product remains underneath the device rather than running.',
      'Boundaries / what it is not designed to do':'Designed primarily as a conductive working medium for microcurrent treatment rather than as a standalone moisturiser. Because it is water-based and unpreserved, prepare it fresh or use an appropriate preservation system if storing it.'
    },
    r9:{
      'Boundaries / what it is not designed to do':'Designed for occasional surface-stain removal. It is not a bleaching or peroxide whitening treatment.'
    },
    r2:{
      'Variables and fixed elements':'Variable: Castor oil. Automatically compensates: Safflower oil. Remains fixed: Total batch size. Effect: Increasing castor increases cling and cleansing pull. Reactive has no adjustable lipid balance.'
    }
  };

  function normalise(value){return String(value||'').trim().toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,' ').trim();}
  function setDetail(recipeId,label,text){
    var recipe=document.getElementById(recipeId); if(!recipe) return;
    var target=normalise(label);
    Array.prototype.forEach.call(recipe.querySelectorAll(':scope > .recipe-details-intro .recipe-detail-block'),function(block){
      var heading=block.querySelector('h2,h3,h4,strong');
      if(!heading) return;
      var key=normalise(heading.textContent);
      var aliases=[target];
      if(target.indexOf('boundaries')===0) aliases.push('boundaries');
      if(target==='variables and fixed elements') aliases.push('variables fixed elements','variables and fixed elements');
      if(aliases.indexOf(key)===-1) return;
      heading.textContent=label;
      var p=block.querySelector('p'); if(p) p.textContent=text;
    });
  }
  function setOverview(){
    Object.keys(OVERVIEW).forEach(function(id){
      document.querySelectorAll('#recipes-landing a[data-recipe-id="'+id+'"],#recipes-landing a[data-recipe-id="'+(id==='r10'?'r4':id)+'"]').forEach(function(anchor){anchor.textContent=OVERVIEW[id];});
    });
  }
  function setTabs(){
    document.querySelectorAll('#recipes .recipe-subtab[data-recipe-subtab="standard"]').forEach(function(button){
      button.textContent='Recipe';
      button.setAttribute('aria-label','Recipe');
    });
  }
  function setSliderCopy(){
    var balanced=document.getElementById('r2BalancedCastor');
    var main=balanced && balanced.closest('.glide-control-main');
    var help=main && main.querySelector('.glide-variable-help');
    if(help) help.textContent='Adjust castor oil to change cleansing pull. Safflower automatically adjusts to keep the batch at 100%.';
    document.querySelectorAll('.slider-save-btn:not(.slider-default-btn)').forEach(function(button){button.textContent='Save as my setting';});
    document.querySelectorAll('.slider-default-btn').forEach(function(button){button.textContent='Reset to recipe default';});
    var breakdown=document.getElementById('r2BalancedBreakdown');
    var strong=breakdown && breakdown.querySelector('strong');
    if(strong) strong.textContent='Current blend:';
  }
  function apply(){
    setOverview();
    setTabs();
    Object.keys(DETAILS).forEach(function(recipeId){Object.keys(DETAILS[recipeId]).forEach(function(label){setDetail(recipeId,label,DETAILS[recipeId][label]);});});
    setSliderCopy();
  }
  function applySoon(){global.setTimeout(apply,0);global.setTimeout(apply,40);}

  document.addEventListener('click',function(event){
    if(event.target && event.target.closest && (event.target.closest('.recipe-open') || event.target.closest('.recipe-subtab') || event.target.closest('.variant-tab'))) applySoon();
  },false);
  document.addEventListener('input',function(event){if(event.target && event.target.classList && event.target.classList.contains('glide-slider')) applySoon();},false);
  document.addEventListener('change',function(event){if(event.target && event.target.classList && event.target.classList.contains('glide-slider')) applySoon();},false);
  global.addEventListener('popstate',applySoon);
  global.addEventListener('hashchange',applySoon);

  var originalOpen=typeof global.BASELINE_openRecipe==='function'?global.BASELINE_openRecipe:null;
  if(originalOpen && !global.__BASELINE_SKINCARE_FINAL_OPEN_WRAP_20260906__){
    global.__BASELINE_SKINCARE_FINAL_OPEN_WRAP_20260906__=true;
    global.BASELINE_openRecipe=function(){var result=originalOpen.apply(this,arguments);applySoon();return result;};
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
  global.setTimeout(apply,180);
  global.setTimeout(apply,760);
  global.setTimeout(apply,950);
})(typeof window!=='undefined'?window:globalThis);
