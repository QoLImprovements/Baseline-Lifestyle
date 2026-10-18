import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const guard=read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
const storageUi=read('systems/baseline-games-hub/js/games-server-storage-ui.js');
const loader=read('systems/baseline-games-hub/js/baseline-games-hub-v14.js');
const core=read('systems/baseline-games-hub/js/baseline-games-hub-core.js');
const html=read('systems/baseline-games-hub/baseline-games-hub.html');
const gamesApi=read('systems/baseline-games-hub/api/games_data.php');
const savedData=read('sitewide/api/saved_data.php');
const tactical=read('systems/baseline-games-hub/games/baseline-realm/tactical-operations/js/tactical-operations-scene.js');
const exploration=read('systems/baseline-games-hub/games/baseline-realm/exploration/js/exploration-jrpg.js');
const explorationIntegrity=read('systems/baseline-games-hub/games/baseline-realm/exploration/js/exploration-jrpg-state-integrity.js');
const ninja=read('systems/baseline-games-hub/games/baseline-realm/ninja-training/js/ninja-training-runtime.js');
const dartsStorage=read('systems/baseline-games-hub/games/darts-focused/js/darts-focused-storage.js');
const badmintonProfile=read('systems/baseline-games-hub/games/badminton-focused/js/badminton-focused-profile.js');
const registry=read('systems/baseline-games-hub/js/games-registry.js');
const puzzlesRegistry=read('systems/baseline-games-hub/puzzles/shared/js/puzzles-registry.js');
const jigsaw=read('systems/baseline-games-hub/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');

function runGuard({status=401,payload={ok:false,error:'signed_out'}}={}){
  class FakeXHR{
    open(method,url){this.method=method;this.url=url;}
    setRequestHeader(){}
    send(){this.status=status;this.responseText=JSON.stringify(payload);}
  }
  const listeners={document:{},window:{}};
  const attributes=new Map();
  const document={
    visibilityState:'visible',
    documentElement:{
      setAttribute(name,value){attributes.set(name,String(value));},
      removeAttribute(name){attributes.delete(name);}
    },
    addEventListener(type,listener){(listeners.document[type]??=[]).push(listener);},
    dispatchEvent(){}
  };
  const context={
    XMLHttpRequest:FakeXHR,
    document,
    CustomEvent:class{constructor(type,options){this.type=type;this.detail=options?.detail;}},
    fetch:async()=>({ok:false,status:503,json:async()=>({ok:false,error:'unavailable'})}),
    setTimeout:()=>1,
    clearTimeout(){},
    addEventListener(type,listener){(listeners.window[type]??=[]).push(listener);},
    console
  };
  context.window=context;
  vm.runInNewContext(guard,context,{filename:'baseline-games-hub-guard.js'});
  return{context,listeners,attributes};
}

test('storage authority is loaded before the normal Games Hub runtimes',()=>{
  const guardIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const coreIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js');
  const modulesIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub.js');
  assert.ok(guardIndex>-1&&coreIndex>guardIndex&&modulesIndex>coreIndex);
});

test('Games Hub production runtime has no browser persistence authority',()=>{
  for(const [name,source] of [
    ['guard',guard],['core',core],['tactical',tactical],['exploration',exploration],
    ['exploration integrity',explorationIntegrity],['ninja',ninja],
    ['darts storage',dartsStorage],['badminton profile',badmintonProfile]
  ]){
    assert.doesNotMatch(source,/\b(?:localStorage|sessionStorage|indexedDB)\b/,name+' must not use browser persistence');
  }
  assert.doesNotMatch(guard,/Storage\.prototype|nativeGet|nativeSet|nativeRemove/);
});

test('signed-out play is temporary page memory and never a browser save',()=>{
  const {context}=runGuard();
  assert.equal(context.BaselineGameStorage.canPlay(),true);
  assert.equal(context.BaselineGameStorage.canSave(),false);
  assert.equal(context.BaselineGameStorage.getStatus(),'signed-out');
  assert.equal(context.BaselineGameStorage.getProfile('pairs'),null);
  assert.equal(context.BaselineGameStorage.setTemporaryProfile('pairs',{level:2}),true);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,2);
  const saveResult=context.BaselineGameStorage.saveProfile('pairs',{level:3});
  assert.equal(typeof saveResult?.then,'function');
});

test('authenticated bootstrap exposes only server profiles as the live starting state',()=>{
  const {context}=runGuard({
    status:200,
    payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}
  });
  assert.equal(context.BaselineGameStorage.isAuthenticated(),true);
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,4);
  const copy=context.BaselineGameStorage.getProfile('pairs');
  copy.level=99;
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,4,'callers receive a copy, not the server-authority object');
});

test('server profile writes are revision protected and conflicts stop later saving',()=>{
  assert.match(guard,/expectedRevision:revisionFor\(key\)/);
  assert.match(guard,/response\.status===409&&data\.error==='revision_conflict'/);
  assert.match(guard,/state\.status='conflict'/);
  assert.match(guard,/state\.canSave=false/);
  assert.match(gamesApi,/bl_resource_required_revision_from_input\(\$payload\)/);
  assert.doesNotMatch(guard,/migrate_missing|importGuestProfile|getImportCandidates|legacyOwner/);
});

