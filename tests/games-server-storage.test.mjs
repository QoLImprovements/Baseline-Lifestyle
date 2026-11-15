import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const guard=read('systems/baseline-recreation/js/baseline-recreation-guard.js');
const storageUi=read('systems/baseline-recreation/js/games-server-storage-ui.js');
const loader=read('systems/baseline-recreation/js/baseline-recreation-loader.js');
const core=read('systems/baseline-recreation/js/baseline-recreation-core.js');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const gamesApi=read('systems/baseline-recreation/api/games_data.php');
const savedData=read('sitewide/api/saved_data.php');
const tactical=read('systems/baseline-recreation/games/baseline-realm/tactical-operations/js/tactical-operations-scene.js');
const exploration=read('systems/baseline-recreation/games/baseline-realm/exploration/js/exploration-jrpg.js');
const explorationIntegrity=read('systems/baseline-recreation/games/baseline-realm/exploration/js/exploration-jrpg-state-integrity.js');
const ninja=read('systems/baseline-recreation/games/baseline-realm/ninja-training/js/ninja-training-runtime.js');
const dartsStorage=read('systems/baseline-recreation/games/darts-focused/js/darts-focused-storage.js');
const badmintonProfile=read('systems/baseline-recreation/games/badminton-focused/js/badminton-focused-profile.js');
const registry=read('systems/baseline-recreation/js/games-registry.js');
const puzzlesRegistry=read('systems/baseline-recreation/puzzles/shared/js/puzzles-registry.js');
const jigsaw=read('systems/baseline-recreation/puzzles/the-weight-of-coherence/js/weight-of-coherence.js');

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
  vm.runInNewContext(guard,context,{filename:'baseline-recreation-guard.js'});
  return{context,listeners,attributes};
}

test('storage authority is loaded before the normal Recreation runtimes',()=>{
  const guardIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-guard.js');
  const coreIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation-core.js');
  const modulesIndex=html.indexOf('/systems/baseline-recreation/js/baseline-recreation.js');
  assert.ok(guardIndex>-1&&coreIndex>guardIndex&&modulesIndex>coreIndex);
});

test('Recreation production runtime has no browser persistence authority',()=>{
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
  assert.match(core,/restoreSavedCoreRounds\(\);[\s\S]*?applyOfflineNinjaProgress\(\)/);
  assert.match(core,/safeRenderAll\(\);\s*startNinjaLoop\(\)/);
  assert.doesNotMatch(core,/if\s*\(\s*(?:progressAllowed|canSave\(\))\s*\)\s*(?:applyOfflineNinjaProgress|startNinjaLoop)/);
});

test('every current game and jigsaw save app is covered by the server authority contract',()=>{
  const expected=[
    'pairs','detectword','make24','trackcoin','ruleshift','crossnumber','ninja',
    'blockgrid','coloursort','dartsfocused','badmintonfocused','hubsettings',
    'weightcoherence','unheardsignal','pantherjigsaw','bearjigsaw','meridiangrove'
  ];
  expected.forEach(app=>{
    assert.ok(gamesApi.includes("'"+app+"'"),app+' must be accepted by games_data.php');
    assert.match(savedData,new RegExp("'"+app+"'\\s*=>"),app+' must have a server-side saved-data file');
  });
  assert.match(registry,/profileApp:'dartsfocused'/);
  assert.match(registry,/profileApp:'badmintonfocused'/);
  assert.match(registry,/persistentApps:storageApps/);
  assert.match(guard,/BASELINE_GAMES_REGISTRY\?\.persistentApps\?\.\(\)/);
  assert.match(guard,/\['pairs'[\s\S]*?'crossnumber'[\s\S]*?'hubsettings'\]/);
  for(const app of ['weightcoherence','unheardsignal','pantherjigsaw','bearjigsaw']){
    assert.ok(puzzlesRegistry.includes("app:'"+app+"'"));
  }
});

