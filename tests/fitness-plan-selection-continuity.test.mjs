import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const guard=read('systems/baseline-fitness/js/fitness-plan-selection-continuity-v1.js');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Calisthenics plan selection cannot leave the single Routine Plan page',()=>{
  assert.doesNotThrow(()=>new Function(guard));
  assert.match(guard,/selection change INSIDE the/);
  assert.match(guard,/single My Routine > Routine Plan page/);
  assert.match(guard,/CLEAN_ROUTE='\/baseline-fitness\/my-routine\/plan'/);
  assert.doesNotMatch(guard,/CLEAN_ROUTE='\/baseline-fitness\/my-routine\/plan\/calisthenics'/);
  assert.match(guard,/sessionStorage\?\.setItem\(VIEW_KEY,'plan'\)/);
  assert.match(guard,/sessionStorage\?\.setItem\(PLAN_VIEW_KEY,'calisthenics'\)/);
  assert.match(guard,/activateTopView\?\.\('plan',false\)/);
  assert.match(guard,/activatePlanView\?\.\('calisthenics',false\)/);
  assert.match(guard,/global\.addEventListener\('change'/);
  assert.match(guard,/event\.stopImmediatePropagation\(\)/);
  assert.match(guard,/#calisthenicsPlanSelect/);
  assert.doesNotMatch(guard,/\/my-routine\/log|activateTopView\?\.\('log'/);
});

test('Fitness loader installs selection continuity after deletion continuity',()=>{
  const deletion=loader.indexOf('fitness-plan-delete-continuity-v1.js');
  const selection=loader.indexOf('fitness-plan-selection-continuity-v1.js');
  const policy=loader.indexOf('fitness-live-policy-v1.js');
  assert.ok(deletion>=0 && selection>deletion && policy>selection);
});
