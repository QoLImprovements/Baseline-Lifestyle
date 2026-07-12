const { test, expect } = require('@playwright/test');

const PATH='/baseline-fitness/workout-routine';

test('Fitness exposes a working in-page account control', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  const button=page.locator('#fitnessAccountBtn');
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await button.click();
  await expect(page.locator('#bl-auth-flyout')).toBeVisible();
});

test('every rep set increases by one between sessions', async ({ page }) => {
  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));

  const sessions=await page.evaluate(() => {
    const values=globalThis.BASELINE_FITNESS_DEBUG.progressedSetValues;
    return [values(10,3,1),values(10,3,2),values(10,3,3)];
  });

  expect(sessions[1].map((value,index)=>value-sessions[0][index])).toEqual([1,1,1]);
  expect(sessions[2].map((value,index)=>value-sessions[1][index])).toEqual([1,1,1]);

  await page.locator('#sessions').fill('3');
  await page.locator('#genBtn').click();
  const cards=page.locator('#planOut .session-card');
  await expect(cards).toHaveCount(3);
  await expect(cards.nth(0)).toContainText(sessions[0].join(' / '));
  await expect(cards.nth(1)).toContainText(sessions[1].join(' / '));
  await expect(cards.nth(2)).toContainText(sessions[2].join(' / '));
});

test('exercise information is optional, updates with the dropdown, and can stay open', async ({ page }) => {
  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));

  await expect(page.locator('#exerciseDetails')).toHaveCount(0);
  const row=page.locator('.ex-row').first();
  const info=row.locator('.exercise-info-button');
  const caption=row.locator('.exercise-caption');
  await expect(info).toBeVisible();
  await info.click();
  await expect(info).toHaveAttribute('aria-expanded','true');
  await expect(caption).toContainText('Good for:');
  await expect(caption).toContainText('How:');

  await row.locator('.ex-select').selectOption({label:'Squats'});
  await expect(caption).toContainText('Leg strength');
  await expect(info).toHaveAttribute('aria-expanded','true');

  await page.locator('#sessions').click();
  await expect(info).toHaveAttribute('aria-expanded','false');
});

test('My Plan remains responsive after Fitness DOM updates', async ({ page }) => {
  const pageErrors=[];
  page.on('pageerror',error=>pageErrors.push(error.message));

  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG&&globalThis.BASELINE_fitnessVoice));

  await expect(page.locator('html')).toHaveAttribute('data-baseline-fitness-voice-adapter','BASELINE_FITNESS_VOICE_ADAPTER_20260712_7');
  await expect(page.locator('#voiceWorkoutTitle')).toHaveText('Voice workout');
  await expect(page.locator('#voiceWorkoutModal')).toHaveAttribute('aria-labelledby','voiceWorkoutTitle');
  await expect(page.getByRole('button',{name:'Voice settings'})).toHaveCount(1);
  await expect(page.locator('#voiceListeningStatus')).toHaveCount(0);

  await page.evaluate(() => {
    for(let index=0;index<25;index+=1){
      const probe=document.createElement('div');
      probe.dataset.fitnessMutationProbe=String(index);
      document.body.appendChild(probe);
      probe.remove();
    }
  });

  await page.getByRole('button',{name:'My Plan',exact:true}).click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-plan$/);
  await expect(page.locator('#my-plan')).toHaveClass(/active/);
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();

  await page.waitForTimeout(250);
  expect(pageErrors).toEqual([]);
  expect(await page.evaluate(() => 6*7)).toBe(42);
});

test('voice commands are state-scoped and Fail variants are reliable', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessVoice?.debug));

  const result=await page.evaluate(() => {
    const debug=globalThis.BASELINE_fitnessVoice.debug;
    return {
      go:debug.intentFor('awaiting_go','Go'),
      rejectsFailBeforeStart:debug.intentFor('awaiting_go','Fail'),
      fail:debug.intentFor('exercise_active','Fail'),
      failed:debug.intentFor('exercise_active','I failed'),
      failure:debug.intentFor('awaiting_result','That was a failure'),
      success:debug.intentFor('awaiting_result','Success'),
      next:debug.intentFor('resting','Next'),
      rejectsGoDuringRest:debug.intentFor('resting','Go'),
      rejectsNextDuringResult:debug.intentFor('awaiting_result','Next')
    };
  });

  expect(result).toEqual({
    go:'go',
    rejectsFailBeforeStart:null,
    fail:'fail',
    failed:'fail',
    failure:'fail',
    success:'success',
    next:'next',
    rejectsGoDuringRest:null,
    rejectsNextDuringResult:null
  });
});

test('persistent recognition accepts trigger phrases and canonicalises spoken numbers', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessPersistentRecognition));

  const result=await page.evaluate(() => {
    const recognition=globalThis.BASELINE_fitnessPersistentRecognition;
    return {
      build:recognition.BUILD,
      go:recognition.commandFor('awaiting_go','please go now'),
      fail:recognition.commandFor('exercise_active','I failed'),
      success:recognition.commandFor('awaiting_result','that was successful'),
      next:recognition.commandFor('resting','next please'),
      three:recognition.parseNumber('I completed three sets'),
      twentyFive:recognition.parseNumber('twenty-five seconds'),
      nineNinetyNine:recognition.parseNumber('I achieved nine hundred and ninety-nine seconds'),
      rejectsThousand:recognition.parseNumber('one thousand')
    };
  });

  expect(result).toEqual({
    build:'BASELINE_FITNESS_PERSISTENT_RECOGNITION_20260712_1',
    go:'go',
    fail:'fail',
    success:'success',
    next:'next',
    three:3,
    twentyFive:25,
    nineNinetyNine:999,
    rejectsThousand:null
  });
});
