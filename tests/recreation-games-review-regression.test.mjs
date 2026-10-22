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

test('Detect the Word and Make The Number have direct submit and fresher active-round persistence safeguards',()=>{
  assert.match(core,/explicitWordSubmit[\s\S]*?submitWordGuess/);
  assert.match(core,/explicitMakeSubmit[\s\S]*?submitMake24Expression/);
  assert.match(core,/Object\.prototype\.hasOwnProperty\.call\(temporary,'activeRound'\)/);
  assert.match(core,/profiles\[app\]\.activeRound=temporary\.activeRound/);
});

test('Rule Shift is visual rather than caption matching and migrates Pill to Oval',()=>{
  assert.match(config,/\{ id:'oval', name:'Oval' \}/);
  assert.doesNotMatch(config,/\{ id:'pill', name:'Pill' \}/);
  assert.doesNotMatch(core,/ruleshift-token-caption" aria-hidden/);
  assert.match(core,/if\(rule && rule\.shape==='pill'\) rule\.shape='oval'/);
  assert.match(nonRealmCss,/ruleshift-colour--blue \.ruleshift-shape\{background:#3877ff/);
  assert.match(nonRealmCss,/ruleshift-colour--teal \.ruleshift-shape\{background:#00c7a5/);
});

test('Track the Coin uses continuous segment motion and opaque polished cups',()=>{
  assert.match(core,/const eased = raw;/);
  assert.doesNotMatch(core,/const eased = raw < 0\.5 \? 16 \* Math\.pow\(raw, 5\)/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-cup\{[\s\S]*?opacity:1!important/);
  assert.match(nonRealmCss,/#trackcoinPanel \.trackcoin-cup\.is-lifted/);
});

test('reported uncomfortable games use the sensory-gentle music replacement set',()=>{
  for(const id of ['pairs','detectword','make24','trackcoin','ruleshift','crossnumber']){
    assert.match(music,new RegExp("SENSORY_GENTLE_GAMES[\\s\\S]*?'"+id+"'"));
  }
  assert.match(music,/if\(sensoryGentle\) return;/);
  assert.match(music,/sensoryGentle \? 0 :/);
});

test('Block Grid keeps the held piece under the pointer and exposes charged specials',()=>{
  assert.match(blockGrid,/ghost\.style\.left = clientX \+ 'px'/);
  assert.match(blockGrid,/ghost\.style\.top = clientY \+ 'px'/);
  assert.match(blockGrid,/skillCharge/);
  assert.match(blockGrid,/Clear 4 × 4/);
  assert.match(blockGrid,/Clear 2 Rows/);
  assert.match(blockGrid,/addEventListener\('dragstart'[\s\S]*?preventDefault/);
  assert.match(blockCss,/cursor:none!important;user-select:none!important/);
});

test('Colour Sort has long-form tier progression and hints never fall back to an arbitrary legal move',()=>{
  assert.equal(LEVELS.length,60);
  assert.match(colourSort,/Starter[\s\S]*?Flow[\s\S]*?Strategy[\s\S]*?Advanced[\s\S]*?Expert/);
  const solved=[[0,0,0,0],[1,1,1,1],[],[]];
  assert.equal(hintMove(solved),null);
});

test('Cross Numbers avoids recent equation signatures and keeps restart in the game controls',()=>{
  assert.match(crossnumber,/recentLayouts/);
  assert.match(crossnumber,/chooseDiverseLayout/);
  assert.match(crossnumber,/signatureOverlap/);
  assert.match(crossnumber,/function restartRound\(/);
  assert.match(html,/data-crossnumber-action="restart">Restart</);
});

test('canonical and legacy recreation routes preserve direct game destinations on refresh',()=>{
  assert.match(htaccess,/baseline-games-hub\/games-hub\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(htaccess,/baseline-recreation\/games\/\(pairs\|detect-the-word\|make-the-number\|track-the-coin\|rule-shift\|block-grid\|colour-sort/);
  assert.match(core,/function recreationStateFromCleanPath\(\)/);
  assert.match(core,/path\.indexOf\(base \+ '\/games\/'\) !== 0/);
});
