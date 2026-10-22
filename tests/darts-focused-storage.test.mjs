import test from 'node:test';
import assert from 'node:assert/strict';

import {
  DARTS_STORAGE_KEY,
  DARTS_LEGACY_STORAGE_KEY,
  loadDartsProfile,
  persistDartsProfile
} from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-storage.js';

function memoryStorage(initial={}){
  const data=new Map(Object.entries(initial));
  return {
    getItem:key=>data.has(key)?data.get(key):null,
    setItem:(key,value)=>data.set(key,String(value)),
    dump:()=>Object.fromEntries(data)
  };
}

test('Darts storage reads the legacy v2 key without silently creating a browser copy',()=>{
  const legacy={version:3,app:'dartsfocused',selectedGame:'target-lock',level:4,xp:8,custom:{},stats:{}};
  const storage=memoryStorage({[DARTS_LEGACY_STORAGE_KEY]:JSON.stringify(legacy)});
  const profile=loadDartsProfile({storage});

  assert.equal(profile.selectedGame,'target-lock');
  assert.equal(storage.dump()[DARTS_STORAGE_KEY],undefined);
  assert.ok(storage.dump()[DARTS_LEGACY_STORAGE_KEY]);
});

test('Darts persistence continues to mirror both existing storage keys',()=>{
  const storage=memoryStorage();
  const profile=loadDartsProfile({storage});
  profile.selectedGame='route-recovery';

  const saved=persistDartsProfile(profile,{storage});
  assert.equal(saved.ok,true);
  assert.equal(JSON.parse(storage.dump()[DARTS_STORAGE_KEY]).selectedGame,'route-recovery');
  assert.equal(JSON.parse(storage.dump()[DARTS_LEGACY_STORAGE_KEY]).selectedGame,'route-recovery');
});
