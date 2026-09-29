import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const publicPages = [
  'systems/baseline-food-approach/baseline-food-approach.html',
  'systems/baseline-natural-skincare/baseline-natural-skincare.html',
  'systems/baseline-fitness/baseline-fitness.html',
  'systems/baseline-badminton-session/baseline-badminton-session.html',
  'systems/baseline-games-hub/baseline-games-hub.html',
  'systems/baseline-massage/baseline-massage.html'
];

test('public system header controls exist in initial HTML', () => {
  for (const path of publicPages) {
    const html = readFileSync(path, 'utf8');
    for (const id of ['blProtectedKey','bl-beats-toggle','bl-voice-toggle','bl-auth-toggle']) {
      assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1);
    }
    assert.match(html, /class="bl-homebar-right" aria-label="Site controls"/);
  }
});

test('Home authors its visible controls before shared JavaScript runs', () => {
  const html = readFileSync('index.html', 'utf8');
  for (const id of ['blProtectedKey','bl-voice-toggle','bl-auth-toggle']) {
    assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1);
  }
  assert.equal((html.match(/id="bl-beats-toggle"/g) || []).length, 0);
  const css = readFileSync('sitewide/css/baseline-home.css', 'utf8');
  assert.match(css, /\.bl-top-header > \.bl-homebar-right\s*\{[^}]*position:absolute;[^}]*top:14px;[^}]*right:14px;/s);
});
