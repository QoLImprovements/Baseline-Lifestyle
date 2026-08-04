import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const model = require('../systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js');
const html = fs.readFileSync(new URL('../systems/baseline-natural-skincare/baseline-natural-skincare.html', import.meta.url), 'utf8');

test('the action-specific comprehensive model loads before the routine interface', () => {
  const baseIndex = html.indexOf('skincare-routine-model.js');
  const comprehensiveIndex = html.indexOf('skincare-routine-comprehensive-benefits.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  assert.ok(baseIndex >= 0);
  assert.ok(comprehensiveIndex > baseIndex);
  assert.ok(enhancementIndex > comprehensiveIndex);
  assert.match(html, /skincare-routine-comprehensive-benefits\.js\?v=SKINCARE_ROUTINE_COMPREHENSIVE_20260804_1/);
});

test('every catalogue action has a genuinely substantial action-specific comprehensive description', () => {
  assert.equal(Object.keys(model.COMPREHENSIVE_BENEFITS).length, model.ACTIONS.length);
  for (const action of model.ACTIONS) {
    const text = action.benefitComprehensive;
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?](?:\s|$)/).filter((part) => part.trim()).length;
    assert.ok(words >= 45, `${action.id} has only ${words} words`);
    assert.ok(sentences >= 3, `${action.id} has only ${sentences} sentences`);
    assert.notEqual(text, action.benefitBrief, `${action.id} repeats the brief description`);
  }
});

test('Anhydrous Oil Cleanse explains mechanism, practical use, removal and limitations', () => {
  const text = model.ACTION_BY_ID.get('oil-cleanse').benefitComprehensive;
  assert.match(text, /dissolve and lift sebum, sunscreen, makeup/);
  assert.match(text, /evening cleanse, a first cleanse or an oil-based body-cleansing method/);
  assert.match(text, /excessive hot-cloth rubbing can irritate/);
  assert.ok(text.split(/\s+/).length >= 80);
});

test('normalised comprehensive routine items receive the expanded description', () => {
  const item = model.normaliseItem({ actionId: 'oil-cleanse', benefitMode: 'comprehensive' });
  assert.equal(item.benefit, model.ACTION_BY_ID.get('oil-cleanse').benefitComprehensive);
  assert.ok(item.benefit.length > item.title.length * 5);
});
