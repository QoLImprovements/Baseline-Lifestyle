import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const at = relative => readFileSync(fileURLToPath(new URL('../' + relative, import.meta.url)), 'utf8');
const music = at('systems/baseline-recreation/js/games-music.js');
const dock = at('systems/baseline-recreation/css/non-realm-game-refinement.css');
const blockCss = at('systems/baseline-recreation/games/block-grid/css/block-grid.css');
const blockJs = at('systems/baseline-recreation/games/block-grid/js/block-grid.js');
const crossCss = at('systems/baseline-recreation/puzzles/crossnumber/css/crossnumber.css');
const crossJs = at('systems/baseline-recreation/puzzles/crossnumber/js/crossnumber.js');
const html = at('systems/baseline-recreation/baseline-recreation.html');

test('restore only the effective late-October gentle tracks alongside all ten November compositions', () => {
  const modernMatch=music.match(/var TRACKS = (\{[\s\S]*?\});\s+var RECENT_TRACKS/);
  const recoveredMatch=music.match(/var RECENT_TRACKS = (\{[^\n]*\});/);
  assert.ok(modernMatch&&recoveredMatch,'Both generations of recent songs should coexist');
  const modern=JSON.parse(modernMatch[1]),recovered=JSON.parse(recoveredMatch[1]);
  const ids=['pairs','detectword','make24','trackcoin','ruleshift','block-grid','colour-sort','jigsaw','crossnumber','ninja'];
  assert.deepEqual(Object.keys(modern),ids);
  assert.deepEqual(Object.keys(recovered),ids.filter(id=>id!=='ninja'));
  assert.equal(new Set(Object.values(modern).map(score=>JSON.stringify(score))).size,10);
  assert.equal(new Set(Object.values(recovered).map(score=>JSON.stringify(score))).size,9);
  ids.forEach(id=>{
    assert.equal(modern[id].phrases.length,4,id+' should retain its own new song');
    if(id!=='ninja')assert.equal(recovered[id].sections.length,5,id+' should use the final October theme, not the older seven-section one');
  });
  // Previous final October versions included repeated transposed themes.
  // The real playback motifs must now be different even with keys normalized.
  const distinctMatch=music.match(/var DISTINCT_RECOVERED_MELODIES = (\{[^\n]*\});/);
  assert.ok(distinctMatch,'Distinct written melody lines required for formerly cloned songs');
  const distinctive=JSON.parse(distinctMatch[1]);
  assert.deepEqual(Object.keys(distinctive).sort(),['detectword','crossnumber','ruleshift','block-grid','colour-sort'].sort());
  const contours=Object.entries(recovered).map(([game,score])=>
    score.sections.map((section,index)=>{
      const motif=distinctive[game]?.[index]||section.motif;
      return motif.map(note=>note-motif[0]).join(',');
    }).join('/')
  );
  assert.equal(new Set(contours).size,9,'Restored songs must differ in melody, not merely tempo, key or bass');
  assert.match(music,/function scheduleRecovered\(/);
  assert.match(music,/function scheduleModern\(/);
  assert.match(music,/activeSongIndex=\(activeSongIndex\+1\)%songs\.length/);
  assert.match(music,/function catchUpTo\(/);
  assert.doesNotMatch(music,/var ARRANGEMENTS =/);
});

test('desktop game controls form one dock while phones retain their own layout', () => {
  assert.match(dock, /desktop Recreation control contract/);
  assert.match(dock, /@media \(min-width:821px\)/);
  assert.match(dock, /grid-template-columns:44px 44px minmax\(0,1fr\) 44px 44px 44px!important/);
  assert.match(dock, /\.start-new-game-toggle\{[\s\S]*?grid-column:1!important;grid-row:1/);
  assert.match(dock, /\.auto-next-toggle\{[\s\S]*?grid-column:1!important;grid-row:2/);
  assert.match(dock, /\.games-settings-trigger\{[\s\S]*?grid-column:4!important;grid-row:1/);
  assert.match(dock, /\.games-music-quick-toggle\{[\s\S]*?grid-column:5!important;grid-row:1/);
  assert.match(dock, /\.game-fullscreen-toggle\{[\s\S]*?grid-column:6!important;grid-row:1/);
  assert.doesNotMatch(music, /host\.appendChild\(control\)/);
  assert.match(music, /specifics\.appendChild\(control\)/);
});

test('Block Grid fullscreen has a bounded board, no phantom tab grid item and touch-draggable Specials', () => {
  assert.match(blockCss, /@media \(min-width:821px\)/);
  assert.match(blockCss, /--block-fs-board-max:min\(100%,calc\(100dvh - 245px\),700px\)/);
  assert.match(blockCss, /#blockGridGameCard:fullscreen > \.game-fullscreen-window-tabs\{\s*display:contents!important/);
  assert.match(blockCss, /\.block-grid-skill-button:not\(:disabled\)\{[\s\S]*?touch-action:none!important/);
  assert.match(blockJs, /specialButton\.setPointerCapture\?\.\(event\.pointerId\)/);
  assert.match(blockJs, /function boardCellFromPointer\(clientX, clientY\)/);
});

test('Cross Number uses the same pointer and real equation-cell drop path on desktop and touch', () => {
  assert.doesNotMatch(crossJs, /draggable="true" data-tile-id/);
  assert.doesNotMatch(crossJs, /addEventListener\('dragstart'/);
  assert.match(crossJs, /event\.pointerType==='mouse' && event\.button!==0/);
  assert.match(crossJs, /touchDropCellAt\(event\.clientX,event\.clientY\)/);
  assert.match(crossJs, /crossnumberDragScroller\(clientX,clientY\)/);
  assert.match(crossCss, /\.crossnumber-number-tile\{\s*touch-action:none!important/);
});

test('Cross Number puzzle-only actions remain in the spacious Numbers card in both windowed and fullscreen modes', () => {
  const start=html.indexOf('<aside class="crossnumber-bank-panel"');
  const end=html.indexOf('</aside>',start);
  assert.ok(start>0&&end>start,'Number tiles have their own card');
  const bank=html.slice(start,end);
  assert.match(bank, /class="crossnumber-specific-actions game-specific-actions"/);
  for (const action of ['sort','undo','hint','restart']) {
    assert.match(bank,new RegExp('data-crossnumber-action="'+action+'"'));
    assert.equal((html.match(new RegExp('data-crossnumber-action="'+action+'"','g'))||[]).length,1);
  }
  assert.match(music, /if\(id === 'crossnumberGamePanel'\)/);
  assert.match(music, /bankPanel\.appendChild\(numberActions\)/);
  assert.match(music, /numberActions\.appendChild\(control\)/);
  assert.match(crossCss, /\.crossnumber-bank-panel > \.crossnumber-specific-actions\.game-specific-actions\{/);
  assert.match(crossCss, /grid-template-columns:repeat\(4,44px\)!important/);
  assert.match(crossCss, /grid-template-rows:auto minmax\(0,1fr\) auto!important/);
  assert.match(dock, /Cross Number universal dock: only the five shared controls belong here/);
  assert.match(dock, /\.games-settings-trigger\{\s*grid-column:4!important;grid-row:1/);
  assert.match(dock, /\.games-music-quick-toggle\{\s*grid-column:3!important;grid-row:2/);
  assert.match(dock, /\.game-fullscreen-toggle\{\s*grid-column:4!important;grid-row:2/);
});

test('all changed runtime assets receive fresh cache keys', () => {
  assert.match(html, /RECREATION_COHERENCE_20261114_1/);
  assert.match(html, /RECREATION_COHERENCE_20261114_1/);
  assert.match(html, /RECREATION_COHERENCE_20261114_1/);
  assert.match(html, /RECREATION_COHERENCE_20261114_1/);
});
