import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read = relativePath => readFile(path.join(root,relativePath),'utf8');

const files = {
  theme:'systems/baseline-games-hub/css/games-hub-theme.css',
  hub:'systems/baseline-games-hub/baseline-games-hub.html',
  core:'systems/baseline-games-hub/js/baseline-games-hub-core.js',
  registry:'systems/baseline-games-hub/js/games-registry.js',
  home:'sitewide/css/baseline-home.css',
  themes:'sitewide/css/baseline-themes.css',
  sitewide:'sitewide/css/baseline-sitewide.css',
  alignment:'sitewide/css/baseline-gradient-alignment.css',
  shared:'sitewide/js/baseline-shared.js',
  protectedCss:'sitewide/css/baseline-protected-access.css',
  protectedJs:'sitewide/js/baseline-protected-access.js',
  hubCss:'systems/baseline-games-hub/css/baseline-games-hub.css',
  realmBasecampCss:'systems/baseline-games-hub/games/baseline-realm/basecamp/css/basecamp.css',
  realmNinjaCss:'systems/baseline-games-hub/games/baseline-realm/ninja-training/css/ninja-training.css',
  musicCss:'systems/baseline-games-hub/css/games-music.css',
  musicJs:'systems/baseline-games-hub/js/games-music.js'
};

const g01 = Object.freeze({
  deep:'#080D22',
  mid:'#1E2759',
  centre:'#4656A6',
  active:'#526BC2',
  focus:'#8CA7FF',
  card:'#1A244D',
  ink:'#F2F5FF'
});

function luminance(hex){
  const values = hex.slice(1).match(/../g).map(value => parseInt(value,16) / 255);
  const linear = values.map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * linear[0] + .7152 * linear[1] + .0722 * linear[2];
}

function contrast(a,b){
  const values = [luminance(a),luminance(b)].sort((left,right) => right - left);
  return (values[0] + .05) / (values[1] + .05);
}

