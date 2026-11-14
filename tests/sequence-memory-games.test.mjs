import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {makePath,makeCombat,SEQUENCE_TIERS,COMBAT_MOVES,cleanBonusPct} from '../systems/baseline-recreation/js/sequence-recall-core.mjs';

const at=(file)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const root='systems/baseline-recreation/';

test('Path Recall generates only contiguous, non-repeating paths at every tier',()=>{
  for(const tier of SEQUENCE_TIERS){
    for(let repetition=0;repetition<200;repetition++){
      const path=makePath(tier.grid,tier.length);
      assert.equal(path.length,tier.length);
      assert.equal(new Set(path).size,path.length);
      path.forEach((cell,i)=>{
        assert.ok(Number.isInteger(cell)&&cell>=0&&cell<tier.grid*tier.grid);
        if(i===0)return;
        const prev=path[i-1];
        assert.equal(
          Math.abs(Math.floor(cell/tier.grid)-Math.floor(prev/tier.grid))+
          Math.abs((cell%tier.grid)-(prev%tier.grid)),1
        );
      });
    }
  }
  assert.throws(()=>makePath(2,5),RangeError);
});

test('Combat Sequence uses selectable movement vocabulary and avoids triple repetition',()=>{
  for(const tier of SEQUENCE_TIERS){
    const ids=COMBAT_MOVES.slice(0,tier.moveCount).map(move=>move.id);
    for(let repetition=0;repetition<200;repetition++){
      const combo=makeCombat(ids,tier.length);
      assert.equal(combo.length,tier.length);
      combo.forEach((move,i)=>{
        assert.ok(ids.includes(move));
        if(i>=2)assert.ok(!(combo[i-1]===move&&combo[i-2]===move));
      });
    }
  }
  assert.throws(()=>makeCombat([],3),RangeError);
});

test('Both games are separate Core Games with routes, module runtimes and account saves',()=>{
  const registry=at(root+'js/games-registry.js');
  const html=at(root+'baseline-recreation.html');
  const core=at(root+'js/baseline-recreation-core.js');
  const api=at(root+'api/games_data.php');
  const oldApi=at(root+'api/games_profile.php');
  const rules=at(root+'api/game_profile_rules.php');
  for(const [slug,app] of [['path-recall','pathrecall'],['combat-sequence','combatsequence']]){
    assert.match(registry,new RegExp("id:'"+slug+"'[^\\n]*profileApp:'"+app+"'[^\\n]*core:true"));
    assert.match(registry,new RegExp("runtimeOwner:'module'"));
    assert.ok(html.includes('/games/'+slug+'/js/'+slug+'.js'));
    assert.ok(core.includes("'"+slug+"'"),slug+' must be known to route restoration');
    assert.ok(api.includes("'"+app+"'"),app+' must be saved in games_data');
    assert.ok(oldApi.includes("'"+app+"'"),app+' must be saved in legacy profile endpoint');
    assert.ok(rules.includes("'"+app+"'"),app+' must have profile validation');
  }
  assert.match(core,/runtimeOwner !== 'module'/);
  assert.match(core,/data-open-game-extension/);
});

test('Sequence games keep the common toolbar, accessibility and independent original music',()=>{
  const runtime=at(root+'js/sequence-recall-core.mjs');
  const music=at(root+'js/games-music.js');
  for(const name of ['game','round','skills','tiers','progress'])assert.ok(runtime.includes("'"+name+"'"));
  for(const control of ['data-sequence-start','data-auto-next-toggle','data-sequence-fullscreen','data-sequence-replay','aria-live="polite"'])assert.ok(runtime.includes(control),control);
  for(const id of ['path-recall','combat-sequence'])assert.ok(music.includes("TRACKS['"+id+"']"),id+' unique music');
  assert.match(music,/enabled:false/);
  assert.match(runtime,/saveStoredProfile\(app,profile\)/);
  assert.match(runtime,/createGameExtensionShell\(/);
});

test('sequence games use the shared clean-streak bonus curve and unlock reverse recall',()=>{
  assert.equal(cleanBonusPct(0),0);
  assert.equal(cleanBonusPct(1),5);
  assert.equal(cleanBonusPct(10),50);
  assert.equal(cleanBonusPct(20),100);
  assert.equal(cleanBonusPct(99),100);
  const source=at(root+'js/sequence-recall-core.mjs');
  assert.match(source,/data-sequence-reverse/);
  assert.match(source,/profile\.cleanStreak\+1/);
  assert.match(source,/challengeMultiplier=round\.reverse\?1\.2:1/);
});
