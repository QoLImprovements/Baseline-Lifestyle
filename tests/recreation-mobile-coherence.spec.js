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

test('mobile Colour Sort shows a separate Round tab and a usable three-column bottle board',async ({ browser })=>{
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await openRecreation(page);
  await page.getByRole('button',{name:'Games',exact:true}).first().click();
  await page.locator('[data-open-game-extension="colour-sort"]:visible').first().click();
  await expect(page.locator('#colourSortPanel')).toBeVisible();
  await expect(page.locator('#colourSortPanel [data-colour-tab]')).toHaveCount(4);
  await page.locator('#colourSortPanel [data-colour-tab="round"]').click();
  await expect(page.locator('#colourSortRoundCard')).toBeVisible();
  await expect(page.locator('#colourSortGameCard')).toBeHidden();
  await expect(page.locator('#colourSortRoundCard .round-status-card')).toBeVisible();
  await page.locator('#colourSortPanel [data-colour-tab="game"]').click();
  await page.locator('#colourSortPanel [data-colour-action="new"]').first().click();
  await expect(page.locator('#colourSortGameCard .colour-sort-bottle').first()).toBeVisible();
  const bottleLayout=await page.locator('#colourSortGameCard .colour-sort-board').evaluate(board=>{
    const style=getComputedStyle(board);
    const bounds=board.getBoundingClientRect();
    return {columns:style.gridTemplateColumns.split(' ').filter(Boolean).length,scrollWidth:board.scrollWidth,width:bounds.width};
  });
  expect(bottleLayout.columns).toBe(3);
  expect(bottleLayout.scrollWidth).toBeLessThanOrEqual(bottleLayout.width+2);
  const back=page.locator('#colourSortPanel .game-header [data-close-game-extension="colour-sort"]');
  await expect(back).toBeVisible();
  await expect(back).toHaveAttribute('aria-label','Return to games overview');
  expect(errors).toEqual([]);
  await context.close();
});

test('mobile core Games uses a top back-arrow rather than duplicate text navigation',async ({ browser })=>{
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await openRecreation(page);
  await page.getByRole('button',{name:'Games',exact:true}).first().click();
  await page.locator('[data-select-game="pairs"]:visible').first().click();
  const back=page.locator('#pairsPanel > .mobile-game-exit');
  await expect(back).toBeVisible();
  await expect(back.locator('svg')).toHaveCount(1);
  await expect(back).toHaveAttribute('data-tooltip','Return to games overview');
  await expect(page.locator('#pairsPanel .game-header [data-select-game=""]')).toBeHidden();
  await back.click();
  await expect(page.locator('#gamesOverviewCard')).toBeVisible();
  await context.close();
});


