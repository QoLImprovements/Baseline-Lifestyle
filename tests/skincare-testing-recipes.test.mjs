import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');
const recipeRuntime = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-runtime-20261004.js', 'utf8');
const skincareCss = fs.readFileSync('systems/baseline-natural-skincare/css/baseline-natural-skincare.css', 'utf8');
const recipeCss = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const profiles = fs.readFileSync('sitewide/js/baseline-ingredient-profiles.js', 'utf8');
const htaccess = fs.readFileSync('.htaccess', 'utf8');
const testServer = fs.readFileSync('tests/support/production-static-server.cjs', 'utf8');
const lipBalmStart = html.indexOf('<!-- Recipe 12 -->');
const lipBalmEnd = html.indexOf('<!-- INGREDIENT LIBRARY -->');
const lipBalm = html.slice(lipBalmStart, lipBalmEnd);

const promoted = [
  ['r8', 'calming-shave-gel', 'Calming Shave Gel'],
  ['r9', 'tooth-polishing-powder', 'Tooth Polishing Powder'],
  ['r10', 'microcurrent-glide-gel', 'Microcurrent Glide Gel'],
  ['r12', 'comfort-barrier-balm', 'Comfort Barrier Balm']
];

const redirectCases = [
  ['testing-shaving-gel.html', '/baseline-natural-skincare/recipes/calming-shave-gel'],
  ['testing-natural-tooth-brightening-powder.html', '/baseline-natural-skincare/recipes/tooth-polishing-powder'],
  ['testing-microcurrent-conductive-gel.html', '/baseline-natural-skincare/recipes/microcurrent-glide-gel'],
  ['hydrating-conductive-mist.html', '/baseline-natural-skincare/recipes/microcurrent-glide-gel']
];

test('Skincare catalogue authors permanent and newly added recipe records directly', () => {
  for (const [id, slug, title] of promoted) {
    assert.match(html, new RegExp(`data-recipe-id="${id}" href="/baseline-natural-skincare/recipes/${slug}"[^>]*>${title} —`));
  }
  assert.match(html, /data-recipe-id="r13" href="\/baseline-natural-skincare\/recipes\/clarity-face-mask">Clarity Face Mask —/);
  assert.match(html, /data-recipe-id="r14" href="\/baseline-natural-skincare\/recipes\/sebum-compatible-cleansing-oil">Sebum-Compatible Cleansing Oil —/);
  assert.match(html, /data-recipe-id="r15" href="\/baseline-natural-skincare\/recipes\/skin-soft-massage-oil">Skin Soft Massage Oil —/);
  assert.doesNotMatch(html, /testing-soap-free-powdered-hair-wash|Soap-Free Powdered Hair Wash|data-recipe-id="r11"/);
  assert.match(html, /data-recipe-id="r12" href="\/baseline-natural-skincare\/recipes\/comfort-barrier-balm">Comfort Barrier Balm —/);
});

