const {test,expect}=require('@playwright/test');

test('sixty-minute partner massage follows current step inside a compact silent timeline',async({page})=>{
  await page.goto('/baseline-massage/routines?massage-plan=partner-full-body-60',{waitUntil:'domcontentloaded'});
  await expect(page.locator('#routines')).toHaveClass(/active/);
  await expect(page.locator('#massageRoutineSelect')).toHaveValue('partner-full-body-60');
  await expect(page.locator('#massageRoutineRunner')).toBeVisible();
  const timeline=page.locator('#massageRoutineTimeline');
  const rows=timeline.locator('.routine-step-row');
  await expect(rows).toHaveCount(17);
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(page.locator('#massageRoutineRemaining')).toHaveText('60:00');

  const metrics=await timeline.evaluate(el=>({height:el.clientHeight,scrollHeight:el.scrollHeight}));
  expect(metrics.height).toBeLessThan(300);
  expect(metrics.scrollHeight).toBeGreaterThan(metrics.height*3);

  await page.locator('#massageRoutineStart').click();
  await expect(page.locator('#massageRoutinePause')).toBeEnabled();
  await expect.poll(async()=>await page.locator('#massageRoutineElapsed').innerText()).not.toBe('00:00');
  await page.locator('#massageRoutinePause').click();
  const paused=await page.locator('#massageRoutineElapsed').innerText();
  await page.waitForTimeout(450);
  await expect(page.locator('#massageRoutineElapsed')).toHaveText(paused);

  for(let index=0;index<9;index++) await page.locator('#massageRoutineNext').click();
  await expect(page.locator('#massageRoutineCurrentTitle')).toContainText('Warm the full back');
  await expect(rows.nth(9)).toHaveAttribute('aria-current','step');
  await expect.poll(()=>timeline.evaluate(el=>el.scrollTop)).toBeGreaterThan(100);
  await expect.poll(()=>rows.nth(9).evaluate((row)=>{
    const timeline=row.closest('.massage-routine-timeline');
    const box=row.getBoundingClientRect(),view=timeline.getBoundingClientRect();
    return box.top>=view.top && box.bottom<=view.bottom;
  })).toBe(true);

  await page.locator('#massageRoutineReset').click();
  await expect(page.locator('#massageRoutineElapsed')).toHaveText('00:00');
  await expect(rows.first()).toHaveAttribute('aria-current','step');
  await page.locator('#massageRoutineSelect').selectOption('');
  await expect(page.locator('#massageRoutineRunner')).toBeHidden();
  await expect(page).not.toHaveURL(/massage-plan=/);
});

test('routine route and selected plan survive refresh and remain independent from planner',async({page})=>{
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
