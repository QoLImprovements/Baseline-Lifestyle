const { test, expect } = require('@playwright/test');

const PATH='/baseline-recreation/system';
const CACHE_COOKIE='baseline_games_hub_epoch=20260630_15';

async function stubProfiles(page) {
  await page.route('**/systems/baseline-recreation/api/games_profile.php**', async (route) => {
    const app=new URL(route.request().url()).searchParams.get('app')||'pairs';
    const profile=app==='ninja'
      ? {app:'ninja',coins:0,spirit:0,level:1,xp:0,stage:1,enemyHp:50,highestStage:1,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:0,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function stubSignedOutStorage(page) {
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async (route) => {
    await route.fulfill({status:401,contentType:'application/json',body:JSON.stringify({ok:false,error:'not_logged_in'})});
  });
}

async function expectBannerAndTabs(page) {
  const toggle=page.locator('#bl-pages-toggle');
  const menu=page.locator('.bl-pages-menu');
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(menu).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded','true');
  await expect(menu).toBeVisible();
  await expect(menu.getByRole('menuitem',{name:'Baseline Recreation',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
  const pairs=page.locator('[data-select-game="pairs"]:visible').first();
  await expect(pairs).toBeVisible();
  await expect(pairs).toBeEnabled();
  await expect(pairs).not.toHaveCSS('cursor','not-allowed');
}

async function expectBrowsableGame(page,gameId,panelId) {
  const row=page.locator(`[data-select-game="${gameId}"]:visible`).first();
  await expect(row).toBeVisible();
  await expect(row).toBeEnabled();
  await expect(row).not.toHaveCSS('cursor','not-allowed');
  await row.click();
  await expect(page.locator(panelId)).toHaveClass(/is-active/);
}

test('public Recreation route keeps games playable while saving is signed out',async({page})=>{
  await stubProfiles(page);
  await stubSignedOutStorage(page);
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  const storage=await page.evaluate(()=>({canPlay:BaselineGameStorage.canPlay(),canSave:BaselineGameStorage.canSave(),status:BaselineGameStorage.getStatus()}));
  expect(storage).toEqual({canPlay:true,canSave:false,status:'signed-out'});
  await expect(page.locator('#gamesServerLoginNotice')).toContainText('Progress from this temporary session is not saved');
  await expectBannerAndTabs(page);
  await expectBrowsableGame(page,'pairs','#pairsPanel');
  await page.locator('#newPairsBoardBtn').click();
  await expect(page.locator('#pairsBoard [data-card]').first()).toBeVisible();
});

test('Hub game rows still open when optional modules fail',async({page})=>{
  await stubProfiles(page);
  await stubSignedOutStorage(page);
  await page.route('**/systems/baseline-recreation/js/baseline-recreation.js**',route=>route.fulfill({status:503,contentType:'text/plain',body:'Simulated module failure'}));
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expectBannerAndTabs(page);
  await expectBrowsableGame(page,'pairs','#pairsPanel');
});

test('Hub controls work before a slow Realm graph finishes loading',async({page})=>{
  await stubProfiles(page);
  await stubSignedOutStorage(page);
  await page.route('**/systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js**',async route=>{await new Promise(resolve=>setTimeout(resolve,3000));await route.continue();});
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('[data-select-game="detectword"]:visible').first()).toBeVisible();
});

test('a missing core does not install a competing fallback game runtime',async({page})=>{
  await stubProfiles(page);
  await stubSignedOutStorage(page);
  await page.route('**/systems/baseline-recreation/js/baseline-recreation-core.js**',route=>route.fulfill({status:503,contentType:'text/plain',body:'Simulated core failure'}));
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForTimeout(1700);
  expect(await page.evaluate(()=>Boolean(globalThis.BASELINE_RECREATION_CORE_READY))).toBe(false);
  await expect(page.locator('html')).not.toHaveAttribute('data-baseline-recreation-fallback',/./);
  expect(await page.evaluate(()=>Boolean(globalThis.BaselineRealmHost?.__gamesHubGuard))).toBe(false);
});

test('production cache headers revalidate scripts',async({request})=>{
  const firstPage=await request.get(PATH,{headers:{cookie:''}});
  expect(firstPage.ok()).toBeTruthy();
  expect(firstPage.headers()['cache-control']).toContain('no-store');
  expect(firstPage.headers()['clear-site-data']).toBe('"cache"');
  expect(firstPage.headers()['set-cookie']).toContain(CACHE_COOKIE);
  const upgradedPage=await request.get(PATH,{headers:{cookie:CACHE_COOKIE}});
  expect(upgradedPage.ok()).toBeTruthy();
  expect(upgradedPage.headers()['clear-site-data']).toBeUndefined();
  const script=await request.get('/systems/baseline-recreation/js/baseline-recreation.js?v=canonical');
  expect(script.ok()).toBeTruthy();
  expect(script.headers()['content-type']).toContain('text/javascript');
  expect(script.headers()['cache-control']).toContain('max-age=0');
  expect(script.headers()['cache-control']).toContain('must-revalidate');
  expect(script.headers()['cache-control']).not.toContain('immutable');
});
