import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const skinLoader = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-enhancements.js', import.meta.url), 'utf8');
const skinCoherent = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js', import.meta.url), 'utf8');
const skinRoutine = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const productLibrary = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-product-library.js', import.meta.url), 'utf8');
const fitnessLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const fitnessCoherent = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-sitewide-v3.js', import.meta.url), 'utf8');
const timed = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-timed-hold-targets-v2.js', import.meta.url), 'utf8');

test('Skincare uses the shared group, product and expandable routine structure', () => {
  assert.match(skinLoader, /baseline-routine-system\.js/);
  assert.match(skinLoader, /skincare-routine-sitewide-v4\.js/);
  assert.match(skinRoutine, /Product \/ recipe used/);
  assert.match(skinCoherent, /Product \/ Recipe: Choose…/);
  assert.match(skinCoherent, /data-skincare-step-toggle/);
  assert.match(productLibrary, /optgroup label="My Recipes"/);
  assert.match(productLibrary, /optgroup label="UK Product Library"/);
  assert.match(shared, /SITEWIDE_MY_ROUTINE_SYSTEM_20260805_1/);
});

test('Fitness uses the same disclosures and comprehensive summary template', () => {
  assert.match(fitnessLoader, /baseline-routine-system\.js/);
  assert.match(fitnessLoader, /fitness-routine-sitewide-v3\.js/);
  assert.match(fitnessCoherent, /Exercise Summary/);
  assert.match(fitnessCoherent, /Show session details/);
  assert.match(fitnessCoherent, /bl-routine-summary-grid/);
});

test('Fitness timed holds retain countdown targets and success or failure controls', () => {
  assert.match(fitnessLoader, /fitness-timed-hold-targets-v2\.js/);
  assert.match(timed, /Start Timer/);
  assert.match(timed, /Timed target completed/);
  assert.match(timed, /Timed target ended before completion/);
  assert.match(timed, /remaining % 30 === 0/);
  assert.match(timed, /remaining <= 5/);
  assert.match(timed, /failureCountBefore/);
  assert.doesNotMatch(timed, /Hold to technical burnout \(guide/);
});
