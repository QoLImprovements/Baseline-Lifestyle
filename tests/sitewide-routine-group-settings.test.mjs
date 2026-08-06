// Repository-authored verification refresh for the final sitewide My Routine branch.
// Final browser-stability verification after replacing the continuous observer loop.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync(new URL('../sitewide/js/baseline-routine-system.js', import.meta.url), 'utf8');
const groups = fs.readFileSync(new URL('../sitewide/js/baseline-routine-groups-settings.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../sitewide/css/baseline-routine-system.css', import.meta.url), 'utf8');
const skinLoader = fs.readFileSync(new URL('../systems/baseline-natural-skincare/js/skincare-routine-enhancements.js', import.meta.url), 'utf8');
const fitnessLoader = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace.js', import.meta.url), 'utf8');
const fitnessWorkspace = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-routine-workspace-v2.js', import.meta.url), 'utf8');
const multiplePlans = fs.readFileSync(new URL('../systems/baseline-fitness/js/fitness-multiple-plans.js', import.meta.url), 'utf8');

test('My Routine has one sitewide start-day setting and ordered calendar authority', () => {
  assert.match(shared, /__bl_sitewide_routine_settings_v1__/);
  assert.match(shared, /function startDayIndex/);
  assert.match(shared, /function orderedDays/);
  assert.match(shared, /date\.getDay\(\) - startDayIndex\(\)/);
  assert.match(groups, /Start day of week for My Routine/);
});

test('Skincare groups own settings, numbering, summary filtering and calendar links', () => {
  assert.match(groups, /data-bl-skin-group-settings-toggle/);
  assert.match(groups, /Set “What time” for this group/);
  assert.match(groups, /Set “How often” for this group/);
  assert.match(groups, /skinRoutineSummaryFilter/);
  assert.match(groups, /data-bl-summary-target/);
  assert.match(groups, /skinGroupNumber/);
  assert.match(css, /routine-plan-group\[data-plan-group\] \.routine-item \.routine-order\{display:none/);
});

test('Fitness uses the same group settings, numbering, summary and calendar markers', () => {
  assert.match(groups, /data-bl-fitness-section-settings-toggle/);
  assert.match(groups, /data-bl-fitness-plan-settings-toggle/);
  assert.match(groups, /fitnessSummaryGroupFilter/);
  assert.match(groups, /data-bl-fitness-summary-target/);
  assert.match(groups, /fitnessGroupNumber/);
  assert.match(fitnessWorkspace, /orderedDays/);
});

test('calisthenics plan creation and weekly range controls are functional', () => {
  assert.match(groups, /Apply a range/);
  assert.match(groups, /frequencyRange/);
  assert.match(groups, /Minimum times each week/);
  assert.match(groups, /Maximum times each week/);
  assert.match(multiplePlans, /location\.assign\('\/baseline-fitness\/my-routine\?new-plan=1'\)/);
});

test('shared layout guards alignment and banner containment', () => {
  assert.match(css, /SITEWIDE_ROUTINE_GROUP_SETTINGS_20260806_1/);
  assert.match(css, /#exerciseList \.ex-row/);
  assert.match(css, /\.bl-homebar\{left:0!important;right:0!important;width:100%!important/);
  assert.match(css, /\.bl-routine-group-settings-panel/);
});

test('both system loaders include the shared enhancement module', () => {
  assert.match(skinLoader, /baseline-routine-groups-settings\.js/);
  assert.match(fitnessLoader, /baseline-routine-groups-settings\.js/);
});
