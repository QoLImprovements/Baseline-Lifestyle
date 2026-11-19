const {test,expect}=require('@playwright/test');

test('silent massage timer highlights and scrolls exact timed sections',async({page})=>{
  await page.clock.install();
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#routines')).toHaveClass(/active/);
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await expect(page.locator('#massageRoutineSelect')).toHaveValue('partner-full-body-60');

  const timeline=page.locator('#massageRoutineTimeline');
  const rows=timeline.locator('.routine-section-row');
  await expect(rows).toHaveCount(2);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('01:00');
  await expect(page.locator('#massageRoutineNextTitle')).toHaveText('Pectoral kneading and gliding');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');

  // Skip main steps without altering the 60-minute schedule.
  await page.locator('#massageRoutineNext').click();
  await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Chest opening with pectoral massage');
  await expect(page.locator('#massageRoutineNextTitle')).toHaveText('Neck, trapezius and front shoulders');
  await expect(rows).toHaveCount(10);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(rows.first()).toContainText('Assisted stretching');
  await expect(rows.first()).toContainText('Supported left-arm opening');
  await expect(rows.first()).toContainText('left arm');
  await expect(rows.nth(5)).toContainText('right arm');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Section 1 of 10');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:30');
  await expect(timeline).toHaveCSS('overflow-y','auto');

  // Fast-forward into the fourth section: 75 seconds into the four-minute step.
  await page.locator('#massageRoutineStart').click();
  await page.clock.fastForward(75000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('07:15');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Section 4 of 10');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:20');
  await expect(rows.nth(3)).toHaveAttribute('aria-current','step');
  await expect(rows.nth(3).locator('.routine-section-remaining')).toHaveText('00:20 left');
  await expect.poll(()=>timeline.evaluate(el=>el.scrollTop)).toBeGreaterThan(30);
  await expect.poll(()=>rows.nth(3).evaluate(row=>{
    const container=row.closest('.routine-sections');
    const a=row.getBoundingClientRect(),b=container.getBoundingClientRect();
    return a.top>=b.top && a.bottom<=b.bottom;
  })).toBe(true);

  await page.locator('#massageRoutinePause').click();
  const paused=await page.locator('#massageRoutineElapsed').innerText();
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText(paused);
  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(rows).toHaveCount(2);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await page.locator('#massageRoutineSelect').selectOption('');
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await expect(page).not.toHaveURL(/massage-plan=/);
});

test('massage plan selection survives refresh and remains independent from planner',async({page})=>{
  await page.goto('/baseline-massage/routines',{waitUntil:'domcontentloaded'});
  await page.locator('#massageRoutineSelect').selectOption('partner-full-body-60');
  await expect(page).toHaveURL(/massage-plan=partner-full-body-60/);
  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  await page.locator('.tab[data-target="planner"]').click();
  await expect(page.locator('#planner')).toHaveClass(/active/);
  await expect(page.locator('[data-planner-mode="provider"]')).toBeVisible();
  await page.locator('.tab[data-target="routines"]').click();
  await expect(page.locator('#routines')).toHaveClass(/active/);
});


test('select any step or procedure, go backward and forward, pause, and view all techniques',async({page})=>{
  await page.clock.install();
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  const stepSelect=page.locator('#massageRoutineStartStep');
  const procedureSelect=page.locator('#massageRoutineStartProcedure');
  await expect(stepSelect.locator('option')).toHaveCount(17);
  await stepSelect.selectOption('10');
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Upper back and posterior shoulders');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('37:00');
  await expect(procedureSelect.locator('option')).toHaveCount(8);
  await procedureSelect.selectOption('3');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');
  await expect(page.locator('#massageRoutineSectionClock')).toHaveText('00:45');
  await expect(page.locator('#massageRoutineTimeline .is-live')).toContainText('Tapotement');
  await expect(page.locator('#massageRoutineTimeline .is-live')).toContainText('Cupping');
  await expect(page.locator('#massageRoutineQuickPause')).toHaveText('Resume');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:45');
  await expect(page.locator('#massageRoutineTimeline .is-live')).toContainText('Hacking');
  await page.locator('#massageRoutinePreviousProcedure').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:00');

  await page.locator('#massageRoutineQuickPause').click();
  await expect(page.locator('#massageRoutineQuickPause')).toHaveText('Pause');
  await page.clock.fastForward(5000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:05');
  await page.locator('#massageRoutineQuickPause').click();
  await expect(page.locator('#massageRoutineQuickPause')).toHaveText('Resume');
  await page.clock.fastForward(10000);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('40:05');

  await procedureSelect.selectOption('7');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('42:30');
  await page.locator('#massageRoutineNextProcedure').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toHaveText('Lower back muscles');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('43:00');

  await page.locator('#massageRoutineFullDetails summary').click();
  const fullSteps=page.locator('#massageRoutineFullList .routine-full-step');
  await expect(fullSteps).toHaveCount(17);
  await expect(page.locator('#massageRoutineFullList .routine-full-procedures li')).toHaveCount(68);
  await expect(fullSteps.nth(10)).toContainText('Finger crawling with thumb walking');
  await expect(fullSteps.nth(10)).toContainText('Tapotement');
  await fullSteps.nth(15).locator('.routine-full-procedures li').nth(2).getByRole('button',{name:/Start here/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('57:45');
  await expect(page.locator('#massageRoutineSectionCounter')).toHaveText('Section 3 of 6');
  await expect(page.locator('#massageRoutineStartStep')).toHaveValue('15');
  await expect(page.locator('#massageRoutineStartProcedure')).toHaveValue('2');
  await fullSteps.first().getByRole('button',{name:/Start at this step/}).click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(page.locator('#massageRoutinePreviousProcedure')).toBeDisabled();
});