test('Recreation settings use the same server storage authority as game progress',()=>{
  assert.match(registry,/['"]hubsettings['"]/);
  assert.match(gamesApi,/['"]hubsettings['"]/);
  assert.match(savedData,/'hubsettings'\s*=>\s*'recreation-settings\.json'/);
  assert.doesNotMatch(read('systems/baseline-recreation/js/games-music.js'),/\b(?:localStorage|sessionStorage|indexedDB)\b/);
  assert.match(read('systems/baseline-recreation/js/games-music.js'),/getProfile\?\.\('hubsettings'\)/);
  assert.match(read('systems/baseline-recreation/js/games-music.js'),/saveProfile\?\.\('hubsettings'/);
});

test('Cross Number uses the shared server storage authority and has a saved-data resource',()=>{
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


test('failed authenticated writes retain the latest local progress and retry with the original revision',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  const writes=[];
  context.fetch=async(_url,options)=>{
    writes.push(JSON.parse(options.body));
    return writes.length===1
      ?{ok:false,status:503,json:async()=>({ok:false,error:'games_data_failed'})}
      :{ok:true,status:200,json:async()=>({ok:true,revision:10,profile:{level:6}})};
  };
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:5},{immediate:true}),false);
  assert.equal(context.BaselineGameStorage.canSave(),false);
  assert.equal(context.BaselineGameStorage.getStatus(),'unavailable');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,5);
  // Even while saving is stopped, subsequent play must update the recoverable draft.
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:6},{immediate:true}),false);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  assert.equal(await context.BaselineGameStorage.retryFailedSaves(),true);
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),0);
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  assert.equal(writes.length,2);
  assert.equal(writes[0].expectedRevision,9);
  assert.equal(writes[1].expectedRevision,9);
  assert.equal(writes[1].profile.level,6);
});

test('conflicted writes stay unsaved and cannot overwrite another session on retry',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  let posted=0;
  context.fetch=async()=>{posted++;return{ok:false,status:409,json:async()=>({ok:false,error:'revision_conflict'})};};
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:7},{immediate:true}),false);
  assert.equal(context.BaselineGameStorage.getStatus(),'conflict');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,7);
  assert.equal(await context.BaselineGameStorage.retryFailedSaves(),false);
  assert.equal(posted,1,'retry must not silently overwrite a newer server revision');
});

test('older save acknowledgements never rewind newer in-memory game progress',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  let replyFirst,posted=0;
  context.fetch=async(_url,options)=>{
    posted++;
    if(posted===1)return new Promise(resolve=>{replyFirst=resolve;});
    return{ok:true,status:200,json:async()=>({ok:true,revision:11,profile:JSON.parse(options.body).profile})};
  };
  const first=context.BaselineGameStorage.saveProfile('pairs',{level:5},{immediate:true});
  const second=context.BaselineGameStorage.saveProfile('pairs',{level:6},{immediate:true});
  await Promise.resolve();await Promise.resolve();
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  assert.equal(typeof replyFirst,'function');
  replyFirst({ok:true,status:200,json:async()=>({ok:true,revision:10,profile:{level:5}})});
  await first;
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  await second;
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),0);
  assert.equal(posted,2);
});

test('save status describes unconfirmed writes and exposes an in-page retry, not false success',()=>{
  assert.match(storageUi,/Saving game progress/);
  assert.match(storageUi,/Saving paused: another version exists/);
  assert.match(storageUi,/data-games-retry-save/);
  assert.match(storageUi,/retryFailedSaves/);
  assert.match(storageUi,/Press Save to store and verify this game/);
  assert.match(guard,/getUnsavedCount:unsavedCount/);
});


test('unchanged authenticated account events do not cancel queued game saves',async()=>{
  const {context,listeners}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:5}),true);
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  listeners.document['baseline:auth'][0]({detail:{authed:true}});
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,5);
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
});


test('failed account writes schedule automatic recovery and online resumption without weakening conflicts',()=>{
  assert.match(guard,/function scheduleRecovery\(\)/);
  assert.match(guard,/global\.addEventListener\('online'/);
  assert.match(guard,/global\.addEventListener\('pageshow'/);
  assert.match(guard,/retryDelayMs=Math\.min\(30000/);
  assert.match(storageUi,/const saved=Boolean\(state\.canSave && state\.unsavedCount===0\)/);
  assert.match(storageUi,/BaselineGameStorage\?\.saveNow\?\.\(app\)/);
});


test('authenticated save retries automatically when connectivity resumes, preserving the latest draft',async()=>{
  const {context,listeners}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  const requests=[];
  context.fetch=async(_url,options)=>{
    const payload=JSON.parse(options.body);
    requests.push(payload);
    if(requests.length===1){
      return{ok:false,status:503,json:async()=>({ok:false,error:'temporarily_unavailable'})};
    }
    return{ok:true,status:200,json:async()=>({ok:true,revision:10,profile:payload.profile})};
  };
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:5},{immediate:true}),false);
  assert.equal(context.BaselineGameStorage.getStatus(),'unavailable');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  // A new gameplay change while the server is down must become the version retried.
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:6},{immediate:true}),false);
  listeners.window.online[0]();
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),0);
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getProfile('pairs').level,6);
  assert.equal(requests.length,2);
  assert.equal(requests[1].expectedRevision,9);
  assert.equal(requests[1].profile.level,6);
});


