const {test,expect}=require('@playwright/test');

async function openRoutine(page){
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#routines')).toHaveClass(/active/);
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
}

test('sixty-minute routine highlights exact timed procedures and pauses without audio',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  const timeline=page.locator('#massageRoutineTimeline');
  const rows=timeline.locator('.routine-section-row');
  await expect(rows).toHaveCount(2);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(rows.first()).toContainText('Effleurage');
  await expect(rows.first()).toContainText('Broad Palm');
  await expect(rows.first()).toContainText('Pressure 2–3/10');
  await expect(rows.nth(1)).toContainText('Alternating Palms');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('01:00');
  await expect(page.locator('#massageRoutineNextTitle')).toHaveText('Pectoral Petrissage');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await page.locator('#massageRoutineNext').click();
  await page.locator('#massageRoutineNext').click();
  await expect(rows).toHaveCount(10);
  await expect(rows.first()).toContainText('left arm');
  await expect(rows.nth(5)).toContainText('right arm');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 1 of 10');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:30');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(75000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('07:15');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 4 of 10');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:20');
  await expect(rows.nth(3)).toHaveAttribute('aria-current','step');
  await expect.poll(()=>timeline.evaluate(el=>el.scrollTop)).toBeGreaterThan(30);
  await page.locator('#massageRoutineQuickPause').click();
  const paused=await page.locator('#massageRoutineElapsed').innerText();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText(paused);
  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(rows).toHaveCount(2);
  await page.locator('#massageRoutineSelect').selectOption('');
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await expect(page).not.toHaveURL(/massage-plan=/);
});

test('full routine is the only start-anywhere picker and procedure controls stay paired',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await expect(page.locator('#massageRoutineStartStep')).toHaveCount(0);
  await expect(page.locator('#massageRoutineStartProcedure')).toHaveCount(0);
  const navigation=page.locator('#massageRoutineRunner .routine-navigation');
  await expect(navigation.locator('.routine-nav-pair')).toHaveCount(2);
  await expect(navigation.locator('#massageRoutinePrevious')).toBeVisible();
  await expect(navigation.locator('#massageRoutineNext')).toBeVisible();
  await expect(navigation.locator('#massageRoutinePreviousProcedure')).toBeVisible();
  await expect(navigation.locator('#massageRoutineNextProcedure')).toBeVisible();
  await page.locator('#massageRoutineFullDetails summary').click();
  const fullSteps=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(fullSteps).toHaveCount(17);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(68);
  await expect(fullSteps.nth(10)).toContainText('Finger Crawling With Thumb Compression');
  await expect(fullSteps.nth(10)).toContainText('Tapotement — Cupping');
  await fullSteps.nth(10).locator('.routine-full-procedures li').nth(3).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:45');
  await expect(page.locator('#massageRoutineFullDetails')).not.toHaveAttribute('open');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:45');
  await expect(page.locator('#massageRoutineTimeline .is-live')).toContainText('Hacking');
  await page.locator('#massageRoutinePreviousProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(5000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:05');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:05');
  await page.locator('#massageRoutineFullDetails summary').click();
  await fullSteps.nth(15).locator('.routine-full-procedures li').nth(2).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('57:45');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 3 of 6');
  await page.locator('#massageRoutineFullDetails summary').click();
  await fullSteps.first().getByRole('button',{name:/Start at this step/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
});

test('mobile player is compact, plan name wraps, and minimal clock/fullscreen can be toggled',async({page})=>{
  await page.clock.install();
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const display=page.locator('#massageRoutinePlanValue');
  await expect(display).toContainText('60-Minute Full-Body Partner Massage');
  const wrapped=await display.evaluate(el=>({width:el.clientWidth,scroll:el.scrollWidth,whiteSpace:getComputedStyle(el).whiteSpace}));
  expect(wrapped.whiteSpace).toBe('normal');
  expect(wrapped.scroll).toBeLessThanOrEqual(wrapped.width+2);
  const player=page.locator('#massageRoutineRunner');
  const metrics=await player.evaluate(el=>({height:el.getBoundingClientRect().height,screen:window.innerHeight}));
  expect(metrics.height).toBeLessThan(metrics.screen);
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await expect(player).toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineMinimalClock')).toBeVisible();
  await expect(page.locator('#massageRoutineMinimalTime')).toHaveText('01:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Broad Palm');
  await expect(page.locator('#massageRoutineMinimalPressure')).toHaveText('Pressure 2–3/10');
  await expect(page.locator('#massageRoutineTimeline')).toBeHidden();
  await expect(page.locator('#massageRoutineFullDetails')).toBeHidden();
  await expect(page.locator('#massageRoutineQuickPause')).toBeVisible();
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineMinimalTime')).toHaveText('00:50');
  await page.locator('#massageRoutineQuickPause').click();

  // Fullscreen uses native browser support when possible; CSS fallback always works.
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).toHaveClass(/routine-fullscreen/);
  await expect(page.locator('#massageRoutineFullscreen')).toHaveAttribute('aria-pressed','true');
  await page.locator('#massageRoutineFullscreen').click();
  await expect(page.locator('#massageRoutineFullscreen')).toHaveAttribute('aria-pressed','false');

  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#massageRoutineRunner')).toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineMinimalClock')).toBeVisible();
});

test('massage plan survives refresh and remains independent from planner',async({page})=>{
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

test('precise pressure and stretch readout updates for left and right arm procedures',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await page.locator('#massageRoutineFullDetails summary').click();
  const chestOpening=page.locator('#massageRoutineFullList .routine-full-step').nth(2);
  await chestOpening.locator('.routine-full-procedures li').first().getByRole('button',{name:/Start here/}).click();
  const row=page.locator('#massageRoutineTimeline .routine-section-row.is-live');
  await expect(row).toContainText('Assisted Stretching');
  await expect(row).toContainText('Pressure 1–2/10');
  await expect(row).toContainText('Left shoulder outward 30–90°');
  await expect(row).toContainText('2–3/10');
  await expect(page.locator('#massageRoutineMinimalStretch')).toContainText('Left shoulder outward 30–90°');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(30000);
  await expect(page.locator('#massageRoutineTimeline .routine-section-row.is-live')).toContainText('Pectoral Glide Under Stretch — Left');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:25');
  await page.locator('#massageRoutineQuickPause').click();
  await page.locator('#massageRoutineFullDetails summary').click();
  await chestOpening.locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineTimeline .routine-section-row.is-live')).toContainText('Right shoulder outward 30–90°');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:30');
});
