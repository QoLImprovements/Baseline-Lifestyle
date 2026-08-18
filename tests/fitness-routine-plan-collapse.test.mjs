import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const collapse=read('systems/baseline-fitness/js/fitness-routine-plan-collapse-v1.js');
const collapseCss=read('systems/baseline-fitness/css/fitness-routine-plan-collapse-v1.css');
const workspaceCss=read('systems/baseline-fitness/css/fitness-routine-workspace.css');
const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');

test('Routine Plan collapse authority owns all five disclosure cards',()=>{
  assert.doesNotThrow(()=>new Function(collapse));
  assert.match(collapse,/ALL FIVE MUST BEGIN COLLAPSED/);
  assert.match(collapse,/details\[data-v4-group-card="global"\]/);
  assert.match(collapse,/details\[data-fitness-plan-card\]/);
  assert.match(collapse,/card\.open=false/);
  assert.match(collapse,/Disclosure state is/);
  assert.doesNotMatch(collapse,/sessionStorage\?\.setItem|localStorage\?\.setItem/);
});

test('entry, refresh, browser restoration and return to Routine Plan all reset cards closed',()=>{
  assert.match(collapse,/fitness-routine-subtabs>\[data-fitness-routine-view="plan"\]/);
  assert.match(collapse,/baseline:fitness-routine-view-changed/);
  assert.match(collapse,/global\.addEventListener\('pageshow'/);
  assert.match(collapse,/global\.addEventListener\('pagehide'/);
  assert.match(collapse,/lastView!==\'plan\'/);
  assert.match(collapse,/collapseCards\(true\)/);
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

test('loader places collapse authority after card construction and before selection continuity',()=>{
  const groups=loader.indexOf('fitness-routine-groups-v2.js');
  const collapseIndex=loader.indexOf('fitness-routine-plan-collapse-v1.js');
  const selection=loader.indexOf('fitness-plan-selection-continuity-v1.js');
  assert.ok(groups>=0 && collapseIndex>groups && selection>collapseIndex);
  assert.match(loader,/Routine Groups \+ all four category cards begin COLLAPSED/);
});
