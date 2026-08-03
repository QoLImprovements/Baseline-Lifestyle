from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        if new in text:
            return text
        raise RuntimeError(f"Missing patch anchor: {label}")
    return text.replace(old, new, 1)


# 1. Remove the incorrect banner hiding rule while keeping the workout modal above page content.
interface_path = ROOT / "systems/baseline-fitness/css/baseline-fitness-voice-interface.css"
interface = interface_path.read_text(encoding="utf-8")
old_interface = '''/* BASELINE-FITNESS-VOICE-OVERLAY-AUTHORITY-20260803
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
'''
new_interface = '''/* The workout dialog sits above page content. The ordinary site banner is
   not modified by the voice-workout state. */
body.voice-workout-active #voiceWorkoutModal{
  z-index:20000!important;
}
'''
interface = replace_once(interface, old_interface, new_interface, "remove incorrect banner hiding")
interface_path.write_text(interface, encoding="utf-8")


# 2. The late runtime style was translating the full-screen settings overlay by -50%.
voice_path = ROOT / "systems/baseline-fitness/js/baseline-fitness-voice.js"
voice = voice_path.read_text(encoding="utf-8")
old_runtime = '''      body.voice-workout-active #bl-voice-flyout:not([hidden]){display:block!important;position:fixed!important;z-index:14050!important;left:50%!important;right:auto!important;top:50%!important;transform:translate(-50%,-50%)!important;width:min(440px,calc(100vw - 24px))!important;max-height:calc(100svh - 24px)!important;overflow:auto!important}\\n      body.voice-workout-active #bl-voice-close{display:inline-flex!important;margin-left:auto}\\n'''
new_runtime = '''      /* Voice settings overlay geometry is owned by baseline-ui-fixes.css. */\\n'''
voice = replace_once(voice, old_runtime, new_runtime, "remove conflicting runtime flyout transform")
voice_path.write_text(voice, encoding="utf-8")


# 3. Make the foreground settings overlay explicitly immune to inherited transforms.
fixes_path = ROOT / "sitewide/css/baseline-ui-fixes.css"
fixes = fixes_path.read_text(encoding="utf-8")
old_banner_override = '''/* Fitness voice settings: the settings dialog must sit above the active
   workout dialog. The ordinary site banner remains unchanged and visible. */
html body.voice-workout-active .bl-homebar{
  visibility:visible!important;
  opacity:1!important;
  pointer-events:auto!important;
}
'''
new_banner_override = '''/* Fitness voice settings: the settings dialog must sit above the active
   workout dialog. The ordinary site banner is deliberately untouched. */
'''
fixes = replace_once(fixes, old_banner_override, new_banner_override, "remove unnecessary banner override")
fixes = replace_once(
    fixes,
    '''  position:fixed!important;
  inset:0!important;
''',
    '''  position:fixed!important;
  transform:none!important;
  inset:0!important;
''',
    "reset flyout transform",
)
fixes_path.write_text(fixes, encoding="utf-8")


# 4. Fresh asset keys ensure Hostinger/browser caches cannot retain the broken positioning.
html_path = ROOT / "systems/baseline-fitness/baseline-fitness.html"
html = html_path.read_text(encoding="utf-8")
html = replace_once(
    html,
    '/systems/baseline-fitness/css/baseline-fitness-voice-interface.css?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_1',
    '/systems/baseline-fitness/css/baseline-fitness-voice-interface.css?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_2',
    "voice interface cache key",
)
html = replace_once(
    html,
    '/sitewide/css/baseline-ui-fixes.css?v=BASELINE_PROTECTED_ACCESS_20260801_1',
    '/sitewide/css/baseline-ui-fixes.css?v=BASELINE_UI_FIXES_20260803_2',
    "UI fixes cache key",
)
html = replace_once(
    html,
    '/systems/baseline-fitness/js/baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_FALLBACK_20260803_1',
    '/systems/baseline-fitness/js/baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_OVERLAY_FIX_20260803_2',
    "fitness voice runtime cache key",
)
html_path.write_text(html, encoding="utf-8")


