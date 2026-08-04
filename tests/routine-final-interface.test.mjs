import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const skinLoader = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-enhancements.js', import.meta.url), 'utf8');
const skinProduct = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-product-accessibility-v3.js', import.meta.url), 'utf8');
const skinRoutine = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const productLibrary = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-product-library.js', import.meta.url), 'utf8');
const fitnessLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const timed = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js', import.meta.url), 'utf8');

test('Skincare exposes group-first product and recipe controls', () => {
  assert.match(skinLoader, /skincare-routine-group-ui-v3\.js/);
  assert.match(skinLoader, /skincare-product-accessibility-v3\.js/);
  assert.match(skinRoutine, /Product \/ recipe used/);
  assert.match(skinProduct, /Product \/ Recipe: Choose…/);
  assert.match(productLibrary, /optgroup label="My Recipes"/);
  assert.match(productLibrary, /optgroup label="UK Product Library"/);
});

test('Fitness timed holds use countdown targets and ordinary success or failure controls', () => {
  assert.match(fitnessLoader, /fitness-timed-hold-targets-v2\.js/);
  assert.match(timed, /Start Timer/);
  assert.match(timed, /Timed target completed/);
  assert.match(timed, /Timed target ended before completion/);
  assert.match(timed, /remaining % 30 === 0/);
  assert.match(timed, /remaining <= 5/);
  assert.match(timed, /failureCountBefore/);
  assert.doesNotMatch(timed, /Hold to technical burnout \(guide/);
});
