import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';

const read = relative => fs.readFileSync(relative, 'utf8');

const html = read('systems/baseline-games-hub/baseline-games-hub.html');
const registry = read('systems/baseline-games-hub/puzzles/shared/js/puzzles-registry.js');
const library = read('systems/baseline-games-hub/puzzles/shared/js/puzzles-library.js');
const player = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
const playerCss = read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/css/weight-of-coherence.css');
const libraryCss = read('systems/baseline-games-hub/puzzles/shared/css/puzzles-library.css');

test('Puzzles opens as a type library with Jigsaws as a nested selection', () => {
  assert.match(html, /id="puzzlesOverviewCard"/);
  assert.match(html, /id="puzzlesList"/);
  assert.match(html, /id="jigsawsPanel" hidden/);
  assert.match(html, /id="jigsawsList"/);
  assert.match(html, /id="jigsawPlayerCard" hidden/);
  assert.match(html, /data-puzzles-back="overview"/);
  assert.match(html, /data-puzzles-back="jigsaws"/);
  assert.match(registry, /id:'jigsaws'/);
  assert.match(library, /data-puzzle-type/);
  assert.match(library, /data-jigsaw-id/);
  assert.match(library, /showView\('overview'\)/);
  assert.match(library, /showView\('jigsaws'\)/);
  assert.match(library, /showView\('player'\)/);
});

test('Jigsaws are grouped into collections and include both current artworks', () => {
  assert.match(registry, /group:'Psychological & Symbolic'/);
  assert.match(registry, /id:'weight-of-coherence'/);
  assert.match(registry, /title:'The Weight of Coherence'/);
  assert.match(registry, /id:'the-unheard-signal'/);
  assert.match(registry, /title:'The Unheard Signal'/);
  assert.match(registry, /the-unheard-signal\.png\?v=THE_UNHEARD_SIGNAL_FULL_20261017_1/);
  assert.match(registry, /width:1448/);
  assert.match(registry, /height:1086/);
  const art = fs.readFileSync('systems/baseline-games-hub/puzzles/the-unheard-signal/art/the-unheard-signal.png');
  assert.equal(art.length, 2600964);
  assert.equal(art.subarray(1,4).toString('ascii'), 'PNG');
  assert.equal(crypto.createHash('sha256').update(art).digest('hex'), '5a803c828d9c76af21c0cd73f47014417d9de72eaa85711e6c833814da52fabf');
});


test('Puzzles and Jigsaws use the indigo Games Hub visual language', () => {
  assert.match(libraryCss, /background:linear-gradient\(145deg,rgba\(11,17,48,.96\)/);
  assert.match(libraryCss, /color:#F2F5FF/);
  assert.match(libraryCss, /color:rgba\(242,245,255,.78\)/);
  assert.doesNotMatch(libraryCss, /rgba\(244,197,108,.98\)/);
  assert.match(playerCss, /\.weight-coherence-copy h3\{[^}]*color:#F2F5FF/);
  assert.match(playerCss, /\.weight-coherence-copy h3\{[^}]*background:none/);
});

test('library blurbs and opened-puzzle descriptions are deliberately distinct', () => {
  assert.match(registry, /libraryDescription:'Holding an unfinished structure together under competing forces/);
  assert.match(registry, /description:'The unfinished structure is not complete/);
  assert.match(registry, /libraryDescription:'Words cross an unequal chamber but never arrive/);
  assert.match(registry, /description:'A man speaks upward across an unequal chamber/);
  assert.match(library, /item\.libraryDescription\|\|item\.description/);
  assert.doesNotMatch(registry, /\b(?:a lone figure|A figure tries)\b/);
});

test('one jigsaw player switches artwork, dimensions, copy and save authority', () => {
  assert.match(player, /activePuzzle=registry\?\.findJigsaw/);
  assert.match(player, /BOARD_WIDTH=Math\.max\(1,Number\(activePuzzle\.width\)/);
  assert.match(player, /BOARD_HEIGHT=Math\.max\(1,Number\(activePuzzle\.height\)/);
  assert.match(player, /BOARD_WIDTH>BOARD_HEIGHT && config\.cols!==config\.rows/);
  assert.match(player, /cols:config\.rows, rows:config\.cols/);
  assert.match(player, /APP=String\(activePuzzle\.app/);
  assert.match(player, /baseline:jigsaw-select/);
  assert.match(player, /refs\.introArt\.src=activePuzzle\.image/);
  assert.match(player, /refs\.title\.textContent=activePuzzle\.title/);
  assert.match(player, /activePuzzle\.title\|\|'Jigsaw'/);
  assert.match(playerCss, /aspect-ratio:var\(--weight-coherence-aspect,1122 \/ 1402\)/);
  assert.doesNotMatch(player, /localStorage|sessionStorage|indexedDB/);
});

test('reopening the active jigsaw cannot erase already placed pieces', () => {
  assert.match(player, /if\(refs\.board\.width!==BOARD_WIDTH\) refs\.board\.width=BOARD_WIDTH/);
  assert.match(player, /if\(refs\.board\.height!==BOARD_HEIGHT\) refs\.board\.height=BOARD_HEIGHT/);
  assert.match(player, /if\(placedCanvas\.width!==BOARD_WIDTH\) placedCanvas\.width=BOARD_WIDTH/);
  assert.match(player, /if\(placedCanvas\.height!==BOARD_HEIGHT\) placedCanvas\.height=BOARD_HEIGHT/);
  assert.match(player, /if\(imageReady && state\)\{\s*rebuildPlacedCanvas\(\);\s*drawBoard\(\);/);
  assert.match(player, /Guide shown at 50% opacity/);
});

test('The Unheard Signal has a dedicated server save profile', () => {
  const guard = read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const api = read('systems/baseline-games-hub/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  for (const source of [guard, api]) assert.ok(source.includes("'unheardsignal'"));
  assert.match(saved, /'unheardsignal'\s*=>\s*'the-unheard-signal\.json'/);
});
