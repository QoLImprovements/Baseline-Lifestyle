import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const mirror=read('systems/baseline-fitness/js/fitness-public-routine-summary-mirror-v1.js');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Public Fitness Routine Summary uses the canonical owner Summary renderer as its card factory',()=>{
  assert.match(mirror,/BASELINE_fitnessRoutineSummary/);
  assert.match(mirror,/canonical\.render\(\)/);
  assert.match(mirror,/\[data-v4-entity\]/);
  assert.match(mirror,/Public Routines -> User's Routine Summary is a VIEW-ONLY mirror/);
});

test('Public Fitness Routine Summary preserves the comprehensive owner card hierarchy',()=>{
  for (const token of [
    'fitness-plan-summary-card',
    'bl-fitness-summary-exercise-details',
    'bl-routine-summary-grid',
    'bl-routine-summary-list',
    'fitness-summary-group-head',
    'Calisthenic Plans',
    'Other Fitness Activities'
  ]) assert.ok(mirror.includes(token),`missing canonical mirror token ${token}`);
});

test('Fitness My Routine loads the Public Summary mirror after Public View Only',()=>{
  const publicIndex=loader.indexOf('baseline-public-routine-viewonly-v4.js');
  const mirrorIndex=loader.indexOf('fitness-public-routine-summary-mirror-v1.js');
  assert.ok(publicIndex>=0);
  assert.ok(mirrorIndex>publicIndex);
  assert.match(loader,/PUBLIC SUMMARY MIRROR CONTRACT/);
  assert.match(loader,/Do not restore the\s+condensed Public-only summary implementation/);
});
