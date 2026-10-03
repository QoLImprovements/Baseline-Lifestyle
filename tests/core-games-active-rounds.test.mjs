import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const core=fs.readFileSync(new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js',import.meta.url),'utf8');

test('core games use a dedicated active-round store separate from profile persistence',()=>{
  assert.match(core,/CORE_ACTIVE_ROUNDS_STORAGE_KEY = '__bl_games_active_rounds_v1__'/);
  assert.match(core,/function persistWordRound\(\)/);
  assert.match(core,/function persistMake24Round\(\)/);
  assert.match(core,/function restoreCoreActiveRounds\(\)/);
  assert.match(core,/seedProfilesForImmediateRender\(\);\s*restoreCoreActiveRounds\(\)/);
  assert.match(core,/await Promise\.allSettled\(GAME_APPS\.map\(loadProfile\)\);\s*restoreCoreActiveRounds\(\)/);
});

test('Detect The Word active round is persisted during drafts and cleared at terminal states',()=>{
  assert.match(core,/wordState\.draftGuess = String\(target\.value \|\| ''\); persistWordRound\(\)/);
  assert.match(core,/clearCoreActiveRound\('detectword'\)/);
  assert.match(core,/guesses:wordState\.guesses\.map/);
  assert.match(core,/evaluation:evaluateWordGuess\(guess, secret\)/);
});

test('Make The Number active puzzle persists draft, hint, reroll and generation state',()=>{
  assert.match(core,/draftExpression:make24State\.draftExpression \|\| ''/);
  assert.match(core,/generationIndex:make24State\.generationIndex \|\| 0/);
  assert.match(core,/persistMake24Round\(\);\s*renderMake24Board\(\)/);
  assert.match(core,/clearCoreActiveRound\('make24'\)/);
});

test('Make The Number generated banks and puzzle ordering use seeded randomness only',()=>{
  const start=core.indexOf('function makeNumberSeedFromText');
  const end=core.indexOf('function startMake24Puzzle',start);
  assert.notEqual(start,-1);
  assert.notEqual(end,-1);
  const generation=core.slice(start,end);
  assert.match(generation,/function makeNumberSeededRandom/);
  assert.match(generation,/makeNumberSeededRandom\(makeNumberSeedFromText\('make-number-bank:'/);
  assert.match(generation,/makeNumberSeededShuffle\(buildMakeNumberPuzzleBank\(tier\), seed\)/);
  assert.doesNotMatch(generation,/Math\.random\(/);
});

test('tier changes invalidate incompatible saved active rounds',()=>{
  assert.match(core,/profiles\.detectword\.selectedTier = tier\.id; wordState = null; clearCoreActiveRound\('detectword'\)/);
  assert.match(core,/profiles\.make24\.selectedTier = tier\.id; make24State = null; clearCoreActiveRound\('make24'\)/);
});
