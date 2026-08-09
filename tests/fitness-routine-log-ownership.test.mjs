import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const shared = read('sitewide/js/baseline-routine-coherence-v12.js');
const fitnessLog = read('systems/baseline-fitness/js/fitness-routine-log-v1.js');
const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
const css = read('systems/baseline-fitness/css/fitness-routine-workspace-v2.css');

test('Fitness Routine Log is the sole owner of Calisthenics row actions', () => {
  assert.match(fitnessLog,/data-fitness-log-open-plan/);
  assert.match(fitnessLog,/data-fitness-log-remove-confirm/);
  assert.match(fitnessLog,/update_session\.php/);
  assert.match(fitnessLog,/action:'set_status',status:'planned'/);
  assert.doesNotMatch(shared,/decorateFitnessCalisthenicsLog|removeFitnessPlanEntry|data-fitness-remove-entry|update_session\.php/);
});

test('Fitness Log owns compact details and the calendar Log Date mirror', () => {
  assert.match(fitnessLog,/fitness-log-details-panel/);
  assert.match(fitnessLog,/fitnessCalendarLogDate/);
  assert.match(fitnessLog,/primary\.dispatchEvent\(new Event\('change',\{ bubbles:true \}\)\)/);
  assert.match(css,/\.fitness-log-details-panel\[hidden\]\{display:none!important\}/);
  assert.match(css,/grid-template-areas:\"views date\" \"nav nav\"/);
  assert.match(css,/row-gap:14px!important/);
});

test('Fitness Log owner loads after the base renderer and before shared coherence', () => {
  const base=loader.indexOf('fitness-routine-workspace-v2.js');
  const log=loader.indexOf('fitness-routine-log-v1.js');
  const sharedIndex=loader.indexOf('baseline-routine-coherence-v12.js');
  assert.ok(base>=0 && base<log && log<sharedIndex);
});
