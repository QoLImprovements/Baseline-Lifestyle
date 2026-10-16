import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html', 'utf8');
const css = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/css/weight-of-coherence.css', 'utf8');
const js = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js', 'utf8');

test('Weight of Coherence keeps the full-quality artwork and 20% guide', () => {
  assert.match(js, /the-weight-of-coherence\.png\?v=WEIGHT_OF_COHERENCE_FULL_20261016_2/);
  assert.match(js, /ctx\.globalAlpha\s*=\s*0\.20/);
  assert.doesNotMatch(js, /undimmed, full-quality reference view/);
});

test('jigsaw mobile startup uses bounded, deferred tray rendering', () => {
  assert.match(js, /Math\.min\(config\.trayPageSize,\s*12\)/);
  assert.match(js, /const batchSize=mobileLike\(\)\?2:6/);
  assert.match(js, /requestAnimationFrame\(paintBatch\)/);
  assert.match(js, /drawArtworkRegion\(c,g,margin\)/);
  assert.match(js, /btn\.disabled=true/);
});

test('jigsaw controls use compact icons and one settings authority', () => {
  assert.equal((html.match(/id="weightCoherenceSettingsDialog"/g) || []).length, 1);
  assert.equal((html.match(/id="weightCoherenceResetBtn"/g) || []).length, 1);
  assert.match(html, /id="weightCoherencePreviewBtn"[\s\S]*?aria-keyshortcuts="G"/);
  assert.match(html, /id="weightCoherenceShuffleBtn"[\s\S]*?aria-keyshortcuts="S"/);
  assert.match(html, /id="weightCoherenceToolbarSettingsBtn"/);
  assert.match(css, /\.weight-coherence-icon-action\{/);
  assert.doesNotMatch(css, /\.weight-coherence-actions\{display:grid/);
});
