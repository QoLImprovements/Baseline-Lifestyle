import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const app=fs.readFileSync(new URL('../systems/baseline-fitness/js/baseline-fitness-app.js',import.meta.url),'utf8');
const html=fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html',import.meta.url),'utf8');
const coherence=fs.readFileSync(new URL('../sitewide/js/baseline-routine-coherence-v12.js',import.meta.url),'utf8');

test('completed workout refreshes canonical plan state before Routine Log renders',() => {
  const capture=app.indexOf('const completedSession = { planId:current.planId, sessionIndex:context.sessionIndex, completionDate };');
  const refresh=app.indexOf('await global.BASELINE_fitnessPlans?.refresh?.();',capture);
  const render=app.indexOf('global.BASELINE_fitnessRoutine?.render?.();',refresh);
  const event=app.indexOf("baseline:fitness-workout-completed",render);
  assert.ok(capture>=0,'completed session identity must be captured before current progress advances');
  assert.ok(refresh>capture,'shared plan cache must refresh after completion');
  assert.ok(render>refresh,'Routine Log must render only after refreshed plan state is available');
  assert.ok(event>render,'completion event must describe the captured completed session after the refreshed render');
});

test('Routine Log tooltip title and workout values use one session index',() => {
  const start=coherence.indexOf('function fitnessPlanCaption(plan,sessions)');
  const end=coherence.indexOf('function fitnessMarkers(date)',start);
  const caption=coherence.slice(start,end);
  assert.ok(start>=0 && end>start,'fitnessPlanCaption must exist');
  assert.match(caption,/const index=Math\.max\(1,Number\(session\?\.session_index \|\| session\?\.sessionIndex\) \|\| 1\)/);
  assert.match(caption,/workForSession\(items,index\)/);
  assert.match(caption,/Session \$\{index\}/);
  assert.doesNotMatch(caption,/workForSession\(items,index\s*[+-]\s*1\)/);
});

test('attribution fix is cache-busted so browsers cannot keep the stale completion runtime',() => {
  assert.match(app,/const BUILD = 'BASELINE_FITNESS_ROUTINE_LOG_SESSION_ATTRIBUTION_20260828_2';/);
  assert.match(html,/baseline-fitness-app\.js\?v=BASELINE_FITNESS_ROUTINE_LOG_SESSION_ATTRIBUTION_20260828_2/);
  assert.doesNotMatch(html,/baseline-fitness-app\.js\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
});
