import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const comprehensive = require('../systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js');
globalThis.BASELINE_SKINCARE_ROUTINE_MODEL = comprehensive;
delete globalThis.__BASELINE_SKINCARE_ROUTINE_CATALOGUE_V2__;
require('../systems/baseline-natural-skincare/js/skincare-routine-catalogue-v2.js');
const model = globalThis.BASELINE_SKINCARE_ROUTINE_MODEL;
const products = require('../systems/baseline-natural-skincare/js/skincare-product-library.js');
const ui = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-enhancements.js', import.meta.url), 'utf8');
const canonical = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-canonical.js', import.meta.url), 'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-natural-skincare/baseline-natural-skincare.html', import.meta.url), 'utf8');
const routineApi = fs.readFileSync(new URL('../systems/baseline-natural-skincare/api/routine_state.php', import.meta.url), 'utf8');
const groupApi = fs.readFileSync(new URL('../systems/baseline-natural-skincare/api/routine_groups.php', import.meta.url), 'utf8');

test('comprehensive benefits remain action-specific multi-sentence explanations', () => {
  const oil = model.ACTION_BY_ID.get('oil-cleanse');
  assert.ok(oil.benefitComprehensive.length >= 650, oil.benefitComprehensive);
  assert.match(oil.benefitComprehensive, /sebum, sunscreen, makeup/i);
  assert.match(oil.benefitComprehensive, /oil blend|chosen oil/i);
  assert.match(oil.benefitComprehensive, /cannot permanently change pore size|cannot.*detox/i);
});

test('catalogue covers full self-care actions and explicit shaving methods', () => {
  const ids = new Set(model.ACTIONS.map((item) => item.id));
  [
    'shave', 'oil-based-cleansing-shower', 'shower', 'bath', 'water-only-hair-wash',
    'shampoo-hair-wash', 'condition-hair', 'deep-condition-hair', 'beard-wash',
    'brush-teeth', 'interdental-clean', 'trim-nails', 'eyebrow-groom'
  ].forEach((id) => assert.ok(ids.has(id), `${id} should exist`));
  assert.ok(model.ACTIONS.length >= 115, `expected at least 115 actions, got ${model.ACTIONS.length}`);
  assert.ok(model.SHAVING_METHODS.length >= 10);
});

test('normalised items preserve method, product and group inheritance', () => {
  const item = model.normaliseItem({
    actionId:'shave', benefitMode:'brief', shavingMethod:'wet-safety',
    productSelection:'product:bulldog-sensitive-gel', productName:'Bulldog — Sensitive Shave Gel',
    customProductName:'Unused', useGroupFrequency:true, useGroupTime:true
  });
  assert.equal(item.benefitMode, 'comprehensive');
  assert.equal(item.shavingMethod, 'wet-safety');
  assert.equal(item.productSelection, 'product:bulldog-sensitive-gel');
  assert.equal(item.useGroupFrequency, true);
  assert.equal(item.useGroupTime, true);
});

test('UK product library remains broad, relevant and alphabetised', () => {
  assert.ok(products.PRODUCTS.length >= 100, `expected at least 100 products, got ${products.PRODUCTS.length}`);
  const shave = products.relevantProducts('shave');
  assert.ok(shave.length >= 10);
  assert.ok(shave.some((item) => item.brand === 'Bulldog'));
  assert.ok(shave.some((item) => item.brand === 'Braun'));
  const names = shave.map((item) => `${item.brand} ${item.name}`);
  assert.deepEqual(names, names.slice().sort((a, b) => a.localeCompare(b, 'en-GB', { sensitivity:'base' })));
});

test('base routine UI retains product, method and comprehensive controls', () => {
  assert.match(ui, /const PRODUCTS = global\.BASELINE_SKINCARE_PRODUCT_LIBRARY/);
  assert.match(ui, /Product \/ recipe used/);
  assert.match(ui, /data-field="shavingMethod"/);
  assert.match(ui, /data-field="productSelection"/);
  assert.match(ui, /benefitMode: 'comprehensive'/);
  assert.match(ui, /maxlength="1200"/);
});

test('canonical enhancement supports group schedules and grouped logs without repaint loops', () => {
  assert.match(canonical, /applyFrequency/);
  assert.match(canonical, /applyTime/);
  assert.match(canonical, /function groupedSections/);
  assert.match(canonical, /routine-log-group/);
  assert.match(canonical, /function effectiveItem/);
  assert.match(canonical, /data-canonical-complete-group/);
  assert.match(canonical, /function stableHtml/);
  assert.doesNotMatch(canonical, /MutationObserver|setInterval/);
  assert.doesNotMatch(loader, /skincare-routine-sitewide-v4|baseline-routine-coherence-v4|routine-coherence-events/);
  assert.match(loader, /skincare-routine-canonical\.js/);
  assert.match(shared, /observer\.disconnect\(\)/);
});

test('canonical public view exposes group structure and a planned calendar', () => {
  assert.match(canonical, /publicRoutine\.groups/);
  assert.match(canonical, /publicRoutine\.assignments/);
  assert.match(canonical, /function plannedWeek/);
  assert.match(canonical, /bl-canonical-week/);
  assert.match(routineApi, /'groups'=>\$groups/);
  assert.match(routineApi, /'assignments'=>\$assignments/);
});

test('server APIs preserve extended item and group settings', () => {
  assert.match(routineApi, /'shavingMethod'=>/);
  assert.match(routineApi, /'productSelection'=>/);
  assert.match(routineApi, /'customProductName'=>/);
  assert.match(groupApi, /'applyFrequency'=>/);
  assert.match(groupApi, /'frequency'=>bl_skincare_group_frequency/);
  assert.match(groupApi, /'collapsed'=>/);
});

test('scripts retain their required base and canonical loading order', () => {
  const modelIndex = html.indexOf('skincare-routine-model.js');
  const benefitsIndex = html.indexOf('skincare-routine-comprehensive-benefits.js');
  const catalogueIndex = html.indexOf('skincare-routine-catalogue-v2.js');
  const productIndex = html.indexOf('skincare-product-library.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  const uiIndex = html.indexOf('skincare-routine.js');
  assert.ok(modelIndex < benefitsIndex && benefitsIndex < catalogueIndex && catalogueIndex < productIndex && productIndex < enhancementIndex && enhancementIndex < uiIndex);
  assert.match(loader, /baseline-routine-system\.js/);
  assert.match(loader, /skincare-routine-canonical\.js/);
  assert.ok(loader.indexOf('baseline-routine-system.js') < loader.indexOf('skincare-routine-canonical.js'));
});
