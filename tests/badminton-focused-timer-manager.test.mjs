import test from 'node:test';
import assert from 'node:assert/strict';

import { createBadmintonTimerManager } from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-timing.js';

function harness({auto=true}={}){
  let gameId='wait-contact';
  let visibility='visible';
  let wall=0;
  let perf=0;
  let nextId=1;
  const scheduled=new Map();
  const hiddenDurations=[];
  let resumeCount=0;

  const manager=createBadmintonTimerManager({
    getGameId:()=>gameId,
    shouldAutoNext:()=>auto,
    onHiddenDuration:ms=>hiddenDurations.push(ms),
    onVisibleResume:()=>{resumeCount+=1;},
    getVisibilityState:()=>visibility,
    wallNow:()=>wall,
    perfNow:()=>perf,
    setTimer:(fn,ms)=>{
      const id=nextId++;
      scheduled.set(id,{fn,ms});
      return id;
    },
    clearTimer:id=>scheduled.delete(id)
  });

  return {
    manager,
    scheduled,
    hiddenDurations,
    get resumeCount(){return resumeCount;},
    setGame:id=>{gameId=id;},
    hide:()=>{visibility='hidden';manager.handleVisibilityChange();},
    show:()=>{visibility='visible';manager.handleVisibilityChange();},
    advance:(ms)=>{wall+=ms;perf+=ms;},
    fireFirst:()=>{
      const first=[...scheduled.entries()][0];
      assert.ok(first,'expected a scheduled timer');
      scheduled.delete(first[0]);
      first[1].fn();
    }
  };
}

test('Badminton timer manager pauses and resumes with remaining usable time',()=>{
  const h=harness();
  let fired=0;
  const timer=h.manager.later(()=>{fired+=1;},1000);

  h.advance(300);
  assert.equal(h.manager.remaining(timer),700);
  h.hide();
  assert.equal(h.manager.remaining(timer),700);
  assert.equal(h.scheduled.size,0);

  h.advance(5000);
  assert.equal(h.manager.remaining(timer),700);

  h.show();
  assert.equal(h.hiddenDurations[0],5000);
  assert.equal(h.scheduled.size,1);
  assert.equal([...h.scheduled.values()][0].ms,700);

  h.fireFirst();
  assert.equal(fired,1);
});

test('Badminton timer manager binds callbacks to the selected game session',()=>{
  const h=harness();
  let fired=0;
  h.manager.later(()=>{fired+=1;},500);
  h.setGame('tempo-break');
  h.fireFirst();
  assert.equal(fired,0);
});

test('Badminton timer manager clear invalidates all delayed work',()=>{
  const h=harness();
  h.manager.later(()=>{},500);
  h.manager.scheduleAuto(()=>{},600);
  assert.equal(h.scheduled.size,2);
  const before=h.manager.getSessionToken();
  h.manager.clear();
  assert.equal(h.scheduled.size,0);
  assert.equal(h.manager.getSessionToken(),before+1);
});

test('Badminton Auto-Next uses the same visibility-aware timer authority',()=>{
  const h=harness();
  let fired=0;
  const timer=h.manager.scheduleAuto(()=>{fired+=1;},900);
  assert.ok(timer);

  h.advance(200);
  h.hide();
  h.advance(3000);
  h.show();

  assert.equal([...h.scheduled.values()][0].ms,700);
  h.fireFirst();
  assert.equal(fired,1);
});

test('Badminton timer manager does not schedule Auto-Next when disabled',()=>{
  const h=harness({auto:false});
  assert.equal(h.manager.scheduleAuto(()=>{},900),null);
  assert.equal(h.scheduled.size,0);
});
