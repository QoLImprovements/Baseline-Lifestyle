import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read = relativePath => readFile(path.join(root,relativePath),'utf8');

const files = {
  theme:'systems/baseline-recreation/css/recreation-theme.css',
  hub:'systems/baseline-recreation/baseline-recreation.html',
  themes:'sitewide/css/baseline-themes.css',
  hubCss:'systems/baseline-recreation/css/baseline-recreation.css',
  refinement:'systems/baseline-recreation/css/non-realm-game-refinement.css',
  musicCss:'systems/baseline-recreation/css/games-music.css',
  blockCss:'systems/baseline-recreation/games/block-grid/css/block-grid.css',
  colourCss:'systems/baseline-recreation/games/colour-sort/css/colour-sort.css',
  blockJs:'systems/baseline-recreation/games/block-grid/js/block-grid.js',
  colourJs:'systems/baseline-recreation/games/colour-sort/js/colour-sort.js'
};

const recreation = Object.freeze({
  deep:'#2A0B16',
  rich:'#6E1D34',
  copper:'#9E4D38',
  copperLight:'#B86A50',
  card:'#4A1426',
  panel:'#5B1A2E',
  ink:'#FFF4EF'
});

const retiredThemeBlue = /#(?:080d22|4656a6|8ca7ff|afc0ed|f2f5ff|dfeaff|0b1434|5d78d4|8ca4f0|5571ce|7891e6|a1b4ff|23335f|a9b9f4|304277|1e2d59|17234a|101737|1d2a43)\b|rgba?\(\s*(?:140\s*,\s*167\s*,\s*255|70\s*,\s*86\s*,\s*166|115\s*,\s*139\s*,\s*215|126\s*,\s*147\s*,\s*219|10\s*,\s*20\s*,\s*58|5\s*,\s*12\s*,\s*35|12\s*,\s*21\s*,\s*50|13\s*,\s*22\s*,\s*53|13\s*,\s*20\s*,\s*45|4\s*,\s*9\s*,\s*28|16\s*,\s*24\s*,\s*39|12\s*,\s*19\s*,\s*44|15\s*,\s*25\s*,\s*55|178\s*,\s*190\s*,\s*255|59\s*,\s*70\s*,\s*110|79\s*,\s*91\s*,\s*125|127\s*,\s*150\s*,\s*185|126\s*,\s*135\s*,\s*158|151\s*,\s*174\s*,\s*207|111\s*,\s*136\s*,\s*173|23\s*,\s*32\s*,\s*51)/i;

function luminance(hex){
  const values = hex.slice(1).match(/../g).map(value => parseInt(value,16) / 255);
  const linear = values.map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126 * linear[0] + .7152 * linear[1] + .0722 * linear[2];
}

function contrast(a,b){
  const values = [luminance(a),luminance(b)].sort((left,right) => right - left);
  return (values[0] + .05) / (values[1] + .05);
}

