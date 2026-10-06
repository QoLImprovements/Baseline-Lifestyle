import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require=createRequire(import.meta.url);
const policyPath=new URL('../systems/baseline-fitness/js/fitness-live-policy-v1.js',import.meta.url);
const policyFilename=fileURLToPath(policyPath);

function loadPolicy(plans){
  let history={outcomes:[],failures:[]};
  globalThis.document={
    readyState:'loading',
    documentElement:{ dataset:{ app:'fitness' } },
    body:{ dataset:{ app:'fitness' } },
    querySelector(){ return null; },
    querySelectorAll(){ return []; },
    addEventListener(){}
  };
  globalThis.BASELINE_auth={ get(){ return { ready:true,authed:true,name:'Peter' }; } };
  globalThis.BASELINE_FITNESS_SAVED_DATA={
    enabled:true,
    getProgressionHistory(){ return structuredClone(history); },
    async saveProgressionHistory(next){ history=structuredClone(next);return {ok:true}; }
  };
  globalThis.BASELINE_fitnessPlans={ getPlans(){ return plans; },getSelectedPlanId(){ return 1; } };
  delete globalThis.__BASELINE_FITNESS_LIVE_POLICY_V4__;
  delete require.cache[require.resolve(policyFilename)];
  return { policy:require(policyFilename),history:()=>structuredClone(history) };
}

function outcomeContext(sessionIndex,squatSucceeded=true){
  return {
    planId:1,
    sessionIndex,
    steps:[
      { exercise:'Knee Push-Ups' },{ exercise:'Squats' },
      { exercise:'Knee Push-Ups' },{ exercise:'Squats' },
      { exercise:'Knee Push-Ups' },{ exercise:'Squats' }
    ],
    results:{
      0:{ status:'success' },1:{ status:squatSucceeded?'success':'failed' },
      2:{ status:'success' },3:{ status:'success' },
      4:{ status:'success' },5:{ status:'success' }
    }
  };
}

test('each exercise advances after server-saved success and only failed exercise repeats',async()=>{
  const plans=[{
    planId:1,
    planJson:{ items:[{ exercise:'Knee Push-Ups' },{ exercise:'Squats' }] },
    sessions:[{ session_index:1,status:'planned' },{ session_index:2,status:'planned' }]
  }];
  const { policy,history }=loadPolicy(plans);

  plans[0].sessions[0].status='done';
  await policy.storeSessionOutcomes(outcomeContext(1,true));
  assert.equal(policy.progressLevel('Knee Push-Ups'),1);
  assert.equal(policy.progressLevel('Squats'),1);

  plans[0].sessions[1].status='done';
  await policy.storeSessionOutcomes(outcomeContext(2,false));
  assert.equal(policy.progressLevel('Knee Push-Ups'),2,'successful knee push-ups must advance');
  assert.equal(policy.progressLevel('Squats'),1,'failed squats must repeat');

  const ledger=history().outcomes;
  assert.equal(ledger.find(entry=>entry.sessionIndex===2 && entry.exercise==='knee push-ups')?.success,true);
  assert.equal(ledger.find(entry=>entry.sessionIndex===2 && entry.exercise==='squats')?.success,false);
});

test('progression history has no browser persistence path',()=>{
  const source=fs.readFileSync(policyPath,'utf8');
  assert.match(source,/BASELINE_FITNESS_SAVED_DATA/);
  assert.match(source,/saveProgressionHistory/);
  assert.doesNotMatch(source,/localStorage|sessionStorage|indexedDB/);
});

test('outcomes are saved only after the completed workout is accepted',()=>{
  const source=fs.readFileSync(policyPath,'utf8');
  assert.match(source,/const after=await original\.finishSession\?\.\(\);const advanced=/);
  assert.match(source,/if \(advanced\) \{\s*await storeSessionOutcomes\(before\);\s*await global\.BASELINE_fitnessPlans\?\.refresh\?\.\(\);\s*\}/);
  assert.match(source,/return applyPolicy\(original\.getCurrentContext\?\.\(\) \|\| after\)/);
});
