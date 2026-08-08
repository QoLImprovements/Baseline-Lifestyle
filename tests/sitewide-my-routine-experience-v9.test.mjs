import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const shared = read('sitewide/js/baseline-routine-coherence-v12.js');
const css = read('sitewide/css/baseline-routine-coherence-v12.css');
const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('regression: superseded DOM authorities and v11 cannot return to active loaders', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.doesNotMatch(loader,/baseline-routine-stability-v11|baseline-routine-experience-v10|baseline-routine-experience-v9|baseline-routine-authority-v7/);
    assert.match(loader,/baseline-routine-coherence-v12/);
  }
});

test('regression: Week and Month buttons reserve enough width for their labels', () => {
  assert.match(css,/grid-template-columns:repeat\(2,minmax\(88px,1fr\)\)/);
  assert.match(css,/min-width:184px/);
  assert.match(css,/white-space:nowrap/);
  assert.match(css,/justify-content:center/);
});

test('regression: Routine Plan alignment is a shared sitewide rule', () => {
  assert.match(css,/\.routine-plan-group-head/);
  assert.match(css,/\.fitness-routine-group-bar/);
  assert.match(css,/align-items:center!important/);
  assert.match(css,/justify-content:space-between!important/);
});

test('regression: shared coherence never takes ownership of page scrolling', () => {
  assert.doesNotMatch(shared,/scrollTop\s*=|document\.body\.style\.overflow|scrollTo\(/);
  assert.doesNotMatch(css,/overflow-y\s*:\s*hidden|position\s*:\s*fixed[^}]*#(?:routine|my-plan)/s);
});

test('regression: duplicate dropdown shells are actively removed rather than multiplied', () => {
  assert.match(shared,/removeDuplicateControls/);
  assert.match(shared,/\.bl-search-select/);
  assert.match(shared,/\.bl-routine-select-shell/);
  assert.match(shared,/matches\.length<2/);
  assert.match(shared,/const keep=matches\.find/);
});

test('regression: old loading screen text is absent', () => {
  assert.doesNotMatch(skinLoader,/Loading My Routine|BootShield|routine-booting/);
  assert.doesNotMatch(fitnessLoader,/Loading My Routine|BootShield|routine-booting/);
});
