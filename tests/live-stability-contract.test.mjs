import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('live stability runtime covers the reported refresh and persistence faults', () => {
  const loader = read('sitewide/js/baseline-live-stability.js');
  const core = read('sitewide/js/baseline-live-stability-core-v3.js');
  const js = `${loader}\n${core}`;
  assert.match(js, /__baseline_pending_recipe_route_v1__/);
  assert.doesNotMatch(js, /__baseline_fitness_body_view_v1__/);
  assert.match(js, /data-baseline-games-stable/);
  assert.match(js, /Voice recognition unavailable\./);
  assert.match(js, /prompt\.textContent = 'Voice recognition unavailable\.';/);
  assert.match(js, /expectedRevision/);
  assert.match(js, /Badminton could not save to the server/);
  assert.match(js, /location\.assign\('\/home\/1'\)/);
  assert.match(loader, /baseline-unified-favorites-v1\.js/);
  assert.match(loader, /baseline-detect-word-feedback-v1\.js/);
  assert.doesNotMatch(loader, /installRoutineInterfaceRepairs/);
});

test('Badminton has one revision-aware writer and never retries stale shared state',()=>{
  const core=read('sitewide/js/baseline-live-stability-core-v3.js');
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  assert.match(badminton,/__BASELINE_BADMINTON_CANONICAL_SAVED_DATA__/);
  assert.match(badminton,/expectedRevision:Number\.isInteger\(serverRevision\)/);
  assert.match(badminton,/data\.error==='revision_conflict'/);
  assert.match(badminton,/serverSaveConflict=true/);
  assert.match(badminton,/CONFLICT_BACKUP_KEY/);
  assert.doesNotMatch(core,/saved = await request\('POST', \{ state:local, expectedRevision:revision \}\)/);
});

test('shared and protected runtimes load stability without reordering first-paint CSS', () => {
  const shared = read('sitewide/js/baseline-shared.js');
  const protectedAccess = read('sitewide/js/baseline-protected-access.js');
  assert.match(shared, /BASELINE-LIVE-STABILITY-LOADER-20260803/);
  assert.match(shared, /baseline-live-stability\.js/);
  assert.match(protectedAccess, /baseline-live-stability\.css/);
  assert.match(protectedAccess, /loadLiveStability/);
  assert.doesNotMatch(protectedAccess, /appendChild\(existing\)/);
  assert.match(protectedAccess, /if\(document\.body\) initialise\(\)/);
});

test('clean recipe detail routes serve the complete parent applications', () => {
  const htaccess = read('.htaccess');
  assert.match(htaccess, /baseline-food-approach\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-food-approach\/baseline-food-approach\.html/);
  assert.match(htaccess, /baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html/);
  assert.doesNotMatch(htaccess, /baseline-food-approach\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-food-approach\/recipes\/\$1\.html/);
});

test('Fitness route generation is canonical and legacy malformed nested URLs recover', () => {
  const fitness = read('systems/baseline-fitness/js/baseline-fitness-app.js');
  const routineStructure = read('systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  const shared = read('sitewide/js/baseline-shared.js');
  const fallbackTabs = read('sitewide/js/baseline-tabs.js');
  const htaccess = read('.htaccess');
  const testServer = read('tests/support/production-static-server.cjs');

  assert.match(fitness, /const ROUTE_BASE = '\/baseline-fitness'/);
  assert.match(fitness, /const BODY_ROUTE_RE = /);
  assert.match(fitness, /function bodyViewFromPath/);
  assert.match(fitness, /function bodyRoutePath/);
  assert.match(fitness, /setBodySubtab\(button\.dataset\.bodyView, 'push'\)/);
  assert.match(fitness, /const ROUTINE_ROUTE_RE = /);
  assert.match(fitness, /return `\$\{ROUTE_BASE\}\/\$\{canonical\}`/);
  assert.doesNotMatch(fitness, /const base = location\.pathname\.replace\(ROUTE_RE/);

  assert.match(shared, /'my-body':'my-body'/);
  assert.match(shared, /library:'library'/);
  assert.match(shared, /baseline-fitness\\\/my-body/);
  assert.match(shared, /baseline-fitness\\\/my-routine/);
  assert.match(shared, /baseline-natural-skincare\\\/my-routine/);
  assert.match(shared, /preserveNestedRoutinePath/);
  assert.match(shared, /const nextUrl = preserveNestedRoutinePath/);
  assert.match(shared, /const initialHashView = initialHash \? parseViewStateHash\(initialHash\) : null/);
  assert.match(shared, /const initialCleanRouteView = cleanRouteStateFromPath\(\)/);
  assert.match(shared, /initialHashView \|\| initialCleanRouteView/);

  assert.match(routineStructure, /function ownsNestedRoutinePath/);
  assert.match(routineStructure, /if \(!ownsNestedRoutinePath\(url\.pathname\).*allowEnter/s);
  assert.match(routineStructure, /const route=routeFromPath\(\);\s*if \(!route\) return;/);

  assert.match(fallbackTabs, /"my-body":"my-body"/);
  assert.match(fallbackTabs, /library:"library"/);

  assert.match(htaccess, /baseline-fitness\/my-body\/\(profile\|services\)/);
  assert.match(htaccess, /Recover malformed top-level Fitness URLs produced by the former nested route builder/);
  assert.match(htaccess, /baseline-fitness\/my-routine.*\(system\|my-plan\|my-body\|library\|exercise-library\|achievements\).*\/baseline-fitness\/\$1/s);
  assert.match(testServer, /malformedFitness/);
  assert.match(testServer, /system\|workout-routine\|library\|exercise-library\|achievements\|my-routine\|my-plan\|my-body/);
});

test('protected key and Charity banner controls have stable first-paint geometry', () => {
  const css = read('sitewide/css/baseline-protected-key-placement.css');
  assert.match(css, /BASELINE-LIVE-KEY-FIRST-PAINT-20260803/);
  assert.match(css, /> \.bl-protected-key\{order:2/);
  assert.match(css, /data-app="charity-shop"/);
  assert.match(css, /#bl-beats-toggle/);
  assert.match(css, /#bl-auth-toggle/);
});

test('temporary recipe handoff remains session-only while Fitness body view is URL-owned', () => {
  const mapping = JSON.parse(read('sitewide/migration/browser_storage_map.json'));
  const rules = mapping.rules || [];
  const recipeRoute = rules.find(candidate => candidate.id === 'pending-recipe-route');
  assert.equal(recipeRoute?.decision, 'expire-with-session');
  assert.equal(recipeRoute?.target, null);
  assert.equal(rules.some(candidate => candidate.id === 'fitness-body-view'), false);

  const core = read('sitewide/js/baseline-live-stability-core-v3.js');
  const workspace = read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  assert.doesNotMatch(core, /FITNESS_BODY_VIEW_KEY|installFitnessBodyViewMemory/);
  assert.doesNotMatch(workspace, /getEntriesByType\?\.\('navigation'\)|getEntriesByType\('navigation'\)/);
  assert.match(workspace, /return String\(global\.location\?\.pathname \|\| ''\)/);
});
