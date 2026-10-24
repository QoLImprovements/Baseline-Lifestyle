import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const corePath = new URL('../systems/baseline-recreation/js/baseline-recreation-core.js', import.meta.url);
const core = fs.readFileSync(corePath, 'utf8');
const pairsEngine = fs.readFileSync(new URL('../systems/baseline-recreation/js/pairs-engine.js', import.meta.url), 'utf8');

function functionBody(name, nextName) {
  const start = core.indexOf('function ' + name + '(');
  assert.notEqual(start, -1, name + ' must exist');
  const end = nextName ? core.indexOf('function ' + nextName + '(', start + 1) : core.length;
  assert.notEqual(end, -1, nextName + ' must exist after ' + name);
  return core.slice(start, end);
}

test('Pairs delayed callbacks are bound to the board that created them', () => {
  const start = functionBody('startPairsBoard', 'pairsMismatchDelay');
  const mismatch = functionBody('handlePairsMismatch', 'handlePairsCardFlip');
  const hint = functionBody('usePairsHint', 'spendPairsSkill');

  assert.match(core, /let pairsRoundToken = 0;/);
  assert.match(start, /const roundToken = \+\+pairsRoundToken;/);
  assert.match(start, /roundToken:roundToken/);
  assert.match(mismatch, /const roundToken = pairsBoardState && pairsBoardState\.roundToken;/);
  assert.match(mismatch, /pairsBoardState\.roundToken !== roundToken/);
  assert.match(hint, /const roundToken = pairsBoardState\.roundToken;/);
  assert.match(hint, /pairsBoardState\.roundToken !== roundToken/);
});

