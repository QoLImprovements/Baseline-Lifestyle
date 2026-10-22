import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const runtime=fs.readFileSync(new URL('../systems/baseline-recreation/games/badminton-focused/js/badminton-focused.js',import.meta.url),'utf8');
const timerAuthority=fs.readFileSync(new URL('../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-timing.js',import.meta.url),'utf8');
const sharedTimerAuthority=fs.readFileSync(new URL('../systems/baseline-recreation/js/focused-game-timing.js',import.meta.url),'utf8');

function runtimeSection(startName,endName){
  const start=runtime.indexOf('function '+startName);
  assert.notEqual(start,-1,startName+' must exist');
  const end=endName?runtime.indexOf('function '+endName,start+1):runtime.length;
  assert.notEqual(end,-1,endName+' must follow '+startName);
  return runtime.slice(start,end);
}

test('Badminton runtime delegates delayed work to the timing authority',()=>{
  assert.match(runtime,/createBadmintonTimerManager/);
  assert.match(runtime,/function clearTimers\(\)\{timing\.clear\(\);\}/);
  assert.match(runtime,/function later\(fn,ms\)\{return timing\.later\(fn,ms\);\}/);
  assert.match(runtime,/function scheduleAuto\(fn,ms=1900\)\{return timing\.scheduleAuto\(fn,ms\);\}/);
  assert.match(runtime,/function managedTimerRemaining\(timer\)\{return timing\.remaining\(timer\);\}/);
  assert.doesNotMatch(runtime,/function cancelManagedTimer|function armManagedTimer|ui\.timers|ui\.autoTimer|ui\.sessionToken/);
});

test('Badminton timing adapter delegates visibility-aware lifecycle to the shared authority',()=>{
  assert.match(timerAuthority,/createFocusedGameTimerManager/);
  assert.match(timerAuthority,/clear:timing\.clearAll/);
  assert.match(timerAuthority,/later:timing\.scheduleGame/);
  assert.doesNotMatch(timerAuthority,/function arm\(|function pause\(|function resume\(|let sessionToken/);
  assert.match(sharedTimerAuthority,/timer\.remaining=remaining\(timer\)/);
  assert.match(sharedTimerAuthority,/getVisibilityState\(\)==='hidden'/);
  assert.match(sharedTimerAuthority,/gameTimers\.forEach\(pause\)/);
  assert.match(sharedTimerAuthority,/gameTimers\.forEach\(resume\)/);
  assert.match(sharedTimerAuthority,/pause\(autoTimer\)/);
  assert.match(sharedTimerAuthority,/resume\(autoTimer\)/);
});

test('Badminton hidden time is excluded from contact-response timing paths',()=>{
  assert.match(runtime,/onHiddenDuration:hiddenFor=>\{[\s\S]*activeState\.contactAt\+=hiddenFor/);

  const waitStart=runtimeSection('startWaitContact','renderFourCorner');
  const tempo=runtimeSection('tempoContact','newRound');
  assert.match(waitStart,/later\(\(\)=>\{if\(!s\.feedback\)\{record\(false,\{late:true\}\)/);
  assert.match(tempo,/performance\.now\(\)-s\.contactAt/);
});

test('Badminton installs one document visibility listener for timer coordination',()=>{
  const init=runtimeSection('init',null);
  assert.match(init,/document\.addEventListener\('visibilitychange',syncBadmintonVisibility\)/);
});

test('Pressure Ladder visual countdown uses the managed remaining timer',()=>{
  const pressure=runtimeSection('renderPressure','pressureTimeout');
  assert.match(pressure,/s\.pressureTimer=later\(\(\)=>pressureTimeout\(\),totalMs\)/);
  assert.match(pressure,/managedTimerRemaining\(s\.pressureTimer\)/);
  assert.match(pressure,/--badminton-start-scale:\$\{startScale\}/);
  assert.match(pressure,/--badminton-seconds:\$\{Math\.max\(\.001,remainingMs\/1000\)\}s/);
});

test('Badminton rerenders the active panel after visibility resume',()=>{
  assert.match(runtime,/onVisibleResume:\(\)=>\{[\s\S]*renderSelected\(\)/);
});
