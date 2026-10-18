import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html', 'utf8');
const css = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/css/weight-of-coherence.css', 'utf8');
const js = fs.readFileSync('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js', 'utf8');

test('Weight of Coherence keeps a muted board normally and uses white behind the 50% guide', () => {
  assert.match(js, /the-weight-of-coherence\.png\?v=WEIGHT_OF_COHERENCE_FULL_20261016_2/);
  assert.match(js, /const BOARD_BASE = '#2A3672'/);
  assert.match(js, /const GUIDE_OPACITY = 0\.50/);
  assert.match(js, /ctx\.fillStyle=guideOn\?'#FFFFFF':BOARD_BASE/);
  assert.match(js, /ctx\.globalAlpha\s*=\s*GUIDE_OPACITY/);
  assert.match(js, /guideOn\?'rgba\(8,13,34,\.18\)':'rgba\(214,223,255,\.10\)'/);
  assert.doesNotThrow(() => new Function(js));
  assert.match(css, /\.weight-coherence-board-wrap\{[^}]*border:1px solid rgba\(206,215,255,\.28\)[^}]*background:#2A3672/);
  assert.doesNotMatch(js, /rgba\(130,150,208,\.62\)/);
  assert.doesNotMatch(css, /rgba\(130,150,208,\.62\)/);
  assert.match(html, /weight-of-coherence\.css\?v=JIGSAW_FULL_WIDTH_WORKSPACE_20261018_1/);
  assert.match(html, /weight-of-coherence\.js\?v=JIGSAW_HOLD_FULL_VIEW_20261018_1/);
  assert.doesNotMatch(js, /undimmed, full-quality reference view/);
});

