import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { LEVELS, hintMove } from '../systems/baseline-recreation/games/colour-sort/js/colour-sort-engine.mjs';

const read=relative=>fs.readFileSync(new URL('../'+relative,import.meta.url),'utf8');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const core=read('systems/baseline-recreation/js/baseline-recreation-core.js');
const nonRealmCss=read('systems/baseline-recreation/css/non-realm-game-refinement.css');
const music=read('systems/baseline-recreation/js/games-music.js');
const config=read('systems/baseline-recreation/js/games-core-config.js');
const blockGrid=read('systems/baseline-recreation/games/block-grid/js/block-grid.js');
const blockCss=read('systems/baseline-recreation/games/block-grid/css/block-grid.css');
const colourSort=read('systems/baseline-recreation/games/colour-sort/js/colour-sort.js');
const crossnumber=read('systems/baseline-recreation/puzzles/crossnumber/js/crossnumber.js');
const htaccess=read('.htaccess');

test('reviewed core games use game-first side-by-side desktop keypad layouts',()=>{
  assert.match(nonRealmCss,/#detectwordPanel \.game-play-root\.desktop-keypad-open #wordBoard[\s\S]*?grid-template-columns:minmax\(380px,1fr\) minmax\(410px,\.82fr\)/);
  assert.match(nonRealmCss,/#make24Panel \.game-play-root\.desktop-keypad-open #make24Board[\s\S]*?grid-template-columns:minmax\(420px,1fr\) minmax\(330px,\.68fr\)/);
  assert.match(nonRealmCss,/#detectwordPanel \.mobile-game-key[\s\S]*?min-height:40px/);
  assert.match(music,/data-games-text-size-row/);
  assert.match(music,/textScaleFor\(gameId\)/);
});

test('core New Game is one-click, opens Pairs idle, and keeps Full Screen inside the game controls',()=>{
  assert.match(core,/function startButtonLabel\(gameId\)[\s\S]*?\? 'Next Game' : 'New Game'/);
  assert.doesNotMatch(core,/Start New Game|Start Next Game/);
  assert.match(core,/document\.addEventListener\('pointerdown',[\s\S]*?newPairsBoardBtn,#newWordRoundBtn,#newMake24Btn,#newTrackCoinRoundBtn,#newRuleShiftBtn[\s\S]*?startCoreGameFromButton\(start\)/);
  assert.match(core,/document\.addEventListener\('click',[\s\S]*?coreNewGamePointerId[\s\S]*?startCoreGameFromButton\(start\)/);
  assert.match(core,/opts\.useStored===true && routedGame==='pairs'[\s\S]*?pairsBoardState=null/);
  assert.match(core,/const windowActions = gameRoot \? gameRoot\.querySelector\('\.game-window-actions'\)/);
  assert.match(core,/if\(fullBtn && windowActions && fullBtn\.parentElement!==windowActions\) windowActions\.appendChild\(fullBtn\)/);
});

test('non-Realm progression uses Player Rank while Tier remains the difficulty label',()=>{
  assert.doesNotMatch(html,/Game Info<\/span><span class="inline-note">Level \/ XP \/ stats/);
  assert.match(html,/Game Info<\/span><span class="inline-note">Player Rank \/ XP \/ stats/);
  for(const id of ['pairsLevelHeading','wordLevelHeading','make24LevelHeading','trackCoinLevelHeading','ruleShiftLevelHeading']){
    assert.match(html,new RegExp('id="'+id+'">Player Rank 1<\\/div>'));
  }
  assert.doesNotMatch(colourSort,/trackcoin-level-title">Level -/);
  assert.match(colourSort,/trackcoin-level-title">Player Rank \$\{profile\.level\}/);
  assert.match(crossnumber,/data-crossnumber-tier-label|tierDefinition/);
});

test('Detect the Word and Make The Number keep coherent input behavior and active-round persistence',()=>{
  assert.match(core,/explicitWordSubmit[\s\S]*?submitWordGuess/);
  assert.match(core,/explicitMakeSubmit[\s\S]*?submitMake24Expression/);
  assert.match(core,/make24Board \[data-make24-token\],#make24Board \[data-make24-edit\][\s\S]*?event\.preventDefault\(\)/);
  assert.match(core,/renderMake24Board\(\);[\s\S]*?focusGameInput\('make24ExpressionInput'\)/);
  assert.match(core,/Object\.prototype\.hasOwnProperty\.call\(temporary,'activeRound'\)/);
  assert.match(core,/profiles\[app\]\.activeRound=temporary\.activeRound/);
  assert.match(nonRealmCss,/#detectwordPanel \.letter-cell\.absent[\s\S]*?linear-gradient\(180deg,#401522 0%,#250b14 100%\)/);
});

test('Rule Shift uses a true oval and unmistakably separated red, blue and lime colours',()=>{
  assert.match(config,/\{ id:'oval', name:'Oval' \}/);
  assert.match(config,/\{ id:'lime', name:'Lime' \}/);
  assert.doesNotMatch(config,/\{ id:'pill', name:'Pill' \}|\{ id:'teal', name:'Teal' \}/);
  assert.doesNotMatch(core,/ruleshift-token-caption" aria-hidden/);
  assert.match(core,/if\(rule && rule\.shape==='pill'\) rule\.shape='oval'/);
  assert.match(core,/if\(rule && rule\.colour==='teal'\) rule\.colour='lime'/);
  assert.match(nonRealmCss,/ruleshift-colour--red \.ruleshift-shape\{[\s\S]*?background:#e21837!important/);
  assert.match(nonRealmCss,/ruleshift-colour--lime \.ruleshift-shape\{[\s\S]*?background:#9edb35!important/);
  assert.match(nonRealmCss,/ruleshift-shape--oval\{[\s\S]*?clip-path:ellipse\(50% 50% at 50% 50%\)!important/);
});

test('Track the Coin uses one continuous shuffle timeline and reliably selectable cups',()=>{
  assert.match(core,/function runTrackCoinShuffle\(_stepIndex, roundToken, onComplete\)/);
  assert.match(core,/const total=Math\.max\(1,cursor\)/);
  assert.match(core,/const h00=\(2\*t3\)-\(3\*t2\)\+1/);
  assert.match(core,/cup\.left=\+\(h00\*start\.left\+h10\*m0Left\+h01\*target\.left\+h11\*m1Left\)/);
  assert.match(core,/trackCoinState\.phase='pick';[\s\S]*?trackCoinState\.pickLocked=false;[\s\S]*?renderTrackCoin\(\)/);
  assert.match(core,/trackCoinAnimationFrame=window\.requestAnimationFrame\(frame\)/);
  assert.match(core,/pointerup[\s\S]*?trackcoin-cup\.is-selectable\[data-trackcoin-pick\][\s\S]*?chooseTrackCoinCup/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-scene\.is-phase-pick \.trackcoin-cup\.is-selectable[\s\S]*?pointer-events:auto!important/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-cup\{[\s\S]*?opacity:1!important/);
});

test('Recreation music preferences are server-side and quick controls stay inside activity controls',()=>{
  assert.doesNotMatch(music,/\b(?:localStorage|sessionStorage|indexedDB)\b/);
  assert.match(music,/getProfile\?\.\('hubsettings'\)/);
  assert.match(music,/saveProfile\?\.\('hubsettings'/);
  assert.match(music,/data-games-music-quick/);
  assert.match(music,/var roots = \['pairsGameCard','wordGameCard','make24GameCard','trackCoinGamePanel','ruleShiftGameCard','blockGridGameCard','colourSortGameCard','crossnumberGamePanel'\]/);
});

test('reported uncomfortable games use the sensory-gentle music replacement set',()=>{
  for(const id of ['pairs','detectword','make24','trackcoin','ruleshift','crossnumber']){
    assert.match(music,new RegExp("SENSORY_GENTLE_GAMES[\\s\\S]*?'"+id+"'"));
  }
  assert.match(music,/if\(sensoryGentle\) return;/);
  assert.match(music,/sensoryGentle \? 0 :/);
});

test('Block Grid lands from the exact grabbed piece cell and exposes charged specials',()=>{
  assert.match(blockGrid,/grabRow=Math\.floor\(cellIndex\/Math\.max\(1,bounds\.cols\)\)/);
  assert.match(blockGrid,/grabCol=cellIndex%Math\.max\(1,bounds\.cols\)/);
  assert.match(blockGrid,/const heldX = \(grabCol \* pitchX\) \+ \(firstRect\.width \* offsetX\)/);
  assert.match(blockGrid,/const heldY = \(grabRow \* pitchY\) \+ \(firstRect\.height \* offsetY\)/);
  assert.match(blockGrid,/const pieceLeft = clientX - heldX/);
  assert.match(blockGrid,/const pieceTop = clientY - heldY/);
  assert.match(blockGrid,/const col = Math\.round\(\(pieceLeft - firstRect\.left\) \/ pitchX\)/);
  assert.match(blockGrid,/const row = Math\.round\(\(pieceTop - firstRect\.top\) \/ pitchY\)/);
  assert.match(blockGrid,/const action = target\.closest\('\[data-block-action\]'\)[\s\S]*?if \(suppressClick\)/);
  assert.match(blockGrid,/skillCharge/);
  assert.match(blockGrid,/Clear 4 × 4/);
  assert.match(blockGrid,/Clear 2 Rows/);
  assert.match(blockGrid,/active\.gameOver = !hasAnyPlacement\(active\.board, active\.tray\)/);
  assert.match(blockGrid,/class="block-grid-play-cluster"/);
  assert.match(blockGrid,/addEventListener\('dragstart'[\s\S]*?preventDefault/);
  assert.match(blockCss,/cursor:none!important;user-select:none!important/);
  assert.match(blockCss,/blockGridGameCard:fullscreen::before[\s\S]*?content:"Block Grid"/);
});

test('Colour Sort exposes difficulty tiers while keeping the 60 authored layouts internal and unpredictable',()=>{
  assert.equal(LEVELS.length,60);
  assert.match(colourSort,/Starter[\s\S]*?Flow[\s\S]*?Strategy[\s\S]*?Advanced[\s\S]*?Expert/);
  assert.match(colourSort,/function randomLevelForTier\(tierId\)/);
  assert.match(colourSort,/recentLevels[\s\S]*?slice\(-5\)/);
  assert.match(colourSort,/data-colour-tier/);
  assert.doesNotMatch(colourSort,/data-colour-level/);
  assert.doesNotMatch(colourSort,/Next Level|Level Progress|trackcoin-level-title">Level -/);
  assert.match(colourSort,/trackcoin-level-title">Player Rank \$\{profile\.level\}/);
  assert.match(colourSort,/coverBuried=id>=25/);
  assert.match(colourSort,/const exposedStart=Math\.max\(0,bottle\.length-topRunLength\(bottle\)\)/);
  assert.match(colourSort,/id>=49\?2:\(id>=37\?1:0\)/);
  assert.match(colourSort,/blockedIndices:lockedBottleIndices\(active\)/);
  const solved=[[0,0,0,0],[1,1,1,1],[],[]];
  assert.equal(hintMove(solved),null);
});

test('Cross Number avoids recent layouts, fits the whole board, and keeps all controls in the game',()=>{
  assert.match(crossnumber,/recentLayouts/);
  assert.match(crossnumber,/chooseDiverseLayout/);
  assert.match(crossnumber,/signatureOverlap/);
  assert.match(crossnumber,/function restartRound\(/);
  assert.match(crossnumber,/function toggleFullscreen\(/);
  assert.match(crossnumber,/newGamePointerAt=performance\.now\(\)[\s\S]*?createNewRound\(\{tierId:profile\.selectedTier\}\)/);
  assert.match(crossnumber,/visualViewport\?\.addEventListener\?\.\('resize'/);
  assert.match(html,/data-crossnumber-action="restart">Restart</);
  assert.match(html,/data-crossnumber-action="fullscreen"[^>]*>Full Screen</);
  assert.match(html,/data-crossnumber-action="new">New Game</);
  assert.match(html,/<h2>Cross Number<\/h2>/);
  assert.match(html,/data-crossnumber-level>Player Rank 1<\/div>/);
});

test('canonical and legacy recreation routes preserve direct game destinations on refresh',()=>{
  assert.match(htaccess,/baseline-games-hub\/games-hub\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(htaccess,/baseline-recreation\/games\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(core,/function recreationStateFromCleanPath\(\)/);
  assert.match(core,/base \+ '\/games\/'/);
  assert.match(core,/normaliseGameId\(rest\.split\('\/'\)\[0\]\)/);
});
