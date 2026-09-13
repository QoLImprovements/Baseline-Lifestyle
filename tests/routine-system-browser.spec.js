const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

function todayIso() {
  return new Date().toISOString().slice(0,10);
}

async function mockRoutineApis(page, options = {}) {
  const authed = Boolean(options.authed);
  const accountName = options.accountName || 'Peter';
  let skincareRevision = 1;
  let skincareState = options.skincareState || null;
  let skincareGroups = options.skincareGroups || null;
  let fitnessRevision = 1;
  let fitnessState = options.fitnessState || null;
  let fitnessGroups = options.fitnessGroups || { groups:[], assignments:{} };

  await page.route('**/*', async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const pathname = url.pathname;
    const method = request.method().toUpperCase();
    const body = () => {
      try { return request.postDataJSON() || {}; } catch (_error) { return {}; }
    };

    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    if (pathname.endsWith('/me.php')) {
      return fulfillJson(route, authed
        ? { ok:true, authed:true, name:accountName, email:'peter@example.test', providers:{ password:true, google:false } }
        : { ok:true, authed:false, providers:{ password:true, google:false } });
    }

    if (pathname.endsWith('/routine_state.php') && url.searchParams.get('list') === 'public') {
      return fulfillJson(route, { ok:true, profiles:['Public Peter'] });
    }
    if (pathname.includes('/baseline-natural-skincare/') && pathname.endsWith('/public_routine_v2.php') && url.searchParams.get('name') === 'Public Peter') {
      return fulfillJson(route, {
        ok:true,
        publicRoutine:{
          owner:'Public Peter',
          routine:[{
            id:'public-facial-steam', actionId:'facial-steam', title:'Facial Steam', timeOfDay:'morning',
            frequency:{ mode:'daily', days:[], timesPerWeek:1 }, benefit:'Preparation before later skincare steps.'
          }],
          logs:{ [todayIso()]:{ 'public-facial-steam':{ completed:true, completedAt:new Date().toISOString() } } },
          groups:[{ id:'public-prep', title:'Preparation', applyFrequency:false, applyTime:false }],
          assignments:{ 'public-facial-steam':'public-prep' }
        }
      });
    }
    if (pathname.includes('/baseline-fitness/') && pathname.endsWith('/public_routine_v2.php') && url.searchParams.get('name') === 'Public Peter') {
      return fulfillJson(route, {
        ok:true,
        publicRoutine:{
          owner:'Public Peter',
          plans:[{
            planId:101,
            planJson:{
              name:'Core Calisthenics', scheduleMode:'weekly-count', frequency:'1x', frequencyMin:1, frequencyRangeMax:3, sessions:3,
              items:[{ exercise:'Elbow Plank', baseline:90, sets:1, repIncrease:0, progressionMode:'timed-hold' }]
            },
            sessions:[
              { sessionIndex:1, scheduledDate:'', status:'done', completedAt:new Date().toISOString() },
              { sessionIndex:2, scheduledDate:'', status:'planned', completedAt:null },
              { sessionIndex:3, scheduledDate:'', status:'planned', completedAt:null }
            ]
          }],
          activities:[{
            id:'public-hatha-yoga', activityId:'hatha-yoga', name:'Hatha Yoga', section:'other',
            timeOfDay:'evening', frequency:{ mode:'weekly', days:[], timesPerWeek:1 }, notes:'Mobility and controlled breathing'
          }],
          logs:{ [todayIso()]:{ 'public-hatha-yoga':{ completed:true, completedAt:new Date().toISOString() } } },
          groups:[{ id:'public-recovery', title:'Recovery and Mobility' },{ id:'public-training', title:'Training' }],
          assignments:{ 'activity:public-hatha-yoga':'public-recovery', 'plan:101':'public-training' }
        }
      });
    }

    if (pathname.includes('/baseline-natural-skincare/api/routine_state.php') && skincareState) {
      if (method === 'POST') {
        const input = body();
        skincareState = {
          visibility:input.visibility === 'public' ? 'public' : 'private',
          routine:Array.isArray(input.routine) ? input.routine : [],
          logs:input.logs && typeof input.logs === 'object' ? input.logs : {}
        };
        skincareRevision += 1;
      }
      return fulfillJson(route, {
        ok:true,
        hasRoutine:Boolean(skincareState.routine?.length || Object.keys(skincareState.logs || {}).length),
        visibility:skincareState.visibility || 'private',
        routine:skincareState.routine || [],
        logs:skincareState.logs || {},
        revision:skincareRevision,
        updatedAt:new Date().toISOString()
      });
    }
    if (pathname.includes('/baseline-natural-skincare/api/routine_groups.php') && skincareGroups) {
      if (method === 'POST') {
        const input = body();
        skincareGroups = {
          groups:Array.isArray(input.groups) ? input.groups : [],
          assignments:input.assignments && typeof input.assignments === 'object' ? input.assignments : {}
        };
        skincareRevision += 1;
      }
      return fulfillJson(route, {
        ok:true,
        hasGroups:true,
        groups:skincareGroups.groups || [],
        assignments:skincareGroups.assignments || {},
        revision:skincareRevision,
        updatedAt:new Date().toISOString()
      });
    }
    if (pathname.includes('/baseline-natural-skincare/api/recipe_settings.php') && authed) {
      return fulfillJson(route, { ok:true, hasData:false, settings:{}, revision:skincareRevision, updatedAt:null });
    }

    if (pathname.includes('/baseline-fitness/api/routine_state.php') && fitnessState) {
      if (method === 'POST') {
        const input = body();
        fitnessState = {
          activities:Array.isArray(input.activities) ? input.activities : [],
          logs:input.logs && typeof input.logs === 'object' ? input.logs : {}
        };
        fitnessRevision += 1;
      }
      return fulfillJson(route, {
        ok:true,
        hasRoutine:Boolean(fitnessState.activities?.length || Object.keys(fitnessState.logs || {}).length),
        visibility:'private',
        activities:fitnessState.activities || [],
        logs:fitnessState.logs || {},
        revision:fitnessRevision,
        updatedAt:new Date().toISOString()
      });
    }
    if (pathname.includes('/baseline-fitness/api/routine_groups.php') && fitnessState) {
      if (method === 'POST') {
        const input = body();
        fitnessGroups = {
          groups:Array.isArray(input.groups) ? input.groups : [],
          assignments:input.assignments && typeof input.assignments === 'object' ? input.assignments : {}
        };
        fitnessRevision += 1;
      }
      return fulfillJson(route, {
        ok:true,
        hasState:true,
        groups:fitnessGroups.groups || [],
        assignments:fitnessGroups.assignments || {},
        revision:fitnessRevision,
        updatedAt:new Date().toISOString()
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

test('Skincare uses stable saved groups, one control set and the shared public viewer', async ({ page }) => {
  await mockRoutineApis(page, {
    authed:true,
    skincareState:{
      visibility:'private',
      routine:[{
        id:'server-facial-steam', actionId:'facial-steam', title:'Facial Steam', timeOfDay:'anytime',
        frequency:{ mode:'daily', days:[], timesPerWeek:1 }, benefitMode:'comprehensive', notes:''
      },{
        id:'server-oil-cleanse', actionId:'anhydrous-oil-cleanse', title:'Anhydrous Oil Cleanse', timeOfDay:'evening',
        frequency:{ mode:'daily', days:[], timesPerWeek:1 }, benefitMode:'comprehensive', notes:''
      }],
      logs:{}
    },
    skincareGroups:{
      groups:[
        { id:'server-group', title:'Preparation', collapsed:false, applyFrequency:false, applyTime:false },
        { id:'server-cleanse-group', title:'Cleanse and Protect', collapsed:false, applyFrequency:false, applyTime:false }
      ],
      assignments:{ 'server-facial-steam':'server-group', 'server-oil-cleanse':'server-cleanse-group' }
    }
  });

  await page.goto('/systems/baseline-natural-skincare/baseline-natural-skincare.html#tab=routine', { waitUntil:'domcontentloaded' });
  await expect(page.locator('#routine')).toHaveClass(/active/);
  await expect(page.locator('html')).not.toHaveAttribute('data-skincare-routine-booting','true');

  const groupSections = page.locator('#routineLogItems > .routine-log-group');
  await expect(groupSections).toHaveCount(2);
  await expect(groupSections.nth(0)).toContainText('Preparation');
  await expect(groupSections.nth(1)).toContainText('Cleanse and Protect');
  await expect(page.locator('#routineLogItems .routine-log-item .bl-v4-number:visible')).toHaveCount(0);

  const groupCheckbox = groupSections.nth(0).locator('[data-routine-group-complete]');
  await expect(groupCheckbox).toBeVisible();
  await expect(groupSections.nth(0).locator('.routine-log-group-head')).not.toContainText(/Complete group/i);

  const checkbox = page.locator('[data-log-complete="server-facial-steam"]');
  await checkbox.check();
  await expect(page.locator('[data-log-complete="server-facial-steam"]')).toBeChecked();

  await page.locator('[data-routine-view="plan"]').click();
  const firstPlanGroup = page.locator('.routine-plan-group[data-plan-group="server-group"]');
  await expect(firstPlanGroup).toBeVisible();
  await expect(firstPlanGroup.locator('.routine-item .bl-v4-number:visible')).toHaveCount(0);
  const groupSettings = firstPlanGroup.locator('[data-plan-group-settings="server-group"]');
  await groupSettings.click();
  await expect(groupSettings).toHaveAttribute('aria-expanded','true');
  const timeSelect = firstPlanGroup.locator('[data-group-field="timeOfDay"][data-group-id="server-group"]');
  await expect(timeSelect).toBeVisible();
  await timeSelect.selectOption('evening');
  await expect(timeSelect).toHaveValue('evening');

  await page.locator('[data-routine-view="summary"]').click();
  await expect(page.locator('#skinRoutineSummaryFilter')).toHaveCount(1);
  const filter = page.locator('#skinRoutineSummaryFilter');
  await filter.selectOption('group:server-group');
  await expect(page.locator('#routineSummary .routine-summary-group:visible')).toHaveCount(1);
  await expect(page.locator('#routineSummary .routine-summary-item:visible strong').first()).toHaveText('Facial Steam');

  await page.locator('[data-routine-view="public"]').click();
  await expect(page.locator('#routineVisibility')).toHaveCount(1);
  await expect(page.locator('#publicRoutineName')).toHaveCount(1);
  await page.locator('#publicRoutineName').selectOption('Public Peter');
  await expect(page.locator('#publicRoutineResult .bl-public-routine-viewonly-nav [data-public-view]')).toHaveCount(3);
  await expect(page.locator('#publicRoutineResult .routine-calendar-card')).toBeVisible();
  await page.locator('#publicRoutineResult [data-public-view="summary"]').click();
  await expect(page.locator('#publicRoutineResult')).toContainText('Benefits and practical role');
  await expect(page.locator('#publicRoutineResult')).toContainText('Facial Steam');

  await page.locator('[data-routine-view="log"]').click();
  await page.reload({ waitUntil:'domcontentloaded' });
  await expect(page.locator('[data-routine-view="log"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-skincare-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#routineCalendarGrid.bl-routine-week-list .bl-routine-day-row');
});

test('Fitness uses one four-view structure, grouping, compact Log and faithful public views', async ({ page }) => {
  await mockRoutineApis(page, {
    authed:true,
    fitnessState:{
      activities:[{
        id:'server-hatha-yoga', activityId:'hatha-yoga', name:'Hatha Yoga', section:'other', timeOfDay:'anytime',
        frequency:{ mode:'weekly', days:[], timesPerWeek:1 }, targetMetrics:{ durationMinutes:30, intensity:'Moderate' }, notes:'Mobility and controlled breathing'
      },{
        id:'server-easy-run', activityId:'outdoor-running', name:'Easy Run', section:'cardio', timeOfDay:'morning',
        frequency:{ mode:'weekly', days:[], timesPerWeek:1 }, targetMetrics:{ durationMinutes:20 }, notes:'Easy aerobic work'
      }],
      logs:{}
    }
  });

  await page.goto('/baseline-fitness/my-routine', { waitUntil:'domcontentloaded' });
  await expect(page.locator('html')).not.toHaveAttribute('data-fitness-routine-booting','true');
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine/);

  const topTabs = page.locator('.fitness-routine-subtabs > [data-fitness-routine-view]');
  await expect(topTabs).toHaveCount(4);
  expect(await topTabs.allTextContents()).toEqual(['Routine Log','Routine Summary','Routine Plan','Public Routines']);

  const yogaLog = page.locator('.fitness-routine-log-item').filter({ hasText:'Hatha Yoga' });
  const yogaDetails = yogaLog.locator('.fitness-log-details-panel');
  const yogaToggle = yogaLog.locator('[data-fitness-log-details-toggle]');
  await expect(yogaToggle).toBeVisible();
  await expect(yogaDetails).toBeHidden();
  await yogaToggle.click();
  await expect(yogaDetails).toBeVisible();
  await yogaToggle.click();
  await expect(yogaDetails).toBeHidden();

  await page.locator('[data-fitness-routine-view="plan"]').click();
  const planCards = page.locator('details[data-fitness-plan-card]');
  await expect(planCards).toHaveCount(4);
  expect(await planCards.locator(':scope > summary > span').allTextContents()).toEqual(['Calisthenics','Cardio','Other Fitness Activity','Sports']);

  const otherCard=page.locator('details[data-fitness-plan-card="other"]');
  await otherCard.locator(':scope > summary').click();
  await expect(otherCard).toHaveAttribute('open','');
  const groupCard = page.locator('details[data-v4-group-card="global"]');
  await expect(groupCard).toBeVisible();
  if (!(await groupCard.evaluate((element) => element.open))) {
    await groupCard.locator(':scope > summary').click();
  }
  await expect(groupCard).toHaveAttribute('open','');
  await groupCard.locator('[data-v4-group-name="global"]').fill('Recovery and Mobility');
  await groupCard.locator('[data-v4-create-group="global"]').click();
  await expect(groupCard.locator('[data-v4-group-select]')).toContainText('1. Recovery and Mobility');

  const activityCard = page.locator('[data-activity-card="server-hatha-yoga"]');
  await expect(activityCard).toBeVisible();
  await expect(activityCard.locator('.bl-v4-number[data-v4-individual-number]:visible')).toHaveText('2');
  await groupCard.locator('[data-v4-group-activity]').first().selectOption('activity:server-hatha-yoga');
  await expect(activityCard.locator('.bl-v4-number[data-v4-individual-number]:visible')).toHaveCount(0);

  await page.locator('[data-fitness-routine-view="log"]').click();
  const savedGroup = page.locator('#fitnessRoutineLogItems > [data-fitness-routine-log-group]').filter({ hasText:'Recovery and Mobility' });
  await expect(savedGroup).toBeVisible();
  await expect(savedGroup.locator('[data-fitness-log-complete="server-hatha-yoga"]')).toBeVisible();
  await expect(savedGroup.locator('.bl-fitness-log-isolated-number:visible')).toHaveCount(0);
  const ungroupedRun = page.locator('#fitnessRoutineLogItems .bl-fitness-log-individual-item').filter({ hasText:'Easy Run' });
  await expect(ungroupedRun.locator('.bl-fitness-log-isolated-number')).toHaveText('2');

  await page.locator('[data-fitness-routine-view="summary"]').click();
  const summaryFilter = page.locator('#fitnessSummaryGroupFilter');
  await summaryFilter.selectOption({ label:'G1 · Recovery and Mobility' });
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toHaveCount(1);
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toContainText('Hatha Yoga');
  await expect(page.locator('#fitnessExerciseSummary .fitness-exercise-summary-item:visible')).toContainText('Relevant session measures');

  await page.locator('[data-fitness-routine-view="public"]').click();
  await expect(page.locator('#fitnessRoutineVisibility')).toHaveCount(1);
  await expect(page.locator('#fitnessPublicRoutineName')).toBeEnabled();
  await page.locator('#fitnessPublicRoutineName').selectOption('Public Peter');
  await page.locator('#fitnessViewPublicRoutine').click();
  await expect(page.locator('#fitnessPublicRoutineResult .bl-public-routine-viewonly-nav [data-public-view]')).toHaveCount(3);
  await expect(page.locator('#fitnessPublicRoutineResult .fitness-calendar-card')).toBeVisible();
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Recovery and Mobility');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Training');
  await page.locator('#fitnessPublicRoutineResult [data-public-view="summary"]').click();
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Benefits and practical role');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Mobility and controlled breathing');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Builds progressive bodyweight strength and muscular endurance');
  await page.locator('#fitnessPublicRoutineResult [data-public-view="plan"]').click();
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('Core Calisthenics');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('1. Elbow Plank');
  await expect(page.locator('#fitnessPublicRoutineResult')).toContainText('1/3 sessions completed');

  await page.locator('[data-fitness-routine-view="log"]').click();
  await page.reload({ waitUntil:'domcontentloaded' });
  await expect(page.locator('[data-fitness-routine-view="log"]')).toHaveAttribute('aria-selected','true');
  await page.locator('[data-calendar-view="week"]').click();
  await expectFullWidthWeekRows(page, '#fitnessCalendarGrid.week-view > .fitness-calendar-day');
});
