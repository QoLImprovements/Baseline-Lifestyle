const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

async function diagnosticState(page, phase) {
  const state = await page.evaluate(() => {
    const section = document.querySelector('#my-plan');
    const shell = document.querySelector('.fitness-routine-shell');
    const calisthenics = document.querySelector('[data-fitness-plan-panel="calisthenics"]');
    const saved = document.querySelector('#myPlanSavedWrap');
    const generator = document.querySelector('#myPlanGeneratorWrap');
    const activeSubview = document.querySelector('.fitness-routine-subtabs [data-fitness-routine-view][aria-selected="true"]');
    const activePlanSubview = document.querySelector('[data-fitness-plan-view][aria-selected="true"]');
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
      section:Boolean(section),
      sectionState:styles(section),
      sectionHtml:(section?.innerHTML || '').slice(0, 1600),
      shell:Boolean(shell),
      shellState:styles(shell),
      calisthenics:Boolean(calisthenics),
      calisthenicsState:styles(calisthenics),
      saved:Boolean(saved),
      savedState:styles(saved),
      generator:Boolean(generator),
      generatorState:styles(generator),
      activeSubview:activeSubview?.dataset.fitnessRoutineView || '',
      activePlanSubview:activePlanSubview?.dataset.fitnessPlanView || '',
      flags:{
        loader:Boolean(window.__BASELINE_FITNESS_ROUTINE_LOADER_V9__ || window.__BASELINE_FITNESS_ROUTINE_LOADER_V12__),
        workspace:Boolean(window.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__),
        coherent:Boolean(window.__BASELINE_ROUTINE_COHERENCE_V4__),
        app:Boolean(window.BASELINE_FITNESS_DEBUG),
        routineApi:Boolean(window.BASELINE_fitnessRoutine)
      },
      scripts:Array.from(document.scripts).map((script) => script.src).filter((src) => src.includes('fitness') || src.includes('routine-coherence'))
    };
  });
  console.log(`FITNESS_SAVE_RELOAD_${phase}=${JSON.stringify(state)}`);
  return state;
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
      ? { ok:true, plans:[{ planId:41, planJson:savedPlan, sessions:[], progress:{ done:0, total:Number(savedPlan.sessions || 2) } }] }
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
    if (pathname.includes('/api/')) return fulfillJson(route, { ok:true });
    return route.continue();
  });

  await page.goto('/baseline-fitness/my-plan', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  await page.locator('.tab[data-target="my-plan"]').click();
  await page.locator('[data-fitness-routine-view="plan"]').click();
  await page.locator('[data-fitness-plan-view="calisthenics"]').click();
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
  await page.locator('.ex-row').first().locator('.ex-select').selectOption('Knee Push-Ups');
  await page.locator('.ex-row').first().locator('.ex-baseline').fill('12');
  await page.locator('#sessions').fill('2');
  await page.locator('#genBtn').click();
  await expect(page.locator('#planOut .session-card')).toHaveCount(2);
  await page.locator('#savePlanBtn').click();
  await expect.poll(() => savedPlan && savedPlan.sessions).toBe(2);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await diagnosticState(page, 'BEFORE_RELOAD');

  await page.reload({ waitUntil:'domcontentloaded' });
  await page.waitForTimeout(2500);
  const after = await diagnosticState(page, 'AFTER_RELOAD');

  expect(after.sessionView).toBe('plan');
  expect(after.planView).toBe('calisthenics');
  expect(after.activeSubview).toBe('plan');
  expect(after.activePlanSubview).toBe('calisthenics');
  expect(pageErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Progress: 0/2');

  await page.locator('[data-fitness-routine-view="summary"]').click();
  const kneeCard = page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item', { hasText:'Knee Push-Ups' });
  await expect(kneeCard).toBeVisible();
  await expect(kneeCard).toContainText('What this exercise develops');
  await expect(kneeCard).toContainText('How to perform it');
  await expect(kneeCard).toContainText('Progression and measurement');
  await expect(kneeCard).toContainText('Keep a straight line from head to knees, lower with control and press back up.');
  await expect(kneeCard).toContainText('Chest drives the body away from the floor.');
  await page.waitForTimeout(500);

  const stability = await kneeCard.evaluate(async (card) => {
    const titleWrap = card.querySelector('.routine-summary-title');
    const title = titleWrap?.querySelector('strong');
    if (!titleWrap || !title) return { mutations:-1, text:'', xSpread:999, ySpread:999, widthSpread:999 };
    let mutations = 0;
    const observer = new MutationObserver((records) => { mutations += records.length; });
    observer.observe(titleWrap, { childList:true, subtree:true, characterData:true });
    const samples = [];
    for (let index = 0; index < 24; index += 1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const rect = title.getBoundingClientRect();
      samples.push({ x:rect.x, y:rect.y, width:rect.width });
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
    observer.disconnect();
    const spread = (key) => Math.max(...samples.map((sample) => sample[key])) - Math.min(...samples.map((sample) => sample[key]));
    return { mutations, text:title.textContent, xSpread:spread('x'), ySpread:spread('y'), widthSpread:spread('width') };
  });
  expect(stability.text).toBe('Knee Push-Ups');
  expect(stability.mutations).toBe(0);
  expect(stability.xSpread).toBeLessThanOrEqual(1);
  expect(stability.ySpread).toBeLessThanOrEqual(1);
  expect(stability.widthSpread).toBeLessThanOrEqual(1);

  await page.locator('[data-fitness-routine-view="plan"]').click();
  await page.locator('[data-fitness-plan-view="calisthenics"]').click();
  const createButton = page.locator('#createCalisthenicsPlan');
  await expect(createButton).toBeVisible();
  await Promise.all([
    page.waitForURL((url) => url.pathname === '/baseline-fitness/my-routine' && url.searchParams.has('new-plan')),
    createButton.click()
  ]);
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
  const createMarker = await page.evaluate(() => {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index) || '';
      if (key.startsWith('__bl_fitness_creating_plan_v1__::')) return localStorage.getItem(key);
    }
    return null;
  });
  expect(createMarker).toBe('1');
});
