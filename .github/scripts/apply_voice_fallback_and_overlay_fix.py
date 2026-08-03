from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[2]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def write(path: str, content: str) -> None:
    (ROOT / path).write_text(content, encoding="utf-8")


def replace_once(content: str, old: str, new: str, label: str) -> str:
    if old not in content:
        if new in content:
            return content
        raise RuntimeError(f"Missing patch anchor: {label}")
    return content.replace(old, new, 1)


def patch_fitness_voice() -> None:
    path = "systems/baseline-fitness/js/baseline-fitness-voice.js"
    content = read(path)
    content = content.replace(
        'BASELINE_FITNESS_VOICE_REALTIME_20260720_2',
        'BASELINE_FITNESS_VOICE_FALLBACK_20260803_1',
    )

    content = replace_once(
        content,
        '    let permanentlyBlocked = false;\n    const partials = new Map();',
        '    let permanentlyBlocked = false;\n    let browserFallback = null;\n    const partials = new Map();',
        'browser fallback state',
    )

    anchor = '''    function reportError(code, error) {
      try {
        options.onError?.(code, error || null);
      } catch (_error) {}
    }

    function cleanupConnection() {'''
    replacement = '''    function reportError(code, error) {
      try {
        options.onError?.(code, error || null);
      } catch (_error) {}
    }

    function stopBrowserFallback() {
      try {
        browserFallback?.stop?.();
      } catch (_error) {}
      browserFallback = null;
    }

    function startBrowserFallback(reason) {
      if (browserFallback) return true;
      if (!wanted || paused) return false;
      const voice = d();
      let supported = true;
      try {
        supported = voice?.support?.().recognition !== false;
      } catch (_error) {}
      if (!supported || typeof voice?.startRecognition !== "function") return false;
      cleanupConnection();
      permanentlyBlocked = true;
      try {
        browserFallback = voice.startRecognition({
          continuous: true,
          interimResults: true,
          maxAlternatives: 5,
          phrases: [
            "begin",
            "start",
            "ready",
            "success",
            "fail",
            "repeat",
            "stop voice workout",
          ],
          onState(state, detail) {
            report(state, Object.assign({ provider: "browser", fallbackReason: reason }, detail || {}));
          },
          onTranscript(transcript, alternatives, meta) {
            options.onTranscript?.(transcript, alternatives, Object.assign({ provider: "browser" }, meta || {}));
          },
          onError(code, error) {
            reportError(code, error);
          },
        });
        report("listening", { provider: "browser", fallbackReason: reason });
        return true;
      } catch (error) {
        browserFallback = null;
        return false;
      }
    }

    function cleanupConnection() {'''
    content = replace_once(content, anchor, replacement, 'browser fallback helpers')

    content = replace_once(
        content,
        '      if (!wanted || paused || permanentlyBlocked || reconnectTimer) return;',
        '      if (!wanted || paused || permanentlyBlocked || browserFallback || reconnectTimer) return;',
        'disable enhanced reconnect during browser fallback',
    )
    content = replace_once(
        content,
        '      if (!wanted || paused || permanentlyBlocked) return;',
        '      if (!wanted || paused || permanentlyBlocked || browserFallback) return;',
        'disable enhanced connect during browser fallback',
    )

    old_response = '''          cleanupConnection();
          if (code === "realtime_service_unavailable") scheduleReconnect();
          else reportError(code, payload);
          return;'''
    new_response = '''          cleanupConnection();
          if (
            [
              "enhanced_voice_not_configured",
              "realtime_service_unavailable",
              "rate_limited",
            ].includes(code) &&
            startBrowserFallback(code)
          )
            return;
          if (code === "realtime_service_unavailable") scheduleReconnect();
          else reportError(code, payload);
          return;'''
    content = replace_once(content, old_response, new_response, 'enhanced service fallback')

    old_catch = '''        if (code === "realtime_connection_failed") scheduleReconnect();
        else reportError(code, error);'''
    new_catch = '''        if (
          code === "realtime_connection_failed" &&
          startBrowserFallback(code)
        )
          return;
        if (code === "realtime_connection_failed") scheduleReconnect();
        else reportError(code, error);'''
    content = replace_once(content, old_catch, new_catch, 'connection failure fallback')

    content = replace_once(
        content,
        '''      stop() {
        wanted = false;
        paused = false;
        generation += 1;
        cleanupConnection();''',
        '''      stop() {
        wanted = false;
        paused = false;
        generation += 1;
        stopBrowserFallback();
        cleanupConnection();''',
        'stop browser fallback',
    )
    content = replace_once(
        content,
        '''      pause() {
        paused = true;
        try {''',
        '''      pause() {
        paused = true;
        if (browserFallback) {
          try {
            browserFallback.pause?.();
          } catch (_error) {}
          report("paused", { provider: "browser" });
          return;
        }
        try {''',
        'pause browser fallback',
    )
    content = replace_once(
        content,
        '''      resume() {
        if (!wanted) return;
        paused = false;
        if (peer?.connectionState === "connected") {''',
        '''      resume() {
        if (!wanted) return;
        paused = false;
        if (browserFallback) {
          try {
            browserFallback.resume?.();
          } catch (_error) {}
          return;
        }
        if (peer?.connectionState === "connected") {''',
        'resume browser fallback',
    )
    content = content.replace(
        '      provider: "openai-realtime",',
        '      provider: "openai-realtime-with-browser-fallback",',
        1,
    )

    content = content.replace(
        '"Enhanced voice recognition is not configured on the server."',
        '"Voice recognition unavailable."',
    )
    content = content.replace(
        '"Enhanced voice recognition could not connect. Please try again."',
        '"Voice recognition unavailable. Try again."',
    )
    content = content.replace(
        '"Voice recognition is temporarily busy. Please wait a moment."',
        '"Voice recognition busy. Try again shortly."',
    )
    write(path, content)