test('Skincare recipe catalogue is authored as alphabetical categories with alphabetical recipes', () => {
  const landingStart = html.indexOf('<div class="recipe-landing" id="recipes-landing">');
  const landingEnd = html.indexOf('<div class="recipes">', landingStart);
  const landing = html.slice(landingStart, landingEnd);

  const categories = [...landing.matchAll(/<h4>([^<]+)<\/h4>\s*<ul>([\s\S]*?)<\/ul>/g)].map((match) => ({
    name: match[1].trim(),
    recipes: [...match[2].matchAll(/<a class="recipe-open"[^>]*>([^<]+)<\/a>/g)]
      .map((item) => item[1].split(' — ')[0].trim())
  }));

  assert.deepEqual(categories.map((category) => category.name), [
    'Balms',
    'Face Masks',
    'Humectants',
    'Massage Oils',
    'Microcurrent Gels',
    'Moisturisers',
    'Oil Cleansers',
    'Oral Care',
    'Shaving Gels'
  ]);
  for (const category of categories) {
    assert.deepEqual(category.recipes, [...category.recipes].sort((a,b) => a.localeCompare(b)), category.name);
  }
  assert.deepEqual(categories.find((category) => category.name === 'Balms')?.recipes, ['Comfort Barrier Balm','Protective Touch Balm']);
  assert.deepEqual(categories.find((category) => category.name === 'Oil Cleansers')?.recipes, ['Anhydrous Oil Cleanser','Sebum-Compatible Cleansing Oil']);
  assert.doesNotMatch(landing, /<h4>Recipes<\/h4>|<h4>Testing<\/h4>/);

  assert.doesNotMatch(html, /skincare-recipe-bootstrap-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-navigation-20260906\.js/);
  assert.doesNotMatch(html, /skincare-slider-cleanup-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-entry-guard-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-finalise-20260906\.js/);
});
test('Comfort Barrier Balm is a permanent recipe with a canonical route and legacy redirect', () => {
  assert.match(html, /data-recipe-slug="comfort-barrier-balm" id="r12"/);
  assert.doesNotMatch(lipBalm, /data-category="Testing"|\bTesting\b/);
  assert.match(html, /<h3>Comfort Barrier Balm<\/h3>/);
  assert.match(html, /class="recipe-open" data-recipe-id="r12" href="\/baseline-natural-skincare\/recipes\/comfort-barrier-balm"/);
  assert.match(htaccess, /testing-lip-balm\/\?\$ \/baseline-natural-skincare\/recipes\/comfort-barrier-balm \[R=301,L\]/);
  assert.match(testServer, /'\/baseline-natural-skincare\/recipes\/testing-lip-balm', '\/baseline-natural-skincare\/recipes\/comfort-barrier-balm'/);
  assert.match(htaccess, /RewriteRule \^baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html/);
});
test('new and altered Skincare recipes do not add one-off Recipe-tab intro notes', () => {
  for (const slug of ['anhydrous-oil-cleanser','restorative-hydration-layer','clarity-face-mask','sebum-compatible-cleansing-oil','skin-soft-massage-oil']) {
    const start = html.indexOf(`data-recipe-slug="${slug}"`);
    const ingredients = html.indexOf('<h4 class="recipe-ingredients-heading"', start);
    const block = html.slice(start, ingredients > start ? ingredients : start + 18000);
    assert.doesNotMatch(block, /<p class="note">/);
  }
});

test('Oil Cleanser has no Vitamin E and authors Olive Oil as a zero-default conditional ingredient', () => {
  const start = html.indexOf('data-recipe-slug="anhydrous-oil-cleanser"');
  const end = html.indexOf('<!-- Recipe 3 -->', start);
  const cleanser = html.slice(start, end);
  assert.doesNotMatch(cleanser, /Vitamin E|ing-vitamin-e|Optional antioxidant/);
  assert.match(cleanser, /class="r2-olive-row" hidden aria-hidden="true"/);
  assert.match(cleanser, /class="amt r2-olive-amt"[^>]*>0 ml<\/span>/);
  assert.doesNotMatch(cleanser, /0 ml \(≈ 0 drops\)/);
  assert.match(recipeRuntime, /oliveRow\.hidden = !oliveIncluded/);
  assert.match(recipeRuntime, /oliveIncluded = olive > 0/);
});

