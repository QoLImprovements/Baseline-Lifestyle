import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const core = fs.readFileSync(new URL('../systems/baseline-recreation/js/baseline-recreation-core.js', import.meta.url),'utf8');

function extractFunction(name,nextName){
  const start=core.indexOf('function '+name+'(');
  assert.notEqual(start,-1,name+' must exist');
  const end=nextName?core.indexOf('function '+nextName+'(',start+1):core.length;
  assert.notEqual(end,-1,nextName+' must follow '+name);
  return core.slice(start,end).trim();
}

test('Detect The Word handles duplicate letters without over-crediting repeats',()=>{
  const source=extractFunction('evaluateWordGuess','computeWordRewardMultiplier');
  const evaluateWordGuess=Function(source+'; return evaluateWordGuess;')();

  assert.deepEqual(
    evaluateWordGuess('allee','apple').map(x=>x.state),
    ['correct','present','absent','present','correct']
  );

  assert.deepEqual(
    evaluateWordGuess('eerie','serve').map(x=>x.state),
    ['present','correct','absent','absent','correct']
  );
});

test('Make The Number compares operand multisets including duplicate values',()=>{
  const source=extractFunction('countNumbers','submitMake24Expression');
  const sameNumberMultiset=Function(source+'; return sameNumberMultiset;')();

  assert.equal(sameNumberMultiset([2,2,3,7],[7,2,3,2]),true);
  assert.equal(sameNumberMultiset([2,2,3,7],[2,3,3,7]),false);
  assert.equal(sameNumberMultiset([1,3,4,6],[13,4,6]),false);
});

test('Make The Number accepts only whole shown numbers in expressions',()=>{
  const submit=extractFunction('submitMake24Expression','useMake24Hint');
  assert.match(submit,/\^\[\\d\\s\(\)\+\\-\*\/\]\+\$/);
  assert.doesNotMatch(submit,/\*\/\.\]\+\$/);
  assert.match(submit,/Only whole shown numbers, brackets, and \+ - × ÷ are allowed\./);
});


test('Detect The Word keypad knowledge promotes the strongest known state per letter',()=>{
  const knowledgeSource=extractFunction('wordLetterKnowledge','syncWordKeypadKnowledge');
  const evaluateSource=extractFunction('evaluateWordGuess','computeWordRewardMultiplier');
  const factory=Function('wordState',evaluateSource+';'+knowledgeSource+'; return {evaluateWordGuess,wordLetterKnowledge};');
  const firstFactory=factory({guesses:[]});
  const guessA={word:'allee',evaluation:firstFactory.evaluateWordGuess('allee','apple')};
  const guessB={word:'amply',evaluation:firstFactory.evaluateWordGuess('amply','apple')};
  const api=factory({guesses:[guessA,guessB]});
  const knowledge=api.wordLetterKnowledge();

  assert.equal(knowledge.a,'correct');
  assert.equal(knowledge.l,'present');
  assert.equal(knowledge.e,'correct');
  assert.equal(knowledge.m,'absent');
});

test('Detect The Word no longer claims unrestricted dictionary validation',()=>{
  const start=extractFunction('startWordRound','evaluateWordGuess');
  assert.doesNotMatch(start,/valid dictionary word/);
  assert.match(start,/Submit a ' \+ tier\.letters \+ '-letter guess/);
});


test('Detect The Word persists unresolved rounds and clears finished rounds',()=>{
  const start=extractFunction('savedWordRoundSnapshot','evaluateWordGuess');
  const submit=extractFunction('submitWordGuess','spendWordSkill');
  assert.match(start,/profiles\.detectword\.activeRound = savedWordRoundSnapshot\(\)/);
  assert.match(start,/restoreSavedWordRound/);
  assert.match(start,/tierId:tier\.id/);
  assert.match(submit,/profiles\.detectword\.activeRound = null/);
  assert.match(submit,/persistWordRound\(\)/);
});

test('Make The Number seeded shuffle is reproducible and bank fill avoids Math.random',()=>{
  const seedSource=extractFunction('makeNumberSeedHash','makeNumberFormulaTemplates');
  const api=Function(seedSource+'; return {makeNumberSeededRandom,seededShuffle};')();
  assert.deepEqual(api.seededShuffle([1,2,3,4,5,6],'starter:8'),api.seededShuffle([1,2,3,4,5,6],'starter:8'));
  assert.notDeepEqual(api.seededShuffle([1,2,3,4,5,6],'starter:8'),api.seededShuffle([1,2,3,4,5,6],'starter:9'));
  const bank=extractFunction('buildMakeNumberPuzzleBank','buildMake24Puzzle');
  assert.doesNotMatch(bank,/Math\.random/);
  assert.match(bank,/makeNumberSeededRandom\('bank:'/);
});

test('Make The Number advances an explicit round seed for starts and rerolls',()=>{
  const start=extractFunction('buildMake24Puzzle','countNumbers');
  const reroll=extractFunction('rerollMake24Puzzle','spendMake24Skill');
  assert.match(start,/const seed = nextMake24Seed\(tier\)/);
  assert.match(start,/seed:seed/);
  assert.match(reroll,/const seed = nextMake24Seed\(tier\)/);
  assert.match(reroll,/make24State\.seed = seed/);
  assert.match(reroll,/scheduleSave\('make24'\)/);
});
