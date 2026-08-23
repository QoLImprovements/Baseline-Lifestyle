const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

function isoOffset(days) {
  const date = new Date();
  date.setHours(12,0,0,0);
  date.setDate(date.getDate()+days);
  return date.toISOString().slice(0,10);
}

async function diagnosticState(page, phase) {
  const state = await page.evaluate(() => {
    const section = document.querySelector('#my-plan');
    const shell = document.querySelector('.fitness-routine-shell');
    const calisthenics = document.querySelector('[data-fitness-routine-panel="calisthenics"]');
    const saved = document.querySelector('#myPlanSavedWrap');
    const generator = document.querySelector('#myPlanGeneratorWrap');
    const activeSubview = document.querySelector('.fitness-routine-subtabs [data-fitness-routine-view][aria-selected="true"]');
    const activePlanSubview = document.querySelector('details[data-fitness-plan-card][open]');
    const styles = (element) => {
      if (!element) return null;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return { hidden:Boolean(element.hidden), display:style.display, visibility:style.visibility, width:Math.round(rect.width), height:Math.round(rect.height) };
    };
    return {
      href:location.href,
      readyState:document.readyState,
      sessionView:sessionStorage.getItem('__bl_fitness_routine_view_v2__'),
      planView:sessionStorage.getItem('__bl_fitness_plan_view_v4__'),
      initialTab:document.documentElement.getAttribute('data-initial-fitness-tab'),
      section:Boolean(section), sectionState:styles(section), shell:Boolean(shell), shellState:styles(shell),
      calisthenics:Boolean(calisthenics), calisthenicsState:styles(calisthenics),
      saved:Boolean(saved), savedState:styles(saved), generator:Boolean(generator), generatorState:styles(generator),
      activeSubview:activeSubview?.dataset.fitnessRoutineView || '',
      activePlanSubview:activePlanSubview?.dataset.fitnessPlanCard || '',
      flags:{
        workspace:Boolean(window.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__),
        structure:Boolean(window.__BASELINE_FITNESS_ROUTINE_STRUCTURE_V6__),
        coherence:Boolean(window.__BASELINE_ROUTINE_COHERENCE_V12__),
        policy:Boolean(window.__BASELINE_FITNESS_LIVE_POLICY_V4__),
        app:Boolean(window.BASELINE_FITNESS_DEBUG),
        routineApi:Boolean(window.BASELINE_fitnessRoutine)
      }
    };
  });
  console.log(`FITNESS_SAVE_RELOAD_${phase}=${JSON.stringify(state)}`);
  return state;
}

async function chooseExercise(page, name) {
  const row = page.locator('.ex-row').first();
  const input = row.locator('.ex-search-input');
  await expect(input).toBeVisible();
  await input.fill(name);
  const option = row.locator(`.ex-picker-option[data-exercise-name="${name}"]`);
  await expect(option).toBeVisible();
  await option.click();
  await expect(input).toHaveValue(name);
}

async function openFitnessPlanCard(page, view) {
  const card=page.locator(`details[data-fitness-plan-card="${view}"]`);
  await expect(card).toBeVisible();
  if (!(await card.evaluate((element) => element.open))) {
    await card.locator(':scope > summary').click();
  }
  await expect(card).toHaveAttribute('open','');
  return card;
}

