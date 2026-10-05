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

test('public system header controls exist in initial HTML and Voice is Fitness-only', () => {
  for (const path of publicPages) {
    const html = readFileSync(path, 'utf8');
    for (const id of ['blProtectedKey','bl-beats-toggle','bl-auth-toggle']) {
      assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1);
    }
    const voiceCount=(html.match(/id="bl-voice-toggle"/g)||[]).length;
    assert.equal(voiceCount, path.includes('/baseline-fitness/') ? 1 : 0);
    assert.match(html, /class="bl-homebar-right" aria-label="Site controls"/);
    assert.match(html, /id="bl-auth-toggle"[^>]*aria-label="Account"/);
    assert.match(html, /<span class="bl-btn-label">Account<\/span>/);
    assert.doesNotMatch(html, /id="bl-auth-toggle"[^>]*aria-label="Login"/);
  }
});

test('Home has no Voice control or Voice panel assets', () => {
  const html = readFileSync('index.html', 'utf8');
  for (const id of ['blProtectedKey','bl-auth-toggle']) {
    assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1);
  }
  assert.equal((html.match(/id="bl-beats-toggle"/g) || []).length, 0);
  assert.equal((html.match(/id="bl-voice-toggle"/g) || []).length, 0);
  assert.match(html, /id="bl-auth-toggle"[^>]*aria-label="Account"/);
  assert.match(html, /<span class="bl-btn-label">Account<\/span>/);
  assert.doesNotMatch(html, /baseline-voice\.css|data-baseline-voice-style/);
  assert.match(html, /data-initial-home-view/);
  const css = readFileSync('sitewide/css/baseline-home.css', 'utf8');
  assert.match(css, /\.bl-top-header > \.bl-homebar-right\s*\{[^}]*position:absolute;[^}]*top:14px;[^}]*right:14px;/s);
  assert.match(css, /html\[data-initial-home-view="badminton"\] #badmintonView\s*\{[^}]*opacity:1;[^}]*visibility:visible;/s);
});


test('shared header runtime never swaps the Account label based on auth state', () => {
  const shared = readFileSync('sitewide/js/baseline-shared.js','utf8');
  assert.match(shared,/function currentAuthButtonLabel\(\)\{\s*return 'Account';\s*\}/);
  assert.match(shared,/const bannerLabel = 'Account'/);
  assert.doesNotMatch(shared,/authed \? 'Account' : 'Login'/);
});
