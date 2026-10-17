import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html', 'utf8');
const css = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/css/weight-of-coherence.css', 'utf8');
const js = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js', 'utf8');

test('Weight of Coherence keeps the dark board and 50% artwork guide', () => {
  assert.match(js, /the-weight-of-coherence\.png\?v=WEIGHT_OF_COHERENCE_FULL_20261016_2/);
  assert.match(js, /const BOARD_BASE = '#080D22'/);
  assert.match(js, /const GUIDE_OPACITY = 0\.50/);
  assert.match(js, /ctx\.globalAlpha\s*=\s*GUIDE_OPACITY/);
  assert.doesNotThrow(() => new Function(js));
  assert.match(css, /\.weight-coherence-board-wrap\{[^}]*border:1px solid rgba\(206,215,255,\.28\)[^}]*background:#080D22/);
  assert.doesNotMatch(js, /rgba\(130,150,208,\.62\)/);
  assert.doesNotMatch(css, /rgba\(130,150,208,\.62\)/);
  assert.match(html, /weight-of-coherence\.css\?v=WEIGHT_OF_COHERENCE_DARK_BOARD_GUIDE_50_20261017_1/);
  assert.match(html, /weight-of-coherence\.js\?v=WEIGHT_OF_COHERENCE_DARK_BOARD_GUIDE_50_20261017_1/);
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


test('jigsaw tray navigation exposes left and right arrow hotkeys', () => {
  assert.match(html, /id="weightCoherencePrevBtn"[\s\S]*?aria-keyshortcuts="ArrowLeft"[\s\S]*?Previous Tray \[←\]/);
  assert.match(html, /id="weightCoherenceNextBtn"[\s\S]*?aria-keyshortcuts="ArrowRight"[\s\S]*?Next Tray \[→\]/);
  assert.match(js, /if\(key==='arrowleft'\)[\s\S]*?previousTray\(\)/);
  assert.match(js, /if\(key==='arrowright'\)[\s\S]*?nextTray\(\)/);
});

test('fullscreen drag ghost stays inside the fullscreen subtree', () => {
  assert.match(js, /const fullscreenHost=document\.fullscreenElement/);
  assert.match(js, /fullscreenHost===refs\.workspace \|\| fullscreenHost\.contains\(refs\.workspace\)/);
  assert.match(js, /ghostHost\.appendChild\(ghost\)/);
  assert.doesNotMatch(js, /document\.body\.appendChild\(ghost\)/);
});


test('fullscreen exposes F as the enter and exit hotkey', () => {
  assert.match(html, /id="weightCoherenceFullscreenBtn"[\s\S]*?aria-keyshortcuts="F"/);
  assert.match(html, /weight-coherence-hotkey">F<\/kbd>/);
  assert.match(js, /if\(key==='f'\)[\s\S]*?toggleFullscreen\(\)/);
  assert.match(js, /Exit full screen · F/);
  assert.match(js, /Full screen · F/);
});

test('four manual sorting trays flank the jigsaw and persist parked pieces', () => {
  assert.equal((html.match(/data-jigsaw-sort-tray="/g) || []).length, 4);
  assert.match(html, /weight-coherence-sort-column--left/);
  assert.match(html, /weight-coherence-sort-column--right/);
  assert.match(css, /grid-template-areas:"left board right"/);
  assert.match(js, /sortBins:\[\[\],\[\],\[\],\[\]\]/);
  assert.match(js, /sortBins:state\.sortBins\.map/);
  assert.match(js, /normalizeSortBins\(parsed\.sortBins,count,placed\)/);
  assert.match(js, /movePieceToSortBin\(drag\.id,Number\(sortTarget\.dataset\.jigsawSortTray\)\)/);
  assert.match(js, /movePieceToMainTray\(drag\.id\)/);
  assert.match(js, /removePieceFromSortBins\(id\);[\s\S]*?state\.placed\.add\(id\)/);
});


test('each fullscreen sorting tray owns its own scrollbar', () => {
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-stage\{[^}]*overflow:hidden/);
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-sort-column\{[^}]*min-height:0[^}]*overflow:hidden/);
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-sort-shell\{[^}]*grid-template-rows:auto minmax\(0,1fr\)/);
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-sort-tray\{[^}]*min-height:0[^}]*height:100%[^}]*overflow-y:auto/);
  assert.match(css, /scrollbar-gutter:stable/);
});


test('fullscreen preserves the normal jigsaw size while narrowing the main tray', () => {
  assert.match(css, /\.weight-coherence-workspace:fullscreen\{[\s\S]*?grid-template-columns:minmax\(0,1fr\) minmax\(250px,320px\)/);
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-board-wrap\{[\s\S]*?width:min\(100%,800px\);[\s\S]*?max-height:none/);
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-tray\{[^}]*minmax\(76px,1fr\)[^}]*gap:8px/);
  assert.doesNotMatch(css, /weight-coherence-workspace:fullscreen \.weight-coherence-board-wrap\{[^}]*100vh[^}]*1122\s*\/\s*1402/);
});


test('fullscreen jigsaw fits completely without its own scrollbar', () => {
  assert.match(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-board-shell\{[^}]*overflow:hidden[^}]*grid-template-rows:minmax\(0,1fr\) auto/);
  assert.match(css, /--weight-coherence-fullscreen-board-width/);
  assert.match(js, /function syncFullscreenBoardFit\(\)/);
  assert.match(js, /availableHeight\*\(BOARD_WIDTH\/BOARD_HEIGHT\)/);
  assert.match(js, /Math\.min\(800,shellRect\.width,availableHeight\*\(BOARD_WIDTH\/BOARD_HEIGHT\)\)/);
  assert.doesNotMatch(css, /\.weight-coherence-workspace:fullscreen \.weight-coherence-board-shell\{[^}]*overflow:auto/);
});
