from __future__ import annotations

from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[2]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        if new in text:
            return text
        raise RuntimeError(f"Missing patch anchor: {label}")
    return text.replace(old, new, 1)


def patch_charity_html() -> None:
    path = ROOT / "systems/charity-shop/charity-shop.php"
    text = path.read_text(encoding="utf-8")
    old = '''  <script defer src="/sitewide/js/baseline-protected-access.js?v=BASELINE_CHARITY_HEADER_20260803_2"></script>
  <script defer src="/sitewide/js/baseline-shared.js?v=BASELINE_CHARITY_HEADER_20260803_2"></script>'''
    new = '''  <script defer src="/sitewide/js/baseline-protected-access.js?v=BASELINE_CHARITY_HEADER_20260803_3"></script>
  <script defer src="/sitewide/js/baseline-api.js?v=SITEWIDE_API_BOUNDARY_20260802_1"></script>
  <script defer src="/sitewide/js/baseline-store.js?v=SITEWIDE_STORE_BOUNDARY_20260802_1"></script>
  <script defer src="/sitewide/js/baseline-auth.js?v=SITEWIDE_AUTH_CLIENT_20260802_1"></script>
  <script defer src="/sitewide/js/baseline-shared.js?v=BASELINE_CHARITY_HEADER_20260803_3"></script>'''
    text = replace_once(text, old, new, "Charity shared-runtime dependencies")
    path.write_text(text, encoding="utf-8")


def patch_cash_css() -> None:
    path = ROOT / "systems/charity-shop/css/charity-shop-cashing-and-artwork.css"
    text = path.read_text(encoding="utf-8")
    marker = "CHARITY-CASH-TO-BANK-WHITE-20260803"
    if marker in text:
        return
    text += f'''

/* {marker}: the final Cash To Bank label and amount remain white. */
html body[data-app="charity-shop"] .charity-total-line--final,
html body[data-app="charity-shop"] .charity-total-line--final span,
html body[data-app="charity-shop"] .charity-total-line--final output{{
  color:#fff!important;
  -webkit-text-fill-color:#fff!important;
}}
'''
    path.write_text(text, encoding="utf-8")


def add_test_and_register() -> None:
    test_path = ROOT / "tests/charity-header-runtime.test.mjs"
    test_path.write_text('''import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../systems/charity-shop/charity-shop.php', import.meta.url), 'utf8');
const cashCss = readFileSync(new URL('../systems/charity-shop/css/charity-shop-cashing-and-artwork.css', import.meta.url), 'utf8');

test('Charity loads account and Binaural dependencies before the shared runtime', () => {
  const api = html.indexOf('/sitewide/js/baseline-api.js');
  const store = html.indexOf('/sitewide/js/baseline-store.js');
  const auth = html.indexOf('/sitewide/js/baseline-auth.js');
  const shared = html.indexOf('/sitewide/js/baseline-shared.js');
  assert.ok(api >= 0 && store >= 0 && auth >= 0 && shared >= 0);
  assert.ok(api < store && store < auth && auth < shared);
  assert.match(html, /baseline-shared\.js\?v=BASELINE_CHARITY_HEADER_20260803_3/);
});

test('Cash To Bank final label and amount are explicitly white', () => {
  assert.match(cashCss, /CHARITY-CASH-TO-BANK-WHITE-20260803/);
  assert.match(cashCss, /\.charity-total-line--final span/);
  assert.match(cashCss, /-webkit-text-fill-color:#fff!important/);
});
''', encoding="utf-8")

    package_path = ROOT / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    script = package["scripts"]["test:structure"]
    test_name = "tests/charity-header-runtime.test.mjs"
    if test_name not in script:
        package["scripts"]["test:structure"] = script + " " + test_name
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")


def cleanup() -> None:
    for relative in (
        ".github/scripts/apply_charity_runtime_fix.py",
        ".github/workflows/apply-charity-runtime-fix.yml",
    ):
        path = ROOT / relative
        if path.exists():
            path.unlink()


def main() -> None:
    patch_charity_html()
    patch_cash_css()
    add_test_and_register()
    cleanup()


if __name__ == "__main__":
    main()
