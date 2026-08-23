import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const continuity = read('systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js');
const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('plan deletion continuity runtime parses and is loaded by My Routine', () => {
  assert.doesNotThrow(() => new Function(continuity));
  assert.ok(loader.includes('fitness-plan-delete-continuity-v1.js'));
  assert.ok(loader.includes('data-fitness-plan-delete-continuity-v1'));
});

test('deleting one plan selects another saved plan instead of entering Plan Generator', () => {
  assert.ok(continuity.includes('function chooseSurvivor'));
  assert.ok(continuity.includes("controller.openPlan(survivorId)"));
  assert.ok(continuity.includes('if (survivors.length)'));
  assert.ok(continuity.includes('for (let index=deletedIndex+1'));
  assert.ok(continuity.includes('for (let index=deletedIndex-1'));
});

test('Plan Generator is only the fallback when no saved plans survive deletion', () => {
  assert.ok(continuity.includes("if (typeof controller.createPlan==='function')"));
  const survivorBranch=continuity.indexOf('if (survivors.length)');
  const generatorFallback=continuity.indexOf("if (typeof controller.createPlan==='function')");
  assert.ok(survivorBranch>=0 && generatorFallback>survivorBranch);
});

test('legacy single-plan delete handler is intercepted before it can reset the generator', () => {
  assert.ok(continuity.includes("event.target?.closest?.('#confirmDeletePlanBtn')"));
  assert.ok(continuity.includes('event.stopImmediatePropagation()'));
  assert.ok(continuity.includes("document.addEventListener('click'"));
  assert.ok(continuity.includes('},true);'));
});
