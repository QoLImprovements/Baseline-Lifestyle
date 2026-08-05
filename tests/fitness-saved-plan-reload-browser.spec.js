const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

test('Fitness hydrates an existing two-session plan on the canonical My Routine route', async ({ page }) => {
  const pageErrors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('requestfailed', (request) => failedRequests.push({ url:request.url(), error:request.failure()?.errorText || '' }));

  const savedPlan = {
    version:9,
    items:[{ exercise:'Knee Push-Ups', baseline:12, sets:3, progressionType:'standard-reps' }],
    startDate:'2026-08-05',
    frequency:'3x',
    sessions:2,
    lengthMode:'sessions',
    days:[],
    timerStartDelay:5
  };

  await page.route('**/*', async (route) => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:true, name:'Release Test', email:'release@example.test', user:{ name:'Release Test', email:'release@example.test' } });
    if (pathname.endsWith('/get_plan.php')) return fulfillJson(route, { ok:true, hasPlan:true, planId:41, planJson:savedPlan, sessions:[], progress:null });
    if (pathname.endsWith('/list_profiles.php')) return fulfillJson(route, { ok:true, profiles:[] });
    if (pathname.endsWith('/achievements.php')) return fulfillJson(route, { ok:true, achievements:[] });
    if (pathname.endsWith('/voice_settings.php')) return fulfillJson(route, { ok:true, settings:{} });
    if (pathname.endsWith('/routine_state.php')) return fulfillJson(route, { ok:true, hasRoutine:false, activities:[], logs:[] });
    if (pathname.includes('/api/')) return fulfillJson(route, { ok:true });
    return route.continue();
  });

  await page.goto('/baseline-fitness/my-routine', { waitUntil:'domcontentloaded' });
  await page.waitForTimeout(2500);

  const state = await page.evaluate(() => {
    const section = document.querySelector('#my-plan');
    const saved = document.querySelector('#myPlanSavedWrap');
    const generator = document.querySelector('#myPlanGeneratorWrap');
    return {
      href:location.href,
      initialTab:document.documentElement.getAttribute('data-initial-fitness-tab'),
      sectionExists:Boolean(section),
      sectionClass:section?.className || '',
      sectionHidden:Boolean(section?.hidden),
      sectionHtml:(section?.innerHTML || '').slice(0, 1200),
      savedExists:Boolean(saved),
      savedHidden:Boolean(saved?.hidden),
      generatorExists:Boolean(generator),
      generatorHidden:Boolean(generator?.hidden),
      loader:Boolean(window.__BASELINE_FITNESS_ROUTINE_LOADER_V4__),
      workspace:Boolean(window.__BASELINE_FITNESS_ROUTINE_WORKSPACE_V2__),
      coherent:Boolean(window.__BASELINE_FITNESS_ROUTINE_SITEWIDE_V3__),
      app:Boolean(window.__BASELINE_FITNESS_APP__),
      debug:Boolean(window.BASELINE_FITNESS_DEBUG),
      scripts:Array.from(document.scripts).map((script) => script.src).filter(Boolean).filter((src) => src.includes('fitness'))
    };
  });

  console.log(`FITNESS_SAVED_RELOAD_STATE=${JSON.stringify({ state, pageErrors, failedRequests })}`);
  expect(pageErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Progress: 0/2');
});
