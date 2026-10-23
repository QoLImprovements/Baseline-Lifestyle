import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-recreation/baseline-recreation.html', 'utf8');
const css = fs.readFileSync('systems/baseline-recreation/puzzles/the-weight-of-coherence/css/weight-of-coherence.css', 'utf8');
const js = fs.readFileSync('systems/baseline-recreation/puzzles/the-weight-of-coherence/js/weight-of-coherence.js', 'utf8');

test('Weight of Coherence keeps a muted board normally and uses white behind the 50% guide', () => {
  assert.match(js, /the-weight-of-coherence\.png\?v=WEIGHT_OF_COHERENCE_FULL_20261016_2/);
  assert.match(js, /const BOARD_BASE = recreationCssValue\('--recreation-panel','#6E2C44'\)/);
  assert.match(js, /const GUIDE_OPACITY = 0\.50/);
  assert.match(js, /ctx\.fillStyle=guideOn\?'#FFFFFF':BOARD_BASE/);
  assert.match(js, /ctx\.globalAlpha\s*=\s*GUIDE_OPACITY/);
  assert.match(js, /guideOn\?recreationRgba\('--recreation-burgundy-rgb','58,16,34',\.18\):recreationRgba\('--recreation-ink-rgb','255,244,239',\.10\)/);
  assert.doesNotThrow(() => new Function(js));
  assert.match(css, /\.weight-coherence-board-wrap\{[^}]*border:1px solid rgba\(var\(--recreation-copper-light-rgb\),\.28\)[^}]*background:var\(--recreation-panel\)/);
  assert.doesNotMatch(js, /rgba\(130,150,208,\.62\)/);
  assert.doesNotMatch(css, /rgba\(130,150,208,\.62\)/);
  assert.match(html, /weight-of-coherence\.css\?v=RECREATION_COHERENCE_20261023_1/);
  assert.match(html, /weight-of-coherence\.js\?v=RECREATION_COHERENCE_20261023_1/);
  assert.doesNotMatch(js, /undimmed, full-quality reference view/);
});


