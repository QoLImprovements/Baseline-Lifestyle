import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('live stability runtime covers the reported refresh and persistence faults', () => {
  const js = read('sitewide/js/baseline-live-stability.js');
  assert.match(js, /__baseline_pending_recipe_route_v1__/);
  assert.match(js, /__baseline_fitness_body_view_v1__/);
  assert.match(js, /data-baseline-games-stable/);
  assert.match(js, /spokenResponses === false/);
  assert.match(js, /expectedRevision/);
  assert.match(js, /Badminton could not save to the server/);
  assert.match(js, /location\.assign\('\/home\/1'\)/);
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

test('protected key and Charity banner controls have stable first-paint geometry', () => {
  const css = read('sitewide/css/baseline-protected-key-placement.css');
  assert.match(css, /BASELINE-LIVE-KEY-FIRST-PAINT-20260803/);
  assert.match(css, /> \.bl-protected-key\{order:2/);
  assert.match(css, /data-app="charity-shop"/);
  assert.match(css, /#bl-beats-toggle/);
  assert.match(css, /#bl-auth-toggle/);
});

test('new session-only navigation keys have explicit non-resource decisions', () => {
  const mapping = JSON.parse(read('sitewide/migration/browser_storage_map.json'));
  const rules = mapping.rules || [];
  for (const id of ['pending-recipe-route', 'fitness-body-view']) {
    const rule = rules.find(candidate => candidate.id === id);
    assert.equal(rule?.decision, 'expire-with-session');
    assert.equal(rule?.target, null);
  }
});