test('expired login pauses retries and protects unacknowledged game progress',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{level:4}},revisions:{pairs:9}}});
  let calls=0;
  context.fetch=async()=>{calls++;return{ok:false,status:401,json:async()=>({ok:false,error:'signed_out'})};};
  assert.equal(await context.BaselineGameStorage.saveProfile('pairs',{level:5},{immediate:true}),false);
  assert.equal(calls,1);
  assert.equal(context.BaselineGameStorage.getStatus(),'signed-out');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  assert.equal(context.BaselineGameStorage.isAuthenticated(),false);
});


test('manual Save always POSTs the current game even without queued changes and verifies GET',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{app:'pairs',level:4}},revisions:{pairs:9}}});
  const calls=[];
  context.fetch=async(url,options={})=>{
    calls.push({url,method:options.method});
    if(options.method==='GET')return{
      ok:true,status:200,json:async()=>({ok:true,found:true,app:'pairs',profile:{app:'pairs',level:4},revision:10})
    };
    const body=JSON.parse(options.body);
    assert.equal(body.app,'pairs');
    assert.equal(body.expectedRevision,9);
    assert.equal(body.profile.level,4);
    return{ok:true,status:200,json:async()=>({ok:true,app:'pairs',profile:body.profile,revision:10})};
  };
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),0);
  assert.equal(await context.BaselineGameStorage.saveNow('pairs'),true);
  assert.deepEqual(calls.map(c=>c.method),['POST','GET']);
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),0);
  assert.ok(context.BaselineGameStorage.lastSavedAt('pairs')>0);
});

test('manual Save refuses false success when server readback does not match',async()=>{
  const {context}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{pairs:{app:'pairs',level:4}},revisions:{pairs:9}}});
  context.fetch=async(_url,options={})=>{
    if(options.method==='GET')return{ok:true,status:200,json:async()=>({ok:true,found:true,profile:{app:'pairs',level:1}})};
    return{ok:true,status:200,json:async()=>({ok:true,app:'pairs',profile:{app:'pairs',level:4},revision:10})};
  };
  assert.equal(await context.BaselineGameStorage.saveNow('pairs'),false);
  assert.equal(context.BaselineGameStorage.getLastError(),'save_readback_mismatch');
  assert.equal(context.BaselineGameStorage.getUnsavedCount(),1);
  assert.equal(context.BaselineGameStorage.lastSavedAt('pairs'),0);
});

test('all rendered game Save controls are actionable with an explicit game target',()=>{
  assert.match(storageUi,/function saveAppFor\(container\)/);
  assert.match(storageUi,/data-save-status-app/);
  assert.match(storageUi,/BaselineGameStorage\?\.saveNow\?\.\(app\)/);
  assert.match(guard,/function saveNow\(app\)/);
  assert.match(guard,/method:'GET',credentials:'same-origin',cache:'no-store'/);
});


test('every server accepted game app has an actual Saved Data file mapping',()=>{
  const match=gamesApi.match(/function bl_game_data_file_apps\(\): array \{\s*return \[([^\]]+)\];/);
  assert.ok(match,'Games API persistent app list must be discoverable');
  const apps=Array.from(match[1].matchAll(/'([^']+)'/g),match=>match[1]);
  assert.ok(apps.length>=20,'complete game inventory is checked');
  for(const app of apps){
    assert.match(savedData,new RegExp("'"+app+"'\\s*=>"),app+' is accepted by the API but lacks a Saved Data filename');
  }
  assert.match(savedData,/'pathrecall'\s*=>\s*'path-recall\.json'/);
  assert.match(savedData,/'combatsequence'\s*=>\s*'combat-sequence\.json'/);
});
