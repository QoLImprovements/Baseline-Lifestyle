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

async function expectFullWidthWeekRows(page, selector) {
  const rows = page.locator(selector);
  await expect(rows).toHaveCount(7);
  await expect(rows.first()).toBeVisible();
  const widths = await rows.evaluateAll((items) => items.map((item) => Math.round(item.getBoundingClientRect().width)));
  expect(new Set(widths).size).toBe(1);
  expect(widths[0]).toBeGreaterThan(500);
}

test('Skincare checkboxes, settings, group filters, numbers and calendar captions remain interactive', async ({ page }) => {
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
    localStorage.setItem('__bl_skincare_routine_groups_v3__::guest', JSON.stringify({
      groups:[{ id:'browser-group', title:'Preparation', collapsed:false, applyFrequency:false, applyTime:false }],
      assignments:{ 'browser-facial-steam':'browser-group' }
    }));
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

  const settingsButton = page.locator('[data-v4-settings-toggle="skin"]');
  await expect(settingsButton).toBeVisible();
  await settingsButton.click();
  await expect(page.locator('[data-v4-settings-panel="skin"]')).toBeVisible();
  await page.locator('[data-v4-start-day="skin"]').selectOption('Sunday');
  await expect(page.locator('[data-v4-start-day="skin"]')).toHaveValue('Sunday');

  await page.locator('[data-routine-view="plan"]').click();
  await expect(page.locator('.routine-plan-group[data-plan-group="browser-group"] .bl-v4-number')).toHaveText('1');
  const editStep = page.locator('[data-skincare-step-toggle="browser-facial-steam"]');
  await expect(editStep).toHaveText('Edit step');
  await editStep.click();
  await expect(editStep).toHaveText('Close step');

  const timeSelect = page.locator('[data-routine-item="browser-facial-steam"] [data-field="timeOfDay"]');
  await timeSelect.selectOption('evening');
  await expect(page.locator('[data-routine-item="browser-facial-steam"] [data-field="timeOfDay"]')).toHaveValue('evening');

  await page.locator('[data-routine-view="summary"]').click();
  const filter = page.locator('#skinRoutineSummaryFilter');
  await expect(filter).toBeVisible();
  await filter.selectOption('group:browser-group');
  await expect(page.locator('#routineSummary')).toContainText('Facial Steam');
  await expect(page.locator('#routineSummary .bl-v4-number')).toHaveText('1');

  await page.locator('[data-routine-view="log"]').click();
  await page.locator('[data-skincare-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#routineCalendarGrid.bl-routine-week-list .bl-routine-day-row');
  const marker = page.locator('#routineCalendarGrid .bl-v4-calendar-marker').first();
  await expect(marker).toBeVisible();
  await marker.hover();
  await expect(page.locator('.bl-v4-calendar-tooltip')).toBeVisible();
  await expect(page.locator('.bl-v4-calendar-tooltip')).toHaveText('Preparation');
});

test('Fitness uses Routine Plan as a third tab layer with shared groups and readable summaries', async ({ page }) => {
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
  await expect(summaryTab).toBeVisible();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine/);
  await expect(page.locator('.fitness-routine-subtabs [data-fitness-routine-view]')).toHaveCount(4);
  const tabLabels = await page.locator('.fitness-routine-subtabs [data-fitness-routine-view]').allTextContents();
  expect(tabLabels).toEqual(['Routine Log', 'Routine Summary', 'Routine Plan', 'Public Routines']);

  await page.locator('[data-fitness-routine-view="plan"]').click();
  const planLabels = await page.locator('.bl-v4-plan-tabs [data-fitness-plan-view]').allTextContents();
  expect(planLabels).toEqual(['Calisthenics', 'Cardio', 'Other Fitness Activities', 'Sports']);
  await page.locator('[data-fitness-plan-view="other"]').click();
  const groupCard = page.locator('[data-fitness-plan-panel="other"] .bl-v4-group-card');
  await expect(groupCard).toBeVisible();
  await groupCard.locator('[data-v4-group-name="other"]').fill('Recovery and Mobility');
  await groupCard.locator('[data-v4-create-group="other"]').click();
  await expect(groupCard.locator('.bl-v4-group-row')).toContainText('Recovery and Mobility');

  const activityCard = page.locator('[data-activity-card="browser-hatha-yoga"]');
  await expect(activityCard).toBeVisible();
  await expect(activityCard.locator('.bl-v4-number')).toHaveText('2');
  await groupCard.locator('[data-v4-entity-group="activity:browser-hatha-yoga"]').selectOption({ label:'1. Recovery and Mobility' });
  await expect(activityCard.locator('.bl-v4-number')).toHaveText('1');

  const disclosure = activityCard.locator('[data-fitness-disclosure-key]');
  await expect(disclosure).toHaveText('Edit details');
  await expect(activityCard.locator('.fitness-collapsible-details')).toBeHidden();
  await disclosure.click();
  await expect(activityCard.locator('.fitness-collapsible-details')).toBeVisible();

  const activityTime = activityCard.locator('[data-activity-field="timeOfDay"]');
  await activityTime.selectOption('evening');
  await expect(page.locator('[data-activity-card="browser-hatha-yoga"] [data-activity-field="timeOfDay"]')).toHaveValue('evening');

  await page.locator('[data-fitness-routine-view="summary"]').click();
  const summaryFilter = page.locator('#fitnessSummaryGroupFilter');
  await expect(summaryFilter).toBeVisible();
  await summaryFilter.selectOption('all');
  await expect(page.locator('#fitnessExerciseSummary')).toContainText('Hatha Yoga');
  await expect(page.locator('#fitnessExerciseSummary')).toContainText('Everyday activities this supports');
  await expect(page.locator('#fitnessExerciseSummary .bl-v4-daily-list:visible li').first()).toBeVisible();

  await page.locator('[data-fitness-routine-view="log"]').click();
  await page.locator('[data-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#fitnessCalendarGrid.bl-routine-week-list .bl-routine-day-row');
});
