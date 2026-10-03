import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const tabs = fs.readFileSync('sitewide/js/baseline-tabs.js', 'utf8');
const navigation = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');
const skincareCss = fs.readFileSync('systems/baseline-natural-skincare/css/baseline-natural-skincare.css', 'utf8');
const recipeCss = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const profiles = fs.readFileSync('sitewide/js/baseline-ingredient-profiles.js', 'utf8');
const htaccess = fs.readFileSync('.htaccess', 'utf8');
const testServer = fs.readFileSync('tests/support/production-static-server.cjs', 'utf8');
const standaloneMassage = fs.readFileSync('systems/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend.html', 'utf8');
const lipBalmStart = html.indexOf('<!-- Testing Recipe 12 -->');
const lipBalmEnd = html.indexOf('<!-- INGREDIENT LIBRARY -->');
const lipBalm = html.slice(lipBalmStart, lipBalmEnd);

const promoted = [
  ['r8', 'calming-shave-gel', 'Calming Shave Gel'],
  ['r9', 'tooth-polishing-powder', 'Tooth Polishing Powder'],
  ['r10', 'microcurrent-glide-gel', 'Microcurrent Glide Gel']
];

const redirectCases = [
  ['testing-shaving-gel.html', '/baseline-natural-skincare/recipes/calming-shave-gel'],
  ['testing-natural-tooth-brightening-powder.html', '/baseline-natural-skincare/recipes/tooth-polishing-powder'],
  ['testing-microcurrent-conductive-gel.html', '/baseline-natural-skincare/recipes/microcurrent-glide-gel'],
  ['hydrating-conductive-mist.html', '/baseline-natural-skincare/recipes/microcurrent-glide-gel']
];

