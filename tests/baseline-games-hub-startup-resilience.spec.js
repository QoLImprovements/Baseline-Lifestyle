const { test, expect } = require('@playwright/test');

const PATH='/baseline-games-hub/games-hub';
const LOADER_BUILD='GAMES_HUB_DARTS_ACCESS_20260706_1';

async function stubProfiles(page){
  await page.route('**/systems/baseline-games-hub/api/games_profile.php**',async route=>{
    const app=new URL(route.request().url()).searchParams.get('app')||'pairs';
    const profile=app==='ninja'
      ? {app:'ninja',coins:100,spirit:3,level:2,xp:0,stage:1,enemyHp:100,highestStage:1,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:0,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function openGames(page){
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
}

async function openRealm(page){
  await openGames(page);
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-active/);
  await expect(page.locator('html')).toHaveAttribute('data-baseline-realm-runtime-active',LOADER_BUILD);
}

async function health(page){
  return page.locator('#ninjaSceneHpValue').evaluate(node=>{
    const values=String(node.textContent||'').split('/').map(value=>Number(value.trim()));
    return {current:values[0],maximum:values[1]};
  });
}

test('broken Realm loading cannot disable Hub controls',async({page})=>{
  await stubProfiles(page);
  await page.route('**/systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js**',route=>route.fulfill({status:503,contentType:'text/plain',body:'simulated failure'}));
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openGames(page);
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await expect(page.locator('html')).toHaveAttribute('data-baseline-realm-unavailable',LOADER_BUILD);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await page.locator('[data-select-game="pairs"]:visible').first().click();
  await expect(page.locator('#pairsPanel')).toHaveClass(/is-active/);
  await page.locator('#bl-pages-toggle').click();
  await expect(page.locator('.bl-pages-menu')).toBeVisible();
});

test('Darts Focused is registered, visible and operational',async({page})=>{
  await stubProfiles(page);
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openGames(page);
  await expect(page.getByText('Darts Focused Games',{exact:true})).toBeVisible();
  await expect(page.locator('[data-open-darts-focused]')).toBeVisible();
  await page.waitForFunction(()=>Boolean(globalThis.DartsFocusedGames));
  await page.locator('[data-open-darts-focused]').click();
  await expect(page.locator('#dartsFocusedPanel')).toHaveClass(/is-active/);
  await expect(page.locator('[data-darts-game]')).toHaveCount(15);
  await page.locator('[data-darts-game="checkout-pressure"]').click();
  await expect(page.locator('.darts-choice').first()).toBeVisible();
  await page.locator('.darts-choice').first().click();
  await expect(page.locator('.darts-feedback')).toBeVisible();
});

test('Realm shows both actors and live controls without freezing',async({page})=>{
  await stubProfiles(page);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openRealm(page);
  await expect(page.locator('#ninjaRunnerWrap')).toBeVisible();
  await expect(page.locator('#ninjaEnemyWrap')).toBeVisible();
  await expect(page.locator('#realmCommandBanner')).toBeVisible();
  await expect(page.locator('#ninjaManualStrikeBtn')).toBeEnabled();
  await expect(page.locator('#ninjaShurikenBtn')).toBeEnabled();
  await expect.poll(()=>page.evaluate(()=>({
    runner:getComputedStyle(document.getElementById('ninjaRunnerWrap'),'::before').backgroundImage,
    enemy:getComputedStyle(document.getElementById('ninjaEnemyWrap'),'::before').backgroundImage
  }))).toEqual(expect.objectContaining({
    runner:expect.stringContaining('alder-veil-run.svg'),
    enemy:expect.stringContaining('mossblade-pursuer.svg')
  }));
  const layers=await page.evaluate(()=>({
    foreground:Number(getComputedStyle(document.querySelector('.ninja-forest-layer--foreground')).zIndex),
    runner:Number(getComputedStyle(document.getElementById('ninjaRunnerWrap')).zIndex),
    banner:Number(getComputedStyle(document.getElementById('realmCommandBanner')).zIndex),
    dock:Number(getComputedStyle(document.querySelector('.realm-action-dock')).zIndex)
  }));
  expect(layers.runner).toBeGreaterThan(layers.foreground);
  expect(layers.banner).toBeGreaterThan(layers.runner);
  expect(layers.dock).toBeGreaterThan(layers.banner);
  const before=await health(page);
  await page.locator('#ninjaManualStrikeBtn').click();
  await expect.poll(async()=>(await health(page)).current).toBeLessThan(before.current);
  await page.locator('#realmMenuBtn').click();
  await expect(page.locator('#realmPanelDrawer')).toBeVisible();
  await page.locator('#realmBasecampBtn').click();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  expect(errors).toEqual([]);
});

test('direct Realm route opens the same functional runtime',async({page})=>{
  await stubProfiles(page);
  await page.goto(PATH+'/baseline-realm',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-active/);
  await expect(page.locator('#ninjaRunnerWrap')).toBeVisible();
  await expect(page.locator('#ninjaManualStrikeBtn')).toBeEnabled();
});
