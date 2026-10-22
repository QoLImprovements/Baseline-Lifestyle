import test from 'node:test';
import assert from 'node:assert/strict';

import { GAMES } from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-config.js';
import {
  BADMINTON_STORAGE_KEY,
  defaultBadmintonProfile,
  normaliseBadmintonProfile,
  loadBadmintonProfile,
  persistBadmintonProfile,
  recordBadmintonResult,
  buildBadmintonRealmContribution
} from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-profile.js';

function memoryStorage(initial={}){
  const data=new Map(Object.entries(initial));
  return {
    getItem:key=>data.has(key)?data.get(key):null,
    setItem:(key,value)=>data.set(key,String(value)),
    dump:()=>Object.fromEntries(data)
  };
}

test('Badminton profile normalisation preserves storage compatibility and all 15 games',()=>{
  const profile=normaliseBadmintonProfile({
    selectedGame:'shot-choice',
    level:'4',
    xp:'12',
    bank:'7',
    games:{'shot-choice':{attempts:9,correct:6}}
  },GAMES);

  assert.equal(profile.selectedGame,'shot-choice');
  assert.equal(profile.level,4);
  assert.equal(profile.xp,12);
  assert.equal(profile.bank,7);
  assert.equal(Object.keys(profile.games).length,GAMES.length);
  assert.equal(profile.games['shot-choice'].attempts,9);
  assert.equal(profile.games['shot-choice'].correct,6);
  assert.equal(profile.games['shot-choice'].premature,0);
});

test('Badminton profile falls back safely from an unknown selected game',()=>{
  const profile=normaliseBadmintonProfile({selectedGame:'removed-game'},GAMES);
  assert.equal(profile.selectedGame,GAMES[0].id);
});

test('Badminton persistence continues to use the existing v1 storage key',()=>{
  const storage=memoryStorage();
  const profile=defaultBadmintonProfile(GAMES);
  profile.selectedGame='tempo-break';

  assert.equal(persistBadmintonProfile(profile,{storage}),true);
  assert.ok(storage.dump()[BADMINTON_STORAGE_KEY]);

  const loaded=loadBadmintonProfile(GAMES,{storage});
  assert.equal(loaded.selectedGame,'tempo-break');
});

test('Badminton scoring authority preserves current correct-answer rewards',()=>{
  const profile=defaultBadmintonProfile(GAMES);
  recordBadmintonResult(profile,'read-racket',true);

  assert.equal(profile.games['read-racket'].attempts,1);
  assert.equal(profile.games['read-racket'].correct,1);
  assert.equal(profile.games['read-racket'].xp,14);
  assert.equal(profile.games['read-racket'].streak,1);
  assert.equal(profile.xp,11);
  assert.equal(profile.bank,2);
  assert.equal(profile.rounds,1);
  assert.equal(profile.correct,1);
});

test('Badminton scoring authority distinguishes ordinary, premature and late failures',()=>{
  const profile=defaultBadmintonProfile(GAMES);
  recordBadmintonResult(profile,'wait-contact',false,{premature:true});
  recordBadmintonResult(profile,'wait-contact',false,{late:true});

  const stat=profile.games['wait-contact'];
  assert.equal(stat.attempts,2);
  assert.equal(stat.correct,0);
  assert.equal(stat.premature,1);
  assert.equal(stat.late,1);
  assert.equal(stat.xp,10);
  assert.equal(stat.streak,0);
  assert.equal(profile.xp,8);
  assert.equal(profile.bank,0);
  assert.equal(profile.rounds,2);
});


test('Badminton Realm contribution remains derived from Badminton progression only',()=>{
  const profile=defaultBadmintonProfile(GAMES);
  profile.level=5;
  profile.games['shot-choice'].level=3;
  profile.games['attack-purpose'].level=2;
  profile.games['read-racket'].level=2;
  profile.games['deception-filter'].level=3;
  profile.games['pressure-ladder'].level=4;

  const contribution=buildBadmintonRealmContribution(profile,GAMES);

  assert.equal(contribution.level,5);
  assert.equal(contribution.linkedLevels,5+(2+1+1+2+3));
  assert.equal(contribution.attackMult,1.009);
  assert.equal(contribution.critChance,0.0105);
  assert.equal(contribution.bossDamageMult,1.018);
  assert.deepEqual(contribution.unlockedTraits,['Badminton Focused: Visual Discipline']);
});