# 5. Strengthen the static contract test around the exact regression.
contract_path = ROOT / "tests/fitness-voice-fallback-contract.test.mjs"
contract = contract_path.read_text(encoding="utf-8")
old_contract = '''test('Voice settings stay above the workout without changing the ordinary banner', () => {
  const interfaceCss = read('systems/baseline-fitness/css/baseline-fitness-voice-interface.css');
  const fixesCss = read('sitewide/css/baseline-ui-fixes.css');
  const html = read('systems/baseline-fitness/baseline-fitness.html');

  assert.match(interfaceCss, /caret-color:transparent!important/);
  assert.match(fixesCss, /body\\.voice-workout-active \\.bl-homebar\\{\\s*visibility:visible!important/);
  assert.match(fixesCss, /#bl-voice-flyout\\.bl-flyout:not\\(\\[hidden\\]\\)/);
  assert.match(fixesCss, /z-index:30000!important/);
  assert.match(fixesCss, /display:grid!important/);
  assert.match(fixesCss, /grid-template-columns:repeat\\(3,minmax\\(0,1fr\\)\\)!important/);
  assert.match(fixesCss, /#bl-voice-close\\{\\s*display:inline-flex!important/);
  assert.match(fixesCss, /\\.bl-voice-settings-card\\{[\\s\\S]*?overflow:visible!important/);

  const interfaceIndex = html.indexOf('baseline-fitness-voice-interface.css');
  const fixesIndex = html.indexOf('baseline-ui-fixes.css');
  assert.ok(interfaceIndex >= 0 && fixesIndex > interfaceIndex, 'Final UI fixes must load after the Fitness voice interface');
});'''
new_contract = '''test('Voice settings stay fully on-screen above the workout without changing the banner', () => {
  const interfaceCss = read('systems/baseline-fitness/css/baseline-fitness-voice-interface.css');
  const fixesCss = read('sitewide/css/baseline-ui-fixes.css');
  const voice = read('systems/baseline-fitness/js/baseline-fitness-voice.js');
  const html = read('systems/baseline-fitness/baseline-fitness.html');

  assert.match(interfaceCss, /caret-color:transparent!important/);
  assert.doesNotMatch(interfaceCss, /voice-workout-active \\.bl-homebar/);
  assert.match(fixesCss, /#bl-voice-flyout\\.bl-flyout:not\\(\\[hidden\\]\\)/);
  assert.match(fixesCss, /transform:none!important/);
  assert.match(fixesCss, /z-index:30000!important/);
  assert.match(fixesCss, /display:grid!important/);
  assert.match(fixesCss, /grid-template-columns:repeat\\(3,minmax\\(0,1fr\\)\\)!important/);
  assert.match(fixesCss, /#bl-voice-close\\{\\s*display:inline-flex!important/);
  assert.match(fixesCss, /\\.bl-voice-settings-card\\{[\\s\\S]*?overflow:visible!important/);
  assert.doesNotMatch(voice, /translate\\(-50%,-50%\\)/);
  assert.doesNotMatch(voice, /z-index:14050/);

  assert.match(html, /baseline-fitness-voice-interface\\.css\\?v=BASELINE_FITNESS_VOICE_OVERLAY_20260803_2/);
  assert.match(html, /baseline-ui-fixes\\.css\\?v=BASELINE_UI_FIXES_20260803_2/);
  assert.match(html, /baseline-fitness-voice\\.js\\?v=BASELINE_FITNESS_VOICE_OVERLAY_FIX_20260803_2/);

  const interfaceIndex = html.indexOf('baseline-fitness-voice-interface.css');
  const fixesIndex = html.indexOf('baseline-ui-fixes.css');
  assert.ok(interfaceIndex >= 0 && fixesIndex > interfaceIndex, 'Final UI fixes must load after the Fitness voice interface');
});'''
contract = replace_once(contract, old_contract, new_contract, "overlay regression contract")
contract_path.write_text(contract, encoding="utf-8")


# 6. Add a browser-level geometry check to the existing voice-workout test.
spec_path = ROOT / "tests/baseline-fitness-voice.spec.js"
spec = spec_path.read_text(encoding="utf-8")
anchor = '''  await expect(page.locator("#voiceMicVisual")).toHaveAttribute(
    "data-state",
    "listening",
  );

  // A streamed Realtime transcription delta should activate the next step
'''
insert = '''  await expect(page.locator("#voiceMicVisual")).toHaveAttribute(
    "data-state",
    "listening",
  );

  // Settings must be a complete foreground dialog, not a translated/clipped
  // flyout in the upper-left corner.
  await page.locator("#voiceWorkoutSettingsBtn").click();
  await expect(page.locator("#bl-voice-flyout")).toBeVisible();
  await expect(page.locator("#bl-voice-close")).toBeVisible();
  const geometry = await page.evaluate(() => {
    const overlay = document.querySelector("#bl-voice-flyout");
    const card = document.querySelector("#bl-voice-flyout .bl-voice-settings-card");
    const workout = document.querySelector("#voiceWorkoutModal");
    const overlayRect = overlay.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    return {
      overlay: {
        left: overlayRect.left,
        top: overlayRect.top,
        right: overlayRect.right,
        bottom: overlayRect.bottom,
      },
      card: {
        left: cardRect.left,
        top: cardRect.top,
        right: cardRect.right,
        bottom: cardRect.bottom,
        scrollHeight: card.scrollHeight,
        clientHeight: card.clientHeight,
      },
      overlayZ: Number(getComputedStyle(overlay).zIndex || 0),
      workoutZ: Number(getComputedStyle(workout).zIndex || 0),
      transform: getComputedStyle(overlay).transform,
      viewport: { width: innerWidth, height: innerHeight },
    };
  });
  expect(geometry.transform).toBe("none");
  expect(geometry.overlay.left).toBeGreaterThanOrEqual(-1);
  expect(geometry.overlay.top).toBeGreaterThanOrEqual(-1);
  expect(geometry.overlay.right).toBeLessThanOrEqual(geometry.viewport.width + 1);
  expect(geometry.overlay.bottom).toBeLessThanOrEqual(geometry.viewport.height + 1);
  expect(geometry.card.left).toBeGreaterThanOrEqual(0);
  expect(geometry.card.top).toBeGreaterThanOrEqual(0);
  expect(geometry.card.right).toBeLessThanOrEqual(geometry.viewport.width);
  expect(geometry.card.bottom).toBeLessThanOrEqual(geometry.viewport.height);
  expect(geometry.card.scrollHeight).toBeLessThanOrEqual(geometry.card.clientHeight + 1);
  expect(geometry.overlayZ).toBeGreaterThan(geometry.workoutZ);
  await page.locator("#bl-voice-close").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();

  // A streamed Realtime transcription delta should activate the next step
'''
spec = replace_once(spec, anchor, insert, "browser geometry check")
spec_path.write_text(spec, encoding="utf-8")


# Remove the one-shot patch machinery from the resulting branch.
for relative in (
    ".github/scripts/apply_voice_settings_overlay_fix.py",
    ".github/workflows/apply-voice-settings-overlay-fix.yml",
):
    target = ROOT / relative
    if target.exists():
        target.unlink()
