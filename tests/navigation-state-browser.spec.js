const { test, expect } = require('@playwright/test');

function fulfillJson(route,payload,status=200){
  return route.fulfill({status,contentType:'application/json',body:JSON.stringify(payload)});
}

async function stubGames(page){
  const profiles={};
  const profileFor=(app)=>app==='ninja'
    ? {app:'ninja',coins:0,spirit:0,level:1,xp:0,stage:1,enemyHp:50,highestStage:1,totalKills:0,currentStreak:0,bestStreak:0,cleanWinStreak:0,bossesDefeated:0,totalCoinsEarned:0,prestigeCount:0,prestigeEarnedTotal:0,upgrades:{},spiritShop:{},lastSeenAt:Date.now(),bonusCache:{},offlineSummary:''}
    : {app,level:1,xp:0,bank:0,coins:0,skillPoints:1,skills:{}};
  await page.route('**/systems/baseline-recreation/api/games_data.php**',async route=>{
    const request=route.request(); let body={}; try{body=request.postDataJSON();}catch(_e){}
    if(request.method()==='GET') return fulfillJson(route,{ok:true,profiles});
    if(body.app&&body.profile) profiles[body.app]=body.profile;
    if(body.action==='migrate_missing') Object.assign(profiles,body.profiles||{});
    return fulfillJson(route,{ok:true,app:body.app||'',profile:body.app?profiles[body.app]||null:null,profiles});
  });
  await page.route('**/systems/baseline-recreation/api/games_profile.php**',async route=>{
    const url=new URL(route.request().url()); const app=url.searchParams.get('app')||'pairs';
    if(!profiles[app]) profiles[app]=profileFor(app);
    return fulfillJson(route,{ok:true,app,profile:profiles[app]});
  });
}

test('Diet Log exact inner view and date survive refresh and history',async({page})=>{
  await page.goto('/baseline-food-approach/diet-log',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(document.getElementById('dietViewBtnBreakdown')));
  await page.locator('#dietLogDate').fill('2026-10-01');
  await page.locator('#dietLogDate').dispatchEvent('change');
  await page.locator('#dietViewBtnBreakdown').click();
  await expect(page).toHaveURL(/view=breakdown/);
  await expect(page).toHaveURL(/date=2026-10-01/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#dietViewBreakdown')).toBeVisible();
  await expect(page.locator('#dietLogDate')).toHaveValue('2026-10-01');
  await page.locator('#dietViewBtnHealth').click();
  await page.goBack();
  await expect(page.locator('#dietViewBreakdown')).toBeVisible();
});

test('Massage Library category survives refresh Back and Forward',async({page})=>{
  await page.goto('/baseline-massage/library',{waitUntil:'domcontentloaded'});
  await page.locator('#massageLibraryTabs [data-library-category="Body Areas"]').click();
  await expect(page).toHaveURL(/library-category=body-areas/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#massageLibraryTabs [data-library-category="Body Areas"]')).toHaveAttribute('aria-selected','true');
  await page.locator('#massageLibraryTabs [data-library-category="Massage Feelings / Themes"]').click();
  await page.goBack();
  await expect(page.locator('#massageLibraryTabs [data-library-category="Body Areas"]')).toHaveAttribute('aria-selected','true');
  await page.goForward();
  await expect(page.locator('#massageLibraryTabs [data-library-category="Massage Feelings / Themes"]')).toHaveAttribute('aria-selected','true');
});

test('Massage planner mode survives refresh and history',async({page})=>{
  await page.goto('/baseline-massage/planner',{waitUntil:'domcontentloaded'});
  await page.locator('[data-planner-mode="focused"]').click();
  await expect(page).toHaveURL(/planner-mode=focused/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-planner-mode="focused"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-planner-mode="advanced"]').click();
  await page.goBack();
  await expect(page.locator('[data-planner-mode="focused"]')).toHaveAttribute('aria-selected','true');
});

test('Puzzles exact non-default jigsaw survives refresh Back and Forward',async({page})=>{
  test.setTimeout(90000);
  await stubGames(page);
  await page.goto('/baseline-recreation/puzzles',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesLibrary));
  await page.locator('[data-puzzle-type="jigsaws"]').click();
  await expect(page).toHaveURL(/\/baseline-recreation\/puzzles\/jigsaws$/);
  const id='tears-without-witness';
  await page.locator('[data-jigsaw-id="'+id+'"]').click();
  expect(new URL(page.url()).pathname).toBe('/baseline-recreation/puzzles/jigsaws/'+id);
  await expect(page.locator('#weightCoherencePuzzle')).toHaveAttribute('data-jigsaw-id',id);
  await expect(page.locator('#weightCoherenceTitle')).toHaveText('Tears Without Witness');
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.hasAttribute('data-weight-of-coherence-jigsaw'));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getView())).toBe('player');
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getJigsaw())).toBe(id);
  await expect(page.locator('#weightCoherencePuzzle')).toHaveAttribute('data-jigsaw-id',id);
  await expect(page.locator('#weightCoherenceTitle')).toHaveText('Tears Without Witness');
  await page.goBack();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getView())).toBe('jigsaws');
  await page.goForward();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getJigsaw())).toBe(id);
  await expect(page.locator('#weightCoherencePuzzle')).toHaveAttribute('data-jigsaw-id',id);
});

