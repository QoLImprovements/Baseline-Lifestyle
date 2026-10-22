const { test, expect } = require('@playwright/test');

const PATH='/baseline-recreation/system';
const SAVE_KEY='baseline.realm.exploration.jrpg.v1';

async function stubStorage(page){
  await page.route('**/systems/baseline-recreation/api/games_data.php**',async route=>{
    await route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({ok:false,error:'save_unavailable'})});
  });
  await page.route('**/systems/baseline-recreation/api/games_profile.php**',async route=>{
    const app=new URL(route.request().url()).searchParams.get('app')||'ninja';
    const profile=app==='ninja'
      ? {app:'ninja',level:1,xp:0,coins:0,stage:1,enemyHp:50,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:1,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function openRealm(page){
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-active/);
}

test('Meridian Grove opens through Baseline Realm while saving is unavailable',async({page})=>{
  await stubStorage(page);
  await openRealm(page);
  await page.locator('#realmBasecampBtn').click();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await page.locator('#realmCampExplorationBtn').click();
  await expect(page.locator('#realmExplorationScreen .jrpg-game[data-zone="meridian-grove"]')).toBeVisible();
  await expect(page.locator('#jrpgMapViewport')).toBeVisible();
});

test('Meridian Grove temporary battle controls remain playable',async({page})=>{
  await stubStorage(page);
  await openRealm(page);
  await page.evaluate(async saveKey=>{
    const engine=await import('/systems/baseline-recreation/games/baseline-realm/exploration/js/jrpg-engine.js');
    const state=engine.createInitialState(67890);
    engine.startBattle(state,['galesprout'],'random');
    state.flags.introSeen=true;
    state.party[0].atb=100;
    state.battle.activeActorIndex=0;
    localStorage.setItem(saveKey,JSON.stringify(state));
  },SAVE_KEY);
  await page.locator('#realmBasecampBtn').click();
  await page.locator('#realmCampExplorationBtn').click();
  await expect(page.locator('#jrpgBattleLayer')).toBeVisible();
  for(const command of ['Attack','Ability','Magic','Item','Defend','Escape']){
    await expect(page.getByRole('button',{name:command,exact:true})).toBeEnabled();
  }
});
