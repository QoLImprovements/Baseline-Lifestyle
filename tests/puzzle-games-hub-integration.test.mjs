import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const read = relative => fs.readFileSync(relative, 'utf8');

test('puzzle games are registered and loaded as isolated Games Hub modules', () => {
  const registry = read('systems/baseline-games-hub/js/games-registry.js');
  const html = read('systems/baseline-games-hub/baseline-games-hub.html');
  const htaccess = read('.htaccess');
  assert.match(registry, /id:'block-grid'[\s\S]*?profileApp:'blockgrid'/);
  assert.match(registry, /id:'colour-sort'[\s\S]*?profileApp:'coloursort'/);
  assert.match(html, /games\/block-grid\/js\/block-grid\.js/);
  assert.match(html, /games\/colour-sort\/js\/colour-sort\.js/);
  assert.match(html, /rule-shift\|block-grid\|colour-sort\|darts-focused/);
  assert.match(htaccess, /rule-shift\|block-grid\|colour-sort\|darts-focused/);
  assert.doesNotMatch(read('systems/baseline-games-hub/games/block-grid/js/block-grid.js'), /baseline-realm|ninjaPanel/);
  assert.doesNotMatch(read('systems/baseline-games-hub/games/colour-sort/js/colour-sort.js'), /baseline-realm|ninjaPanel/);
});

test('puzzle games use the Games Hub server storage authority with dedicated saved-data resources', () => {
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  for (const app of ['blockgrid','coloursort']) {
    assert.ok(guard.includes(`'${app}'`));
    assert.ok(api.includes(`'${app}'`));
  }
  assert.match(saved, /'blockgrid'\s*=>\s*'block-grid\.json'/);
  assert.match(saved, /'coloursort'\s*=>\s*'colour-sort\.json'/);
});

test('production puzzle modules do not create a competing browser persistence layer', () => {
  for (const path of [
    'systems/baseline-games-hub/js/puzzle-game-support.mjs',
    'systems/baseline-games-hub/games/block-grid/js/block-grid.js',
    'systems/baseline-games-hub/games/colour-sort/js/colour-sort.js'
  ]) {
    assert.doesNotMatch(read(path), /\b(?:localStorage|sessionStorage|indexedDB)\b/);
  }
});

test('current Weight of Coherence puzzle uses the same server save authority', () => {
  const source = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  assert.match(source, /APP = 'weightcoherence'/);
  assert.match(source, /BaselineGameStorage/);
  assert.doesNotMatch(source, /\b(?:localStorage|sessionStorage|indexedDB)\b/);
  assert.ok(guard.includes("'weightcoherence'"));
  assert.ok(api.includes("'weightcoherence'"));
  assert.match(saved, /'weightcoherence'\s*=>\s*'weight-of-coherence\.json'/);
});


test('puzzle games expose visible gameplay motion and contained Block Grid dragging', () => {
  const block = read('systems/baseline-games-hub/games/block-grid/js/block-grid.js');
  const blockCss = read('systems/baseline-games-hub/games/block-grid/css/block-grid.css');
  const colour = read('systems/baseline-games-hub/games/colour-sort/js/colour-sort.js');
  const colourCss = read('systems/baseline-games-hub/games/colour-sort/css/colour-sort.css');

  assert.match(block, /function clampAnchorInsideBoard/);
  assert.match(block, /function shapeContainedAnchor/);
  assert.match(block, /function createDragGhost/);
  assert.match(block, /boardAnchorFromPointer/);
  assert.match(block, /Keep the entire piece inside the board/);
  assert.match(blockCss, /blockGridPlace/);
  assert.match(blockCss, /blockGridLineClear/);
  assert.match(blockCss, /block-grid-drag-ghost/);

  assert.match(colour, /async function animatePour/);
  assert.match(colour, /source\.animate/);
  assert.match(colour, /createPourStream/);
  assert.match(colourCss, /colour-sort-pour-stream/);
  assert.match(colourCss, /colourSortBottleEnter/);
  assert.match(colourCss, /prefers-reduced-motion/);

  assert.match(colour, /function handleBottlePointerDown/);
  assert.match(colour, /function handleBottlePointerMove/);
  assert.match(colour, /function handleBottlePointerUp/);
  assert.match(colour, /canPour\(active\.bottles, state\.from, target\.index\)/);
  assert.match(colourCss, /colour-sort-drag-ghost/);
  assert.match(colourCss, /is-drag-valid/);
  assert.match(colourCss, /is-drag-invalid/);
  assert.match(colour, /function queueBottleGhostPosition/);
  assert.match(colour, /grabOffsetX/);
  assert.match(colour, /requestAnimationFrame/);
  assert.match(colour, /async function animateDraggedBottleHome/);
  assert.match(colour, /visual\.animate/);
  assert.match(colour, /dragVisual/);
  assert.doesNotMatch(colourCss, /will-change:left,top/);
  assert.match(colour, /colour-sort-complete-banner/);
  assert.match(colour, /Level Progress/);

  assert.match(block, /PERFECT CLEAR/);
  assert.match(block, /perfectBonus = perfectClear \? 100 : 0/);
  assert.match(block, /function nearCompleteCells/);
  assert.match(block, /Open Space/);
  assert.match(blockCss, /block-grid-feedback/);
  assert.match(blockCss, /blockGridTrayArrival/);
  assert.match(blockCss, /is-line-opportunity/);
});