test('Fitness saves, summarises, reloads and creates another plan without unstable text', async ({ page }) => {
  let savedPlan = null;
  const pageErrors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('requestfailed', (request) => failedRequests.push({ url:request.url(), error:request.failure()?.errorText || '' }));

  await page.route('**/*', async (route) => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:true, name:'Release Test', email:'release@example.test', user:{ name:'Release Test', email:'release@example.test' } });
    if (pathname.endsWith('/get_plan.php')) return fulfillJson(route, savedPlan
      ? { ok:true, hasPlan:true, planId:41, planJson:savedPlan, sessions:[], progress:null }
      : { ok:true, hasPlan:false });
    if (pathname.endsWith('/list_plans.php')) return fulfillJson(route, savedPlan
      ? { ok:true, plans:[{ planId:41, name:'Calisthenics Plan 1', planJson:savedPlan, sessions:[], progress:{ done:0, total:Number(savedPlan.sessions || 2) } }] }
      : { ok:true, plans:[] });
    if (pathname.endsWith('/save_plan.php')) {
      const payload = request.postDataJSON();
      savedPlan = payload.planJson;
      return fulfillJson(route, { ok:true, planId:41 });
    }
    if (pathname.endsWith('/list_profiles.php')) return fulfillJson(route, { ok:true, profiles:[] });
    if (pathname.endsWith('/achievements.php')) return fulfillJson(route, { ok:true, achievements:[] });
    if (pathname.endsWith('/voice_settings.php')) return fulfillJson(route, { ok:true, settings:{} });
    if (pathname.endsWith('/routine_state.php')) return fulfillJson(route, { ok:true, hasRoutine:false, visibility:'private', activities:[], logs:{} });
    if (pathname.endsWith('/routine_groups.php')) return fulfillJson(route, { ok:true, hasState:false, groups:[], assignments:{} });
    if (pathname.includes('/api/')) return fulfillJson(route, { ok:true });
    return route.continue();
  });

  await page.goto('/baseline-fitness/my-plan', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  await page.locator('.tab[data-target="my-plan"]').click();
  await page.locator('[data-fitness-routine-view="plan"]').click();
  await openFitnessPlanCard(page,'calisthenics');
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();

  await chooseExercise(page, 'Knee Push-Ups');
  await page.locator('.ex-row').first().locator('.ex-baseline').fill('12');
  await page.locator('#sessions').fill('2');
  await page.locator('#genBtn').click();
  await expect(page.locator('#planOut .session-card')).toHaveCount(2);
  await page.locator('#savePlanBtn').click();
  await expect.poll(() => savedPlan && savedPlan.sessions).toBe(2);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await diagnosticState(page, 'BEFORE_RELOAD');

  await page.reload({ waitUntil:'domcontentloaded' });
  await page.waitForTimeout(1800);
  const after = await diagnosticState(page, 'AFTER_RELOAD');

  expect(after.sessionView).toBe('plan');
  expect(after.planView).toBe('calisthenics');
  expect(after.activeSubview).toBe('plan');
  expect(after.activePlanSubview).toBe('');
  expect(after.flags.workspace).toBe(true);
  expect(after.flags.structure).toBe(true);
  expect(after.flags.coherence).toBe(true);
  expect(after.flags.policy).toBe(true);
  expect(pageErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  await openFitnessPlanCard(page,'calisthenics');
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanSavedWrap .calisthenics-saved-plan-summary')).toContainText('Progress: 0/2');

  await page.locator('[data-fitness-routine-view="summary"]').click();
  const planCard = page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item', { hasText:'Knee Push-Ups' });
  await expect(planCard).toBeVisible();
  await expect(planCard).toContainText('Knee Push-Ups');
  await expect(planCard).not.toContainText('Everyday activities this supports');
  await expect(planCard).not.toContainText('What this exercise develops');
  await expect(planCard).not.toContainText('How to perform it');

  const stability = await planCard.evaluate(async (card) => {
    const title = card.querySelector('strong');
    if (!title) return { mutations:-1, text:'', xSpread:999, ySpread:999, widthSpread:999 };
    let mutations = 0;
    const observer = new MutationObserver((records) => { mutations += records.length; });
    observer.observe(title, { childList:true, subtree:true, characterData:true });
    const samples = [];
    for (let index=0; index<24; index+=1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const rect = title.getBoundingClientRect();
      samples.push({ x:rect.x, y:rect.y, width:rect.width });
    }
    await new Promise((resolve) => setTimeout(resolve,250));
    observer.disconnect();
    const spread = (key) => Math.max(...samples.map((sample) => sample[key])) - Math.min(...samples.map((sample) => sample[key]));
    return { mutations, text:title.textContent, xSpread:spread('x'), ySpread:spread('y'), widthSpread:spread('width') };
  });
  expect(stability.mutations).toBe(0);
  expect(stability.xSpread).toBeLessThanOrEqual(1);
  expect(stability.ySpread).toBeLessThanOrEqual(1);
  expect(stability.widthSpread).toBeLessThanOrEqual(1);

  await page.locator('[data-fitness-routine-view="plan"]').click();
  await openFitnessPlanCard(page,'calisthenics');
  const createButton = page.locator('#createCalisthenicsPlan');
  await expect(createButton).toBeVisible();
  await createButton.click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/plan\/calisthenics$/);
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
  const createMarker = await page.evaluate(() => {
    for (let index=0; index<localStorage.length; index+=1) {
      const key = localStorage.key(index) || '';
      if (key.startsWith('__bl_fitness_creating_plan_v1__::')) return localStorage.getItem(key);
    }
    return null;
  });
  expect(createMarker).toBe('1');
});

