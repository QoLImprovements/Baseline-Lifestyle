import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const crossnumber=read('systems/baseline-recreation/puzzles/crossnumber/js/crossnumber.js');
const css=read('systems/baseline-recreation/puzzles/crossnumber/css/crossnumber.css');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const registry=read('systems/baseline-recreation/js/games-registry.js');
const gamesData=read('systems/baseline-recreation/api/games_data.php');
const savedData=read('sitewide/api/saved_data.php');
const realmRuntime=read('systems/baseline-recreation/games/baseline-realm/ninja-training/js/ninja-training-runtime.js');
const core=read('systems/baseline-recreation/js/baseline-recreation-core.js');

function loadGenerator(){
  const cut=crossnumber.indexOf("  refs.bank.addEventListener('click'");
  assert.ok(cut>0,'Cross Number event binding anchor should exist');
  const source=crossnumber.slice(0,cut)+"\n  globalThis.__crossnumberTest={generateLayout,TIERS,SKILLS,getRealmContribution};\n})();";
  const rootNode={closest(){return null;},querySelector(){return {};}};
  const context={
    console,
    Date,
    Math,
    JSON,
    Object,
    Number,
    String,
    Array,
    Set,
    Map,
    document:{
      getElementById(){return rootNode;},
      dispatchEvent(){},
      documentElement:{setAttribute(){}}
    },
    localStorage:{getItem(){return null;},setItem(){}},
    CustomEvent:function(){},
    window:null,
    globalThis:null
  };
  context.window=context;
  context.globalThis=context;
  vm.runInNewContext(source,context,{filename:'crossnumber.js'});
  return context.__crossnumberTest;
}

test('Cross Number has six coherent progression tiers and five skills',()=>{
  const api=loadGenerator();
  assert.deepEqual(Array.from(api.TIERS,tier=>tier.id),['starter','field','forge','circuit','citadel','masterwork']);
  assert.deepEqual(Array.from(api.TIERS,tier=>tier.unlockLevel),[1,4,9,16,26,40]);
  assert.deepEqual(Array.from(api.SKILLS,skill=>skill.id),['insight','flow','banker','precision','structure']);
  assert.match(crossnumber,/xpNeededForLevel/);
  assert.match(crossnumber,/cleanBonusPct/);
  assert.match(crossnumber,/skillPoints/);
  assert.match(crossnumber,/bankReward/);
});

test('procedural generator produces many valid layouts at every tier',()=>{
  const api=loadGenerator();
  for(const tier of api.TIERS){
    const signatures=new Set();
    for(let sample=1;sample<=60;sample++){
      const layout=api.generateLayout(sample*104729,tier.id);
      assert.equal(layout.nodes.length,tier.nodes,tier.id+' node count');
      assert.equal(layout.edges.length,tier.nodes-1,tier.id+' edge count');
      for(const edge of layout.edges){
        assert.ok(tier.operators.includes(edge.op),tier.id+' should not leak locked operators');
        const left=layout.values[edge.from];
        const right=layout.values[edge.to];
        const constant=edge.constant;
        const valid=edge.op==='+'?left+constant===right:
          edge.op==='−'?left-constant===right:
          edge.op==='×'?left*constant===right:
          edge.op==='÷'?left/constant===right:false;
        assert.equal(valid,true,tier.id+' equation should balance');
      }
      signatures.add(layout.nodes.map(node=>node.r+','+node.c).sort().join('|')+'::'+layout.edges.map(edge=>[edge.from,edge.to].sort().join('-')).sort().join('|'));
    }
    assert.ok(signatures.size>=50,tier.id+' should generate a broad variety of layouts');
  }
});

test('Cross Number inherits the Recreation Indigo Circuit palette instead of owning a competing palette',()=>{
  ['--g01-deep','--g01-mid','--g01-centre','--g01-active','--g01-focus','--g01-card','--g01-ink','--g01-muted'].forEach(token=>{
    assert.ok(css.includes('var('+token),token);
  });
  ['#fff7d2','#eadb9b','#fbf3d0','#f5f2e8'].forEach(retired=>assert.doesNotMatch(css,new RegExp(retired,'i')));
  assert.match(html,/crossnumber\.css\?v=RECREATION_COHERENCE_20261023_/);
});

test('Cross Number follows the Recreation single-panel navigation contract',()=>{
  assert.match(html,/data-game-info="crossnumber"/);
  ['crossnumberGamePanel','crossnumberSkillPanel','crossnumberTierPanel','crossnumberProgressPanel'].forEach(id=>{
    assert.match(html,new RegExp('data-crossnumber-panel="'+id+'"'));
    assert.match(html,new RegExp('id="'+id+'"'));
  });
  assert.doesNotMatch(html,/class="crossnumber-hero"/);
  assert.doesNotMatch(html,/class="crossnumber-progression-strip"/);
  assert.match(crossnumber,/setCrossNumberPanel/);
  assert.match(crossnumber,/crosspanel/);
  assert.match(crossnumber,/panelFromLocation/);
});

