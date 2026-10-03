import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const core = fs.readFileSync(new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js', import.meta.url),'utf8');

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