test('focused games use the explicit Games server authority while test storage remains injectable',()=>{
  assert.match(dartsStorage,/BaselineGameStorage/);
  assert.match(dartsStorage,/storage=null/);
  assert.match(dartsStorage,/saveProfile\?\.\('dartsfocused'/);
  assert.match(badmintonProfile,/BaselineGameStorage/);
  assert.match(badmintonProfile,/storage=null/);
  assert.match(badmintonProfile,/saveProfile\?\.\('badmintonfocused'/);
  assert.match(savedData,/'badmintonfocused' => 'badminton-focused\.json'/);
  assert.match(savedData,/'dartsfocused' => 'darts-focused\.json'/);
});

test('Baseline Realm signed-out state is memory-only and signed-in state uses account services',()=>{
  assert.match(tactical,/let temporarySave=null/);
  assert.match(tactical,/temporarySave=clone\(data\)/);
  assert.match(tactical,/inventoryService\?\.transact/);
  assert.match(exploration,/BaselineGameStorage\?\.getProfile\?\.\('meridiangrove'\)/);
  assert.match(exploration,/BaselineGameStorage\?\.saveProfile\?\.\('meridiangrove',this\.state\)/);
  assert.match(ninja,/BaselineGameStorage\?\.getProfile\?\.\('dartsfocused'\)/);
  assert.match(ninja,/BaselineGameStorage\?\.getProfile\?\.\('badmintonfocused'\)/);
});

test('storage presentation accurately describes server saving and temporary unsigned play',()=>{
  assert.match(storageUi,/Game and puzzle progress is stored on the server/);
  assert.match(storageUi,/Temporary play is active/);
  assert.match(storageUi,/Progress from this temporary session is not saved/);
  assert.doesNotMatch(storageUi,/browser save|Import/);
});

test('storage layer does not become a second controller for game interactions',()=>{
  const {listeners}=runGuard();
  assert.equal(listeners.document.click,undefined);
  assert.equal(listeners.document.submit,undefined);
  assert.equal(listeners.document.keydown,undefined);
  assert.doesNotMatch(guard,/stopImmediatePropagation|installStorageGate|fallbackBound/);
});

test('Baseline Realm play loop runs independently of saving availability',()=>{
  assert.match(loader,/host\.applyOfflineProgress\(\);host\.render\(\)/);
  assert.match(loader,/host\.startLoop\(\)/);
  assert.doesNotMatch(loader,/if\s*\(\s*(?:progressAllowed|canSave\(\))\s*\)\s*host\.(?:applyOfflineProgress|startLoop)/);
});

test('every current game and jigsaw save app is covered by the server authority contract',()=>{
  const expected=[
    'pairs','detectword','make24','trackcoin','ruleshift','crossnumber','ninja',
    'blockgrid','coloursort','dartsfocused','badmintonfocused',
    'weightcoherence','unheardsignal','pantherjigsaw','bearjigsaw','meridiangrove'
  ];
  expected.forEach(app=>{
    assert.ok(gamesApi.includes("'"+app+"'"),app+' must be accepted by games_data.php');
    assert.match(savedData,new RegExp("'"+app+"'\\s*=>"),app+' must have a server-side saved-data file');
  });
  assert.match(registry,/profileApp:'dartsfocused'/);
  assert.match(registry,/profileApp:'badmintonfocused'/);
  assert.match(registry,/persistentApps:storageApps/);
  assert.match(guard,/BASELINE_GAMES_HUB_GAME_REGISTRY\?\.persistentApps\?\.\(\)/);
  for(const app of ['weightcoherence','unheardsignal','pantherjigsaw','bearjigsaw']){
    assert.ok(puzzlesRegistry.includes("app:'"+app+"'"));
  }
});

test('Crossnumber uses the shared server storage authority and has a saved-data resource',()=>{
  assert.match(registry,/['"]crossnumber['"]/);
  assert.match(gamesApi,/['"]crossnumber['"]/);
  assert.match(savedData,/'crossnumber'\s*=>\s*'crossnumber\.json'/);
  assert.match(storageUi,/#crossnumberPanel > \.puzzle-library-toolbar/);
});

test('jigsaws use the shared server storage authority and expose save state in the puzzle player',()=>{
  assert.match(jigsaw,/BaselineGameStorage/);
  assert.match(jigsaw,/setTemporaryProfile\?\.\(APP,payload\)/);
  assert.match(jigsaw,/saveProfile\?\.\(APP,payload/);
  assert.match(storageUi,/#jigsawPlayerCard > \.puzzle-library-toolbar/);
  assert.match(storageUi,/Progress is saved server-side to your Baseline Lifestyle account/);
});

test('per-app server writes are serialised and immediate saves replace stale queued writes',()=>{
  assert.match(guard,/const writeChains=Object\.create\(null\)/);
  assert.match(guard,/const previous=writeChains\[key\]\|\|Promise\.resolve\(true\)/);
  assert.match(guard,/previous\.catch\(\(\)=>false\)\.then\(\(\)=>postProfileNow\(key,snapshot,keepalive\)\)/);
  assert.match(guard,/global\.clearTimeout\(timers\[key\]\);\s*delete pending\[key\];\s*return postProfile\(key,profile,keepalive\)/);
});
