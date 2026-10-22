const { test, expect } = require('@playwright/test');

const PATH='/baseline-recreation/system';

async function stubProfiles(page) {
  await page.route('**/systems/baseline-recreation/api/games_profile.php**', async (route) => {
    const url = new URL(route.request().url());
    const app = url.searchParams.get('app') || 'pairs';
    const profile = app === 'ninja'
      ? { app:'ninja', coins:0, spirit:0, level:1, xp:0, stage:1, enemyHp:50, highestStage:1, upgrades:{}, spiritShop:{} }
      : { app, level:1, xp:0, bank:0, coins:0, skillPoints:0, skills:{} };
    await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, app, profile }) });
  });
}

async function stubSavingUnavailable(page) {
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async (route) => {
    await route.fulfill({ status:503, contentType:'application/json', body:JSON.stringify({ ok:false, error:'save_unavailable' }) });
  });
}

async function openGames(page) {
  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await page.getByRole('button', { name:'Games', exact:true }).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
}

test('games and real controls remain usable when account saving is unavailable', async ({ page }) => {
  await stubSavingUnavailable(page);
  await stubProfiles(page);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await openGames(page);

  const storage=await page.evaluate(()=>({
    canPlay:globalThis.BaselineGameStorage.canPlay(),
    canSave:globalThis.BaselineGameStorage.canSave(),
    status:globalThis.BaselineGameStorage.getStatus()
  }));
  expect(storage.canPlay).toBe(true);
  expect(storage.canSave).toBe(false);
  expect(storage.status).toBe('unavailable');
  await expect(page.locator('#gamesServerLoginNotice')).toContainText('Temporary progress');

  for (const gameId of ['detectword','make24','pairs','trackcoin','ruleshift','ninja']) {
    const row=page.locator(`[data-select-game="${gameId}"]:visible`).first();
    await expect(row).toBeEnabled();
    await row.click();
    await expect(page.locator(`#${gameId}Panel`)).toHaveClass(/is-active/);
    const back=page.locator(`#${gameId}Panel [data-select-game=""]`).first();
    await expect(back).toBeEnabled();
    await back.click();
    await expect(page.locator('#gamesOverviewCard')).toBeVisible();
  }

  await page.locator('[data-select-game="pairs"]:visible').first().click();
  const newGame=page.locator('#pairsPanel').getByRole('button',{name:/Start New Game|New Game|Start/i}).first();
  if(await newGame.count())await newGame.click();
  await expect(page.locator('#pairsPanel .memory-card').first()).toBeVisible();
  await page.locator('#pairsPanel .memory-card').first().click();
  await expect(page.locator('#pairsPanel .memory-card').first()).toHaveClass(/is-open|is-matched/);
  await page.locator('#pairsPanel [data-select-game=""]').first().click();

  await page.locator('[data-open-darts-focused]').click();
  await page.waitForFunction(() => Boolean(globalThis.DartsFocusedGames));
  await expect(page.locator('#dartsFocusedPanel')).toHaveClass(/is-active/);
  await page.locator('[data-darts-game="checkout-pressure"]').click();
  await expect(page.locator('.darts-choice').first()).toBeVisible();
  await page.locator('.darts-choice').first().click();
  await expect(page.locator('.darts-feedback')).toBeVisible();
  expect(errors).toEqual([]);
});

test('each core game starts a real board on a touch phone', async ({ browser }) => {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await stubSavingUnavailable(page);
  await stubProfiles(page);
  await openGames(page);

  const games=[
    ['pairs','#pairsPanel','#newPairsBoardBtn','#pairsBoard'],
    ['detectword','#detectwordPanel','#newWordRoundBtn','#wordBoard'],
    ['make24','#make24Panel','#newMake24Btn','#make24Board'],
    ['trackcoin','#trackcoinPanel','#newTrackCoinRoundBtn','#trackCoinBoard'],
    ['ruleshift','#ruleshiftPanel','#newRuleShiftBtn','#ruleShiftBoard']
  ];
  for(const [game,panel,start,board] of games){
    await page.locator(`[data-select-game="${game}"]:visible`).first().click();
    await expect(page.locator(panel)).toHaveClass(/is-active/);
    await page.locator(start).click();
    await expect(page.locator(`${board} > *`).first()).toBeVisible();
    const layout=await page.locator(panel).evaluate(node=>({
      viewport:innerWidth,
      pageWidth:document.documentElement.scrollWidth,
      left:node.getBoundingClientRect().left,
      right:node.getBoundingClientRect().right
    }));
    expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewport+1);
    expect(layout.left).toBeGreaterThanOrEqual(-1);
    expect(layout.right).toBeLessThanOrEqual(layout.viewport+1);
    await page.locator(`${panel} [data-select-game=""]`).first().click();
  }

  await page.locator('[data-open-darts-focused]').click();
  await page.waitForFunction(()=>Boolean(globalThis.DartsFocusedGames));
  await page.locator('[data-darts-game="checkout-pressure"]').click();
  await expect(page.locator('.darts-choice').first()).toBeVisible();
  await page.locator('.darts-choice').first().click();
  await expect(page.locator('.darts-feedback')).toBeVisible();
  const dartsLayout=await page.evaluate(()=>({
    viewport:innerWidth,
    pageWidth:document.documentElement.scrollWidth,
    right:document.querySelector('#dartsFocusedPanel')?.getBoundingClientRect().right||0
  }));
  expect(dartsLayout.pageWidth).toBeLessThanOrEqual(dartsLayout.viewport+1);
  expect(dartsLayout.right).toBeLessThanOrEqual(dartsLayout.viewport+1);
  await context.close();
});

for (const viewport of [
  {name:'320 portrait',width:320,height:700},
  {name:'360 portrait',width:360,height:740},
  {name:'390 portrait',width:390,height:844},
  {name:'430 portrait',width:430,height:932},
  {name:'short landscape',width:640,height:360}
]) {
  test(`Recreation fits ${viewport.name} without horizontal overflow`, async ({ browser }) => {
    const context=await browser.newContext({
      viewport:{width:viewport.width,height:viewport.height},
      isMobile:true,
      hasTouch:true
    });
    const page=await context.newPage();
    await stubSavingUnavailable(page);
    await stubProfiles(page);
    await openGames(page);
    await page.locator('[data-select-game="pairs"]:visible').first().click();
    await expect(page.locator('#pairsPanel')).toHaveClass(/is-active/);
    const layout=await page.evaluate(()=>({
      viewport:innerWidth,
      pageWidth:document.documentElement.scrollWidth,
      panelWidth:document.querySelector('#pairsPanel')?.getBoundingClientRect().width||0,
      smallestPrimary:Math.min(...Array.from(document.querySelectorAll('#pairsPanel button:not([disabled])')).filter(button=>button.offsetParent!==null).map(button=>Math.min(button.getBoundingClientRect().width,button.getBoundingClientRect().height)))
    }));
    expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewport+1);
    expect(layout.panelWidth).toBeLessThanOrEqual(layout.viewport+1);
    expect(layout.smallestPrimary).toBeGreaterThanOrEqual(44);
    await context.close();
  });
}