def patch_live_stability() -> None:
    path = "sitewide/js/baseline-live-stability.js"
    content = read(path)
    content = content.replace(
        'BASELINE_LIVE_STABILITY_20260803_1',
        'BASELINE_LIVE_STABILITY_20260803_2',
    )
    old = '''      let settings = {};
      try{ settings = window.BASELINE_voice && window.BASELINE_voice.getSettings ? window.BASELINE_voice.getSettings() : {}; }catch(_error){}
      const message = String(prompt.textContent || '').trim();
      if(settings && settings.spokenResponses === false && message === 'Enhanced voice recognition is not configured on the server.'){
        prompt.textContent = 'Voice recognition could not connect. Spoken responses are off, but that setting does not disable recognition.';
      }'''
    new = '''      const message = String(prompt.textContent || '').trim();
      if([
        'Enhanced voice recognition is not configured on the server.',
        'Voice recognition could not connect. Spoken responses are off, but that setting does not disable recognition.'
      ].includes(message)){
        prompt.textContent = 'Voice recognition unavailable.';
      }'''
    content = replace_once(content, old, new, 'concise recognition message')
    write(path, content)


def patch_voice_interface() -> None:
    path = "systems/baseline-fitness/css/baseline-fitness-voice-interface.css"
    content = read(path)
    marker = 'BASELINE-FITNESS-VOICE-OVERLAY-AUTHORITY-20260803'
    if marker not in content:
        content = content.rstrip() + '''

/* BASELINE-FITNESS-VOICE-OVERLAY-AUTHORITY-20260803
   The focused workout dialog owns the viewport while active. The fixed site
   banner must not appear through or above it. */
body.voice-workout-active .bl-homebar{
  visibility:hidden!important;
  opacity:0!important;
  pointer-events:none!important;
}
body.voice-workout-active #voiceWorkoutModal{
  z-index:20000!important;
}
#voiceWorkoutSettingsBtn,
#voiceWorkoutSettingsBtn *{
  -webkit-user-select:none!important;
  user-select:none!important;
  caret-color:transparent!important;
}
''' + '\n'
    write(path, content)


def patch_cache_keys() -> None:
    path = "systems/baseline-fitness/baseline-fitness.html"
    content = read(path)
    content = re.sub(
        r'baseline-fitness-voice-interface\.css\?v=[^"\']+',
        'baseline-fitness-voice-interface.css?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_1',
        content,
    )
    content = re.sub(
        r'baseline-fitness-voice\.js\?v=[^"\']+',
        'baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_FALLBACK_20260803_1',
        content,
    )
    write(path, content)

    path = "sitewide/js/baseline-protected-access.js"
    content = read(path).replace(
        'BASELINE_PROTECTED_ACCESS_20260803_1',
        'BASELINE_PROTECTED_ACCESS_20260803_2',
    )
    write(path, content)


def add_tests() -> None:
    test_path = "tests/fitness-voice-fallback-contract.test.mjs"
    test = r'''import test from 'node:test';
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
'''
    write(test_path, test)

    package_path = ROOT / 'package.json'
    package = json.loads(package_path.read_text(encoding='utf-8'))
    structure = package['scripts']['test:structure']
    if test_path not in structure:
        package['scripts']['test:structure'] = structure + ' ' + test_path
    package_path.write_text(json.dumps(package, indent=2) + '\n', encoding='utf-8')


def cleanup() -> None:
    for relative in (
        '.github/scripts/apply_voice_fallback_and_overlay_fix.py',
        '.github/workflows/apply-voice-fallback-and-overlay-fix.yml',
    ):
        path = ROOT / relative
        if path.exists():
            path.unlink()


def main() -> None:
    patch_fitness_voice()
    patch_live_stability()
    patch_voice_interface()
    patch_cache_keys()
    add_tests()
    cleanup()


if __name__ == '__main__':
    main()
