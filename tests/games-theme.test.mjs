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
  home:'sitewide/css/baseline-home.css',
  themes:'sitewide/css/baseline-themes.css',
  sitewide:'sitewide/css/baseline-sitewide.css'
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
  assert.match(hub,/G01_INDIGO_CIRCUIT_20260801_1/);
  assert.match(home,/--games-card-bg:linear-gradient\(90deg,[\s\S]*?var\(--games-deep\) 0%,[\s\S]*?var\(--games-mid\) 25%,[\s\S]*?var\(--games-soft\) 50%,[\s\S]*?var\(--games-mid\) 75%,[\s\S]*?var\(--games-deep\) 100%/);
  assert.match(themes,/--games-page-gradient:linear-gradient\(90deg,#080D22 0%,#1E2759 25%,#4656A6 50%,#1E2759 75%,#080D22 100%\)/);
  assert.match(sitewide,/--bl-flyout-bg-image:linear-gradient\(90deg,#080D22 0%,#1E2759 25%,#4656A6 50%,#1E2759 75%,#080D22 100%\)!important/);
});

test('dropdown, tabs, banner controls, Account, Binaural and Realm controls are covered',async()=>{
  const theme = await read(files.theme);
  [
    '.bl-pages-btn','.bl-pages-menu','.bl-pages-link','#bl-auth-flyout .card',
    '#bl-beats-flyout .card','.bl-flyout .bl-select-menu [role="option"]',
    '.tab','#ninjaPanel .jrpg-game button','#realmBasecampScreen .realm-location-button'
  ].forEach(selector => assert.ok(theme.includes(selector),selector));
});

test('all eight Games overview images are versioned and carry G01 artwork',async()=>{
  const core = await read(files.core);
  assert.equal((core.match(/G01_INDIGO_CIRCUIT_20260801_1/g) || []).length,8);
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
