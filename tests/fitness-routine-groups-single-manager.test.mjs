import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
const css=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Routine Groups remains one static compact manager above the four collapsible Routine Plan cards',()=>{
  assert.doesNotThrow(()=>new Function(groups));
  assert.match(groups,/Routine Groups appears ONCE, statically, above the four collapsible Routine/);
  assert.match(groups,/data\.v4GroupCard = 'global'/);
  assert.match(groups,/planPanel\.insertBefore\(card,planCards\)/);
  assert.match(groups,/\$\$\('\.bl-v4-group-card',planPanel\)\.forEach/);
  assert.doesNotMatch(groups,/document\.createElement\('details'\)/);
});

test('Routine Groups is group-first rather than a page-long activity assignment table',()=>{
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

test('group-first editor has compact dropdown rows and Add Another Activity placement',()=>{
  assert.match(css,/uses a group-first editor/);
  assert.match(css,/\.bl-v4-group-select-row/);
  assert.match(css,/\.bl-v4-activity-editor/);
  assert.match(css,/\.bl-v4-activity-row/);
  assert.match(css,/\.bl-v4-add-activity/);
  assert.match(css,/grid-template-columns:minmax\(0,1fr\) 48px/);
  assert.doesNotMatch(css,/\.bl-v4-assignment-block/);
});

test('Fitness loader cache-busts the group-first Routine Groups implementation',()=>{
  assert.match(loader,/BASELINE_FITNESS_ROUTINE_GROUPS_20260818_3/);
  assert.match(loader,/Routine Groups is one compact static manager at the/);
  assert.match(loader,/Add Another Activity/);
});
