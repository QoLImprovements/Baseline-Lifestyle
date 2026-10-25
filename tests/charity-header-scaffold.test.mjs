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

test('Charity uses canonical header styling and cache-busts shared runtime', () => {
  assert.doesNotMatch(html, /baseline-live-stability\.css/);
  assert.match(html, /baseline-header-canonical\.css/);
  assert.match(html, /baseline-protected-access\.js\?v=SAVED_DATA_REVISION_CLIENT_20260823_1/);
  assert.match(html, /baseline-shared\.js\?v=SITEWIDE_SHARED_RECIPE_HISTORY_20261025_1/);
});
