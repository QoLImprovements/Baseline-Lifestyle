import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require=createRequire(import.meta.url);
const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const fitness=require('../systems/baseline-fitness/js/baseline-fitness-app.js');
const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
const voice=read('systems/baseline-fitness/js/baseline-fitness-voice.js');
const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
const workspaceCss=read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');

test('alternating exercises keep their targets without displaying per-side wording',()=>{
  const work=fitness.workForSession([
    { exercise:'Reverse Lunges',baseline:110,sets:3,progressionMode:'straight-sets' },
    { exercise:'Cross-Body Mountain Climbers',baseline:20,sets:3,progressionMode:'straight-sets' },
    { exercise:'Reverse Elbow Plank',baseline:133,progressionMode:'timed-hold' }
  ],1);
  const steps=fitness.executionSteps(work);
  assert.deepEqual(steps.slice(0,6).map(step=>step.target),[88,16,88,16,88,16]);
  assert.ok(steps.every(step=>!step.label.toLowerCase().includes('per side')));
  assert.equal(steps.at(-1).label,'Reverse Elbow Plank - 133 seconds');
});

test('manual and voice hold timers count down from the exercise target',()=>{
  assert.match(app,/Start Countdown/);
  assert.match(app,/let remaining = Math\.max\(1, Math\.round\(Number\(step\.target\)/);
  assert.match(app,/remaining -= 1/);
  assert.match(app,/recordStep\('success', step\.target\)/);
  assert.match(voice,/Time remaining/);
  assert.match(voice,/a\.remaining = Math\.max\(0, a\.remaining - 1\)/);
  assert.doesNotMatch(`${app}\n${voice}`,/technical burnout|Count-Up/i);
});

test('Routine Log keeps one concise metadata line and a stable action column',()=>{
  assert.match(workspace,/metric\.unit === 'minutes' \? 'min'/);
  assert.match(workspace,/item\.timeOfDay !== 'anytime'/);
  assert.doesNotMatch(workspace,/escapeHtml\(due\.detail\)/);
  assert.match(workspaceCss,/\.fitness-log-item-head\{[\s\S]*?grid-template-columns:minmax\(0,1fr\) max-content!important/);
  assert.match(workspaceCss,/\.fitness-log-item-head>\.bl-routine-entry-actions\{[\s\S]*?flex-wrap:nowrap!important/);
});
