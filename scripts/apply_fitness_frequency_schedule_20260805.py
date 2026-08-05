from pathlib import Path
import json


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        raise SystemExit(f"missing replacement anchor: {label}")
    return text.replace(old, new, 1)

# Expanded activity catalogue: add a deliberately mixed yoga option.
catalogue_path = Path('systems/baseline-fitness/js/fitness-activity-catalogue-v2.js')
catalogue = catalogue_path.read_text()
catalogue = replace_once(
    catalogue,
    "  const additions = [\n    ['other','Yoga','iyengar-yoga','Iyengar Yoga','minutes'],",
    "  const additions = [\n    ['other','Yoga','yoga-various','Yoga (Various)','minutes'],\n    ['other','Yoga','iyengar-yoga','Iyengar Yoga','minutes'],",
    'Yoga (Various) catalogue entry'
)
catalogue_path.write_text(catalogue)

# Non-calisthenics frequency: add monthly cadence and monthly due tracking.
workspace_path = Path('systems/baseline-fitness/js/fitness-routine-workspace-v2.js')
workspace = workspace_path.read_text()
workspace = replace_once(
    workspace,
    "    { value:'weekly', label:'A number of times each week' },\n    { value:'as-needed', label:'As needed' }",
    "    { value:'weekly', label:'A number of times each week' },\n    { value:'monthly', label:'A number of times each month' },\n    { value:'as-needed', label:'As needed' }",
    'monthly frequency option'
)
workspace = replace_once(
    workspace,
    "      timesPerWeek:Math.max(1, Math.min(14, Math.round(Number(source.timesPerWeek) || 1)))\n    };",
    "      timesPerWeek:Math.max(1, Math.min(14, Math.round(Number(source.timesPerWeek) || 1))),\n      timesPerMonth:Math.max(1, Math.min(31, Math.round(Number(source.timesPerMonth) || 1)))\n    };",
    'monthly normalisation'
)
workspace = replace_once(
    workspace,
    "    if (frequency.mode === 'weekly') return `${frequency.timesPerWeek}× each week`;\n    return 'As needed';",
    "    if (frequency.mode === 'weekly') return `${frequency.timesPerWeek}× each week`;\n    if (frequency.mode === 'monthly') return `${frequency.timesPerMonth}× each month`;\n    return 'As needed';",
    'monthly frequency text'
)
workspace = replace_once(
    workspace,
    "  function completedCountForWeek(itemId, date) {\n    const bounds = weekBounds(date);\n    return Object.entries(state.logs).reduce((count, [entryDate, entries]) => (\n      entryDate >= bounds.start && entryDate <= bounds.end && entries[itemId]?.completed ? count + 1 : count\n    ), 0);\n  }\n\n  function dueStatus(item, date) {",
    "  function completedCountForWeek(itemId, date) {\n    const bounds = weekBounds(date);\n    return Object.entries(state.logs).reduce((count, [entryDate, entries]) => (\n      entryDate >= bounds.start && entryDate <= bounds.end && entries[itemId]?.completed ? count + 1 : count\n    ), 0);\n  }\n\n  function monthBounds(value) {\n    const date = localDate(value);\n    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);\n    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);\n    return { start:isoDate(startDate), end:isoDate(endDate) };\n  }\n\n  function completedCountForMonth(itemId, date) {\n    const bounds = monthBounds(date);\n    return Object.entries(state.logs).reduce((count, [entryDate, entries]) => (\n      entryDate >= bounds.start && entryDate <= bounds.end && entries[itemId]?.completed ? count + 1 : count\n    ), 0);\n  }\n\n  function dueStatus(item, date) {",
    'monthly completion counter'
)
workspace = replace_once(
    workspace,
    "    if (item.frequency.mode === 'weekly') {\n      const remaining = Math.max(0, item.frequency.timesPerWeek - completedCountForWeek(item.id, date));\n      return { due:remaining > 0, detail:remaining > 0 ? `${remaining} remaining this week` : 'Weekly target complete' };\n    }\n    return { due:true, detail:'Optional / as needed' };",
    "    if (item.frequency.mode === 'weekly') {\n      const remaining = Math.max(0, item.frequency.timesPerWeek - completedCountForWeek(item.id, date));\n      return { due:remaining > 0, detail:remaining > 0 ? `${remaining} remaining this week` : 'Weekly target complete' };\n    }\n    if (item.frequency.mode === 'monthly') {\n      const remaining = Math.max(0, item.frequency.timesPerMonth - completedCountForMonth(item.id, date));\n      return { due:remaining > 0, detail:remaining > 0 ? `${remaining} remaining this month` : 'Monthly target complete' };\n    }\n    return { due:true, detail:'Optional / as needed' };",
    'monthly due status'
)
workspace = replace_once(
    workspace,
    "  function weeklyControl(item) {\n    if (item.frequency.mode !== 'weekly') return '';\n    return `<label class=\"field-stack\"><span>Times each week</span><input type=\"number\" min=\"1\" max=\"14\" value=\"${item.frequency.timesPerWeek}\" data-activity-id=\"${escapeHtml(item.id)}\" data-activity-field=\"timesPerWeek\"></label>`;\n  }",
    "  function weeklyControl(item) {\n    if (item.frequency.mode !== 'weekly') return '';\n    return `<label class=\"field-stack\"><span>Times each week</span><input type=\"number\" min=\"1\" max=\"14\" value=\"${item.frequency.timesPerWeek}\" data-activity-id=\"${escapeHtml(item.id)}\" data-activity-field=\"timesPerWeek\"></label>`;\n  }\n\n  function monthlyControl(item) {\n    if (item.frequency.mode !== 'monthly') return '';\n    return `<label class=\"field-stack\"><span>Times each month</span><input type=\"number\" min=\"1\" max=\"31\" value=\"${item.frequency.timesPerMonth}\" data-activity-id=\"${escapeHtml(item.id)}\" data-activity-field=\"timesPerMonth\"></label>`;\n  }",
    'monthly control function'
)
workspace = replace_once(
    workspace,
    "          ${weeklyControl(item)}\n        </div>",
    "          ${weeklyControl(item)}\n          ${monthlyControl(item)}\n        </div>",
    'monthly field rendering'
)
workspace = replace_once(
    workspace,
    "    if (field === 'timesPerWeek') item.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(control.value) || 1)));\n    scheduleSave();",
    "    if (field === 'timesPerWeek') item.frequency.timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(control.value) || 1)));\n    if (field === 'timesPerMonth') item.frequency.timesPerMonth = Math.max(1, Math.min(31, Math.round(Number(control.value) || 1)));\n    scheduleSave();",
    'monthly field update'
)
workspace_path.write_text(workspace)

