import test from 'node:test';
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