test('every registered jigsaw restores its rendered selection after a real refresh',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/puzzles',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesRegistry?.jigsaws?.length));
  const jigsaws=await page.evaluate(()=>globalThis.BaselinePuzzlesRegistry.jigsaws.map(item=>({id:item.id,title:item.title})));
  for(const item of jigsaws){
    await page.goto('/baseline-recreation/puzzles/jigsaws/'+encodeURIComponent(item.id),{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>document.documentElement.hasAttribute('data-weight-of-coherence-jigsaw'));
    await expect(page.locator('#weightCoherencePuzzle')).toHaveAttribute('data-jigsaw-id',item.id);
    await expect(page.locator('#weightCoherenceTitle')).toHaveText(item.title);
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>document.documentElement.hasAttribute('data-weight-of-coherence-jigsaw'));
    await expect(page.locator('#weightCoherencePuzzle')).toHaveAttribute('data-jigsaw-id',item.id);
    await expect(page.locator('#weightCoherenceTitle')).toHaveText(item.title);
  }
});

test('Puzzles Jigsaws and Crossnumber views survive refresh',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/puzzles/jigsaws',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesLibrary));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getView())).toBe('jigsaws');
  await page.reload({waitUntil:'domcontentloaded'});
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getView())).toBe('jigsaws');

  await page.goto('/baseline-recreation/puzzles/crossnumber',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesLibrary));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getView())).toBe('crossnumber');
  await page.reload({waitUntil:'domcontentloaded'});
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary?.getView())).toBe('crossnumber');
});
test('Fitness routine Week Month calendar state survives refresh',async({page})=>{
  await page.goto('/baseline-fitness/my-routine/log',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(document.querySelector('[data-calendar-view="week"]')));
  await page.locator('[data-calendar-view="week"]').click();
  await expect(page).toHaveURL(/calendar-view=week/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-calendar-view="week"]')).toHaveAttribute('aria-selected','true');
});

test('Skincare routine Week Month calendar state survives refresh',async({page})=>{
  await page.goto('/baseline-natural-skincare/my-routine/log',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(document.querySelector('[data-skincare-calendar-view="week"]')));
  await page.locator('[data-skincare-calendar-view="week"]').click();
  await expect(page).toHaveURL(/calendar-view=week/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-skincare-calendar-view="week"]')).toHaveAttribute('aria-selected','true');
});

