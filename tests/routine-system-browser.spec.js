const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

async function mockGuestApis(page) {
  await page.route('**/*', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:false, providers:{ password:true, google:false } });
    if (pathname.endsWith('/routine_state.php') || pathname.endsWith('/routine_groups.php')) {
      return fulfillJson(route, { ok:false, error:'not_logged_in' }, 401);
    }
    if (pathname.includes('/api/')) return fulfillJson(route, { ok:false, error:'not_logged_in' }, 401);
    return route.continue();
  });
}

test('Skincare checkboxes, notes, selects and weekly calendar remain genuinely interactive', async ({ page }) => {
  await mockGuestApis(page);
  await page.addInitScript(() => {
    localStorage.setItem('__bl_skincare_routine_v1__::guest', JSON.stringify({
      visibility:'private',
      items:[{
        id:'browser-facial-steam',
        actionId:'facial-steam',
        title:'Facial Steam',
        timeOfDay:'anytime',
        frequency:{ mode:'daily', days:[], timesPerWeek:1 },
        benefitMode:'comprehensive',
        notes:''
      }],
      logs:{}
    }));
    localStorage.removeItem('__bl_skincare_routine_groups_v3__::guest');
    localStorage.removeItem('__bl_skincare_routine_groups_v2__::guest');
  });

  await page.goto('/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=routine', { waitUntil:'domcontentloaded' });
  await expect(page.locator('#routine')).toHaveClass(/active/);

  const checkbox = page.locator('[data-log-complete="browser-facial-steam"]');
  await expect(checkbox).toBeVisible();
  await checkbox.check();
  await expect(page.locator('[data-log-complete="browser-facial-steam"]')).toBeChecked();

  const note = page.locator('[data-log-note="browser-facial-steam"]');
  await note.fill('Steam completed comfortably');
  await page.waitForTimeout(300);
  await expect(page.locator('[data-log-note="browser-facial-steam"]')).toHaveValue('Steam completed comfortably');

  await page.locator('[data-routine-view="plan"]').click();
  const editStep = page.locator('[data-skincare-step-toggle="browser-facial-steam"]');
  await expect(editStep).toHaveText('Edit step');
  await editStep.click();
  await expect(editStep).toHaveText('Close step');

  const timeSelect = page.locator('[data-routine-item="browser-facial-steam"] [data-field="timeOfDay"]');
  await timeSelect.selectOption('evening');
  await expect(page.locator('[data-routine-item="browser-facial-steam"] [data-field="timeOfDay"]')).toHaveValue('evening');

  await page.locator('[data-routine-view="log"]').click();
  await page.locator('[data-skincare-calendar-view="week"]').click();
  await expect(page.locator('#routineCalendarGrid.bl-routine-week-list .bl-routine-day-row')).toHaveCount(7);
  const widths = await page.locator('#routineCalendarGrid .bl-routine-day-row').evaluateAll((rows) => rows.map((row) => Math.round(row.getBoundingClientRect().width)));
  expect(new Set(widths).size).toBe(1);
  expect(widths[0]).toBeGreaterThan(500);
});

test('Fitness shares the same disclosures, summaries and full-width weekly rows', async ({ page }) => {
  await mockGuestApis(page);
  await page.addInitScript(() => {
    localStorage.setItem('__bl_fitness_routine_v2__::guest', JSON.stringify({
      activities:[{
        id:'browser-hatha-yoga',
        activityId:'hatha-yoga',
        name:'Hatha Yoga',
        section:'other',
        timeOfDay:'anytime',
        frequency:{ mode:'weekly', days:[], timesPerWeek:1 },
        targetMetrics:{ durationMinutes:30, intensity:'Moderate' },
        notes:'Mobility and controlled breathing'
      }],
      logs:{}
    }));
  });

  await page.goto('/baseline-fitness/my-routine', { waitUntil:'domcontentloaded' });
  const summaryTab = page.locator('[data-fitness-routine-view="summary"]');
  await summaryTab.waitFor({ state:'attached' });
  const ancestry = await summaryTab.evaluate((element) => {
    const rows = [];
    let current = element;
    while (current && current.nodeType === Node.ELEMENT_NODE) {
      const style = getComputedStyle(current);
      const rect = current.getBoundingClientRect();
      rows.push({
        tag:current.tagName,
        id:current.id || '',
        classes:current.className || '',
        hidden:Boolean(current.hidden),
        display:style.display,
        visibility:style.visibility,
        opacity:style.opacity,
        width:Math.round(rect.width),
        height:Math.round(rect.height)
      });
      current = current.parentElement;
    }
    return rows;
  });
  console.log(`FITNESS_ROUTINE_VISIBILITY=${JSON.stringify(ancestry)}`);
  await expect(summaryTab).toBeVisible();
  const tabLabels = await page.locator('.fitness-routine-subtab').allTextContents();
  expect(tabLabels.slice(0, 3)).toEqual(['Routine Log', 'Exercise Summary', 'Calisthenics']);

  await page.locator('[data-fitness-routine-view="other"]').click();
  const activityCard = page.locator('[data-activity-card="browser-hatha-yoga"]');
  await expect(activityCard).toBeVisible();
  const disclosure = activityCard.locator('[data-fitness-disclosure-key]');
  await expect(disclosure).toHaveText('Edit details');
  await expect(activityCard.locator('.fitness-collapsible-details')).toBeHidden();
  await disclosure.click();
  await expect(activityCard.locator('.fitness-collapsible-details')).toBeVisible();

  const activityTime = activityCard.locator('[data-activity-field="timeOfDay"]');
  await activityTime.selectOption('evening');
  await expect(page.locator('[data-activity-card="browser-hatha-yoga"] [data-activity-field="timeOfDay"]')).toHaveValue('evening');

  await page.locator('[data-fitness-routine-view="summary"]').click();
  await expect(page.locator('#fitnessExerciseSummary')).toContainText('Hatha Yoga');
  await expect(page.locator('#fitnessExerciseSummary')).toContainText('Benefits and practical role');

  await page.locator('[data-fitness-routine-view="log"]').click();
  await page.locator('[data-calendar-view="week"]').click();
  await expect(page.locator('#fitnessCalendarGrid.bl-routine-week-list .bl-routine-day-row')).toHaveCount(7);
  const widths = await page.locator('#fitnessCalendarGrid .bl-routine-day-row').evaluateAll((rows) => rows.map((row) => Math.round(row.getBoundingClientRect().width)));
  expect(new Set(widths).size).toBe(1);
  expect(widths[0]).toBeGreaterThan(500);
});
