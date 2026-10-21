import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const css = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const sitewideCss = fs.readFileSync('sitewide/css/baseline-sitewide.css', 'utf8');
const themesCss = fs.readFileSync('sitewide/css/baseline-themes.css', 'utf8');
const skincareCss = fs.readFileSync('systems/baseline-natural-skincare/css/baseline-natural-skincare.css', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');
const skincareHtml = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const foodHtml = fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');
const foodCss = fs.readFileSync('systems/baseline-food-approach/css/baseline-food-approach.css', 'utf8');
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
    assert.match(html, /data-initial-recipe-route','1'/);
    assert.match(html, /baseline-(?:natural-skincare|food-approach)/);
    assert.match(html, /recipes/);
  }
  assert.match(skincareHtml, /data-initial-section','recipes'/);
  assert.match(foodHtml, /baseline-food-approach/);
  assert.match(foodHtml, /setAttribute\('data-initial-section',t\)/);
  assert.match(foodCss, /html\[data-initial-section\] body\[data-app="food"\] main\.wrap>\.section\{display:none!important\}/);
  assert.match(skincareCss, /html\[data-initial-section\] body\[data-app="skin"\] main\.wrap > \.section\{display:none!important\}/);
  assert.match(css, /html\[data-initial-recipe-route="1"\] #recipes \.recipe-page\{display:none!important;visibility:hidden!important\}/);
  assert.match(shared, /removeAttribute\('data-initial-section'\)/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-route'\)/);
});

test('shared recipe router preserves the selected recipe subview without a stability layer', () => {
  assert.match(shared, /new URLSearchParams\(location\.search \|\| ''\)/);
  assert.match(shared, /params\.get\('view'\)/);
  assert.match(shared, /params\.get\('variant'\)/);
  assert.match(shared, /__baselineSetRecipeVariant/);
  assert.match(shared, /__baselineSetRecipeView/);
  assert.doesNotMatch(shared, /baseline-live-stability-core-v3/);
});

test('shared method-tag engine maps every ingredient source to one first-use method step', () => {
  assert.match(shared, /function injectMethodAmounts\(recipeEl\)/);
  assert.match(shared, /dataset\.methodTagKey=key/);
  assert.match(shared, /dataset\.methodIngredientKey=entry\.key/);
  assert.match(shared, /function bestNaturalMatch\(entry\)/);
  assert.match(shared, /function bestExplicitMatch\(entry\)/);
  assert.match(shared, /const explicit=bestExplicitMatch\(entry\);[\s\S]*let target=explicit \|\| null/);
  assert.match(shared, /data-method-amounts='first-use'|dataset\.methodAmounts='first-use'/);
  assert.doesNotMatch(shared, /const emittedMethodAmounts = new Set\(\)/);
});

test('Skincare universal recipe chrome is authored once in canonical HTML', () => {
  const blocks=skincareRecipeBlocks();
  assert.equal(blocks.length,12);
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


test('recipe subtabs take selected ink from the active system theme', () => {
  assert.match(css, /recipe-subtab\[aria-selected="true"\][\s\S]*--bl-surface-active-ink/);
  assert.doesNotMatch(css, /recipe-tab-active-ink|color:var\(--recipe-tab-active-ink/);
  assert.match(sitewideCss, /body\[data-app="food"\][\s\S]*--bl-surface-active-ink:var\(--food-action-ink\)/);
  assert.match(sitewideCss, /body\[data-app="skin"\][\s\S]*--bl-surface-active-ink:#2b2b28/);
  assert.doesNotMatch(themesCss, /--recipe-tab-active-ink/);
  assert.match(css, /oat-option\[aria-pressed="true"\][\s\S]*--bl-surface-active-ink/);
  assert.match(css, /variant-switcher \.variant-tab\[aria-selected="true"\][\s\S]*--bl-surface-active-ink/);
});

test('Universal adjustment visibility and Show All ordering are shared by Food and Skincare', () => {
  assert.match(shared, /const adjustmentsAvailable = next === 'standard' \|\| next === 'show-all'/);
  assert.match(shared, /adjustmentsBtn\) adjustmentsBtn\.classList\.toggle\('recipe-view-hidden', !adjustmentsAvailable\)/);
  assert.match(shared, /editBody\.hidden = true/);
  assert.match(css, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*data-recipe-view-group="standard"[\s\S]*order:10/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*recipe-details-intro[\s\S]*order:20/);
  assert.match(css, /data-recipe-view="show-all"[\s\S]*data-recipe-view-group="guidance"[\s\S]*order:30/);
});

test('recipe subview first-paint guard honours clean-route view state before runtime', () => {
  assert.match(skincareHtml, /data-initial-recipe-view/);
  assert.match(skincareHtml, /new URLSearchParams\(location\.search\|\|''\)/);
  assert.match(skincareHtml, /q\.get\('view'\)/);
  assert.match(css, /Clean-route subview is honoured before runtime attaches/);
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
  assert.match(shared, /setNavState\(nextState, \{ replace:historyMode !== 'push', url:urlForNavState\(nextState\) \}\)/);
  assert.match(shared, /card\.__baselineSetRecipeVariant/);
  assert.match(shared, /card\.__baselineSetRecipeView\(normalizeRecipeSubView\(state\.recipeView \|\| 'standard'\)/);
  assert.doesNotMatch(recipeUx, /recipeViewFromLocation|restoreRecipeViewFromLocation|syncRecipeViewUrl/);
  assert.match(css, /#recipes\.recipe-open-mode \.recipe-page,[\s\S]*#recipes\.recipe-detail-open \.recipe-page\{display:none\}/);
  assert.match(css, /#recipes\.recipe-open-mode \.recipe-page\.active,[\s\S]*#recipes\.recipe-detail-open \.recipe-page\.is-open[\s\S]*display:block/);
});

test('Anhydrous Oil Cleanser no longer authors duplicate variant state', () => {
  const start = skincareHtml.indexOf('data-recipe-slug="anhydrous-oil-cleanser"');
  const end = skincareHtml.indexOf('<!-- Recipe 3 -->', start);
  const cleanser = skincareHtml.slice(start, end);
  assert.doesNotMatch(cleanser, /variant-switcher|variant-tab|variant-panel|data-recipe-variant-detail/);
  assert.match(cleanser, /id="r2CleansingPull"/);
  assert.match(cleanser, /id="r2BarrierRichness"/);
  assert.match(cleanser, /Reactive is the 0% castor \/ 0% olive point/);
  assert.match(cleanser, /Balanced is the 10% castor \/ 0% olive reference point/);
  assert.match(cleanser, /Enhanced Barrier is the 10% castor \/ 18% olive reference point/);
  assert.doesNotMatch(skincareHtml, /#r2 \.variant-panel|#r2 \.variant-tab/);
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

  assert.match(css,/BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(css,/recipe-details-intro\[hidden\][\s\S]*display:none!important/);
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
  assert.equal((skincareHtml.match(/\brecipe-slider-template\b/g)||[]).length,6);
  assert.equal((skincareHtml.match(/class="slider-save-row"/g)||[]).length,6);
  assert.equal((skincareHtml.match(/class="glide-explain-title">Overall Feel<\/div>/g)||[]).length,6);
  assert.equal((skincareHtml.match(/class="glide-breakdown" hidden aria-hidden="true"/g)||[]).length,5);
  assert.doesNotMatch(skincareHtml,/class="glide-control-stack"/);
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /controller\.dataset\.sliderCount = String\(controls\.length > 1 \? 2 : 1\)/);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(css, /Universal recipe slider/);
});

test('Adjustments and universal spacing remain owned by the single shared recipe stylesheet', () => {
  assert.match(css, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(css, /recipe-title-row/);
  assert.match(css, /recipe-meta-row/);
  assert.match(css, /recipe-viewbar/);
  assert.match(css, /recipe-adjustments-toggle/);
  assert.match(css, /recipe-subtabs/);
  assert.match(css, /recipe-option-strip/);
  assert.match(css, /recipe-adjustments-panel/);
});

test('universal recipe styling inherits system variables instead of imposing Food or Skincare colours', () => {
  assert.match(css, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(css, /var\(--showall-bg/);
  assert.match(css, /var\(--accent-2/);
  assert.match(css, /var\(--border/);
});

test('Skincare semantic emphasis is present before JavaScript mutates anything', () => {
  assert.match(css, /\[data-recipe-view-group\] strong\{font-weight:inherit\}/);
  assert.match(css,/recipe-universal-template ol > li > strong:first-child/);
  assert.match(css,/recipe-universal-template \.ing-subhead > strong/);
  assert.match(css,/data-recipe-view-group="guidance"/);
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
  assert.match(css, /#recipes-landing\{\s*background:transparent;/);
  assert.match(css, /#recipes\.recipe-open-mode > \.grid > \.card,[\s\S]*display:contents;/);
  assert.match(css, /data-initial-recipe-route="1"[\s\S]*#recipes > \.grid > \.card[\s\S]*display:contents;/);
  assert.doesNotMatch(css, /#recipes \.recipe-page,\s*#recipes-landing\{\s*background:var/);
  assert.match(css, /\.recipe-page\{\s*display:none;/);
  assert.doesNotMatch(css, /\.recipe\.card\s*\{/);
  assert.doesNotMatch(css, /#recipes:not\(\.recipe-open-mode\)/);
  assert.doesNotMatch(css, /recipe-top-bar/);
  assert.doesNotMatch(css, /body\[data-app\] #recipes\s*>\s*\.grid\s*>\s*\.card\s*\{[^}]*background\s*:\s*transparent/i);
  assert.match(skincareHtml, /class="recipe card recipe-page recipe-universal-template"/);
  assert.doesNotMatch(foodHtml, /class="card recipe-landing"/);
});


test('ingredient recipe filter is one shared solid-surface control system', () => {
  assert.match(css, /#ingredients \.filter-bar\{[\s\S]*background:transparent;/);
  assert.match(css, /#ingredients \.filter-bar select,[\s\S]*--bl-surface-input-solid/);
  assert.match(css, /#ingredients \.filter-bar \.clear,[\s\S]*--bl-surface-control-solid/);
  assert.doesNotMatch(foodCss, /\.filter-bar\s*\{/);
  assert.doesNotMatch(skincareCss, /\.filter-bar\s*\{/);
  assert.doesNotMatch(foodCss, /#ingredients \.filter-bar/);
});

test('shared recipe chrome names the focused-route return action Back To Recipes', () => {
  assert.match(shared, /btn\.textContent = 'Back To Recipes'/);
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
  assert.match(css, /font-size:var\(--recipe-title-font-size,1em\)/);
  assert.match(css, /line-height:var\(--recipe-title-line-height,1\)/);
  assert.match(css, /justify-content:space-between/);
  assert.match(css, /align-items:baseline/);
  assert.doesNotMatch(css, /data-app="skin"[^{}]*fav-btn[^{}]*font-size/);
  assert.doesNotMatch(css, /data-app="food"[^{}]*fav-btn[^{}]*font-size/);
});


test('recipe favourite first paint is server-authoritative and signed-out stars stay interactive', () => {
  assert.match(foodHtml, /favourites\.php\?bootstrap=1&amp;app=food/);
  assert.match(skincareHtml, /favourites\.php\?bootstrap=1&amp;app=skincare/);
  assert.match(shared, /__BASELINE_RECIPE_FAVOURITES_BOOTSTRAP__/);
  assert.match(shared, /btn\.setAttribute\('data-tip','log in required to favorite this recipe\.'\)/);
  assert.match(shared, /btn\.classList\.add\('tip-show'\)/);
  assert.match(shared, /btn\.disabled = false/);
  assert.doesNotMatch(shared, /btn\.style\.visibility = favsReady \? '' : 'hidden'/);
  assert.doesNotMatch(shared, /btn\.disabled = !favsReady \|\| !authState\.authed/);
  const toggleStart = shared.indexOf('async function toggleFav(recipeId)');
  const toggleEnd = shared.indexOf('// Inject per-recipe favourite buttons', toggleStart);
  assert.ok(toggleStart >= 0 && toggleEnd > toggleStart);
  const toggleSource = shared.slice(toggleStart, toggleEnd);
  assert.match(toggleSource, /showFavouriteCaption\(recipeId\)/);
  assert.doesNotMatch(toggleSource, /BASELINE_openAuth/);
  assert.match(css, /fav-btn\[data-tip\][\s\S]*position:relative/);
  assert.match(css, /fav-btn\[data-tip\]::after\{[\s\S]*position:absolute|fav-btn\[data-tip\]::after\{/);
  assert.match(css, /fav-btn\.tip-show\[data-tip\]::after\{[\s\S]*opacity:1/);
  assert.doesNotMatch(shared, /recipe-favourite-caption/);
  assert.doesNotMatch(css, /recipe-favourite-caption/);
});


test('recipe title typography is one sitewide Skincare-reference contract', () => {
  assert.match(css, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(css, /recipe-title-row > h3\{[\s\S]*font-family:var\(--font-soft\);[\s\S]*font-size:28px;[\s\S]*line-height:1\.25;/);
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

test('preauthored Food shells receive recipe-specific controls from shared runtime only', () => {
  assert.match(shared,/if\(isOatPorridge\)[\s\S]*if\(!oatToggleEl\)[\s\S]*recipe-control-row--oat/);
  assert.match(shared,/if\(hasThickness && !thickSlider\)[\s\S]*recipe-control-row--thickness-slider/);
  assert.match(shared,/className = 'glide-slider thickness-slider'/);
  assert.doesNotMatch(shared,/thickSelect|thickness-select/);
});


test('Food and Skincare primary cards and tabs have one sitewide visual owner', () => {
  assert.match(sitewideCss, /body:not\(\[data-app="home"\]\) \.card,[\s\S]*background-color:var\(--bl-surface-card-solid\)!important/);
  assert.match(sitewideCss, /body:not\(\[data-app="home"\]\) \.tab,[\s\S]*background-color:var\(--bl-surface-control-solid\)!important/);
  assert.match(sitewideCss, /\.tab\[aria-selected="true"\],[\s\S]*background-color:var\(--bl-surface-active-solid\)!important/);
  assert.doesNotMatch(foodCss, /\.tab(?:\:hover|\[aria-selected="true"\])?\s*\{[^}]*\bbackground(?:-color|-image)?\s*:/);
  assert.doesNotMatch(skincareCss, /\.tab(?:\:hover|\[aria-selected="true"\])?\s*\{[^}]*\bbackground(?:-color|-image)?\s*:/);
  assert.doesNotMatch(skincareCss, /data-initial-section="recipes"[^\n]*\.tabs \.tab[^\n]*(?:background|filter)/);
  assert.doesNotMatch(foodCss, /\.card\s*\{[^}]*\bbackground\s*:/);
  assert.doesNotMatch(skincareCss, /\.card\s*\{[^}]*\bbackground\s*:/);
  assert.doesNotMatch(foodCss, /\.card::(?:before|after)\s*\{/);
  assert.doesNotMatch(skincareCss, /\.card::(?:before|after)\s*\{/);
});

test('Food and Skincare single-authority assets use refreshed cache keys', () => {
  assert.match(foodHtml, /baseline-food-approach\.css\?v=FOOD_SINGLE_VISUAL_AUTHORITY_20261016_1/);
  assert.match(skincareHtml, /baseline-natural-skincare\.css\?v=SKINCARE_SINGLE_VISUAL_AUTHORITY_20261016_1/);
  assert.match(foodHtml, /baseline-shared\.js\?v=SITEWIDE_SHARED_JS_20261021_1/);
  assert.match(skincareHtml, /baseline-shared\.js\?v=SITEWIDE_SHARED_JS_20261021_1/);
});

test('recipe back navigation is shared, in-shell and authored consistently', () => {
  assert.match(shared, /closest\('\.back-btn'\)/);
  assert.match(shared, /e\.preventDefault\(\)[\s\S]*e\.stopPropagation\(\)[\s\S]*showAll\(\{ silentHistory:false \}\)/);
  assert.doesNotMatch(skincareHtml, /back-btn"\s+onclick="BASELINE_showAllRecipes\(\)"/);
  assert.equal((skincareHtml.match(/<button class="back-btn" type="button">Back To Recipes<\/button>/g) || []).length, 12);
  for (const {name,html} of foodRecipeBlocks()) {
    assert.match(html, /<a class="back-btn" href="\/baseline-food-approach\/recipes">Back To Recipes<\/a>/, name+' canonical back link');
  }
});

test('recipe overview return cannot leave first-paint tab state pinned', () => {
  assert.match(shared, /function selectTab\(id, opts=\{\}\)[\s\S]*removeAttribute\('data-initial-section'\)/);
  assert.match(shared, /if\(id !== 'recipes'\)[\s\S]*removeAttribute\('data-initial-recipe-route'\)/);
  assert.match(shared, /function showAll\(opts=\{\}\)[\s\S]*activateRecipesTabSilently\(\)/);
  assert.match(foodHtml, /id="baseline-recipe-route-first-paint"/);
  assert.doesNotMatch(foodHtml, /id="baseline-food-route-first-paint"/);
  assert.equal((foodHtml.match(/id="baseline-recipe-route-first-paint"/g) || []).length, 1);
  assert.match(foodHtml, /data-initial-section',t/);
  assert.match(foodHtml, /ingredient-library/);
  assert.match(foodHtml, /diet-log/);
  assert.doesNotMatch(foodHtml, /\/sitewide\/js\/baseline-tabs\.js/);
  assert.doesNotMatch(skincareHtml, /\/sitewide\/js\/baseline-tabs\.js/);
});


test('thickness slider is the sole sitewide thickness control and oat choices expose selected state', () => {
  assert.doesNotMatch(shared, /thickSelect|className\s*=\s*['"]thickness-select|<option value="thin">Thin<\/option>/);
  assert.doesNotMatch(css, /\.thickness-select|\.thickness-label/);
  assert.match(shared, /className = 'glide-slider thickness-slider'/);
  assert.match(shared, /oatBtnJumbo\.setAttribute\('aria-pressed'/);
  assert.match(shared, /oatBtnPorridge\.setAttribute\('aria-pressed'/);
  assert.match(css, /Oat choice uses the same selected-state language as recipe subtabs/);
  assert.match(css, /\.oat-option\.is-active/);
  assert.match(css, /recipe-control-row--thickness-slider[\s\S]*calc\(50% - 7px\)/);
});


test('system stylesheets contain no competing recipe presentation authority', () => {
  const forbidden = /(?:\.recipe-(?:actions|title-row|meta-row|viewbar|subtabs|subtab|adjustments|option-strip|formula-controls|control-row|details-intro|detail-block|edit-options|ingredients-heading)|#recipes\.recipe-|\.glide-|\.variant-(?:tab|switcher)|\.print-btn|\.back-btn|\.scale-toggle|\.scale-apply|\.multiplier\b)/;
  assert.doesNotMatch(foodCss, forbidden, 'Food stylesheet must not own recipe presentation');
  assert.doesNotMatch(skincareCss, forbidden, 'Skincare stylesheet must not own recipe presentation');
  assert.match(skincareCss, /\.recipe-comedogenic-rating/, 'Skincare may retain content-specific metadata styling only');
  assert.match(css, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.doesNotMatch(css, /Final hard|hard override|Contract restore|Operational hard override|ACTUAL-FIX|URGENT-TAB-FIX/i);
});


test('sitewide primitives do not contain recipe-specific presentation overrides', () => {
  const sitewideCss = fs.readFileSync('sitewide/css/baseline-sitewide.css', 'utf8');
  assert.doesNotMatch(sitewideCss, /Recipe area: warmer\/deeper|Recipe Scale By Ingredient/);
  assert.doesNotMatch(sitewideCss, /body\[data-app\]\s+#recipes\s+button:not\(/);
  assert.doesNotMatch(sitewideCss, /body\[data-app\]\s+#recipes\s+\.(?:recipe-page|glide-controller|recipe-controls|scale-block)\s*[,\{]/);
  assert.match(css, /Canonical recipe surface/);
});