test('promoted skincare recipes are in the main catalogue under permanent names', () => {
  for (const [id, slug, title] of promoted) {
    assert.match(navigation, new RegExp(`\\['${id}','${slug}','${title}'`));
  }
  assert.match(navigation, /Microcurrent Glide Gel','water-based conductive gel with sustained glide for microcurrent treatment\.'/);
  assert.match(navigation, /Tooth Polishing Powder','kaolin, sage and peppermint powder for occasional surface-stain removal\.'/);
  assert.doesNotMatch(navigation, /testing-soap-free-powdered-hair-wash|Soap-Free Powdered Hair Wash|\['r11'/);
  assert.match(navigation, /\['r12','testing-lip-balm','Lip\/ balm'/);
});

test('Skincare recipe catalogue is canonical before and after runtime enhancement', () => {
  assert.match(html, /id="recipes-landing"[\s\S]*?<h4>Recipes<\/h4>[\s\S]*?Calming Shave Gel — slippery elm, glycerin, guar gum and jojoba shaving gel\./);
  assert.match(html, /Microcurrent Glide Gel — water-based conductive gel with sustained glide for microcurrent treatment\./);
  assert.match(html, /Tooth Polishing Powder — kaolin, sage and peppermint powder for occasional surface-stain removal\./);
  assert.match(html, /id="recipes-landing"[\s\S]*?<h4>Testing<\/h4>[\s\S]*?Lip\/ balm — adjustable butter character and structure with a balanced 100 g default formula\./);
  assert.doesNotMatch(html, /skincare-recipe-bootstrap-20260906\.js/);
  assert.doesNotMatch(html, /skincare-slider-cleanup-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-entry-guard-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-finalise-20260906\.js/);
  assert.match(shared, /const isSkincareRecipeCollection = routePageFileFromPath/);
  assert.match(shared, /if\(isSkincareRecipeCollection\) return;/);
});

test('Lip/ balm is embedded in the canonical Skincare shell', () => {
  assert.match(html, /data-category="Testing" data-recipe-slug="testing-lip-balm" id="r12"/);
  assert.match(html, /<h3>Lip\/ balm<\/h3>/);
  assert.match(html, /class="recipe-open" data-recipe-id="r12" href="\/baseline-natural-skincare\/recipes\/testing-lip-balm"/);
  assert.doesNotMatch(html, /baseline-lip-balm-route-prefetch/);
  assert.doesNotMatch(recipeUx, /testing-lip-balm\.html/);
  assert.doesNotMatch(recipeUx, /loadExternalRecipeForCurrentPath|installExternalRecipePlaceholder|document\.importNode\(sourceCard,true\)/);
  assert.doesNotMatch(htaccess, /baseline-natural-skincare\/recipes\/testing-lip-balm.*testing-lip-balm\.html/);
  assert.match(htaccess, /RewriteRule \^baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html/);
  assert.doesNotMatch(testServer, /match\[1\] === 'testing-lip-balm'/);
  assert.match(testServer, /if \(match\) return '\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html';/);
});
test('recipe interaction module loads directly without post-load repair layers', () => {
  assert.doesNotMatch(html, /skincare-recipe-bootstrap-20260906\.js/);
  assert.match(html, /skincare-recipe-ux-20260906\.js/);
  assert.doesNotMatch(html, /skincare-slider-cleanup-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-entry-guard-20260906\.js/);
  assert.doesNotMatch(html, /skincare-recipe-finalise-20260906\.js/);
  assert.doesNotMatch(recipeUx, /createElement|MutationObserver|setTimeout|requestAnimationFrame/);
});
test('Skincare Details is authored hidden before JavaScript and only toggled by interaction code', () => {
  assert.equal((html.match(/class="recipe-details-intro recipe-view-hidden" data-recipe-view-group="details"/g) || []).length, 9);
  assert.match(recipeUx, /details\.hidden=!showDetails/);
  assert.doesNotMatch(recipeUx, /detailsMarkup|createElement/);
  assert.match(skincareCss, /recipe-details-intro\[hidden\]\{display:none!important\}/);
  assert.match(skincareCss, /recipe-details-intro\[data-recipe-view-group="details"\]:not\(\.recipe-view-hidden\):not\(\[hidden\]\)\{display:grid!important\}/);
});

test('sitewide recipe slider template owns equal widths, Overall Feel and duplicate-caption suppression', () => {
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /qsa\(':scope > \.glide-control-stack', controller\)/);
  assert.match(shared, /controller\.insertBefore\(child, stack\)/);
  assert.match(shared, /controller\.dataset\.sliderCount = String\(controls\.length > 1 \? 2 : 1\)/);
  assert.match(shared, /glide-breakdown.*aria-hidden/s);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(recipeCss, /BASELINE-UNIVERSAL-RECIPE-SLIDER-WIDTH-CAPTION-20260920/);
  assert.match(recipeCss, /\[data-slider-count="2"\][\s\S]*grid-template-columns:minmax\(0,1fr\) minmax\(0,1fr\)/);
  assert.match(recipeCss, /glide-value-bubble[\s\S]*display:none !important/);
  assert.match(recipeCss, /glide-scale > span[\s\S]*white-space:nowrap !important/);
  assert.match(recipeCss, /glide-control-explainer[\s\S]*grid-column:1 \/ -1/);
  assert.doesNotMatch(recipeUx, /function updateBubble\(/);
  assert.doesNotMatch(recipeUx, /createElement\('output'\)|createElement/);
  assert.equal((html.match(/\brecipe-slider-template\b/g) || []).length, 7);
  assert.equal((html.match(/class="slider-save-row"/g) || []).length, 7);
  assert.equal((html.match(/class="glide-explain-title">Overall Feel<\/div>/g) || []).length, 7);
  assert.equal((html.match(/class="glide-breakdown" hidden aria-hidden="true"/g) || []).length, 6);
  assert.doesNotMatch(html, /class="glide-control-stack"/);
});

test('Anhydrous Massage Oil Blend is one olive-led recipe with no Avocado variant', () => {
  const start = html.indexOf('data-recipe-slug="anhydrous-massage-oil-blend"');
  const end = html.indexOf('data-recipe-slug="restorative-hydration-layer"', start);
  const massage = html.slice(start, end);
  for (const source of [massage, standaloneMassage]) {
    assert.doesNotMatch(source, /Avocado Blend|r6Avocado|r6-avocado|fractionated coconut|watermelon seed/i);
  }
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
test('Lip/ balm uses the shared slider/explainer structure and explicit first-use method steps', () => {
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

test('Lip/ balm default formula and slider compensation remain exactly 100 g', () => {
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

test('Lip/ balm ingredients use canonical clean ingredient URLs with origin, records and conversions', () => {
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

test('Skincare recipe sidebar is absent by structure, styling and navigation ownership', () => {
  assert.doesNotMatch(html, /id="side-nav"|class="[^"]*side-recipe-nav/);
  assert.doesNotMatch(navigation, /side-nav|side-recipe-nav/);
  assert.doesNotMatch(skincareCss, /side-recipe-nav/);
  assert.match(shared, /const allowSideNav = routePageFileFromPath\(location\.pathname \|\| ''\) !== 'baseline-natural-skincare\.html'/);
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
    'systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js'
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
  assert.doesNotMatch(html, /data-recipe-id="r4"|data-recipe-id="r5"/);
  assert.match(html, /data-recipe-slug="calming-shave-gel" id="r8"/);
  assert.match(html, /data-recipe-slug="microcurrent-glide-gel" id="r10"/);
  assert.doesNotMatch(html, /id="r8"[^>]*data-category="Testing"|data-category="Testing"[^>]*id="r8"/);
  assert.doesNotMatch(html, /id="r10"[^>]*data-category="Testing"|data-category="Testing"[^>]*id="r10"/);
  assert.doesNotMatch(recipeUx, /function promoteCards\(/);
  assert.match(recipeUx, /const REPLACED_IDS = Object\.freeze\(\{ r4:'r10', r5:'r8' \}\)/);
  assert.match(recipeUx, /'hydrating-conductive-mist':'r10'/);
  assert.match(recipeUx, /'testing-microcurrent-conductive-gel':'r10'/);
  assert.match(recipeUx, /'testing-shaving-gel':'r8'/);
  assert.match(recipeUx, /'testing-natural-tooth-brightening-powder':'r9'/);
});

test('permanent promoted recipe documents use final titles and formulations', () => {
  const shave = fs.readFileSync('systems/baseline-natural-skincare/recipes/calming-shave-gel.html', 'utf8');
  const tooth = fs.readFileSync('systems/baseline-natural-skincare/recipes/tooth-polishing-powder.html', 'utf8');
  const microcurrent = fs.readFileSync('systems/baseline-natural-skincare/recipes/microcurrent-glide-gel.html', 'utf8');

  assert.match(shave, /<h1>Calming Shave Gel<\/h1>/);
  assert.match(shave, /Slippery Elm Powder/);
  assert.match(shave, /Guar Gum/);

  assert.match(tooth, /<h1>Tooth Polishing Powder<\/h1>/);
  assert.match(tooth, /Kaolin, sage and peppermint powder for occasional surface-stain removal\./);
  assert.match(tooth, /not a bleaching or peroxide whitening treatment/i);

  assert.match(microcurrent, /<h1>Microcurrent Glide Gel<\/h1>/);
  assert.match(microcurrent, /Water-based conductive gel with sustained glide for microcurrent treatment\./);
  assert.match(microcurrent, /Dead Sea Salt/);
});

test('retired and Testing URLs redirect to permanent promoted URLs', () => {
  for (const [file, target] of redirectCases) {
    const redirect = fs.readFileSync(`systems/baseline-natural-skincare/recipes/${file}`, 'utf8');
    assert.ok(redirect.includes(`window.location.replace('${target}')`), `${file} must redirect to ${target}`);
    assert.ok(redirect.includes(`href="${target}"`), `${file} must expose the permanent fallback link`);
  }
});

test('removed powdered hair wash is absent from Skincare recipe surfaces', () => {
  assert.doesNotMatch(html, /testing-soap-free-powdered-hair-wash|Soap-Free Powdered Hair Wash|data-recipe-id="r11"|id="r11"/);
  assert.doesNotMatch(navigation, /testing-soap-free-powdered-hair-wash|Soap-Free Powdered Hair Wash|\['r11'/);
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

test('Natural Skincare navigation keeps public clean URLs instead of implementation-file hashes', () => {
  assert.match(shared, /'baseline-natural-skincare\.html': \{ base:'\/baseline-natural-skincare', defaultTab:'system'/);
  assert.match(shared, /'baseline-natural-skincare\.html':'\/baseline-natural-skincare\/system'/);
  assert.match(shared, /return '\/baseline-natural-skincare\/' \+ String\(skincareRoute\[1\] \|\| 'system'\)\.toLowerCase\(\);/);
  assert.match(tabs, /"baseline-natural-skincare\.html": \{ base:"\/baseline-natural-skincare", tabs:/);
  assert.doesNotMatch(shared, /\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html#tab=/);
  assert.doesNotMatch(tabs, /\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html.*hashTabs:true/);
});

test('leaving Skincare My Routine clears bootstrap-only routine visibility flags in both tab authorities', () => {
  assert.match(shared, /dataset\.app === 'skin' && id !== 'routine'/);
  assert.match(shared, /removeAttribute\('data-initial-skincare-tab'\)/);
  assert.match(shared, /removeAttribute\('data-initial-routine-view'\)/);
  assert.match(tabs, /dataset\.app === "skin" && id !== "routine"/);
  assert.match(tabs, /removeAttribute\("data-initial-skincare-tab"\)/);
  assert.match(tabs, /removeAttribute\("data-initial-routine-view"\)/);
});

test('nested Skincare and Fitness My Routine clean routes are repaired before the fallback exits', () => {
  assert.match(tabs, /function repairNestedRoutineRoute\(\)/);
  assert.match(tabs, /baseline-natural-skincare\\\/my-routine\(\?:\\\/\(\?:log\|summary\|plan\|public\)\)\?/);
  assert.match(tabs, /window\.BASELINE_selectTab\("routine", \{ silentHistory:true \}\)/);
  assert.match(tabs, /baseline-fitness\\\/my-routine/);
  assert.match(tabs, /window\.BASELINE_selectTab\("my-plan", \{ silentHistory:true \}\)/);
  const repairCall = tabs.indexOf('repairNestedRoutineRoute();');
  const disableExit = tabs.indexOf('if(shouldDisable()) return;', repairCall);
  assert.ok(repairCall >= 0 && disableExit > repairCall, 'nested route repair must run before the shared-owner early exit');
});
