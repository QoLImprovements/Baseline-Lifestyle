const { test, expect } = require('@playwright/test');

const PATH='/baseline-recreation/system';
const LOADER_BUILD='GAMES_HUB_BADMINTON_INITIAL_20260707_1';

async function stubProfiles(page){
  await page.route('**/systems/baseline-recreation/api/games_profile.php**',async route=>{
    const app=new URL(route.request().url()).searchParams.get('app')||'pairs';
    const profile=app==='ninja'
      ? {app:'ninja',coins:100,spirit:3,level:2,xp:0,stage:1,enemyHp:100,highestStage:1,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:0,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function openGames(page){
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
}

async function openRealm(page){
  await openGames(page);
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-active/);
  await expect(page.locator('html')).toHaveAttribute('data-baseline-realm-runtime-active',LOADER_BUILD);
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
}

async function health(page){
  return page.locator('#ninjaSceneHpValue').evaluate(node=>{
    const values=String(node.textContent||'').split('/').map(value=>Number(value.trim()));
    return {current:values[0],maximum:values[1]};
  });
}

test('broken Realm loading cannot disable Hub controls',async({page})=>{
  await stubProfiles(page);
  await page.route('**/systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js**',route=>route.fulfill({status:503,contentType:'text/plain',body:'simulated failure'}));
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

test('Realm opens at Basecamp and Ninja actors and controls work after explicit entry',async({page})=>{
  await stubProfiles(page);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await openRealm(page);
  await expect(page.locator('[data-basecamp-landmark="calorie-escape"]')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="tactical-operations"]')).toBeVisible();
  await page.locator('#realmCampNinjaBtn').click();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('ninja-training');
  await expect(page.locator('#ninjaRunnerWrap')).toBeVisible();
  await expect(page.locator('#ninjaEnemyWrap')).toBeVisible();
  await expect(page.locator('#realmCommandBanner')).toBeVisible();
  await expect(page.locator('#ninjaManualStrikeBtn')).toBeEnabled();
  await expect(page.locator('#ninjaShurikenBtn')).toBeEnabled();
  await expect.poll(()=>page.evaluate(()=>({
    runner:getComputedStyle(document.querySelector('.ninja-runtime-sprite--runner')).backgroundImage,
    enemy:getComputedStyle(document.querySelector('.ninja-runtime-sprite--enemy')).backgroundImage
  }))).toEqual(expect.objectContaining({
    runner:expect.stringContaining('alder-veil-run.svg'),
    enemy:expect.stringContaining('mossblade-pursuer.svg')
  }));
  const parallax=await page.evaluate(()=>['distant','middle','foreground'].map(kind=>{
    const node=document.querySelector('.ninja-forest-layer--'+kind);
    const style=getComputedStyle(node);
    return {kind,animationName:style.animationName,backgroundRepeat:style.backgroundRepeat,backgroundSize:style.backgroundSize};
  }));
  for(const layer of parallax){
    expect(layer.animationName).not.toBe('none');
    expect(layer.backgroundRepeat).toContain('repeat');
    expect(layer.backgroundSize).toContain('100%');
  }
  const layers=await page.evaluate(()=>({
    foreground:Number(getComputedStyle(document.querySelector('.ninja-forest-layer--foreground')).zIndex),
    runner:Number(getComputedStyle(document.getElementById('ninjaRunnerWrap')).zIndex),
    banner:Number(getComputedStyle(document.getElementById('realmCommandBanner')).zIndex),
    dock:Number(getComputedStyle(document.querySelector('.realm-action-dock')).zIndex)
  }));
  expect(layers.runner).toBeGreaterThan(layers.foreground);
  expect(layers.banner).toBeGreaterThan(layers.runner);
  expect(layers.dock).toBeGreaterThan(layers.banner);
  const before=await page.evaluate(()=>{
    const save=globalThis.BaselineRealmHost.syncProfileRealm();
    return {hp:save.realm.ninjaTraining.enemyHp,kills:save.realm.ninjaTraining.totalKills};
  });
  await page.locator('#ninjaManualStrikeBtn').click();
  await expect(page.locator('#ninjaRunnerWrap')).toHaveClass(/is-dash-cut/);
  await expect.poll(()=>page.locator('.ninja-runtime-sprite--runner').evaluate(node=>getComputedStyle(node).backgroundImage)).toContain('alder-veil-dash.svg');
  await expect.poll(()=>page.evaluate((previous)=>{
    const save=globalThis.BaselineRealmHost.syncProfileRealm();
    return save.realm.ninjaTraining.enemyHp!==previous.hp || save.realm.ninjaTraining.totalKills>previous.kills;
  },before)).toBe(true);
  await page.locator('#ninjaShurikenBtn').click();
  await expect(page.locator('#ninjaRunnerWrap')).toHaveClass(/is-throwing/);
  await expect.poll(()=>page.locator('.ninja-runtime-sprite--runner').evaluate(node=>getComputedStyle(node).backgroundImage)).toContain('alder-veil-throw.svg');
  await expect.poll(()=>page.locator('#ninjaShurikenLayer .ninja-shuriken-projectile').count()).toBeGreaterThan(0);
  await page.locator('#realmMenuBtn').click();
  await expect(page.locator('#realmPanelDrawer')).toBeVisible();
  await page.locator('#realmBasecampBtn').click();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  expect(errors).toEqual([]);
});

test('direct Realm route opens the same Basecamp-first functional runtime',async({page})=>{
  await stubProfiles(page);
  await page.goto(PATH+'/baseline-realm',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-active/);
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="ninja-training"]')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="exploration"]')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="calorie-escape"]')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="tactical-operations"]')).toBeVisible();
});


test('Recreation static page is visible immediately and account label does not change while auth resolves',async({page})=>{
  await stubProfiles(page);
  await page.route('**/api/me.php',async route=>{
    await new Promise(resolve=>setTimeout(resolve,450));
    await route.fulfill({
      status:200,
      contentType:'application/json',
      body:JSON.stringify({ok:true,authed:true,name:'Test User',email:'test@example.invalid'})
    });
  });

  const response=await page.goto(PATH,{waitUntil:'domcontentloaded'});
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  await expect(page.locator('html')).not.toHaveAttribute('data-games-document-pending');
  await expect(page.getByRole('heading',{name:'Baseline Recreation'})).toBeVisible();
  await expect(page.getByRole('button',{name:'Recreation',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Games',exact:true})).toBeVisible();
  await expect(page.locator('#hub')).toBeVisible();
  await expect(page.locator('#bl-auth-toggle .bl-btn-label')).toHaveText('Account');
  await page.waitForTimeout(550);
  await expect(page.locator('#bl-auth-toggle .bl-btn-label')).toHaveText('Account');
  await expect(page.locator('#authStateNote')).toContainText('Account save is active.');
  await expect(page.locator('#bankSummary')).not.toBeEmpty();
  await expect(page.locator('#gamesSummaryWrap')).not.toBeEmpty();
});
