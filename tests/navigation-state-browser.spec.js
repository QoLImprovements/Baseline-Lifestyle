const { test, expect } = require('@playwright/test');

function fulfillJson(route,payload,status=200){
  return route.fulfill({status,contentType:'application/json',body:JSON.stringify(payload)});
}

async function stubGames(page){
  const profiles={};
  const profileFor=(app)=>app==='ninja'
    ? {app:'ninja',coins:0,spirit:0,level:1,xp:0,stage:1,enemyHp:50,highestStage:1,totalKills:0,currentStreak:0,bestStreak:0,cleanWinStreak:0,bossesDefeated:0,totalCoinsEarned:0,prestigeCount:0,prestigeEarnedTotal:0,upgrades:{},spiritShop:{},lastSeenAt:Date.now(),bonusCache:{},offlineSummary:''}
    : {app,level:1,xp:0,bank:0,coins:0,skillPoints:1,skills:{}};
  await page.route('**/systems/baseline-games-hub/api/games_data.php**',async route=>{
    const request=route.request();
    let body={};try{body=request.postDataJSON();}catch(_e){}
    if(request.method()==='GET') return fulfillJson(route,{ok:true,profiles});
    if(body.app&&body.profile) profiles[body.app]=body.profile;
    if(body.action==='migrate_missing') Object.assign(profiles,body.profiles||{});
    return fulfillJson(route,{ok:true,app:body.app||'',profile:body.app?profiles[body.app]||null:null,profiles});
  });
  await page.route('**/systems/baseline-games-hub/api/games_profile.php**',async route=>{
    const url=new URL(route.request().url());
    let app=url.searchParams.get('app')||'pairs';
    if(!profiles[app]) profiles[app]=profileFor(app);
    return fulfillJson(route,{ok:true,app,profile:profiles[app]});
  });
}

test('Massage planner modes survive refresh Back and Forward',async({page})=>{
  await page.goto('/baseline-massage/planner',{waitUntil:'domcontentloaded'});
  await page.locator('[data-planner-mode="focused"]').click();
  await expect(page).toHaveURL(/\/baseline-massage\/planner\?planner-mode=focused$/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-planner-mode="focused"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-planner-mode="advanced"]').click();
  await expect(page).toHaveURL(/planner-mode=advanced/);
  await page.goBack();
  await expect(page.locator('[data-planner-mode="focused"]')).toHaveAttribute('aria-selected','true');
  await page.goForward();
  await expect(page.locator('[data-planner-mode="advanced"]')).toHaveAttribute('aria-selected','true');
});

test('Badminton Game Plan subviews survive refresh Back and Forward',async({page})=>{
  await page.goto('/baseline-badminton-session/game-plan',{waitUntil:'domcontentloaded'});
  await page.locator('[data-gameplan-tab="attendance"]').click();
  await expect(page).toHaveURL(/gameplan-view=attendance/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-gameplan-tab="attendance"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-gameplan-panel="attendance"]')).toHaveClass(/active/);
  await page.locator('[data-gameplan-tab="finished"]').click();
  await page.goBack();
  await expect(page.locator('[data-gameplan-tab="attendance"]')).toHaveAttribute('aria-selected','true');
  await page.goForward();
  await expect(page.locator('[data-gameplan-tab="finished"]')).toHaveAttribute('aria-selected','true');
});

test('Fitness My Plan Current Completed and Future are real history states',async({page})=>{
  await page.goto('/baseline-fitness/my-plan',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.__BASELINE_FITNESS_APP__));
  await page.locator('[data-plan-view="completed"]').click({force:true});
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan\/completed$/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.__BASELINE_FITNESS_APP__));
  await expect(page.locator('[data-plan-view="completed"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-plan-view="future"]').click({force:true});
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan\/future$/);
  await page.goBack();
  await expect(page.locator('[data-plan-view="completed"]')).toHaveAttribute('aria-selected','true');
  await page.goForward();
  await expect(page.locator('[data-plan-view="future"]')).toHaveAttribute('aria-selected','true');
});

test('Skincare Routine subviews create browser history instead of replacing it',async({page})=>{
  await page.goto('/baseline-natural-skincare/my-routine/log',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BASELINE_SKINCARE_ROUTINE));
  await page.locator('[data-routine-view="summary"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/my-routine\/summary$/);
  await page.locator('[data-routine-view="plan"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/my-routine\/plan$/);
  await page.goBack();
  await expect(page.locator('[data-routine-view="summary"]')).toHaveAttribute('aria-selected','true');
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-routine-view="summary"]')).toHaveAttribute('aria-selected','true');
});

test('Fitness My Routine subviews create browser history instead of replacing it',async({page})=>{
  await page.goto('/baseline-fitness/my-routine/log',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BASELINE_fitnessRoutineStructure));
  await page.locator('[data-fitness-routine-view="summary"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/summary$/);
  await page.locator('[data-fitness-routine-view="plan"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/plan$/);
  await page.goBack();
  await expect(page.locator('[data-fitness-routine-view="summary"]')).toHaveAttribute('aria-selected','true');
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('[data-fitness-routine-view="summary"]')).toHaveAttribute('aria-selected','true');
});

