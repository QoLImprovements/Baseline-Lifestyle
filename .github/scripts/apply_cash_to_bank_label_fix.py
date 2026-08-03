from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        if new in text:
            return text
        raise RuntimeError(f"Missing patch anchor: {label}")
    return text.replace(old, new, 1)


php_path = ROOT / "systems/charity-shop/charity-shop.php"
php = php_path.read_text(encoding="utf-8")
php = replace_once(
    php,
    '/systems/charity-shop/css/charity-shop-cashing-and-artwork.css?v=CHARITY_CASHING_20260801_1',
    '/systems/charity-shop/css/charity-shop-cashing-and-artwork.css?v=CHARITY_CASHING_20260803_2',
    'cashing stylesheet cache key',
)

marker = 'CHARITY-CASH-TO-BANK-INLINE-AUTHORITY-20260803'
inline_style = '''  <style id="charityCashToBankWhiteAuthority">
    /* CHARITY-CASH-TO-BANK-INLINE-AUTHORITY-20260803: final visual authority after all linked styles. */
    html body[data-app="charity-shop"] #operations-cashing .charity-total-line--final > span,
    html body[data-app="charity-shop"] #operations-cashing .charity-total-line--final > output,
    html body[data-app="charity-shop"] #charityCashToBank{
      color:#fff!important;
      -webkit-text-fill-color:#fff!important;
    }
  </style>
'''
if marker not in php:
    anchor = '  <link rel="stylesheet" href="/sitewide/css/baseline-gradient-alignment.css?v=BASELINE_GRADIENT_ALIGNMENT_20260801_1" data-baseline-gradient-alignment="true">\n'
    php = replace_once(php, anchor, anchor + inline_style, 'final inline colour authority')
php_path.write_text(php, encoding="utf-8")


test_path = ROOT / "tests/charity-header-runtime.test.mjs"
test = test_path.read_text(encoding="utf-8")
old_test = '''test('Cash To Bank final label and amount are explicitly white', () => {
  assert.match(cashCss, /CHARITY-CASH-TO-BANK-WHITE-20260803/);
  assert.match(cashCss, /\\.charity-total-line--final span/);
  assert.match(cashCss, /-webkit-text-fill-color:#fff!important/);
});'''
new_test = '''test('Cash To Bank final label and amount are explicitly white with a fresh cache key', () => {
  assert.match(cashCss, /CHARITY-CASH-TO-BANK-WHITE-20260803/);
  assert.match(cashCss, /\\.charity-total-line--final span/);
  assert.match(cashCss, /-webkit-text-fill-color:#fff!important/);
  assert.match(html, /charity-shop-cashing-and-artwork\\.css\\?v=CHARITY_CASHING_20260803_2/);
  assert.match(html, /CHARITY-CASH-TO-BANK-INLINE-AUTHORITY-20260803/);
  assert.match(html, /#operations-cashing \\.charity-total-line--final > span/);
  assert.match(html, /#charityCashToBank/);
});'''
test = replace_once(test, old_test, new_test, 'Cash To Bank regression test')
test_path.write_text(test, encoding="utf-8")

for relative in (
    ".github/scripts/apply_cash_to_bank_label_fix.py",
    ".github/workflows/apply-cash-to-bank-label-fix.yml",
):
    target = ROOT / relative
    if target.exists():
        target.unlink()
