const {test,expect}=require('@playwright/test');

async function openRoutine(page){
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#routines')).toHaveClass(/active/);
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
}

test('unselected Massage Routines card fills mobile width instead of shrinking around dropdown',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
  const rects=await page.evaluate(()=>{
    const section=document.getElementById('routines').getBoundingClientRect();
    const card=document.querySelector('#routines .massage-routines-card').getBoundingClientRect();
    const dropdown=document.querySelector('#routines .routine-visible-select').getBoundingClientRect();
    return {viewport:window.innerWidth,sectionWidth:section.width,cardWidth:card.width,dropdownWidth:dropdown.width};
  });
  expect(rects.cardWidth).toBeGreaterThan(rects.viewport*0.83);
  expect(rects.cardWidth).toBeGreaterThan(rects.sectionWidth*0.88);
  expect(rects.dropdownWidth).toBeGreaterThan(rects.cardWidth*0.80);
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await page.locator('#massageRoutineSelect').selectOption('partner-full-body-60');
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await expect(page).toHaveURL(/massage-plan=partner-full-body-60/);
});

test('one active procedure only: area and technique family appear once, variation and details once',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  const rows=page.locator('#massageRoutineTimeline .routine-section-row');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Chest & Shoulders');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Pectorals — Effleurage');
  await expect(rows.first()).toContainText('Bilateral longitudinal strokes');
  await expect(rows.first()).toContainText('Pressure 2–3/10');
  await expect(rows.first()).not.toContainText('Effleurage');
  await expect(rows.first()).not.toContainText('Upper Pectorals');
  await expect(rows.first()).not.toContainText('Done');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('01:00');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('01:00');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Alternating hand strokes');
  await expect(rows.first()).not.toContainText('Bilateral longitudinal strokes');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 2 of 18');
  await page.locator('#massageRoutinePreviousProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
});

test('select any procedure, exact remaining time, automatic advance, pause and reset',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const list=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(list).toHaveCount(9);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(68);
  await list.first().locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:30');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Pectoral — Effleurage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-row')).toHaveCount(1);
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Longitudinal strokes');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:25');
  await expect(page.locator('#massageRoutineTimeline .routine-section-stretch')).toContainText('Left shoulder outward 30–90°');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(25000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:55');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 7 of 18');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Shoulder — Assisted Stretching');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:15');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('06:55');
  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(page.locator('#massageRoutineTimeline .routine-section-row')).toHaveCount(1);
});

test('navigation moves among nine anatomical steps and preserves upper-arm/forearm work',async({page})=>{
  await openRoutine(page);
  await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('14:00');
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Upper Arms & Forearms');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Upper Arm — Petrissage');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('15:30');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Right Forearm & Hand — Effleurage');
  await page.locator('#massageRoutinePrevious').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Chest & Shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await page.locator('#massageRoutineFullDetails summary').click();
  const step0=page.locator('#massageRoutineFullList .routine-full-step').first();
  await step0.locator('.routine-full-procedures li').nth(14).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('10:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Left Front Shoulder — Petrissage');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Circular kneading');
});

test('face-down back section includes thumb walking and tapotement',async({page})=>{
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const full=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(full).toHaveCount(9);
  await expect(full.nth(5)).toContainText('Finger crawling with thumb walking');
  await expect(full.nth(5)).toContainText('Cupping');
  await full.nth(5).locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Back — Tapotement');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Cupping');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:45');
  await expect(page.locator('#massageRoutineTimeline .routine-section-name')).toHaveText('Hacking');
});

test('minimal fullscreen preserves clock and one concise procedure, full list remains accessible',async({page})=>{
  await page.clock.install();
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await expect(player).toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineMinimalClock')).toBeVisible();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Upper Pectorals — Effleurage');
  await expect(page.locator('#massageRoutineMinimalTechnique')).toHaveText('Bilateral longitudinal strokes');
  await expect(page.locator('#massageRoutineMinimalPressure')).toHaveText('Pressure 2–3/10');
  await expect(page.locator('#massageRoutineTimeline')).toBeHidden();
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).toHaveClass(/routine-fullscreen/);
  const size=await page.evaluate(()=>{
    const dial=document.getElementById('massageRoutineMinimalClock');
    const digits=document.getElementById('massageRoutineMinimalTime');
    return {dial:dial.getBoundingClientRect().width,digits:parseFloat(getComputedStyle(digits).fontSize)};
  });
  expect(size.dial).toBeGreaterThan(250);
  expect(size.digits).toBeGreaterThanOrEqual(68);
  const full=page.locator('#massageRoutineFullDetails');
  await expect(full.locator('summary')).toBeVisible();
  await full.locator('summary').click();
  await expect(page.locator('#massageRoutineFullList .routine-full-step')).toHaveCount(9);
  await full.locator('summary').click();
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).not.toHaveClass(/routine-fullscreen/);
});

test('mobile windowed page scrolls naturally and active procedure panel has no internal scrollbar',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  const stats=await page.evaluate(()=>{
    const card=document.querySelector('#routines .massage-routines-card');
    const list=document.getElementById('massageRoutineTimeline');
    const runner=document.getElementById('massageRoutineRunner');
    return {
      cardWidth:card.getBoundingClientRect().width,
      viewport:innerWidth,
      overflow:getComputedStyle(list).overflowY,
      playerOverflow:getComputedStyle(runner).overflowY,
      internalHeight:list.scrollHeight,
      clientHeight:list.clientHeight,
      total:document.documentElement.scrollHeight
    };
  });
  expect(stats.cardWidth).toBeGreaterThan(stats.viewport*0.83);
  expect(stats.overflow).toBe('visible');
  expect(stats.playerOverflow).toBe('visible');
  expect(stats.internalHeight).toBeLessThanOrEqual(stats.clientHeight+2);
  expect(stats.total).toBeGreaterThan(844);
  await page.evaluate(()=>scrollTo(0,350));
  await expect.poll(()=>page.evaluate(()=>scrollY)).toBeGreaterThan(100);
});

test('routine URL selection remains independent of planner after refresh',async({page})=>{
  await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
  await page.locator('#massageRoutineSelect').selectOption('partner-full-body-60');
  await expect(page).toHaveURL(/massage-plan=partner-full-body-60/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await page.locator('.tab[data-target="planner"]').click();
  await expect(page.locator('#planner')).toHaveClass(/active/);
  await page.locator('.tab[data-target="routines"]').click();
  await expect(page.locator('#routines')).toHaveClass(/active/);
});
