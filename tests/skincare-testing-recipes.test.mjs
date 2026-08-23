import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const recipes = [
  ['r8', 'testing-shaving-gel', 'Shaving Gel Recipe'],
  ['r9', 'testing-natural-tooth-brightening-powder', 'Natural Tooth-Brightening Powder Recipe'],
  ['r10', 'testing-microcurrent-conductive-gel', 'Microcurrent Conductive Gel Recipe – 40 g']
];

test('Skincare Testing recipes are embedded in the canonical recipe document', () => {
  for (const [id, slug, title] of recipes) {
    assert.match(html, new RegExp(`<div class="recipe card recipe-page" data-recipe-slug="${slug}" id="${id}">`));
    assert.match(html, new RegExp(`data-recipe-id="${id}" href="/baseline-natural-skincare/recipes/${slug}"`));
    assert.match(html, new RegExp(`<h3>${title.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}</h3>`));
  }
  assert.doesNotMatch(html, /\/systems\/baseline-natural-skincare\/recipes\/testing-[^"']+\.html/);
  assert.doesNotMatch(html, /#tab=recipes\/testing-/);
});

test('Every Skincare Testing recipe keeps the standard recipe sections', () => {
  for (let index = 0; index < recipes.length; index += 1) {
    const [id] = recipes[index];
    const start = html.indexOf(`id="${id}"`);
    assert.notEqual(start, -1);
    const nextId = recipes[index + 1]?.[0];
    const end = nextId ? html.indexOf(`id="${nextId}"`, start) : html.indexOf('</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- INGREDIENT LIBRARY -->', start);
    const block = html.slice(start, end === -1 ? undefined : end);
    for (const heading of ['Method', 'Storage &amp; Use', 'Comedogenic Considerations', 'Notes']) {
      assert.match(block, new RegExp(`<h4>(?:<a[^>]*>)?${heading}`));
    }
    assert.match(block, /class="recipe-actions"/);
    assert.match(block, /class="print-btn"/);
  }
});
