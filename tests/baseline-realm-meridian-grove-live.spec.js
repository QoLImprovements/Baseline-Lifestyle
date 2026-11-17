const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-recreation/baseline-recreation.html';
async function mockProfiles(page) {
  const profiles = {
    ninja:{ app:'ninja', level:1, xp:0, coins:0, stage:1, enemyHp:50, upgrades:{}, spiritShop:{} }
  };
  const revisions = { ninja:1 };
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if(request.method() === 'GET'){
      if(url.searchParams.has('bootstrap')){
        await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, authed:true, accountId:7, profiles, revisions }) });
        return;
      }
      const app=url.searchParams.get('app')||'';
      await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, app, found:Boolean(profiles[app]), profile:profiles[app]||{}, revision:revisions[app]||0 }) });
      return;
    }
    let body={};
    try{ body=request.postDataJSON(); }catch(_){}
    const app=String(body.app||'');
    if(app && body.profile) profiles[app]=body.profile;
    if(app) revisions[app]=(revisions[app]||0)+1;
    await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, app, profile:profiles[app]||body.profile||{}, revision:revisions[app]||0 }) });
  });
}

async function openRealm(page) {
  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.sceneRouter));
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
}

test('Exploration Gate removes the legacy route and mounts Meridian Grove', async ({ page }) => {
  await mockProfiles(page);
  await openRealm(page);

  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await page.locator('#realmCampExplorationBtn').click();

  await expect(page.locator('#realmExplorationScreen .jrpg-game[data-zone="meridian-grove"]')).toBeVisible();
  await expect(page.locator('#jrpgMapViewport')).toBeVisible();
  await expect(page.getByText('Baseline Realm · Exploration', { exact: true })).toBeVisible();
  await expect(page.locator('#realmExplorationProgressFill')).toHaveCount(0);
  await expect(page.locator('#realmExploreNode1')).toHaveCount(0);
  await expect(page.getByText('Exploration Route', { exact: true })).toHaveCount(0);
});

test('Meridian Grove resumes an ATB battle with all six commands', async ({ page }) => {
  await mockProfiles(page);
  await openRealm(page);

  await page.evaluate(async () => {
    const engine = await import('/systems/baseline-recreation/games/baseline-realm/exploration/js/jrpg-engine.js');
    const state = engine.createInitialState(67890);
    engine.startBattle(state, ['galesprout'], 'random');
    state.flags.introSeen = true;
    state.party[0].atb = 100;
    state.battle.activeActorIndex = 0;
    state.settings.battleMode = 'active';
    // The ready enemy must take its turn *after* the player opens target
    // selection. Starting at 99 races the pre-click selection itself.
    state.battle.enemies[0].atb = 0;
    if(!globalThis.BaselineGameStorage?.setTemporaryProfile?.('meridiangrove', state)){
      throw new Error('Recreation server-storage test authority unavailable');
    }
  });

  await page.locator('#realmCampExplorationBtn').click();

  await expect(page.locator('#jrpgBattleLayer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Active', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Wait', exact: true })).toBeVisible();
  for (const command of ['Attack', 'Ability', 'Magic', 'Item', 'Defend', 'Escape']) {
    await expect(page.getByRole('button', { name: command, exact: true })).toBeVisible();
  }
  await expect(page.locator('.jrpg-meter.atb')).toHaveCount(2);

  // Active-mode enemy turns must update battle state without replacing the
  // player's open command/target DOM.
  const clickErrors=[];
  page.on('pageerror', error=>clickErrors.push(String(error)));
  await page.evaluate(()=>{
    const trace=[];
    globalThis.__meridianClickTrace=trace;
    const root=document.getElementById('realmExplorationScreen');
    const record=(scope,ev)=>{ if(ev.target?.closest?.('[data-battle-command]')) trace.push({scope,phase:ev.eventPhase,type:ev.type,target:ev.target.outerHTML?.slice(0,200)}); };
    document.addEventListener('pointerdown',ev=>record('document-capture-pointer',ev),true);
    document.addEventListener('click',ev=>record('document-capture-click',ev),true);
    document.addEventListener('click',ev=>record('document-bubble-click',ev),false);
    root.addEventListener('click',ev=>record('root-capture-click',ev),true);
    root.addEventListener('click',ev=>record('root-bubble-click',ev),false);
    const inner=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML');
    Object.defineProperty(Element.prototype,'innerHTML',{
      configurable:true,
      get(){return inner.get.call(this);},
      set(value){
        if(this.id==='jrpgBattleLayer'){
          trace.push({scope:'renderBattle',showTargets:String(value).includes('data-battle-target='),stack:(new Error()).stack?.slice(0,1200)});
        }
        return inner.set.call(this,value);
      }
    });
    new MutationObserver(()=>{const node=root.querySelector('.jrpg-command-window');const text=node?.innerText?.slice(0,90);if(trace[trace.length-1]?.currentText!==text)trace.push({scope:'mutation',currentText:text});}).observe(root,{childList:true,subtree:true});
  });
  await page.getByRole('button', { name: 'Attack', exact: true }).click();
  const targetButton = page.locator('[data-battle-target]').first();
  const appeared=await targetButton.isVisible().catch(()=>false);
  if(!appeared){
    const debug=await page.evaluate(()=>({
      activeScene:document.getElementById('realmSceneFrame')?.dataset.realmView,
      battleVisible:!document.getElementById('jrpgBattleLayer')?.hidden,
      commandWindow:document.querySelector('#jrpgBattleLayer .jrpg-command-window')?.innerText,
      attackCount:document.querySelectorAll('[data-battle-command="attack"]').length,
      targetCount:document.querySelectorAll('[data-battle-target]').length,
      selectedTab:document.querySelector('.jrpg-battle-mode .is-active')?.textContent
    }));
    const trace=await page.evaluate(()=>globalThis.__meridianClickTrace||[]);
    console.log('MERIDIAN_ATTACK_DIAGNOSTIC',JSON.stringify({debug,clickErrors,trace:trace.slice(-35)}));
  }
  await expect(targetButton).toBeVisible();
  await targetButton.evaluate(node => { node.dataset.stabilityProbe = 'same-node'; });
  const logCount=await page.locator('.jrpg-battle-log li').count();
  // In Active mode, wait for a genuine enemy turn and prove its DOM refresh
  // does not replace the player’s already-open target-selection button.
  await expect.poll(()=>page.locator('.jrpg-battle-log li').count(),{timeout:15000}).toBeGreaterThan(logCount);
  await expect(page.locator('[data-battle-target][data-stability-probe="same-node"]')).toBeVisible();

  await expect(page.getByText('Exploration Route', { exact: true })).toHaveCount(0);
});
