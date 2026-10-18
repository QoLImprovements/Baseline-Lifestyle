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



test('Weight of Coherence uses the muted Games Hub medium board and a 50% guide', () => {
  const source = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const css = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/css/weight-of-coherence.css');

  assert.match(source, /BOARD_BASE = '#2A3672'/);
  assert.match(source, /GUIDE_OPACITY = 0\.50/);
  assert.match(source, /ctx\.fillStyle=BOARD_BASE/);
  assert.match(source, /ctx\.globalAlpha=GUIDE_OPACITY/);
  assert.match(css, /\.weight-coherence-board-wrap\{[^}]*background:#2A3672/);
  assert.doesNotMatch(source, /rgba\(130,150,208,\.62\)/);
  assert.doesNotMatch(css, /rgba\(130,150,208,\.62\)/);
});
test('jigsaws use the Games Hub server save authority with separate puzzle profiles', () => {
  const source = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const registry = read('systems/baseline-games-hub/puzzles/shared/js/puzzles-registry.js');
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');

  assert.match(source, /activePuzzle\.app/);
  assert.match(source, /BaselineGameStorage/);
  assert.doesNotMatch(source, /\b(?:localStorage|sessionStorage|indexedDB)\b/);

  for (const app of ['weightcoherence','unheardsignal','tearswithoutwitness','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw']) {
    assert.ok(registry.includes(`app:'${app}'`));
    assert.ok(guard.includes(`'${app}'`));
    assert.ok(api.includes(`'${app}'`));
  }

  assert.match(saved, /'weightcoherence'\s*=>\s*'weight-of-coherence\.json'/);
  assert.match(saved, /'unheardsignal'\s*=>\s*'the-unheard-signal\.json'/);
  assert.match(saved, /'tearswithoutwitness'\s*=>\s*'tears-without-witness\.json'/);
  assert.match(saved, /'pantherjigsaw'\s*=>\s*'black-panther\.json'/);
  assert.match(saved, /'bearjigsaw'\s*=>\s*'bear\.json'/);
  assert.match(saved, /'foxjigsaw'\s*=>\s*'fox\.json'/);
  assert.match(saved, /'elephantsjigsaw'\s*=>\s*'elephants\.json'/);
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


test('Block Grid and Colour Sort follow the Core Games presentation contract', () => {
  const support = read('systems/baseline-games-hub/js/puzzle-game-support.mjs');
  const block = read('systems/baseline-games-hub/games/block-grid/js/block-grid.js');
  const blockCss = read('systems/baseline-games-hub/games/block-grid/css/block-grid.css');
  const colour = read('systems/baseline-games-hub/games/colour-sort/js/colour-sort.js');
  const colourCss = read('systems/baseline-games-hub/games/colour-sort/css/colour-sort.css');

  assert.doesNotMatch(support, /Puzzle Games/);
  assert.match(support, /data\.coreGameExtension = 'true'/);
  assert.match(support, /if \(testing\) list\.insertBefore\(node, testing\)/);

  assert.match(block, /data-game-info="blockgrid"/);
  assert.match(block, /<span>Game Info<\/span><span class="inline-note">Level \/ XP \/ stats<\/span>/);
  assert.match(block, /function renderGameInfo\(\)/);
  assert.match(block, /onOpen:\(\) => \{ render\(\); \}/);
  assert.doesNotMatch(block, /function ensureRun\(/);
  assert.match(block, />Start New Game<\/button>/);

  assert.match(colour, /data-game-info="coloursort"/);
  assert.match(colour, /<span>Game Info<\/span><span class="inline-note">Level \/ XP \/ stats<\/span>/);
  assert.match(colour, /function renderGameInfo\(\)/);
  assert.match(colour, /onOpen:\(\) => \{ render\(\); \}/);
  assert.doesNotMatch(colour, /function ensurePuzzle\(/);
  assert.match(colour, />Start New Game<\/button>/);
  assert.match(colour, /startLevel\(profile\.selectedLevel\)/);

  for (const source of [blockCss, colourCss]) {
    assert.doesNotMatch(source, /244,197,108/);
    assert.doesNotMatch(source, /21,61,68/);
    assert.doesNotMatch(source, /24,143,139/);
    assert.doesNotMatch(source, /#f4c56c/i);
  }
});

test('Block Grid and Colour Sort use the shared Games Hub Auto-Next authority', () => {
  const core = read('systems/baseline-games-hub/js/baseline-games-hub-core.js');
  const block = read('systems/baseline-games-hub/games/block-grid/js/block-grid.js');
  const colour = read('systems/baseline-games-hub/games/colour-sort/js/colour-sort.js');

  assert.match(core, /AUTO_NEXT_GAMES = \[[^\]]*'blockgrid'[^\]]*'coloursort'[^\]]*'crossnumber'/);
  assert.match(core, /window\.BaselineGamesAutoNext/);
  assert.match(core, /blockGridPanel' \? 'blockgrid'/);
  assert.match(core, /colourSortPanel' \? 'coloursort'/);

  assert.match(block, /data-auto-next-toggle="\$\{APP\}"/);
  assert.match(block, /autoNextApi\(\)\?\.schedule\?\.\(APP, startNewGame\)/);
  assert.match(block, /autoNextApi\(\)\?\.clear\?\.\(APP\)/);

  assert.match(colour, /data-auto-next-toggle="\$\{APP\}"/);
  assert.match(colour, /autoNextApi\(\)\?\.schedule\?\.\(APP, \(\) => startLevel\(nextLevel\)\)/);
  assert.match(colour, /autoNextApi\(\)\?\.clear\?\.\(APP\)/);
});

test('homepage keeps Badminton Session as one correctly spaced system title', () => {
  const index = read('index.html');
  assert.match(index, /<h2>Baseline Badminton Session<\/h2>/);
  assert.doesNotMatch(index, /Baseline Badminton<br\s*\/?>(?:\s*)Session/);
});


test('non-Realm coherence fixes protect the reported gameplay failures', () => {
  const core = read('systems/baseline-games-hub/js/baseline-games-hub-core.js');
  const css = read('systems/baseline-games-hub/css/non-realm-game-refinement.css');

  assert.match(core, /if\(selectedGame === 'detectword'\) desktopKeypadOpenGame = ''/);
  assert.match(core, /function coherentProgressHtml/);
  assert.match(core, /function renderCompactGameXp/);

  assert.match(css, /#pairsPanel \.memory-card-front\{[\s\S]*?opacity:0!important;[\s\S]*?visibility:hidden!important/);
  assert.match(css, /#pairsPanel \.memory-card\.is-open \.memory-card-front,[\s\S]*?opacity:1!important/);
  assert.match(css, /ruleshift-colour--green \.ruleshift-shape\{background:#7f9846!important\}/);
  assert.match(css, /ruleshift-colour--teal \.ruleshift-shape\{background:#249aa8!important\}/);
  assert.match(css, /#ruleshiftPanel \.ruleshift-options-grid\{[\s\S]*?justify-content:center!important/);
  assert.match(css, /#detectwordPanel \.game-play-root\.desktop-keypad-open #wordBoard[\s\S]*?grid-template-columns:1fr!important/);
});

test('Jigsaws use completion XP with no Jigsaw tier or skill tree and only a Realm passive contribution', () => {
  const jigsaw = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
  const realm = read('systems/baseline-games-hub/games/baseline-realm/ninja-training/js/ninja-training-runtime.js');

  assert.match(jigsaw, /JIGSAW_XP_REWARDS/);
  assert.match(jigsaw, /awardJigsawXp/);
  assert.doesNotMatch(jigsaw, /JIGSAW_TIERS/);
  assert.doesNotMatch(jigsaw, /JIGSAW_SKILLS/);
  assert.match(jigsaw, /BaselineJigsawProgress/);
  assert.match(jigsaw, /passiveEfficiencyMult/);

  assert.match(realm, /function jigsawRealmContribution/);
  assert.match(realm, /bonus\.passiveEfficiencyMult \*= Number\(jigsaws\.passiveEfficiencyMult \|\| 1\)/);
  assert.doesNotMatch(realm, /jigsaws\.attackMult|jigsaws\.critChance|jigsaws\.bossDamageMult/);
  assert.match(realm, /baseline:jigsaw-progress/);
});