test('Recreation uses the Option 4 blackened-burgundy to burnt-copper mirror',async()=>{
  const [themes,theme,hub] = await Promise.all([
    read(files.themes),read(files.theme),read(files.hub)
  ]);
  Object.values(recreation).forEach(colour => assert.match(themes,new RegExp(colour,'i'),colour));
  assert.match(themes,/--recreation-mirror:linear-gradient\(90deg,#2A0B16 0%,#6E1D34 25%,#9E4D38 50%,#6E1D34 75%,#2A0B16 100%\)/);
  assert.match(theme,/Blackened Burgundy–Burnt Copper palette authority/);
  assert.doesNotMatch(theme,/--games-(?:teal|orange|gold)/);
  assert.match(hub,/theme-color" content="#2A0B16"/);
  assert.match(hub,/linear-gradient\(90deg,#2A0B16 0%,#6E1D34 25%,#9E4D38 50%,#6E1D34 75%,#2A0B16 100%\)/);
});

test('theme-facing Games CSS contains no retired indigo/navy chrome',async()=>{
  const sources = await Promise.all([
    read(files.hubCss),
    read(files.refinement),
    read(files.musicCss),
    read(files.blockCss),
    read(files.colourCss)
  ]);
  sources.forEach(source => assert.doesNotMatch(source,retiredThemeBlue));
});

test('Block Grid and Colour Sort consume the Recreation theme instead of owning a blue shell',async()=>{
  const [blockCss,colourCss] = await Promise.all([read(files.blockCss),read(files.colourCss)]);
  [
    '--recreation-burgundy-rgb',
    '--recreation-rose-rgb',
    '--recreation-copper-light-rgb'
  ].forEach(token => {
    assert.ok(blockCss.includes(token),`Block Grid missing ${token}`);
    assert.ok(colourCss.includes(token),`Colour Sort missing ${token}`);
  });
  assert.match(colourCss,/\[data-colour="4"\]\{background:#3e70cb\}/i,
    'Colour Sort may retain blue as a puzzle liquid colour, not as interface chrome');
});

test('Block Grid and Colour Sort overview art use the Recreation frame palette',async()=>{
  const art = [
    'systems/baseline-recreation/games/block-grid/art/block-grid-overview.svg',
    'systems/baseline-recreation/games/colour-sort/art/colour-sort-overview.svg'
  ];
  for(const file of art){
    const source = await read(file);
    assert.match(source,/#2A0B16/i,file);
    assert.match(source,/#9E4D38/i,file);
    assert.match(source,/#B86A50/i,file);
    assert.doesNotMatch(source,retiredThemeBlue,file);
  }
});

test('all Games overview artwork is free of the retired G01 frame palette',async()=>{
  const art = [
    'systems/baseline-recreation/games/overview-art/detect-the-word.svg',
    'systems/baseline-recreation/games/overview-art/make-the-number.svg',
    'systems/baseline-recreation/games/overview-art/pairs.svg',
    'systems/baseline-recreation/games/overview-art/rule-shift.svg',
    'systems/baseline-recreation/games/overview-art/track-the-coin.svg',
    'systems/baseline-recreation/games/overview-art/baseline-realm.svg',
    'systems/baseline-recreation/games/darts-focused/art/realistic-dartboard.svg',
    'systems/baseline-recreation/games/badminton-focused/art/badminton-focused-overview.svg',
    'systems/baseline-recreation/games/block-grid/art/block-grid-overview.svg',
    'systems/baseline-recreation/games/colour-sort/art/colour-sort-overview.svg'
  ];
  for(const file of art){
    const source = await read(file);
    assert.doesNotMatch(source,retiredThemeBlue,file);
  }
});

test('Block Grid and Colour Sort asset URLs are versioned for the new palette',async()=>{
  const [hub,blockJs,colourJs] = await Promise.all([
    read(files.hub),read(files.blockJs),read(files.colourJs)
  ]);
  assert.match(blockJs,/block-grid-overview\.svg\?v=RECREATION_BURGUNDY_BURNT_COPPER_20261022_2/);
  assert.match(blockJs,/block-grid\.css\?v=BLOCK_GRID_SCORE_XP_SKILLS_20261024_1/);
  assert.match(colourJs,/colour-sort-overview\.svg\?v=RECREATION_BURGUNDY_BURNT_COPPER_20261022_2/);
  assert.match(colourJs,/colour-sort\.css\?v=COLOUR_SORT_MOBILE_PLAYABILITY_20261024_1/);
  assert.match(hub,/block-grid\.js\?v=BLOCK_GRID_SCORE_XP_SKILLS_20261024_1/);
  assert.match(hub,/colour-sort\.js\?v=COLOUR_SORT_MOBILE_PLAYABILITY_20261024_1/);
});

test('normal text passes WCAG AA at every mirror-gradient stop',()=>{
  [recreation.deep,recreation.rich,recreation.copper].forEach(
    background => assert.ok(contrast(recreation.ink,background) >= 4.5,background)
  );
  assert.ok(contrast(recreation.ink,recreation.card) >= 4.5);
  assert.ok(contrast(recreation.ink,recreation.panel) >= 4.5);
  assert.ok(contrast(recreation.deep,recreation.copperLight) >= 4.5);
});
