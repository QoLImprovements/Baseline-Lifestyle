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
    ['r2','anhydrous-oil-cleanser','Anhydrous Oil Cleanser','three-variant safflower-led oil cleanser.'],
    ['r1','nurturing-glow-butter','Nurturing Glow Butter','rich barrier-supporting butter.'],
    ['r3','protective-touch-balm','Protective Touch Balm','protective balm for dry skin.'],
    ['r10','microcurrent-glide-gel','Microcurrent Glide Gel','water-based conductive gel with sustained glide for microcurrent treatment.'],
    ['r9','tooth-polishing-powder','Tooth Polishing Powder','kaolin, sage and peppermint powder for occasional surface-stain removal.']
  ];
  const TESTING=[
    ['r11','testing-soap-free-powdered-hair-wash','Soap-Free Powdered Hair Wash','colloidal oatmeal, marshmallow root, inulin and sunflower lecithin powder wash.',false],
    ['r12','testing-lip-balm','Lip/ balm','adjustable butter character and structure with a balanced 100 g default formula.',false]
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
  function reconcileStaticCatalogue(){
    const landing=document.getElementById('recipes-landing');
    if(!landing) return;
    [...MAIN,...TESTING].forEach(([id,slug,title,description])=>{
      const href='/baseline-natural-skincare/recipes/'+slug;
      const anchor=landing.querySelector('a[href="'+href+'"]');
      if(!anchor) return;
      anchor.classList.add('recipe-open');
      anchor.dataset.recipeId=id;
      anchor.removeAttribute('data-external-recipe-id');
      anchor.textContent=title+' — '+description;
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',reconcileStaticCatalogue,{once:true}); else reconcileStaticCatalogue();
})(typeof window!=='undefined'?window:globalThis);