# API persistence for monthly frequency.
api_path = Path('systems/baseline-fitness/api/routine_state.php')
api = api_path.read_text()
api = replace_once(
    api,
    "  if(!in_array($mode, ['daily','days','weekly','as-needed'], true)) $mode = 'weekly';",
    "  if(!in_array($mode, ['daily','days','weekly','monthly','as-needed'], true)) $mode = 'weekly';",
    'monthly API mode'
)
api = replace_once(
    api,
    "    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 1))),\n  ];",
    "    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 1))),\n    'timesPerMonth'=>max(1, min(31, (int)($source['timesPerMonth'] ?? 1))),\n  ];",
    'monthly API value'
)
api_path.write_text(api)

# Calisthenics generator UI: choose weekly count or named weekdays.
html_path = Path('systems/baseline-fitness/baseline-fitness.html')
html = html_path.read_text()
html = replace_once(
    html,
    '<label for="freq">Frequency</label> <select id="freq" class="field-select-fixed"><option value="1x">1× per week</option><option value="2x">2× per week</option><option value="3x">3× per week</option></select>',
    '<label for="freq">Days each week</label> <select id="freq" class="field-select-fixed"><option value="1x">1 day per week</option><option value="2x">2 days per week</option><option value="3x">3 days per week</option><option value="4x">4 days per week</option><option value="5x">5 days per week</option><option value="6x">6 days per week</option><option value="7x">7 days per week</option></select>',
    'calisthenics weekly count options'
)
anchor = '</div></div><div style="height:12px"></div><div class="row row-2"><div class="field-stack"><label for="lengthMode">Plan length</label>'
schedule_ui = '''</div></div><div style="height:12px"></div><div class="row row-2 calisthenics-schedule-row"><div class="field-stack"><label for="scheduleMode">Choose schedule by</label><select id="scheduleMode" class="field-select-fixed"><option value="weekly-count">Number of days each week</option><option value="specific-days">Specific weekdays</option></select></div><fieldset id="specificDayControls" class="fitness-plan-day-controls" hidden><legend>Specific weekdays</legend><label><input type="checkbox" data-plan-day="Monday">Monday</label><label><input type="checkbox" data-plan-day="Tuesday">Tuesday</label><label><input type="checkbox" data-plan-day="Wednesday">Wednesday</label><label><input type="checkbox" data-plan-day="Thursday">Thursday</label><label><input type="checkbox" data-plan-day="Friday">Friday</label><label><input type="checkbox" data-plan-day="Saturday">Saturday</label><label><input type="checkbox" data-plan-day="Sunday">Sunday</label></fieldset></div><div style="height:12px"></div><div class="row row-2"><div class="field-stack"><label for="lengthMode">Plan length</label>'''
html = replace_once(html, anchor, schedule_ui, 'calisthenics schedule UI')
html_path.write_text(html)

