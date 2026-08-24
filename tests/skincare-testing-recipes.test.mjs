import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const tabs = fs.readFileSync('sitewide/js/baseline-tabs.js', 'utf8');
const recipes = [
  ['r8', 'testing-shaving-gel', 'Shaving Gel'],
  ['r9', 'testing-natural-tooth-brightening-powder', 'Natural Tooth-Brightening Powder'],
  ['r10', 'testing-microcurrent-conductive-gel', 'Microcurrent Conductive Gel']
];

function recipeOpening(id, slug) {
  return `<div class="recipe card recipe-page" data-category="Testing" data-recipe-slug="${slug}" id="${id}">`;
}

test('Skincare Testing recipes are embedded in the canonical recipe document', () => {
  for (const [id, slug, title] of recipes) {
    assert.ok(html.includes(recipeOpening(id, slug)), `missing embedded Testing recipe card ${id}`);
    assert.match(html, new RegExp(`data-recipe-id="${id}" href="/baseline-natural-skincare/recipes/${slug}"`));
    assert.ok(html.includes(`<h3>${title}</h3>`), `missing recipe title ${title}`);
  }
  assert.doesNotMatch(html, /\/systems\/baseline-natural-skincare\/recipes\/testing-[^"']+\.html/);
  assert.doesNotMatch(html, /#tab=recipes\/testing-/);
});

test('Testing is a real recipe subcategory rather than a sortable list label', () => {
  for (const [id, slug] of recipes) {
    assert.ok(html.includes(recipeOpening(id, slug)), `${id} must declare data-category="Testing"`);
  }
  assert.match(shared, /const hasCategories = sortedCards\.some/);
  assert.match(shared, /const cat = \(card\.dataset\.category \|\| 'Recipes'\)/);
  assert.match(shared, /if\(cat !== 'Recipes'\)/);
  assert.match(shared, /a\.dataset\.recipeId = item\.id/);
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

test('Every Skincare Testing recipe keeps the standard recipe sections', () => {
  for (const [id, slug] of recipes) {
    const opening = recipeOpening(id, slug);
    const start = html.indexOf(opening);
    assert.notEqual(start, -1, `missing opening card for ${id}`);
    const nextRecipe = html.indexOf('<div class="recipe card recipe-page"', start + opening.length);
    const block = html.slice(start, nextRecipe === -1 ? undefined : nextRecipe);
    for (const heading of ['Method', 'Storage &amp; Use', 'Comedogenic Considerations', 'Notes']) {
      assert.match(block, new RegExp(`<h4>(?:<a[^>]*>)?${heading}`), `${id} missing ${heading}`);
    }
    assert.match(block, /class="recipe-actions"/);
    assert.match(block, /class="print-btn"/);
  }
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
