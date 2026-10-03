const { test, expect } = require('@playwright/test');

const PATH='/baseline-games-hub/games-hub';

async function stubProfiles(page){
  await page.route('**/systems/baseline-games-hub/api/games_profile.php**',async route=>{
    const app=new URL(route.request().url()).searchParams.get('app')||'pairs';
    const profile=app==='ninja'
      ? {app:'ninja',coins:0,spirit:0,level:1,xp:0,stage:1,enemyHp:50,highestStage:1,upgrades:{},spiritShop:{}}
      : {app,level:1,xp:0,bank:0,coins:0,skillPoints:0,skills:{}};
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true,app,profile})});
  });
}

async function openGames(page){
  await page.goto(PATH,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await page.getByRole('button',{name:'Games',exact:true}).click();
  await expect(page.locator('#games')).toHaveClass(/active/);
}

test('Detect The Word restores an unfinished round and draft across reload',async({page})=>{
  await stubProfiles(page);
  await openGames(page);
  await page.locator('[data-select-game="detectword"]:visible').first().click();
  await page.locator('#newWordRoundBtn').click();
  await expect(page.locator('#wordGuessInput')).toBeVisible();

  await page.locator('#wordGuessInput').fill('zzz');
  await page.locator('#wordGuessInput').press('Enter');
  await expect(page.locator('#wordBoard .word-row').first().locator('.letter-cell')).toHaveCount(3);
  await expect(page.locator('#wordBoard .word-row').first()).toContainText('ZZZ');

  await page.locator('#wordGuessInput').fill('ab');
  await expect(page.locator('#wordGuessInput')).toHaveValue('ab');
  const classesBefore=await page.locator('#wordBoard .word-row').first().locator('.letter-cell').evaluateAll(nodes=>nodes.map(node=>node.className));

  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await expect(page.locator('#detectwordPanel')).toHaveClass(/is-active/);
  await expect(page.locator('#wordGuessInput')).toHaveValue('ab');
  await expect(page.locator('#wordBoard .word-row').first()).toContainText('ZZZ');
  expect(await page.locator('#wordBoard .word-row').first().locator('.letter-cell').evaluateAll(nodes=>nodes.map(node=>node.className))).toEqual(classesBefore);
});

test('Make The Number restores the same unfinished puzzle and draft across reload',async({page})=>{
  await stubProfiles(page);
  await openGames(page);
  await page.locator('[data-select-game="make24"]:visible').first().click();
  await page.locator('#newMake24Btn').click();
  await expect(page.locator('#make24ExpressionInput')).toBeVisible();

  const numbersBefore=await page.locator('#make24Board .number-chip').allTextContents();
  const targetBefore=await page.locator('#make24TargetValue').textContent();
  await page.locator('#make24ExpressionInput').fill('1+');

  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await expect(page.locator('#make24Panel')).toHaveClass(/is-active/);
  await expect(page.locator('#make24ExpressionInput')).toHaveValue('1+');
  expect(await page.locator('#make24Board .number-chip').allTextContents()).toEqual(numbersBefore);
  expect(await page.locator('#make24TargetValue').textContent()).toBe(targetBefore);
});

test('Make The Number produces the same first puzzle for equivalent fresh profiles',async({browser})=>{
  async function firstPuzzle(){
    const context=await browser.newContext();
    const page=await context.newPage();
    await stubProfiles(page);
    await openGames(page);
    await page.locator('[data-select-game="make24"]:visible').first().click();
    await page.locator('#newMake24Btn').click();
    const result={
      target:await page.locator('#make24TargetValue').textContent(),
      numbers:await page.locator('#make24Board .number-chip').allTextContents()
    };
    await context.close();
    return result;
  }

  expect(await firstPuzzle()).toEqual(await firstPuzzle());
});
