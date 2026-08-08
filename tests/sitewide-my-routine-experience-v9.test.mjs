import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const skinLoader = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
const fitnessLoader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const stability = read('sitewide/js/baseline-routine-stability-v11.js');
const stabilityCss = read('sitewide/css/baseline-routine-stability-v11.css');
const generator = read('systems/baseline-fitness/js/fitness-plan-generator-coherence-v4.js');
const schedule = read('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js');

test('regression: old three-layer authority chain cannot be restored accidentally', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.doesNotMatch(loader,/baseline-routine-authority-v7\.js/);
    assert.doesNotMatch(loader,/baseline-routine-experience-v9\.js/);
    assert.doesNotMatch(loader,/baseline-routine-experience-v10\.js/);
    assert.ok(loader.includes('baseline-routine-stability-v11.js'));
  }
});

test('regression: boot does not wait for a quiet MutationObserver window', () => {
  for (const loader of [skinLoader,fitnessLoader]) {
    assert.doesNotMatch(loader,/new MutationObserver\(settle\)/);
    assert.doesNotMatch(loader,/setTimeout\(done,1[45]00\)/);
    assert.doesNotMatch(loader,/setTimeout\(done,180\)/);
    assert.ok(loader.includes('releaseBootShield()'));
  }
});

test('regression: stability observer performs bounded decoration only', () => {
  assert.ok(stability.includes('if (patching) return'));
  assert.ok(stability.includes('if (wrap.dataset.signature === signature) return'));
  assert.ok(stability.includes('if (list.dataset.signature === signature) return'));
  assert.doesNotMatch(stability,/list\.innerHTML\s*=.*Completed exercises \/ routines/);
  assert.doesNotMatch(stability,/pointerdown.*stopPropagation/s);
});

test('regression: create-group and expand controls are left under their owning Skincare adapter', () => {
  assert.doesNotMatch(stability,/routineGroupName.*replace/);
  assert.doesNotMatch(stability,/makeCollapseFallback/);
  assert.doesNotMatch(stability,/data-plan-group-collapse.*click\(/);
  assert.doesNotMatch(stability,/data-group-collapse.*click\(/);
});

test('regression: Public Routines is styled without duplicate profile/select reconstruction', () => {
  assert.doesNotMatch(stability,/dedupePublicProfileControls/);
  assert.doesNotMatch(stability,/ensureSearchableSelect/);
  assert.ok(stability.includes('moveVisibilityControl'));
  assert.ok(stabilityCss.includes('.bl-public-v3-panel'));
});

test('regression: scrollbar owner is not replaced or force-scrolled by My Routine', () => {
  assert.doesNotMatch(stability,/scrollTop\s*=/);
  assert.doesNotMatch(stability,/overflow\s*:\s*hidden.*bl-scroll/s);
  assert.doesNotMatch(stability,/document\.body\.style\.overflow/);
});

test('Fitness generator semantics remain intact after the loader repair', () => {
  assert.match(generator,/label\.textContent='Max Baseline'/);
  assert.ok(generator.includes('straightTargets'));
  assert.ok(schedule.includes('start.disabled = false'));
  assert.ok(schedule.includes("start.removeAttribute('min')"));
});
