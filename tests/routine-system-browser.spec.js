const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

async function mockGuestApis(page) {
  await page.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    const pathname = url.pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:false, providers:{ password:true, google:false } });

    if (pathname.endsWith('/routine_state.php') && url.searchParams.get('list') === 'public') {
      return fulfillJson(route, { ok:true, profiles:['Public Peter'] });
    }
    if (pathname.includes('/baseline-natural-skincare/') && pathname.endsWith('/routine_state.php') && url.searchParams.get('name') === 'Public Peter') {
      return fulfillJson(route, {
        ok:true,
        publicRoutine:{
          owner:'Public Peter',
          routine:[{
            id:'public-facial-steam', actionId:'facial-steam', title:'Facial Steam', timeOfDay:'morning',
            frequency:{ mode:'daily', days:[], timesPerWeek:1 }, benefit:'Supports controlled preparation before later skincare steps.', notes:''
          }]
        }
      });
    }
    if (pathname.includes('/baseline-fitness/') && pathname.endsWith('/routine_state.php') && url.searchParams.get('name') === 'Public Peter') {
      return fulfillJson(route, {
        ok:true,
        publicRoutine:{
          owner:'Public Peter',
          plans:[],
          activities:[{
            id:'public-hatha-yoga', activityId:'hatha-yoga', name:'Hatha Yoga', section:'other',
            timeOfDay:'evening', frequency:{ mode:'weekly', days:[], timesPerWeek:1 }, notes:'Mobility and controlled breathing'
          }]
        }
      });
    }
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

test('Skincare filters groups, numbers its log and opens public routines', async ({ page }) => {
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
      },{
        id:'browser-oil-cleanse',
        actionId:'anhydrous-oil-cleanse',
        title:'Anhydrous Oil Cleanse',
        timeOfDay:'evening',
        frequency:{ mode:'daily', days:[], timesPerWeek:1 },
        benefitMode:'comprehensive',
        notes:''
      }],
      logs:{}
    }));
    localStorage.setItem('__bl_skincare_routine_groups_v3__::guest', JSON.stringify({
      groups:[
        { id:'browser-group', title:'Preparation', collapsed:false, applyFrequency:false, applyTime:false },
        { id:'browser-cleanse-group', title:'Cleanse and Protect', collapsed:false, applyFrequency:false, applyTime:false }
      ],
      assignments:{ 'browser-facial-steam':'browser-group', 'browser-oil-cleanse':'browser-cleanse-group' }
    }));
  });

  await page.goto('/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=routine', { waitUntil:'domcontentloaded' });
  await expect(page.locator('#routine')).toHaveClass(/active/);

  const checkbox = page.locator('[data-log-complete="browser-facial-steam"]');
  await expect(checkbox).toBeVisible();
  await expect(page.locator('[data-log-complete="browser-facial-steam"] + span > .bl-v4-number')).toHaveText('1');
  await expect(page.locator('[data-log-complete="browser-oil-cleanse"] + span > .bl-v4-number')).toHaveText('2');
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
  await expect(page.locator('#routineSummary .routine-summary-group:visible')).toHaveCount(1);
  await expect(page.locator('#routineSummary .routine-summary-item:visible')).toHaveCount(1);
  await expect(page.locator('#routineSummary .routine-summary-item:visible strong').first()).toHaveText('Facial Steam');
  await expect(page.locator('#routineVisibility')).toBeHidden();

  await page.locator('[data-routine-view="public"]').click();
  await expect(page.locator('#publicRoutineVisibility')).toBeVisible();
  await expect(page.locator('#publicRoutineName')).toBeEnabled();
  await page.locator('#publicRoutineName').selectOption('Public Peter');
  await expect(page.locator('#publicRoutineResult')).toContainText('Public Peter’s Routine');
  await expect(page.locator('#publicRoutineResult')).toContainText('Facial Steam');

  await page.locator('[data-routine-view="log"]').click();
  await page.locator('[data-skincare-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#routineCalendarGrid.bl-routine-week-list .bl-routine-day-row');
  const marker = page.locator('#routineCalendarGrid .bl-v4-calendar-marker').first();
  await expect(marker).toBeVisible();
  await marker.hover();
  await expect(page.locator('.bl-v4-calendar-tooltip')).toBeVisible();
  await expect(page.locator('.bl-v4-calendar-tooltip')).toHaveText('Preparation');
});

test('Fitness filters groups, numbers its log and opens public routines', async ({ page }) => {
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
      },{
        id:'browser-easy-run',
        activityId:'outdoor-running',
        name:'Easy Run',
        section:'cardio',
        timeOfDay:'morning',
        frequency:{ mode:'weekly', days:[], timesPerWeek:1 },
        targetMetrics:{ durationMinutes:20 },
        notes:'Easy aerobic work'
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
  await summaryFilter.selectOption({ label:'1. Recovery and Mobility' });
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toHaveCount(1);
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toContainText('Hatha Yoga');
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toContainText('Everyday activities this supports');
  await expect(page.locator('#fitnessRoutineVisibility')).toBeHidden();

  await page.locator('[data-fitness-routine-view="public"]').click();
  await expect(page.locator('#fitnessPublicRoutineVisibility')).toBeVisible();
  await expect(page.locator('#fitnessPublicRoutineName')).toBeEnabled();
  await page.locator('#fitnessPublicRoutineName').selectOption('Public Peter');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Public Peter’s Routine');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Hatha Yoga');

  await page.locator('[data-fitness-routine-view="log"]').click();
  await expect(page.locator('[data-fitness-log-complete="browser-hatha-yoga"] + span > .bl-v4-number')).toHaveText('1');
  await expect(page.locator('[data-fitness-log-complete="browser-easy-run"] + span > .bl-v4-number')).toHaveText('2');
  await page.locator('[data-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#fitnessCalendarGrid.bl-routine-week-list .bl-routine-day-row');
});
