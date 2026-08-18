import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Routine Groups is one static manager above the four collapsible Routine Plan cards',()=>{
  assert.doesNotThrow(()=>new Function(groups));
  assert.match(groups,/Routine Groups is ONE static manager at the top of Routine Plan/);
  assert.match(groups,/data\.v4GroupCard = 'global'/);
  assert.match(groups,/planPanel\.insertBefore\(card,planCards\)/);
  assert.match(groups,/\$\$\('\.bl-v4-group-card',planPanel\)\.forEach/);
  assert.doesNotMatch(groups,/document\.createElement\('details'\)/);
});

test('the single Routine Groups manager contains assignments for every Fitness plan category',()=>{
  for (const section of ['calisthenics','cardio','other','sports']) {
    assert.ok(groups.includes(`data-v4-assignment-section=\"${section}\"`));
    assert.ok(groups.includes(`data-v4-assignment-list=\"${section}\"`));
  }
  assert.match(groups,/data-v4-group-name=\"global\"/);
  assert.match(groups,/data-v4-group-list=\"global\"/);
});

test('Routine Groups is visually static while only the four category cards use details collapse',()=>{
  assert.match(css,/ONE STATIC GROUP MANAGER, FOUR COLLAPSIBLE CARDS/);
  assert.match(css,/\.bl-v4-group-card-global/);
  assert.match(css,/\.fitness-routine-plan-card>summary/);
  assert.match(css,/\.fitness-routine-plan-card:not\(\[open\]\)>\.fitness-routine-plan-card-body/);
  assert.doesNotMatch(css,/\.bl-v4-group-card-global>summary/);
});

test('Fitness loader cache-busts the single Routine Groups implementation',()=>{
  assert.match(loader,/BASELINE_FITNESS_ROUTINE_GROUPS_20260818_1/);
  assert.match(loader,/Routine Groups is one static manager at the top/);
});
