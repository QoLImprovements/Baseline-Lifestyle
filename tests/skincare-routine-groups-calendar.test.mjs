import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
const loader = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'), 'utf8');
const canonical = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-canonical.js'), 'utf8');
const core = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine.js'), 'utf8');
const shared = readFileSync(resolve(root, 'sitewide/js/baseline-routine-system.js'), 'utf8');
const canonicalCss = readFileSync(resolve(root, 'sitewide/css/baseline-routine-canonical-v1.css'), 'utf8');
const catalogue = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-catalogue-v2.js'), 'utf8');
const schema = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/schema.php'), 'utf8');
const endpoint = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/routine_groups.php'), 'utf8');
const routineEndpoint = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/routine_state.php'), 'utf8');

test('Skincare loader uses one canonical renderer with no competing observer stack', () => {
  assert.match(loader, /baseline-routine-system\.js/);
  assert.match(loader, /skincare-routine-canonical\.js/);
  assert.match(loader, /baseline-routine-canonical-v1\.css/);
  assert.doesNotMatch(loader, /skincare-routine-sitewide-v4|baseline-routine-coherence-v4|routine-coherence-events/);
  assert.doesNotMatch(loader, /MutationObserver/);
  assert.doesNotMatch(canonical, /MutationObserver|setInterval/);
  assert.match(canonical, /function stableHtml/);
});

test('Routine Summary remains comprehensive and grouped by the user’s Routine Plan groups', () => {
  assert.match(html, /data-routine-view="summary"[^>]*>Routine Summary<\/button>/);
  assert.match(canonical, /MODEL\.benefitText\(item, 'comprehensive'\)/);
  assert.match(canonical, /function groupedSections/);
  assert.match(canonical, /bl-canonical-summary-group/);
  assert.match(canonical, /Routine group/);
  assert.match(canonical, /Product \/ recipe/);
});

test('canonical log controls use the native state owner without visible replacement loops', () => {
  assert.match(canonical, /data-canonical-log-complete/);
  assert.match(canonical, /data-canonical-log-note/);
  assert.match(canonical, /function setCanonicalLog/);
  assert.match(canonical, /function setCanonicalNote/);
  assert.match(core, /data-log-complete/);
  assert.match(core, /data-log-note/);
  assert.match(canonicalCss, /\.bl-canonical-group-complete input/);
  assert.doesNotMatch(canonical, /requestAnimationFrame|MutationObserver|setInterval/);
});

test('Skincare calendar includes Week and Month and renders only on explicit events', () => {
  assert.match(canonical, /data-canonical-calendar-view="week"/);
  assert.match(canonical, /data-canonical-calendar-view="month"/);
  assert.match(canonical, /function renderCalendar/);
  assert.match(canonical, /UI\?\.weekDates/);
  assert.match(canonical, /UI\?\.monthDates/);
  assert.match(canonicalCss, /\.bl-canonical-week/);
  assert.match(shared, /function monthDates/);
});

test('users can create, rename, remove and assign routine groups', () => {
  assert.match(canonical, /function createGroup\(/);
  assert.match(canonical, /function updateGroup\(/);
  assert.match(canonical, /function removeGroup\(/);
  assert.match(canonical, /data-canonical-group-title/);
  assert.match(canonical, /data-canonical-item-group/);
  assert.match(canonical, /applyFrequency/);
  assert.match(canonical, /applyTime/);
  assert.match(endpoint, /skincare_routine_groups/);
  assert.match(schema, /CREATE TABLE IF NOT EXISTS skincare_routine_groups/);
});

test('group numbers and completion belong to the group rather than every step', () => {
  assert.match(canonical, /bl-canonical-number/);
  assert.match(canonical, /data-canonical-complete-group/);
  assert.match(canonical, /Complete group/);
  assert.doesNotMatch(canonical, /data-release-number/);
  assert.doesNotMatch(canonical, /bl-v4-number/);
});

test('Public Routines return groups and show a planned calendar without logs', () => {
  assert.match(canonical, /publicRoutine\.groups/);
  assert.match(canonical, /publicRoutine\.assignments/);
  assert.match(canonical, /function plannedWeek/);
  assert.match(canonical, /Planned calendar/);
  assert.match(routineEndpoint, /'groups'=>\$groups/);
  assert.match(routineEndpoint, /'assignments'=>\$assignments/);
  const publicPayload = routineEndpoint.slice(routineEndpoint.indexOf('function bl_skincare_public_payload'), routineEndpoint.indexOf("try{\n  $db = bl_skincare_db()"));
  assert.doesNotMatch(publicPayload, /'logs'/);
});

test('Oil-Based Cleansing Shower remains available with UK terminology', () => {
  assert.match(catalogue, /Oil-Based Cleansing Shower/);
  assert.match(catalogue, /without relying on conventional body wash or shampoo/);
});
