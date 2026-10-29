const { test, expect } = require('@playwright/test');

async function openRecreation(page) {
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async route => {
    await route.fulfill({status:503, contentType:'application/json',body:JSON.stringify({ok:false,error:'save_unavailable'})});
  });
  await page.goto('/baseline-recreation/system',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
}

test('mobile Jigsaw has playable board, one tabbed tray, and navigable fullscreen icons', async ({ browser }) => {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',error => errors.push(error.message));
  await openRecreation(page);
  await page.getByRole('button',{name:'Puzzles',exact:true}).first().click();
  await page.locator('[data-puzzle-type="jigsaws"]').first().click();
  await page.locator('[data-jigsaw-id]').first().click();

  const workspace=page.locator('#weightCoherenceWorkspace');
  await expect(workspace).toBeVisible();
  await expect(page.locator('#weightCoherenceBoard')).toBeVisible();
  await expect(page.locator('[data-jigsaw-tray-tab]')).toHaveCount(5);
  await expect(page.locator('.weight-coherence-main-tray-panel')).toBeVisible();
  await expect(page.locator('#weightCoherenceMobileSortHost')).toBeHidden();
  await page.locator('[data-jigsaw-tray-tab="sort-0"]').click();
  await expect(page.locator('.weight-coherence-main-tray-panel')).toBeHidden();
  await expect(page.locator('#weightCoherenceMobileSortHost')).toBeVisible();
  await expect(page.locator('#weightCoherenceMobileSortHost .weight-coherence-sort-shell')).toHaveCount(4);
  await page.locator('[data-jigsaw-tray-tab="main"]').click();
  await expect(page.locator('.weight-coherence-main-tray-panel')).toBeVisible();

  await page.locator('#weightCoherenceFullscreenBtn').click();
  await expect(workspace).toHaveClass(/is-pseudo-fullscreen/);
  await expect(page.locator('#weightCoherenceControlsPrevBtn')).toBeVisible();
  await expect(page.locator('#weightCoherenceControlsNextBtn')).toBeVisible();
  await expect(page.locator('#weightCoherenceBoard')).toBeVisible();
  const layout=await page.locator('#weightCoherenceBoard').evaluate(el=>{
    const bounds=el.getBoundingClientRect();
    return {width:bounds.width,height:bounds.height,screen:innerWidth};
  });
  expect(layout.width).toBeGreaterThan(100);
  expect(layout.width).toBeLessThanOrEqual(layout.screen);
  expect(layout.height).toBeGreaterThan(100);
  // Compact fullscreen is not satisfied merely by having the tabs in the DOM.
  // All three regions must be visible together without scrolling the page.
  const compact=await page.evaluate(()=>{
    const rect=selector=>{
      const el=document.querySelector(selector);
      if(!el) return null;
      const r=el.getBoundingClientRect();
      return {top:r.top,bottom:r.bottom,left:r.left,right:r.right,width:r.width,height:r.height};
    };
    return {
      viewport:{width:innerWidth,height:innerHeight},
      toolbar:rect('#weightCoherenceWorkspace .weight-coherence-toolbar'),
      board:rect('#weightCoherenceWorkspace .weight-coherence-board-wrap'),
      tabs:rect('#weightCoherenceWorkspace .weight-coherence-mobile-tray-tabs'),
      tray:rect('#weightCoherenceWorkspace .weight-coherence-tray-shell'),
      oldSortVisible:[...document.querySelectorAll('#weightCoherenceWorkspace .weight-coherence-sort-column')].some(el=>getComputedStyle(el).display!=='none')
    };
  });
  expect(compact.oldSortVisible).toBe(false);
  for(const part of ['toolbar','board','tabs','tray']){
    expect(compact[part],part).not.toBeNull();
    expect(compact[part].top,part+' top').toBeGreaterThanOrEqual(-1);
    expect(compact[part].bottom,part+' bottom').toBeLessThanOrEqual(compact.viewport.height+1);
    expect(compact[part].width,part+' width').toBeGreaterThan(100);
  }
  expect(compact.board.bottom).toBeLessThanOrEqual(compact.tabs.top+1);
  expect(compact.toolbar.bottom).toBeLessThanOrEqual(compact.board.top+1);
  const actionHit=await page.locator('#weightCoherenceControlsNextBtn').evaluate(button=>{
    const info=node=>{
      if(!node) return null;
      const b=node.getBoundingClientRect(),s=getComputedStyle(node);
      return {rect:{x:b.x,y:b.y,width:b.width,height:b.height},zIndex:s.zIndex,position:s.position,gridArea:s.gridArea,display:s.display};
    };
    const r=button.getBoundingClientRect();
    const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
    const workspace=document.getElementById('weightCoherenceWorkspace');
    return {hit:(hit?.tagName||'')+'#'+(hit?.id||''),button:info(button),rail:info(button.parentElement),toolbar:info(button.closest('.weight-coherence-toolbar')),stage:info(workspace.querySelector('.weight-coherence-stage')),board:info(document.getElementById('weightCoherenceBoard')),workspace:info(workspace)};
  });
  expect(actionHit.hit,JSON.stringify(actionHit)).toBe('BUTTON#weightCoherenceControlsNextBtn');
  await page.locator('#weightCoherenceControlsNextBtn').click();
  await page.locator('#weightCoherenceFullscreenBtn').click();
  await expect(workspace).not.toHaveClass(/is-pseudo-fullscreen/);
  expect(errors).toEqual([]);
  await context.close();
});

test('mobile Pairs displays complete rows rather than an isolated last card', async ({ browser }) => {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await openRecreation(page);
  await page.getByRole('button',{name:'Games',exact:true}).first().click();
  await page.locator('[data-select-game="pairs"]:visible').first().click();
  await page.locator('#newPairsBoardBtn').click();
  const layout=await page.locator('#pairsBoard').evaluate(board=>{
    const count=board.querySelectorAll('.memory-card').length;
    const columns=getComputedStyle(board).gridTemplateColumns.split(' ').filter(Boolean).length;
    return {count,columns};
  });
  expect(layout.count).toBeGreaterThan(0);
  expect(layout.columns).toBeGreaterThanOrEqual(2);
  expect(layout.count % layout.columns).toBe(0);
  await context.close();
});
