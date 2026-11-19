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
  await expect(rows).toHaveCount(14);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(rows.first()).toContainText('Effleurage');
  await expect(rows.first()).toContainText('Bilateral longitudinal strokes');
  await expect(rows.first()).toContainText('Pressure 2–3/10');
  await expect(rows.nth(1)).toContainText('Alternating Palms');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('01:00');
  await expect(page.locator('#massageRoutineNextTitle')).toHaveText('Anterior Shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await page.locator('#massageRoutineFullDetails summary').click();
  await page.locator('#massageRoutineFullList .routine-full-step').first()
    .locator('.routine-full-procedures li').nth(4).getByRole('button',{name:/Start here/}).click();
  await expect(rows).toHaveCount(14);
  await expect(rows.nth(4)).toContainText('left arm');
  await expect(rows.nth(9)).toContainText('right arm');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 5 of 14');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:30');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(75000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('07:15');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 8 of 14');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:20');
  await expect(rows.nth(7)).toHaveAttribute('aria-current','step');
  await expect.poll(()=>timeline.evaluate(el=>el.scrollTop)).toBeGreaterThan(30);
  await page.locator('#massageRoutineQuickPause').click();
  const paused=await page.locator('#massageRoutineElapsed').innerText();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText(paused);
  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(rows).toHaveCount(14);
  await page.locator('#massageRoutineSelect').selectOption('');
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await expect(page).not.toHaveURL(/massage-plan=/);
});

test('full routine is the only start-anywhere picker and procedure controls stay paired',async({page})=>{
  await page.clock.install();
  await openRoutine(page);
  await expect(page.locator('#massageRoutineStartStep')).toHaveCount(0);
  await expect(page.locator('#massageRoutineStartProcedure')).toHaveCount(0);
  const stepNav=page.locator('.routine-step-nav');
  const procedureNav=page.locator('.routine-procedure-nav');
  await expect(stepNav.locator('#massageRoutinePrevious')).toBeVisible();
  await expect(stepNav.locator('#massageRoutineNext')).toBeVisible();
  await expect(procedureNav.locator('#massageRoutinePreviousProcedure')).toBeVisible();
  await expect(procedureNav.locator('#massageRoutineNextProcedure')).toBeVisible();
  await expect(stepNav).toContainText('Pectorals & Chest Opening');
  await expect(procedureNav).toContainText('Bilateral longitudinal strokes');
  await page.locator('#massageRoutineFullDetails summary').click();
  const fullSteps=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(fullSteps).toHaveCount(12);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(68);
  await expect(fullSteps.nth(6)).toContainText('Finger Crawling With Thumb Walking');
  await expect(fullSteps.nth(6)).toContainText('Tapotement — Cupping');
  await fullSteps.nth(6).locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
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
  await fullSteps.nth(10).locator('.routine-full-procedures li').nth(8).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('57:45');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 9 of 12');
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
  expect(metrics.height).toBeGreaterThan(0);
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await expect(player).toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineMinimalClock')).toBeVisible();
  await expect(page.locator('#massageRoutineMinimalTime')).toHaveText('01:00');
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Bilateral longitudinal strokes');
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
  await expect(page.locator('#massageRoutineRunner')).not.toHaveClass(/routine-minimal/);
  await expect(page.locator('#massageRoutineTimeline')).toBeVisible();
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
  const chestOpening=page.locator('#massageRoutineFullList .routine-full-step').first();
  await chestOpening.locator('.routine-full-procedures li').nth(4).getByRole('button',{name:/Start here/}).click();
  const row=page.locator('#massageRoutineTimeline .routine-section-row.is-live');
  await expect(row).toContainText('Assisted Stretching');
  await expect(row).toContainText('Pressure 1–2/10');
  await expect(row).toContainText('Left shoulder outward 30–90°');
  await expect(row).toContainText('2–3/10');
  await expect(page.locator('#massageRoutineMinimalStretch')).toContainText('Left shoulder outward 30–90°');
  await page.locator('#massageRoutineQuickPause').click();
  await page.clock.fastForward(30000);
  await expect(page.locator('#massageRoutineTimeline .routine-section-row.is-live')).toContainText('Longitudinal strokes — left pectoral');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:25');
  await page.locator('#massageRoutineQuickPause').click();
  await page.locator('#massageRoutineFullDetails summary').click();
  await chestOpening.locator('.routine-full-procedures li').nth(9).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineTimeline .routine-section-row.is-live')).toContainText('Right shoulder outward 30–90°');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:30');
});