test('hold V temporarily shows the full-colour artwork and drops any piece in hand', () => {
  assert.match(html, /id="weightCoherenceViewBtn"[\s\S]*?aria-keyshortcuts="V"[\s\S]*?weight-coherence-hotkey">V<\/kbd>/);
  assert.match(js, /let viewHeld = false/);
  assert.match(js, /if\(imageReady && viewHeld\)\{[\s\S]*?ctx\.fillStyle='#FFFFFF'[\s\S]*?ctx\.drawImage\(image,0,0,BOARD_WIDTH,BOARD_HEIGHT\);[\s\S]*?return;/);
  assert.match(js, /function beginFullView\(\)\{[\s\S]*?const hadDrag=!!dragState;[\s\S]*?cancelDrag\(\);[\s\S]*?selectedPieceId=null;[\s\S]*?viewHeld=true;[\s\S]*?drawBoard\(\);/);
  assert.match(js, /function endFullView\(\)\{[\s\S]*?viewHeld=false;[\s\S]*?drawBoard\(\);/);
  assert.match(js, /if\(key==='v'\)\{[\s\S]*?beginFullView\(\)/);
  assert.match(js, /document\.addEventListener\('keyup'[\s\S]*?key!=='v'[\s\S]*?endFullView\(\)/);
  assert.match(js, /window\.addEventListener\('blur',endFullView\)/);
  assert.match(js, /refs\.view\.addEventListener\('pointerdown'[\s\S]*?beginFullView\(\)/);
  assert.match(js, /refs\.view\.addEventListener\('pointerup',endFullView\)/);
  assert.doesNotMatch(js, /function beginFullView\(\)[\s\S]{0,500}state\.preview\s*=/);
});

test('jigsaw mobile startup uses bounded, deferred tray rendering', () => {
  assert.match(js, /mobileLike\(\)\) return Math\.min\(config\.trayPageSize, 8\)/);
  assert.match(js, /const batchSize=mobileLike\(\)\?1:6/);
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

test('sorting trays follow one artwork-orientation authority and persist parked pieces', () => {
  assert.equal((html.match(/data-jigsaw-sort-tray="/g) || []).length, 4);
  assert.match(js, /const artworkOrientation=BOARD_WIDTH>BOARD_HEIGHT\?'landscape':'portrait'/);
  assert.match(js, /refs\.workspace\.classList\.toggle\('is-artwork-landscape'/);
  assert.match(js, /refs\.workspace\.classList\.toggle\('is-artwork-portrait'/);
  assert.match(css, /weight-coherence-workspace\.is-artwork-portrait \.weight-coherence-stage\{grid-template-columns:minmax\(0,1fr\) minmax\(0,3\.6fr\) minmax\(0,1fr\);grid-template-areas:"left board right"/);
  assert.match(css, /weight-coherence-workspace\.is-artwork-landscape \.weight-coherence-stage\{grid-template-columns:minmax\(0,1fr\);grid-template-areas:"upper" "board" "lower"/);
  assert.match(js, /sortBins:\[\[\],\[\],\[\],\[\]\]/);
  assert.match(js, /sortBins:state\.sortBins\.map/);
  assert.match(js, /normalizeSortBins\(parsed\.sortBins,count,placed\)/);
  assert.match(js, /movePieceToSortBin\(drag\.id,Number\(sortTarget\.dataset\.jigsawSortTray\)\)/);
  assert.match(js, /movePieceToMainTray\(drag\.id\)/);
  assert.match(js, /removePieceFromSortBins\(id\);[\s\S]*?state\.placed\.add\(id\)/);
});


test('desktop jigsaw workspace uses proportional full width and fills its tray panels', () => {
  assert.match(css, /\.weight-coherence-workspace\{[^}]*width:100%[^}]*min-width:0[^}]*max-width:none/);
  assert.match(css, /\.weight-coherence-stage\{[^}]*justify-content:stretch[^}]*width:100%[^}]*min-width:0[^}]*max-width:100%/);
  assert.match(css, /is-artwork-portrait \.weight-coherence-stage\{grid-template-columns:minmax\(0,1fr\) minmax\(0,3\.6fr\) minmax\(0,1fr\)/);
  assert.match(css, /is-artwork-landscape \.weight-coherence-stage\{grid-template-columns:minmax\(0,1fr\)/);
  assert.match(css, /is-artwork-landscape \.weight-coherence-sort-column\{[^}]*width:100%/);
  assert.match(css, /\.weight-coherence-board-wrap\{[^}]*width:100%[^}]*max-width:none/);
  assert.doesNotMatch(css, /minmax\(126px,176px\)|minmax\(118px,160px\)|minmax\(0,800px\)|width:min\(100%,800px\)|max-width:800px/);
  assert.match(css, /\.weight-coherence-sort-shell\{[^}]*grid-template-rows:auto minmax\(0,1fr\)[^}]*align-self:stretch[^}]*width:100%/);
  assert.match(css, /\.weight-coherence-sort-tray\{[^}]*grid-auto-rows:minmax\(68px,1fr\)[^}]*align-content:stretch[^}]*align-self:stretch[^}]*width:100%[^}]*max-height:none/);
  assert.match(css, /\.weight-coherence-tray-shell\{[^}]*width:100%[^}]*min-width:0[^}]*max-width:none/);
  assert.match(css, /\.weight-coherence-tray\{[^}]*width:100%[^}]*min-width:0[^}]*max-width:none/);
});


test('each fullscreen sorting tray owns its own scrollbar without a competing generic orientation', () => {
  assert.doesNotMatch(css, /weight-coherence-workspace:fullscreen \.weight-coherence-stage,[\s\S]{0,400}grid-template-areas:/);
  assert.match(css, /is-artwork-portrait:fullscreen \.weight-coherence-stage[\s\S]{0,260}grid-template-areas:"left board right"/);
  assert.match(css, /is-artwork-landscape:fullscreen \.weight-coherence-stage[\s\S]{0,300}grid-template-areas:"upper" "board" "lower"/);
  assert.match(css, /weight-coherence-sort-column[^}]*min-height:0[^}]*overflow:hidden/);
  assert.match(css, /weight-coherence-sort-shell[^}]*grid-template-rows:auto minmax\(0,1fr\)/);
  assert.match(css, /weight-coherence-sort-tray[^}]*min-height:0[^}]*height:100%[^}]*overflow-y:auto/);
  assert.match(css, /scrollbar-gutter:stable/);
});


