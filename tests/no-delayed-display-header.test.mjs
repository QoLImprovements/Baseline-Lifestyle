import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const publicPages = [
  'systems/baseline-food-approach/baseline-food-approach.html',
  'systems/baseline-natural-skincare/baseline-natural-skincare.html',
  'systems/baseline-psychology/baseline-psychology.html',
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

test('Home exposes the final single-page header and no retired view-switch state', () => {
  const html = readFileSync('index.html', 'utf8');
  for (const id of ['blProtectedKey','bl-auth-toggle']) {
    assert.equal((html.match(new RegExp('id="' + id + '"', 'g')) || []).length, 1);
  }
  assert.equal((html.match(/id="bl-beats-toggle"/g) || []).length, 0);
  assert.equal((html.match(/id="bl-voice-toggle"/g) || []).length, 0);
  assert.match(html, /id="bl-auth-toggle"[^>]*aria-label="Account"/);
  assert.match(html, /<span class="bl-btn-label">Account<\/span>/);
  assert.doesNotMatch(html, /baseline-voice\.css|data-baseline-voice-style/);
  assert.match(html, /class="home-systems"/);
  assert.equal((html.match(/class="system-lane /g) || []).length, 6);
  assert.doesNotMatch(html, /data-initial-home-view|id="badmintonView"|id="systemsView"|view-arrow/);
  const css = readFileSync('sitewide/css/baseline-home.css', 'utf8');
  const protectedCss = readFileSync('sitewide/css/baseline-protected-access.css', 'utf8');
  assert.match(css, /\.bl-top-header\s*\{[^}]*display:grid;[^}]*grid-template-columns:minmax\(0,1fr\) auto minmax\(0,1fr\);[^}]*grid-template-areas:"key title controls";[^}]*padding:24px var\(--pad\) 22px;[^}]*background:linear-gradient\(180deg,#1f1e1c 0%,#2b2a27 55%,#353431 100%\)/s);
  assert.match(css, /\.bl-top-header-title\s*\{[^}]*grid-area:title;/s);
  assert.match(css, /\.domain\s*\{[^}]*font-size:clamp\(42px, 5\.6vw, 60px\);[^}]*white-space:nowrap;/s);
  assert.match(css, /@media \(max-width:1350px\) and \(min-width:901px\)[\s\S]*?\.domain\{ font-size:44px; \}/);
  assert.match(protectedCss, /html body\[data-app="home"\] \.bl-top-header > \.bl-protected-key\s*\{[^}]*grid-area:key;[^}]*position:relative!important;[^}]*left:auto!important;[^}]*top:auto!important;[^}]*transform:none!important;[^}]*justify-self:start!important;/s);
  assert.match(protectedCss, /html body\[data-app="home"\] \.bl-top-header > \.bl-homebar-right\s*\{[^}]*grid-area:controls;[^}]*position:relative!important;[^}]*top:auto!important;[^}]*right:auto!important;[^}]*transform:none!important;[^}]*justify-self:end!important;/s);
  for (const selector of ['massage','fitness','games']) {
    assert.match(css, new RegExp('\\.card--' + selector + '[\\s\\S]*?-webkit-text-fill-color:#fff'));
  }
  assert.match(css, /\.card--games[\s\S]*?text-shadow:none;/);
  assert.doesNotMatch(css, /data-initial-home-view|#badmintonView|#systemsView|view-arrow/);
});


test('shared header runtime never swaps the Account label based on auth state', () => {
  const shared = readFileSync('sitewide/js/baseline-shared.js','utf8');
  assert.match(shared,/function currentAuthButtonLabel\(\)\{\s*return 'Account';\s*\}/);
  assert.match(shared,/const bannerLabel = 'Account'/);
  assert.doesNotMatch(shared,/authed \? 'Account' : 'Login'/);
});


test('canonical header keeps one overflow-visible authority for the banner containers', () => {
  const css = readFileSync('sitewide/css/baseline-header-canonical.css','utf8');
  const matches = css.match(/\.bl-homebar,\s*\.bl-homebar-inner,\s*\.bl-pages-dd\s*\{\s*overflow:visible!important;\s*\}/g) || [];
  assert.equal(matches.length,1);
});
