const {test,expect}=require('@playwright/test');

async function openHub(page){
  await page.route('**/systems/baseline-recreation/api/games_data.php**',route=>
    route.fulfill({status:401,contentType:'application/json',body:JSON.stringify({ok:false,error:'not_logged_in'})})
  );
  await page.goto('/baseline-recreation/games',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await expect(page.locator('#games')).toHaveClass(/active/);
  await page.waitForFunction(()=>Boolean(globalThis.BaselinePathRecall&&globalThis.BaselineCombatSequence));
}
async function playObservedSequence(page,id){
  const root=page.locator('#'+id+'Panel');
  await expect(root).toBeVisible();
  await expect(root.locator('[data-sequence-tab]')).toHaveCount(5);
  await expect(root.locator('[data-sequence-xp-fill]')).toHaveCount(1);
  await expect(root.locator('[data-games-music-quick]')).toHaveCount(1);
  await expect(root.locator('[data-games-settings]')).toHaveCount(1);
  await page.evaluate(slug=>{
    const panel=document.getElementById(slug+'Panel');
    const board=panel.querySelector('[data-sequence-board]');
    const recorded=[];
    let last=null;
    const observer=new MutationObserver(()=>{
      const current=board.querySelector('[data-sequence-choice].is-lit')?.getAttribute('data-sequence-choice')||null;
      if(current!==null&&last!==current)recorded.push(current);
      last=current;
    });
    observer.observe(board,{childList:true,subtree:true});
    window.__recallObserved={recorded,observer};
  },id);
  await root.locator('[data-sequence-start]').click();
  await expect(root.locator('.sequence-status')).toContainText('Your turn',{timeout:17000});
  const sequence=await page.evaluate(()=>window.__recallObserved.recorded.slice());
  expect(sequence).toHaveLength(3);
  for(const choice of sequence)await root.locator('[data-sequence-choice="'+choice+'"]').click();
  await expect(root.locator('.sequence-status')).toContainText('Sequence complete');
  const profile=await page.evaluate(slug=>
    (slug==='pathRecall'?window.BaselinePathRecall:window.BaselineCombatSequence).getProfile(),
    id
  );
  expect(profile.roundsWon).toBe(1);
  expect(profile.roundsPlayed).toBe(1);
  expect(profile.totalCorrect).toBe(3);
  expect(profile.bank).toBeGreaterThan(0);
  expect(profile.xp).toBeGreaterThan(0);
  await root.locator('[data-sequence-tab="round"]').click();
  await expect(root.locator('[data-sequence-view="round"]')).toBeVisible();
  await expect(root.locator('.sequence-answer')).toBeVisible();
  await root.locator('[data-sequence-tab="progress"]').click();
  await expect(root.locator('[data-sequence-view="progress"]')).toContainText('Rounds completed');
  await root.locator('[data-sequence-tab="skills"]').click();
  await expect(root.locator('[data-sequence-skills]')).toContainText('Focus');
  await root.locator('[data-sequence-tab="tiers"]').click();
  await expect(root.locator('[data-sequence-tiers]')).toContainText('Starter');
  await root.locator('[data-sequence-tab="game"]').click();
  return profile;
}
for(const [name,id,app] of [['Path Recall','pathRecall','pathrecall'],['Combat Sequence','combatSequence','combatsequence']]){
  test(name+' opens from Core Games, plays a sequence and saves Rank/Bank',async({page})=>{
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await openHub(page);
    const slug=id==='pathRecall'?'path-recall':'combat-sequence';
    const rows=page.locator('[data-game-extension-overview-row="'+slug+'"]');
    await expect(rows).toHaveCount(1);
    await expect(rows).toBeVisible();
    await rows.locator('button[data-open-game-extension]').click();
    await expect(page).toHaveURL(new RegExp('/games/'+slug+'$'));
    const profile=await playObservedSequence(page,id);
    const stored=await page.evaluate(app=>window.BaselineGameStorage.getProfile(app),app);
    expect(stored.roundsWon).toBe(profile.roundsWon);
    await page.locator('#'+id+'Panel [data-close-game-extension]').first().click();
    await expect(page).toHaveURL(/\/baseline-recreation\/games$/);
    await expect(page.locator('#gamesOverviewCard')).toBeVisible();
    expect(errors).toEqual([]);
  });
}
test('Core Games overview has one canonical row and order for every game',async({page})=>{
  await openHub(page);
  const names=await page.locator('#gamesList [data-game-card]').evaluateAll(nodes=>
    nodes.filter(node=>node.closest('.games-list')).map(node=>node.querySelector('.game-row h3')?.textContent?.trim()).filter(Boolean)
  );
  for(const value of ['Pairs','Detect The Word','Make The Number','Rule Shift','Track the Coin','Path Recall','Combat Sequence','Block Grid','Colour Sort'])expect(names).toContain(value);
  for(const id of ['path-recall','combat-sequence','block-grid','colour-sort'])await expect(page.locator('#gamesList [data-game-extension-overview-row="'+id+'"]')).toHaveCount(1);
});
test('Path Recall mobile fullscreen is usable and can exit',async({browser})=>{
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await openHub(page);
  await page.locator('[data-open-game-extension="path-recall"]:visible').first().click();
  const game=page.locator('#pathRecallPanel [data-sequence-view="game"]');
  await game.locator('[data-sequence-fullscreen]').click();
  await expect(game).toHaveClass(/recreation-mobile-pseudo-fullscreen/);
  await expect(game.locator('[data-sequence-start]')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(game).not.toHaveClass(/recreation-mobile-pseudo-fullscreen/);
  await context.close();
});


test('Alt+F can fullscreen only the visible game window, never the Recreation page',async({page})=>{
  await openHub(page);
  await page.evaluate(()=>{
    const targets=[];
    window.__recreationAltFFullscreenTargets=targets;
    Element.prototype.requestFullscreen=function(){
      targets.push(this.id||this.tagName);
      return Promise.resolve();
    };
  });
  const altF=selector=>page.locator(selector).first().evaluate(node=>
    node.dispatchEvent(new KeyboardEvent('keydown',{key:'f',altKey:true,bubbles:true,cancelable:true}))
  );

  // No game is active: neither the page nor an invisible game may fullscreen.
  await altF('#gamesOverviewCard');
  expect(await page.evaluate(()=>window.__recreationAltFFullscreenTargets)).toEqual([]);

  await page.locator('[data-select-game="pairs"]:visible').first().click();
  await expect(page.locator('#pairsPanel')).toHaveClass(/is-active/);
  await altF('#pairsGameCard');
  expect(await page.evaluate(()=>window.__recreationAltFFullscreenTargets)).toEqual(['pairsGameCard']);

  // An extension taking over must not trigger the previous core game's shortcut.
  await page.locator('#pairsPanel [data-select-game=""]').first().click();
  await page.locator('[data-open-game-extension="path-recall"]:visible').first().click();
  await expect(page.locator('#pathRecallPanel')).toHaveClass(/is-active/);
  await altF('#pathRecallGameCard');
  expect(await page.evaluate(()=>window.__recreationAltFFullscreenTargets)).toEqual(['pairsGameCard','pathRecallGameCard']);

  await page.locator('#pathRecallPanel [data-close-game-extension]').first().click();
  await page.locator('[data-open-game-extension="block-grid"]:visible').first().click();
  await expect(page.locator('#blockGridPanel')).toHaveClass(/is-active/);
  await altF('#blockGridGameCard');
  expect(await page.evaluate(()=>window.__recreationAltFFullscreenTargets)).toEqual(['pairsGameCard','pathRecallGameCard','blockGridGameCard']);
});
