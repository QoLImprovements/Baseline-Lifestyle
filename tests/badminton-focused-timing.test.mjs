import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const runtime=fs.readFileSync(new URL('../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused.js',import.meta.url),'utf8');

function section(startName,endName){
  const start=runtime.indexOf('function '+startName);
  assert.notEqual(start,-1,startName+' must exist');
  const end=endName?runtime.indexOf('function '+endName,start+1):runtime.length;
  assert.notEqual(end,-1,endName+' must follow '+startName);
  return runtime.slice(start,end);
}

test('Badminton managed timers preserve remaining delay across hidden time',()=>{
  const timers=section('cancelManagedTimer','shuffle');
  assert.match(timers,/timer\.remaining=Math\.max\(0,timer\.remaining-elapsed\)/);
  assert.match(timers,/document\.visibilityState==='hidden'/);
  assert.match(timers,/ui\.timers\.forEach\(pauseManagedTimer\)/);
  assert.match(timers,/ui\.timers\.forEach\(resumeManagedTimer\)/);
  assert.match(timers,/pauseManagedTimer\(ui\.autoTimer\)/);
  assert.match(timers,/resumeManagedTimer\(ui\.autoTimer\)/);
});

test('Badminton hidden time is excluded from contact-response timing',()=>{
  const visibility=section('syncBadmintonVisibility','shuffle');
  assert.match(visibility,/ui\.visibilityPausedAt=performance\.now\(\)/);
  assert.match(visibility,/const hiddenFor=Math\.max\(0,performance\.now\(\)-ui\.visibilityPausedAt\)/);
  assert.match(visibility,/activeState\.contactAt\+=hiddenFor/);

  const wait=section('answerWait','tempoContact');
  const tempo=section('tempoContact','newRound');
  assert.match(wait,/performance\.now\(\)-s\.contactAt/);
  assert.match(tempo,/performance\.now\(\)-s\.contactAt/);
});

test('Badminton installs one document visibility listener for timer coordination',()=>{
  const init=section('init',null);
  assert.match(init,/document\.addEventListener\('visibilitychange',syncBadmintonVisibility\)/);
});
