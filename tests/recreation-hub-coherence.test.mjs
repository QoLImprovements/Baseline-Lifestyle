import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const core=read('systems/baseline-recreation/js/baseline-recreation-core.js');
const block=read('systems/baseline-recreation/games/block-grid/js/block-grid.js');
const puzzles=read('systems/baseline-recreation/puzzles/shared/js/puzzles-library.js');
const registry=read('systems/baseline-recreation/puzzles/shared/js/puzzles-registry.js');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const css=read('systems/baseline-recreation/css/recreation-hub-coherence.css');

test('Games catalogue uses non-interactive cards with explicit, working Open selectors',()=>{
  const list=core.slice(core.indexOf('function renderGamesList()'),core.indexOf('function requestDartsFocusedOpen('));
  assert.match(list, /<div class="game-row recreation-catalogue-row">/);
  assert.match(list, /recreation-catalogue-open/);
  for(const action of ['data-open-game-extension','data-open-darts-focused','data-open-badminton-focused','data-select-game']){
    assert.match(list,new RegExp(action));
  }
  assert.doesNotMatch(list, /<button class="game-row"/);
  assert.match(list,/game-row-info-button bl-info-button/);
  const rank=core.slice(core.indexOf('function overviewProgress('),core.indexOf('function gameMeta('));
  assert.match(rank,/Player Rank/);
  assert.doesNotMatch(rank,/Best streak|Best |solved|cleared|Stage |· [0-9]+ games|wordsSolved|puzzlesSolved/);
});

test('Puzzle type and individual jigsaw cards have one Open button and rank-only summary',()=>{
  assert.match(puzzles, /<div class="puzzle-library-row recreation-catalogue-row">/);
  assert.match(puzzles, /<button class="action ghost recreation-catalogue-open" data-puzzle-type/);
  assert.match(puzzles, /<button class="action ghost recreation-catalogue-open" data-jigsaw-id/);
  assert.match(puzzles, /Player Rank /);
  assert.doesNotMatch(puzzles, /<button class="puzzle-library-row"/);
  assert.doesNotMatch(registry, /meta:'9 jigsaws|meta:'Many generated layouts'/);
  assert.match(puzzles,/baseline:crossnumber-progress/);
  assert.match(puzzles,/baseline:jigsaw-progress/);
});

test('Concept cards are not navigation buttons and use the shared Open control',()=>{
  const concept=html.slice(html.indexOf('<div class="concept-card recreation-catalogue-row">'),html.indexOf('</div>',html.indexOf('data-open-concept="stroop-effect"'))+6);
  assert.match(concept,/recreation-catalogue-open/);
  assert.match(concept,/data-open-concept="stroop-effect"/);
  assert.doesNotMatch(concept,/<button class="concept-card"/);
});

test('Block Grid tiers match the core Games tier contract, and Skills contains no XP explanation',()=>{
  const tiers=block.slice(block.indexOf('function renderModes()'),block.indexOf('function renderSkills()'));
  const skills=block.slice(block.indexOf('function renderSkills()'),block.indexOf('function renderProgress()'));
  const progress=block.slice(block.indexOf('function renderProgress()'),block.indexOf('const BLOCK_TABS'));
  assert.match(tiers,/board-tier-list/);
  assert.match(tiers,/tier-btn/);
  assert.match(tiers,/data-block-mode/);
  assert.doesNotMatch(tiers,/block-grid-mode-list/);
  assert.doesNotMatch(skills,/Score-based progression/);
  assert.match(progress,/Score-based progression: 10 score points = 1 XP/);
});

test('A single late-loaded stylesheet owns card geometry, palette, type and progress layout',()=>{
  assert.match(html,/recreation-hub-coherence\.css\?v=RECREATION_HUB_COHERENCE_20261116_1/);
  assert.match(css,/#gamesList,#puzzlesList,#jigsawsList,#conceptsList/);
  assert.match(css,/font-family:var\(--font\)!important/);
  assert.match(css,/grid-template-columns:repeat\(4,minmax\(0,1fr\)\)!important/);
  assert.match(css,/max-width:760px/);
  assert.match(css,/max-width:540px/);
});
