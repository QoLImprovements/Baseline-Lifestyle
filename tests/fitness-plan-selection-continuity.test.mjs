import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const plans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const page=read('systems/baseline-fitness/baseline-fitness.html');
const fitnessState=read('systems/baseline-fitness/api/fitness_state.php');

test('Calisthenics plan selection has one controller and one clean Routine Plan route',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-plan-selection-continuity-v1.js')),false);
  assert.doesNotMatch(page,/fitness-plan-selection-continuity-v1\.js/);
  assert.match(plans,/async function openPlan\(planId\)/);
  assert.match(plans,/saveSelectedPlanId/);
  assert.match(plans,/\/baseline-fitness\/my-routine\/plan/);
  assert.match(plans,/activateTopView\?\.\('plan',false\)/);
  assert.doesNotMatch(plans,/localStorage|sessionStorage|fitnessPlanSelectionContinuity/);
});

test('selected plan identity is account-backed before navigation',()=>{
  assert.match(fitnessState,/'save_selected_plan'/);
  assert.match(fitnessState,/'selectedPlanId'/);
  assert.match(plans,/const saved=await setSelectedPlanId\(id\)/);
  assert.match(plans,/if\(owner!=='guest'&&!saved\)return/);
  assert.match(plans,/global\.location\.assign\(new URL\('\/baseline-fitness\/my-routine\/plan'/);
});

test('plan-card disclosure is page-route state only',()=>{
  assert.doesNotMatch(collapse,/localStorage|sessionStorage/);
  assert.match(collapse,/data-initial-routine-plan/);
  assert.match(collapse,/details\[data-fitness-plan-card="\$\{selectionReveal\}"\]/);
  assert.match(collapse,/card\.open=true/);
});

test('Create Another Plan uses an explicit clean-route create request, not browser persistence',()=>{
  assert.match(plans,/url\.searchParams\.set\('new-plan','1'\)/);
  assert.match(plans,/setCreatingPlan\(true\)/);
  assert.doesNotMatch(plans,/Date\.now\(\).*new-plan/);
});


test('plan-name writes are bound to the selected plan identity',()=>{
  assert.match(plans,/function planNameForWrite\(raw,planId=0\)/);
  assert.match(plans,/boundId===String\(id\) && original===stored/);
  assert.match(plans,/targetPlanId=url\.pathname\.endsWith\('\/plan_update\.php'\)/);
  assert.match(plans,/input\.dataset\.originalName=stored/);
});
