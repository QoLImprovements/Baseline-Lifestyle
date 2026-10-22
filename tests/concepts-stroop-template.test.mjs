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

test('selected Stroop artwork is committed as the Concept asset',()=>{
  const art='systems/baseline-recreation/concepts/stroop-effect/art/stroop-effect.webp';
  assert.equal(fs.existsSync(art),true);
  assert.ok(fs.statSync(art).size>100000,'Stroop artwork should remain a substantive full visual asset');
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
  assert.match(ht,/baseline-recreation\/concepts\/stroop-effect/);
  assert.match(core,/base \+ '\/concepts'/);
  assert.match(core,/tab:'concepts'/);
  assert.match(core,/target === 'concepts'/);
});