test('recipe subviews retain exact refresh and Back state',async({page})=>{
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend',{waitUntil:'domcontentloaded'});
  const details=page.locator('.recipe-subtab[data-recipe-subtab="details"]').first();
  const guidance=page.locator('.recipe-subtab[data-recipe-subtab="guidance"]').first();
  await details.click();
  await expect(page).toHaveURL(/[?&]view=details/);
  await guidance.click();
  await expect(page).toHaveURL(/[?&]view=guidance/);
  await page.goBack();
  await expect(details).toHaveAttribute('aria-selected','true');
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(details).toHaveAttribute('aria-selected','true');
});

test('Games Hub subpanels survive refresh and browser history',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/pairs',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await page.locator('[data-pairs-panel="pairsSkillCard"]').first().click();
  await expect(page).toHaveURL(/[?&]panel=pairsSkillCard/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_GAMES_HUB_CORE_READY===true);
  await expect(page.locator('#pairsSkillCard')).toBeVisible();
  await page.locator('[data-pairs-panel="pairsTierCard"]').first().click();
  await expect(page).toHaveURL(/[?&]panel=pairsTierCard/);
  await page.goBack();
  await expect(page.locator('#pairsSkillCard')).toBeVisible();
  await page.goForward();
  await expect(page.locator('#pairsTierCard')).toBeVisible();
});

test('Puzzles list and exact jigsaw survive refresh Back and Forward',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/puzzles',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesLibrary));
  await page.locator('[data-puzzle-type="jigsaws"]').click();
  await expect(page).toHaveURL(/[?&]puzzle=jigsaws/);
  const first=page.locator('[data-jigsaw-id]').first();
  const id=await first.getAttribute('data-jigsaw-id');
  await first.click();
  expect(new URL(page.url()).searchParams.get('jigsaw')).toBe(id);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePuzzlesLibrary));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getView())).toBe('player');
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getJigsaw())).toBe(id);
  await page.goBack();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getView())).toBe('jigsaws');
  await page.goForward();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselinePuzzlesLibrary.getJigsaw())).toBe(id);
});

test('Baseline Realm exact scene survives refresh Back and Forward',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/baseline-realm?scene=ninja-training',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('ninja-training');
  await page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.navigate('workshop'));
  await expect(page).toHaveURL(/[?&]scene=workshop/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('workshop');
  await page.goBack();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('ninja-training');
  await page.goForward();
  await expect.poll(()=>page.evaluate(()=>globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('workshop');
});


test('Block Grid subviews survive refresh Back and Forward',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/block-grid',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineBlockGrid));
  await expect(page.locator('#blockGridPanel')).toHaveClass(/is-active/);
  await page.locator('[data-block-tab="modes"]').click();
  await expect(page).toHaveURL(/[?&]view=modes/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineBlockGrid));
  await expect(page.locator('#blockGridModesCard')).toBeVisible();
  await page.locator('[data-block-tab="progress"]').click();
  await expect(page).toHaveURL(/[?&]view=progress/);
  await page.goBack();
  await expect(page.locator('#blockGridModesCard')).toBeVisible();
  await page.goForward();
  await expect(page.locator('#blockGridProgressCard')).toBeVisible();
});

test('Colour Sort subviews survive refresh Back and Forward',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/colour-sort',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineColourSort));
  await expect(page.locator('#colourSortPanel')).toHaveClass(/is-active/);
  await page.locator('[data-colour-tab="levels"]').click();
  await expect(page).toHaveURL(/[?&]view=levels/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BaselineColourSort));
  await expect(page.locator('#colourSortLevelsCard')).toBeVisible();
  await page.locator('[data-colour-tab="progress"]').click();
  await expect(page).toHaveURL(/[?&]view=progress/);
  await page.goBack();
  await expect(page.locator('#colourSortLevelsCard')).toBeVisible();
  await page.goForward();
  await expect(page.locator('#colourSortProgressCard')).toBeVisible();
});

test('Darts Focused clean route survives refresh and explicit close is reversible with Back',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/darts-focused',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.DartsFocusedGames)&&document.getElementById('dartsFocusedPanel')?.classList.contains('is-active'));
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/darts-focused$/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.getElementById('dartsFocusedPanel')?.classList.contains('is-active'));
  await page.locator('[data-close-darts-focused]').first().click();
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/games-list$/);
  await page.goBack();
  await page.waitForFunction(()=>document.getElementById('dartsFocusedPanel')?.classList.contains('is-active'));
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/darts-focused$/);
});

test('Badminton Focused clean route survives refresh and explicit close is reversible with Back',async({page})=>{
  await stubGames(page);
  await page.goto('/baseline-games-hub/games-hub/badminton-focused',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>Boolean(globalThis.BadmintonFocusedGames)&&document.getElementById('badmintonFocusedPanel')?.classList.contains('is-active'));
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/badminton-focused$/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.getElementById('badmintonFocusedPanel')?.classList.contains('is-active'));
  await page.locator('[data-close-badminton-focused]').first().click();
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/games-list$/);
  await page.goBack();
  await page.waitForFunction(()=>document.getElementById('badmintonFocusedPanel')?.classList.contains('is-active'));
  await expect(page).toHaveURL(/\/baseline-games-hub\/games-hub\/badminton-focused$/);
});