test('recipe interaction module loads directly without post-load repair layers', () => {
  assert.doesNotMatch(html, /skincare-recipe-bootstrap-20260906\.js/);
  assert.match(html, /skincare-recipe-ux-20260906\.js/);
  assert.doesNotMatch(html, /skincare-slider-cleanup-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-entry-guard-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-finalise-20260906\.js/);
  assert.doesNotMatch(recipeUx, /createElement|MutationObserver|setTimeout|requestAnimationFrame/);
});
test('every Skincare Guidance tab has separate expanded Usage and Storage sections', () => {
  const recipes = [...html.matchAll(/data-recipe-slug="([^"]+)" id="(r\d+)"/g)].map((match) => ({
    slug:match[1],
    id:match[2],
    start:match.index
  }));

  assert.equal(recipes.length, 12);

  recipes.forEach((recipe, index) => {
    const end = index + 1 < recipes.length
      ? recipes[index + 1].start
      : html.indexOf('<!-- INGREDIENT LIBRARY -->', recipe.start);
    const block = html.slice(recipe.start, end);
    const headings = [...block.matchAll(/<h4 class="recipe-view-hidden" data-recipe-view-group="guidance">([^<]+)<\/h4>/g)]
      .map((match) => match[1].trim());

    assert.deepEqual(headings, ['Usage','Storage','Notes'], recipe.slug);
    assert.doesNotMatch(block, /Storage &amp; Use|>Storage & Use</, recipe.slug);

    const usageStart = block.indexOf('data-recipe-view-group="guidance">Usage</h4>');
    const storageStart = block.indexOf('data-recipe-view-group="guidance">Storage</h4>');
    const notesStart = block.indexOf('data-recipe-view-group="guidance">Notes</h4>');
    const usage = block.slice(usageStart, storageStart);
    const storage = block.slice(storageStart, notesStart);

    assert.ok((usage.match(/<li>/g) || []).length >= 2, recipe.slug + ' expanded Usage');
    assert.ok((storage.match(/<li>/g) || []).length >= 2, recipe.slug + ' expanded Storage');
  });

  const hydration = html.slice(
    html.indexOf('data-recipe-slug="restorative-hydration-layer"'),
    html.indexOf('data-recipe-slug="clarity-face-mask"')
  );
  assert.match(hydration, /water-based, unpreserved formula/i);
  assert.match(hydration, /Do not rely on refrigeration alone/i);

  const shave = html.slice(
    html.indexOf('data-recipe-slug="calming-shave-gel"'),
    html.indexOf('data-recipe-slug="tooth-polishing-powder"')
  );
  assert.match(shave, /water-based, unpreserved gel/i);

  const microcurrent = html.slice(
    html.indexOf('data-recipe-slug="microcurrent-glide-gel"'),
    html.indexOf('data-recipe-slug="comfort-barrier-balm"')
  );
  assert.match(microcurrent, /water-based, unpreserved gel/i);
});

test('Skincare Details is authored hidden before JavaScript and toggled by the shared recipe owner', () => {
  assert.equal((html.match(/class="recipe-details-intro recipe-view-hidden" data-recipe-view-group="details"/g) || []).length, 12);
  assert.match(shared, /const visible = next === 'show-all' \|\| group === next/);
  assert.match(shared, /el\.hidden = !visible/);
  assert.doesNotMatch(recipeUx, /detailsMarkup|createElement/);
  assert.match(recipeCss, /recipe-details-intro\[hidden\][\s\S]*display:none!important/);
});

