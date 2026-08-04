import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
const enhancement = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'), 'utf8');
const css = readFileSync(resolve(root, 'systems/baseline-natural-skincare/css/skincare-routine-enhancements.css'), 'utf8');
const schema = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/schema.php'), 'utf8');
const endpoint = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/routine_groups.php'), 'utf8');

test('routine enhancement assets load after the model and before the interface', () => {
  const modelIndex = html.indexOf('skincare-routine-model.js');
  const enhancementIndex = html.indexOf('skincare-routine-enhancements.js');
  const interfaceIndex = html.indexOf('skincare-routine.js');
  assert.ok(modelIndex >= 0);
  assert.ok(enhancementIndex > modelIndex);
  assert.ok(interfaceIndex > enhancementIndex);
  assert.match(html, /skincare-routine-enhancements\.css\?v=SKINCARE_ROUTINE_CALENDAR_GROUPS_20260804_1/);
});

test('Routine Summary replaces the old My Routine summary heading', () => {
  assert.match(html, /data-routine-view="summary"[^>]*>Routine Summary<\/button>/);
  assert.match(html, /<h2>Routine Summary<\/h2>/);
  assert.doesNotMatch(html, /<h2>My Routine<\/h2>\s*<h3>Routine summary<\/h3>/);
});

test('summary benefits are forced to comprehensive mode', () => {
  assert.match(enhancement, /MODEL\.benefitText\(item, 'comprehensive'\)/);
  assert.match(enhancement, /routine-summary-item-comprehensive/);
});

test('Routine Log receives a full-width monthly completion calendar', () => {
  assert.match(enhancement, /Monthly Routine Calendar/);
  assert.match(enhancement, /routine-calendar-card/);
  assert.match(enhancement, /completedItemsForDate/);
  assert.match(css, /\.routine-calendar-grid/);
  assert.match(css, /\.routine-calendar-day\.has-routine/);
});

test('visibility uses a compact themed labelled control', () => {
  assert.match(enhancement, /Routine Visibility/);
  assert.match(css, /\.routine-visibility-control/);
  assert.match(css, /width:82px!important/);
});

test('users can create, rename, remove and assign routine groups', () => {
  assert.match(enhancement, /Create group/);
  assert.match(enhancement, /function createGroup\(/);
  assert.match(enhancement, /function renameGroup\(/);
  assert.match(enhancement, /function removeGroup\(/);
  assert.match(enhancement, /data-routine-group-select/);
  assert.match(endpoint, /skincare_routine_groups/);
  assert.match(schema, /CREATE TABLE IF NOT EXISTS skincare_routine_groups/);
});

test('Oil-Based Cleansing Shower is available as a clear UK-facing routine label', () => {
  assert.match(enhancement, /Oil-Based Cleansing Shower/);
  assert.match(enhancement, /without relying on conventional body wash or shampoo/);
});