async function installSavedPlanRoutes(page, planJson, sessions) {
  const progress = { done:0, total:sessions.length, nextIndex:1, startDate:planJson.startDate };
  await page.route('**/*', async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const pathname = url.pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route,{ ok:true,providers:{ password:true,google:false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route,{ ok:true,authed:true,name:'Workout Test',email:'workout@example.test',user:{ name:'Workout Test',email:'workout@example.test' } });
    if (pathname.endsWith('/get_plan.php')) return fulfillJson(route,{ ok:true,hasPlan:true,planId:51,planJson,sessions,progress });
    if (pathname.endsWith('/list_plans.php')) return fulfillJson(route,{ ok:true,plans:[{ planId:51,name:'Calisthenics Plan 1',planJson,sessions,progress,createdAt:Date.now() }] });
    if (pathname.endsWith('/routine_state.php')) return fulfillJson(route,{ ok:true,hasRoutine:false,visibility:'private',activities:[],logs:[] });
    if (pathname.endsWith('/routine_groups.php')) return fulfillJson(route,{ ok:true,hasState:false,groups:[],assignments:{} });
    if (pathname.endsWith('/achievements.php')) return fulfillJson(route,{ ok:true,achievements:[] });
    if (pathname.endsWith('/voice_settings.php')) return fulfillJson(route,{ ok:true,settings:{} });
    if (pathname.includes('/api/')) return fulfillJson(route,{ ok:true });
    return route.continue();
  });
}

test('weekly-count workout is immediately startable and has no unlock date', async ({ page }) => {
  const future = isoOffset(11);
  const planJson = {
    version:9,
    name:'Calisthenics Plan 1',
    startDate:future,
    frequency:'1x',
    scheduleMode:'weekly-count',
    flexibleWeekly:true,
    sessions:2,
    lengthMode:'sessions',
    items:[{ exercise:'Elbow Plank',baseline:90,progressionType:'timed-hold' }],
    days:[]
  };
  const sessions = [
    { session_index:1,scheduled_date:future,status:'planned',completed_at:null },
    { session_index:2,scheduled_date:isoOffset(18),status:'planned',completed_at:null }
  ];
  await installSavedPlanRoutes(page,planJson,sessions);
  await page.goto('/baseline-fitness/my-routine',{ waitUntil:'domcontentloaded' });
  await page.locator('[data-fitness-routine-view="plan"]').click();
  await openFitnessPlanCard(page,'calisthenics');
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  const start = page.locator('#startWorkoutBtn');
  await expect(start).toBeEnabled();
  await expect(page.locator('html')).toHaveAttribute('data-flex-weekly-count','true');
  await expect(page.locator('#myPlanStatus')).not.toContainText(/unlock|scheduled for later/i);
  await expect(page.locator('#currentWorkoutOut .session-plan-meta .badge').first()).toBeHidden();
  await start.click();
  await expect(page.locator('#startWorkoutBtn')).toHaveText('Continue Workout');
  await expect(page.locator('#fitnessStartEarlyPrompt')).toBeHidden();
});

test('specific-weekday future workout offers Start Early Yes or No', async ({ page }) => {
  const future = isoOffset(11);
  const futureDate = new Date(`${future}T12:00:00`);
  const weekday = futureDate.toLocaleDateString('en-GB',{ weekday:'long' });
  const planJson = {
    version:9,
    name:'Calisthenics Plan 1',
    startDate:future,
    frequency:'1x',
    scheduleMode:'specific-days',
    sessions:1,
    lengthMode:'sessions',
    items:[{ exercise:'Elbow Plank',baseline:90,progressionType:'timed-hold' }],
    days:[weekday]
  };
  const sessions = [{ session_index:1,scheduled_date:future,status:'planned',completed_at:null }];
  await installSavedPlanRoutes(page,planJson,sessions);
  await page.goto('/baseline-fitness/my-routine',{ waitUntil:'domcontentloaded' });
  await page.locator('[data-fitness-routine-view="plan"]').click();
  await openFitnessPlanCard(page,'calisthenics');
  const start = page.locator('#startWorkoutBtn');
  await expect(start).toBeEnabled();
  await start.click();
  const prompt = page.locator('#fitnessStartEarlyPrompt');
  await expect(prompt).toBeVisible();
  await expect(prompt).toContainText('Start Early?');
  await prompt.locator('[data-start-early="no"]').click();
  await expect(prompt).toBeHidden();
  await start.click();
  await prompt.locator('[data-start-early="yes"]').click();
  await expect(prompt).toBeHidden();
  await expect(page.locator('#startWorkoutBtn')).toHaveText('Continue Workout');
});
