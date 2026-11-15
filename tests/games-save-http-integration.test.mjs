import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {createServer} from 'node:net';
import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
async function randomPort(){
  const server=createServer();
  await new Promise((resolveOpen,reject)=>server.once('error',reject).listen(0,'127.0.0.1',resolveOpen));
  const port=server.address().port;
  await new Promise(resolveClose=>server.close(resolveClose));
  return port;
}

async function runWithPhp(mode,callback){
  const temporary=mkdtempSync(join(tmpdir(),'baseline-games-http-'));
  const port=await randomPort();
  const base='http://127.0.0.1:'+port;
  const environment={
    ...process.env,
    BASELINE_DB_PATH:join(temporary,'games.sqlite'),
    BASELINE_SAVED_DATA_PATH:join(temporary,'Saved Data'),
    BASELINE_RUNTIME_PATH:join(temporary,'Runtime'),
    BASELINE_RESOURCE_AUTHORITY:mode,
    BASELINE_PRIVATE_ENV_PATH:join(temporary,'missing.env'),
    BL_SITE_URL:base,
  };
  const child=spawn('php',['-S','127.0.0.1:'+port,'-t',root],{cwd:root,env:environment,stdio:['ignore','ignore','pipe']});
  let logs='';child.stderr.on('data',chunk=>{logs+=chunk.toString();});
  try{
    let active=false;
    for(let i=0;i<90;i++){
      if(child.exitCode!=null)break;
      try{
        const response=await fetch(base+'/sitewide/api/me.php');
        if(response.ok){active=true;break;}
      }catch(_error){}
      await new Promise(done=>setTimeout(done,100));
    }
    assert.ok(active,'isolated PHP server failed to launch: '+logs.slice(-2000));
    await callback(base);
  }finally{
    child.kill('SIGTERM');
    rmSync(temporary,{recursive:true,force:true});
  }
}

test('real authenticated Games save API writes, reads back and persists across requests',async()=>{
  for(const mode of ['sqlite','saved-data']){
    await runWithPhp(mode,async(base)=>{
      const json=async(url,options={})=>{
        const response=await fetch(base+url,options);
        const data=await response.json().catch(()=>({}));
        return{response,data};
      };
      const unsigned=await json('/systems/baseline-recreation/api/games_data.php?bootstrap=1');
      assert.equal(unsigned.response.status,401,mode+' must protect anonymous progress');

      const registration=await json('/sitewide/api/register.php',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name:'GamesSaveContract',email:'games-save-contract@example.test',password:'test-only-password-123'})
      });
      assert.equal(registration.response.status,200,mode+' registration failed: '+JSON.stringify(registration.data));
      const cookie=registration.response.headers.get('set-cookie')?.split(';')[0];
      assert.ok(cookie?.startsWith('baseline_session='),mode+' needs real session cookies');
      const headers={Cookie:cookie,'Content-Type':'application/json'};
      const first=await json('/systems/baseline-recreation/api/games_data.php?bootstrap=1',{headers});
      assert.equal(first.response.status,200,mode+' bootstrap failed: '+JSON.stringify(first.data));
      assert.equal(first.data.authed,true);
      assert.ok(first.data.accountId>0);
      const currentRevision=first.data.revisions?.pairs??0;
      const profile={app:'pairs',level:7,xp:33,activeRound:null,skillPoints:2,skills:{insight:1}};
      const saved=await json('/systems/baseline-recreation/api/games_data.php',{
        method:'POST',headers,
        body:JSON.stringify({action:'save',app:'pairs',profile,expectedRevision:currentRevision})
      });
      assert.equal(saved.response.status,200,mode+' save failed: '+JSON.stringify(saved.data));
      assert.equal(saved.data.ok,true);
      const loaded=await json('/systems/baseline-recreation/api/games_data.php?app=pairs',{headers});
      assert.equal(loaded.response.status,200,mode+' readback failed: '+JSON.stringify(loaded.data));
      assert.equal(loaded.data.found,true);
      assert.deepEqual(loaded.data.profile,profile,mode+' save must persist exactly what was sent');
      if(mode==='saved-data'){
        assert.equal(saved.data.revision,1);
        assert.equal(loaded.data.revision,1);
        const stale=await json('/systems/baseline-recreation/api/games_data.php',{
          method:'POST',headers,body:JSON.stringify({action:'save',app:'pairs',profile:{level:1},expectedRevision:0})
        });
        assert.equal(stale.response.status,409,'stale account data must never overwrite newer progress');
      }
      const reloaded=await json('/systems/baseline-recreation/api/games_data.php?bootstrap=1',{headers});
      assert.deepEqual(reloaded.data.profiles.pairs,profile,mode+' saved progress did not survive a reload');
    });
  }
});
