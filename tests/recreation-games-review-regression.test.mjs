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
const extensionSupport=read('systems/baseline-recreation/js/game-extension-support.mjs');
const crossnumberCss=read('systems/baseline-recreation/puzzles/crossnumber/css/crossnumber.css');
const jigsaw=read('systems/baseline-recreation/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');
const jigsawCss=read('systems/baseline-recreation/puzzles/the-weight-of-coherence/css/weight-of-coherence.css');
const htaccess=read('.htaccess');

test('reviewed core games use game-first side-by-side desktop keypad layouts',()=>{
  assert.match(nonRealmCss,/#detectwordPanel \.game-play-root\.desktop-keypad-open #wordBoard[\s\S]*?grid-template-columns:minmax\(380px,1fr\) minmax\(410px,\.82fr\)/);
  assert.match(nonRealmCss,/#make24Panel \.game-play-root\.desktop-keypad-open #make24Board[\s\S]*?grid-template-columns:minmax\(420px,1fr\) minmax\(330px,\.68fr\)/);
  assert.match(nonRealmCss,/#detectwordPanel \.mobile-game-key[\s\S]*?min-height:40px/);
  assert.match(music,/data-games-text-size-row/);
  assert.match(music,/textScaleFor\(gameId\)/);
});

test('core New Game is one-click, opens Pairs idle, and keeps Full Screen inside the game controls',()=>{
  assert.match(core,/function startButtonLabel\(_gameId\)\{ return 'New Game'; \}/);
  assert.doesNotMatch(core,/Start New Game|Start Next Game/);
  assert.match(core,/document\.addEventListener\('pointerdown',[\s\S]*?newPairsBoardBtn,#newWordRoundBtn,#newMake24Btn,#newTrackCoinRoundBtn,#newRuleShiftBtn[\s\S]*?startCoreGameFromButton\(start\)/);
  assert.match(core,/document\.addEventListener\('click',[\s\S]*?coreNewGamePointerId[\s\S]*?startCoreGameFromButton\(start\)/);
  assert.match(core,/function resetGameRoundToIdle\(gameId\)[\s\S]*?profile\.activeRound=null;[\s\S]*?scheduleSave\(id\)/);
  assert.doesNotMatch(core,/function restoreSavedPairsRound\(/);
  assert.doesNotMatch(core,/function savedPairsRoundSnapshot\(/);
  assert.match(core,/pairsBoardState=null;[\s\S]*?profiles\.pairs\.activeRound=null/);
  assert.match(core,/const wordRestored=restoreSavedWordRound\(\)/);
  assert.match(core,/const makeRestored=restoreSavedMake24Round\(\)/);
  assert.match(core,/const trackRestored=restoreSavedTrackCoinRound\(\)/);
  assert.match(core,/const ruleRestored=restoreSavedRuleShiftRound\(\)/);
  assert.match(core,/if\(selectedGame === 'pairs'[\s\S]*?resetGameRoundToIdle\('pairs'\)/);
  assert.doesNotMatch(core,/resetGameRoundToIdle\(selectedGame\)/);
  assert.match(core,/const windowActions = gameRoot \? gameRoot\.querySelector\('\.game-window-actions'\)/);
  assert.match(core,/if\(fullBtn && windowActions && fullBtn\.parentElement!==windowActions\) windowActions\.appendChild\(fullBtn\)/);
});

test('Recreation idle start states stay centred and cannot inherit active game columns',()=>{
  assert.match(blockGrid,/class="block-grid-empty"/);
  assert.match(colourSort,/class="colour-sort-empty"/);
  assert.match(core,/pairsBoard\.innerHTML = '<div class="empty-box"/);
  assert.match(core,/wordBoard\.innerHTML = '<div class="empty-box"/);
  assert.match(core,/make24Board\.innerHTML = '<div class="empty-box"/);
  assert.match(core,/trackCoinBoard\.innerHTML = '<div class="empty-box trackcoin-idle-card"/);
  assert.match(core,/ruleShiftBoard\.innerHTML = '<div class="empty-box ruleshift-idle-card"/);
  assert.match(nonRealmCss,/Recreation idle\/start alignment authority/);
  assert.match(nonRealmCss,/#blockGridPanel #blockGridGameCard > \.block-grid-empty[\s\S]*?#colourSortPanel #colourSortGameCard > \.colour-sort-empty/);
  assert.match(nonRealmCss,/> :is\(\.block-grid-empty,\.colour-sort-empty\)\{[\s\S]*?grid-column:1\/-1!important[\s\S]*?grid-row:1\/-1!important[\s\S]*?justify-self:stretch!important[\s\S]*?align-self:stretch!important/);
  assert.match(nonRealmCss,/\.game-window-actions\.game-common-actions\{[\s\S]*?justify-self:center!important[\s\S]*?justify-content:center!important/);
  assert.match(html,/non-realm-game-refinement\.css\?v=RECREATION_IDLE_ALIGNMENT_20261024_1/);
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

test('core skill trees distinguish skill Rank from Player Rank progression',()=>{
  assert.doesNotMatch(core,/<span>Level ' \+ level \+ ' \/ '/);
  assert.doesNotMatch(core,/Requires level ' \+ skill\.unlockLevel/);
  assert.match(core,/<span>Rank ' \+ level \+ ' \/ ' \+ skill\.max/);
  assert.match(core,/Requires Player Rank ' \+ skill\.unlockLevel/);
});

test('Detect the Word and Make The Number keep coherent input behavior and active-round persistence',()=>{
  assert.match(core,/explicitWordSubmit[\s\S]*?submitWordGuess/);
  assert.match(core,/explicitMakeSubmit[\s\S]*?submitMake24Expression/);
  assert.match(core,/#make24GameCard \[data-make24-token\],#make24GameCard \[data-make24-edit\][\s\S]*?event\.preventDefault\(\)[\s\S]*?requestAnimationFrame\(keepMake24InputFocused\)/);
  assert.match(core,/renderMake24Board\(\);[\s\S]*?focusGameInput\('make24ExpressionInput'\)/);
  assert.match(core,/Object\.prototype\.hasOwnProperty\.call\(temporary,'activeRound'\)/);
  assert.match(core,/profiles\[app\]\.activeRound=temporary\.activeRound/);
  assert.match(nonRealmCss,/#detectwordPanel \.letter-cell\.absent[\s\S]*?linear-gradient\(180deg,#401522 0%,#250b14 100%\)/);
});

test('Rule Shift uses a true oval and unmistakably separated categorical colours',()=>{
  assert.match(config,/\{ id:'oval', name:'Oval' \}/);
  assert.match(config,/\{ id:'white', name:'White' \}/);
  assert.doesNotMatch(config,/\{ id:'pill', name:'Pill' \}|\{ id:'teal', name:'Teal' \}/);
  assert.doesNotMatch(core,/ruleshift-token-caption" aria-hidden/);
  assert.match(core,/if\(rule && rule\.shape==='pill'\) rule\.shape='oval'/);
  assert.match(core,/if\(rule && \(rule\.colour==='teal'\|\|rule\.colour==='lime'\)\) rule\.colour='white'/);
  assert.match(nonRealmCss,/ruleshift-colour--red \.ruleshift-shape\{[\s\S]*?background:#e21837!important/i);
  assert.match(nonRealmCss,/ruleshift-colour--white \.ruleshift-shape\{[\s\S]*?background:#f4f7fa!important/i);
  assert.equal((nonRealmCss.match(/ruleshift-colour--red \.ruleshift-shape\{/gi)||[]).length,1);
  assert.equal((nonRealmCss.match(/ruleshift-colour--white \.ruleshift-shape\{background:#f4f7fa!important\}/gi)||[]).length,1);
  assert.match(nonRealmCss,/Rule Shift: crisp geometry[\s\S]*?box-shadow:none!important[\s\S]*?transform:none!important/);
  assert.match(nonRealmCss,/ruleshift-shape--oval,[\s\S]*?ruleshift-shape--circle\{[\s\S]*?clip-path:none!important/);
});

test('Track the Coin uses one continuous shuffle timeline and reliably selectable cups',()=>{
  assert.match(core,/function runTrackCoinShuffle\(_stepIndex, roundToken, onComplete\)/);
  assert.match(core,/const total=Math\.max\(1,cursor\)/);
  assert.match(core,/const h00=\(2\*t3\)-\(3\*t2\)\+1/);
  assert.match(core,/cup\.left=\+\(h00\*start\.left\+h10\*m0Left\+h01\*target\.left\+h11\*m1Left\)/);
  assert.match(core,/trackCoinState\.phase='pick';[\s\S]*?trackCoinState\.pickLocked=false;[\s\S]*?renderTrackCoin\(\)/);
  assert.match(core,/const pickReady=!resolved&&savedPhase==='pick'/);
  assert.match(core,/restoredWaiting:!resolved&&!pickReady/);
  assert.doesNotMatch(core,/trackCoinState\.restoredWaiting=true/);
  assert.match(core,/trackCoinAnimationFrame=window\.requestAnimationFrame\(frame\)/);
  assert.match(core,/data-trackcoin-pick="' \+ escapeHtml\(cup\.id\) \+ '"/);
  assert.match(core,/trackCoinState\.cups\.find\(function\(cup\)\{ return cup\.id===choice; \}\)/);
  assert.match(core,/refs\.trackCoinBoard\.addEventListener\('pointerdown',selectTrackCoinCup,true\)/);
  assert.match(core,/refs\.trackCoinBoard\.addEventListener\('pointerup',selectTrackCoinCup,true\)/);
  assert.match(core,/refs\.trackCoinBoard\.addEventListener\('click',selectTrackCoinCup,true\)/);
  assert.match(core,/const selectTrackCoinCup=function\(event\)[\s\S]*?trackCoinState\.phase!==\'pick\'[\s\S]*?chooseTrackCoinCup/);
  assert.doesNotMatch(core,/event\.detail===0/);
  assert.doesNotMatch(core,/trackCoinPointerPickAt/);
  assert.match(core,/trackCoinState\.phase!==\'pick\'/);
  assert.match(core,/everyCupMoves/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-scene\.is-phase-pick \.trackcoin-cup\.is-selectable[\s\S]*?pointer-events:auto!important/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-cup\{[\s\S]*?opacity:1!important/);
});

test('Recreation music preferences are server-side and quick controls stay inside activity controls',()=>{
  assert.doesNotMatch(music,/\b(?:localStorage|sessionStorage|indexedDB)\b/);
  assert.match(music,/getProfile\?\.\('hubsettings'\)/);
  assert.match(music,/saveProfile\?\.\('hubsettings'/);
  assert.match(music,/data-games-music-quick/);
  assert.match(music,/function quickMusicMarkup\(label\)/);
  assert.match(music,/btn\.innerHTML=quickMusicMarkup\(settings\.enabled\?'Music on':'Music off'\)/);
  assert.match(music,/btn\.setAttribute\('data-tooltip',tooltip\)/);
  assert.match(music,/btn\.setAttribute\('data-tooltip','Settings · Alt\+S'\)/);
  assert.doesNotMatch(music,/setAttribute\('data-hotkey-caption'/);
  assert.match(music,/games-settings-trigger__icon[\s\S]*?<span class="sr-only">Settings<\/span>/);
  assert.match(music,/if\(key === 'm'\)[\s\S]*?setEnabled\(!settings\.enabled\)/);
  assert.match(music,/if\(key === 's'\)[\s\S]*?if\(activeGame === 'jigsaw'\) return;/);
  assert.match(music,/document\.addEventListener\('baseline:game-storage'[\s\S]*?if\(!wasEnabled\) startActive\(\);[\s\S]*?else recoverPlayback\(\)/);
  assert.doesNotMatch(music,/document\.addEventListener\('baseline:game-storage'[\s\S]{0,260}?if\(settings\.enabled && activeGame\) startActive\(\)/);
  assert.match(music,/if\(timer && nextBarTime > c\.currentTime \+ 0\.25\) return;/);
  assert.match(music,/var SCHEDULE_AHEAD_SECONDS = 8/);
  assert.match(music,/var SCHEDULER_INTERVAL_MS = 900/);
  assert.match(music,/normalizedOutput\.gain\.value = 3\.2/);
  assert.match(music,/while\(nextBarTime < ctx\.currentTime \+ SCHEDULE_AHEAD_SECONDS\)/);
  assert.doesNotMatch(music,/ctx\.currentTime \+ 75/);
  assert.match(music,/function mutationAddsElement\(records\)[\s\S]*?node\.nodeType===1/);
  assert.match(music,/new MutationObserver\(function\(records\)\{[\s\S]*?if\(!mutationAddsElement\(records\)\) return;[\s\S]*?injectSettingsButtons\(\);[\s\S]*?syncUi\(\)/);
  assert.doesNotMatch(music,/new MutationObserver\(function\(\)\{\s*injectSettingsButtons\(\);\s*syncUi\(\);\s*\}\)/);
  assert.match(music,/var roots = \['pairsGameCard','wordGameCard','make24GameCard','trackCoinGamePanel','ruleShiftGameCard','blockGridGameCard','colourSortGameCard','crossnumberGamePanel'\]/);
  assert.match(music,/#weightCoherenceWorkspace \.weight-coherence-actions/);
  assert.doesNotMatch(music,/#ninjaPanel \.realm-utility/);
  assert.match(core,/if\(id !== 'ninja' && !q\(':scope > \.mobile-game-exit', root\)\)/);
  assert.match(music,/Baseline Recreation<\/small><h3 id="gamesMusicSettingsTitle">Settings/);
});

test('Round Status and reward terminology stay coherent across Recreation',()=>{
  assert.match(core,/function coherentRoundStatusHtml\(label,message,profile,tierName\)/);
  assert.match(core,/cleanStreak:\{ label:'Clean Streak Bonus', perStepPct:5, maxPct:100 \}/);
  assert.match(core,/Winning Streak[\s\S]*?Clean Streak Bonus/);
  assert.match(core,/Ranked Up! Player Rank/);
  assert.match(core,/refs\.wordRoundSummary\.innerHTML = coherentRoundStatusHtml\('Round Status',wordState\.lastMessage,profiles\.detectword,currentWordTier\(\)\.name\)/);
  assert.match(core,/Board cleared\. \+' \+ rewards\.bank \+ ' Bank Coins · \+' \+ rewards\.xp \+ ' XP'/);
  assert.match(core,/Clean Streak Bonus \+' \+ rewards\.cleanPct \+ '%'/);
  assert.doesNotMatch(core,/Current streak bonus/);
  assert.doesNotMatch(html,/Clean streak bonus/);
  assert.doesNotMatch(core,/Clean streak bonus/);
  assert.doesNotMatch(crossnumber,/Clean streak bonus/);
  assert.match(html,/Bank Coins <span data-crossnumber-bank-value/);
  assert.match(html,/Bank Coins <span id="ruleShiftBankValue"/);
  assert.doesNotMatch(core,/const streakPct = trackCoinStreakBonusPct/);
  assert.doesNotMatch(core,/ · clean bonus \+/i);
  assert.doesNotMatch(html,/>Streak Bonus </i);
  assert.doesNotMatch(html,/>Clean Bonus</i);
  assert.match(html,/Round Bank Coins <span id="wordRoundBankValue">/);
  assert.match(crossnumber,/Bank Coins · \+'\+rewards\.xp\+' XP'[\s\S]*?Clean Streak Bonus/);
});

test('fullscreen layouts use bounded side panels except the deliberately independent Jigsaw workspace',()=>{
  assert.match(nonRealmCss,/--recreation-fs-side:clamp\(230px,20vw,330px\)[\s\S]*?grid-template-columns:minmax\(0,4fr\) var\(--recreation-fs-side\)!important/);
  assert.doesNotMatch(core,/renderFullscreenSkills/);
  assert.doesNotMatch(nonRealmCss,/game-fullscreen-skills/);
  assert.match(blockCss,/--block-fs-side:clamp\(230px,20vw,330px\)/);
  assert.match(crossnumberCss,/--crossnumber-fs-side:clamp\(230px,20vw,330px\)/);
  assert.doesNotMatch(crossnumber,/crossnumber-fullscreen-skills/);
  assert.doesNotMatch(crossnumberCss,/crossnumber-fullscreen-skills/);
  assert.doesNotMatch(jigsawCss,/--jigsaw-fs-side/);
  assert.match(jigsawCss,/grid-template-areas:"toolbar toolbar" "stage tray"/);
  const xpIndex=html.indexOf('id="weightCoherenceLiveXp"');
  const workspaceIndex=html.indexOf('id="weightCoherenceWorkspace"');
  const boardIndex=html.indexOf('class="weight-coherence-board-shell"');
  const statusIndex=html.indexOf('id="weightCoherenceStatus"');
  assert.ok(xpIndex>=0 && xpIndex<workspaceIndex);
  assert.ok(boardIndex>=0 && statusIndex>boardIndex);
  const colourCss=read('systems/baseline-recreation/games/colour-sort/css/colour-sort.css');
  assert.match(colourCss,/--colour-fs-side:clamp\(230px,20vw,330px\)/);
});
test('reported uncomfortable games use low-fatigue consonant replacement themes',()=>{
  const replacementBpms={pairs:92,detectword:94,make24:96,crossnumber:90,trackcoin:108,ruleshift:106,'block-grid':102,'colour-sort':100};
  for(const [id,bpm] of Object.entries(replacementBpms)){
    assert.match(music,new RegExp("(?:'"+id+"'|"+id+"):\\{bpm:"+bpm));
  }
  assert.match(music,/var MIX_VERSION = 5/);
  assert.match(music,/SOFT_TIMBRE_GAMES = new Set\(\['pairs','detectword','make24','trackcoin','ruleshift','block-grid','colour-sort','jigsaw','crossnumber'\]\)/);
  assert.match(music,/pairs:\{bpm:92[\s\S]*?density:4/);
  assert.match(music,/detectword:\{bpm:94[\s\S]*?density:4/);
  assert.match(music,/make24:\{bpm:96[\s\S]*?density:4/);
  assert.match(music,/crossnumber:\{bpm:90[\s\S]*?density:4/);
  assert.match(music,/osc\.type = 'triangle';[\s\S]*?filter\.frequency\.value = 680/);
  assert.match(music,/filter\.frequency\.value = 2450/);
  assert.doesNotMatch(music,/SENSORY_GENTLE_GAMES|sensoryGentle/);
});
test('reported Recreation interaction repairs remain wired',()=>{
  assert.match(core,/injectMobileGameControls\('make24'\);[\s\S]*?syncDesktopKeypadState\(\)/);
  assert.match(core,/injectMobileGameControls\('detectword'\);[\s\S]*?syncDesktopKeypadState\(\)/);
  assert.match(nonRealmCss,/game-shell-action--keyboard[\s\S]*?place-items:center!important/);
  assert.match(html,/id="ruleShiftHintBtn"/);
  assert.match(core,/function useRuleShiftHint\(\)[\s\S]*?The surviving target is/);
  assert.match(core,/hotkeyGame === 'ruleshift'[\s\S]*?useRuleShiftHint\(\)/);
  assert.match(nonRealmCss,/#ruleshiftPanel \.ruleshift-options-grid\{[\s\S]*?display:flex!important[\s\S]*?justify-content:center!important/);
  assert.match(nonRealmCss,/@media\(max-width:820px\)\{[\s\S]*?#ruleshiftPanel \.ruleshift-options-grid\{[\s\S]*?display:flex!important[\s\S]*?flex-wrap:wrap!important[\s\S]*?justify-content:center!important/);
  assert.match(core,/--pairs-rows-desktop/);
  assert.match(nonRealmCss,/#pairsGameCard:fullscreen #pairsBoard\{[\s\S]*?grid-template-rows:repeat\(var\(--pairs-rows-desktop,3\)/);
  assert.match(crossnumber,/function resetCrossNumberFit\(\)/);
  assert.match(crossnumber,/rawMaxR>Math\.max\(1,rawMaxC\)\*1\.35/);
  assert.match(crossnumberCss,/Cross Number coherence repair/);
});

test('extension-game routes clear stale core selection without surrendering extension panel ownership',()=>{
  assert.match(extensionSupport,/document\.dispatchEvent\(new CustomEvent\('baseline:game-extension-open'/);
  assert.match(extensionSupport,/detail:\{ id:config\.id, panelId:config\.panelId \}/);
  assert.match(core,/document\.addEventListener\('baseline:game-extension-open'[\s\S]*?selectedGame='';[\s\S]*?renderGamesList\(\)/);
  assert.match(blockGrid,/game-extension-support\.mjs\?v=RECREATION_COHERENCE_20261023_2/);
  assert.match(colourSort,/game-extension-support\.mjs\?v=RECREATION_COHERENCE_20261023_2/);
});

test('Block Grid lands from the exact grabbed piece cell and exposes charged specials',()=>{
  assert.match(blockGrid,/grabRow=Math\.floor\(cellIndex\/Math\.max\(1,bounds\.cols\)\)/);
  assert.match(blockGrid,/grabCol=cellIndex%Math\.max\(1,bounds\.cols\)/);
  assert.match(blockGrid,/const heldX = \(grabCol \* pitchX\) \+ \(firstRect\.width \* offsetX\)/);
  assert.match(blockGrid,/const heldY = \(grabRow \* pitchY\) \+ \(firstRect\.height \* offsetY\)/);
  assert.match(blockGrid,/const pieceLeft = clientX - heldX/);
  assert.match(blockGrid,/const pieceTop = clientY - heldY/);
  assert.match(blockGrid,/const grabbedX=\(grabCol\*\(cellSize\+gap\)\)\+\(cellSize\*grabOffsetX\)/);
  assert.match(blockGrid,/ghost\.style\.left=\(clientX-grabbedX\)\+'px'/);
  assert.match(blockGrid,/ghost\.style\.top=\(clientY-grabbedY\)\+'px'/);
  assert.match(blockGrid,/const col = Math\.round\(\(pieceLeft - firstRect\.left\) \/ pitchX\)/);
  assert.match(blockGrid,/const row = Math\.round\(\(pieceTop - firstRect\.top\) \/ pitchY\)/);
  assert.match(blockGrid,/if \(suppressClick\) \{ suppressClick = false; event\.preventDefault\(\); return; \}[\s\S]*?const action = target\.closest\('\[data-block-action\]'\)/);
  assert.match(blockGrid,/skillCharge/);
  assert.match(blockGrid,/data-block-action="blast"[\s\S]*?💣/);
  assert.match(blockGrid,/data-block-action="rows"[\s\S]*?🚜/);
  assert.match(blockGrid,/Clear 4 × 4/);
  assert.match(blockGrid,/Clear 2 Rows/);
  assert.match(blockCss,/block-grid-score-window[\s\S]*?grid-column:1!important/);
  assert.match(blockGrid,/active\.gameOver = !hasAnyPlacement\(active\.board, active\.tray\)/);
  assert.match(blockGrid,/class="block-grid-play-cluster"/);
  assert.match(blockGrid,/addEventListener\('dragstart'[\s\S]*?preventDefault/);
  assert.match(blockCss,/cursor:none!important;user-select:none!important/);
  assert.match(blockCss,/\.block-grid-drag-ghost,[\s\S]*?transform:none!important/);
  assert.match(blockCss,/\.block-grid-drag-ghost \.block-grid-piece-cell\{[\s\S]*?width:var\(--drag-cell,18px\)!important[\s\S]*?height:var\(--drag-cell,18px\)!important/);
  assert.doesNotMatch(blockCss,/\.block-grid-drag-ghost(?:\.is-over-board)?\{[^}]*scale\(/);
  assert.match(blockCss,/--block-fs-side:clamp\(230px,20vw,330px\)[\s\S]*?grid-template-columns:minmax\(0,4fr\) var\(--block-fs-side\)!important/);
  assert.match(blockGrid,/<strong>Special<\/strong>/);
  assert.doesNotMatch(blockGrid,/Special Skill/);
  assert.match(blockGrid,/const cleanStreakBonus = Math\.min\(100, streak \* 5\)/);
  assert.match(blockGrid,/Winning Streak[\s\S]*?Clean Streak Bonus/);
  assert.doesNotMatch(blockGrid,/Combo Scoring/);
  assert.match(blockGrid,/const fullscreenHost=document\.fullscreenElement;[\s\S]*?host\.appendChild\(ghost\)/);
  assert.match(blockCss,/\.block-grid-tray\{[\s\S]*?grid-template-columns:repeat\(3,minmax\(0,1fr\)\)!important/);
  assert.match(blockCss,/--block-piece-mini-cell:clamp\(12px,2\.05vw,18px\)/);
  assert.match(blockGrid,/sourceCellSize[\s\S]*?createDragGhost\(pieceId\)[\s\S]*?positionDragGhost\(ghost,event\.clientX,event\.clientY,null,dragState\)/);
  assert.match(blockGrid,/blend=anchor \? 1 : Math\.max\(0,Math\.min\(1,1-\(distance\/120\)\)\)/);
  assert.match(blockGrid,/createSpecialDragGhost\(type\)[\s\S]*?paintSpecialPreview/);
  assert.match(blockGrid,/specialMode\s*===\s*['"]rows['"][\s\S]*?clearSpecialRows\(coords\.row\)/);
  assert.match(blockCss,/\.block-grid-cell\.is-special-preview/);
  assert.match(blockCss,/\.block-grid-special-drag-ghost/);
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
  assert.match(colourSort,/const fullscreenHost = document\.fullscreenElement;[\s\S]*?fullscreenHost\.contains\(source\)[\s\S]*?host\.appendChild\(layer\)/);
  assert.match(colourSort,/if\(key==='f'\)\{ event\.preventDefault\(\); toggleFullscreen\(\); return; \}/);
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
  assert.match(crossnumber,/const available=Math\.max\(220,Math\.min\(680,viewportHeight-playTop-footerHeight-28\)\)/);
  assert.match(crossnumber,/panel\.style\.setProperty\('--crossnumber-play-height'/);
  assert.match(crossnumberCss,/Cross Number one-screen reachability authority/);
  assert.equal((crossnumberCss.match(/Cross Number one-screen reachability authority/g)||[]).length,1);
  assert.match(crossnumberCss,/#crossnumberGamePanel:fullscreen\{[\s\S]*?height:100dvh!important[\s\S]*?overflow:hidden!important/);
  assert.match(crossnumberCss,/--crossnumber-fs-side:clamp\(230px,20vw,330px\)[\s\S]*?grid-template-columns:minmax\(0,4fr\) var\(--crossnumber-fs-side\)!important/);
  assert.match(crossnumberCss,/#crossnumberGamePanel:fullscreen > \.crossnumber-round-status\{[\s\S]*?display:block!important/);
  assert.match(crossnumberCss,/#crossnumberGamePanel:fullscreen > \.crossnumber-round-status\{[\s\S]*?grid-column:2!important/);
  assert.match(crossnumber,/id:'masterwork'[\s\S]*?nodes:17[\s\S]*?fixed:1/);
  assert.match(crossnumberCss,/#crossnumberGamePanel:fullscreen \.crossnumber-bank\{[\s\S]*?grid-template-columns:repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(crossnumber,/const mobile=window\.matchMedia\?\.\('\(max-width:820px\)'\)\.matches[\s\S]*?if\(mobile\)[\s\S]*?removeProperty\('width'\)/);
  assert.match(crossnumberCss,/mobile Cross Number playability authority[\s\S]*?#crossnumberGamePanel:fullscreen \.crossnumber-play-layout\{[\s\S]*?grid-template-columns:minmax\(0,1fr\)!important/);
  assert.match(crossnumberCss,/grid-template-columns:repeat\(var\(--crossnumber-cols,13\),34px\)!important/);
  assert.doesNotMatch(crossnumber,/setCross NumberPanel|BaselineCross Number|baselineCross Number/);
  assert.match(html,/data-crossnumber-action="restart"[^>]*data-tooltip="Restart · Alt\+R"[^>]*><span aria-hidden="true">R<\/span>/);
  assert.match(html,/data-crossnumber-action="fullscreen"[^>]*data-tooltip="Full screen · Alt\+F"[^>]*aria-label="Full screen"/);
  assert.doesNotMatch(html,/data-crossnumber-action="fullscreen"[^>]*>Full Screen<\/button>/);
  assert.match(html,/data-crossnumber-action="new"[^>]*data-tooltip="New Game · Alt\+N"[^>]*><span aria-hidden="true">＋<\/span>/);
  assert.match(crossnumber,/if\(key==='n'\)[\s\S]*?createNewRound\(\{tierId:profile\.selectedTier\}\)/);
  assert.match(crossnumber,/if\(key==='f'\)[\s\S]*?toggleFullscreen\(\)/);
  assert.match(html,/<h2>Cross Number<\/h2>/);
  assert.match(html,/data-crossnumber-level>Player Rank 1<\/div>/);
});

test('Jigsaw uses server-saved 200 percent minimum zoom, coherent music controls, and stable restart rendering',()=>{
  assert.match(jigsaw,/const PIECE_ZOOM_DEFAULT = 2/);
  assert.match(jigsaw,/jigsawZoom:zoomLevel/);
  assert.match(jigsaw,/saveProfile\?\.\('hubsettings',profile,\{immediate:true,keepalive:false\}\)/);
  assert.match(html,/weightCoherenceZoomValue">200%<\/span>/);
  assert.match(html,/weight-coherence-settings-section[\s\S]*?<strong>Music<\/strong>[\s\S]*?data-games-music-toggle[\s\S]*?data-games-music-volume/);
  assert.match(music,/#weightCoherenceWorkspace \.weight-coherence-actions/);
  assert.match(jigsaw,/root\.classList\.add\('is-restarting'\)/);
  assert.match(jigsawCss,/#weightCoherencePuzzle\.is-restarting \.weight-coherence-piece\{[\s\S]*?visibility:hidden!important[\s\S]*?animation:none!important/);
  assert.match(html,/id="weightCoherenceFullscreenBtn"[^>]*aria-keyshortcuts="Alt\+F"/);
  assert.match(html,/id="weightCoherenceToolbarSettingsBtn"[^>]*aria-keyshortcuts="Alt\+S"/);
  assert.match(jigsawCss,/\.weight-coherence-hotkey\{[\s\S]*?clip-path:inset\(50%\)!important/);
  assert.doesNotMatch(jigsawCss,/--jigsaw-fs-side/);
  assert.match(jigsawCss,/grid-template-areas:"toolbar toolbar" "stage tray"/);
  assert.ok(html.indexOf('id="weightCoherenceLiveXp"') < html.indexOf('id="weightCoherenceWorkspace"'));
  assert.ok(html.indexOf('id="weightCoherenceStatus"') > html.indexOf('class="weight-coherence-board-shell"'));
  assert.match(jigsaw,/setAttribute\('data-tooltip',tooltip\.replace/);
  assert.match(html,/data-jigsaw-panel="game"[^>]*>Puzzle<\/button>/);
  assert.doesNotMatch(html,/data-jigsaw-panel="game"[^>]*>Game<\/button>/);
  assert.match(jigsawCss,/mobile Jigsaw playability repair/);
  assert.match(jigsawCss,/is-mobile-fullscreen-portrait[\s\S]*?grid-template-areas:"toolbar" "stage" "tray"!important/);
  assert.match(jigsawCss,/is-mobile-fullscreen-portrait \.weight-coherence-rotate-notice\{[\s\S]*?display:none!important/);
  assert.match(jigsaw,/if\(refs\.rotateNotice\) refs\.rotateNotice\.hidden=true/);
});

test('common Recreation actions use compact icons with hover/focus hotkey tooltips',()=>{
  assert.match(core,/function setHotkeyCaption\(button, hotkey\)/);
  assert.match(core,/button\.removeAttribute\('data-hotkey-caption'\)/);
  assert.match(core,/button\.setAttribute\('data-tooltip',tooltip\)/);
  assert.match(core,/function startButtonLabel\(_gameId\)\{ return 'New Game'; \}/);
  assert.match(core,/function keyboardIconMarkup\(open\)/);
  assert.match(core,/function fullscreenIconMarkup\(label\)/);
  assert.match(core,/SITEWIDE_FULLSCREEN_HOTKEY_LABEL = 'Alt\+F'/);
  assert.match(core,/setHotkeyCaption\(btn,SITEWIDE_KEYBOARD_HOTKEY_LABEL\)/);
  assert.match(core,/setHotkeyCaption\(btn,SITEWIDE_FULLSCREEN_HOTKEY_LABEL\)/);
  assert.match(nonRealmCss,/\[data-tooltip\]:is\(:hover,:focus-visible\)::after\{[\s\S]*?content:attr\(data-tooltip\)/);
  assert.match(nonRealmCss,/\[data-hotkey-caption\]::after\{[\s\S]*?content:none!important/);
  assert.match(nonRealmCss,/\.sr-only\{[\s\S]*?clip-path:inset\(50%\)!important/);
  assert.match(nonRealmCss,/\.games-music-quick-toggle\{[\s\S]*?margin-left:auto!important/);
  assert.match(nonRealmCss,/\.games-settings-trigger\{[\s\S]*?margin-left:0!important/);
  assert.match(nonRealmCss,/\.game-shell-action__svg\{/);
  assert.doesNotMatch(core,/label \+ ' \[' \+ SITEWIDE_START_HOTKEY_LABEL/);
});

test('Recreation tab rows leave room for selected outlines instead of clipping them',()=>{
  assert.match(nonRealmCss,/\.game-toggle-row[\s\S]*?overflow:visible!important/);
  assert.match(nonRealmCss,/Recreation tab-outline clipping authority[\s\S]*?:is\(\.tabs,\.game-toggle-row,\.trackcoin-tab-row,\.crossnumber-tab-row,\.weight-coherence-tab-row\)/);
});

test('mobile fullscreen cards stay in normal flow instead of overlapping the play surface',()=>{
  const colourCss=read('systems/baseline-recreation/games/colour-sort/css/colour-sort.css');
  assert.match(nonRealmCss,/mobile playability authority[\s\S]*?\.round-status-card[\s\S]*?max-width:100%!important/);
  assert.match(nonRealmCss,/\.game-common-actions\{[\s\S]*?grid-template-columns:repeat\(4,42px\)!important/);
  assert.match(colourCss,/mobile fullscreen flow[\s\S]*?#colourSortGameCard:fullscreen\{[\s\S]*?display:flex!important[\s\S]*?flex-direction:column!important/);
});

test('canonical and legacy recreation routes preserve direct game destinations on refresh',()=>{
  assert.match(htaccess,/baseline-games-hub\/games-hub\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(htaccess,/baseline-recreation\/games\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(core,/function recreationStateFromCleanPath\(\)/);
  assert.match(core,/base \+ '\/games\/'/);
  assert.match(core,/normaliseGameId\(rest\.split\('\/'\)\[0\]\)/);
});
