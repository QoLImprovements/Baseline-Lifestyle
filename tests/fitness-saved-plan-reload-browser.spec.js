const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

test('Fitness hydrates an existing two-session plan in the remembered Calisthenics view', async ({ page }) => {
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

  await page.addInitScript(() => {
    sessionStorage.setItem('__bl_fitness_routine_view_v2__', 'calisthenics');
  });

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
  await expect(page.locator('[data-fitness-routine-view="calisthenics"]')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Progress: 0/2');
  expect(pageErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
});