test('all non-fullscreen jigsaw interactions preserve the actual Baseline scroll root', () => {
  assert.match(html, /id="weightCoherenceBoard"[^>]*tabindex="-1"/);
  assert.match(js, /function stabilisePieceFocus\(\)\{/);
  assert.match(js, /refs\.board\.focus\(\{preventScroll:true\}\)/);
  assert.match(js, /function pageScrollRoot\(\)\{[\s\S]*?document\.querySelector\('\.bl-scroll'\)/);
  assert.match(js, /function pageScrollSnapshot\(\)\{[\s\S]*?rootY:shell \? Number\(shell\.scrollTop\)\|\|0 : 0/);
  assert.match(js, /function restorePageScroll\(snapshot\)\{[\s\S]*?scrollRoot\.scrollTo\(\{left:snapshot\.rootX,top:snapshot\.rootY,behavior:'auto'\}\)/);
  assert.match(js, /function captureInteractionScroll\(event\)\{[\s\S]*?control\.focus\(\{preventScroll:true\}\)[\s\S]*?restorePageScroll\(snapshot\)/);
  assert.match(js, /root\.addEventListener\('pointerdown',captureInteractionScroll,true\)/);
  assert.match(js, /root\.addEventListener\('click'[\s\S]*?settleInteractionScroll\(event\)/);
  assert.match(js, /window\.addEventListener\('pointerup'[\s\S]*?settleInteractionScroll\(event\)/);
  assert.match(js, /function attemptPlacement\(id,clientX,clientY\)\{[\s\S]*?const scrollSnapshot=pageScrollSnapshot\(\)/);
  assert.match(js, /if\(dx<=snapX && dy<=snapY\)\{[\s\S]*?placePiece\(id\);[\s\S]*?restorePageScroll\(scrollSnapshot\);[\s\S]*?return true;/);
  assert.match(js, /setStatus\('That piece belongs elsewhere\. Its tray piece is highlighted so you can find it again\.'[\s\S]*?restorePageScroll\(scrollSnapshot\);[\s\S]*?return false;/);
  assert.doesNotMatch(js, /refs\.board\.scrollIntoView/);
  assert.doesNotMatch(js, /function placePiece\(id\)[\s\S]{0,500}scrollIntoView/);
});

test('rejected drag drops stay at the board and highlight the returned tray piece', () => {
  assert.match(js, /let returnHighlightPieceId = null/);
  assert.match(js, /if\(!dragState\.moved && Math\.hypot\(dx,dy\)>5\)\{[\s\S]*?dragState\.moved=true;[\s\S]*?interactionScrollSnapshot=null;/);
  assert.match(js, /function attemptPlacement\(id,clientX,clientY\)\{[\s\S]*?const scrollSnapshot=pageScrollSnapshot\(\)/);
  assert.match(js, /returnHighlightPieceId=id;[\s\S]*?selectedPieceId=null;[\s\S]*?syncSelectedPieceClasses\(\);[\s\S]*?Its tray piece is highlighted/);
  assert.match(js, /root\.classList\.add\('is-wrong-drop'\);[\s\S]*?restorePageScroll\(scrollSnapshot\);[\s\S]*?return false;/);
  assert.match(js, /button\.classList\.toggle\('is-return-highlight',id===returnHighlightPieceId\)/);
  assert.match(js, /if\(returnHighlightPieceId===id\)\{[\s\S]*?returnHighlightPieceId=null;[\s\S]*?syncSelectedPieceClasses\(\)/);
  assert.match(css, /\.weight-coherence-piece\.is-return-highlight \.weight-coherence-piece-canvas\{[^}]*drop-shadow\(0 0 8px rgba\(var\(--recreation-copper-light-rgb\),\.98\)\)/);
});

test('V toggles a persistent full-colour view and pauses piece interaction without disabling zoom', () => {
  assert.match(html, /id="weightCoherenceViewBtn"[\s\S]*?aria-keyshortcuts="V"[\s\S]*?weight-coherence-hotkey">V<\/kbd>/);
  assert.match(html, /aria-label="View full artwork \(V\)"/);
  assert.match(js, /let viewOn = false/);
  assert.match(js, /if\(imageReady && viewOn\)\{[\s\S]*?ctx\.fillStyle='#FFFFFF'[\s\S]*?ctx\.drawImage\(image,0,0,BOARD_WIDTH,BOARD_HEIGHT\);[\s\S]*?return;/);
  assert.match(js, /function toggleFullView\(\)\{[\s\S]*?const next=!viewOn;[\s\S]*?cancelDrag\(\);[\s\S]*?selectedPieceId=null;[\s\S]*?viewOn=next;[\s\S]*?drawBoard\(\);/);
  assert.match(js, /refs\.view\.addEventListener\('click',toggleFullView\)/);
  assert.match(js, /if\(key==='v'\)\{[\s\S]*?!event\.repeat\) toggleFullView\(\)/);
  assert.match(js, /root\.addEventListener\('pointerdown'[\s\S]*?if\(viewOn\)\{[\s\S]*?return;/);
  assert.match(js, /refs\.board\.addEventListener\('click'[\s\S]*?pinchState \|\| viewOn/);
  assert.match(js, /button\.setAttribute\('aria-disabled',String\(viewOn\)\)/);
  assert.doesNotMatch(js, /document\.addEventListener\('keyup'[\s\S]*?endFullView/);
  assert.doesNotMatch(js, /window\.addEventListener\('blur',endFullView\)/);
});


test('View keeps tray pieces at full colour while movement remains paused', () => {
  assert.match(js, /button\.setAttribute\('aria-disabled',String\(viewOn\)\)/);
  assert.match(js, /root\.addEventListener\('pointerdown'[\s\S]*?if\(viewOn\)\{[\s\S]*?return;/);
  assert.match(css, /#weightCoherencePuzzle\.is-viewing-artwork \.weight-coherence-piece\[aria-disabled="true"\]\{opacity:1!important;filter:none!important;cursor:zoom-in!important\}/);
  assert.match(css, /#weightCoherencePuzzle\.is-viewing-artwork \.weight-coherence-piece\[aria-disabled="true"\] \.weight-coherence-piece-canvas\{opacity:1!important;filter:drop-shadow/);
});

test('sorting trays use full width, top-fill fixed rows, and no blue piece cards', () => {
  assert.match(css, /\.weight-coherence-sort-tray\{[^}]*grid-template-columns:repeat\(auto-fill,minmax\(64px,1fr\)\)[^}]*grid-auto-rows:68px[^}]*align-content:start[^}]*width:100%[^}]*padding:4px 0 0[^}]*border:0[^}]*background:transparent/);
  assert.match(css, /\.weight-coherence-sort-tray \.weight-coherence-piece\{[^}]*min-height:68px[^}]*height:68px[^}]*border:0[^}]*background:transparent[^}]*box-shadow:none/);
  assert.match(css, /\.weight-coherence-sort-tray \.weight-coherence-piece:hover,[\s\S]*?\.weight-coherence-sort-tray \.weight-coherence-piece\.is-selected\{[^}]*border:0[^}]*background:transparent[^}]*box-shadow:none/);
  assert.match(css, /\.weight-coherence-sort-tray \.weight-coherence-piece-canvas\{[^}]*max-width:58px[^}]*max-height:58px[^}]*width:auto[^}]*height:auto/);
  assert.doesNotMatch(css, /\.weight-coherence-sort-tray\{[^}]*grid-auto-rows:minmax\(68px,1fr\)/);
  assert.doesNotMatch(css, /\.weight-coherence-sort-tray\{[^}]*align-content:stretch/);
});

test('zoom level is always adjustable from 200 to 1000 percent, displayed beside the magnifier, and saved server-side', () => {
  assert.match(html, /id="weightCoherenceZoomOutBtn"(?![^>]*disabled)[\s\S]*?<span[^>]*id="weightCoherenceZoomBtn"[^>]*aria-keyshortcuts="Z"[\s\S]*?id="weightCoherenceZoomValue">200%<\/span>[\s\S]*?id="weightCoherenceZoomInBtn"(?![^>]*disabled)[\s\S]*?id="weightCoherencePreviewBtn"/);
  assert.match(html, /weight-coherence-hotkey">Z<\/kbd>/);
  assert.doesNotMatch(html, /<button[^>]*id="weightCoherenceZoomBtn"/);
  assert.doesNotMatch(html, /id="weightCoherenceZoom(?:Out|In)Btn"[^>]*(?:title|aria-label)="[^"]*%/);
  assert.match(css, /\.weight-coherence-zoom-indicator\{[^}]*pointer-events:none/);
  assert.match(css, /\.weight-coherence-zoom-value\{/);
  assert.match(js, /const ZOOM_MIN = 2/);
  assert.match(js, /const PIECE_ZOOM_DEFAULT = 2/);
  assert.match(js, /const PIECE_ZOOM_MAX = 10/);
  assert.match(js, /const ZOOM_STEP = 1/);
  assert.match(js, /refs\.zoomValue\.textContent=percent \+ '%'/);
  assert.match(js, /function storedJigsawZoom\(\)/);
  assert.match(js, /getProfile\?\.\('hubsettings'\)/);
  assert.match(js, /saveProfile\?\.\('hubsettings',profile,\{immediate:true/);
  assert.match(js, /zoomLevel=next;[\s\S]*?saveJigsawZoom\(\)/);
  assert.match(js, /refs\.zoomOut\.addEventListener\('click'[\s\S]*?adjustZoom\(-1\)/);
  assert.match(js, /refs\.zoomIn\.addEventListener\('click'[\s\S]*?adjustZoom\(1\)/);
  assert.doesNotMatch(js, /refs\.zoomToggle\.addEventListener/);
  assert.match(css, /#weightCoherencePuzzle \.weight-coherence-piece\.is-zoom-target/);
});

test('jigsaw settings expose the shared server-backed music controls and tray restart renders atomically', () => {
  assert.match(html, /weightCoherenceSettingsDialog[\s\S]*?data-games-music-toggle[\s\S]*?data-games-music-volume/);
  assert.match(html, /Music volume[\s\S]*?Saved to your Recreation account settings when signed in/);
  assert.match(css, /\.weight-coherence-audio-row\{/);
  assert.match(css, /#weightCoherencePuzzle \.jigsaw-tab-row\{[\s\S]*?overflow:visible!important/);
  assert.match(js, /refs\.tray\.replaceChildren\(fragment\)/);
  assert.match(js, /tray\.replaceChildren\(fragment\)/);
  assert.doesNotMatch(js, /requestAnimationFrame\(paintBatch\)/);
});

test('jigsaws start or resume without a separate Start button and persist on pagehide', () => {
  assert.doesNotMatch(html, /id="weightCoherenceStartBtn"/);
  assert.match(html, /starts immediately or resumes your saved progress/);
  assert.match(js, /if\(!state && storageReady\) beginPuzzle\(\)/);
  assert.match(js, /window\.addEventListener\('pagehide',function\(\)\{ saveState\(\); \}/);
});

test('tray piece Z zoom shows the entire irregular piece above the workspace without scaling its card', () => {
  assert.match(js, /let zoomLevel = PIECE_ZOOM_DEFAULT/);
  assert.match(js, /let pieceOverlay = null/);
  assert.match(js, /function ensurePieceOverlay\(\)\{[\s\S]*?pieceOverlay\.className='weight-coherence-piece-overlay'/);
  assert.match(js, /function updatePieceOverlay\(target\)\{[\s\S]*?requestedWidth=sourceRect\.width\*zoomScale[\s\S]*?requestedHeight=sourceRect\.height\*zoomScale/);
  assert.match(js, /const fitScale=Math\.min\([\s\S]*?viewport\.width-edgeMargin[\s\S]*?viewport\.height-edgeMargin/);
  assert.match(js, /tracePiecePath\(overlayCtx,g\)[\s\S]*?overlayCtx\.clip\(\)[\s\S]*?drawArtworkRegion\(overlayCtx,g,pieceMargin\)/);
  assert.match(js, /function applyPieceZoom\(target,scale\)\{[\s\S]*?zoomTarget=target;[\s\S]*?zoomScale=nextScale;[\s\S]*?updatePieceOverlay\(target\)/);
  assert.doesNotMatch(js, /weight-coherence-piece-lens|ensurePieceLens|updatePieceLens/);
  assert.doesNotMatch(js, /--weight-coherence-piece-zoom/);
  assert.doesNotMatch(css, /weight-coherence-piece\.is-zoom-target[^}]*transform:scale/);
  assert.match(css, /\.weight-coherence-piece-overlay\{[^}]*position:fixed[^}]*z-index:2147483601[^}]*border:0[^}]*background:transparent[^}]*pointer-events:none/);
  assert.match(html, /enlarge the entire jigsaw piece above the workspace while its tray card stays fixed/);
  assert.match(html, /enlarges the complete irregular piece without enlarging its tray card/);
});

test('holding Z over the jigsaw opens a circular magnifier lens without scaling the board', () => {
  assert.match(js, /function ensureBoardLens\(\)/);
  assert.match(js, /boardLens\.className='weight-coherence-board-lens'/);
  assert.match(js, /function updateBoardLens\(clientX,clientY\)/);
  assert.match(js, /const sourceWidth=\(diameter\/zoomLevel\)/);
  assert.match(js, /lensCtx\.drawImage\([\s\S]*?refs\.board/);
  assert.match(js, /function beginBoardLens\(\)/);
  assert.match(js, /function endBoardLens\(\)/);
  assert.match(js, /if\(key==='z'\)\{[\s\S]*?if\(target===refs\.boardWrap\)\{[\s\S]*?zoomKeyHeld=true;[\s\S]*?beginBoardLens\(\)/);
  assert.match(js, /document\.addEventListener\('keyup'[\s\S]*?key!=='z'[\s\S]*?endBoardLens\(\)/);
  assert.match(js, /root\.addEventListener\('pointermove',rememberZoomTarget/);
  assert.match(css, /\.weight-coherence-board-lens\{[^}]*position:fixed[^}]*border:2px solid #050505[^}]*border-radius:50%[^}]*pointer-events:none/);
  assert.doesNotMatch(css, /\.weight-coherence-board-wrap\.is-zoom-target/);
  assert.doesNotMatch(js, /zoomTarget\.style\.transformOrigin=.*refs\.boardWrap/);
});


test('Zoom remains available on the board and tray pieces while View is enabled', () => {
  assert.match(js, /function zoomableTargetFromNode\(node\)\{[\s\S]*?closest\?\.\('\[data-piece-id\]'\)[\s\S]*?return refs\.boardWrap/);
  assert.match(js, /root\.addEventListener\('pointerover',rememberZoomTarget/);
  assert.match(js, /root\.addEventListener\('pointermove',rememberZoomTarget/);
  assert.match(js, /if\(key==='z'\)\{[\s\S]*?const target=resolveZoomTarget\(\)[\s\S]*?togglePieceZoom\(target\)/);
  assert.doesNotMatch(js, /if\(key==='z'\)[\s\S]{0,300}viewOn/);
  assert.match(js, /if\(imageReady && viewOn\)[\s\S]*?ctx\.drawImage\(image,0,0,BOARD_WIDTH,BOARD_HEIGHT\)/);
  assert.match(html, /Zoom works on the board and tray pieces while View is enabled/);
});

test('jigsaw information button opens an in-workspace how-to and hotkey dialog', () => {
  assert.match(html, /id="weightCoherenceHelpBtn"[^>]*aria-controls="weightCoherenceHelpDialog"/);
  assert.match(html, /id="weightCoherenceHelpDialog"[\s\S]*?How to play & hotkeys/);
  assert.match(html, /<kbd>Z<\/kbd>[\s\S]*?<kbd>− \/ \+<\/kbd>[\s\S]*?<kbd>V<\/kbd>[\s\S]*?<kbd>G<\/kbd>[\s\S]*?<kbd>S<\/kbd>[\s\S]*?<kbd>F<\/kbd>[\s\S]*?<kbd>← \/ →<\/kbd>/);
  assert.match(js, /help:document\.getElementById\('weightCoherenceHelpBtn'\)/);
  assert.match(js, /helpDialog:document\.getElementById\('weightCoherenceHelpDialog'\)/);
  assert.match(js, /function openHelp\(\)/);
  assert.match(js, /refs\.help\.addEventListener\('click',openHelp\)/);
  assert.match(js, /const dialogOpen=!!\(refs\.settingsDialog\?\.open \|\| refs\.helpDialog\?\.open\)/);
  assert.match(css, /\.weight-coherence-help-dialog\{/);
  assert.match(css, /\.weight-coherence-help-row\{/);
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
  assert.match(css, /\.weight-coherence-sort-tray\{[^}]*grid-auto-rows:68px[^}]*align-content:start[^}]*align-self:stretch[^}]*width:100%[^}]*max-height:none/);
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