# Calisthenics scheduling and past-date rollover.
app_path = Path('systems/baseline-fitness/js/baseline-fitness-app.js')
app = app_path.read_text()
app = replace_once(
    app,
    "    plan.frequency = ['1x', '2x', '3x'].includes(plan.frequency) ? plan.frequency : '3x';\n    plan.lengthMode = plan.lengthMode === 'goal' ? 'goal' : 'sessions';\n    plan.days = Array.isArray(plan.days) ? plan.days.filter((day) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(day)).slice(0, Number(plan.frequency[0])) : [];",
    "    plan.frequency = ['1x', '2x', '3x', '4x', '5x', '6x', '7x'].includes(plan.frequency) ? plan.frequency : '3x';\n    plan.lengthMode = plan.lengthMode === 'goal' ? 'goal' : 'sessions';\n    plan.scheduleMode = plan.scheduleMode === 'specific-days' || (Array.isArray(plan.days) && plan.days.length) ? 'specific-days' : 'weekly-count';\n    plan.days = plan.scheduleMode === 'specific-days' && Array.isArray(plan.days) ? plan.days.filter((day) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(day)).slice(0, 7) : [];\n    if (plan.scheduleMode === 'specific-days' && plan.days.length) plan.frequency = `${plan.days.length}x`;",
    'calisthenics plan normalisation'
)
app = replace_once(
    app,
    "  function scheduleDates(plan) {\n    const selected = (plan.days || []).map((day) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)).filter((day) => day >= 0);\n    const dates = [];\n    let date = parseDate(plan.startDate) || parseDate(today());",
    "  function scheduleDates(plan) {\n    const selected = (plan.scheduleMode === 'specific-days' ? (plan.days || []) : []).map((day) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day)).filter((day) => day >= 0);\n    const dates = [];\n    const requestedStart = parseDate(plan.startDate) || parseDate(today());\n    const todayDate = parseDate(today());\n    let date = requestedStart < todayDate ? todayDate : requestedStart;",
    'schedule start cannot be in the past'
)
app = replace_once(
    app,
    "    const pattern = plan.frequency === '1x' ? [7] : plan.frequency === '2x' ? [3, 4] : [2, 2, 3];",
    "    const weeklyCount = Math.max(1, Math.min(7, Number(String(plan.frequency || '3x').replace('x', '')) || 3));\n    const pattern = Array.from({ length:weeklyCount }, (_, index) => Math.floor(((index + 1) * 7) / weeklyCount) - Math.floor((index * 7) / weeklyCount));",
    'one to seven days weekly distribution'
)
app = replace_once(
    app,
    "  function calculateProgress(rows, plan) {",
    "  function rollForwardPendingSessions(rows, plan) {\n    const source = Array.isArray(rows) ? rows.map((row) => Object.assign({}, row)) : [];\n    const pending = source.filter((row) => row.status !== 'done');\n    if (!pending.length || String(pending[0].scheduled_date || '') >= today()) return source;\n    const futurePlan = Object.assign({}, plan, { startDate:today(), sessions:pending.length });\n    const futureDates = scheduleDates(futurePlan);\n    let index = 0;\n    return source.map((row) => row.status === 'done' ? row : Object.assign({}, row, { scheduled_date:futureDates[index++] || today() }));\n  }\n\n  function calculateProgress(rows, plan) {",
    'pending session rollover'
)
app = replace_once(
    app,
    "    const plan = { version: 9, startDate: $('#startDate')?.value || today(), frequency: $('#freq')?.value || '3x', sessions: totalSessionsForUi(items), lengthMode, items, days: Array.isArray(existing.days) ? existing.days : [], timerStartDelay: Math.round(clamp(existing.timerStartDelay || 5, 1, 10)) };",
    "    const scheduleMode = $('#scheduleMode')?.value === 'specific-days' ? 'specific-days' : 'weekly-count';\n    const selectedDays = $$('#specificDayControls input[data-plan-day]:checked').map((control) => control.dataset.planDay);\n    const startDate = $('#startDate')?.value && $('#startDate').value >= today() ? $('#startDate').value : today();\n    const days = scheduleMode === 'specific-days' ? (selectedDays.length ? selectedDays : [['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][parseDate(startDate).getDay()]]) : [];\n    const frequency = scheduleMode === 'specific-days' ? `${days.length}x` : ($('#freq')?.value || '3x');\n    const plan = { version: 9, startDate, frequency, scheduleMode, sessions: totalSessionsForUi(items), lengthMode, items, days, timerStartDelay: Math.round(clamp(existing.timerStartDelay || 5, 1, 10)) };",
    'plan reads schedule mode'
)
app = replace_once(
    app,
    "      if ($('#freq')) $('#freq').value = '3x';\n      if ($('#lengthMode'))",
    "      if ($('#freq')) $('#freq').value = '3x';\n      if ($('#scheduleMode')) $('#scheduleMode').value = 'weekly-count';\n      $$('#specificDayControls input[data-plan-day]').forEach((control) => { control.checked = false; });\n      global.BASELINE_syncCalisthenicsSchedule?.();\n      if ($('#lengthMode'))",
    'reset schedule controls'
)
app = replace_once(
    app,
    "      if ($('#freq')) $('#freq').value = plan.frequency;\n      if ($('#lengthMode'))",
    "      if ($('#freq')) $('#freq').value = plan.frequency;\n      if ($('#scheduleMode')) $('#scheduleMode').value = plan.scheduleMode;\n      $$('#specificDayControls input[data-plan-day]').forEach((control) => { control.checked = plan.days.includes(control.dataset.planDay); });\n      global.BASELINE_syncCalisthenicsSchedule?.();\n      if ($('#lengthMode'))",
    'hydrate schedule controls'
)
app = app.replace(
    "current = { planId: cached.planId || 0, planJson: plan, sessions: Array.isArray(cached.sessions) ? cached.sessions.slice(0, plan.sessions) : sessionRows(plan), progress: cached.progress || calculateProgress(Array.isArray(cached.sessions) ? cached.sessions : sessionRows(plan), plan) };",
    "const cachedRows = rollForwardPendingSessions(Array.isArray(cached.sessions) ? cached.sessions.slice(0, plan.sessions) : sessionRows(plan), plan);\n    current = { planId: cached.planId || 0, planJson: plan, sessions: cachedRows, progress: calculateProgress(cachedRows, plan) };",
    1
)
app = app.replace(
    "    const rows = Array.isArray(saved.sessions) && saved.sessions.length ? saved.sessions.slice(0, plan.sessions) : sessionRows(plan);\n    current = { planId: saved.planId || 0, planJson: plan, sessions: rows, progress: saved.progress || calculateProgress(rows, plan) };",
    "    const rows = rollForwardPendingSessions(Array.isArray(saved.sessions) && saved.sessions.length ? saved.sessions.slice(0, plan.sessions) : sessionRows(plan), plan);\n    current = { planId: saved.planId || 0, planJson: plan, sessions: rows, progress: calculateProgress(rows, plan) };",
    1
)
app_path.write_text(app)

