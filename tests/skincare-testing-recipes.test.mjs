import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const tabs = fs.readFileSync('sitewide/js/baseline-tabs.js', 'utf8');
const navigation = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');

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
  assert.match(navigation, /Microcurrent Glide Gel','Water-based conductive gel with sustained glide for microcurrent treatment\.'/);
  assert.match(navigation, /Tooth Polishing Powder','Kaolin, sage and peppermint powder for occasional surface-stain removal\.'/);
  assert.match(navigation, /const TESTING=\[\['r11','testing-soap-free-powdered-hair-wash','Soap-Free Powdered Hair Wash'/);
});

test('main Skincare document loads the recipe UX runtime', () => {
  assert.match(html, /\/systems\/baseline-natural-skincare\/js\/skincare-recipe-ux-20260906\.js/);
});

test('promotion logic removes retired competing cards and Testing status', () => {
  assert.match(recipeUx, /r8:\s*\{\s*slug:'calming-shave-gel',\s*title:'Calming Shave Gel'/);
  assert.match(recipeUx, /r9:\s*\{\s*slug:'tooth-polishing-powder',\s*title:'Tooth Polishing Powder'/);
  assert.match(recipeUx, /r10:\s*\{\s*slug:'microcurrent-glide-gel',\s*title:'Microcurrent Glide Gel'/);
  assert.match(recipeUx, /const REPLACED_IDS = Object\.freeze\(\{ r4:'r10', r5:'r8' \}\)/);
  assert.match(recipeUx, /recipe\.removeAttribute\('data-category'\)/);
  assert.match(recipeUx, /\['r4','r5'\]\.forEach/);
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

test('Soap-Free Powdered Hair Wash remains the active Testing recipe', () => {
  const opening = '<div class="recipe card recipe-page" data-category="Testing" data-recipe-slug="testing-soap-free-powdered-hair-wash" id="r11">';
  const start = html.indexOf(opening);
  assert.notEqual(start, -1, 'missing embedded Testing recipe r11');
  const block = html.slice(start);
  for (const heading of ['Method', 'Storage &amp; Use', 'Comedogenic Considerations', 'Notes']) {
    assert.match(block, new RegExp(`<h4>(?:<a[^>]*>)?${heading}`), `r11 missing ${heading}`);
  }
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

test('nested Skincare My Routine clean routes are repaired before the fallback exits', () => {
  assert.match(tabs, /function repairSkincareRoutineRoute\(\)/);
  assert.match(tabs, /baseline-natural-skincare\\\/my-routine\(\?:\\\/\(\?:log\|summary\|plan\|public\)\)\?/);
  assert.match(tabs, /window\.BASELINE_selectTab\("routine", \{ silentHistory:true \}\)/);
  const repairCall = tabs.indexOf('repairSkincareRoutineRoute();');
  const disableExit = tabs.indexOf('if(shouldDisable()) return;', repairCall);
  assert.ok(repairCall >= 0 && disableExit > repairCall, 'nested route repair must run before the shared-owner early exit');
});
