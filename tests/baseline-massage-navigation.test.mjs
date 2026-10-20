import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-massage/baseline-massage.html', 'utf8');
const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
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

test('Types Of Massage is contained within Massage Library', () => {
  const libraryStart = html.indexOf('<section class="section" id="library">');
  const plannerStart = html.indexOf('<section class="section" id="planner">');
  assert.ok(libraryStart >= 0 && plannerStart > libraryStart);
  const library = html.slice(libraryStart, plannerStart);
  assert.match(library, /aria-label="Massage Library categories"/);
  assert.match(library, /data-library-category="Types Of Massage"/);
  assert.match(library, /id="massageLibraryTabs"/);
  assert.match(library, /id="massageLibraryGrid"/);
});

test('all three Massage planner modes are present and click-bound', () => {
  for (const mode of ['provider', 'focused', 'advanced']) {
    assert.match(html, new RegExp(`data-planner-mode="${mode}"`));
    assert.match(html, new RegExp(`data-planner-panel="${mode}"`));
  }
  assert.match(html, /function activatePlannerMode\(mode,historyMode\)/);
  assert.match(html, /qsa\('\[data-planner-mode\]'\)\.forEach\(btn => btn\.addEventListener\('click'/);
  assert.match(html, /activatePlannerMode\(btn\.dataset\.plannerMode,'push'\)/);
  assert.match(html, /panel\.classList\.toggle\('active', panel\.dataset\.plannerPanel === next\)/);
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

test('clean Massage routes agree across server and the canonical shared router', () => {
  assert.match(htaccess, /RewriteRule \^baseline-massage\/\(system\|library\|planner\)\/\?\$ systems\/baseline-massage\/baseline-massage\.html \[L,QSA\]/);
  assert.match(htaccess, /RewriteRule \^baseline-massage\/types\/\?\$ \/baseline-massage\/library \[R=302,L\]/);
  assert.match(shared, /baseline-massage[^\n]+system[^\n]+library[^\n]+planner/);
  assert.doesNotMatch(shared, /baseline-massage[^\n]+types:'types'/);
  assert.doesNotMatch(html, /baseline-tabs\.js/);
  assert.match(html, /function writeMassageRoute\(key,value,mode='push'\)/);
  assert.match(html, /history\.replaceState\(payload,'',next\)/);
  assert.match(html, /history\.pushState\(payload,'',next\)/);
  assert.match(html, /addEventListener\('popstate',restoreMassageNestedRoute\)/);
  assert.doesNotMatch(html, /^(?:<<<<<<<|=======|>>>>>>>)/m);
});

test('Massage static library and body-area controls exist before runtime binding', () => {
  assert.equal(occurrences(html, /class="library-tab"/g), 4);
  assert.equal(occurrences(html, /class="library-card library-entry"/g), 45);
  assert.equal(occurrences(html, /<input type="checkbox" id="area_/g), 25);
  assert.match(html, /id="providerMassageTheme"[\s\S]*?<option selected>Comfort &amp; Relaxation<\/option>/);
  assert.match(html, /id="focusedMassageTheme"[\s\S]*?<option selected>Comfort &amp; Relaxation<\/option>/);
  assert.equal(html.includes('function renderLibrary()'), false);
  assert.equal(html.includes('function renderAreas()'), false);
  assert.equal(html.includes('const libraryData = ['), false);
  assert.equal(html.includes('const techniqueData = ['), false);
  assert.equal(html.includes('const areaGroups = ['), false);
  assert.equal(html.includes('function bindLibrary()'), true);
});