test('Fitness My Plan subviews survive client history',async({page})=>{
  await page.goto('/baseline-fitness/my-plan',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.documentElement.hasAttribute('data-baseline-fitness-runtime'));
  const completed=page.locator('[data-plan-view="completed"]');
  const future=page.locator('[data-plan-view="future"]');
  await completed.evaluate((button)=>button.click());
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan\/completed$/);
  await expect(completed).toHaveAttribute('aria-selected','true');
  await future.evaluate((button)=>button.click());
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan\/future$/);
  await expect(future).toHaveAttribute('aria-selected','true');
  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan\/completed$/);
  await expect(completed).toHaveAttribute('aria-selected','true');
});

test('Badminton Game Plan subviews survive refresh',async({page})=>{
  await page.goto('/baseline-badminton-session/game-plan',{waitUntil:'domcontentloaded'});
  await page.locator('[data-gameplan-tab="attendance"]').click();
  await expect(page).toHaveURL(/gameplan-view=attendance/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-gameplan-tab="attendance"]')).toHaveAttribute('aria-selected','true');
});

test('Recreation inner panels survive refresh',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/games/pairs',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.locator('[data-pairs-panel="pairsSkillCard"]').first().click();
  await expect(page).toHaveURL(/[?&]panel=pairsSkillCard/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page.locator('#pairsSkillCard')).toBeVisible();
});

test('Concept detail route survives refresh without Puzzles taking URL ownership',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/concepts/stroop-effect',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page).toHaveURL(/\/baseline-recreation\/concepts\/stroop-effect$/);
  await expect(page.locator('[data-target="concepts"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('#conceptsOverviewCard')).toBeHidden();
  await expect(page.locator('#conceptStroopEffect')).toBeVisible();

  const art=page.locator('[data-stroop-comparison-art]');
  await expect(page.locator('[data-stroop-mode="incongruent"]')).toHaveAttribute('aria-pressed','true');
  await expect(art).toHaveAttribute('src',/stroop-effect\.webp/);

  await page.locator('[data-stroop-mode="congruent"]').click();
  await expect(page.locator('[data-stroop-mode="congruent"]')).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('[data-stroop-mode="incongruent"]')).toHaveAttribute('aria-pressed','false');
  await expect(art).toHaveAttribute('src',/stroop-effect-congruent\.webp/);

  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page).toHaveURL(/\/baseline-recreation\/concepts\/stroop-effect$/);
  await expect(page.locator('#conceptsOverviewCard')).toBeHidden();
  await expect(page.locator('#conceptStroopEffect')).toBeVisible();

  await page.locator('[data-target="concepts"]').click();
  await expect(page).toHaveURL(/\/baseline-recreation\/concepts$/);
  await expect(page.locator('#conceptsOverviewCard')).toBeVisible();
  await expect(page.locator('#conceptStroopEffect')).toBeHidden();
});

test('Block Grid and Colour Sort nested tabs survive refresh',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/games/block-grid',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineBlockGrid) && globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page.locator('#blockGridPanel')).toHaveClass(/is-active/);
  const blockTiers=page.locator('[data-block-tab="modes"]');
  await expect(blockTiers).toBeVisible();
  await blockTiers.click();
  await expect(page).toHaveURL(/[?&]view=modes/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#blockGridModesCard')).toBeVisible();

  await page.goto('/baseline-recreation/games/colour-sort',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineColourSort) && globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page.locator('#colourSortPanel')).toHaveClass(/is-active/);
  const colourTiers=page.locator('[data-colour-tab="tiers"]');
  await expect(colourTiers).toBeVisible();
  await colourTiers.click();
  await expect(page).toHaveURL(/[?&]view=tiers/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#colourSortLevelsCard')).toBeVisible();
});

test('Baseline Realm exact scene survives refresh',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-recreation/games/baseline-realm?scene=ninja-training',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.sceneRouter));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('ninja-training');
  await page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.navigate('workshop'));
  await expect(page).toHaveURL(/[?&]scene=workshop/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.sceneRouter));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('workshop');
});
