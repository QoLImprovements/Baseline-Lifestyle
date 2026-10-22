import test from 'node:test';
import assert from 'node:assert/strict';

import { GAME_IDS, createDefaultDartsProfile } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-engine.mjs';
import { TIER_DEFINITIONS } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-content.js';
import {
  dartsProgressSummaryHtml,
  renderDartsTierControls,
  syncDartsActiveControls
} from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-progress.js';

function fakeElement(){
  return {
    attrs:{},
    textContent:'',
    innerHTML:'',
    setAttribute(name,value){this.attrs[name]=String(value);}
  };
}

test('Darts progress summary preserves Bank, accuracy and Realm-link presentation',()=>{
  const profile=createDefaultDartsProfile();
  profile.bank=7;
  profile.skillPoints=3;
  profile.stats['checkout-pressure'].attempts=2;
  profile.stats['checkout-pressure'].correct=1;

  const html=dartsProgressSummaryHtml(profile,GAME_IDS);
  assert.match(html,/Darts Bank <span>7<\/span>/);
  assert.match(html,/Skill Points <span>3<\/span>/);
  assert.match(html,/Games Attempted <span>1 \/ 10<\/span>/);
  assert.match(html,/Overall Accuracy <span>50%<\/span>/);
  assert.match(html,/Realm Dash/);
  assert.match(html,/Realm Shuriken/);
});

test('Darts tier control presentation preserves unlock thresholds',()=>{
  const list=fakeElement();
  const description=fakeElement();
  renderDartsTierControls({
    list,
    description,
    tierDefinitions:TIER_DEFINITIONS,
    selectedTier:1,
    gameLevel:1
  });
  assert.match(list.innerHTML,/Foundation/);
  assert.match(list.innerHTML,/Unlocks at level 3/);
  assert.match(list.innerHTML,/Unlocks at level 6/);
  assert.equal(description.textContent,TIER_DEFINITIONS[0].description);
});

test('Darts active controls reflect selected game, Auto-Next and fullscreen state',()=>{
  const info=fakeElement(),how=fakeElement(),auto=fakeElement(),fullscreen=fakeElement();
  syncDartsActiveControls({
    info,how,auto,fullscreen,
    meta:{id:'target-lock',name:'Target Lock',intention:'Precise visual attention'},
    autoNext:true,
    fullscreenActive:false
  });
  assert.equal(info.attrs['data-bl-info-title'],'Target Lock');
  assert.equal(how.attrs['data-darts-how'],'target-lock');
  assert.equal(auto.attrs['aria-pressed'],'true');
  assert.equal(auto.textContent,'Auto-Next: On');
  assert.equal(fullscreen.textContent,'Full Screen');
});
