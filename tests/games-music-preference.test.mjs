import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const source=readFileSync(fileURLToPath(new URL('../systems/baseline-recreation/js/games-music.js',import.meta.url)),'utf8');
const html=readFileSync(fileURLToPath(new URL('../systems/baseline-recreation/baseline-recreation.html',import.meta.url)),'utf8');

function makePlayer(startingProfile=null){
  let stored=startingProfile===null?null:structuredClone(startingProfile);
  const writes=[];
  const listeners=new Map();
  const document={
    readyState:'loading',
    addEventListener(name,listener){
      const callbacks=listeners.get(name)||[];
      callbacks.push(listener);
      listeners.set(name,callbacks);
    },
    querySelectorAll(){return [];}
  };
  const authority={
    getProfile(app){assert.equal(app,'hubsettings');return stored===null?null:structuredClone(stored);},
    setTemporaryProfile(app,profile){assert.equal(app,'hubsettings');stored=structuredClone(profile);return true;},
    saveProfile(app,profile,options){
      assert.equal(app,'hubsettings');
      stored=structuredClone(profile);
      writes.push({app,profile:structuredClone(profile),options:structuredClone(options)});
      return Promise.resolve(true);
    }
  };
  const window={BaselineGameStorage:authority,addEventListener(){}};
  runInNewContext(source,{window,document,console});
  return {
    api:window.BaselineGamesMusic,
    getProfile:()=>stored===null?null:structuredClone(stored),
    writes,
    clickMusicToggle(){
      const target={closest(selector){return selector==='[data-games-music-toggle]'?target:null;}};
      (listeners.get('click')||[]).forEach(callback=>callback({target,preventDefault(){}}));
    }
  };
}

test('new players start with music off and on/off controls are initially consistent',()=>{
  const player=makePlayer();
  assert.equal(player.api.settings().enabled,false);
  assert.equal(player.writes.length,0,'opening the hub must not create a music preference');
  assert.match(html,/data-games-music-toggle type="button" aria-pressed="false">Off<\/button>/);
  assert.match(source,/data-games-music-toggle aria-pressed=\\"false\\">Off<\/button>/);
});

test('explicit account preference is restored, while legacy profiles without music are off',()=>{
  assert.equal(makePlayer({music:{enabled:true,volume:0.4}}).api.settings().enabled,true);
  assert.equal(makePlayer({music:{enabled:false,volume:0.4}}).api.settings().enabled,false);
  assert.equal(makePlayer({textScale:{detectword:1.12}}).api.settings().enabled,false);
});

test('music button saves both on and off to the shared account profile',()=>{
  const player=makePlayer({textScale:{detectword:1.12,make24:1},keepMe:true});
  player.clickMusicToggle();
  assert.equal(player.api.settings().enabled,true);
  assert.equal(player.writes.at(-1).profile.music.enabled,true);
  assert.deepEqual(player.writes.at(-1).options,{immediate:true,keepalive:false});
  assert.equal(makePlayer(player.getProfile()).api.settings().enabled,true,'On survives a fresh visit');
  player.clickMusicToggle();
  assert.equal(player.api.settings().enabled,false);
  assert.equal(player.writes.at(-1).profile.music.enabled,false);
  assert.equal(player.getProfile().keepMe,true,'unrelated account fields are retained');
  assert.equal(makePlayer(player.getProfile()).api.settings().enabled,false,'Off survives a fresh visit');
});
