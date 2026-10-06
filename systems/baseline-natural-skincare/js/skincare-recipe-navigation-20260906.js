/* Baseline Natural Skincare — canonical promoted recipe navigation 2026-09-06. */
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_RECIPE_NAV_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_NAV_20260906__=true;
  const document=global.document;
  const MAIN=[
    ['r6','anhydrous-massage-oil-blend','Anhydrous Massage Oil Blend','three-oil massage blend with variable castor glide.'],
    ['r7','restorative-hydration-layer','Restorative Hydration Layer','post-wash hydration layer before occlusive sealing.'],
    ['r8','calming-shave-gel','Calming Shave Gel','slippery elm, glycerin, guar gum and jojoba shaving gel.'],
    ['r12','comfort-barrier-balm','Comfort Barrier Balm','rich butter-and-oil balm that softens dry areas and helps reduce moisture loss.'],
    ['r2','anhydrous-oil-cleanser','Anhydrous Oil Cleanser','three-variant safflower-led oil cleanser.'],
    ['r1','nurturing-glow-butter','Nurturing Glow Butter','rich barrier-supporting butter.'],
    ['r3','protective-touch-balm','Protective Touch Balm','protective balm for dry skin.'],
    ['r10','microcurrent-glide-gel','Microcurrent Glide Gel','water-based conductive gel with sustained glide for microcurrent treatment.'],
    ['r9','tooth-polishing-powder','Tooth Polishing Powder','kaolin, sage and peppermint powder for occasional surface-stain removal.']
  ];
  function list(items,descriptions){
    const ul=document.createElement('ul');
    items.forEach(([id,slug,title,description,nativeNavigation])=>{
      const li=document.createElement('li');
      const a=document.createElement('a');
      a.href='/baseline-natural-skincare/recipes/'+slug;
      if(!nativeNavigation){
        a.className='recipe-open';
        a.dataset.recipeId=id;
      }
      a.textContent=descriptions?title+' — '+description:title;
      li.appendChild(a);ul.appendChild(li);
    });
    return ul;
  }
  function h4(text){ const el=document.createElement('h4');el.textContent=text;return el; }
  function rebuild(){
    const landing=document.getElementById('recipes-landing');
    if(landing){
      let title=landing.querySelector(':scope > h2');
      if(!title){ title=document.createElement('h2');title.textContent='Recipes'; }
      let intro=landing.querySelector(':scope > p');
      if(!intro){ intro=document.createElement('p'); }
      intro.textContent='Select a recipe to view it.';
      landing.replaceChildren(title,intro,h4('Recipes'),list(MAIN,true));
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',rebuild,{once:true}); else rebuild();
})(typeof window!=='undefined'?window:globalThis);