# Small controller for the new schedule controls.
controller_path = Path('systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js')
controller_path.write_text("""/* Baseline Fitness — calisthenics schedule mode controls. */
(function (global) {
  'use strict';
  if (global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__) return;
  global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__ = true;

  function today() {
    const date = new Date();
    const pad = (value) => String(value).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function sync() {
    const mode = document.getElementById('scheduleMode');
    const frequency = document.getElementById('freq');
    const days = document.getElementById('specificDayControls');
    const start = document.getElementById('startDate');
    if (start) {
      start.min = today();
      if (!start.value || start.value < today()) start.value = today();
    }
    if (!mode || !frequency || !days) return;
    const specific = mode.value === 'specific-days';
    days.hidden = !specific;
    frequency.disabled = specific;
    const frequencyField = frequency.closest('.field-stack');
    if (frequencyField) frequencyField.hidden = specific;
    if (specific) {
      const count = days.querySelectorAll('input[data-plan-day]:checked').length;
      frequency.value = `${Math.max(1, count)}x`;
    }
  }

  function bind() {
    const mode = document.getElementById('scheduleMode');
    const days = document.getElementById('specificDayControls');
    const start = document.getElementById('startDate');
    mode?.addEventListener('change', sync);
    days?.addEventListener('change', sync);
    start?.addEventListener('change', sync);
    sync();
  }

  global.BASELINE_syncCalisthenicsSchedule = sync;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind, { once:true });
  else bind();
})(typeof window !== 'undefined' ? window : globalThis);
""")

# Load the schedule controller with the routine workspace.
loader_path = Path('systems/baseline-fitness/js/fitness-routine-workspace.js')
loader = loader_path.read_text()
loader = replace_once(
    loader,
    "    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_3'))\n    .then(() => {",
    "    .then(() => load('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js?v=BASELINE_FITNESS_ROUTINE_WORKSPACE_20260805_4'))\n    .then(() => load('/systems/baseline-fitness/js/fitness-calisthenics-schedule-controls.js?v=BASELINE_CALISTHENICS_SCHEDULE_20260805_1'))\n    .then(() => {",
    'schedule controller loader'
)
loader_path.write_text(loader)

# Regression test and structure registration.
test_path = Path('tests/fitness-frequency-schedule.test.mjs')
test_path.write_text("""import test from 'node:test';
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
""")

package_path = Path('package.json')
package = json.loads(package_path.read_text())
structure = package['scripts']['test:structure']
if 'tests/fitness-frequency-schedule.test.mjs' not in structure:
    package['scripts']['test:structure'] = structure + ' tests/fitness-frequency-schedule.test.mjs'
package_path.write_text(json.dumps(package, indent=2) + '\n')
