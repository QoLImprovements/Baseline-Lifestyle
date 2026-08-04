import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const model = require('../systems/baseline-natural-skincare/js/skincare-routine-comprehensive-benefits.js');
const html = fs.readFileSync(new URL('../systems/baseline-natural-skincare/baseline-natural-skincare.html', import.meta.url), 'utf8');
const routineUi = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine.js', import.meta.url), 'utf8');
const routineCss = fs.readFileSync(new URL('../systems/baseline-natural-skincare/css/skincare-routine.css', import.meta.url), 'utf8');
const shared = fs.readFileSync(new URL('../sitewide/js/baseline-shared.js', import.meta.url), 'utf8');
const fallbackTabs = fs.readFileSync(new URL('../sitewide/js/baseline-tabs.js', import.meta.url), 'utf8');
const htaccess = fs.readFileSync(new URL('../.htaccess', import.meta.url), 'utf8');
const api = fs.readFileSync(new URL('../systems/baseline-natural-skincare/api/routine_state.php', import.meta.url), 'utf8');

test('My Routine sits between Recipes and Ingredient Library and retains refresh-safe routing', () => {
  assert.match(html, /data-target="recipes">Recipes<\/button>[\s\S]*?data-target="routine">My Routine<\/button>[\s\S]*?data-target="ingredients">Ingredient Library<\/button>/);
  assert.match(html, /<section class="section" id="routine">/);
  assert.match(shared, /routine:'my-routine'/);
  assert.match(fallbackTabs, /routine:"my-routine"/);
  assert.match(
    htaccess,
    /RewriteRule \^baseline-natural-skincare\/\(system\|recipes\|ingredient-library\|skin-support-system\|my-routine\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html \[L,QSA\]/
  );
});

test('routine workspace uses four ordered subtabs and full-width panels', () => {
  assert.match(html, /data-routine-view="log"[^>]*>Routine Log<\/button>[\s\S]*?data-routine-view="summary"[^>]*>Routine Summary<\/button>[\s\S]*?data-routine-view="plan"[^>]*>Routine Plan<\/button>[\s\S]*?data-routine-view="public"[^>]*>Public Routines<\/button>/);
  for (const panel of ['log', 'summary', 'plan', 'public']) {
    assert.match(html, new RegExp(`data-routine-panel="${panel}"`));
  }
  assert.match(routineCss, /#routine \.routine-panel \.card\{width:100%/);
  assert.doesNotMatch(html, /class="routine-topbar"/);
  assert.doesNotMatch(html, /id="routineVisibilityDetail"/);
});

test('Routine Summary contains compact visibility and sends empty plans to Routine Plan', () => {
  assert.match(html, /<h2>Routine Summary<\/h2>/);
  assert.doesNotMatch(html, /<h3>Routine summary<\/h3>/i);
  assert.match(html, /Routine Visibility[\s\S]*id="routineVisibility"[^>]*class="routine-visibility-select"/);
  assert.match(html, /<option value="private">Private<\/option>/);
  assert.match(html, /<option value="public">Public<\/option>/);
  assert.match(routineUi, /No routine plan exists yet[\s\S]*data-open-routine-view=\\?"plan/);
  assert.match(routineUi, /VALID_VIEWS = new Set\(\['log', 'summary', 'plan', 'public'\]\)/);
});

test('benefits are fixed Baseline descriptions with brief and comprehensive modes', () => {
  assert.deepEqual(model.BENEFIT_MODES, [
    { value: 'brief', label: 'Brief' },
    { value: 'comprehensive', label: 'Comprehensive' }
  ]);
  const definition = model.ACTION_BY_ID.get('microcurrent');
  assert.ok(definition.benefitBrief.length > 20);
  assert.ok(definition.benefitComprehensive.length > definition.benefitBrief.length);
  const item = model.normaliseItem({
    actionId: 'microcurrent',
    benefit: 'User-written replacement that must not become authoritative.',
    benefitMode: 'comprehensive'
  });
  assert.equal(item.benefitMode, 'comprehensive');
  assert.equal(item.benefit, definition.benefitComprehensive);
  assert.equal(model.benefitText(item), definition.benefitComprehensive);
  assert.match(routineUi, /<span>Benefit summary<\/span><select/);
  assert.match(routineUi, /MODEL\.benefitText\(item\)/);
  assert.doesNotMatch(routineUi, /data-field="benefit"/);
});

test('routine action picker is searchable, grouped, functional and uses UK terminology', () => {
  assert.ok(model.ACTIONS.length >= 70, `expected at least 70 actions, received ${model.ACTIONS.length}`);
  assert.equal(new Set(model.ACTIONS.map((item) => item.id)).size, model.ACTIONS.length);
  assert.ok(model.GROUPS.length >= 12);
  assert.equal(model.ACTION_BY_ID.get('oil-cleanse').title, 'Anhydrous Oil Cleanse');
  assert.equal(model.ACTION_BY_ID.get('microcurrent').group, 'Devices — Electrical & Conductive');
  assert.equal(model.ACTION_BY_ID.get('radiofrequency').title, 'Radiofrequency (RF)');
  assert.equal(model.ACTION_BY_ID.get('professional-rf').group, 'Professional Treatments');
  assert.match(html, /id="routineActionSearch"[^>]*role="combobox"/);
  assert.match(html, /id="routineActionToggle"/);
  assert.match(html, /id="routineActionMenu"[^>]*role="listbox"/);
  assert.match(routineUi, /<optgroup label=/);
  assert.match(routineUi, /routine-action-group-label/);
  assert.match(routineUi, /toLocaleLowerCase\('en-GB'\)/);
  assert.match(routineUi, /chooseAction\([^)]*dataset\.actionOption\)/);
  assert.match(routineUi, /resolveTypedAction\(\)/);
  assert.match(model.ACTIONS.map((item) => item.title).join(' '), /Moisturiser/);
  assert.doesNotMatch(model.ACTIONS.map((item) => item.title).join(' '), /Moisturizer/);
});

test('removal uses a themed inline confirmation instead of deleting immediately', () => {
  assert.match(routineUi, /data-remove-request=/);
  assert.match(routineUi, /routine-remove-confirm/);
  assert.match(routineUi, /<span>Remove\?<\/span>/);
  assert.match(routineUi, /data-remove-confirm=/);
  assert.match(routineUi, /data-remove-cancel=/);
});

test('Public Routines uses an alphabetised profile dropdown rather than a search box', () => {
  assert.match(html, /id="publicRoutineName"[^>]*>/);
  assert.doesNotMatch(html, /id="routinePublicSearch"/);
  assert.match(routineUi, /localeCompare\(right, 'en-GB'/);
  assert.match(routineUi, /request\(\{ list: 'public' \}\)/);
});

test('frequency summaries support daily, selected days, weekly and as-needed routines', () => {
  assert.equal(model.frequencyText({ mode: 'daily' }), 'Every day');
  assert.equal(model.frequencyText({ mode: 'days', days: ['Monday', 'Thursday'] }), 'Monday, Thursday');
  assert.equal(model.frequencyText({ mode: 'weekly', timesPerWeek: 3 }), '3× each week');
  assert.equal(model.frequencyText({ mode: 'as-needed' }), 'As needed');
});

test('selected-day and weekly due logic uses the routine log', () => {
  const monday = '2026-08-03';
  const tuesday = '2026-08-04';
  const selectedDays = model.normaliseItem({
    id: 'selected-days',
    actionId: 'facial-steam',
    frequency: { mode: 'days', days: ['Monday'] }
  });
  assert.equal(model.dueStatus(selectedDays, monday, {}).due, true);
  assert.equal(model.dueStatus(selectedDays, tuesday, {}).due, false);

  const weekly = model.normaliseItem({
    id: 'weekly',
    actionId: 'microcurrent',
    frequency: { mode: 'weekly', timesPerWeek: 2 }
  });
  const oneDone = { '2026-08-03': { weekly: { completed: true } } };
  const twoDone = {
    '2026-08-03': { weekly: { completed: true } },
    '2026-08-04': { weekly: { completed: true } }
  };
  assert.equal(model.dueStatus(weekly, tuesday, oneDone).due, true);
  assert.equal(model.dueStatus(weekly, tuesday, twoDone).due, false);
});

test('public API returns the plan, lists public owners, and keeps completion logs private', () => {
  assert.match(api, /function bl_skincare_public_profiles/);
  assert.match(api, /ORDER BY lower\(u\.name\), u\.name/);
  assert.match(api, /'publicRoutine'=>\[/);
  const publicPayload = api.slice(api.indexOf("'publicRoutine'=>["), api.indexOf('];', api.indexOf("'publicRoutine'=>[")) + 2);
  assert.match(publicPayload, /'routine'=>/);
  assert.doesNotMatch(publicPayload, /logs/);
});

test('routine assets use fresh workspace cache keys', () => {
  assert.match(html, /skincare-routine\.css\?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1/);
  assert.match(html, /skincare-routine-model\.js\?v=SKINCARE_ROUTINE_WORKSPACE_20260804_1/);
  assert.match(html, /skincare-routine\.js\?v=SKINCARE_ROUTINE_PRODUCTS_20260804_1/);
});
