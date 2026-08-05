const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

async function diagnosticState(page, phase) {
  const state = await page.evaluate(() => {
    const section = document.querySelector('#my-plan');
    const shell = document.querySelector('.fitness-routine-shell');
    const calisthenics = document.querySelector('[data-fitness-routine-panel="calisthenics"]');
    const saved = document.querySelector('#myPlanSavedWrap');
    const generator = document.querySelector('#myPlanGeneratorWrap');
    const activeSubview = document.querySelector('[data-fitness-routine-view][aria-selected="true"]');
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
      flags:{
        loader:Boolean(window.__BASELINE_FITNESS_ROUTINE_LOADER_V4__),
        workspace:Boolean(window.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__),
        coherent:Boolean(window.__BASELINE_FITNESS_ROUTINE_SITEWIDE_V3__),
        app:Boolean(window.BASELINE_FITNESS_DEBUG),
        routineApi:Boolean(window.BASELINE_fitnessRoutine)
      },
      scripts:Array.from(document.scripts).map((script) => script.src).filter((src) => src.includes('fitness'))
    };
  });
  console.log(`FITNESS_SAVE_RELOAD_${phase}=${JSON.stringify(state)}`);
  return state;
}

test('Fitness saves and reloads a two-session plan without losing the Calisthenics DOM', async ({ page }) => {
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
    if (pathname.endsWith('/save_plan.php')) {
      const payload = request.postDataJSON();
      savedPlan = payload.planJson;
      return fulfillJson(route, { ok:true, planId:41 });
    }
    if (pathname.endsWith('/list_profiles.php')) return fulfillJson(route, { ok:true, profiles:[] });
    if (pathname.endsWith('/achievements.php')) return fulfillJson(route, { ok:true, achievements:[] });
    if (pathname.endsWith('/voice_settings.php')) return fulfillJson(route, { ok:true, settings:{} });
    if (pathname.endsWith('/routine_state.php')) return fulfillJson(route, { ok:true, hasRoutine:false, activities:[], logs:[] });
    if (pathname.includes('/api/')) return fulfillJson(route, { ok:true });
    return route.continue();
  });

  await page.goto('/baseline-fitness/my-plan', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  await page.locator('.tab[data-target="my-plan"]').click();
  await page.locator('[data-fitness-routine-view="calisthenics"]').click();
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
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

  expect(after.sessionView).toBe('calisthenics');
  expect(pageErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Progress: 0/2');
});
