const { test, expect } = require('@playwright/test');

const PATH='/baseline-recreation/system';

async function stubProfiles(page){
  await page.route('**/systems/baseline-recreation/api/games_profile.php**',async route=>{
    const app=new URL(route.request().url()).searchParams.get('app')||'pairs';
    const profile=app==='ninja'
      ? {app:'ninja',coins:100,spirit:3,level:2,xp:0,stage:1,enemyHp:100,highestStage:1,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:0,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function openDarts(page){
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
  await page.waitForFunction(()=>Boolean(globalThis.DartsFocusedGames));
  await expect(page.locator('[data-open-darts-focused]')).toBeVisible();
  await page.locator('[data-open-darts-focused]').click();
  await expect(page.locator('#dartsFocusedPanel')).toHaveClass(/is-active/);
}

test('Darts Focused mounts all ten drills and completes a checkout answer flow',async({page})=>{
  await stubProfiles(page);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));

  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openDarts(page);

  await expect(page.locator('[data-darts-game]')).toHaveCount(10);
  await expect(page.locator('#dartsActiveTitle')).toHaveText('Checkout Under Pressure');
  await expect(page.locator('.darts-choice').first()).toBeVisible();

  await page.locator('.darts-choice').first().click();
  await expect(page.locator('.darts-feedback')).toBeVisible();
  await expect(page.locator('[data-darts-new-round]')).toBeVisible();

  expect(errors).toEqual([]);
});

test('Darts Focused restores the last selected drill after reload',async({page})=>{
  await stubProfiles(page);
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openDarts(page);

  await page.locator('[data-darts-game="board-geography"]').click();
  await expect(page.locator('#dartsActiveTitle')).toHaveText('Board Geography');
  await expect(page.locator('[data-darts-game="board-geography"]')).toHaveClass(/is-selected/);

  await page.reload({waitUntil:'domcontentloaded'});
  await openDarts(page);

  await expect(page.locator('#dartsActiveTitle')).toHaveText('Board Geography');
  await expect(page.locator('[data-darts-game="board-geography"]')).toHaveClass(/is-selected/);
});
