import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const html=read('systems/baseline-fitness/baseline-fitness.html');

test('Routine Groups remains one collapsible manager above four Plan cards',()=>{
  assert.match(groups,/Routine Groups appears ONCE above the four collapsible Routine Plan category/);
  assert.match(groups,/document\.createElement\('details'\)/);
  assert.match(groups,/dataset\.v4GroupCard = 'global'/);
  assert.match(groups,/planPanel\.insertBefore\(card,planCards\)/);
  assert.match(groups,/card\.open = false/);
});

test('group-first editor owns assignments directly',()=>{
  assert.match(groups,/data-v4-group-select/);
  assert.match(groups,/Routine Activities/);
  assert.match(groups,/data-v4-group-activity/);
  assert.match(groups,/Add Another Activity/);
  assert.match(groups,/function changeActivitySlot/);
  assert.match(groups,/function removeActivitySlot/);
  assert.doesNotMatch(groups,/data-v4-assignment-list="global"/);
});

test('all saved Fitness entities remain available to Routine Groups',()=>{
  assert.match(groups,/BASELINE_fitnessPlans\?\.getPlans/);
  assert.match(groups,/BASELINE_fitnessRoutine\?\.getState/);
  assert.match(groups,/return planItems\.concat\(activities\)/);
});

test('canonical Routine stylesheet owns compact group disclosure styling',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/css/fitness-routine-groups-collapsible-v1.css')),false);
  assert.match(css,/\.bl-v4-group-card-global>\.bl-v4-group-card-summary::after/);
  assert.match(css,/\.bl-v4-group-card-global:not\(\[open\]\)>\.bl-v4-group-card-body/);
  assert.match(css,/\.bl-v4-group-select-row/);
});

test('page loads only the canonical group runtime, not a collapse compatibility owner',()=>{
  assert.match(html,/fitness-routine-groups-v2\.js/);
  assert.doesNotMatch(html,/fitness-routine-plan-collapse-v1\.js/);
});