test('fullscreen player uses viewport, larger typography, and automatically advances a non-scrollable procedure card',async({page})=>{
  await page.clock.install();
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  const timeline=page.locator('#massageRoutineTimeline');
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).toHaveClass(/routine-fullscreen/);
  await expect(timeline).toHaveCSS('overflow-y','hidden');
  await expect(page.locator('#massageRoutineFullDetails summary')).toBeVisible();

  const dimensions=await page.evaluate(()=>{
    const player=document.getElementById('massageRoutineRunner');
    const timer=document.getElementById('massageRoutineElapsed');
    const instruction=document.querySelector('#massageRoutineTimeline .routine-section-row.is-live .routine-section-instruction');
    return {
      playerHeight:player.getBoundingClientRect().height,
      viewportHeight:innerHeight,
      timerFont:parseFloat(getComputedStyle(timer).fontSize),
      instructionFont:parseFloat(getComputedStyle(instruction).fontSize),
      timelineHeight:document.getElementById('massageRoutineTimeline').clientHeight,
      scrollHeight:document.getElementById('massageRoutineTimeline').scrollHeight,
    };
  });
  expect(dimensions.playerHeight).toBeGreaterThanOrEqual(dimensions.viewportHeight-2);
  expect(dimensions.timerFont).toBeGreaterThanOrEqual(48);
  expect(dimensions.instructionFont).toBeGreaterThanOrEqual(19);

  // Long steps are clipped visually but scroll automatically to the active procedure.
  await page.locator('#massageRoutineFullDetails summary').click();
  await page.locator('#massageRoutineFullList .routine-full-step').first()
    .locator('.routine-full-procedures li').nth(4).getByRole('button',{name:/Start here/}).click();
  await expect(timeline.locator('.routine-section-row')).toHaveCount(14);
  await expect(timeline.locator('.routine-section-row.is-live')).toContainText('Supported Pectoral Stretch');
  for(let i=0;i<5;i++)await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 10 of 14');
  await expect(timeline.locator('.routine-section-row.is-live')).toContainText('Supported Pectoral Stretch — Right');
  await expect.poll(()=>timeline.evaluate(el=>el.scrollTop)).toBeGreaterThan(0);
  await page.locator('#massageRoutinePreviousProcedure').click();
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Procedure 9 of 14');
  await expect(timeline.locator('.routine-section-row.is-live')).toContainText('Finishing strokes — left pectoral');
});

test('full list opens as a fullscreen viewer and can start any procedure without exiting fullscreen',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  const details=page.locator('#massageRoutineFullDetails');
  await page.locator('#massageRoutineFullscreen').click();
  await details.locator('summary').click();
  await expect(details).toHaveAttribute('open','');
  await expect(details.locator('summary')).toContainText('Back to Massage Player');
  await expect(details).toHaveCSS('position','absolute');
  await expect(page.locator('#massageRoutineFullList .routine-full-step')).toHaveCount(12);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(68);
  await expect(page.locator('#massageRoutineFullList')).toHaveCSS('overflow-y','auto');
  await page.locator('#massageRoutineFullList .routine-full-step').nth(6)
    .locator('.routine-full-procedures li').nth(5).getByRole('button',{name:/Start here/}).click();
  await expect(details).not.toHaveAttribute('open','');
  await expect(player).toHaveClass(/routine-fullscreen/);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await expect(page.locator('#massageRoutineTimeline .routine-section-row.is-live')).toContainText('Cupping');

  // Full list remains accessible in Minimal while fullscreen.
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await expect(player).toHaveClass(/routine-minimal/);
  await expect(details.locator('summary')).toBeVisible();
  await details.locator('summary').click();
  await expect(details).toHaveAttribute('open','');
  await expect(page.locator('#massageRoutineFullList .routine-full-step')).toHaveCount(12);
  await details.locator('summary').click();
  await expect(details).not.toHaveAttribute('open','');
});


