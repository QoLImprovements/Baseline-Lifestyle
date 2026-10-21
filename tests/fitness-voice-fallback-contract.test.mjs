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

test('Voice settings stay fully on-screen above the workout without changing the banner', () => {
  const interfaceCss = read('systems/baseline-fitness/css/baseline-fitness-voice-interface.css');
  const fixesCss = read('sitewide/css/baseline-ui-fixes.css');
  const voice = read('systems/baseline-fitness/js/baseline-fitness-voice.js');
  const html = read('systems/baseline-fitness/baseline-fitness.html');

  assert.match(interfaceCss, /caret-color:transparent!important/);
  assert.doesNotMatch(interfaceCss, /voice-workout-active \.bl-homebar/);
  assert.match(fixesCss, /#bl-voice-flyout\.bl-flyout:not\(\[hidden\]\)/);
  assert.match(fixesCss, /transform:none!important/);
  assert.match(fixesCss, /z-index:30000!important/);
  assert.match(fixesCss, /display:grid!important/);
  assert.match(fixesCss, /grid-template-columns:repeat\(3,minmax\(0,1fr\)\)!important/);
  assert.match(fixesCss, /#bl-voice-close\{\s*display:inline-flex!important/);
  assert.match(fixesCss, /\.bl-voice-settings-card\{[\s\S]*?overflow:visible!important/);
  assert.doesNotMatch(voice, /translate\(-50%,-50%\)/);
  assert.doesNotMatch(voice, /z-index:14050/);

  assert.match(html, /baseline-fitness-voice-interface\.css\?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_2/);
  assert.match(html, /baseline-ui-fixes\.css\?v=SITEWIDE_UI_FIXES_20261021_1/);
  assert.match(html, /baseline-fitness-voice\.js\?v=BASELINE_FITNESS_VOICE_COUNTDOWN_20260822_1/);

  const interfaceIndex = html.indexOf('baseline-fitness-voice-interface.css');
  const fixesIndex = html.indexOf('baseline-ui-fixes.css');
  assert.ok(interfaceIndex >= 0 && fixesIndex > interfaceIndex, 'Final UI fixes must load after the Fitness voice interface');
});

test('Fitness voice assets use fresh cache keys', () => {
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  const protectedAccess = read('sitewide/js/baseline-protected-access.js');
  assert.match(html, /baseline-fitness-voice-interface\.css\?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_2/);
  assert.match(html, /baseline-ui-fixes\.css\?v=SITEWIDE_UI_FIXES_20261021_1/);
  assert.match(html, /baseline-fitness-voice\.js\?v=BASELINE_FITNESS_VOICE_COUNTDOWN_20260822_1/);
  assert.match(protectedAccess, /SAVED_DATA_REVISION_CLIENT_20260823_1/);
});

test('Voice settings use concise fitness copy, aligned controls and Save and Close behaviour', () => {
  const sharedVoice = read('sitewide/js/baseline-voice.js');
  const fixesCss = read('sitewide/css/baseline-ui-fixes.css');
  const html = read('systems/baseline-fitness/baseline-fitness.html');

  assert.match(sharedVoice, /Voice settings for workouts\./);
  assert.match(sharedVoice, />Enable Voice Control</);
  assert.doesNotMatch(sharedVoice, /Enable Voice Control Sitewide/);
  assert.doesNotMatch(sharedVoice, /Voice settings are sitewide/);
  assert.match(sharedVoice, /Plays spoken workout guidance and feedback\./);
  assert.match(sharedVoice, /Save &amp; Close/);
  assert.match(sharedVoice, /aria-label="Close voice settings"/);
  assert.match(sharedVoice, /await saveSettings\(settingsFromUi\(\)\);\s*if\(lastSaveSucceeded\) closeSettings\(\);/);

  assert.match(fixesCss, /FITNESS-VOICE-SETTINGS-REFINEMENT-20260803/);
  assert.match(fixesCss, /\.bl-voice-primary-grid\{/);
  assert.match(fixesCss, /#bl-voice-close\.bl-voice-close-icon/);
  assert.match(fixesCss, /grid-template-columns:repeat\(3,max-content\)!important/);
  assert.match(html, /baseline-ui-fixes\.css\?v=SITEWIDE_UI_FIXES_20261021_1/);
  assert.match(html, /baseline-voice\.js\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
});
