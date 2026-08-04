import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const model = require('../systems/baseline-natural-skincare/js/skincare-routine-model.js');
const html = fs.readFileSync(new URL('../systems/baseline-natural-skincare/baseline-natural-skincare.html', import.meta.url), 'utf8');
const routineUi = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-shared.js', import.meta.url), 'utf8');
const fallbackTabs = fs.readFileSync(new URL('../sitewide/js/baseline-tabs.js', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-natural-skincare/api/routine_state.php', import.meta.url), 'utf8');

test('My Routine is a skincare tab with server and browser refresh-safe routes', () => {
  assert.match(html, /data-target="routine">My Routine<\/button>/);
  assert.match(html, /<section class="section" id="routine">/);
  assert.match(shared, /'baseline-natural-skincare\.html': \{ base:'\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html', hashTabs:true/);
  assert.match(fallbackTabs, /"baseline-natural-skincare\.html": \{ base:"\/systems\/baseline-natural-skincare\/baseline-natural-skincare\.html", hashTabs:true/);
  assert.match(shared, /routine:'my-routine'/);
  assert.match(fallbackTabs, /routine:"my-routine"/);
  assert.match(shared, /cfg\.hashTabs/);
  assert.match(fallbackTabs, /cfg\.hashTabs/);
  assert.match(
    htaccess,
    /RewriteRule \^baseline-natural-skincare\/\(system\|recipes\|ingredient-library\|skin-support-system\|my-routine\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html \[L,QSA\]/
  );
});

test('routine interface includes privacy, builder, summary, log and public lookup', () => {
  [
    'routineVisibility',
    'routineActionSelect',
    'routineItems',
    'routineSummary',
    'routineLogDate',
    'routineLogItems',
    'publicRoutineName',
    'publicRoutineResult'
  ].forEach((id) => assert.match(html, new RegExp(`id="${id}"`)));
  assert.match(html, /Private — only I can see it/);
  assert.match(html, /Public — others can view my plan/);
});

test('self-care dropdown catalogue is broad, data-driven and subcategorised', () => {
  assert.ok(model.ACTIONS.length >= 70, `expected at least 70 actions, received ${model.ACTIONS.length}`);
  assert.equal(new Set(model.ACTIONS.map((item) => item.id)).size, model.ACTIONS.length);
  assert.ok(model.GROUPS.length >= 12);
  assert.equal(model.ACTION_BY_ID.get('oil-cleanse').title, 'Anhydrous Oil Cleanse');
  assert.equal(model.ACTION_BY_ID.get('microcurrent').group, 'Devices — Electrical & Conductive');
  assert.equal(model.ACTION_BY_ID.get('radiofrequency').title, 'Radiofrequency (RF)');
  assert.equal(model.ACTION_BY_ID.get('radiofrequency').group, 'Devices — Light, Heat & Energy');
  assert.equal(model.ACTION_BY_ID.get('professional-rf').group, 'Professional Treatments');
  assert.equal(model.ACTION_BY_ID.get('custom').title, 'Custom Self-Care Action');
  assert.match(routineUi, /<optgroup label=/);
  assert.match(routineUi, /MODEL\.GROUPS/);
});

test('frequency summaries support daily, selected days, weekly and as-needed routines', () => {
  assert.equal(model.frequencyText({ mode: 'daily' }), 'Every day');
  assert.equal(model.frequencyText({ mode: 'days', days: ['Monday', 'Friday'] }), 'Monday, Friday');
  assert.equal(model.frequencyText({ mode: 'weekly', timesPerWeek: 3 }), '3× each week');
  assert.equal(model.frequencyText({ mode: 'as-needed' }), 'As needed');
});

test('selected-day and weekly due logic uses the routine log', () => {
  const selectedDays = model.normaliseItem({
    id: 'steam',
    actionId: 'facial-steam',
    frequency: { mode: 'days', days: ['Monday'] }
  });
  assert.equal(model.dueStatus(selectedDays, '2026-08-03', {}).due, true);
  assert.equal(model.dueStatus(selectedDays, '2026-08-04', {}).due, false);

  const weekly = model.normaliseItem({
    id: 'massage',
    actionId: 'facial-massage',
    frequency: { mode: 'weekly', timesPerWeek: 2 }
  });
  const logs = {
    '2026-08-03': { massage: { completed: true } },
    '2026-08-05': { massage: { completed: true } }
  };
  assert.equal(model.dueStatus(weekly, '2026-08-06', logs).due, false);
  assert.equal(model.dueStatus(weekly, '2026-08-06', logs).detail, 'Weekly target complete');
});

test('public API returns the routine plan but keeps completion logs private', () => {
  assert.match(api, /'publicRoutine'=>\[/);
  const start = api.indexOf('function bl_skincare_public_payload');
  const end = api.indexOf("\ntry{\n  $db", start);
  const publicPayload = api.slice(start, end);
  assert.ok(start >= 0 && end > start);
  assert.match(publicPayload, /'routine'=>/);
  assert.doesNotMatch(publicPayload, /'logs'=>/);
  assert.match(publicPayload, /routine_private/);
});

test('routine assets and route controllers use fresh cache keys', () => {
  assert.match(html, /skincare-routine\.css\?v=SKINCARE_MY_ROUTINE_20260804_1/);
  assert.match(html, /skincare-routine-model\.js\?v=SKINCARE_MY_ROUTINE_20260804_2/);
  assert.match(html, /skincare-routine\.js\?v=SKINCARE_MY_ROUTINE_20260804_2/);
  assert.match(html, /baseline-shared\.js\?v=SKINCARE_ROUTINE_REFRESH_SAFE_20260804_2/);
  assert.match(html, /baseline-tabs\.js\?v=SKINCARE_ROUTINE_REFRESH_SAFE_20260804_2/);
});
