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

async function openBadminton(page){
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
  await page.waitForFunction(()=>Boolean(globalThis.BadmintonFocusedGames));
  await expect(page.locator('[data-open-badminton-focused]')).toBeVisible();
  await page.locator('[data-open-badminton-focused]').click();
  await expect(page.locator('#badmintonFocusedPanel')).toHaveClass(/is-active/);
}

test('Badminton Focused mounts all 15 drills and completes a normal answer flow',async({page})=>{
  await stubProfiles(page);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));

  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openBadminton(page);

  await expect(page.locator('[data-badminton-game]')).toHaveCount(15);
  await expect(page.locator('#badmintonActiveTitle')).toHaveText('Read the Racket');
  await expect(page.locator('.badminton-choice').first()).toBeVisible();

  await page.locator('.badminton-choice').first().click();
  await expect(page.locator('.badminton-feedback')).toBeVisible();
  await expect(page.locator('[data-badminton-next]')).toBeVisible();

  expect(errors).toEqual([]);
});

test('Badminton Focused restores the last selected drill after reload',async({page})=>{
  await stubProfiles(page);
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openBadminton(page);

  await page.locator('[data-badminton-game="tempo-break"]').click();
  await expect(page.locator('#badmintonActiveTitle')).toHaveText('Tempo Break');
  await expect(page.locator('[data-badminton-game="tempo-break"]')).toHaveClass(/is-selected/);

  await page.reload({waitUntil:'domcontentloaded'});
  await openBadminton(page);

  await expect(page.locator('#badmintonActiveTitle')).toHaveText('Tempo Break');
  await expect(page.locator('[data-badminton-game="tempo-break"]')).toHaveClass(/is-selected/);
});
