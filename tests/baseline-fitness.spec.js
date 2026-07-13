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

test('Fitness tabs remain stationary on hover', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  const tab=page.getByRole('button',{name:'My Plan',exact:true});
  await expect(tab).toBeVisible();
  const before=await tab.boundingBox();
  await tab.hover();
  await page.waitForTimeout(150);
  const after=await tab.boundingBox();
  expect(before).not.toBeNull();
  expect(after).not.toBeNull();
  expect(Math.abs(after.y-before.y)).toBeLessThan(0.1);
});

test('My Body sits between My Plan and Exercise Library and supports routed subtabs', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(document.querySelector('.tab[data-target="my-body"]')));

  const labels=await page.locator('.tabs .tab').allTextContents();
  expect(labels).toEqual(['System','My Plan','My Body','Exercise Library','Achievements']);

  await page.getByRole('button',{name:'My Body',exact:true}).click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body$/);
  await expect(page.locator('#my-body')).toHaveClass(/active/);
  await expect(page.getByRole('button',{name:'Overall Summary',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Body Profile',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Connected Services',exact:true})).toBeVisible();
});

test('Body Profile calculates and saves BMI and BMR', async ({ page }) => {
  await page.goto('/baseline-fitness/my-body', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(document.querySelector('#bodyProfileForm')));
  await page.getByRole('button',{name:'Body Profile',exact:true}).click();
  await page.locator('#bodyAge').fill('40');
  await page.locator('#bodySex').selectOption('male');
  await page.locator('#bodyActivity').selectOption('moderate');
  await page.locator('#bodyHeight').fill('180');
  await page.locator('#bodyWeight').fill('80');
  await page.locator('#bodyWaist').fill('85');
  await page.locator('#bodyHips').fill('95');
  await page.getByRole('button',{name:'Save Body Profile',exact:true}).click();
  await expect(page.locator('#bodyProfileStatus')).toHaveText('Body profile saved.');
  await page.getByRole('button',{name:'Overall Summary',exact:true}).click();
  await expect(page.locator('#bodyOverallSummary')).toContainText('24.7');
  await expect(page.locator('#bodyOverallSummary')).toContainText('1,730');
});

