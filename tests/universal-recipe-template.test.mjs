import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const css = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const skincareCss = fs.readFileSync('systems/baseline-natural-skincare/css/baseline-natural-skincare.css', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');
const skincareHtml = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const foodHtml = fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');
const liveStability = fs.readFileSync('sitewide/js/baseline-live-stability-core-v3.js', 'utf8');
const htaccess = fs.readFileSync('.htaccess', 'utf8');

function skincareRecipeBlocks(){
  const matches=[...skincareHtml.matchAll(/<div class="recipe card recipe-page recipe-universal-template"[^>]*\bid="(r\d+)"[^>]*>/g)];
  return matches.map((match,index)=>{
    const end=index+1<matches.length ? matches[index+1].index : skincareHtml.indexOf('<!-- INGREDIENT LIBRARY -->',match.index);
    return { id:match[1], html:skincareHtml.slice(match.index,end) };
  });
}

function foodRecipeBlocks(){
  return fs.readdirSync('systems/baseline-food-approach/recipes')
    .filter((name)=>name.endsWith('.html'))
    .sort()
    .map((name)=>({ name, html:fs.readFileSync('systems/baseline-food-approach/recipes/'+name,'utf8') }));
}

test('Food and Skincare declare exact recipe routes before first paint', () => {
  for (const html of [skincareHtml, foodHtml]) {
    assert.match(html, /id="baseline-recipe-route-first-paint"/);
    assert.match(html, /data-initial-section','recipes'/);
    assert.match(html, /data-initial-recipe-route','1'/);
    assert.match(html, /data-initial-section="recipes"[^}]*#system\.section\{display:none!important\}/s);
    assert.match(html, /data-initial-section="recipes"[^}]*#recipes\.section\{display:block!important\}/s);
  }
  assert.match(css, /html\[data-initial-recipe-route="1"\] #recipes \.recipe-page\{display:none!important;visibility:hidden!important\}/);
  assert.match(css, /html\[data-initial-recipe-slug="testing-lip-balm"\] #recipes #r12\{display:block!important;visibility:visible!important/);
  assert.match(shared, /removeAttribute\('data-initial-section'\)/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-route'\)/);
});

test('standalone recipe recovery preserves the selected recipe subview', () => {
  assert.match(liveStability, /const params = new URLSearchParams\(location\.search \|\| ''\)/);
  assert.match(liveStability, /params\.get\('view'\)/);
  assert.match(liveStability, /params\.get\('variant'\)/);
  assert.match(liveStability, /view:view/);
  assert.match(liveStability, /variant:variant/);
  assert.match(liveStability, /pending\.view/);
  assert.match(liveStability, /pending\.variant/);
  assert.match(liveStability, /__baselineSetRecipeVariant/);
  assert.match(liveStability, /__baselineSetRecipeView/);
  assert.match(liveStability, /syncRoute:true/);
});

test('shared method-tag engine maps every ingredient source to one first-use method step', () => {
  assert.match(shared, /function injectMethodAmounts\(recipeEl\)/);
  assert.match(shared, /dataset\.methodTagKey=key/);
  assert.match(shared, /dataset\.methodIngredientKey=entry\.key/);
  assert.match(shared, /function bestNaturalMatch\(entry\)/);
  assert.match(shared, /function bestExplicitMatch\(entry\)/);
  assert.match(shared, /const preferExplicit=!!explicit && \(entry\.genericTerm \|\| \(identityCounts\.get\(entry\.identity\) \|\| 0\)>1\)/);
  assert.match(shared, /data-method-amounts='first-use'|dataset\.methodAmounts='first-use'/);
  assert.doesNotMatch(shared, /const emittedMethodAmounts = new Set\(\)/);
});

test('Skincare universal recipe chrome is authored once in canonical HTML', () => {
  const blocks=skincareRecipeBlocks();
  assert.equal(blocks.length,9);
  for (const {id,html} of blocks) {
    assert.equal((html.match(/data-static-recipe-controls="1"/g)||[]).length,1,id+' static controls');
    assert.equal((html.match(/class="recipe-meta-row/g)||[]).length,1,id+' metadata row');
    assert.equal((html.match(/class="recipe-adjustments-row/g)||[]).length,1,id+' adjustments row');
    assert.equal((html.match(/class="recipe-subtabs/g)||[]).length,1,id+' tab set');
    assert.equal((html.match(/class="recipe-details-intro/g)||[]).length,1,id+' details block');
    assert.match(html,/data-recipe-view="standard"/);
    for (const [view,label] of [['standard','Recipe'],['details','Details'],['guidance','Guidance'],['show-all','Show All']]) {
      assert.match(html,new RegExp('data-recipe-subtab="'+view+'"[^>]*>'+label+'<\\/button>'),id+' '+view+' tab');
    }
    assert.doesNotMatch(html,/<[^>]+data-recipe-view-group="standard"[^>]*class="[^"]*recipe-view-hidden|<[^>]+class="[^"]*recipe-view-hidden[^"]*"[^>]*data-recipe-view-group="standard"/);
  }
  assert.doesNotMatch(recipeUx,/createElement|MutationObserver|setTimeout|requestAnimationFrame/);
});


test('Universal adjustment visibility and Show All ordering are shared by Food and Skincare', () => {
  assert.match(shared, /const adjustmentsAvailable = next === 'standard' \|\| next === 'show-all'/);
  assert.match(shared, /adjustmentsRow\.classList\.toggle\('recipe-view-hidden', !adjustmentsAvailable\)/);
  assert.match(shared, /editBody\.hidden = true/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-PRESENTATION-20261004/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*data-recipe-view-group="standard"[\s\S]*order:10/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*recipe-details-intro[\s\S]*order:20/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*data-recipe-view-group="guidance"[\s\S]*order:30/);
});

test('recipe subview first-paint guard honours clean-route view state before runtime', () => {
  assert.match(skincareHtml, /data-initial-recipe-view/);
  assert.match(skincareHtml, /new URLSearchParams\(location\.search\|\|''\)\.get\('view'\)/);
  assert.match(css, /BASELINE-RECIPE-SUBVIEW-FIRST-PAINT-20261003/);
  assert.match(css, /data-initial-recipe-view="details"[\s\S]*recipe-details-intro\.recipe-view-hidden[\s\S]*display:grid!important/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-slug'\)/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-view'\)/);
});

test('clean recipe slugs resolve in embedded and standalone recipe shells', () => {
  assert.match(shared, /const recipes = qsa\('\.recipe-page\[id\]'\)/);
  assert.doesNotMatch(shared, /const recipes = qsa\('#recipes \.recipe-page\[id\]'\)/);
});

test('recipe subview is encoded by the shared router and Skincare restores its Details surface after reload', () => {
  assert.match(shared, /function normalizeRecipeSubView\(value\)/);
  assert.match(shared, /const params = new URLSearchParams\(location\.search \|\| ''\)/);
  assert.match(shared, /params\.get\('view'\)/);
  assert.match(shared, /params\.get\('variant'\)/);
  assert.match(shared, /params\.set\('view', recipeView\)/);
  assert.match(shared, /params\.set\('variant', recipeVariant\)/);
  assert.match(shared, /function setView\(view, options=\{\}\)/);
  assert.match(shared, /options && options\.syncRoute/);
  assert.match(shared, /recipeView:next/);
  assert.match(shared, /recipeVariant:/);
  assert.match(shared, /setNavState\(nextState, \{ replace:true, url:urlForNavState\(nextState\) \}\)/);
  assert.match(shared, /card\.__baselineSetRecipeVariant/);
  assert.match(shared, /card\.__baselineSetRecipeView\(normalizeRecipeSubView\(state\.recipeView \|\| 'standard'\)/);
  assert.match(recipeUx, /function recipeViewFromLocation\(\)/);
  assert.match(recipeUx, /restoreRecipeViewFromLocation\(\)/);
  assert.match(recipeUx, /addEventListener\('popstate',restoreRecipeViewFromLocation\)/);
  assert.doesNotMatch(recipeUx, /syncRecipeViewUrl/);
  assert.match(skincareCss, /recipe-open-mode \.recipe-page,[\s\S]*recipe-detail-open \.recipe-page\{ display:none!important; \}/);
  assert.match(skincareCss, /recipe-open-mode \.recipe-page\.active,[\s\S]*recipe-detail-open \.recipe-page\.active\{ display:block!important; \}/);
});

test('recipe variant is part of clean route state and survives refresh/history restoration', () => {
  assert.match(shared, /params\.get\('variant'\)/);
  assert.match(shared, /recipeVariant:recipeVariant/);
  assert.match(shared, /params\.set\('variant', recipeVariant\)/);
  assert.match(shared, /__baselineGetRecipeVariant/);
  assert.match(shared, /__baselineSetRecipeVariant/);
  assert.match(shared, /recipeVariant:\(typeof recipeEl\.__baselineGetRecipeVariant/);
  assert.match(shared, /initialView\.recipeVariant/);
  assert.match(shared, /state\.recipeVariant/);
  assert.match(shared, /if\(routeVariant\) setVariant\(routeVariant, \{ syncRoute:false \}\)/);
  assert.match(skincareHtml, /new URLSearchParams\(location\.search \|\| ''\)\.get\('variant'\)/);
  assert.match(skincareHtml, /\/baseline-natural-skincare\\\/recipes\\\/anhydrous-oil-cleanser\$/);
  assert.match(skincareHtml, /routedButton \|\| recipe\.querySelector\('\.variant-tab\[aria-selected="true"\]'\)/);
});

test('shared recipe engine retains one fallback renderer for recipes without authored chrome', () => {
  assert.match(shared,/const preauthored = !!controls/);
  assert.match(shared,/q\('input\.multiplier-input', controls\)/);
  assert.match(shared,/data-static-recipe-controls/);
  assert.match(shared,/data-static-recipe-shell/);
  assert.match(shared,/if\(!preauthored\)/);
  assert.match(shared,/\['standard', 'Standard View'\]/);
  assert.match(shared,/\['details', 'Details'\]/);
  assert.match(shared,/\['guidance', 'Guidance'\]/);
  assert.match(shared,/\['show-all', 'Show All'\]/);
  assert.match(shared,/let authoredInitialView = 'standard'/);
  assert.match(shared,/authoredInitialView = normalizeRecipeSubView\(routeState\.recipeView \|\| 'standard'\)/);
  assert.match(shared,/setView\(authoredInitialView, \{ syncRoute:false \}\)/);
  assert.match(shared, /const nextState = \{ kind: 'recipe', recipeId: id, recipeView: 'standard' \}/);
  assert.match(shared, /liveCard\.__baselineSetRecipeView\('standard', \{ syncRoute:false \}\)/);
  assert.doesNotMatch(shared, /currentId === id[\s\S]*recipeView = normalizeRecipeSubView/);
  assert.doesNotMatch(shared, /<h[1-6][^>]*>Standard View<\/h[1-6]>/i);
});

test('Food and Skincare use the same authored Details structure with domain-specific content', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.match(html,/class="recipe-details-intro recipe-view-hidden" data-recipe-view-group="details"/,id+' Details starts hidden');
    assert.equal((html.match(/class="recipe-detail-block"/g)||[]).length,6,id+' Details blocks');
    assert.match(html,/class="recipe-comedogenic-rating"/,id+' skincare comedogenic rating');
    assert.match(html,/<h4>Limitations &amp; Trade-offs<\/h4>/,id+' limitations heading');
  }

  const expectedFoodHeadings=['Purpose','Recipe Profile','How the Recipe Works','Design Rationale','Variables &amp; Fixed Elements','Limitations &amp; Trade-offs'];
  for (const {name,html} of foodRecipeBlocks()) {
    assert.match(html,/class="recipe card recipe-page recipe-universal-template"/,name+' universal shell');
    assert.match(html,/data-static-recipe-shell="1"/,name+' static shell');
    assert.equal((html.match(/class="recipe-detail-block"/g)||[]).length,6,name+' Details blocks');
    for (const heading of expectedFoodHeadings) assert.ok(html.includes('<h4>'+heading+'</h4>'),name+' '+heading);
    assert.doesNotMatch(html,/Comedogenic Rating|recipe-comedogenic-rating/,name+' no skincare-only rating');
    assert.match(html,/data-recipe-view-group="guidance">Serving &amp; Use<\/h4>/,name+' serving guidance');
    assert.match(html,/data-recipe-view-group="guidance">Body &amp; Sensory Notes<\/h4>/,name+' sensory guidance');
    assert.equal((html.match(/class="recipe-subtab"/g)||[]).length,4,name+' four recipe views');
    assert.equal((html.match(/class="recipe-meta-item"/g)||[]).length,1,name+' one Batch metadata item');
  }

  assert.match(css,/BASELINE-UNIVERSAL-RECIPE-PRESENTATION-20261004/);
  assert.match(css,/recipe-details-intro\[hidden\][\s\S]*display:none !important/);
  assert.match(css,/recipe-details-intro\{[\s\S]*grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css,/recipe-detail-block\{[\s\S]*border:0;[\s\S]*background:transparent/);
  assert.match(shared,/recipe-details-variant-field/);
  assert.match(shared,/__baselineSetRecipeVariant/);
  assert.match(css,/recipe-details-variant-field/);
});
test('every authored Skincare recipe has one coherent Batch metadata item before JavaScript', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.doesNotMatch(html,/recipe-yield-meta-value|>Yield:</,'unexpected Yield metadata in '+id);
    assert.match(html,/recipe-batch-meta-value/,'missing Batch metadata in '+id);
    assert.equal((html.match(/class="recipe-meta-item(?:\s[^"]*)?"/g) || []).length,1,'extra metadata item in '+id);
  }
  assert.doesNotMatch(shared, /yieldValue|recipe-yield-meta-value|addMeta\('Yield'/);
  assert.match(shared, /addMeta\('Batch', '1×'\)/);
});

test('shared recipe engine owns Details visibility immediately on click', () => {
  assert.match(shared, /const visible = next === 'show-all' \|\| group === next/);
  assert.match(shared, /classList\.contains\('recipe-details-intro'\)/);
  assert.match(shared, /el\.hidden = !visible/);
  assert.doesNotMatch(shared, /group !== 'details'/);
  assert.doesNotMatch(recipeUx, /function bindRecipeSubtabs/);
});

test('Adjustments owns scaling utilities and static Skincare shells hydrate rather than duplicate', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.match(html,/class="recipe-adjustments-toggle print-hide" data-static-recipe-shell="1"[^>]*>Adjustments<\/button>/,id);
    assert.match(html,/class="recipe-edit-options recipe-adjustments-panel print-hide" data-static-recipe-shell="1" hidden/,id);
    assert.equal((html.match(/class="scale-block"/g)||[]).length,1,id+' scale block');
  }
  assert.match(shared,/let strip = q\('\.recipe-option-strip\[data-static-recipe-shell="1"\]'/);
  assert.match(shared,/let editBody = q\('\.recipe-edit-options\[data-static-recipe-shell="1"\]'/);
  assert.match(shared,/let adjustmentsBtn = q\('\.recipe-adjustments-toggle\[data-static-recipe-shell="1"\]'/);
  assert.doesNotMatch(shared, /textContent = 'Edit Options'/);
});

test('Skincare slider recipes already contain the final layout and save controls', () => {
  assert.equal((skincareHtml.match(/\brecipe-slider-template\b/g)||[]).length,7);
  assert.equal((skincareHtml.match(/class="slider-save-row"/g)||[]).length,7);
  assert.equal((skincareHtml.match(/class="glide-explain-title">Overall Feel<\/div>/g)||[]).length,7);
  assert.equal((skincareHtml.match(/class="glide-breakdown" hidden aria-hidden="true"/g)||[]).length,6);
  assert.doesNotMatch(skincareHtml,/class="glide-control-stack"/);
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /controller\.dataset\.sliderCount = String\(controls\.length > 1 \? 2 : 1\)/);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SLIDER-CONTRACT-20260920/);
});

test('Adjustments and universal spacing remain owned by shared theme CSS', () => {
  assert.match(css, /recipe-adjustments-row[\s\S]*background:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-color:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-image:none !important;/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SPACING-20260824/);
  assert.match(css, /recipe-title-row/);
  assert.match(css, /recipe-meta-row/);
  assert.match(css, /recipe-adjustments-row/);
  assert.match(css, /recipe-subtabs/);
  assert.match(css, /recipe-option-strip/);
});

test('universal recipe styling inherits system variables instead of imposing Food or Skincare colours', () => {
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-TEMPLATE-20260824/);
  assert.match(css, /var\(--showall-bg/);
  assert.match(css, /var\(--accent-2/);
  assert.match(css, /var\(--border/);
});

test('Skincare semantic emphasis is present before JavaScript mutates anything', () => {
  assert.match(css, /\[data-recipe-view-group\] strong\{\s*font-weight:inherit !important;/s);
  assert.match(skincareCss,/STATIC-FIRST-SKINCARE-RECIPE-SEMANTIC-EMPHASIS-20261002/);
  assert.match(skincareCss,/recipe-universal-template ol > li > strong:first-child/);
  assert.match(skincareCss,/recipe-universal-template \.ing-subhead > strong/);
  assert.match(skincareCss,/data-recipe-view-group="guidance"/);
});


test('Food and Skincare share one shell-first universal recipe architecture', () => {
  assert.ok(
    htaccess.includes('RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/baseline-food-approach.html [L,QSA]')
  );
  assert.ok(
    htaccess.includes('RewriteRule ^baseline-natural-skincare/recipes/([^/]+)/?$ systems/baseline-natural-skincare/baseline-natural-skincare.html [L,QSA]')
  );
  assert.match(shared, /async function hydrateFolderBackedRecipeCollection\(\)/);
  assert.match(shared, /card\.classList\.add\('recipe-universal-template'\)/);
  assert.match(shared, /await hydrateFolderBackedRecipeCollection\(\)/);
  assert.match(shared, /Promise\.all\([\s\S]*BASELINE_FOOD_RECIPE_INDEX/);
  assert.doesNotMatch(shared, /ensureStandaloneSystemTabs|baseline-standalone-primary-tabs/);
  assert.doesNotMatch(css, /BASELINE-STANDALONE-SYSTEM-TABS-20261004/);
});


test('recipe authoring authority is sitewide, not duplicated per system', () => {
  assert.match(shared, /window\.BASELINE_getRecipeAuthoringTemplate = function\(app\)/);
  assert.match(shared, /authority: 'sitewide'/);
  assert.match(shared, /One sitewide recipe shell owns Food and Skincare recipe navigation and view state/);
  assert.doesNotMatch(foodHtml, /id="baseline-recipe-authoring-template"/);
  assert.doesNotMatch(skincareHtml, /id="baseline-recipe-authoring-template"/);
  assert.match(foodHtml, /SITEWIDE RECIPE TEMPLATE — FOOD CONTENT NOTES/);
  assert.match(skincareHtml, /SITEWIDE RECIPE TEMPLATE — SKINCARE CONTENT NOTES/);
});


test('universal recipe overview never revives historical recipe cards', () => {
  assert.match(css, /\.recipe-page\{\s*display:none;/);
  assert.doesNotMatch(css, /\.recipe\.card\s*\{/);
  assert.doesNotMatch(css, /#recipes:not\(\.recipe-open-mode\)/);
  assert.doesNotMatch(css, /recipe-top-bar/);
  assert.doesNotMatch(css, /body\[data-app\] #recipes\s*>\s*\.grid\s*>\s*\.card\s*\{[^}]*background\s*:\s*transparent/i);
  assert.match(skincareHtml, /class="recipe card recipe-page recipe-universal-template"/);
  assert.doesNotMatch(foodHtml, /class="card recipe-landing"/);
});


test('structural recipe card class remains required by the universal enhancer', () => {
  assert.match(shared, /const recipeSelectorBase = recipeScope[\s\S]*'#recipes \.recipe\.card\.recipe-page'/);
  assert.match(skincareHtml, /class="recipe card recipe-page recipe-universal-template"/);
  assert.doesNotMatch(css, /\.recipe\.card\s*\{[^}]*background/);
});


test('recipe favourite star is one sitewide title-aligned rule', () => {
  assert.match(shared, /getComputedStyle\(h3\)/);
  assert.match(shared, /--recipe-title-font-size/);
  assert.match(shared, /--recipe-title-line-height/);
  assert.match(css, /font-size:var\(--recipe-title-font-size, 1em\) !important/);
  assert.match(css, /line-height:var\(--recipe-title-line-height, 1\) !important/);
  assert.match(css, /justify-content:space-between !important/);
  assert.match(css, /align-items:baseline !important/);
  assert.doesNotMatch(css, /data-app="skin"[^{}]*fav-btn[^{}]*font-size/);
  assert.doesNotMatch(css, /data-app="food"[^{}]*fav-btn[^{}]*font-size/);
});


test('recipe title typography is one sitewide Skincare-reference contract', () => {
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-PRESENTATION-20261004/);
  assert.match(css, /recipe-title-row > h3\{[\s\S]*font-family:var\(--font-soft\) !important;[\s\S]*font-size:28px !important;[\s\S]*line-height:1\.25 !important;/);
  assert.doesNotMatch(skincareCss, /SKINCARE-RECIPE-PRESENTATION-CONTRACT-20261004/);
});


test('all Food recipes use the authored universal shell before runtime enhancement', () => {
  for (const {name,html} of foodRecipeBlocks()) {
    assert.match(html,/class="recipe card recipe-page recipe-universal-template"/,name+' universal class');
    assert.match(html,/data-static-recipe-shell="1"/,name+' static shell');
    assert.equal((html.match(/data-static-recipe-controls="1"/g)||[]).length,1,name+' static controls');
    assert.equal((html.match(/class="recipe-meta-row/g)||[]).length,1,name+' metadata row');
    assert.equal((html.match(/class="recipe-adjustments-row/g)||[]).length,1,name+' adjustments row');
    assert.equal((html.match(/class="recipe-subtabs/g)||[]).length,1,name+' tab set');
    assert.equal((html.match(/class="recipe-details-intro/g)||[]).length,1,name+' details block');
    assert.equal((html.match(/class="recipe-detail-block"/g)||[]).length,6,name+' six Details sections');
    assert.equal((html.match(/data-recipe-subtab=/g)||[]).length,4,name+' four recipe views');
    assert.equal((html.match(/data-recipe-view-group="guidance">/g)||[]).length,4,name+' two guidance headings + two lists');
  }
});

test('preauthored Food shells still receive recipe-specific variables from shared runtime', () => {
  assert.match(shared,/if\(isOatPorridge\)[\s\S]*if\(!oatToggleEl\)[\s\S]*recipe-control-row--oat/);
  assert.match(shared,/if\(hasThickness && !thickSelect\)[\s\S]*recipe-control-row--thickness/);
  assert.match(shared,/thickSelect\.className = 'thickness-select'/);
});