test('desktop fullscreen fills the main tray with a measured page and no scrollbar', () => {
  assert.match(css, /grid-template-columns:minmax\(0,1fr\) minmax\(250px,320px\)/);
  assert.match(css, /weight-coherence-tray-shell[^}]*grid-template-rows:auto minmax\(0,1fr\)/);
  assert.match(css, /weight-coherence-tray[^}]*repeat\(3,minmax\(0,1fr\)\)[^}]*grid-auto-rows:minmax\(64px,1fr\)/);
  assert.match(js, /function desktopFullscreenTrayCapacity\(config\)/);
  assert.match(js, /rows\*columns/);
  assert.doesNotMatch(css, /weight-coherence-tray-shell[^}]*overflow:auto/);
});


test('fullscreen jigsaw fits completely without its own board scrollbar', () => {
  assert.match(css, /weight-coherence-board-shell[^}]*overflow:hidden[^}]*grid-template-rows:minmax\(0,1fr\) auto/);
  assert.match(css, /--weight-coherence-fullscreen-board-width/);
  assert.match(js, /function syncFullscreenBoardFit\(\)/);
  assert.match(js, /availableHeight\*\(BOARD_WIDTH\/BOARD_HEIGHT\)/);
  assert.match(js, /availableHeight=Math\.max\(0,shellRect\.height-statusHeight-gap-6\)/);
  assert.match(js, /availableWidth=Math\.max\(0,shellRect\.width-6\)/);
  assert.match(js, /Math\.min\(availableWidth,availableHeight\*\(BOARD_WIDTH\/BOARD_HEIGHT\)\)/);
  assert.doesNotMatch(js, /Math\.min\(800,availableWidth/);
  assert.match(js, /fullscreenLayoutTimer=window\.setTimeout\(settleFullscreenLayout,180\)/);
});

test('mobile fullscreen uses a stable fixed viewport and requires landscape', () => {
  assert.match(js, /if\(mobileLike\(\)\)\{\s*setPseudoFullscreen\(true\)/);
  assert.match(js, /classList\.toggle\('is-pseudo-fullscreen',pseudoFullscreen\)/);
  assert.match(js, /function syncMobileFullscreenOrientation\(\)/);
  assert.match(js, /is-mobile-fullscreen-landscape/);
  assert.match(js, /is-mobile-fullscreen-portrait/);
  assert.match(html, /id="weightCoherenceRotateNotice"/);
  assert.match(css, /\.weight-coherence-workspace\.is-pseudo-fullscreen\{position:fixed;inset:0/);
  assert.match(css, /is-mobile-fullscreen-portrait[^\{]*\{/);
  assert.match(css, /grid-template-areas:"toolbar" "rotate"/);
  assert.match(css, /is-mobile-fullscreen-landscape[^\{]*\{/);
  assert.match(css, /is-artwork-portrait\.is-pseudo-fullscreen\.is-mobile-fullscreen-landscape[\s\S]*?grid-template-areas:"left board right"/);
  assert.match(css, /is-artwork-landscape\.is-pseudo-fullscreen\.is-mobile-fullscreen-landscape[\s\S]*?grid-template-areas:"upper" "board" "lower"/);
  assert.match(css, /height:100dvh/);
});

test('mobile two-finger inspection zoom snaps back to 100 percent', () => {
  assert.match(js, /const pinchPointers = new Map\(\)/);
  assert.match(js, /Math\.min\(2\.75,distance\/pinchState\.startDistance\)/);
  assert.match(js, /refs\.boardWrap\.style\.transform='scale\('\+scale\.toFixed\(3\)\+'\)'/);
  assert.match(js, /refs\.boardWrap\.style\.transform='scale\(1\)'/);
  assert.match(css, /is-jigsaw-inspecting/);
});

test('mobile selection avoids rebuilding every piece canvas', () => {
  assert.match(js, /function syncSelectedPieceClasses\(\)/);
  assert.match(js, /if\(!force && key===lastSortRenderKey\)/);
  assert.match(js, /selectedPieceId=selectedPieceId===id\?null:id;[\s\S]*?syncSelectedPieceClasses\(\)/);
});
