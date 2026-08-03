from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        if new in text:
            return text
        raise RuntimeError(f"Missing patch anchor: {label}")
    return text.replace(old, new, 1)


# Refine the generated Voice Control settings dialog and its behaviour.
voice_path = ROOT / "sitewide/js/baseline-voice.js"
voice = voice_path.read_text(encoding="utf-8")
voice = replace_once(
    voice,
    "const BUILD='BASELINE_VOICE_RESPONSIVE_20260720_1';",
    "const BUILD='BASELINE_VOICE_FITNESS_SETTINGS_20260803_1';",
    "voice runtime build",
)
voice = replace_once(
    voice,
    '<button type="button" class="bl-mini-btn" id="bl-voice-close">Close</button>',
    '<button type="button" class="bl-voice-close-icon" id="bl-voice-close" aria-label="Close voice settings" title="Close">&times;</button>',
    "compact close control",
)
voice = replace_once(
    voice,
    '<p class="muted">Voice settings are sitewide. The microphone listens only after a voice-enabled system is deliberately started.</p>',
    '<p class="muted bl-voice-intro">Voice settings for workouts.</p>',
    "short workout-only introduction",
)
old_primary = '''        <label class="bl-voice-check"><input id="bl-voice-enabled" type="checkbox"> <span><strong>Enable Voice Control Sitewide</strong><small>Makes voice features available; it does not start listening.</small></span></label>
        <label class="bl-voice-check"><input id="bl-voice-spoken" type="checkbox"> <span>Spoken responses</span></label>'''
new_primary = '''        <div class="bl-voice-primary-grid">
          <label class="bl-voice-check"><input id="bl-voice-enabled" type="checkbox"> <span><strong>Enable Voice Control</strong><small>Makes voice features available for voice workouts; it does not start listening.</small></span></label>
          <label class="bl-voice-check"><input id="bl-voice-spoken" type="checkbox"> <span><strong>Spoken Responses</strong><small>Plays spoken workout guidance and feedback.</small></span></label>
        </div>'''
voice = replace_once(voice, old_primary, new_primary, "aligned primary voice controls")
voice = replace_once(
    voice,
    '<button type="button" class="bl-mini-btn" id="bl-voice-save">Save settings</button>',
    '<button type="button" class="bl-mini-btn bl-voice-save-close" id="bl-voice-save">Save &amp; Close</button>',
    "Save and Close label",
)
voice = replace_once(
    voice,
    "$('#bl-voice-save',flyout)?.addEventListener('click',()=>saveSettings(settingsFromUi()));",
    "$('#bl-voice-save',flyout)?.addEventListener('click',async()=>{ await saveSettings(settingsFromUi()); closeSettings(); });",
    "Save and Close behaviour",
)
voice_path.write_text(voice, encoding="utf-8")


