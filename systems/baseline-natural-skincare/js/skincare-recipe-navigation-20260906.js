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
    ['r10','microcurrent-glide-gel','Microcurrent Glide Gel','Water-based conductive gel with sustained glide for microcurrent treatment.'],
    ['r9','tooth-polishing-powder','Tooth Polishing Powder','Kaolin, sage and peppermint powder for occasional surface-stain removal.']
  ];
  const TESTING=[['r11','testing-soap-free-powdered-hair-wash','Soap-Free Powdered Hair Wash','colloidal oatmeal, marshmallow root, inulin and sunflower lecithin powder wash.']];
  function list(items,descriptions){
    const ul=document.createElement('ul');
    items.forEach(([id,slug,title,description])=>{
      const li=document.createElement('li');
      const a=document.createElement('a');
      a.className='recipe-open';a.dataset.recipeId=id;a.href='/baseline-natural-skincare/recipes/'+slug;
      a.textContent=descriptions?title+' — '+description:title;
      li.appendChild(a);ul.appendChild(li);
    });
    return ul;
  }
  function h4(text){ const el=document.createElement('h4');el.textContent=text;return el; }
  function rebuild(){
    const side=document.getElementById('side-nav');
    if(side) side.replaceChildren(h4('Recipes'),list(MAIN,false),h4('Testing'),list(TESTING,false));
    const landing=document.getElementById('recipes-landing');
    if(landing){
      let title=landing.querySelector(':scope > h2');
      if(!title){ title=document.createElement('h2');title.textContent='Recipes'; }
      let intro=landing.querySelector(':scope > p');
      if(!intro){ intro=document.createElement('p');intro.textContent='Select a recipe to view it. Each recipe opens alone with a side navigation.'; }
      landing.replaceChildren(title,intro,h4('Recipes'),list(MAIN,true),h4('Testing'),list(TESTING,true));
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',rebuild,{once:true}); else rebuild();
  global.setTimeout(rebuild,220);
  global.setTimeout(rebuild,760);
})(typeof window!=='undefined'?window:globalThis);
