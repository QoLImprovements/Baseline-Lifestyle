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
  const {context,listeners}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{}}});
  assert.equal(context.BaselineGameStorage.canPlay(),true);
  assert.equal(context.BaselineGameStorage.canSave(),true);
  assert.equal(context.BaselineGameStorage.getStatus(),'ready');
  assert.equal(listeners.document.click,undefined);
  assert.equal(listeners.document.submit,undefined);
  assert.equal(listeners.document.keydown,undefined);
});

test('device-only auto-next settings remain in native local storage',()=>{
  const key='__bl_games_auto_next_v1__';
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{},revisions:{}}});
  context.localStorage.setItem(key,JSON.stringify({pairs:true}));
  assert.equal(localStorage.values.get(key),JSON.stringify({pairs:true}));
  assert.doesNotMatch(guard,/\[KEYS\.autoNext\]:'hubsettings'/);
});

test('browser game progress remains guest-local and is never promoted into an authenticated account',()=>{
  const key='__bl_games_guest_profiles_v1__';
  const original=JSON.stringify({pairs:{level:4}});
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{},revisions:{}},initial:{[key]:original}});
  assert.equal(localStorage.values.get(key),original,'physical guest save must remain local');
  assert.equal(context.localStorage.getItem(key),JSON.stringify({}),'signed-in compatibility view must come from account profiles');
  assert.equal(typeof context.BaselineGameStorage.getImportCandidates,'undefined');
  assert.equal(typeof context.BaselineGameStorage.importGuestProfile,'undefined');
  assert.doesNotMatch(guard,/importGuestProfile|migrate_missing|migration_not_verified/);
  assert.doesNotMatch(storageUi,/Browser progress available|Nothing is imported automatically|Import \$\{/);
});

test('Badminton Focused remains a separate guest-local save while signed-in account data stays separate',()=>{
  const key='__bl_badminton_focused_v1__';
  const profile=JSON.stringify({version:1,xp:120,level:3});
  const {context,localStorage}=runGuard({status:200,payload:{ok:true,accountId:7,profiles:{},revisions:{}},initial:{[key]:profile}});
  assert.equal(localStorage.values.get(key),profile,'guest Badminton Focused save must not be deleted');
  assert.equal(context.localStorage.getItem(key),null,'signed-in view must not adopt guest Badminton Focused progress');
  assert.match(gamesApi,/badmintonfocused/);
  assert.match(savedData,/'badmintonfocused' => 'badminton-focused\.json'/);
  assert.doesNotMatch(savedData,/Shared[\s\S]{0,120}badminton-focused\.json/);
});

test('retired Games Hub import-owner metadata is removed on authenticated load',()=>{
  const key='__bl_badminton_focused_v1__';
  const ownerKey='__bl_games_legacy_profiles_owner_v1__';
  const profile=JSON.stringify({version:1,xp:120,level:3});
  const result=runGuard({
    status:200,
    payload:{ok:true,accountId:8,profiles:{},revisions:{}},
    initial:{[key]:profile,[ownerKey]:'uid:7'}
  });
  assert.equal(result.localStorage.values.get(key),profile);
  assert.equal(result.localStorage.values.has(ownerKey),false);
  assert.doesNotMatch(guard,/bindLegacyProfilesToAccount|legacyOwner\(\)|accountOwner/);
  assert.match(guard,/nativeDelete\(KEYS\.legacyOwner\)/);
});

test('retired game migration API is absent while normal account writes remain revisioned',()=>{
  assert.doesNotMatch(guard,/action:'migrate_missing'|importGuestProfile|getImportCandidates/);
  assert.doesNotMatch(gamesApi,/migrate_missing|expectedRevisions/);
  assert.match(guard,/action:'save',app,profile,expectedRevision:revisionFor\(app\)/);
  assert.match(gamesApi,/bl_resource_required_revision_from_input\(\$payload\)/);
});

test('Baseline Realm Tactical Operations keeps guest saves local and never promotes them when signed in',()=>{
  assert.match(tactical,/accountAuthenticated\(\)/);
  assert.match(tactical,/if\(!signedIn\)[\s\S]{0,180}localStorage\.setItem\(LOCAL_SAVE_KEY/);
  assert.match(tactical,/if\(signedIn\)\{[\s\S]{0,260}inventoryService\?\.read/);
  assert.match(tactical,/localStorage\.removeItem\(RETIRED_OWNER_KEY\)/);
  assert.doesNotMatch(tactical,/import-browser-copy|keep-account-copy|migrationPending|importCandidate|migrationReview/);
  assert.doesNotMatch(tactical,/function clearLocalSave/);
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