# Add a final visual authority for consistent hierarchy and alignment.
css_path = ROOT / "sitewide/css/baseline-ui-fixes.css"
css = css_path.read_text(encoding="utf-8")
marker = "FITNESS-VOICE-SETTINGS-REFINEMENT-20260803"
if marker not in css:
    css += r'''

/* FITNESS-VOICE-SETTINGS-REFINEMENT-20260803
   One clear type hierarchy, aligned controls and a compact dismiss action. */
html body.voice-workout-active #bl-voice-flyout .bl-voice-settings-card{
  position:relative!important;
  width:min(920px,calc(100vw - 48px))!important;
  max-width:920px!important;
  padding:20px 22px 20px!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-settings-head{
  min-height:42px!important;
  margin:0 0 2px!important;
  padding-right:52px!important;
  align-items:center!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-settings-head h3{
  font-size:1.55rem!important;
  line-height:1.15!important;
}
html body.voice-workout-active #bl-voice-flyout #bl-voice-close.bl-voice-close-icon{
  position:absolute!important;
  top:14px!important;
  right:16px!important;
  display:inline-grid!important;
  place-items:center!important;
  width:42px!important;
  height:42px!important;
  min-width:42px!important;
  min-height:42px!important;
  padding:0!important;
  border:1px solid rgba(255,255,255,.34)!important;
  border-radius:50%!important;
  background:#21161b!important;
  color:#fff!important;
  font:800 1.65rem/1 system-ui,sans-serif!important;
  cursor:pointer!important;
}
html body.voice-workout-active #bl-voice-flyout #bl-voice-close.bl-voice-close-icon:hover,
html body.voice-workout-active #bl-voice-flyout #bl-voice-close.bl-voice-close-icon:focus-visible{
  border-color:#c81431!important;
  background:#34151d!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-intro{
  margin:0 0 8px!important;
  font-size:.88rem!important;
  line-height:1.3!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-support{
  margin:0 0 10px!important;
  min-height:40px!important;
  display:flex!important;
  align-items:center!important;
  font-size:.82rem!important;
  line-height:1.3!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid{
  display:grid!important;
  grid-template-columns:repeat(2,minmax(0,1fr))!important;
  gap:12px!important;
  margin:0 0 12px!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid>.bl-voice-check{
  display:flex!important;
  width:100%!important;
  min-height:76px!important;
  margin:0!important;
  padding:11px 12px!important;
  align-items:flex-start!important;
  border:1px solid rgba(255,255,255,.14)!important;
  border-radius:12px!important;
  background:#1a1115!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid .bl-voice-check input{
  flex:0 0 auto!important;
  margin:2px 9px 0 0!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid .bl-voice-check span{
  display:flex!important;
  min-width:0!important;
  flex-direction:column!important;
  align-items:flex-start!important;
  gap:3px!important;
  font-size:.9rem!important;
  line-height:1.25!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid .bl-voice-check strong{
  font:800 .9rem/1.25 system-ui,sans-serif!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid .bl-voice-check small{
  color:rgba(255,255,255,.72)!important;
  font:500 .78rem/1.3 system-ui,sans-serif!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-grid{
  align-items:stretch!important;
  gap:10px 12px!important;
  margin:0 0 12px!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-grid label{
  display:grid!important;
  grid-template-rows:auto 40px!important;
  align-content:start!important;
  gap:5px!important;
  margin:0!important;
  font:750 .86rem/1.2 system-ui,sans-serif!important;
}
html body.voice-workout-active #bl-voice-flyout input:not([type="checkbox"]):not([type="range"]),
html body.voice-workout-active #bl-voice-flyout select{
  width:100%!important;
  min-width:0!important;
  height:40px!important;
  min-height:40px!important;
  font-size:.88rem!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-check-grid{
  grid-template-columns:repeat(2,minmax(0,1fr))!important;
  gap:8px 12px!important;
  padding:2px 0 12px!important;
  border-bottom:1px solid rgba(255,255,255,.14)!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-check-grid .bl-voice-check{
  display:flex!important;
  min-height:42px!important;
  margin:0!important;
  padding:8px 10px!important;
  align-items:center!important;
  border:1px solid rgba(255,255,255,.1)!important;
  border-radius:10px!important;
  background:rgba(255,255,255,.025)!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-check-grid .bl-voice-check input{
  flex:0 0 auto!important;
  margin:0 9px 0 0!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-check-grid .bl-voice-check span{
  font:700 .86rem/1.25 system-ui,sans-serif!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-actions{
  display:grid!important;
  grid-template-columns:repeat(3,max-content)!important;
  justify-content:start!important;
  gap:10px!important;
  margin:12px 0 0!important;
  padding:0!important;
  border:0!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-actions .bl-mini-btn{
  min-height:40px!important;
  padding:8px 14px!important;
  font-size:.88rem!important;
  line-height:1.15!important;
}
html body.voice-workout-active #bl-voice-flyout .bl-voice-save-close{
  border-color:#c81431!important;
  background:linear-gradient(100deg,#6d1522,#b80f2d 56%,#42141c)!important;
  color:#fff!important;
}
html body.voice-workout-active #bl-voice-flyout #bl-voice-status:empty{
  display:none!important;
}
@media (max-width:760px){
  html body.voice-workout-active #bl-voice-flyout .bl-voice-primary-grid,
  html body.voice-workout-active #bl-voice-flyout .bl-voice-grid,
  html body.voice-workout-active #bl-voice-flyout .bl-voice-check-grid{
    grid-template-columns:1fr!important;
  }
  html body.voice-workout-active #bl-voice-flyout .bl-voice-actions{
    grid-template-columns:1fr!important;
  }
  html body.voice-workout-active #bl-voice-flyout .bl-voice-actions .bl-mini-btn{
    width:100%!important;
  }
}
'''
css_path.write_text(css, encoding="utf-8")


