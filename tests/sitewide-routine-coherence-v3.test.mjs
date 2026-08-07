import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Skincare and Fitness load one shared stable My Routine authority', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const shared = '/sitewide/js/baseline-routine-authority-v7.js';

  assert.match(skincare, new RegExp(shared.replaceAll('/', '\\/')));
  assert.match(fitness, new RegExp(shared.replaceAll('/', '\\/')));
  assert.match(skincare, /baseline-public-routine-groups-v1\.js/);
  assert.match(fitness, /baseline-public-routine-groups-v1\.js/);
  assert.doesNotMatch(skincare, /baseline-routine-coherence-v4\.js|baseline-routine-coherence-events-v4\.js|baseline-routine-live-authority-v1\.js/);
  assert.doesNotMatch(fitness, /baseline-routine-coherence-v4\.js|baseline-routine-coherence-events-v4\.js|baseline-routine-live-authority-v1\.js/);
  assert.doesNotMatch(skincare, /baseline-skincare-routine-state-bridge-v1\.js/);
  assert.doesNotMatch(fitness, /fitness-routine-canonical|baseline-routine-canonical-v1|baseline-fitness-routine-summary-bridge-v1\.js/);
});

test('My Routine is hidden during deterministic loader restoration so intermediate views do not flash', () => {
  const skincare = read('systems/baseline-natural-skincare/js/skincare-routine-enhancements.js');
  const fitness = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.match(skincare, /data-skincare-routine-booting/);
  assert.match(skincare, /releaseBootShield/);
  assert.match(fitness, /data-fitness-routine-booting/);
  assert.match(fitness, /releaseBootShield/);
  assert.match(fitness, /restoreRequestedView/);
});

test('Create Another Plan and Open Plan have one authoritative handler before shared presentation authority', () => {
  const multiplePlans = read('systems/baseline-fitness/js/fitness-multiple-plans.js');
  const authority = read('sitewide/js/baseline-fitness-plan-control-authority-v1.js');
  const loader = read('systems/baseline-fitness/js/fitness-routine-workspace.js');

  assert.match(multiplePlans, />Create Another Plan<\/button>/);
  assert.match(authority, /#createCalisthenicsPlan/);
  assert.match(authority, /calisthenicsPlanSelect/);
  assert.match(authority, /stopImmediatePropagation/);
  assert.match(authority, /BASELINE_fitnessPlans\?\.openPlan/);
  assert.ok(loader.indexOf('baseline-fitness-plan-control-authority-v1.js') < loader.indexOf('baseline-routine-authority-v7.js'));
});

test('shared authority owns stable group numbering and Skincare grouped movement without repaint loops', () => {
  const shared = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(shared, /counter-reset:blPlanNumber/);
  assert.match(shared, /counter-reset:blLogNumber/);
  assert.match(shared, /routine-plan-group-ungrouped/);
  assert.match(shared, /function groupedMoveDistance/);
  assert.match(shared, /function handleGroupedMove/);
  assert.match(shared, /data-v7-group-complete/);
  assert.match(shared, /observer\.observe\(target,\{ childList:true,subtree:false \}\)/);
  assert.doesNotMatch(shared, /setInterval/);
  assert.doesNotMatch(shared, /observe\(document\.documentElement|observe\(document\.body/);
});

test('Routine Summary filtering is shared while Skincare follows its saved group order', () => {
  const shared = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(shared, /skinRoutineSummaryFilter/);
  assert.match(shared, /fitnessSummaryGroupFilter/);
  assert.match(shared, /function applySkinSummaryFilter/);
  assert.match(shared, /function applyFitnessSummaryFilter/);
  assert.match(shared, /const desired = data\.groups\.map/);
  assert.match(shared, /value\.startsWith\('entity:'\)/);
});

test('Public Routine presentation uses shared themed subtabs and public week completion data', () => {
  const publicViewer = read('sitewide/js/baseline-public-routine-groups-v1.js');
  const fitnessApi = read('systems/baseline-fitness/api/public_routine_v2.php');
  const skinApi = read('systems/baseline-natural-skincare/api/public_routine_v2.php');
  assert.match(publicViewer, /User's Log/);
  assert.match(publicViewer, /User's Routine Summary/);
  assert.match(publicViewer, /User's Plan/);
  assert.match(publicViewer, /bl-public-v2-calendar/);
  assert.match(publicViewer, /normaliseGroups\(data\.groups\)/);
  assert.match(publicViewer, /normaliseAssignments\(data\.assignments/);
  assert.match(fitnessApi, /'logs'=>\$logs/);
  assert.match(fitnessApi, /'sessions'=>\$sessions/);
  assert.match(skinApi, /'logs'=>\$logs/);
  assert.match(skinApi, /'groups'=>\$groups/);
});

test('weekly-count Fitness is frequency based, while specific-day sessions may be started early', () => {
  const policy = read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  assert.match(policy, /Range<\/label>/);
  assert.match(policy, /Not Selected/);
  assert.match(policy, /frequencyRangeMax/);
  assert.match(policy, /Current workout available within your weekly frequency/);
  assert.match(policy, /next\.access\.can = true/);
  assert.match(policy, /Start Early\?/);
  assert.match(policy, /data-start-early="yes"/);
  assert.match(policy, /data-start-early="no"/);
  assert.match(policy, /getPlansForDate\(date\)/);
  assert.match(policy, /specific-days/);
});

test('Visibility is compact and the full Skincare catalogue is available in Routine Plan', () => {
  const shared = read('sitewide/js/baseline-routine-authority-v7.js');
  assert.match(shared, /My Routine Visibility/);
  assert.match(shared, /bl-authority-public-head/);
  assert.match(shared, /BASELINE_SKINCARE_PRODUCT_LIBRARY/);
  assert.match(shared, /const byBrand = new Map/);
  assert.match(shared, /Custom product…/);
});

test('Obsolete dated Skincare and Food footers remain removed', () => {
  const apiClient = read('sitewide/js/baseline-api.js');
  assert.match(apiClient, /Natural Skincare\|Food Approach/);
  assert.match(apiClient, /footer\.remove\(\)/);
});
