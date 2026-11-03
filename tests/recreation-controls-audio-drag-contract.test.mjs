import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const at = relative => readFileSync(fileURLToPath(new URL('../' + relative, import.meta.url)), 'utf8');
const music = at('systems/baseline-recreation/js/games-music.js');
const dock = at('systems/baseline-recreation/css/non-realm-game-refinement.css');
const blockCss = at('systems/baseline-recreation/games/block-grid/css/block-grid.css');
const blockJs = at('systems/baseline-recreation/games/block-grid/js/block-grid.js');
const crossCss = at('systems/baseline-recreation/puzzles/crossnumber/css/crossnumber.css');
const crossJs = at('systems/baseline-recreation/puzzles/crossnumber/js/crossnumber.js');
const html = at('systems/baseline-recreation/baseline-recreation.html');

test('the original ten three-minute, seven-section compositions are preserved and unique', () => {
  const match = music.match(/var TRACKS = (\{[\s\S]*?\});\s+var ARRANGEMENTS/);
  assert.ok(match, 'Original per-game compositions should be explicitly retained');
  const tracks = JSON.parse(match[1]);
  const gameIds = ['pairs', 'detectword', 'make24', 'trackcoin', 'ruleshift', 'block-grid', 'colour-sort', 'jigsaw', 'crossnumber', 'ninja'];
  assert.deepEqual(Object.keys(tracks), gameIds);
  assert.equal(new Set(gameIds.map(id => JSON.stringify(tracks[id]))).size, gameIds.length);
  for (const id of gameIds) {
    assert.equal(tracks[id].sections.length, 7, id + ' should have seven distinct musical sections');
    assert.equal(tracks[id].sections.reduce((n, section) => n + section.bars, 0), tracks[id].bars);
    assert.equal(tracks[id].bars * 4 * 60 / tracks[id].bpm, 180, id + ' should remain three minutes');
  }
  assert.match(music, /var ARRANGEMENTS = \{/);
  assert.match(music, /function sectionAt\(/);
  assert.match(music, /function scheduleBar\(/);
});

test('desktop game controls form one dock while phones retain their own layout', () => {
  assert.match(dock, /desktop Recreation control contract/);
  assert.match(dock, /@media \(min-width:821px\)/);
  assert.match(dock, /grid-template-columns:44px 44px minmax\(0,1fr\) 44px 44px 44px!important/);
  assert.match(dock, /\.start-new-game-toggle\{[\s\S]*?grid-column:1!important;grid-row:1/);
  assert.match(dock, /\.auto-next-toggle\{[\s\S]*?grid-column:1!important;grid-row:2/);
  assert.match(dock, /\.games-settings-trigger\{[\s\S]*?grid-column:4!important;grid-row:1/);
  assert.match(dock, /\.games-music-quick-toggle\{[\s\S]*?grid-column:5!important;grid-row:1/);
  assert.match(dock, /\.game-fullscreen-toggle\{[\s\S]*?grid-column:6!important;grid-row:1/);
  assert.match(music, /host\.appendChild\(control\)/);
});

test('Block Grid fullscreen has a bounded board, no phantom tab grid item and touch-draggable Specials', () => {
  assert.match(blockCss, /@media \(min-width:821px\)/);
  assert.match(blockCss, /--block-fs-board-max:min\(100%,calc\(100dvh - 245px\),700px\)/);
  assert.match(blockCss, /#blockGridGameCard:fullscreen > \.game-fullscreen-window-tabs\{\s*display:contents!important/);
  assert.match(blockCss, /\.block-grid-skill-button:not\(:disabled\)\{[\s\S]*?touch-action:none!important/);
  assert.match(blockJs, /specialButton\.setPointerCapture\?\.\(event\.pointerId\)/);
  assert.match(blockJs, /function boardCellFromPointer\(clientX, clientY\)/);
});

test('Cross Number uses the same pointer and real equation-cell drop path on desktop and touch', () => {
  assert.doesNotMatch(crossJs, /draggable="true" data-tile-id/);
  assert.doesNotMatch(crossJs, /addEventListener\('dragstart'/);
  assert.match(crossJs, /event\.pointerType==='mouse' && event\.button!==0/);
  assert.match(crossJs, /touchDropCellAt\(event\.clientX,event\.clientY\)/);
  assert.match(crossJs, /crossnumberDragScroller\(clientX,clientY\)/);
  assert.match(crossCss, /\.crossnumber-number-tile\{\s*touch-action:none!important/);
});

test('all changed runtime assets receive fresh cache keys', () => {
  assert.match(html, /ORIGINAL_DISTINCT_THEMES_20261103_2/);
  assert.match(html, /DESKTOP_DOCK_RESTORE_20261103_2/);
  assert.match(html, /DESKTOP_POINTER_DRAG_20261103_2/);
  assert.match(html, /TOUCH_SPECIALS_FULLSCREEN_20261103_2/);
});
