import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {
  WORKOUT_VOICE_STATES as STATES,
  allowedVocabulary,
  recognitionRequest,
  interpretRecognition
} from '../prototypes/voice-recognition/workout-policy.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const voice = require(path.join(root, 'sitewide/js/baseline-voice.js'));

test('each state exposes only its required vocabulary', () => {
  assert.deepEqual(allowedVocabulary(STATES.AWAIT_BEGIN), ['begin']);
  assert.deepEqual(allowedVocabulary(STATES.AWAIT_RESULT), ['succeeded','failed']);
  assert.deepEqual(allowedVocabulary(STATES.CONFIRM_NUMBER), ['yes','no']);
  assert.deepEqual(allowedVocabulary(STATES.REST), ['continue']);
  assert.deepEqual(allowedVocabulary(STATES.ACTIVE), []);
  assert.deepEqual(allowedVocabulary(STATES.COMPLETE), []);
});

test('commands valid in another state cannot activate', () => {
  assert.deepEqual(
    interpretRecognition({state:STATES.AWAIT_BEGIN, transcript:'Failed'}),
    {accepted:false, reason:'not_allowed_in_state'}
  );
  assert.deepEqual(
    interpretRecognition({state:STATES.AWAIT_RESULT, transcript:'Begin'}),
    {accepted:false, reason:'not_allowed_in_state'}
  );
  assert.deepEqual(
    interpretRecognition({state:STATES.REST, transcript:'Continue'}),
    {accepted:true, kind:'command', command:'continue'}
  );
});

test('synonyms and uncertain commands are rejected', () => {
  for(const synonym of ['start','ready','go']){
    assert.equal(interpretRecognition({state:STATES.AWAIT_BEGIN, transcript:synonym}).accepted, false);
  }
  assert.deepEqual(
    interpretRecognition({state:STATES.AWAIT_BEGIN, transcript:'begin', confidence:0.4}),
    {accepted:false, reason:'uncertain'}
  );
});

test('number mode uses the established parser and current target bounds', () => {
  const request = recognitionRequest(STATES.AWAIT_NUMBER, {target:23, unit:'repetitions'});
  assert.deepEqual(request, {
    state:STATES.AWAIT_NUMBER,
    listen:true,
    mode:'number',
    vocabulary:['<number>'],
    minimum:0,
    maximum:23,
    unit:'repetitions'
  });
  assert.deepEqual(
    interpretRecognition({state:STATES.AWAIT_NUMBER, transcript:'twenty-three', target:23, parseNumber:voice.parseSpokenNumber}),
    {accepted:true, kind:'number', value:23}
  );
  assert.deepEqual(
    interpretRecognition({state:STATES.AWAIT_NUMBER, transcript:'twenty-four', target:23, parseNumber:voice.parseSpokenNumber}),
    {accepted:false, reason:'number_out_of_range', maximum:23}
  );
});