test('Cross Number keeps puzzle-only actions at the foot of Numbers on desktop, touch and fullscreen', async ({ browser }) => {
  for (const setup of [
    {viewport:{width:1440,height:900},isMobile:false,hasTouch:false},
    {viewport:{width:390,height:844},isMobile:true,hasTouch:true}
  ]) {
    const context=await browser.newContext(setup);
    const page=await context.newPage();
    await page.route('**/systems/baseline-recreation/api/games_data.php**', async route => {
      await route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({ok:false,error:'save_unavailable'})});
    });
    await page.goto('/baseline-recreation/puzzles/crossnumber',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>Boolean(globalThis.BaselineGamesMusic && globalThis.BASELINE_RECREATION_CORE_READY));
    const panel=page.locator('#crossnumberGamePanel');
    await expect(panel).toBeVisible();
    const bank=panel.locator('.crossnumber-bank-panel');
    const controls=bank.locator('.crossnumber-specific-actions');
    const common=panel.locator('.crossnumber-actions.game-common-actions');
    const puzzleActions=['sort','undo','hint','restart'];
    for(const action of puzzleActions) {
      await expect(controls.locator('[data-crossnumber-action="'+action+'"]')).toHaveCount(1);
      await expect(common.locator('[data-crossnumber-action="'+action+'"]')).toHaveCount(0);
    }
    await expect(controls).toBeVisible();
    const verify=async()=>{
      const result=await page.evaluate(()=>{
        const rect=selector=>document.querySelector(selector)?.getBoundingClientRect();
        const r=selector=>{const b=rect(selector);return b?{x:b.x,y:b.y,right:b.right,bottom:b.bottom}:null};
        const scope='#crossnumberGamePanel ';
        return {
          bank:r(scope+'.crossnumber-bank-panel'),
          actionRow:r(scope+'.crossnumber-bank-panel > .crossnumber-specific-actions'),
          numberBank:r(scope+'.crossnumber-bank'),
          newGame:r(scope+'.crossnumber-actions > .start-new-game-toggle'),
          auto:r(scope+'.crossnumber-actions > .auto-next-toggle'),
          settings:r(scope+'.crossnumber-actions > .games-settings-trigger'),
          music:r(scope+'.crossnumber-actions > .games-music-quick-toggle'),
          fullscreen:r(scope+'.crossnumber-actions > .game-fullscreen-toggle')
        };
      });
      for(const [name,box] of Object.entries(result)) expect(box,name+' must exist').not.toBeNull();
      expect(result.actionRow.y).toBeGreaterThanOrEqual(result.numberBank.y);
      expect(result.actionRow.bottom).toBeLessThanOrEqual(result.bank.bottom+2);
      expect(Math.abs(result.newGame.x-result.auto.x)).toBeLessThanOrEqual(2);
      expect(result.newGame.y).toBeLessThan(result.auto.y);
      expect(Math.abs(result.settings.x-result.fullscreen.x)).toBeLessThanOrEqual(2);
      expect(result.settings.y).toBeLessThan(result.fullscreen.y);
      expect(result.music.x).toBeLessThan(result.fullscreen.x);
      expect(Math.abs(result.music.y-result.fullscreen.y)).toBeLessThanOrEqual(2);
    };
    await verify();
    if(!setup.isMobile){
      await panel.locator('[data-crossnumber-action="fullscreen"]').click();
      await page.waitForFunction(()=>document.fullscreenElement?.id==='crossnumberGamePanel');
      await verify();
      await page.evaluate(()=>document.exitFullscreen());
    }
    await context.close();
  }
});


