import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Fitness voice recognition falls back independently of spoken output', () => {
  const voice = read('systems/baseline-fitness/js/baseline-fitness-voice.js');
  assert.match(voice, /startBrowserFallback/);
  assert.match(voice, /voice\.startRecognition/);
  assert.match(voice, /enhanced_voice_not_configured/);
  assert.match(voice, /realtime_service_unavailable/);
  assert.match(voice, /rate_limited/);
  assert.match(voice, /provider: "browser"/);
  assert.doesNotMatch(voice, /Spoken responses are off, but that setting does not disable recognition/);
  assert.match(voice, /Voice recognition unavailable\./);
});

test('Voice workout dialog hides the fixed site banner while active', () => {
  const css = read('systems/baseline-fitness/css/baseline-fitness-voice-interface.css');
  assert.match(css, /BASELINE-FITNESS-VOICE-OVERLAY-AUTHORITY-20260803/);
  assert.match(css, /body\.voice-workout-active \.bl-homebar/);
  assert.match(css, /body\.voice-workout-active #voiceWorkoutModal/);
  assert.match(css, /z-index:20000!important/);
  assert.match(css, /caret-color:transparent!important/);
});

test('Fitness voice assets use fresh cache keys', () => {
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  const protectedAccess = read('sitewide/js/baseline-protected-access.js');
  assert.match(html, /baseline-fitness-voice-interface\.css\?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_1/);
  assert.match(html, /baseline-fitness-voice\.js\?v=BASELINE_FITNESS_VOICE_FALLBACK_20260803_1/);
  assert.match(protectedAccess, /BASELINE_PROTECTED_ACCESS_20260803_2/);
});