test('G01 is the final Games Hub palette authority',async()=>{
  const theme = await read(files.theme);
  Object.values(g01).forEach(colour => assert.match(theme,new RegExp(colour,'i'),colour));
  assert.match(theme,/--g01-mirror:linear-gradient\(90deg,#080D22 0%,#1E2759 25%,#4656A6 50%,#1E2759 75%,#080D22 100%\)/);
  assert.match(theme,/--games-card-gradient:var\(--g01-card\)/);
  assert.match(theme,/#gamesList \.game-row\{[\s\S]*?background:var\(--g01-card\)!important;[\s\S]*?background-image:none!important;/);
  ['#153d44','#235f63','#4f8476','#cc694b','#e99455','#f4c56c','#173438','#fff4df'].forEach(
    retired => assert.doesNotMatch(theme,new RegExp(retired,'i'),retired)
  );
});

test('sitewide Games fallbacks, homepage card and first paint use G01',async()=>{
  const [hub,home,themes,sitewide] = await Promise.all([
    read(files.hub),read(files.home),read(files.themes),read(files.sitewide)
  ]);
  assert.match(hub,/theme-color" content="#080D22"/);
  assert.match(hub,/games-hub-theme\.css\?v=G01_INDIGO_CIRCUIT_20260801_3/);
  assert.match(home,/--games-card-bg:linear-gradient\(90deg,[\s\S]*?var\(--games-deep\) 0%,[\s\S]*?var\(--games-mid\) 25%,[\s\S]*?var\(--games-soft\) 50%,[\s\S]*?var\(--games-mid\) 75%,[\s\S]*?var\(--games-deep\) 100%/);
  assert.match(themes,/--games-page-gradient:linear-gradient\(90deg,#080D22 0%,#1E2759 25%,#4656A6 50%,#1E2759 75%,#080D22 100%\)/);
  assert.match(sitewide,/--bl-flyout-bg-image:linear-gradient\(90deg,#080D22 0%,#1E2759 25%,#4656A6 50%,#1E2759 75%,#080D22 100%\)!important/);
});

test('dropdown, tabs, banner controls, Account, Binaural and Realm controls are covered by their canonical owners',async()=>{
  const [theme,realmBasecampCss,realmNinjaCss] = await Promise.all([
    read(files.theme),read(files.realmBasecampCss),read(files.realmNinjaCss)
  ]);
  [
    '.bl-pages-btn','.bl-pages-menu','.bl-pages-link','#bl-auth-flyout .card',
    '#bl-beats-flyout .card','.bl-flyout .bl-select-menu [role="option"]',
    '.tab','.action'
  ].forEach(selector => assert.ok(theme.includes(selector),selector));
  assert.ok(realmBasecampCss.includes('#ninjaPanel #realmBasecampScreen .realm-location-button'));
  assert.ok(realmNinjaCss.includes('#ninjaPanel .realm-combat-btn'));
});

test('remaining Hub summaries, Darts panels and core game surfaces use G01',async()=>{
  const theme = await read(files.theme);
  [
    '.game-info-details summary','.game-summary-details summary','.stat-pill','.empty-box',
    '.darts-scenario-header','.darts-scenario-facts span','.darts-coaching-note',
    '.trackcoin-scene','.ruleshift-rule-card','.number-chip'
  ].forEach(selector => assert.ok(theme.includes(selector),selector));
  assert.match(theme,/\.game-info-details summary[\s\S]*?background:var\(--g01-mirror\)!important/);
  assert.match(theme,/\.darts-scenario-header[\s\S]*?background:var\(--g01-card\)!important/);
});

test('Games Hub stylesheet contains no malformed Pairs colour declaration',async()=>{
  const hubCss = await read(files.hubCss);
  assert.doesNotMatch(hubCss,/color:\s*var\(--games-panel\)3e8/i);
  assert.match(hubCss,/body\[data-app="games"\] \.memory-card-back\{[\s\S]*?color:#F3F0EA!important;/);
});

test('Games cards are flat and Pairs symbols remain fully visible',async()=>{
  const theme = await read(files.theme);
  assert.match(theme,/The site's cards are flat reading surfaces/);
  assert.match(theme,/\.card,\.game-card,\.game-row[\s\S]*?box-shadow:none!important/);
  assert.match(theme,/\.card,\.game-card,\.game-row[\s\S]*?\)::after\{[\s\S]*?content:none!important;[\s\S]*?display:none!important/);
  assert.match(theme,/\.memory-card\[disabled\]\{[\s\S]*?opacity:1!important;[\s\S]*?filter:none!important/);
  assert.match(theme,/\.memory-card-face,[\s\S]*?color:var\(--g01-ink\)!important;[\s\S]*?text-shadow:none!important/);
});

test('every system shares viewport-aligned gradients, canonical header geometry and themed scrollbars',async()=>{
  const [alignment,shared,hub] = await Promise.all([
    read(files.alignment),read(files.shared),read(files.hub)
  ]);
  assert.match(alignment,/background-size:100vw 100vh!important;/);
  assert.match(alignment,/background-position:left top!important;/);
  assert.match(alignment,/\.hero-inner\{[\s\S]*?width:min\(var\(--bl-maxw\),calc\(100% - var\(--bl-gutter\)\)\)!important;/);
  assert.match(alignment,/\.hero>\.tabs\{[\s\S]*?margin:10px auto 0!important;[\s\S]*?padding:0 var\(--bl-hero-pad-x\) 12px!important;/);
  assert.match(alignment,/scrollbar-color:var\(--scroll-thumb,var\(--accent\)\) var\(--scroll-track,var\(--bg\)\)!important;/);
  assert.match(shared,/ensureGradientAlignmentStylesheet/);
  assert.match(shared,/BASELINE_GRADIENT_ALIGNMENT_20260801_1/);
  assert.match(hub,/data-baseline-gradient-alignment="true"/);
});

test('Digital Code remains universal and cannot inherit a system theme',async()=>{
  const [theme,protectedCss,protectedJs] = await Promise.all([
    read(files.theme),read(files.protectedCss),read(files.protectedJs)
  ]);
  assert.match(theme,/:not\(\.bl-protected-access-overlay \*\)/);
  assert.match(protectedCss,/html body\[data-app\] \.bl-protected-code-row input\{[\s\S]*?background:linear-gradient\(180deg,#5d5c63 0%,#3d3c41 100%\)!important;/);
  assert.doesNotMatch(protectedCss,/--index-games-gradient|\.card--games|\.home-panel--play/);
  assert.match(protectedJs,/addStylesheet\('\/sitewide\/css\/baseline-protected-access\.css[\s\S]*?true\);/);
});

test('all eight Games overview images are versioned and carry G01 artwork',async()=>{
  const registry = await read(files.registry);
  assert.equal((registry.match(/G01_INDIGO_CIRCUIT_20260801_1/g) || []).length,8);
  const art = [
    'systems/baseline-games-hub/games/overview-art/detect-the-word.svg',
    'systems/baseline-games-hub/games/overview-art/make-the-number.svg',
    'systems/baseline-games-hub/games/overview-art/pairs.svg',
    'systems/baseline-games-hub/games/overview-art/rule-shift.svg',
    'systems/baseline-games-hub/games/overview-art/track-the-coin.svg',
    'systems/baseline-games-hub/games/overview-art/baseline-realm.svg',
    'systems/baseline-games-hub/games/darts-focused/art/realistic-dartboard.svg',
    'systems/baseline-games-hub/games/badminton-focused/art/badminton-focused-overview.svg'
  ];
  for(const file of art){
    const source = await read(file);
    assert.match(source,/#(?:080D22|1E2759|4656A6|526BC2|8CA7FF|1A244D|F2F5FF)/i,file);
  }
});

test('normal text passes WCAG AA at every mirror-gradient stop',()=>{
  [g01.deep,g01.mid,g01.centre].forEach(
    background => assert.ok(contrast(g01.ink,background) >= 4.5,background)
  );
  ['#0B1330','#2A3672','#5666BC'].forEach(
    background => assert.ok(contrast(g01.ink,background) >= 4.5,background)
  );
  assert.ok(contrast(g01.ink,g01.card) >= 4.5);
  assert.ok(contrast(g01.deep,g01.focus) >= 4.5);
});


test('Games music settings presentation is statically owned by its stylesheet',async()=>{
  const [hub,musicCss,musicJs] = await Promise.all([
    read(files.hub),read(files.musicCss),read(files.musicJs)
  ]);
  assert.match(hub,/games-music\.css\?v=GAMES_MUSIC_STATIC_STYLES_20261020_1/);
  assert.match(musicCss,/\.games-settings-trigger\{/);
  assert.match(musicCss,/\.games-music-settings-dialog\{/);
  assert.doesNotMatch(musicJs,/createElement\s*\(\s*['"]style['"]\s*\)/);
  assert.doesNotMatch(musicJs,/ensureStyles\s*\(/);
});
