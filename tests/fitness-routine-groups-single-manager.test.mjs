import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const collapseCss=read('systems/baseline-fitness/css/fitness-routine-groups-collapsible-v1.css');
const entryCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Routine Groups remains one manager above the four Routine Plan cards and is collapsible',()=>{
  assert.doesNotThrow(()=>new Function(groups));
  assert.match(groups,/Routine Groups appears ONCE above the four collapsible Routine Plan category/);
  assert.match(groups,/is itself collapsible/);
  assert.match(groups,/document\.createElement\('details'\)/);
  assert.match(groups,/bl-v4-group-card-summary/);
  assert.match(groups,/data\.v4GroupCard = 'global'/);
  assert.match(groups,/planPanel\.insertBefore\(card,planCards\)/);
  assert.match(groups,/\$\$\('\.bl-v4-group-card',planPanel\)\.forEach/);
  assert.match(collapse,/details\[data-v4-group-card="global"\]/);
  assert.match(collapse,/card\.open=false/);
});

test('collapsing Routine Groups is presentation-only and preserves group-first behaviour',()=>{
  assert.match(groups,/Collapsing Routine Groups must only hide\/reveal its editor/);
  assert.match(groups,/select one existing Routine Group from a dropdown/);
  assert.match(groups,/data-v4-group-select/);
  assert.match(groups,/Routine Activities/);
  assert.match(groups,/data-v4-group-activity/);
  assert.match(groups,/Add Another Activity/);
  assert.match(groups,/data-v4-add-activity/);
  assert.match(groups,/function appendActivitySlot/);
  assert.doesNotMatch(groups,/data-v4-assignment-list=\"global\"/);
  assert.doesNotMatch(groups,/<h4>Routine Steps<\/h4>/);
});

test('all saved Fitness routine entities are available as Routine Activity options',()=>{
  assert.match(groups,/BASELINE_fitnessPlans\?\.getPlans/);
  assert.match(groups,/BASELINE_fitnessRoutine\?\.getState/);
  assert.match(groups,/return planItems\.concat\(activities\)/);
  assert.match(groups,/activitySelectOptions\(data,entities,groupId,currentKey/);
  assert.match(groups,/entities\.map\(\(entity\)/);
});

test('adding, changing and removing Routine Activity dropdown rows updates the selected group assignment',()=>{
  assert.match(groups,/function changeActivitySlot/);
  assert.match(groups,/data\.assignments\[newKey\] = groupId/);
  assert.match(groups,/delete data\.assignments\[oldKey\]/);
  assert.match(groups,/function removeActivitySlot/);
  assert.match(groups,/delete data\.assignments\[key\]/);
  assert.match(groups,/selecting an activity already assigned elsewhere moves it to the selected/);
});

test('Routine Group creation and deletion remain available without a separate group list',()=>{
  assert.match(groups,/data-v4-group-name=\"global\"/);
  assert.match(groups,/data-v4-create-group=\"global\"/);
  assert.match(groups,/data-v4-remove-selected-group/);
  assert.match(groups,/selectedGroupId = id/);
  assert.doesNotMatch(groups,/data-v4-group-list=\"global\"/);
});

test('group-first editor keeps compact rows while its disclosure matches Routine Plan cards',()=>{
  assert.match(css,/uses a group-first editor/);
  assert.match(css,/\.bl-v4-group-select-row/);
  assert.match(css,/\.bl-v4-activity-editor/);
  assert.match(css,/\.bl-v4-activity-row/);
  assert.match(css,/\.bl-v4-add-activity/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\) 48px/);
  assert.match(collapseCss,/Routine Groups appears once above the four Routine Plan category cards and is/);
  assert.match(collapseCss,/\.bl-v4-group-card-global>\.bl-v4-group-card-summary::after/);
  assert.match(collapseCss,/\.bl-v4-group-card-global\[open\]>\.bl-v4-group-card-summary::after/);
  assert.match(collapseCss,/\.bl-v4-group-card-global:not\(\[open\]\)>\.bl-v4-group-card-body/);
  assert.doesNotMatch(css,/\.bl-v4-assignment-block/);
});

test('Fitness entry points load the collapsible group manager and collapsed-entry authority',()=>{
  assert.match(loader,/BASELINE_FITNESS_ROUTINE_GROUPS_20260818_4/);
  assert.match(loader,/Routine Groups appears once at the top as a/);
  assert.match(loader,/collapsible, group-first card/);
  assert.match(loader,/fitness-routine-plan-collapse-v1\.js\?v=BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_20260818_1/);
  assert.match(entryCss,/fitness-routine-groups-collapsible-v1\.css\?v=BASELINE_FITNESS_ROUTINE_GROUPS_COLLAPSIBLE_20260818_1/);
  assert.match(entryCss,/fitness-routine-plan-collapse-v1\.css\?v=BASELINE_FITNESS_ROUTINE_PLAN_COLLAPSE_20260818_1/);
});
