import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'baseline-real-games-save-'));
const port=Number(process.env.BASELINE_GAMES_TEST_PORT || 46231);
const origin='http://127.0.0.1:'+port;
let server=null;
let logs='';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function startServer(env){
  server=spawn('php',['-S','127.0.0.1:'+port,'-t',root],{
    cwd:root,env:{...process.env,...env},stdio:['ignore','ignore','pipe']
  });
  server.stderr.on('data',data=>{logs=(logs+String(data)).slice(-10000);});
  for(let i=0;i<100;i++){
    if(server.exitCode!==null)throw Error('PHP server exited: '+logs);
    try{const res=await fetch(origin+'/sitewide/api/me.php');if(res.status===200)return;}catch{}
    await sleep(100);
  }
  throw Error('PHP server startup failed: '+logs);
}
async function stopServer(){
  if(!server)return;
  const process=server;server=null;
  if(process.exitCode!==null)return;
  process.kill('SIGTERM');
  await Promise.race([
    new Promise(resolve=>process.once('exit',resolve)),
    sleep(2500).then(()=>process.kill('SIGKILL'))
  ]);
}
async function call(url,{body,session}={}){
  const headers={'Accept':'application/json','Origin':origin};
  if(body!==undefined)headers['Content-Type']='application/json';
  if(session)headers['Cookie']=session;
  const response=await fetch(origin+url,{method:body===undefined?'GET':'POST',headers,body:body===undefined?undefined:JSON.stringify(body)});
  const text=await response.text();
  let data={};
  try{data=JSON.parse(text);}catch{throw Error('Non-JSON API response '+response.status+': '+text.slice(0,500));}
  return{status:response.status,data,session:response.headers.get('set-cookie')?.split(';')[0]||''};
}
async function checkMode(mode){
  logs='';
  const env={
    BASELINE_DB_PATH:path.join(temp,'test-'+mode+'.sqlite'),
    BASELINE_SAVED_DATA_PATH:path.join(temp,'saved-'+mode),
    BASELINE_RUNTIME_PATH:path.join(temp,'runtime-'+mode),
    BASELINE_RESOURCE_AUTHORITY:mode,
    BASELINE_PRIVATE_ENV_PATH:path.join(temp,'missing.env')
  };
  await startServer(env);
  try{
    const username='GameSaveTest_'+mode.replaceAll('-','_');
    const registered=await call('/sitewide/api/register.php',{
      body:{name:username,email:username+'@example.test',password:'TestOnly_679244'}
    });
    assert.equal(registered.status,200,mode+' register '+JSON.stringify(registered.data)+' PHP '+logs);
    assert.equal(registered.data.ok,true);
    const cookie=registered.session;
    assert.ok(cookie.startsWith('baseline_session='),mode+' registration must issue real session cookie');
    const login=await call('/sitewide/api/me.php',{session:cookie});
    assert.equal(login.data.authed,true,mode+' session must authenticate');
    const endpoint='/systems/baseline-recreation/api/games_data.php';
    const initial=await call(endpoint+'?bootstrap=1',{session:cookie});
    assert.equal(initial.status,200,mode+' first bootstrap '+JSON.stringify(initial.data)+' PHP '+logs);
    assert.equal(initial.data.ok,true);
    assert.deepEqual(initial.data.profiles?.pairs,undefined);
    const profile1={level:3,skillPoints:2,activeRound:{game:'pairs',turn:7},testMarker:'real-api-one'};
    const first=await call(endpoint,{
      session:cookie,body:{action:'save',app:'pairs',profile:profile1,expectedRevision:0}
    });
    assert.equal(first.status,200,mode+' first save '+JSON.stringify(first.data)+' PHP '+logs);
    assert.equal(first.data.ok,true);
    if(mode==='saved-data')assert.equal(first.data.revision,1);
    let reread=await call(endpoint+'?bootstrap=1',{session:cookie});
    assert.deepEqual(reread.data.profiles.pairs,profile1,mode+' saved progress must load in a new request');
    const profile2={...profile1,level:5,testMarker:'real-api-two'};
    const nextRevision=mode==='saved-data'?1:0;
    const second=await call(endpoint,{
      session:cookie,body:{action:'save',app:'pairs',profile:profile2,expectedRevision:nextRevision}
    });
    assert.equal(second.status,200,mode+' second save '+JSON.stringify(second.data)+' PHP '+logs);
    if(mode==='saved-data'){
      assert.equal(second.data.revision,2);
      const conflict=await call(endpoint,{
        session:cookie,body:{action:'save',app:'pairs',profile:profile1,expectedRevision:0}
      });
      assert.equal(conflict.status,409,mode+' stale write must be rejected');
    }
    reread=await call(endpoint+'?bootstrap=1',{session:cookie});
    assert.deepEqual(reread.data.profiles.pairs,profile2,mode+' later progress must win');
    await stopServer();
    await startServer(env);
    const afterRestart=await call(endpoint+'?bootstrap=1',{session:cookie});
    assert.equal(afterRestart.status,200,mode+' session persists through server restart: '+JSON.stringify(afterRestart.data));
    assert.deepEqual(afterRestart.data.profiles.pairs,profile2,mode+' saved progress survives PHP restart');
    console.log(mode+': real authenticated register → save → bootstrap → update → restart → reload PASSED');
  }finally{
    await stopServer();
  }
}
try{
  for(const mode of ['sqlite','saved-data'])await checkMode(mode);
}finally{
  await stopServer();
  fs.rmSync(temp,{recursive:true,force:true});
}
