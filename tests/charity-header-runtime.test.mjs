import test from 'node:test';
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
  assert.match(html, /baseline-shared\.js\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
});

test('Cash To Bank final label and amount are explicitly white with a fresh cache key', () => {
  assert.match(cashCss, /CHARITY-CASH-TO-BANK-WHITE-20260803/);
  assert.match(cashCss, /\.charity-total-line--final span/);
  assert.match(cashCss, /-webkit-text-fill-color:#fff!important/);
  assert.match(html, /charity-shop-cashing-and-artwork\.css\?v=CHARITY_CSS_CONSOLIDATED_20261020_1/);
  assert.match(html, /CHARITY-CASH-TO-BANK-INLINE-AUTHORITY-20260803/);
  assert.match(html, /#operations-cashing \.charity-total-line--final > span/);
  assert.match(html, /#charityCashToBank/);
});
