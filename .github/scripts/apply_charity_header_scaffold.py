from __future__ import annotations

from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[2]
PAGE = ROOT / "systems/charity-shop/charity-shop.php"
BUILD = "BASELINE_CHARITY_HEADER_20260803_2"


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old in text:
        return text.replace(old, new, 1)
    if new in text:
        return text
    raise RuntimeError(f"Missing patch anchor: {label}")


def patch_page() -> None:
    text = PAGE.read_text(encoding="utf-8")

    style_anchor = '  <link rel="stylesheet" href="/sitewide/css/baseline-ui-fixes.css?v=BASELINE_PROTECTED_ACCESS_20260801_3" data-baseline-ui-fixes="true">\n'
    style_block = style_anchor + f'  <link rel="stylesheet" href="/sitewide/css/baseline-live-stability.css?v={BUILD}" data-baseline-live-stability-style="true">\n'
    text = replace_once(text, style_anchor, style_block, "live stability stylesheet")

    old_header = '''      <button id="blProtectedKey" class="bl-protected-key" type="button" aria-haspopup="dialog" aria-controls="blProtectedAccessOverlay" aria-expanded="false" aria-label="Open protected sections" title="Protected sections"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg></button>
    </div>'''
    new_header = '''      <button id="blProtectedKey" class="bl-protected-key" type="button" aria-haspopup="dialog" aria-controls="blProtectedAccessOverlay" aria-expanded="false" aria-label="Open protected sections" title="Protected sections"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg></button>
      <div class="bl-homebar-spacer" aria-hidden="true"></div>
      <div class="bl-homebar-right" aria-label="Site controls">
        <button id="bl-beats-toggle" class="bl-mini-btn" type="button" aria-label="Binaural" aria-expanded="false"><span class="bl-btn-icon" aria-hidden="true"><svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2v-.2a6 6 0 0 0-12 0v.2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3v-5z"></path></svg></span><span class="bl-btn-label">Binaural</span></button>
        <button id="bl-auth-toggle" class="bl-mini-btn" type="button" aria-label="Account" aria-expanded="false"><span class="bl-btn-icon" aria-hidden="true"><svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 12.2a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8z"></path><path d="M4.8 21a7.2 7.2 0 0 1 14.4 0H4.8z"></path></svg></span><span class="bl-btn-label">Account</span></button>
      </div>
    </div>'''
    text = replace_once(text, old_header, new_header, "static Charity banner controls")

    text = text.replace(
        '/sitewide/js/baseline-protected-access.js?v=BASELINE_PROTECTED_ACCESS_20260801_3',
        f'/sitewide/js/baseline-protected-access.js?v={BUILD}',
    )
    text = text.replace(
        '/sitewide/js/baseline-shared.js?v=SITEWIDE_GRADIENT_ALIGNMENT_20260801_1',
        f'/sitewide/js/baseline-shared.js?v={BUILD}',
    )
    PAGE.write_text(text, encoding="utf-8")


def add_test() -> None:
    test_path = ROOT / "tests/charity-header-scaffold.test.mjs"
    test_path.write_text(r'''import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../systems/charity-shop/charity-shop.php', import.meta.url), 'utf8');

test('Charity banner has complete static controls in canonical order', () => {
  const dropdown = html.indexOf('class="bl-pages-dd"');
  const key = html.indexOf('id="blProtectedKey"');
  const spacer = html.indexOf('class="bl-homebar-spacer"');
  const right = html.indexOf('class="bl-homebar-right"');
  const binaural = html.indexOf('id="bl-beats-toggle"');
  const account = html.indexOf('id="bl-auth-toggle"');
  assert.ok(dropdown >= 0);
  assert.ok(dropdown < key, 'dropdown must precede protected key');
  assert.ok(key < spacer, 'key must sit immediately before flexible spacer');
  assert.ok(spacer < right, 'spacer must push controls to the right');
  assert.ok(right < binaural && binaural < account, 'Binaural and Account must exist inside right controls');
});

test('Charity loads header stability CSS directly and cache-busts shared runtime', () => {
  assert.match(html, /baseline-live-stability\.css\?v=BASELINE_CHARITY_HEADER_20260803_2/);
  assert.match(html, /baseline-protected-access\.js\?v=BASELINE_CHARITY_HEADER_20260803_2/);
  assert.match(html, /baseline-shared\.js\?v=BASELINE_CHARITY_HEADER_20260803_2/);
});
''', encoding="utf-8")

    package_path = ROOT / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    script = package["scripts"]["test:structure"]
    test_name = "tests/charity-header-scaffold.test.mjs"
    if test_name not in script:
        package["scripts"]["test:structure"] = script + " " + test_name
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")


def cleanup() -> None:
    for relative in (
        ".github/scripts/apply_charity_header_scaffold.py",
        ".github/workflows/apply-charity-header-scaffold.yml",
    ):
        path = ROOT / relative
        if path.exists():
            path.unlink()


patch_page()
add_test()
cleanup()
