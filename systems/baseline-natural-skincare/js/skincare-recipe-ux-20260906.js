/* Baseline Natural Skincare — recipe collection + recipe view UX refresh 2026-09-06. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_RECIPE_UX_20260906__) return;
  global.__BASELINE_SKINCARE_RECIPE_UX_20260906__ = true;
  const document = global.document;
  const ROUTE_BASE = '/baseline-natural-skincare/recipes/';
  const PROMOTIONS = Object.freeze({
    r8: { slug:'calming-shave-gel', title:'Calming Shave Gel' },
    r9: { slug:'tooth-polishing-powder', title:'Tooth Polishing Powder' },
    r10:{ slug:'microcurrent-glide-gel', title:'Microcurrent Glide Gel' }
  });
  const REPLACED_IDS = Object.freeze({ r4:'r10', r5:'r8' });
  const OLD_SLUGS = Object.freeze({
    'hydrating-conductive-mist':'r10',
    'testing-microcurrent-conductive-gel':'r10',
    'testing-shaving-gel':'r8',
    'testing-natural-tooth-brightening-powder':'r9'
  });

  const MAIN_RECIPES = Object.freeze([
    ['r6','anhydrous-massage-oil-blend','Anhydrous Massage Oil Blend','three-oil massage blend with variable castor glide.'],
    ['r7','restorative-hydration-layer','Restorative Hydration Layer','post-wash hydration layer before occlusive sealing.'],
    ['r8','calming-shave-gel','Calming Shave Gel','slippery elm, glycerin, guar gum and jojoba shaving gel.'],
    ['r2','anhydrous-oil-cleanser','Anhydrous Oil Cleanser','three-variant safflower-led oil cleanser.'],
    ['r1','nurturing-glow-butter','Nurturing Glow Butter','rich barrier-supporting butter.'],
    ['r3','protective-touch-balm','Protective Touch Balm','protective balm for dry skin.'],
    ['r10','microcurrent-glide-gel','Microcurrent Glide Gel','glycerin, Dead Sea salt and guar conductive gel.'],
    ['r9','tooth-polishing-powder','Tooth Polishing Powder','kaolin, sage and peppermint surface-stain polishing powder.']
  ]);
  const TESTING_RECIPES = Object.freeze([
    ['r11','testing-soap-free-powdered-hair-wash','Soap-Free Powdered Hair Wash','colloidal oatmeal, marshmallow root, inulin and sunflower lecithin powder wash.']
  ]);

  const DETAIL_DATA = Object.freeze({
    r1:{
      purpose:'A rich emollient and occlusive finishing layer used after water-based hydration to reduce evaporation and soften dry-feeling skin.',
      profile:'Anhydrous • vegan • whipped butter-and-oil texture • rich finish • preservative-free because no water is present.',
      works:'Shea butter provides the main structure and occlusive body; cucumber seed, argan and jojoba improve spread and emollience; lavender is present as the aromatic phase.',
      rationale:'The formula keeps shea dominant so the product remains a butter, while the liquid oils reduce brittleness and improve melt and spread.',
      variables:'No recipe-specific slider. The ingredient balance is fixed; batch size and measurement display can still be scaled.',
      boundaries:'This is not a water-based moisturiser and does not add water to the skin by itself. It works best over a hydration step when water retention is the goal.'
    },
    r2:{
      purpose:'An oil cleanser designed to loosen oil-soluble residue while keeping the cleansing phase simple and lipid-led.',
      profile:'Anhydrous • preservative-free • three variants • wipe/rinse cleanser • adjustable cleansing pull and after-feel.',
      works:'Safflower is the main light cleansing oil; castor increases cling and cleansing pull; olive is used only in Enhanced Barrier to increase cushion and the richer after-feel.',
      rationale:'The variants separate two different decisions: how much cleansing pull is wanted and how rich the post-cleanse lipid feel should be.',
      variables:'Reactive is fixed at 100% safflower. Balanced changes castor against safflower. Enhanced Barrier changes olive against safflower while castor remains fixed at 10%.',
      boundaries:'Higher castor can feel grippier and higher olive can feel more occlusive. The richer settings are not automatically better for every skin type.'
    },
    r3:{
      purpose:'A targeted barrier balm for lips and dry areas where a more persistent protective film and controlled glide are useful.',
      profile:'100 g reference batch • anhydrous • vegan • preservative-free • adjustable oil balance and firmness.',
      works:'Jojoba supplies smoother glide, castor adds cling, shea gives soft body, carnauba raises firmness and heat resistance, calendula adds an infused emollient phase, and vitamin E supports oxidation resistance.',
      rationale:'Oil balance and physical firmness are controlled separately so cling can be changed without automatically changing the set of the balm.',
      variables:'Castor changes against jojoba. Carnauba changes against shea. Calendula and vitamin E remain fixed.',
      boundaries:'Designed mainly for targeted dry areas rather than as a water-based hydration layer. A firmer or clingier setting may be less comfortable for broad facial use.'
    },
    r6:{
      purpose:'An anhydrous massage medium that lets glide, traction and body be adjusted without introducing water or a conventional cream base.',
      profile:'100 ml reference blend • anhydrous • preservative-free • Olive Blend and Avocado Blend variants.',
      works:'The Olive Blend uses fixed jojoba for balanced slip while castor changes traction against olive. The Avocado Blend separates richness from lasting glide using two independent balances.',
      rationale:'Each slider changes one sensory property while a paired oil compensates so the blend remains at 100%.',
      variables:'Olive Blend: castor varies against olive while jojoba stays fixed at 15%. Avocado Blend: avocado varies against fractionated coconut; castor varies against watermelon.',
      boundaries:'This is primarily a body-massage formula. Richer settings increase persistence and drag and may be more than is wanted on congestion-prone facial skin.'
    },
    r7:{
      purpose:'A simple humectant hydration layer applied before an occlusive product to increase surface water and reduce a depleted post-wash feel.',
      profile:'Water-based • two-component formula • unpreserved • adjustable water-to-glycerin ratio.',
      works:'Water supplies the aqueous phase; glycerin binds water and increases humectant persistence at the skin surface.',
      rationale:'Keeping the formula to water and glycerin makes the hydration variable explicit and avoids adding unrelated actives or emulsifiers.',
      variables:'Water varies from 70–90%; glycerin automatically compensates from 30–10% so the formula stays at 100%.',
      boundaries:'Because it is water-based and unpreserved, make small fresh batches or use an appropriate preservation system. It is a hydration layer, not an occlusive seal.'
    },
    r8:{
      purpose:'A shaving gel designed to provide wet glide, mucilage cushion and a small emollient phase so the blade moves with less drag.',
      profile:'Water-based • rinse-off • slippery-elm/guar gel • small jojoba phase • unpreserved unless a preservation system is added.',
      works:'Slippery elm supplies mucilage and cushioning; glycerin adds glide and water retention; guar builds gel structure; jojoba adds a light lubricating emollient layer; water hydrates the gums.',
      rationale:'The formula uses slippery elm for the main shave slip, then adds only enough guar to reach the preferred structure rather than making thickness the dominant feature.',
      variables:'Guar gum is added gradually to the preferred gel consistency. Water, slippery elm, glycerin and jojoba form the fixed base of the recipe.',
      boundaries:'A water-based gel needs suitable preservation if it is stored rather than made for immediate use. It is intended as a rinse-off shaving medium.'
    },
    r9:{
      purpose:'A dry tooth-polishing powder for occasional removal of surface staining without peroxide, acids, charcoal or baking soda.',
      profile:'Dry powder • oral-care use • fixed 30 g batch • 80% kaolin, 15% sage and 5% peppermint.',
      works:'Superfine white kaolin provides the polishing phase; very finely powdered sage provides the supporting herb phase; peppermint provides mild flavour and freshness.',
      rationale:'The blend is deliberately short and dry, with the polishing function coming from superfine kaolin rather than a chemical bleaching agent.',
      variables:'No slider or variant. The formula is fixed at 24 g kaolin, 4.5 g sage and 1.5 g peppermint for a 30 g batch.',
      boundaries:'Designed for occasional surface-stain polishing, not bleaching or changing intrinsic tooth colour. Use only superfine oral/food-grade material and use gently at the stated frequency.'
    },
    r10:{
      purpose:'A water-based conductive working gel that keeps a microcurrent device moving smoothly while maintaining an electrolyte-containing wet contact layer.',
      profile:'40 g reference batch • water-based gel • 88.4% water • 10% glycerin • 1.5% guar • 0.1% Dead Sea salt.',
      works:'Water is the main conductive medium; glycerin extends wet glide and slows drying; Dead Sea salt supplies dissolved electrolytes; guar creates a stationary gel structure that stays under the device.',
      rationale:'The formula keeps the electrolyte level low while using glycerin and guar to solve the practical problems of drying and run-off during a device session.',
      variables:'No slider or variant. The conductive medium, humectant, electrolyte and thickener proportions are fixed in the reference formula.',
      boundaries:'Designed primarily as a conductive microcurrent medium rather than a standalone moisturiser. Because it is water-based, use an appropriate preservation system if it is stored rather than prepared for immediate use.'
    },
    r11:{
      purpose:'A very low-detergency powdered hair wash intended to test whether a hydrated powder-and-lecithin system can clean while retaining a small conditioning oil phase.',
      profile:'Dry storage blend • hydrated per wash • soap-free • sulfate-free • no conventional detergent surfactants • currently testing.',
      works:'Colloidal oatmeal forms the gentle powder base; marshmallow adds mucilage and slip; inulin supports lightweight conditioning; lecithin helps disperse oils; jojoba and argan provide the conditioning phase.',
      rationale:'The dry blend is stored without water and only hydrated for one wash, reducing the preservation burden while keeping the experimental cleansing system modular.',
      variables:'Water is adjusted per wash to reach a usable cream. The jojoba/argan blend is added as a small conditioning phase.',
      boundaries:'Rinsing and cleansing performance still need testing, especially with heavier oil or product buildup. Once hydrated, use immediately and discard any remainder.'
    }
  });

  const SLIDER_META = Object.freeze({
    r2BalancedCastor:{bubble:'castor',left:['4% castor','Lighter cleansing pull'],right:['18% castor','Stronger cleansing pull'],help:'Adjust castor oil to change cleansing pull. Safflower automatically compensates so the blend remains at 100%.'},
    r2EnhancedOlive:{bubble:'olive',left:['10% olive','Lighter cushion'],right:['30% olive','Richer occlusive layer'],help:'Adjust olive oil to change the after-feel. Safflower automatically compensates while castor remains fixed at 10%.'},
    r3BalanceCastor:{bubble:'castor',left:['5% castor','More jojoba glide'],right:['14% castor','More castor cling'],help:'Adjust castor to change cling. Jojoba automatically compensates so this oil balance stays fixed in total.'},
    r3FirmnessWax:{bubble:'carnauba',left:['5% carnauba','Softer melt'],right:['11% carnauba','Firmer set'],help:'Adjust carnauba to change firmness. Shea automatically compensates so the structural phase stays balanced.'},
    r6Glide:{bubble:'castor',left:['0% castor','Freer slip'],right:['15% castor','Richer drag'],help:'Adjust castor to change traction. Olive automatically compensates while jojoba remains fixed at 15%.'},
    r6AvocadoRichness:{bubble:'avocado',left:['50% avocado','Lighter body'],right:['70% avocado','Richer body'],help:'Adjust avocado to change richness. Fractionated coconut automatically compensates.'},
    r6AvocadoCastor:{bubble:'castor',left:['2% castor','Quicker slip'],right:['10% castor','Longer glide'],help:'Adjust castor to change lasting glide. Watermelon seed oil automatically compensates.'},
    r7Hydration:{bubble:'water',left:['70% water','Higher glycerin'],right:['90% water','Lighter hydration layer'],help:'Adjust the water phase. Glycerin automatically compensates so the formula remains at 100%.'}
  });

  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  }
  function recipeHref(slug){ return ROUTE_BASE + slug; }
  function resolveId(raw){
    const value=String(raw || '').replace(/^#/,'').trim();
    if (/^r\d+$/i.test(value)) return value.toLowerCase();
    return null;
  }
  function recipeById(id){ return document.getElementById(resolveId(id) || ''); }

  function promoteCards(){
    Object.entries(PROMOTIONS).forEach(([id,meta])=>{
      const recipe=recipeById(id); if(!recipe) return;
      recipe.removeAttribute('data-category');
      recipe.dataset.recipeSlug=meta.slug;
      const title=recipe.querySelector(':scope > .recipe-title-row > h3') || recipe.querySelector(':scope > h3'); if(title) title.textContent=meta.title;
      recipe.querySelectorAll(':scope > p.note').forEach(note=>{
        if(/formulation currently being tested/i.test(note.textContent || '')) note.remove();
      });
      recipe.querySelectorAll(':scope h4 + ul li').forEach(()=>{});
      recipe.querySelectorAll('li').forEach(li=>{
        if(/currently grouped under\s+Testing/i.test(li.textContent || '')) li.remove();
      });
    });

    ['r4','r5'].forEach(id=>{
      const old=recipeById(id);
      if(old) old.remove();
    });
  }

  function rewriteRecipeAnchors(){
    document.querySelectorAll('a.recipe-open,[data-recipe-id]').forEach(anchor=>{
      if(!(anchor instanceof Element)) return;
      let id=String(anchor.getAttribute('data-recipe-id') || '');
      if(REPLACED_IDS[id]) id=REPLACED_IDS[id];
      if(id && anchor.getAttribute('data-recipe-id')!==id) anchor.setAttribute('data-recipe-id',id);
      const meta=PROMOTIONS[id];
      if(meta && anchor.tagName==='A') {
        anchor.setAttribute('href',recipeHref(meta.slug));
        const text=String(anchor.textContent || '').trim();
        if(/^Hydrating Conductive Mist$/i.test(text) || /^Nurture\s*&\s*Shine Mist$/i.test(text) || /^Microcurrent Conductive Gel$/i.test(text)) anchor.textContent='Microcurrent Glide Gel';
        if(/^Shaving Gel$/i.test(text)) anchor.textContent='Calming Shave Gel';
        if(/^Natural Tooth-Brightening Powder$/i.test(text)) anchor.textContent='Tooth Polishing Powder';
      }
    });
    document.querySelectorAll('a[href*="hydrating-conductive-mist"],a[href*="testing-microcurrent-conductive-gel"]').forEach(a=>{
      a.href=recipeHref('microcurrent-glide-gel');
      if(a.classList.contains('recipe-open')) a.dataset.recipeId='r10';
      if(/Hydrating Conductive Mist|Nurture\s*&\s*Shine Mist|Microcurrent Conductive Gel/i.test(a.textContent || '')) a.textContent='Microcurrent Glide Gel';
    });
    document.querySelectorAll('a[href*="testing-shaving-gel"]').forEach(a=>{
      a.href=recipeHref('calming-shave-gel');
      if(a.classList.contains('recipe-open')) a.dataset.recipeId='r8';
      if(/Shaving Gel/i.test(a.textContent || '')) a.textContent='Calming Shave Gel';
    });
    document.querySelectorAll('a[href*="testing-natural-tooth-brightening-powder"]').forEach(a=>{
      a.href=recipeHref('tooth-polishing-powder');
      if(a.classList.contains('recipe-open')) a.dataset.recipeId='r9';
      if(/Natural Tooth-Brightening Powder/i.test(a.textContent || '')) a.textContent='Tooth Polishing Powder';
    });
  }

  function makeNavItem(item,landing){
    const [id,slug,title,description]=item;
    const li=document.createElement('li');
    const a=document.createElement('a');
    a.className='recipe-open';a.dataset.recipeId=id;a.href=recipeHref(slug);
    a.textContent=landing?`${title} — ${description}`:title;
    li.appendChild(a);return li;
  }
  function rebuildLists(){
    const navList=document.querySelector('#side-nav > ul');
    if(navList && navList.dataset.recipeCollection202609!=='1'){
      navList.replaceChildren(...MAIN_RECIPES.map(item=>makeNavItem(item,false)));
      const head=document.createElement('li');head.className='ing-subhead';head.innerHTML='<strong>Testing</strong>';navList.appendChild(head);
      TESTING_RECIPES.forEach(item=>navList.appendChild(makeNavItem(item,false)));
      navList.dataset.recipeCollection202609='1';
    }
    const landing=document.getElementById('recipes-landing');
    const list=landing?.querySelector('ul');
    if(list && list.dataset.recipeCollection202609!=='1'){
      list.replaceChildren(...MAIN_RECIPES.map(item=>makeNavItem(item,true)));
      const head=document.createElement('li');head.className='ing-subhead';head.innerHTML='<strong>Testing</strong>';list.appendChild(head);
      TESTING_RECIPES.forEach(item=>list.appendChild(makeNavItem(item,true)));
      list.dataset.recipeCollection202609='1';
    }
  }

  function detailsMarkup(data){
    return `<div class="recipe-details-intro" data-recipe-view-group="details">
      <div class="recipe-detail-block"><h4>Purpose</h4><p>${escapeHtml(data.purpose)}</p></div>
      <div class="recipe-detail-block"><h4>Formula Profile</h4><p>${escapeHtml(data.profile)}</p></div>
      <div class="recipe-detail-block"><h4>How the Formulation Works</h4><p>${escapeHtml(data.works)}</p></div>
      <div class="recipe-detail-block"><h4>Design Rationale</h4><p>${escapeHtml(data.rationale)}</p></div>
      <div class="recipe-detail-block"><h4>Variables &amp; Fixed Elements</h4><p>${escapeHtml(data.variables)}</p></div>
      <div class="recipe-detail-block"><h4>Boundaries</h4><p>${escapeHtml(data.boundaries)}</p></div>
    </div>`;
  }
  function installDetails(){
    document.querySelectorAll('#recipes .recipe-page:not([aria-hidden="true"])').forEach(recipe=>{
      const data=DETAIL_DATA[recipe.id]; if(!data) return;
      let block=recipe.querySelector(':scope > .recipe-details-intro');
      if(!block){
        const tabs=recipe.querySelector(':scope > .recipe-subtabs');
        const holder=document.createElement('div');holder.innerHTML=detailsMarkup(data);block=holder.firstElementChild;
        if(tabs) tabs.insertAdjacentElement('afterend',block); else recipe.appendChild(block);
      }
      block.dataset.recipeViewGroup='details';
    });
  }

  function visibleGroups(recipe,view){
    const next=['standard','details','guidance','show-all'].includes(view)?view:'standard';
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
        if(button.dataset.recipeSubtab==='standard') button.textContent='Recipe';
        button.addEventListener('click',()=>{
          const view=String(button.dataset.recipeSubtab || 'standard');
          global.setTimeout(()=>visibleGroups(recipe,view),0);
        });
      });
    });
  }

  function restoreSegmentedVariants(){
    document.querySelectorAll('#recipes .recipe-page').forEach(recipe=>{
      recipe.querySelectorAll('.recipe-variant-field').forEach(field=>field.remove());
      recipe.querySelectorAll('.variant-switcher').forEach(sw=>{
        sw.classList.remove('recipe-native-variant-switcher');
        sw.hidden=false;
        sw.removeAttribute('aria-hidden');
      });
    });
  }

  function fmtSliderValue(value){
    const n=Number(value); if(!Number.isFinite(n)) return String(value || '');
    return Math.abs(n-Math.round(n))<0.001?String(Math.round(n)):n.toFixed(1);
  }
  function updateBubble(slider){
    const meta=SLIDER_META[slider.id]; if(!meta) return;
    const wrap=slider.closest('.glide-slider-wrap'); if(!wrap) return;
    let bubble=wrap.querySelector('.glide-value-bubble');
    if(!bubble){ bubble=document.createElement('output');bubble.className='glide-value-bubble';wrap.appendChild(bubble); }
    const min=Number(slider.min || 0),max=Number(slider.max || 100),val=Number(slider.value || 0);
    const pct=max>min?((val-min)/(max-min))*100:50;
    bubble.style.left=`${Math.max(0,Math.min(100,pct))}%`;
    bubble.textContent=`${fmtSliderValue(val)}% ${meta.bubble}`;
  }
  function enhanceSliders(){
    Object.entries(SLIDER_META).forEach(([id,meta])=>{
      const slider=document.getElementById(id); if(!slider) return;
      const main=slider.closest('.glide-control-main'); if(!main) return;
      const scale=main.querySelector('.glide-scale');
      if(scale && scale.dataset.recipeUx202609!=='1'){
        scale.innerHTML=`<span><strong>${escapeHtml(meta.left[0])}</strong><small>${escapeHtml(meta.left[1])}</small></span><span><strong>${escapeHtml(meta.right[0])}</strong><small>${escapeHtml(meta.right[1])}</small></span>`;
        scale.dataset.recipeUx202609='1';
      }
      let help=main.querySelector('.glide-variable-help');
      if(!help){ help=document.createElement('p');help.className='glide-variable-help';main.appendChild(help); }
      help.textContent=meta.help;
      if(slider.dataset.recipeUxBound!=='1'){
        slider.dataset.recipeUxBound='1';
        slider.addEventListener('input',()=>global.requestAnimationFrame(()=>updateBubble(slider)));
        slider.addEventListener('change',()=>updateBubble(slider));
      }
      updateBubble(slider);
    });
    document.querySelectorAll('.slider-save-btn:not(.slider-default-btn)').forEach(button=>button.textContent='Save as my setting');
    document.querySelectorAll('.slider-default-btn').forEach(button=>button.textContent='Reset to recipe default');
  }

  function installStyles(){
    if(document.getElementById('baseline-skincare-recipe-ux-20260906')) return;
    const style=document.createElement('style');style.id='baseline-skincare-recipe-ux-20260906';
    style.textContent=`
      #recipes .recipe-variant-field{display:none!important}
      #recipes .variant-switcher{display:flex!important;flex-wrap:wrap;gap:.3rem;align-items:center;width:max-content;max-width:100%;padding:.28rem;border:1px solid rgba(73,48,40,.22);border-radius:999px;background:rgba(255,255,255,.16)}
      #recipes .variant-switcher .variant-tab{appearance:none;border:0;border-radius:999px;padding:.55rem .9rem;background:transparent;color:inherit;font:inherit;font-weight:650;cursor:pointer}
      #recipes .variant-switcher .variant-tab[aria-selected="true"]{background:rgba(255,255,255,.72);box-shadow:0 1px 4px rgba(60,35,28,.14)}
      #recipes .glide-controller{gap:.8rem!important;padding:.85rem!important;align-items:start!important}
      #recipes .glide-control-main{min-height:0!important;padding:.75rem!important}
      #recipes .glide-control-explainer{min-height:0!important;padding:.75rem!important}
      #recipes .glide-slider-wrap{position:relative;padding-top:2.15rem!important}
      #recipes .glide-value-bubble{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap;padding:.18rem .45rem;border-radius:.45rem;background:rgba(255,255,255,.82);border:1px solid rgba(73,48,40,.18);font-size:.82rem;font-weight:700;line-height:1.25;pointer-events:none}
      #recipes .glide-scale{display:flex!important;justify-content:space-between!important;gap:1rem!important;margin-top:.45rem!important}
      #recipes .glide-scale>span{display:flex;flex-direction:column;gap:.08rem;max-width:46%;line-height:1.2}
      #recipes .glide-scale>span:last-child{text-align:right;align-items:flex-end}
      #recipes .glide-scale small{font-size:.78rem;opacity:.76}
      #recipes .glide-variable-help{margin:.65rem 0 0;font-size:.88rem;line-height:1.4;opacity:.86}
      #recipes .slider-save-row{display:flex;flex-wrap:wrap;align-items:center;gap:.45rem;margin-top:.7rem}
      #recipes .recipe-details-intro{display:grid;gap:.7rem;margin-top:.75rem}
      html body[data-app="skin"] #recipes .recipe-page.recipe-universal-template .recipe-details-intro[data-recipe-view-group="details"]:not(.recipe-view-hidden){display:grid!important}
      #recipes .recipe-detail-block{padding:.8rem .9rem;border:1px solid rgba(73,48,40,.15);border-radius:.7rem;background:rgba(255,255,255,.12)}
      #recipes .recipe-detail-block h4{margin:0 0 .28rem}
      #recipes .recipe-detail-block p{margin:0;line-height:1.5}
      #recipes .recipe-view-hidden{display:none!important}
      @media (max-width:720px){#recipes .variant-switcher{width:100%;border-radius:.8rem}#recipes .variant-switcher .variant-tab{flex:1 1 auto}#recipes .glide-scale>span{max-width:48%}}
    `;
    document.head.appendChild(style);
  }

  function canonicaliseOldRecipePath(){
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const match=path.match(/^\/baseline-natural-skincare\/recipes\/([^/]+)$/i);
    if(!match) return;
    const old=String(match[1] || '').toLowerCase();
    const id=OLD_SLUGS[old]; if(!id) return;
    const meta=PROMOTIONS[id]; if(!meta) return;
    try{ global.history.replaceState(global.history.state,'',recipeHref(meta.slug)+String(global.location.search || '')); }catch(_error){}
  }

  function openPromotedRecipeForPath(){
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const match=path.match(/^\/baseline-natural-skincare\/recipes\/([^/]+)$/i);
    if(!match) return;
    const slug=String(match[1] || '').toLowerCase();
    const hit=Object.entries(PROMOTIONS).find(([,meta])=>meta.slug===slug);
    const oldId=OLD_SLUGS[slug];
    const id=hit?hit[0]:oldId;
    if(!id) return;
    try{ global.BASELINE_openRecipe?.(id,{ silentHistory:true }); }catch(_error){}
    document.getElementById('recipes')?.classList.remove('recipe-focus');
    global.requestAnimationFrame(()=>resetRecipeView(recipeById(id)));
  }

  function wrapRecipeOpen(){
    if(global.__BASELINE_SKINCARE_RECIPE_OPEN_RESET_20260906__) return;
    global.__BASELINE_SKINCARE_RECIPE_OPEN_RESET_20260906__=true;
    const original=typeof global.BASELINE_openRecipe==='function'?global.BASELINE_openRecipe:null;
    if(original){
      global.BASELINE_openRecipe=function(id,opts){
        let next=String(id || ''); if(REPLACED_IDS[next]) next=REPLACED_IDS[next];
        const result=original.call(this,next,opts || {});
        document.getElementById('recipes')?.classList.remove('recipe-focus');
        global.requestAnimationFrame(()=>resetRecipeView(recipeById(next)));
        return result;
      };
    }
    document.addEventListener('click',event=>{
      const link=event.target?.closest?.('.recipe-open'); if(!link) return;
      let id=String(link.dataset.recipeId || ''); if(REPLACED_IDS[id]) id=REPLACED_IDS[id];
      global.setTimeout(()=>resetRecipeView(recipeById(id)),0);
    },false);
  }

  function applyAll(){
    installStyles();
    promoteCards();
    rebuildLists();
    rewriteRecipeAnchors();
    restoreSegmentedVariants();
    installDetails();
    bindRecipeSubtabs();
    enhanceSliders();
    document.querySelectorAll('#recipes .recipe-page').forEach(recipe=>{
      const standard=recipe.querySelector(':scope > .recipe-subtabs .recipe-subtab[data-recipe-subtab="standard"]');
      if(standard) standard.textContent='Recipe';
    });
  }

  function startRecipeUx(){
    canonicaliseOldRecipePath();
    applyAll();
    wrapRecipeOpen();
    global.requestAnimationFrame(()=>{ applyAll(); openPromotedRecipeForPath(); });
    global.setTimeout(applyAll,120);
    global.setTimeout(applyAll,600);
    global.addEventListener('load',applyAll,{once:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',startRecipeUx,{once:true});
  else startRecipeUx();
})(typeof window!=='undefined'?window:globalThis);