test('Cross Number visible naming is two words while internal identifiers remain valid JavaScript',()=>{
  assert.match(html,/<h2>Cross Number<\/h2>/);
  assert.match(html,/data-crossnumber-level>Player Rank 1<\/div>/);
  assert.doesNotMatch(html,/>Crossnumber</);
  assert.doesNotMatch(crossnumber,/setCross NumberPanel|BaselineCross Number|baselineCross Number/);
  assert.doesNotThrow(()=>new Function(crossnumber));
});

test('Cross Number keeps the entire puzzle and answer bank reachable without fullscreen scrolling',()=>{
  assert.match(html,/class="crossnumber-play-layout"/);
  assert.match(html,/class="crossnumber-board-column"/);
  assert.match(html,/class="crossnumber-bank-panel"/);
  assert.match(crossnumber,/function fitCrossNumberBoard\(\)/);
  assert.match(crossnumber,/availableHeight\*ratio/);
  assert.match(crossnumber,/window\.requestAnimationFrame\(fitCrossNumberBoard\)/);
  assert.match(crossnumber,/fullscreenchange[\s\S]*?requestAnimationFrame\(fitCrossNumberBoard\)/);
  assert.match(crossnumber,/visualViewport\?\.addEventListener\?\.\('resize'[\s\S]*?requestAnimationFrame\(fitCrossNumberBoard\)/);
  assert.match(css,/#crossnumberGamePanel:fullscreen\{[\s\S]*?overflow:hidden!important[\s\S]*?height:100dvh/);
  assert.match(css,/#crossnumberGamePanel:fullscreen \.crossnumber-play-layout\{[\s\S]*?height:100%/);
  assert.match(css,/#crossnumberGamePanel:fullscreen \.crossnumber-board-column\{[\s\S]*?grid-template-rows:minmax\(0,1fr\) auto!important/);
  assert.match(css,/#crossnumberGamePanel:fullscreen \.crossnumber-board-scroll\{[\s\S]*?overflow:hidden!important/);
  assert.match(css,/@media\(max-width:820px\)[\s\S]*?crossnumber-board-scroll\{overflow:auto\}/);
});

test('Cross Number uses shared Auto-Next and keeps larger type inside the tighter cells',()=>{
  assert.match(html,/data-auto-next-toggle="crossnumber"/);
  assert.match(core,/AUTO_NEXT_GAMES = \[[^\]]*'crossnumber'/);
  assert.match(core,/window\.BaselineGamesAutoNext/);
  assert.match(crossnumber,/autoNextApi\(\)/);
  assert.match(crossnumber,/schedule\?\.\(APP,function\(\)\{createNewRound/);
  assert.match(css,/crossnumber-symbol-cell\{[\s\S]*?font-size:clamp\(14px,1\.8vw,26px\)/);
  assert.match(css,/crossnumber-number-cell\{[\s\S]*?font-size:clamp\(16px,2vw,30px\)/);
  assert.match(css,/crossnumber-number-tile\{[\s\S]*?font:900 21px\/1/);
});

test('Cross Number profile participates in shared account persistence',()=>{
  assert.match(registry,/['"]crossnumber['"]/);
  assert.match(gamesData,/['"]crossnumber['"]/);
  assert.match(savedData,/'crossnumber'\s*=>\s*'crossnumber\.json'/);
  assert.match(crossnumber,/BaselineGameStorage/);
  assert.match(crossnumber,/saveProfile\?\.\(APP,profile\)/);
});

test('Cross Number Realm contribution is bounded and wired into the Realm resolver',()=>{
  assert.match(crossnumber,/Math\.min\(\.08,[\s\S]*?boss/);
  assert.match(crossnumber,/Math\.min\(\.08,[\s\S]*?clues/);
  assert.match(crossnumber,/Math\.min\(\.06,[\s\S]*?costReduction/);
  assert.match(crossnumber,/Cross Number: Constraint Reading/);
  assert.match(crossnumber,/Cross Number: Linked Planning/);
  assert.match(crossnumber,/Cross Number: Resource Arithmetic/);
  assert.match(realmRuntime,/crossnumberRealmContribution/);
  assert.match(realmRuntime,/bonus\.bossDamageMult \*= Number\(crossnumber\.bossDamageMult/);
  assert.match(realmRuntime,/bonus\.clueDropChance \+= Number\(crossnumber\.clueDropChance/);
  assert.match(realmRuntime,/bonus\.upgradeCostMult \*= Number\(crossnumber\.upgradeCostMult/);
});
