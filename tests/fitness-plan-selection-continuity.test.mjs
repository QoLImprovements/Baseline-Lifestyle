import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const guard=read('systems/baseline-fitness/js/fitness-plan-selection-continuity-v1.js');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const page=read('systems/baseline-fitness/baseline-fitness.html');

test('Calisthenics plan selection stays on Routine Plan and requests a one-load card reveal',()=>{
  assert.doesNotThrow(()=>new Function(guard));
  assert.match(guard,/selection change INSIDE the/);
  assert.match(guard,/single My Routine > Routine Plan page/);
  assert.match(guard,/CLEAN_ROUTE='\/baseline-fitness\/my-routine\/plan'/);
  assert.doesNotMatch(guard,/CLEAN_ROUTE='\/baseline-fitness\/my-routine\/plan\/calisthenics'/);
  assert.match(guard,/sessionStorage\?\.setItem\(VIEW_KEY,'plan'\)/);
  assert.match(guard,/sessionStorage\?\.setItem\(PLAN_VIEW_KEY,'calisthenics'\)/);
  assert.match(guard,/sessionStorage\?\.setItem\(REVEAL_KEY,'calisthenics'\)/);
  assert.match(guard,/activateTopView\?\.\('plan',false\)/);
  assert.doesNotMatch(guard,/BASELINE_fitnessRoutinePlanCollapse\?\.collapseAll/);
  assert.doesNotMatch(guard,/activatePlanView\?\.\('calisthenics',false\)/);
  assert.match(guard,/global\.addEventListener\('change'/);
  assert.match(guard,/event\.stopImmediatePropagation\(\)/);
  assert.match(guard,/#calisthenicsPlanSelect/);
  assert.doesNotMatch(guard,/\/my-routine\/log|activateTopView\?\.\('log'/);
  assert.match(collapse,/sole exception/);
  assert.match(collapse,/sessionStorage\?\.removeItem\(REVEAL_KEY\)/);
  assert.match(collapse,/details\[data-fitness-plan-card="\$\{selectionReveal\}"\]/);
  assert.match(collapse,/card\.open=true/);
});


test('selection hand-off is persisted before navigation to the canonical page',()=>{
  const values=new Map();
  const localStorage={
    get length(){ return values.size; },
    key(index){ return Array.from(values.keys())[index] || null; },
    setItem(key,value){ values.set(String(key),String(value)); },
    removeItem(key){ values.delete(String(key)); }
  };
  const sessionValues=new Map();
  const sessionStorage={
    setItem(key,value){ sessionValues.set(String(key),String(value)); },
    getItem(key){ return sessionValues.get(String(key)) ?? null; },
    removeItem(key){ sessionValues.delete(String(key)); }
  };
  const listeners={};
  let assigned='';
  const fakeWindow={
    document:{ documentElement:{ setAttribute(){} } },
    localStorage,
    sessionStorage,
    location:{ origin:'https://baselinelifestyle.org',assign(value){ assigned=value; } },
    addEventListener(type,handler){ listeners[type]=handler; }
  };
  new Function('window','globalThis',guard)(fakeWindow,fakeWindow);
  listeners.change({
    target:{ closest(){ return { value:'42' }; } },
    preventDefault(){},
    stopImmediatePropagation(){}
  });
  assert.equal(sessionValues.get('__bl_fitness_reveal_plan_card_once_v1__'),'calisthenics');
  assert.equal(assigned,'https://baselinelifestyle.org/baseline-fitness/my-routine/plan');
});

test('Fitness loader installs disclosure reset before selection continuity',()=>{
  const disclosure=loader.indexOf('fitness-routine-plan-collapse-v1.js');
  const deletion=loader.indexOf('fitness-plan-delete-continuity-v1.js');
  const selection=loader.indexOf('fitness-plan-selection-continuity-v1.js');
  const policy=loader.indexOf('fitness-live-policy-v1.js');
  assert.ok(disclosure>=0 && deletion>disclosure && selection>deletion && policy>selection);
  assert.match(loader,/ROUTINE_PLAN_COLLAPSE_20260821_1/);
  assert.match(loader,/PLAN_SELECTION_CONTINUITY_20260821_1/);
  assert.match(page,/fitness-routine-workspace\.css\?v=BASELINE_FITNESS_SECTION_DIVIDER_REMOVAL_20260822_1/);
});