test('all eight standard Recreation games share one five-button dock and a distinct Round view',async({browser})=>{
  test.setTimeout(120000);
  const cases=[
    ['pairs','/baseline-recreation/games/pairs','#pairsGameCard','[data-pairs-panel="pairsRoundCard"]','[data-pairs-panel="pairsGameCard"]','#pairsRoundSummary',5],
    ['detectword','/baseline-recreation/games/detect-the-word','#wordGameCard','[data-word-panel="wordRoundCard"]','[data-word-panel="wordGameCard"]','#wordRoundSummary',5],
    ['make24','/baseline-recreation/games/make-the-number','#make24GameCard','[data-make24-panel="make24RoundCard"]','[data-make24-panel="make24GameCard"]','#make24RoundSummary',5],
    ['trackcoin','/baseline-recreation/games/track-the-coin','#trackCoinGamePanel','[data-trackcoin-panel="trackCoinRoundPanel"]','[data-trackcoin-panel="trackCoinGamePanel"]','#trackCoinSummary',5],
    ['ruleshift','/baseline-recreation/games/rule-shift','#ruleShiftGameCard','[data-ruleshift-panel="ruleShiftRoundCard"]','[data-ruleshift-panel="ruleShiftGameCard"]','#ruleShiftRoundSummary',5],
    ['blockgrid','/baseline-recreation/games/block-grid','#blockGridGameCard','[data-block-tab="round"]','[data-block-tab="game"]','#blockGridStatus',5],
    ['coloursort','/baseline-recreation/games/colour-sort','#colourSortGameCard','[data-colour-tab="round"]','[data-colour-tab="game"]','#colourSortRoundCard .round-status-card',4],
    ['crossnumber','/baseline-recreation/puzzles/crossnumber','#crossnumberGamePanel','[data-crossnumber-panel="crossnumberRoundPanel"]','[data-crossnumber-panel="crossnumberGamePanel"]','#crossnumberRoundPanel [data-crossnumber-status]',5]
  ];
  // Native browser fullscreen and touch-only pseudo-fullscreen are separate paths.
  // This desktop geometry suite must exercise native fullscreen.
  const context=await browser.newContext({viewport:{width:1440,height:900},hasTouch:false});
  const page=await context.newPage();
  await page.route('**/systems/baseline-recreation/api/games_data.php**',async route=>{
    await route.fulfill({status:503,contentType:'application/json',body:JSON.stringify({ok:false,error:'save_unavailable'})});
  });
  const geometry=async(rootSelector,game)=>{
    const values=await page.evaluate(selector=>{
      const root=document.querySelector(selector);
      const dock=root?.querySelector('.game-window-actions.game-common-actions.recreation-unified-controls');
      const rect=cls=>{
        const el=dock?.querySelector(cls);
        if(!el)return null;
        const r=el.getBoundingClientRect(),style=getComputedStyle(el);
        return {x:r.x+r.width/2,y:r.y+r.height/2,width:r.width,height:r.height,display:style.display};
      };
      return {dock:dock?.getBoundingClientRect().toJSON()||null,
        start:rect('.start-new-game-toggle'),auto:rect('.auto-next-toggle'),
        settings:rect('.games-settings-trigger'),music:rect('.games-music-quick-toggle'),
        fullscreen:rect('.game-fullscreen-toggle'),
        specificsInDock:dock?.querySelectorAll('[data-recreation-original-specific],.game-specific-actions').length||0};
    },rootSelector);
    for(const label of ['start','auto','settings','music','fullscreen']){
      expect(values[label],game+' '+label).not.toBeNull();
      expect(values[label].width,game+' '+label+' width').toBeGreaterThan(35);
      expect(values[label].display,game+' '+label+' display').not.toBe('none');
    }
    expect(Math.abs(values.start.x-values.auto.x),game+' +/A').toBeLessThanOrEqual(2);
    expect(values.start.y,game+' New Game above Auto').toBeLessThan(values.auto.y);
    expect(Math.abs(values.settings.x-values.fullscreen.x),game+' Settings/Fullscreen').toBeLessThanOrEqual(2);
    expect(values.settings.y,game+' Settings above Fullscreen').toBeLessThan(values.fullscreen.y);
    expect(Math.abs(values.music.y-values.fullscreen.y),game+' Music/Fullscreen same row').toBeLessThanOrEqual(2);
    expect(values.music.x,game+' Music left of Fullscreen').toBeLessThan(values.fullscreen.x);
    expect(values.specificsInDock,game+' no extra dock actions').toBe(0);
  };
  for(const [name,url,rootSelector,roundTab,gameTab,status,count] of cases){
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.waitForFunction(selector=>Boolean(
      globalThis.BASELINE_RECREATION_CORE_READY && globalThis.BaselineGamesMusic &&
      document.querySelector(selector)?.getClientRects().length
    ),rootSelector,{timeout:20000});
    const root=page.locator(rootSelector);
    await expect(root,name+' visible game').toBeVisible();
    await geometry(rootSelector,name+' windowed');
    await expect(page.locator(roundTab),name+' Round tab').toBeVisible();
    await page.locator(roundTab).click();
    await expect(page.locator(status),name+' live Round Status').toBeVisible();
    await expect(page.locator(status)).toContainText('Round Status');
    await expect(root).toBeHidden();
    await page.locator(gameTab).click();
    await expect(root).toBeVisible();
    await expect(page.locator(status)).toBeHidden();
    await root.locator('.game-fullscreen-toggle').click();
    await page.waitForFunction(selector=>document.fullscreenElement?.matches(selector),rootSelector,{timeout:10000});
    await geometry(rootSelector,name+' fullscreen');
    const tabs=root.locator(':scope > .game-fullscreen-window-tabs [data-fullscreen-window-tab]');
    await expect(tabs).toHaveCount(count);
    await tabs.filter({hasText:/^Round$/}).click();
    await expect(root.locator(':scope > .game-fullscreen-window-tabs .game-fullscreen-window-pane')).toContainText('Round Status');
    await tabs.filter({hasText:/^Game$/}).click();
    await page.evaluate(()=>document.exitFullscreen());
    await page.waitForFunction(()=>document.fullscreenElement===null);
  }
  await context.close();
});
