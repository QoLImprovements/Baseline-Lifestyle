import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = readFileSync(resolve(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
const loader = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-enhancements.js'), 'utf8');
const sitewide = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js'), 'utf8');
const shared = readFileSync(resolve(root, 'sitewide/js/baseline-routine-system.js'), 'utf8');
const sharedCss = readFileSync(resolve(root, 'sitewide/css/baseline-routine-system.css'), 'utf8');
const catalogue = readFileSync(resolve(root, 'systems/baseline-natural-skincare/js/skincare-routine-catalogue-v2.js'), 'utf8');
const cssEntry = readFileSync(resolve(root, 'systems/baseline-natural-skincare/css/skincare-routine-enhancements.css'), 'utf8');
const css = readFileSync(resolve(root, 'systems/baseline-natural-skincare/css/skincare-routine-sitewide-v4.css'), 'utf8');
const schema = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/schema.php'), 'utf8');
const endpoint = readFileSync(resolve(root, 'systems/baseline-natural-skincare/api/routine_groups.php'), 'utf8');

test('Skincare loader replaces the competing observer stack with one controlled renderer', () => {
  assert.match(loader, /baseline-routine-system\.js/);
  assert.match(loader, /skincare-routine-sitewide-v4\.js/);
  assert.doesNotMatch(loader, /skincare-routine-enhancements-core\.js/);
  assert.doesNotMatch(loader, /skincare-routine-group-ui-v3\.js/);
  assert.doesNotMatch(loader, /skincare-product-accessibility-v3\.js/);
  assert.match(sitewide, /UI\.observe\(root, patch\)/);
  assert.doesNotMatch(sitewide, /new MutationObserver/);
  assert.match(shared, /observer\.disconnect\(\)/);
  assert.match(shared, /observer\.observe\(root/);
});

test('Routine Summary remains the coherent comprehensive summary tab', () => {
  assert.match(html, /data-routine-view="summary"[^>]*>Routine Summary<\/button>/);
  assert.match(sitewide, /Benefits and practical role/);
  assert.match(sitewide, /Routine details/);
  assert.match(sitewide, /MODEL\.benefitText\(item, 'comprehensive'\)/);
  assert.match(sitewide, /bl-routine-summary-grid/);
});

test('Skincare log controls remain native and connected to the original data handlers', () => {
  assert.match(sitewide, /data-log-complete/);
  assert.match(sitewide, /data-log-note/);
  assert.match(css, /pointer-events:auto!important/);
  assert.match(css, /input\[type="checkbox"\]/);
  assert.match(css, /routine-log-note/);
  assert.match(css, /z-index:4!important/);
});

test('Skincare action menu is opaque, foreground and keyboard-compatible', () => {
  assert.match(css, /z-index:10000!important/);
  assert.match(css, /background:var\(--skin-cream\)!important/);
  assert.match(css, /opacity:1!important/);
  assert.match(cssEntry, /baseline-routine-system\.css/);
});

test('Skincare calendar includes Week and Month with full-width day rows', () => {
  assert.match(sitewide, /data-skincare-calendar-view="week"/);
  assert.match(sitewide, /data-skincare-calendar-view="month"/);
  assert.match(sitewide, /UI\.weekRow/);
  assert.match(sitewide, /bl-routine-week-list/);
  assert.match(sitewide, /UI\.monthDates/);
  assert.match(sharedCss, /\.bl-routine-week-list/);
  assert.match(sharedCss, /grid-template-columns:1fr!important/);
});

test('routine plan steps and groups are collapsed and expandable', () => {
  assert.match(sitewide, /data-skincare-step-toggle/);
  assert.match(sitewide, /Edit step/);
  assert.match(sitewide, /Close step/);
  assert.match(sitewide, /data-plan-group-collapse/);
  assert.match(sitewide, /routine-plan-group-body/);
});

test('users can create, rename, remove and assign routine groups', () => {
  assert.match(sitewide, /function createGroup\(/);
  assert.match(sitewide, /function updateGroup\(/);
  assert.match(sitewide, /field === 'title'/);
  assert.match(sitewide, /function removeGroup\(/);
  assert.match(sitewide, /data-routine-group-select/);
  assert.match(endpoint, /skincare_routine_groups/);
  assert.match(schema, /CREATE TABLE IF NOT EXISTS skincare_routine_groups/);
});

test('Oil-Based Cleansing Shower remains available with UK terminology', () => {
  assert.match(catalogue, /Oil-Based Cleansing Shower/);
  assert.match(catalogue, /without relying on conventional body wash or shampoo/);
});