test('normal mobile page scrolls naturally; Massage Player has no nested scrollbar',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  const player=page.locator('#massageRoutineRunner');
  const timeline=page.locator('#massageRoutineTimeline');

  const original=await player.evaluate(el=>({
    overflowY:getComputedStyle(el).overflowY,
    maxHeight:getComputedStyle(el).maxHeight,
    stepNavigationPosition:getComputedStyle(el.querySelector('.routine-step-nav')).position,
    playerScrollHeight:el.scrollHeight,
    playerClientHeight:el.clientHeight,
    bodyScrollHeight:document.documentElement.scrollHeight,
    viewportHeight:window.innerHeight,
  }));
  expect(original.overflowY).toBe('visible');
  expect(original.maxHeight).toBe('none');
  expect(original.stepNavigationPosition).toBe('static');
  expect(original.playerScrollHeight).toBeLessThanOrEqual(original.playerClientHeight+2);
  expect(original.bodyScrollHeight).toBeGreaterThan(original.viewportHeight);

  await page.evaluate(()=>window.scrollTo(0,350));
  await expect.poll(()=>page.evaluate(()=>window.scrollY)).toBeGreaterThan(100);
  await expect(timeline).toHaveCSS('overflow-y','hidden');

  // Fullscreen remains independent; returning to normal restores document scrolling.
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).toHaveClass(/routine-fullscreen/);
  await page.locator('#massageRoutineFullscreen').click();
  await expect(player).not.toHaveClass(/routine-fullscreen/);
  await expect(player).toHaveCSS('overflow-y','visible');
});


test('minimal mode keeps circular size but enlarges text and provides independent step and procedure arrows',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  await page.locator('#massageRoutineFullscreen').click();
  const clock=page.locator('#massageRoutineMinimalClock');
  await expect(clock).toBeVisible();
  const type=await page.evaluate(()=>{
    const face=document.querySelector('.routine-minimal-clock-face');
    return {
      dial:document.querySelector('#massageRoutineMinimalClock').getBoundingClientRect().width,
      digits:parseFloat(getComputedStyle(face.querySelector('strong')).fontSize),
      label:parseFloat(getComputedStyle(face.querySelector('span')).fontSize),
      elapsed:parseFloat(getComputedStyle(face.querySelector('small')).fontSize),
    };
  });
  expect(type.dial).toBeGreaterThan(250);
  expect(type.digits).toBeGreaterThanOrEqual(68);
  expect(type.label).toBeGreaterThanOrEqual(17);
  expect(type.elapsed).toBeGreaterThanOrEqual(16);
  await expect(page.locator('.routine-step-nav #massageRoutineCurrentTitle')).toBeVisible();
  await expect(page.locator('.routine-procedure-nav #massageRoutineMinimalName')).toBeVisible();
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineMinimalName')).toHaveText('Alternating Palms');
  await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Anterior Shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('10:00');
  await page.locator('#massageRoutinePrevious').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Pectorals & Chest Opening');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
});


test('windowed Minimal timer text fits within the unchanged circle without redundant labels',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await openRoutine(page);
  await page.locator('#massageRoutineSettings summary').click();
  await page.locator('#massageRoutineMinimal').check();
  const values=await page.evaluate(()=>{
    const clock=document.getElementById('massageRoutineMinimalClock');
    const face=clock.querySelector('.routine-minimal-clock-face');
    const digits=document.getElementById('massageRoutineMinimalTime');
    const elapsed=document.getElementById('massageRoutineMinimalElapsed');
    const cr=clock.getBoundingClientRect(),fr=face.getBoundingClientRect(),dr=digits.getBoundingClientRect(),er=elapsed.getBoundingClientRect();
    return {
      clockWidth:cr.width,
      digitSize:parseFloat(getComputedStyle(digits).fontSize),
      digitsInside:dr.left>=fr.left-1&&dr.right<=fr.right+1&&dr.top>=fr.top-1&&dr.bottom<=fr.bottom+1,
      elapsedInside:er.left>=fr.left-1&&er.right<=fr.right+1,
      redundantCaption:face.querySelector('span')?.textContent || '',
      headingKickers:document.querySelectorAll('#routines .routine-nav-kicker').length,
    };
  });
  expect(values.clockWidth).toBeGreaterThan(170);
  expect(values.digitSize).toBeGreaterThanOrEqual(39);
  expect(values.digitSize).toBeLessThanOrEqual(54);
  expect(values.digitsInside).toBe(true);
  expect(values.elapsedInside).toBe(true);
  expect(values.redundantCaption).toBe('');
  expect(values.headingKickers).toBe(0);
});

test('supine second step targets accessible anterior deltoids, not upper trapezius',async({page})=>{
  await openRoutine(page);
  await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Anterior Shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('10:00');
  const entries=page.locator('#massageRoutineTimeline .routine-section-row');
  await expect(entries).toHaveCount(4);
  for(let i=0;i<4;i++){
    await expect(entries.nth(i)).toContainText('anterior deltoid');
    await expect(entries.nth(i)).not.toContainText('trapezius');
  }
  await page.locator('#massageRoutineFullDetails summary').click();
  await expect(page.locator('#massageRoutineFullList .routine-full-step').nth(6)).toContainText('upper trapezius');
});
