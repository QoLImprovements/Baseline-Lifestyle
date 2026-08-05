import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const workspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const catalogue = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-activity-catalogue-v2.js', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../systems/baseline-fitness/js/baseline-fitness-app.js', import.meta.url), 'utf8');
const html = fs.readFileSync(new URL('../systems/baseline-fitness/baseline-fitness.html', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-fitness/api/routine_state.php', import.meta.url), 'utf8');

test('fitness activities support monthly frequency', () => {
  assert.match(workspace, /value:'monthly', label:'A number of times each month'/);
  assert.match(workspace, /timesPerMonth/);
  assert.match(workspace, /remaining this month/);
  assert.match(api, /'monthly'/);
  assert.match(api, /timesPerMonth/);
});

test('Yoga Various is available in the Yoga catalogue', () => {
  assert.match(catalogue, /'yoga-various','Yoga \(Various\)'/);
});

test('calisthenics can use weekly count or specific weekdays', () => {
  assert.match(html, /id="scheduleMode"/);
  assert.match(html, /Number of days each week/);
  assert.match(html, /Specific weekdays/);
  assert.match(html, /value="7x">7 days per week/);
  assert.match(app, /scheduleMode/);
  assert.match(app, /weeklyCount/);
});

test('unfinished calisthenics sessions cannot remain in the past', () => {
  assert.match(app, /requestedStart < todayDate \? todayDate : requestedStart/);
  assert.match(app, /function rollForwardPendingSessions/);
  assert.match(app, /scheduled_date:futureDates/);
});
