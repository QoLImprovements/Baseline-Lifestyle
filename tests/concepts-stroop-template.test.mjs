import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read=(file)=>fs.readFileSync(file,'utf8');

test('Concepts is a first-class Recreation category with one initial Concept',()=>{
  const html=read('systems/baseline-recreation/baseline-recreation.html');
  assert.match(html,/data-target="concepts">Concepts</);
  assert.match(html,/id="concepts"/);
  assert.match(html,/id="conceptsOverviewCard"/);
  assert.match(html,/data-open-concept="stroop-effect"/);
  assert.match(html,/id="conceptStroopEffect"/);
  assert.match(html,/The Stroop Effect/);
  assert.doesNotMatch(html,/Monty Hall|Shepard Tone|Change Blindness|Afterimage/);
});

test('Concepts has shared architecture plus Stroop-specific variance',()=>{
  const sharedCss=read('systems/baseline-recreation/concepts/shared/css/concepts.css');
  const sharedJs=read('systems/baseline-recreation/concepts/shared/js/concepts.js');
  const stroopCss=read('systems/baseline-recreation/concepts/stroop-effect/css/stroop-effect.css');
  const rules=read('systems/baseline-recreation/concepts/rules/concepts-rules.md');
  assert.match(sharedJs,/const BASE='\/baseline-recreation\/concepts'/);
  assert.match(sharedJs,/'stroop-effect'/);
  assert.match(sharedJs,/showOverview/);
  assert.match(sharedJs,/openConcept/);
  assert.match(sharedCss,/\.concept-detail/);
  assert.match(sharedCss,/\.concept-depth/);
  assert.match(stroopCss,/#conceptStroopEffect/);
  assert.match(rules,/reusable baseline, not a rigid universal page/);
});

test('matched Stroop artworks are committed as Incongruent and Congruent assets',()=>{
  const incongruent='systems/baseline-recreation/concepts/stroop-effect/art/stroop-effect.webp';
  const congruent='systems/baseline-recreation/concepts/stroop-effect/art/stroop-effect-congruent.webp';
  assert.equal(fs.existsSync(incongruent),true);
  assert.equal(fs.existsSync(congruent),true);
  assert.ok(fs.statSync(incongruent).size>100000,'Incongruent Stroop artwork should remain a substantive full visual asset');
  assert.ok(fs.statSync(congruent).size>100000,'Congruent Stroop artwork should remain a substantive full visual asset');
});

test('Stroop provides a direct Incongruent and Congruent artwork comparison',()=>{
  const html=read('systems/baseline-recreation/baseline-recreation.html');
  const stroopJs=read('systems/baseline-recreation/concepts/stroop-effect/js/stroop-effect.js');
  assert.match(html,/data-stroop-mode="incongruent"/);
  assert.match(html,/data-stroop-mode="congruent"/);
  assert.match(html,/data-stroop-comparison-art/);
  assert.match(stroopJs,/stroop-effect-congruent\.webp/);
  assert.match(stroopJs,/aria-pressed/);
  assert.match(stroopJs,/setMode/);
});

test('Stroop content provides concise and expandable research context',()=>{
  const html=read('systems/baseline-recreation/baseline-recreation.html');
  assert.match(html,/Comprehensive explanation/);
  assert.match(html,/Congruent/);
  assert.match(html,/Incongruent/);
  assert.match(html,/automatic/i);
  assert.match(html,/selective attention/i);
  assert.match(html,/response inhibition/i);
  assert.match(html,/John Ridley Stroop/);
  assert.match(html,/1935/);
  assert.match(html,/10\.1037\/h0054651/);
  assert.match(html,/10\.1007\/s00426-021-01554-x/);
});

test('Concept routes are canonical and refresh-restorable',()=>{
  const ht=read('.htaccess');
  const core=read('systems/baseline-recreation/js/baseline-recreation-core.js');
  assert.match(ht,/baseline-recreation\/\(system\|games\|puzzles\|concepts\)/);
  assert.match(ht,/baseline-recreation\/concepts\/\[\^\/\]\+\/\?\$/);
  assert.match(ht,/the-stoop-effect/);
  assert.match(ht,/\/baseline-recreation\/concepts\/stroop-effect/);
  const conceptsJs=read('systems/baseline-recreation/concepts/shared/js/concepts.js');
  assert.match(conceptsJs,/'stroop-effect'/);
  assert.match(conceptsJs,/'the-stoop-effect':'stroop-effect'/);
  assert.match(conceptsJs,/'stoop-effect':'stroop-effect'/);
  assert.match(core,/base \+ '\/concepts'/);
  assert.match(core,/tab:'concepts'/);
  assert.match(core,/target === 'concepts'/);
});


test('Concepts library and Concept detail are mutually exclusive views',()=>{
  const css=read('systems/baseline-recreation/concepts/shared/css/concepts.css');
  const html=read('systems/baseline-recreation/baseline-recreation.html');
  assert.match(css,/#conceptsOverviewCard\[hidden\]/);
  assert.match(css,/\[data-concept-detail\]\[hidden\]/);
  assert.match(html,/data-stroop-mode="incongruent"/);
  assert.match(html,/data-stroop-mode="congruent"/);
});

test('Puzzles cannot rewrite another Recreation section during startup',()=>{
  const puzzles=read('systems/baseline-recreation/puzzles/shared/js/puzzles-library.js');
  assert.match(puzzles,/function ownsPuzzleRoute\(\)/);
  assert.match(puzzles,/if\(ownsPuzzleRoute\(\)\) writeRoute\(initial\.view,activeJigsaw,'replace'\)/);
});

test('Puzzles selector artwork contains no retired indigo palette values',()=>{
  const art=[
    read('systems/baseline-recreation/puzzles/shared/art/jigsaws.svg'),
    read('systems/baseline-recreation/puzzles/shared/art/crossnumber.svg')
  ].join('\n').toUpperCase();
  ['#080D22','#526BC2','#8CA7FF','#1A244D','#4656A6','#1E2759','#F2F5FF'].forEach(colour=>{
    assert.equal(art.includes(colour),false,'retired puzzle colour remains: '+colour);
  });
  assert.match(art,/#2A0B16/);
  assert.match(art,/#9E4D38/);
  assert.match(art,/#B86A50/);
});

test('legacy misspelled Stroop URLs canonicalise to stroop-effect',()=>{
  const ht=read('.htaccess');
  const concepts=read('systems/baseline-recreation/concepts/shared/js/concepts.js');
  assert.match(ht,/concepts\/\(\?:stoop-effect\|the-stoop-effect\|the-stroop-effect\).*\/baseline-recreation\/concepts\/stroop-effect/);
  assert.match(concepts,/'stoop-effect':'stroop-effect'/);
  assert.match(concepts,/'the-stoop-effect':'stroop-effect'/);
  assert.match(concepts,/'the-stroop-effect':'stroop-effect'/);
});
