import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-massage/baseline-massage.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const fallback = fs.readFileSync('sitewide/js/baseline-tabs.js', 'utf8');
const htaccess = fs.readFileSync('.htaccess', 'utf8');

function occurrences(source, pattern) {
  return (source.match(pattern) || []).length;
}

test('Massage has one authoritative three-page navigation structure', () => {
  assert.equal(occurrences(html, /class="tab"[^>]+data-target="system"/g), 1);
  assert.equal(occurrences(html, /class="tab"[^>]+data-target="library"/g), 1);
  assert.equal(occurrences(html, /class="tab"[^>]+data-target="planner"/g), 1);
  assert.doesNotMatch(html, /data-target="types"/);
  assert.doesNotMatch(html, /<section[^>]+id="types"/);
  assert.equal(occurrences(html, /<section class="section(?: active)?" id="(?:system|library|planner)"/g), 3);
});

test('Types of Massage is contained within Massage Library', () => {
  const libraryStart = html.indexOf('<section class="section" id="library">');
  const plannerStart = html.indexOf('<section class="section" id="planner">');
  assert.ok(libraryStart >= 0 && plannerStart > libraryStart);
  const library = html.slice(libraryStart, plannerStart);
  assert.match(library, /aria-label="Types of Massage"/);
  assert.match(library, /data-type-tab="swedishType"/);
  assert.match(library, /data-type-tab="sportsType"/);
  assert.match(library, /id="massageLibraryTabs"/);
  assert.match(library, /id="massageLibraryGrid"/);
});

test('all three Massage planner modes are present and click-bound', () => {
  for (const mode of ['provider', 'focused', 'advanced']) {
    assert.match(html, new RegExp(`data-planner-mode="${mode}"`));
    assert.match(html, new RegExp(`data-planner-panel="${mode}"`));
  }
  assert.match(html, /qsa\('\[data-planner-mode\]'\)\.forEach\(btn => btn\.addEventListener\('click'/);
  assert.match(html, /panel\.classList\.toggle\('active', panel\.dataset\.plannerPanel === btn\.dataset\.plannerMode\)/);
});

test('custom pressure and pace fields remain conditional with provider-led defaults', () => {
  assert.equal(occurrences(html, /Provider to check and adjust/g) >= 3, true);
  assert.equal(occurrences(html, /Provider to shape it/g) >= 3, true);
  assert.equal(occurrences(html, /Custom preference/g) >= 6, true);
  assert.match(html, /const show = select\.value === 'Custom preference';/);
  assert.match(html, /if\(row\) row\.hidden = !show;/);
  assert.match(html, /data-custom-target="providerPressureCustom"/);
  assert.match(html, /id="providerPressureCustomRow" hidden/);
  assert.match(html, /id="providerPaceCustomRow" hidden/);
});

test('clean Massage routes agree across server, primary router, and fallback router', () => {
  assert.match(htaccess, /RewriteRule \^baseline-massage\/\(system\|library\|planner\)\/\?\$ systems\/baseline-massage\/baseline-massage\.html \[L,QSA\]/);
  assert.match(htaccess, /RewriteRule \^baseline-massage\/types\/\?\$ \/baseline-massage\/library \[R=302,L\]/);
  for (const source of [shared, fallback]) {
    assert.match(source, /baseline-massage[^\n]+system[^\n]+library[^\n]+planner/);
    assert.doesNotMatch(source, /baseline-massage[^\n]+types:'types'/);
  }
  assert.doesNotMatch(html, /history\.(?:pushState|replaceState)/);
  assert.doesNotMatch(html, /^(?:<<<<<<<|=======|>>>>>>>)/m);
});