test('Track the Coin continuous animation cannot cross round boundaries', () => {
  const start = functionBody('startTrackCoinRound', 'runTrackCoinShuffle');
  const run = functionBody('runTrackCoinShuffle', 'grantTrackCoinRewards');

  assert.match(core, /let trackCoinRoundToken = 0;/);
  assert.match(start, /const roundToken = \+\+trackCoinRoundToken;/);
  assert.match(start, /trackCoinState\.roundToken = roundToken;/);
  assert.match(start, /trackCoinState\.roundToken !== roundToken/);
  assert.match(run, /trackCoinState\.roundToken !== roundToken/);
  assert.match(run, /trackCoinState\.phase!=='hide'/);
  assert.match(run, /trackCoinAnimationFrame=window\.requestAnimationFrame\(frame\)/);
  assert.doesNotMatch(core, /function applyTrackCoinMotionStep\(/);
});

test('Rule Shift preserves the remaining answer window while the document is hidden', () => {
  const remaining = functionBody('ruleShiftRemainingMs', 'pauseRuleShiftTimer');
  const pause = functionBody('pauseRuleShiftTimer', 'resumeRuleShiftTimer');
  const resume = functionBody('resumeRuleShiftTimer', 'syncRuleShiftVisibility');
  const visibility = functionBody('syncRuleShiftVisibility', 'ruleShiftTimerText');

  assert.match(remaining, /pausedRemainingMs/);
  assert.match(pause, /ruleShiftState\.pausedRemainingMs = ruleShiftRemainingMs\(\)/);
  assert.match(pause, /clearRuleShiftTimer\(\)/);
  assert.match(resume, /ruleShiftState\.deadlineAt = Date\.now\(\) \+ remaining/);
  assert.match(resume, /startRuleShiftTimer\(\)/);
  assert.match(visibility, /document\.visibilityState === 'hidden'/);
  assert.match(core, /document\.addEventListener\('visibilitychange', syncRuleShiftVisibility\)/);
});


test('Track the Coin replay records and reuses the original cup permutation without granting rewards', () => {
  const run = functionBody('runTrackCoinShuffle', 'grantTrackCoinRewards');
  const replay = functionBody('replayTrackCoinShuffle', 'renderTrackCoinTierList');

  assert.match(run, /Array\.isArray\(step\.order\)/);
  assert.match(run, /step\.order=order\.slice\(\)/);
  assert.match(replay, /trackCoinState\.cups\.sort/);
  assert.match(replay, /runTrackCoinShuffle\(0, roundToken,/);
  assert.doesNotMatch(replay, /grantTrackCoinRewards\(/);
  assert.doesNotMatch(replay, /profile\.totalRounds/);
  assert.match(replay, /No reward was awarded/);
});


test('Pairs treats any mismatch as a break in clean-board status', () => {
  const deck = functionBody('buildPairsDeck', 'startPairsBoard');
  const flip = functionBody('handlePairsCardFlip', 'usePairsHint');
  const mismatch = functionBody('handlePairsMismatch', 'handlePairsCardFlip');

  assert.match(deck, /PAIRS_ENGINE\.buildDeck/);
  assert.match(pairsEngine, /selections:0/);
  assert.match(flip, /card\.wasKnown = Number\(card\.selections \|\| 0\) >= 1/);
  assert.match(flip, /card\.selections = Number\(card\.selections \|\| 0\) \+ 1/);
  assert.doesNotMatch(flip, /faceSeen/);

  assert.match(mismatch, /const cleanBreak = selectedCards\.some\(card => card\.wasKnown\)/);
  assert.match(mismatch, /const penaltyEligible = selectedCards\.every\(card => card\.wasKnown\)/);
  assert.match(mismatch, /pairsBoardState\.hadFailure = true/);
  assert.match(mismatch, /profiles\.pairs\.cleanWinStreak = 0/);
  assert.match(mismatch, /Mismatch\. Continue the board; this round is no longer clean\./);
  assert.match(mismatch, /Both cards were first selections, so clean status is preserved/);
});


test('Detect The Word and Make The Number preserve unfinished input across rerenders', () => {
  const wordStart = functionBody('startWordRound', 'submitWordGuess');
  const wordRender = functionBody('renderWordBoard', 'renderDetectWordSummary');
  const wordSubmit = functionBody('submitWordGuess', 'spendWordSkill');
  const makeStart = functionBody('startMake24Puzzle', 'submitMake24Expression');
  const makeSubmit = functionBody('submitMake24Expression', 'useMake24Hint');
  const makeRender = functionBody('renderMake24Board', 'renderMake24Summary');

  assert.match(wordStart, /draftGuess:''/);
  assert.match(wordRender, /value="' \+ escapeHtml\(wordState\.draftGuess \|\| ''\)/);
  assert.match(wordSubmit, /wordState\.draftGuess = String\(input\.value \|\| ''\)/);
  assert.match(wordSubmit, /wordState\.draftGuess = ''/);

  assert.match(makeStart, /draftExpression:''/);
  assert.match(makeRender, /value="' \+ escapeHtml\(make24State\.draftExpression\s*\|\|\s*''\)/);
  assert.match(makeSubmit, /make24State\.draftExpression = String\(input\.value \|\| ''\)/);
  assert.match(core, /target\.id === 'make24ExpressionInput' && make24State/);
  assert.match(core, /target\.id === 'wordGuessInput' && wordState/);
});


test('Rule Shift failure feedback identifies which rule dimensions matched', () => {
  const feedback = functionBody('ruleShiftMismatchFeedback', 'ruleShiftTimeLimitMs');
  const choose = functionBody('chooseRuleShiftOption', 'spendRuleShiftSkill');

  assert.match(feedback,/Colour ' \+ \(colourMatch \? 'matched' : 'did not match'\)/);
  assert.match(feedback,/shape ' \+ \(shapeMatch \? 'matched' : 'did not match'\)/);
  assert.match(feedback,/size ' \+ \(sizeMatch \? 'matched' : 'did not match'\)/);
  assert.match(choose,/const mismatchFeedback = ruleShiftMismatchFeedback/);
  assert.match(choose,/Incorrect choice\. ' \+ mismatchFeedback/);
});
