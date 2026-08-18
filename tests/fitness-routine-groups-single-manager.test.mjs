import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Routine Groups is one static compact manager above the four collapsible Routine Plan cards',()=>{
  assert.doesNotThrow(()=>new Function(groups));
  assert.match(groups,/Routine Groups appears ONCE, statically, above the four collapsible Routine/);
  assert.match(groups,/Preserve the original compact manager presentation/);
  assert.match(groups,/data\.v4GroupCard = 'global'/);
  assert.match(groups,/planPanel\.insertBefore\(card,planCards\)/);
  assert.match(groups,/\$\$\('\.bl-v4-group-card',planPanel\)\.forEach/);
  assert.doesNotMatch(groups,/document\.createElement\('details'\)/);
});

test('the manager keeps one create row, one group list and one flat Routine Steps assignment list',()=>{
  assert.match(groups,/data-v4-group-name=\"global\"/);
  assert.match(groups,/data-v4-group-list=\"global\"/);
  assert.match(groups,/data-v4-assignment-list=\"global\"/);
  assert.match(groups,/<h4>Routine Steps<\/h4>/);
  assert.doesNotMatch(groups,/data-v4-assignment-section=/);
  assert.doesNotMatch(groups,/bl-v4-assignment-sections/);
});

test('Routine Groups remains visually compact and static while only category cards collapse',()=>{
  assert.match(css,/ONE COMPACT STATIC GROUP MANAGER, FOUR COLLAPSIBLE CARDS/);
  assert.match(css,/\.bl-v4-group-card-global/);
  assert.match(css,/\.bl-v4-assignment-block/);
  assert.match(css,/\.fitness-routine-plan-card>summary/);
  assert.match(css,/\.fitness-routine-plan-card:not\(\[open\]\)>\.fitness-routine-plan-card-body/);
  assert.doesNotMatch(css,/\.bl-v4-group-card-global>summary/);
  assert.doesNotMatch(css,/\.bl-v4-assignment-sections/);
});

test('Fitness loader cache-busts the compact Routine Groups implementation',()=>{
  assert.match(loader,/BASELINE_FITNESS_ROUTINE_GROUPS_20260818_2/);
  assert.match(loader,/Routine Groups is one compact static manager at the/);
});
