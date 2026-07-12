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

test('voice workout state accepts only context-appropriate literal commands',()=>{
  const S=adapter.STATES;
  assert.equal(adapter.stateIntent(S.WAITING_START,'Start'),'start');
  assert.equal(adapter.stateIntent(S.WAITING_START,'Succeeded'),null);
  assert.equal(adapter.stateIntent(S.PERFORMING,'Succeeded'),'succeeded');
  assert.equal(adapter.stateIntent(S.PERFORMING,'Failed'),'failed');
  assert.equal(adapter.stateIntent(S.RESTING,'Ready'),'ready');
  assert.equal(adapter.stateIntent(S.REST_EXPIRED,'Add thirty seconds'),'add_thirty_seconds');
  assert.equal(adapter.stateIntent(S.COMPLETE,'Finish'),'finish');
});

test('voice dialogue keeps outcome and achievement terminology separate',()=>{
  assert.equal(adapter.amountWord('reps',8),'8 repetitions');
  assert.equal(adapter.amountWord('seconds',1),'1 second');
  assert.equal(adapter.durationPhrase(150),'two minutes and thirty seconds');
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