test('Garmin is presented as a full-sync connected service without claiming a live connection', async ({ page }) => {
  await page.goto('/baseline-fitness/my-body', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(document.querySelector('#connectGarminBtn')));
  await page.getByRole('button',{name:'Connected Services',exact:true}).click();
  await expect(page.locator('#my-body')).toContainText('Import available activity history');
  await expect(page.locator('#my-body')).toContainText('Automatically sync future Garmin activities');
  await page.getByRole('button',{name:'Connect Garmin',exact:true}).click();
  await expect(page.locator('#garminConnectionStatus')).toContainText('OAuth credentials are not configured');
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

test('side plank appears in plans as separate left and right exercises', async ({ page }) => {
  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  const row=page.locator('.ex-row').first();
  await row.locator('.ex-select').selectOption('Elbow Side Plank');
  await row.locator('.ex-baseline').fill('66');
  await page.locator('#sessions').fill('1');
  await page.locator('#genBtn').click();
  await expect(page.locator('#planOut')).toContainText('Elbow Plank Left - (66)');
  await expect(page.locator('#planOut')).toContainText('Elbow Plank Right - (66)');
  await expect(page.locator('#planOut')).not.toContainText('Elbow Side Plank');
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

  await expect(page.locator('html')).toHaveAttribute('data-baseline-fitness-voice-adapter','BASELINE_FITNESS_VOICE_ADAPTER_20260713_8');
  await expect(page.locator('html')).toHaveAttribute('data-baseline-fitness-persistent-recognition','BASELINE_FITNESS_PERSISTENT_RECOGNITION_20260713_3');
  await expect(page.locator('html')).toHaveAttribute('data-baseline-fitness-stable-recognition','true');
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

test('voice commands use Begin and remain state-scoped', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessVoice?.debug));

  const result=await page.evaluate(() => {
    const debug=globalThis.BASELINE_fitnessVoice.debug;
    return {
      begin:debug.intentFor('awaiting_go','Begin'),
      rejectsDone:debug.intentFor('awaiting_go','Done'),
      rejectsGo:debug.intentFor('awaiting_go','Go'),
      rejectsFailBeforeStart:debug.intentFor('awaiting_go','Fail'),
      fail:debug.intentFor('exercise_active','Fail'),
      failed:debug.intentFor('exercise_active','I failed'),
      failure:debug.intentFor('awaiting_result','That was a failure'),
      success:debug.intentFor('awaiting_result','Success'),
      next:debug.intentFor('resting','Next'),
      rejectsBeginDuringRest:debug.intentFor('resting','Begin'),
      rejectsNextDuringResult:debug.intentFor('awaiting_result','Next')
    };
  });

  expect(result).toEqual({
    begin:'begin',
    rejectsDone:null,
    rejectsGo:null,
    rejectsFailBeforeStart:null,
    fail:'fail',
    failed:'fail',
    failure:'fail',
    success:'success',
    next:'next',
    rejectsBeginDuringRest:null,
    rejectsNextDuringResult:null
  });
});

test('persistent recognition requires exact commands and canonicalises spoken numbers', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessPersistentRecognition));

  const result=await page.evaluate(() => {
    const recognition=globalThis.BASELINE_fitnessPersistentRecognition;
    return {
      build:recognition.BUILD,
      begin:recognition.commandFor('awaiting_go','begin'),
      rejectsDone:recognition.commandFor('awaiting_go','done'),
      rejectsGo:recognition.commandFor('awaiting_go','go'),
      rejectsLongBeginPhrase:recognition.commandFor('awaiting_go','I am ready to begin'),
      fail:recognition.commandFor('exercise_active','I failed'),
      success:recognition.commandFor('awaiting_result','that was successful'),
      next:recognition.commandFor('resting','next'),
      rejectsLongNextPhrase:recognition.commandFor('resting','next please'),
      nine:recognition.parseNumber('nine'),
      fourteen:recognition.parseNumber('fourteen repetitions'),
      nineteen:recognition.parseNumber('I achieved nineteen'),
      twentyFive:recognition.parseNumber('twenty-five reps'),
      recognisedWon:recognition.parseNumber('won repetition'),
      recognisedToo:recognition.parseNumber('too reps'),
      nineNinetyNine:recognition.parseNumber('I achieved nine hundred and ninety-nine seconds'),
      rejectsThousand:recognition.parseNumber('one thousand')
    };
  });

  expect(result).toEqual({
    build:'BASELINE_FITNESS_PERSISTENT_RECOGNITION_20260713_3',
    begin:'begin',
    rejectsDone:null,
    rejectsGo:null,
    rejectsLongBeginPhrase:null,
    fail:'fail',
    success:'success',
    next:'next',
    rejectsLongNextPhrase:null,
    nine:9,
    fourteen:14,
    nineteen:19,
    twentyFive:25,
    recognisedWon:1,
    recognisedToo:2,
    nineNinetyNine:999,
    rejectsThousand:null
  });
});

test('Voice Settings uses aligned custom switches with spacing below the cog', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessVoice));

  await page.evaluate(() => {
    const modal=document.getElementById('voiceWorkoutModal');
    if(modal) modal.hidden=false;
    document.body.classList.add('voice-workout-active');
  });

  await page.getByRole('button',{name:'Voice settings'}).click();
  const panel=page.locator('#voiceSettingsPanel');
  await expect(panel).toBeVisible();
  await expect(panel.locator('.voice-setting-toggle')).toHaveCount(6);
  await expect(panel.locator('.voice-setting-label')).toHaveCount(6);
  await expect(panel.locator('.voice-setting-switch')).toHaveCount(6);
  expect(await panel.evaluate(node=>parseFloat(getComputedStyle(node).marginTop))).toBeGreaterThanOrEqual(18);
});

test('End Voice Workout exits the website function without a browser prompt', async ({ page }) => {
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessVoice));

  await page.evaluate(() => {
    globalThis.__fitnessConfirmCalls=0;
    globalThis.confirm=()=>{
      globalThis.__fitnessConfirmCalls+=1;
      return true;
    };
    const modal=document.getElementById('voiceWorkoutModal');
    if(modal) modal.hidden=false;
    document.body.classList.add('voice-workout-active');
  });

  await page.locator('#endVoiceWorkoutBtn').click();
  expect(await page.evaluate(() => globalThis.__fitnessConfirmCalls)).toBe(0);
  await expect(page.locator('#voiceWorkoutModal')).toBeHidden();
});