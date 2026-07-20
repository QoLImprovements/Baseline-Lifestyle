import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const require=createRequire(import.meta.url);
const adapter=require(path.join(root,'systems/baseline-fitness/js/baseline-fitness-voice.js'));
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

test('voice workout exposes the current literal-command state model',()=>{
  const S=adapter.STATES;
  assert.deepEqual(
    Object.keys(S),
    ['IDLE','BEGIN','TIMING','RESULT','NUMBER','PAUSED','FINISHED','ERROR']
  );
  assert.equal(S.BEGIN,'awaiting_begin');
  assert.equal(S.RESULT,'awaiting_result');
  assert.equal(adapter.debug.normalise('  Start!  '),'start');
  assert.equal(adapter.debug.normalise('Succeeded'),'succeeded');
  assert.equal(adapter.debug.parseNumber('I achieved 18 repetitions'),18);
});

test('voice dialogue keeps outcome and achievement terminology separate',()=>{
  const source=read('systems/baseline-fitness/js/baseline-fitness-voice.js');
  assert.match(source,/say Success or Fail/i);
  assert.match(source,/number of .*repetitions/i);
  assert.match(source,/Success/);
  assert.match(source,/Fail/);
});

test('fitness voice accepts interim and alternative recognition results',()=>{
  const source=read('systems/baseline-fitness/js/baseline-fitness-voice.js');
  assert.match(source,/selectResponsiveTranscript/);
  assert.match(source,/interimResults:!0/);
  assert.match(source,/maxAlternatives:5/);
  assert.match(source,/restartDelayMs:60/);
  assert.ok(
    source.indexOf('await L(),T()') > source.indexOf('startSession?.("voice")'),
    'recognition must start after the opening spoken prompt'
  );
});

test('fitness page loads one sitewide engine adapter and presents the voice popup',()=>{
  const html=read('systems/baseline-fitness/baseline-fitness.html');
  const app=read('systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.match(html,/id="voiceWorkoutModal"/);
  assert.match(html,/baseline-fitness-voice\.js/);
  assert.equal((html.match(/baseline-fitness-voice\.js/g)||[]).length,1);
  assert.match(app,/Start \(Voice Activated\)/);
  assert.match(app,/BASELINE_fitnessWorkout/);
  assert.match(app,/inputMode/);
  assert.match(app,/✕ Failed/);
});

test('sitewide shared runtime loads the reusable voice engine and exposes settings',()=>{
  const shared=read('sitewide/js/baseline-shared.js');
  const config=read('sitewide/api/config.php');
  assert.match(shared,/bl-voice-toggle/);
  assert.match(shared,/baseline-voice\.js/);
  assert.match(config,/CREATE TABLE IF NOT EXISTS voice_settings/);
  assert.equal(fs.existsSync(path.join(root,'sitewide/api/voice_settings.php')),true);
});
