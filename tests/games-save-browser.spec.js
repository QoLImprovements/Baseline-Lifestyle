const {test,expect}=require('@playwright/test');

function json(route,data,status=200){
  return route.fulfill({status,contentType:'application/json',body:JSON.stringify(data)});
}

test('logged-in Save button writes and reads back the selected game profile, then survives refresh',async({page})=>{
  const profiles=Object.create(null);
  const revisions=Object.create(null);
  const writes=[];
  const readbacks=[];
  await page.route('**/sitewide/api/me.php**',route=>json(route,{
    ok:true,authed:true,name:'Games Test Account',email:'games-test@example.test',
    providers:{password:true,google:false}
  }));
  await page.route('**/systems/baseline-recreation/api/games_data.php**',route=>{
    const request=route.request();
    const url=new URL(request.url());
    if(request.method()==='GET'&&url.searchParams.has('bootstrap')){
      return json(route,{ok:true,authed:true,accountId:23,profiles,revisions});
    }
    if(request.method()==='GET'){
      const app=url.searchParams.get('app')||'';
      readbacks.push(app);
      return json(route,{ok:true,app,found:app in profiles,profile:profiles[app]||{},revision:revisions[app]||0});
    }
    const payload=request.postDataJSON();
    const app=payload.app;
    if(payload.expectedRevision!==(revisions[app]||0)){
      return json(route,{ok:false,error:'revision_conflict'},409);
    }
    profiles[app]=payload.profile;
    revisions[app]=(revisions[app]||0)+1;
    writes.push(payload);
    return json(route,{ok:true,app,profile:payload.profile,revision:revisions[app]});
  });
  await page.goto('/baseline-recreation/games/pairs',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BASELINE_RECREATION_CORE_READY&&globalThis.BaselineGameStorage?.canSave?.()));
  const save=page.locator('#pairsPanel [data-save-status-icon]');
  await expect(save).toHaveCount(1);
  await expect(save).toHaveAttribute('data-save-status-app','pairs');
  // The Save click must write Pairs even if another game has a queued auto-save.
  const pairsWritesBefore=writes.filter(write=>write.app==='pairs').length;
  await save.click();
  await expect.poll(()=>writes.filter(write=>write.app==='pairs').length).toBeGreaterThan(pairsWritesBefore);
  await expect.poll(()=>readbacks.filter(app=>app==='pairs').length).toBeGreaterThan(0);
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineGameStorage?.lastSavedAt?.('pairs')||0)).toBeGreaterThan(0);
  expect(profiles.pairs).toBeTruthy();
  const saved=JSON.stringify(profiles.pairs);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BASELINE_RECREATION_CORE_READY&&globalThis.BaselineGameStorage?.isAuthenticated?.()));
  const restored=await page.evaluate(()=>globalThis.BaselineGameStorage.getProfile('pairs'));
  expect(JSON.stringify(restored)).toBe(saved);
});
