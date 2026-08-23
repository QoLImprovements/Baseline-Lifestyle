import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const tabs = fs.readFileSync('sitewide/js/baseline-tabs.js', 'utf8');
const recipes = [
  ['r8', 'testing-shaving-gel', 'Shaving Gel Recipe'],
  ['r9', 'testing-natural-tooth-brightening-powder', 'Natural Tooth-Brightening Powder Recipe'],
  ['r10', 'testing-microcurrent-conductive-gel', 'Microcurrent Conductive Gel Recipe – 40 g']
];

function recipeOpening(id, slug) {
  return `<div class="recipe card recipe-page" data-recipe-slug="${slug}" id="${id}">`;
}

test('Skincare Testing recipes are embedded in the canonical recipe document', () => {
  for (const [id, slug, title] of recipes) {
    assert.ok(html.includes(recipeOpening(id, slug)), `missing embedded recipe card ${id}`);
    assert.match(html, new RegExp(`data-recipe-id="${id}" href="/baseline-natural-skincare/recipes/${slug}"`));
    assert.ok(html.includes(`<h3>${title}</h3>`), `missing recipe title ${title}`);
  }
  assert.doesNotMatch(html, /\/systems\/baseline-natural-skincare\/recipes\/testing-[^"']+\.html/);
  assert.doesNotMatch(html, /#tab=recipes\/testing-/);
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
