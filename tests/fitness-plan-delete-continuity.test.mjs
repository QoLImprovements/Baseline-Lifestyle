import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
const api=read('systems/baseline-fitness/api/delete_plan.php');
const html=read('systems/baseline-fitness/baseline-fitness.html');
const plans=read('systems/baseline-fitness/js/fitness-multiple-plans.js');

test('retired delete-continuity interceptor remains physically absent',()=>{
  assert.equal(existsSync(url('systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js')),false);
  assert.doesNotMatch(html,/fitness-plan-delete-continuity-v1\.js/);
  assert.doesNotMatch(plans,/pathname\.endsWith\('\/delete_plan\.php'\)/);
});

test('delete endpoint atomically chooses the next selected plan',()=>{
  assert.match(api,/\$selectedPlanId === \$planId/);
  assert.match(api,/strnatcasecmp\(\$leftName, \$rightName\)/);
  assert.match(api,/\$resource\['data'\]\['selectedPlanId'\] = \$nextSelected/);
  assert.match(api,/'selectedPlanId'=>max\(0,/);
});

test('canonical Fitness app owns the post-delete transition',()=>{
  assert.match(app,/async function deletePlan\(\)/);
  assert.match(app,/await global\.BASELINE_fitnessPlans\?\.refresh\?\.\(\)/);
  assert.match(app,/planStateResolved = false/);
  assert.match(app,/await ensurePlanLoaded\(true\)/);
});
