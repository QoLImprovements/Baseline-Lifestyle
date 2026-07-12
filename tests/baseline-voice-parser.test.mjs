import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const require=createRequire(import.meta.url);
const voice=require(path.join(root,'sitewide/js/baseline-voice.js'));

test('sitewide voice uses the agreed 150 second recovery maximum',()=>{
  assert.equal(voice.DEFAULTS.maximumRestSeconds,150);
  assert.equal(voice.DEFAULTS.language,'en-GB');
});

test('spoken achieved amounts accept digits and natural number words',()=>{
  assert.equal(voice.parseSpokenNumber('8'),8);
  assert.equal(voice.parseSpokenNumber('I achieved eight repetitions'),8);
  assert.equal(voice.parseSpokenNumber('twenty-six'),26);
  assert.equal(voice.parseSpokenNumber('one hundred and five seconds'),105);
  assert.equal(voice.parseSpokenNumber('no number here'),null);
});

test('literal workout commands resolve to canonical command names',()=>{
  assert.equal(voice.commandForTranscript('Succeeded',['succeeded','failed']),'succeeded');
  assert.equal(voice.commandForTranscript('Failed',['succeeded','failed']),'failed');
  assert.equal(voice.commandForTranscript('I am ready',['ready']),'ready');
  assert.equal(voice.commandForTranscript('Add thirty seconds',['add_thirty_seconds']),'add_thirty_seconds');
  assert.equal(voice.commandForTranscript('I am not ready',['ready']),null);
});

test('settings are clamped and normalised',()=>{
  const settings=voice.normaliseSettings({enabled:1,rate:8,pitch:-1,volume:3,maximumRestSeconds:900});
  assert.equal(settings.enabled,true);
  assert.equal(settings.rate,2);
  assert.equal(settings.pitch,.5);
  assert.equal(settings.volume,1);
  assert.equal(settings.maximumRestSeconds,600);
});
