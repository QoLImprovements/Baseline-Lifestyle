import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const collapseCss=read('systems/baseline-fitness/css/fitness-routine-plan-collapse-v1.css');
const workspaceCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const html=read('systems/baseline-fitness/baseline-fitness.html');

function runCollapseAuthority(reveal='') {
  const cards={
    groups:{ open:true },
    calisthenics:{ open:true },
    cardio:{ open:true },
    other:{ open:true },
    sports:{ open:true }
  };
  const attributes=new Map([['data-initial-routine-view','plan'],...(reveal ? [['data-initial-routine-plan',reveal]] : [])]);
  const document={
    readyState:'complete',
    documentElement:{
      getAttribute(name){ return attributes.get(name) || ''; },
      setAttribute(name,value){ attributes.set(name,String(value)); },
      removeAttribute(name){ attributes.delete(name); }
    },
    querySelector(selector){
      if (selector.includes('details[data-fitness-plan-card="calisthenics"]')) return cards.calisthenics;
      return null;
    },
    querySelectorAll(){ return Object.values(cards); },
    addEventListener(){}
  };
  const fakeWindow={
    document,
    location:{ pathname:'/baseline-fitness/my-routine/plan' },
    addEventListener(){},
    BASELINE_fitnessRoutine:{ getState(){ return { activeView:'plan' }; } }
  };
  new Function('window','globalThis',collapse)(fakeWindow,fakeWindow);
  return { cards,attributes };
}

test('Routine Plan collapse authority owns all five disclosure cards',()=>{
  assert.doesNotThrow(()=>new Function(collapse));
  assert.match(collapse,/ALL FIVE begin collapsed/);
  assert.match(collapse,/details\[data-v4-group-card="global"\]/);
  assert.match(collapse,/details\[data-fitness-plan-card\]/);
  assert.match(collapse,/card\.open=false/);
  assert.match(collapse,/sole exception/);
  assert.match(collapse,/Previously-open disclosure state is never/);
  assert.doesNotMatch(collapse,/sessionStorage\?\.setItem|localStorage\?\.setItem/);
});


test('normal entry, refresh, browser restoration and return to Routine Plan reset cards closed',()=>{
  assert.match(collapse,/fitness-routine-subtabs>\[data-fitness-routine-view="plan"\]/);
  assert.match(collapse,/baseline:fitness-routine-view-changed/);
  assert.match(collapse,/global\.addEventListener\('pageshow'/);
  assert.match(collapse,/global\.addEventListener\('pagehide'/);
  assert.match(collapse,/lastView!==\'plan\'/);
  assert.match(collapse,/collapseCards\(true\)/);
});

test('an authored route-state reveal can open Calisthenics without browser storage',()=>{
  assert.match(collapse,/function takeSelectionReveal/);
  assert.match(collapse,/data-initial-routine-plan/);
  assert.match(collapse,/function revealSelectedCard/);
  assert.match(collapse,/details\[data-fitness-plan-card="\$\{selectionReveal\}"\]/);
  assert.match(collapse,/card\.open=true/);
  assert.doesNotMatch(collapse,/localStorage|sessionStorage/);
  const result=runCollapseAuthority('calisthenics');
  assert.equal(result.cards.calisthenics.open,true);
  assert.equal(result.cards.groups.open,false);
  assert.equal(result.cards.cardio.open,false);
});

test('an ordinary Routine Plan load still begins with every card collapsed',()=>{
  const result=runCollapseAuthority();
  Object.values(result.cards).forEach((card)=>assert.equal(card.open,false));
});

test('newly inserted disclosure cards cannot appear expanded by default',()=>{
  assert.match(collapse,/new MutationObserver/);
  assert.match(collapse,/collapseAddedCards/);
  assert.match(collapse,/mutation\.addedNodes/);
});

test('first paint hides transient expanded bodies and open chevrons until collapse authority is ready',()=>{
  assert.match(collapseCss,/data-fitness-routine-plan-cards-ready/);
  assert.match(collapseCss,/details\[data-fitness-plan-card\]/);
  assert.match(collapseCss,/details\[data-v4-group-card="global"\]/);
  assert.match(collapseCss,/>:not\(summary\)/);
  assert.match(collapseCss,/display:none!important/);
  assert.match(collapseCss,/rotate\(45deg\)/);
  assert.match(workspaceCss,/fitness-routine-plan-collapse-v1\.css/);
});

test('static Fitness dependencies place collapse authority after group construction',()=>{
  const groups=html.indexOf('fitness-routine-groups-v2.js');
  const collapseIndex=html.indexOf('fitness-routine-plan-collapse-v1.js');
  assert.ok(groups>=0 && collapseIndex>groups);
  assert.doesNotMatch(html,/fitness-plan-selection-continuity-v1\.js/);
});
