import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../systems/charity-shop/charity-shop.php', import.meta.url), 'utf8');
const presentationCss = readFileSync(new URL('../systems/charity-shop/css/charity-shop-presentation.css', import.meta.url), 'utf8');

test('Charity loads account and Binaural dependencies before the shared runtime', () => {
  const api = html.indexOf('/sitewide/js/baseline-api.js');
  const store = html.indexOf('/sitewide/js/baseline-store.js');
  const auth = html.indexOf('/sitewide/js/baseline-auth.js');
  const shared = html.indexOf('/sitewide/js/baseline-shared.js');
  assert.ok(api >= 0 && store >= 0 && auth >= 0 && shared >= 0);
  assert.ok(api < store && store < auth && auth < shared);
  assert.match(html, /baseline-shared\.js\?v=SITEWIDE_SHARED_RECIPE_HISTORY_20261025_1/);
});

test('Cash To Bank final label and amount are owned by the Charity presentation stylesheet', () => {
  assert.match(presentationCss, /\.charity-total-line--final > span,/);
  assert.match(presentationCss, /\.charity-total-line--final > output/);
  assert.match(presentationCss, /color:#fff!important/);
  assert.match(presentationCss, /-webkit-text-fill-color:#fff!important/);
  assert.match(html, /charity-shop-presentation\.css\?v=CHARITY_PRESENTATION_SINGLE_AUTHORITY_20261022_1/);
  assert.doesNotMatch(html, /charityCashToBankWhiteAuthority|CHARITY-CASH-TO-BANK-INLINE-AUTHORITY/);
});
