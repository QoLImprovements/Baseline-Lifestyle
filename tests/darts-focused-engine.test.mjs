import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  GAME_IDS,
  accuracyFor,
  anticlockwiseNeighbour,
  calibrationScore,
  clockwiseNeighbour,
  createDefaultDartsProfile,
  findCheckoutRoutes,
  normaliseDartsProfile,
  oppositeSegment,
  recordResult,
  sameSet,
  scoreTarget,
  validateRoute,
  validateRouteText
} from '../systems/baseline-games-hub/games/darts-focused/js/darts-focused-engine.mjs';
import { GAMES } from '../systems/baseline-games-hub/games/darts-focused/js/darts-focused-content.js';

const uiSource = fs.readFileSync('systems/baseline-games-hub/games/darts-focused/js/darts-focused.js', 'utf8');
const contentSource = fs.readFileSync('systems/baseline-games-hub/games/darts-focused/js/darts-focused-content.js', 'utf8');
const uiMarkupSource = fs.readFileSync('systems/baseline-games-hub/games/darts-focused/js/darts-focused-ui.js', 'utf8');
const storageSource = fs.readFileSync('systems/baseline-games-hub/games/darts-focused/js/darts-focused-storage.js', 'utf8');
const loaderSource = fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-v14.js', 'utf8');
const boardSource = fs.readFileSync('systems/baseline-games-hub/games/darts-focused/art/realistic-dartboard.svg', 'utf8');
const coreSource = fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-core.js', 'utf8');
const entrySource = fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub.js', 'utf8');

test('Darts Focused keeps one Hub entry with ten distinct website games', () => {
  assert.equal(GAME_IDS.length, 10);
  assert.deepEqual(GAMES.map((game) => game.id), GAME_IDS);
  for (const id of GAME_IDS) assert.match(contentSource, new RegExp(`id:'${id}'`));
  assert.match(coreSource, /id:'darts-focused', group:'Testing'/);
  assert.match(coreSource, /10 distinct games played entirely on the website/);
  assert.match(uiMarkupSource, /Darts Focused/);
  assert.doesNotMatch(uiSource, /throw three physical darts|physically throw at each|record the actual landing/i);
});

test('core-owned overview and Darts panel use the realistic dartboard artwork', () => {
  assert.match(coreSource, /games\/darts-focused\/art\/realistic-dartboard\.svg/);
  assert.match(uiMarkupSource, /realistic-dartboard\.svg/);
  assert.doesNotMatch(loaderSource, /realistic-dartboard\.svg|10 distinct website games/);
  assert.match(boardSource, /traditional numbered dartboard/i);
  for (const number of [20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]) {
    assert.match(boardSource, new RegExp(`>${number}<\\/text>`));
  }
});

test('Darts Focused is registered in the authoritative Hub list and reuses information controls', () => {
  assert.match(coreSource, /id:'darts-focused', group:'Testing'/);
  assert.match(coreSource, /data-open-darts-focused/);
  assert.match(entrySource, /games\/darts-focused\/js\/darts-focused\.js/);
  assert.match(uiMarkupSource, /data-bl-info-button/);
  assert.match(uiMarkupSource, /game-howto-toggle/);
  assert.match(loaderSource, /DartsFocusedLoader/);
  assert.match(storageSource, /__bl_darts_focused_v2__/);
});

test('board relationships follow the physical dartboard number order', () => {
  assert.equal(clockwiseNeighbour(20), 1);
  assert.equal(anticlockwiseNeighbour(20), 5);
  assert.equal(oppositeSegment(20), 3);
});

test('target scoring and checkout validation enforce double-out', () => {
  assert.equal(scoreTarget('T20'), 60);
  assert.equal(scoreTarget('D16'), 32);
  assert.equal(scoreTarget('BULL'), 50);
  assert.equal(validateRoute(100, ['T20','D20']).valid, true);
  assert.equal(validateRoute(100, ['D20','T20']).valid, false);
  assert.equal(validateRoute(100, ['T20','S20','S20']).valid, false);
});

test('checkout search produces legal alternatives within dart limit', () => {
  const routes = findCheckoutRoutes(100, 2);
  assert.ok(routes.length > 0);
  assert.ok(routes.every((route) => route.length <= 2));
  assert.ok(routes.some((route) => route.join('-') === 'T20-D20'));
  assert.ok(routes.every((route) => validateRoute(100, route).valid));
});

test('profile stores independent game accuracy and decision-training confidence calibration', () => {
  let profile = createDefaultDartsProfile();
  profile = recordResult(profile, 'checkout-pressure', { correct:true, responseMs:1800 });
  profile = recordResult(profile, 'checkout-pressure', { correct:false, responseMs:2200 });
  profile = recordResult(profile, 'decision-training', { correct:true, responseMs:900, confidence:80, category:'confidence-calibration' });
  assert.equal(profile.totalRounds, 3);
  assert.equal(accuracyFor(profile.stats['checkout-pressure']), 50);
  assert.equal(calibrationScore(profile.stats['decision-training']), 80);
  assert.deepEqual(profile.custom.decisionCategoryProgress['confidence-calibration'], { attempts:1, correct:1 });
});

test('profile normalisation repairs malformed values and migrates legacy question-game records', () => {
  const profile = normaliseDartsProfile({
    selectedGame:'confidence-calibration',
    totalRounds:-20,
    stats:{
      'target-lock':{attempts:3,correct:2,currentStreak:-4},
      'confidence-calibration':{attempts:2,correct:1,confidenceTotal:150,confidenceCount:2,calibrationErrorTotal:50}
    },
    custom:{pressureLevel:99,selectedTiers:{'target-lock':99}}
  });
  assert.equal(profile.version, 3);
  assert.equal(profile.selectedGame, 'decision-training');
  assert.equal(profile.totalRounds, 0);
  assert.equal(Object.keys(profile.stats).length, 10);
  assert.equal(profile.stats['target-lock'].attempts, 3);
  assert.equal(profile.stats['target-lock'].currentStreak, 0);
  assert.equal(profile.stats['decision-training'].attempts, 2);
  assert.equal(profile.custom.pressureLevel, 5);
  assert.equal(profile.custom.selectedTiers['target-lock'], 3);
});

test('relevant-information answers compare sets rather than checkbox order', () => {
  assert.equal(sameSet(['score','darts'],['darts','score']), true);
  assert.equal(sameSet(['score','crowd'],['score','darts']), false);
});


test('checkout text validation accepts legal alternative routes and enforces dart count',()=>{
  assert.equal(validateRouteText(100,'T20 → D20',2).valid,true);
  assert.equal(validateRouteText(100,'T16 → D26',2).valid,false);
  assert.equal(validateRouteText(81,'T15 → D18',2).valid,true);
  assert.equal(validateRouteText(100,'T20 → S20 → D10',2).valid,false);
  assert.equal(validateRouteText(50,'BULL',1).valid,true);
  assert.equal(validateRouteText(100,'T20 → NOT-A-TARGET → D20',3).valid,false);
});
