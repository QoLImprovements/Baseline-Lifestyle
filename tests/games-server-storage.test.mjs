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

function runGuard({status=401,payload={ok:false,error:'signed_out'},initial={}}={}){
  class FakeStorage{
    constructor(values={}){this.values=new Map(Object.entries(values));}
    getItem(key){return this.values.has(String(key))?this.values.get(String(key)):null;}
    setItem(key,value){this.values.set(String(key),String(value));}
    removeItem(key){this.values.delete(String(key));}
  }
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
  const localStorage=new FakeStorage(initial);
  const context={
    Storage:FakeStorage,
    localStorage,
    XMLHttpRequest:FakeXHR,
    document,
    CustomEvent:class{constructor(type,options){this.type=type;this.detail=options?.detail;}},
    fetch:async()=>({ok:false,json:async()=>({ok:false})}),
    setTimeout:()=>1,
    clearTimeout(){},
    location:{reload(){}},
    addEventListener(type,listener){(listeners.window[type]??=[]).push(listener);},
    console
  };
  context.window=context;
  vm.runInNewContext(guard,context,{filename:'baseline-games-hub-guard.js'});
  return{context,listeners,attributes,localStorage};
}

test('storage authority is loaded before the normal Games Hub runtimes',()=>{
  const guardIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  const coreIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub-core.js');
  const modulesIndex=html.indexOf('/systems/baseline-games-hub/js/baseline-games-hub.js');
  assert.ok(guardIndex>-1&&coreIndex>guardIndex&&modulesIndex>coreIndex);
});

test('signed-out storage keeps games playable and temporary progress isolated in memory',()=>{
  const key='__bl_games_guest_profiles_v1__';
  const original=JSON.stringify({pairs:{level:1}});
  const {context,listeners,localStorage}=runGuard({initial:{[key]:original}});
  assert.equal(context.BaselineGameStorage.canPlay(),true);
  assert.equal(context.BaselineGameStorage.canSave(),false);
  assert.equal(context.BaselineGameStorage.getStatus(),'signed-out');
  const temporary=JSON.stringify({pairs:{level:2}});
  context.localStorage.setItem(key,temporary);
  assert.equal(context.localStorage.getItem(key),temporary);
  assert.equal(localStorage.values.get(key),original);
  assert.equal(listeners.document.click,undefined);
  assert.equal(listeners.document.submit,undefined);
  assert.equal(listeners.document.keydown,undefined);
});

test('authenticated storage enables saving without becoming the owner of game controls',()=>{
  const {context,listeners}=runGuard({status:200,payload:{ok:true,profiles:{}}});
  assert.equal(context.BaselineGameStorage.canPlay(),true);
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(listeners.document.click,undefined);
  assert.equal(listeners.document.submit,undefined);
  assert.equal(listeners.document.keydown,undefined);
});

test('device-only auto-next settings remain in native local storage',()=>{
  const key='__bl_games_auto_next_v1__';
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,profiles:{},revisions:{}}});
  context.localStorage.setItem(key,JSON.stringify({pairs:true}));
  assert.equal(localStorage.values.get(key),JSON.stringify({pairs:true}));
  assert.doesNotMatch(guard,/\[KEYS\.autoNext\]:'hubsettings'/);
});

test('browser game progress requires an explicit per-game import decision',()=>{
  const key='__bl_games_guest_profiles_v1__';
  const original=JSON.stringify({pairs:{level:4}});
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,profiles:{},revisions:{}},initial:{[key]:original}});
  assert.deepEqual(Array.from(context.BaselineGameStorage.getImportCandidates()),['pairs']);
  assert.equal(localStorage.values.get(key),original);
  assert.match(guard,/importGuestProfile/);
  assert.match(storageUi,/Nothing is imported automatically/);
  assert.match(storageUi,/Import \$\{importLabels\[app\]\|\|app\}/);
  assert.match(guard,/if\(importCandidates\(\)\.includes\(app\)\)return/);
  assert.match(storageUi,/window\.location\.reload\(\)/);
});

