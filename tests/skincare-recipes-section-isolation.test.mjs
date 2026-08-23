import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');

test('Skincare recipe and routine sections remain separate structural siblings', () => {
  const recipesStart = html.indexOf('<section class="section" id="recipes">');
  const ingredientsStart = html.indexOf('<section class="section" id="ingredients">');
  const supportStart = html.indexOf('<section class="section" id="support">');
  const routineStart = html.indexOf('<section class="section" id="routine">');
  assert.ok(recipesStart >= 0 && ingredientsStart > recipesStart, 'Recipes must close before Ingredient Library');
  assert.ok(supportStart > ingredientsStart, 'Skin Support must follow Ingredient Library');
  assert.ok(routineStart > supportStart, 'My Routine must remain outside Recipes and Support');
  assert.match(html.slice(recipesStart, ingredientsStart), /<\/section>\s*<!-- INGREDIENT LIBRARY -->$/s);
});

test('shared tab switching removes stale Skincare routine first-paint authority', () => {
  assert.match(shared, /dataset\.app === 'skin' && id !== 'routine'/);
  assert.match(shared, /removeAttribute\('data-initial-skincare-tab'\)/);
  assert.match(shared, /removeAttribute\('data-initial-routine-view'\)/);
});