test('sitewide recipe slider template owns equal widths, Overall Feel and duplicate-caption suppression', () => {
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /qsa\(':scope > \.glide-control-stack', controller\)/);
  assert.match(shared, /controller\.insertBefore\(child, stack\)/);
  assert.match(shared, /controller\.dataset\.sliderCount = String\(controls\.length > 1 \? 2 : 1\)/);
  assert.match(shared, /glide-breakdown.*aria-hidden/s);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(recipeCss, /BASELINE-RECIPE-SINGLE-AUTHORITY-20261013/);
  assert.match(recipeCss, /\[data-slider-count="2"\][\s\S]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(recipeCss, /glide-value-bubble[\s\S]*display:none/);
  assert.match(recipeCss, /glide-scale[\s\S]*grid-template-columns:max-content max-content/);
  assert.match(recipeCss, /glide-scale > span[\s\S]*white-space:nowrap/);
  assert.match(recipeCss, /glide-control-explainer[\s\S]*grid-column:1 \/ -1/);
  assert.doesNotMatch(recipeUx, /function updateBubble\(/);
  assert.doesNotMatch(recipeUx, /createElement\('output'\)|createElement/);
  assert.equal((html.match(/\brecipe-slider-template\b/g) || []).length, 6);
  assert.equal((html.match(/class="slider-save-row"/g) || []).length, 6);
  assert.equal((html.match(/class="glide-explain-title">Overall Feel<\/div>/g) || []).length, 6);
  assert.equal((html.match(/class="glide-breakdown" hidden aria-hidden="true"/g) || []).length, 5);
  assert.doesNotMatch(html, /class="glide-control-stack"/);
});

test('Skincare slider settings use the protected server resource without browser persistence', () => {
  assert.doesNotMatch(recipeRuntime, /localStorage|sessionStorage|indexedDB|BaselineSkincareSavedData/);
  assert.match(recipeRuntime, /SLIDER_API='\/systems\/baseline-natural-skincare\/api\/skincare_data\.php'/);
  assert.match(recipeRuntime, /action:'replace_sliders'/);
  assert.match(recipeRuntime, /expectedRevision:sliderServerState\.revision/);
  assert.match(recipeRuntime, /Log in to save slider position/);
  assert.match(recipeRuntime, /BASELINE_auth&&window\.BASELINE_auth\.onChange/);
});

test('Anhydrous Oil Cleanser uses two continuous controls instead of duplicate variant tabs', () => {
  const start = html.indexOf('data-recipe-slug="anhydrous-oil-cleanser"');
  const end = html.indexOf('<!-- Recipe 3 -->', start);
  const cleanser = html.slice(start, end);
  assert.doesNotMatch(cleanser, /variant-switcher|variant-tab|variant-panel|data-recipe-variant-detail/);
  assert.match(cleanser, /id="r2CleansingPull"[^>]*max="18"[^>]*min="0"[^>]*value="10"/);
  assert.match(cleanser, /id="r2BarrierRichness"[^>]*max="30"[^>]*min="0"[^>]*value="0"/);
  assert.match(cleanser, /Reactive is the 0% castor \/ 0% olive point/);
  assert.match(cleanser, /Balanced is the 10% castor \/ 0% olive reference point/);
  assert.match(cleanser, /Enhanced Barrier is the 10% castor \/ 18% olive reference point/);
});

test('Restorative Hydration Layer keeps its name and gains glycerin plus inulin controls', () => {
  const start = html.indexOf('data-recipe-slug="restorative-hydration-layer"');
  const end = html.indexOf('data-recipe-slug="clarity-face-mask"', start);
  const hydration = html.slice(start, end);
  assert.match(hydration, /<h3>Restorative Hydration Layer<\/h3>/);
  assert.match(hydration, /id="r7Glycerin"[^>]*max="30"[^>]*min="10"[^>]*value="20"/);
  assert.match(hydration, /id="r7Inulin"[^>]*max="5"[^>]*min="0"[^>]*value="0"/);
  assert.match(hydration, /Filtered Water/);
  assert.match(hydration, /Chicory-Root Inulin/);
});

test('new skincare formulas are authored as normal canonical recipes', () => {
  assert.match(html, /data-recipe-slug="clarity-face-mask" id="r13"/);
  assert.match(html, /30 g[\s\S]*Colloidal Oatmeal/);
  assert.match(html, /12 g[\s\S]*Marshmallow Root Powder/);
  assert.match(html, /12 g[\s\S]*White Kaolin Clay/);
  assert.match(html, /6 g[\s\S]*Chicory-Root Inulin/);

  assert.match(html, /data-recipe-slug="sebum-compatible-cleansing-oil" id="r14"/);
  assert.match(html, /75 ml[\s\S]*Jojoba Oil/);
  assert.match(html, /25 ml[\s\S]*Safflower Oil/);

  assert.match(html, /data-recipe-slug="skin-soft-massage-oil" id="r15"/);
  assert.match(html, /45 g[\s\S]*Olive Squalane/);
  assert.match(html, /35 g[\s\S]*Jojoba Oil/);
  assert.match(html, /20 g[\s\S]*Extra Virgin Coconut Oil/);
  assert.match(html, /id="r15Apricot"[^>]*max="20"[^>]*min="0"[^>]*value="0"/);
});

test('Anhydrous Massage Oil Blend is one olive-led recipe with no Avocado variant', () => {
  const start = html.indexOf('data-recipe-slug="anhydrous-massage-oil-blend"');
  const end = html.indexOf('data-recipe-slug="restorative-hydration-layer"', start);
  const massage = html.slice(start, end);
  assert.doesNotMatch(massage, /Avocado Blend|r6Avocado|r6-avocado|fractionated coconut|watermelon seed/i);
  assert.doesNotMatch(massage, /aria-label="Massage oil variants"|class="variant-switcher"/);
  assert.match(massage, /Jojoba remains fixed at 15%|jojoba remains fixed at 15%/i);
  assert.match(massage, /id="r6Glide"/);
  const fcoStart = html.indexOf('id="ing-fractionated-coconut"');
  const fcoEnd = html.indexOf('<div class="card" id="ing-watermelon">', fcoStart);
  const fcoCard = html.slice(fcoStart, fcoEnd);
  assert.doesNotMatch(fcoCard, /Anhydrous Massage Oil Blend/);
  assert.doesNotMatch(html, /function syncMassageAvocado|function getAvocadoFeel|function initMassageVariantTabs/);
});

test('Skincare recipe methods never instruct the viewer to operate optional sliders', () => {
  const methodBlocks = Array.from(html.matchAll(/<h4[^>]*>Method<\/h4>\s*<ol[^>]*>([\s\S]*?)<\/ol>/gi))
    .map(match => match[1]);
  assert.ok(methodBlocks.length > 0);
  for (const method of methodBlocks) {
    assert.doesNotMatch(method, /slider/i);
  }
});

test('method ingredient amount tags use the visible ingredient state as their source of truth', () => {
  assert.match(shared, /const activeVariantPanels=variantPanels\.filter/);
  assert.match(shared, /const methodScope=activeVariantPanels\[0\] \|\| recipeEl/);
  assert.match(shared, /qsa\('li',methodScope\)/);
  assert.match(shared, /delete el\.dataset\.methodTagKey/);
  assert.match(shared, /refreshMethodAmountsFromVisibleIngredients/);
  assert.match(shared, /slider\.addEventListener\('input'/);
  assert.match(shared, /slider\.addEventListener\('change'/);
  assert.match(shared, /\.slider-default-btn, \.slider-reset-btn/);
  assert.match(shared, /li\.dataset\.methodTagKey=key/);
  assert.match(shared, /pill\.dataset\.methodIngredientKey=entry\.key/);
  assert.match(shared, /wrap\.dataset\.methodAmounts='first-use'/);
  assert.match(shared, /function bestNaturalMatch\(entry\)/);
  assert.match(shared, /function bestExplicitMatch\(entry\)/);
  assert.doesNotMatch(shared, /const emittedMethodAmounts = new Set\(\)/);
});
test('Comfort Barrier Balm uses the shared slider/explainer structure and explicit first-use method steps', () => {
  assert.match(lipBalm, /class="[^"]*glide-controller[^"]*glide-controller--paired[^"]*recipe-slider-template[^"]*"/);
  assert.equal((lipBalm.match(/class="glide-control-main"/g) || []).length, 2);
  assert.match(lipBalm, /class="glide-control-explainer"/);
  assert.match(lipBalm, /class="glide-explain-title">Overall Feel<\/div>/);
  assert.doesNotMatch(lipBalm, /id="r12Reset"/);
  assert.doesNotMatch(lipBalm, /Adjust kokum to change|automatically compensates so mango \+ kokum/);
  assert.match(lipBalm, /data-method-step="3"[^>]*data-tip="Rich, firm butter/);
  assert.match(lipBalm, /data-method-step="3"[^>]*data-tip="Vegan wax/);
  assert.match(lipBalm, /data-method-step="4"[^>]*data-tip="Primary liquid oil/);
  assert.match(lipBalm, /data-method-step="4"[^>]*data-tip="Rich emollient oil/);
  assert.match(lipBalm, /data-method-step="4"[^>]*data-tip="Seed oil/);
  assert.match(lipBalm, /<li data-method-step="5"[^>]*>[\s\S]*?Vitamin E \(Tocopherol\)<\/a><\/li>/);
});

test('Comfort Barrier Balm default formula and slider compensation remain exactly 100 g', () => {
  const expected = [
    ['cocoa', '20'],
    ['mango', '15'],
    ['kokum', '10'],
    ['apricot', '25.5'],
    ['avocado', '15'],
    ['raspberry', '11'],
    ['candelilla', '3'],
    ['vitamin-e', '0.5']
  ];
  for (const [key, amount] of expected) {
    assert.match(lipBalm, new RegExp(`data-formula-key="${key}"[^>]*data-base-display="${amount} g"`));
  }
  assert.match(lipBalm, /id="r12ButterCharacter" min="5" max="15" step="0\.5"[^>]*value="10"/);
  assert.match(recipeUx, /const mango=25-kokum/);
  assert.match(lipBalm, /id="r12Structure" min="2" max="4" step="0\.25"[^>]*value="3"/);
  assert.match(recipeUx, /const apricot=28\.5-candelilla/);
});

test('Comfort Barrier Balm ingredients use canonical clean ingredient URLs with origin, records and conversions', () => {
  const ingredients = [
    ['ing-cocoa-butter', 'cocoa-butter'],
    ['ing-mango-butter', 'mango-butter'],
    ['ing-kokum-butter', 'kokum-butter'],
    ['ing-apricot-kernel-oil', 'apricot-kernel-oil'],
    ['ing-red-raspberry-seed-oil', 'red-raspberry-seed-oil'],
    ['ing-candelilla-wax', 'candelilla-wax']
  ];
  for (const [id, slug] of ingredients) {
    assert.match(lipBalm, new RegExp(`data-ingredient="${id}" href="/baseline-natural-skincare/ingredient-library/${slug}\\?filter=r12"`));
    assert.ok(html.includes(`id="${id}"`), `missing integrated ingredient card ${id}`);
    assert.match(shared, new RegExp(`'${id}':'${slug}'`));
    assert.match(profiles, new RegExp(`"${id}"\\s*:\\s*withDerived`));
  }
  assert.doesNotMatch(lipBalm, /class="ing-link"[^>]*href="#ing-/);
});

test('Skincare recipe sidebar is absent by structure, styling and shared navigation ownership', () => {
  assert.doesNotMatch(html, /id="side-nav"|class="[^"]*side-recipe-nav/);
  assert.doesNotMatch(skincareCss, /side-recipe-nav/);
  assert.doesNotMatch(shared, /side-recipe-nav|id="side-nav"/);
});

test('Skincare recipe ingredient links no longer author the obsolete hash navigation method', () => {
  const recipesStart = html.indexOf('<section class="section" id="recipes">');
  const ingredientsStart = html.indexOf('<section class="section" id="ingredients">');
  const recipesBlock = html.slice(recipesStart, ingredientsStart);
  assert.doesNotMatch(recipesBlock, /class="ing-link"[^>]*href="#ing-/);
  assert.match(shared, /if\(!isSkincare\) qsa\('#recipes a\.ing-link\[data-from-recipe\]\[data-ingredient\]'\)/);
});

test('changed Skincare runtime scripts remain valid JavaScript', () => {
  const files = [
    'sitewide/js/baseline-ingredient-profiles.js',
    'sitewide/js/baseline-shared.js',
    'systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js',
    'systems/baseline-natural-skincare/js/skincare-recipe-runtime-20261004.js',
  ];
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    assert.doesNotThrow(() => new vm.Script(source, { filename:file }), file + ' must parse');
  }
});

test('Skincare executable inline script blocks remain valid JavaScript', () => {
  const blocks = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => {
      const attrs = match[1] || '';
      if (/\bsrc\s*=/.test(attrs)) return false;
      const type = (/\btype\s*=\s*["']([^"']+)["']/i.exec(attrs) || [])[1] || '';
      return !type || /^(?:text|application)\/javascript$/i.test(type) || /^module$/i.test(type);
    });
  assert.ok(blocks.length > 0, 'expected executable inline Skincare scripts');
  blocks.forEach((match, index) => {
    assert.doesNotThrow(
      () => new vm.Script(match[2], { filename:`baseline-natural-skincare.inline-${index + 1}.js` }),
      `executable inline Skincare script ${index + 1} must parse`
    );
  });
});

test('main Skincare document loads the recipe UX runtime', () => {
  assert.match(html, /\/systems\/baseline-natural-skincare\/js\/skincare-recipe-ux-20260906\.js/);
});

test('promoted Skincare recipes are canonical in initial HTML', () => {
  assert.doesNotMatch(html, /\sid="r4"/);
  assert.doesNotMatch(html, /\sid="r5"/);
  for (const [id, slug] of [['r8','calming-shave-gel'],['r9','tooth-polishing-powder'],['r10','microcurrent-glide-gel'],['r12','comfort-barrier-balm']]) {
    assert.match(html, new RegExp(`data-recipe-slug="${slug}" id="${id}"`));
  }
  assert.doesNotMatch(recipeUx, /function promoteCards\(/);
  assert.match(htaccess, /testing-shaving-gel\/\?\$ \/baseline-natural-skincare\/recipes\/calming-shave-gel/);
  assert.match(htaccess, /testing-natural-tooth-brightening-powder\/\?\$ \/baseline-natural-skincare\/recipes\/tooth-polishing-powder/);
  assert.ok(htaccess.includes('testing-microcurrent-conductive-gel'));
  assert.ok(htaccess.includes('/baseline-natural-skincare/recipes/microcurrent-glide-gel'));
  assert.match(htaccess, /testing-lip-balm\/\?\$ \/baseline-natural-skincare\/recipes\/comfort-barrier-balm/);
});

test('permanent promoted recipes use final titles and formulations in the canonical parent document', () => {
  const shave = html.slice(html.indexOf('data-recipe-slug="calming-shave-gel"'), html.indexOf('data-recipe-slug="tooth-polishing-powder"'));
  const tooth = html.slice(html.indexOf('data-recipe-slug="tooth-polishing-powder"'), html.indexOf('data-recipe-slug="microcurrent-glide-gel"'));
  const microcurrent = html.slice(html.indexOf('data-recipe-slug="microcurrent-glide-gel"'), html.indexOf('data-recipe-slug="comfort-barrier-balm"'));
  assert.match(shave, /<h3>Calming Shave Gel<\/h3>/);
  assert.match(shave, /Slippery Elm Powder/);
  assert.match(shave, /Guar Gum/);
  assert.match(tooth, /<h3>Tooth Polishing Powder<\/h3>/);
  assert.match(tooth, /Kaolin/);
  assert.match(microcurrent, /<h3>Microcurrent Glide Gel<\/h3>/);
  assert.match(microcurrent, /Dead Sea Salt/);
});

test('retired and Testing URLs redirect to permanent promoted URLs without standalone redirect documents', () => {
  for (const [file, target] of redirectCases) {
    const slug=file.replace(/\.html$/,'');
    assert.ok(htaccess.includes(slug), slug + ' redirect must be server-owned');
    assert.ok(htaccess.includes(target), slug + ' redirect target');
  }
});

test('removed powdered hair wash is absent from Skincare recipe surfaces', () => {
  assert.doesNotMatch(html, /testing-soap-free-powdered-hair-wash|Soap-Free Powdered Hair Wash|data-recipe-id="r11"|id="r11"/);
  assert.doesNotMatch(recipeCss, /testing-soap-free-powdered-hair-wash/);
});

test('Recipes and My Routine remain separate section siblings', () => {
  const recipesStart = html.indexOf('<section class="section" id="recipes">');
  const ingredientsStart = html.indexOf('<section class="section" id="ingredients">');
  const supportStart = html.indexOf('<section class="section" id="support">');
  const routineStart = html.indexOf('<section class="section" id="routine">');
  assert.ok(recipesStart >= 0 && ingredientsStart > recipesStart, 'Recipes must end before Ingredient Library');
  assert.ok(supportStart > ingredientsStart, 'Skin Support must follow Ingredient Library');
  assert.ok(routineStart > supportStart, 'My Routine must remain outside Recipes and Skin Support');
  const recipesBlock = html.slice(recipesStart, ingredientsStart);
  assert.equal((recipesBlock.match(/<section\b/g) || []).length, 1, 'Recipes must contain one section opening');
  assert.equal((recipesBlock.match(/<\/section>/g) || []).length, 1, 'Recipes must contain one matching section close');
});

test('Skincare document and Recipes block keep balanced div structure', () => {
  const withoutExecutableBodies = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
  assert.equal(
    (withoutExecutableBodies.match(/<div\b/gi) || []).length,
    (withoutExecutableBodies.match(/<\/div\s*>/gi) || []).length,
    'Skincare document must not leave div containers open'
  );

  const recipesStart = withoutExecutableBodies.indexOf('<section class="section" id="recipes">');
  const ingredientsStart = withoutExecutableBodies.indexOf('<section class="section" id="ingredients">');
  const recipesBlock = withoutExecutableBodies.slice(recipesStart, ingredientsStart);
  assert.equal(
    (recipesBlock.match(/<div\b/gi) || []).length,
    (recipesBlock.match(/<\/div\s*>/gi) || []).length,
    'Recipes must close its layout containers before Ingredient Library'
  );
});

test('Natural Skincare navigation keeps public clean URLs in the canonical shared router', () => {
  assert.match(shared, /'baseline-natural-skincare\.html': \{ base:'\/baseline-natural-skincare', defaultTab:'system'/);
  assert.match(shared, /'baseline-natural-skincare\.html':'\/baseline-natural-skincare\/system'/);
  assert.match(shared, /return '\/baseline-natural-skincare\/' \+ String\(skincareRoute\[1\] \|\| 'system'\)\.toLowerCase\(\);/);
  assert.doesNotMatch(shared, /\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html#tab=/);
  assert.doesNotMatch(html, /baseline-tabs\.js/);
});

test('leaving Skincare My Routine clears bootstrap-only routine visibility flags in the canonical tab authority', () => {
  assert.match(shared, /dataset\.app === 'skin' && id !== 'routine'/);
  assert.match(shared, /removeAttribute\('data-initial-skincare-tab'\)/);
  assert.match(shared, /removeAttribute\('data-initial-routine-view'\)/);
});

test('nested Skincare and Fitness My Routine clean routes are server-routed to their canonical applications', () => {
  assert.match(htaccess, /baseline-natural-skincare\/my-routine\/\(log\|summary\|plan\|public\)/);
  assert.match(htaccess, /baseline-fitness\/my-routine\/\(log\|summary\|public\)/);
  assert.match(htaccess, /baseline-fitness\/my-routine\/plan\/\(calisthenics\|cardio\|other\|sports\)/);
});