test('Badminton Focused is a separate explicit per-game save',()=>{
  const key='__bl_badminton_focused_v1__';
  const profile=JSON.stringify({version:1,xp:120,level:3});
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,profiles:{},revisions:{}},initial:{[key]:profile}});
  assert.deepEqual(Array.from(context.BaselineGameStorage.getImportCandidates()),['badmintonfocused']);
  assert.equal(localStorage.values.get(key),profile,'local save must remain until explicit adoption');
  assert.match(storageUi,/badmintonfocused:'Badminton Focused'/);
  assert.match(gamesApi,/badmintonfocused/);
  assert.match(savedData,/'badmintonfocused' => 'badminton-focused\.json'/);
  assert.doesNotMatch(savedData,/Shared[\s\S]{0,120}badminton-focused\.json/);
});

test('explicit game imports carry observed revisions and keep browser data until server acceptance',()=>{
  assert.match(guard,/action:'migrate_missing'[\s\S]{0,180}expectedRevisions:\{\[app\]:revisionFor\(app\)\}/);
  assert.match(guard,/if\(!own\(profiles,app\)\)[\s\S]{0,180}migration_not_verified/);
  assert.match(guard,/migration\.status===409[\s\S]{0,120}state\.status='conflict';state\.canSave=false/);
  assert.match(gamesApi,/\$expectedRevisions = is_array\(\$payload\['expectedRevisions'\]/);
  assert.match(gamesApi,/bl_resource_required_revision_from_input\(\[[\s\S]{0,120}'expectedRevision'=>\$expectedRevisions\[\$app\] \?\? null/);
  const write=gamesApi.match(/function bl_game_file_write[\s\S]*?\n\}/)?.[0]||'';
  assert.ok(write.indexOf('expectedRevision')<write.indexOf('onlyIfMissing && $resource'), 'revision check must happen before missing-only early return');
});

test('Baseline Realm Tactical Operations keeps browser saves explicit for authenticated accounts',()=>{
  assert.match(tactical,/accountAuthenticated\(\)/);
  assert.match(tactical,/Account Baseline Realm data is authoritative, including an empty Tactical Operations section/);
  assert.match(tactical,/data-action="import-browser-copy"/);
  assert.match(tactical,/data-action="keep-account-copy"/);
  assert.match(tactical,/if\(migrationPending\)return\{ok:false,pendingMigration:true\}/);
  assert.match(tactical,/if\(!signedIn\)[\s\S]{0,160}localStorage\.setItem\(LOCAL_SAVE_KEY/);
  assert.match(tactical,/LOCAL_OWNER_KEY='baseline-realm:tactical-operations:owner'/);
  assert.match(tactical,/owner&&owner===accountOwner\(\)/);
  assert.match(tactical,/browser recovery copy is retained until a later account load verifies the same state/i);
});

test('account game writes carry per-file revisions and stop on conflicts',()=>{
  assert.match(guard,/expectedRevision:revisionFor\(app\)/);
  assert.match(guard,/response\.status===409&&data\.error==='revision_conflict'/);
  assert.match(guard,/state\.status='conflict';state\.canSave=false/);
  assert.match(core,/serverStorageAuthority\(\)/);
  assert.match(core,/if\(serverStorageAuthority\(\)\) return/);
  assert.doesNotMatch(core,/serverStorageAuthority[\s\S]{0,180}isReady\(\)/);
});

test('storage presentation is non-blocking and the guard has no fallback runtime',()=>{
  assert.doesNotMatch(guard,/stopImmediatePropagation|blockLockedEvent|installStorageGate|fallbackBound|__gamesHubGuard/);
  assert.doesNotMatch(storageUi,/stopImmediatePropagation|addEventListener\(['"]keydown/);
  assert.match(storageUi,/closest\('\[data-save-status-icon\]'\)[\s\S]*event\.preventDefault\(\)/);
  assert.match(storageUi,/Temporary play is active/);
  assert.match(storageUi,/does not overwrite account data/);
});

test('Baseline Realm play loop runs independently of saving availability',()=>{
  assert.match(loader,/host\.applyOfflineProgress\(\);host\.render\(\)/);
  assert.match(loader,/host\.startLoop\(\)/);
  assert.doesNotMatch(loader,/if\s*\(\s*(?:progressAllowed|canSave\(\))\s*\)\s*host\.(?:applyOfflineProgress|startLoop)/);
});