import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { createDartsTimerManager } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-timing.js';

const dartsTimingSource=fs.readFileSync('systems/baseline-recreation/games/darts-focused/js/darts-focused-timing.js','utf8');
const sharedTimingSource=fs.readFileSync('systems/baseline-recreation/js/focused-game-timing.js','utf8');

function harness({auto=true}={}){
  let gameId='checkout-pressure';
  let visibility='visible';
  let wall=0;
  let perf=0;
  let nextId=1;
  const scheduled=new Map();
  const hidden=[];
  let resumes=0;

  const manager=createDartsTimerManager({
    getGameId:()=>gameId,
    shouldAutoNext:()=>auto,
    onHiddenDuration:ms=>hidden.push(ms),
    onVisibleResume:()=>{resumes+=1;},
    getVisibilityState:()=>visibility,
    wallNow:()=>wall,
    perfNow:()=>perf,
    setTimer:(fn,ms)=>{const id=nextId++;scheduled.set(id,{fn,ms});return id;},
    clearTimer:id=>scheduled.delete(id)
  });

  return {
    manager,scheduled,hidden,
    get resumes(){return resumes;},
    setGame:id=>{gameId=id;},
    advance:ms=>{wall+=ms;perf+=ms;},
    hide:()=>{visibility='hidden';manager.handleVisibilityChange();},
    show:()=>{visibility='visible';manager.handleVisibilityChange();},
    fireFirst:()=>{
      const first=[...scheduled.entries()][0];
      assert.ok(first,'expected a scheduled timer');
      scheduled.delete(first[0]);
      first[1].fn();
    }
  };
}

test('Darts managed timers preserve remaining usable time across hidden tabs',()=>{
  const h=harness();
  let fired=0;
  const timer=h.manager.scheduleGame(()=>{fired+=1;},1000);

  h.advance(250);
  assert.equal(h.manager.remaining(timer),750);
  h.hide();
  assert.equal(h.scheduled.size,0);

  h.advance(5000);
  assert.equal(h.manager.remaining(timer),750);

  h.show();
  assert.equal(h.hidden[0],5000);
  assert.equal([...h.scheduled.values()][0].ms,750);

  h.fireFirst();
  assert.equal(fired,1);
});

test('Darts delayed callbacks are bound to the selected game session',()=>{
  const h=harness();
  let fired=0;
  h.manager.scheduleGame(()=>{fired+=1;},500);
  h.setGame('route-recovery');
  h.fireFirst();
  assert.equal(fired,0);
});

test('Darts clearGame invalidates delayed work and advances the session token',()=>{
  const h=harness();
  h.manager.scheduleGame(()=>{},500);
  const before=h.manager.getSessionToken();
  h.manager.clearGame();
  assert.equal(h.scheduled.size,0);
  assert.equal(h.manager.getSessionToken(),before+1);
});

test('Darts Auto-Next shares the same hidden-tab timing authority',()=>{
  const h=harness();
  let fired=0;
  const timer=h.manager.scheduleAuto(()=>{fired+=1;},900);
  assert.ok(timer);
  h.advance(300);
  h.hide();
  h.advance(4000);
  h.show();
  assert.equal([...h.scheduled.values()][0].ms,600);
  h.fireFirst();
  assert.equal(fired,1);
});

test('Darts Auto-Next does not schedule when disabled',()=>{
  const h=harness({auto:false});
  assert.equal(h.manager.scheduleAuto(()=>{},900),null);
  assert.equal(h.scheduled.size,0);
});


test('Darts timing lifecycle is owned by the shared focused-game timer manager',()=>{
  assert.match(dartsTimingSource,/createFocusedGameTimerManager/);
  assert.doesNotMatch(dartsTimingSource,/function arm\(|function pause\(|function resume\(|let sessionToken/);
  assert.match(sharedTimingSource,/function arm\(timer\)/);
  assert.match(sharedTimingSource,/function handleVisibilityChange\(\)/);
  assert.match(sharedTimingSource,/cancelAutoWhenDisabled/);
});
