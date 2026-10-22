import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';

const read = relative => fs.readFileSync(relative, 'utf8');

const html = read('systems/baseline-recreation/baseline-recreation.html');
const registry = read('systems/baseline-recreation/puzzles/shared/js/puzzles-registry.js');
const library = read('systems/baseline-recreation/puzzles/shared/js/puzzles-library.js');
const player = read('systems/baseline-recreation/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
const core = read('systems/baseline-recreation/js/baseline-recreation-core.js');
const playerCss = read('systems/baseline-recreation/puzzles/the-weight-of-coherence/css/weight-of-coherence.css');
const libraryCss = read('systems/baseline-recreation/puzzles/shared/css/puzzles-library.css');

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
  assert.match(library, /showView\('overview','push'\)/);
  assert.match(library, /showView\('jigsaws','push'\)/);
  assert.match(library, /showView\('player','push'\)/);
  assert.match(core, /BaselinePuzzlesLibrary\.showOverview\(\)/);
});

test('Jigsaws are grouped into Symbolic and Animals collections with all eight artworks', () => {
  assert.match(registry, /group:'Symbolic'/);
  assert.match(registry, /group:'Animals'/);
  assert.doesNotMatch(registry, /Psychological & Symbolic/);

  assert.match(registry, /id:'weight-of-coherence'/);
  assert.match(registry, /title:'The Weight of Coherence'/);
  assert.match(registry, /id:'the-unheard-signal'/);
  assert.match(registry, /title:'Pleading Before the Silent Throne'/);

  assert.match(registry, /id:'tears-without-witness'/);
  assert.match(registry, /id:'moved-along'/);
  assert.match(registry, /title:'Moved Along'/);

  assert.match(registry, /id:'black-panther'/);
  assert.match(registry, /title:'Black Panther'/);
  assert.match(registry, /black-panther\.webp\?v=BLACK_PANTHER_JIGSAW_20261018_1/);
  assert.match(registry, /id:'bear'/);
  assert.match(registry, /title:'Bear'/);
  assert.match(registry, /id:'fox'/);
  assert.match(registry, /id:'elephants'/);
  assert.match(registry, /bear\.webp\?v=BEAR_JIGSAW_20261018_1/);

  assert.match(registry, /the-unheard-signal\.png\?v=THE_UNHEARD_SIGNAL_FULL_20261017_1/);
  assert.match(registry, /meta:'8 jigsaws · completion XP'/);

  const symbolicArt = fs.readFileSync('systems/baseline-recreation/puzzles/the-unheard-signal/art/the-unheard-signal.png');
  assert.equal(symbolicArt.length, 2600964);
  assert.equal(symbolicArt.subarray(1,4).toString('ascii'), 'PNG');
  assert.equal(crypto.createHash('sha256').update(symbolicArt).digest('hex'), '5a803c828d9c76af21c0cd73f47014417d9de72eaa85711e6c833814da52fabf');

  for (const path of [
    'systems/baseline-recreation/puzzles/black-panther/art/black-panther.webp',
    'systems/baseline-recreation/puzzles/bear/art/bear.webp'
  ]) {
    const art = fs.readFileSync(path);
    assert.ok(art.length > 50000);
    assert.equal(art.subarray(0,4).toString('ascii'), 'RIFF');
    assert.equal(art.subarray(8,12).toString('ascii'), 'WEBP');
  }
});


test('Puzzles and Jigsaws use the Burgundy Rose Copper Recreation visual language', () => {
  assert.match(libraryCss, /--recreation-burgundy-rgb/);
  assert.match(libraryCss, /--recreation-rose-rgb/);
  assert.match(libraryCss, /--recreation-copper-light-rgb/);
  assert.match(libraryCss, /color:var\(--recreation-ink\)/);
  assert.doesNotMatch(libraryCss, /#080D22|#1E2759|#4656A6|rgba\(176,190,255/);
  assert.match(playerCss, /\.weight-coherence-copy h3\{[^}]*color:var\(--recreation-ink\)/);
  assert.match(playerCss, /\.weight-coherence-copy h3\{[^}]*background:none/);
  assert.doesNotMatch(playerCss, /#080D22|#1E2759|#4656A6|rgba\(126,145,255/);
});

test('jigsaw library cards do not repeat the universal piece-count choices', () => {
  assert.doesNotMatch(library, /50 · 100 · 500 · 1,000 pieces/);
  assert.match(library, /puzzle-library-meta puzzle-library-meta--progress/);
  assert.match(library, /completed<\/span>/);
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
  assert.match(player, /function initialPuzzleFromRoute\(\)/);
  assert.match(player, /activePuzzle=puzzle/);
  assert.match(player, /BOARD_WIDTH=Math\.max\(1,Number\(activePuzzle\.width\)\|\|1122\)/);
  assert.match(player, /BOARD_HEIGHT=Math\.max\(1,Number\(activePuzzle\.height\)\|\|1402\)/);
  assert.match(player, /BOARD_WIDTH>BOARD_HEIGHT\?'landscape':'portrait'/);
  assert.match(player, /APP=String\(activePuzzle\.app\|\|'weightcoherence'\)/);
  assert.match(player, /baseline:jigsaw-select/);
  assert.match(player, /refs\.introArt\.src=activePuzzle\.image/);
  assert.match(player, /refs\.title\.textContent=activePuzzle\.title\|\|'Jigsaw'/);
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

test('symbolic and animal jigsaws have dedicated server save profiles', () => {
  const guard = read('systems/baseline-recreation/js/baseline-recreation-guard.js');
  const api = read('systems/baseline-recreation/api/games_data.php');
  const saved = read('sitewide/api/saved_data.php');
  for (const app of ['unheardsignal','movedalong','pantherjigsaw','bearjigsaw']) {
    for (const source of [guard, api]) assert.ok(source.includes(`'${app}'`));
  }
  assert.match(saved, /'unheardsignal'\s*=>\s*'the-unheard-signal\.json'/);
  assert.match(saved, /'movedalong'\s*=>\s*'moved-along\.json'/);
  assert.match(saved, /'pantherjigsaw'\s*=>\s*'black-panther\.json'/);
  assert.match(saved, /'bearjigsaw'\s*=>\s*'bear\.json'/);
});

test('Jigsaws type uses a neutral jigsaw icon rather than choosing one puzzle artwork', () => {
  assert.match(registry, /preview:'\/systems\/baseline-recreation\/puzzles\/shared\/art\/jigsaws\.svg\?v=JIGSAWS_ICON_20261018_1'/);
  assert.doesNotMatch(registry, /id:'jigsaws'[\s\S]{0,300}preview:'\/systems\/baseline-recreation\/puzzles\/the-weight-of-coherence\/art\//);
});