# Force the browser to load the refined shared JS and CSS.
html_path = ROOT / "systems/baseline-fitness/baseline-fitness.html"
html = html_path.read_text(encoding="utf-8")
html = replace_once(
    html,
    'baseline-ui-fixes.css?v=BASELINE_UI_FIXES_20260803_2',
    'baseline-ui-fixes.css?v=BASELINE_UI_FIXES_20260803_3',
    "UI fixes cache key",
)
html = replace_once(
    html,
    'baseline-voice.js?v=BASELINE_VOICE_RESPONSIVE_20260720_1',
    'baseline-voice.js?v=BASELINE_VOICE_FITNESS_SETTINGS_20260803_1',
    "voice settings cache key",
)
html_path.write_text(html, encoding="utf-8")


# Extend static contracts for copy, behaviour and fresh assets.
contract_path = ROOT / "tests/fitness-voice-fallback-contract.test.mjs"
contract = contract_path.read_text(encoding="utf-8")
contract = contract.replace(
    'baseline-ui-fixes\\.css\\?v=BASELINE_UI_FIXES_20260803_2',
    'baseline-ui-fixes\\.css\\?v=BASELINE_UI_FIXES_20260803_3',
)
contract = replace_once(
    contract,
    "  assert.match(protectedAccess, /BASELINE_PROTECTED_ACCESS_20260803_2/);\n});",
    """  assert.match(protectedAccess, /BASELINE_PROTECTED_ACCESS_20260803_2/);
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
  assert.match(sharedVoice, /aria-label=\"Close voice settings\"/);
  assert.match(sharedVoice, /await saveSettings\(settingsFromUi\(\)\); closeSettings\(\);/);

  assert.match(fixesCss, /FITNESS-VOICE-SETTINGS-REFINEMENT-20260803/);
  assert.match(fixesCss, /\.bl-voice-primary-grid\{/);
  assert.match(fixesCss, /#bl-voice-close\.bl-voice-close-icon/);
  assert.match(fixesCss, /grid-template-columns:repeat\(3,max-content\)!important/);
  assert.match(html, /baseline-ui-fixes\.css\?v=BASELINE_UI_FIXES_20260803_3/);
  assert.match(html, /baseline-voice\.js\?v=BASELINE_VOICE_FITNESS_SETTINGS_20260803_1/);
});""",
    "new voice settings contract",
)
contract_path.write_text(contract, encoding="utf-8")


# Exercise the actual dialog copy and both closing paths in Chromium.
spec_path = ROOT / "tests/baseline-fitness-voice.spec.js"
spec = spec_path.read_text(encoding="utf-8")
spec = replace_once(
    spec,
    '''  await expect(page.locator("#bl-voice-close")).toBeVisible();
  const geometry = await page.evaluate(() => {''',
    '''  await expect(page.locator("#bl-voice-close")).toBeVisible();
  await expect(page.locator("#bl-voice-settings-title")).toHaveText("Voice Control");
  await expect(page.locator(".bl-voice-intro")).toHaveText("Voice settings for workouts.");
  await expect(page.locator("#bl-voice-spoken").locator("xpath=following-sibling::span")).toContainText("Plays spoken workout guidance and feedback.");
  await expect(page.locator("#bl-voice-save")).toHaveText("Save & Close");
  const geometry = await page.evaluate(() => {''',
    "browser copy checks",
)
spec = replace_once(
    spec,
    '''  expect(geometry.overlayZ).toBeGreaterThan(geometry.workoutZ);
  await page.locator("#bl-voice-close").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();''',
    '''  expect(geometry.overlayZ).toBeGreaterThan(geometry.workoutZ);
  await page.locator("#bl-voice-save").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();
  await page.locator("#voiceWorkoutSettingsBtn").click();
  await expect(page.locator("#bl-voice-flyout")).toBeVisible();
  await page.locator("#bl-voice-close").click();
  await expect(page.locator("#bl-voice-flyout")).toBeHidden();''',
    "browser Save and Close check",
)
spec_path.write_text(spec, encoding="utf-8")


# The patcher and workflow are temporary implementation aids.
for relative in (
    ".github/scripts/apply_voice_settings_refinement.py",
    ".github/workflows/apply-voice-settings-refinement.yml",
):
    target = ROOT / relative
    if target.exists():
        target.unlink()
