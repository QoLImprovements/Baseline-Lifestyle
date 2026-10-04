const { test, expect } = require('@playwright/test');

const PATH = '/baseline-badminton-session/game-plan';

function json(route, payload, status = 200){
  return route.fulfill({ status, contentType:'application/json', body:JSON.stringify(payload) });
}

function initialState(){
  const peter = {
    id:'player-peter',
    name:'Peter Bates-Wilkinson',
    rating:25,
    playerRating:25,
    loginUsername:'PeterBW',
    loginUserId:'7',
    loginEmail:'Bateswilkinson@gmail.com',
    badmintonSessionsAdmin:true,
    matchCount:0,
    doublesDaySinglesOptOut:false,
    doublesDaySoloOptOut:false
  };
  const other = {
    id:'player-a',
    name:'A',
    rating:25,
    playerRating:25,
    loginUsername:'',
    loginUserId:'',
    loginEmail:'',
    badmintonSessionsAdmin:false,
    matchCount:0,
    doublesDaySinglesOptOut:false,
    doublesDaySoloOptOut:false
  };
  return {
    version:'4.2',
    sessionStartedAt:'2026-10-04T12:00:00.000Z',
    localUpdatedAt:1,
    players:[peter, other],
    pairRatings:{},
    oneVsTwoRatings:{},
    approvedAdminUsernames:[],
    matches:[],
    matchupMemory:{},
    pairSummary:{},
    hardshipRecords:{},
    ruleAdmin:{globalRules:{},matchupOverrides:{}},
    plan:{
      attendance:2,
      attendingPlayerIds:['player-peter','player-a'],
      courtCount:1,
      sitOutCounts:{},
      lastSitOutPlayerIds:[],
      currentSitOutPlayerIds:[],
      currentCircumstantialSitOutPlayerIds:[],
      currentOptionalSitOutPlayerIds:[],
      sessionPlayCounts:{},
      sessionPairCounts:{},
      sessionOpponentCounts:{},
      sessionSolo2v1Counts:{},
      generationIndex:1,
      format:'doubles',
      durationMinutes:60,
      current:[],
      generatedAt:'2026-10-04T12:00:00.000Z',
      usedCourtSignatures:[],
      currentSavedSignatures:[],
      currentSavedCourtKeys:[],
      currentSetReadyForNext:false,
      finished:[],
      activeHardships:{},
      specialFourPlayerIndex:0,
      twoPlayerFlipIndex:0,
      currentGenerationToken:'generation-test-1',
      blankCurrentScoreInputs:false
    }
  };
}

test('authoritative Badminton moderator auth enables score entry and Save Results even before sitewide auth refresh', async ({ page }) => {
  let state = initialState();
  let revision = 1;
  let submittedState = null;
  const badmintonAuth = {
    logged_in:true,
    is_developer:true,
    is_badminton_admin:true,
    user:{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com' }
  };

  // Reproduce the historical race: generic sitewide auth has not confirmed the
  // session yet, while the Badminton API already has authoritative session auth.
  await page.route('**/sitewide/api/me.php**', route => json(route, {
    ok:true,
    authed:false,
    providers:{password:true,google:false}
  }));
  await page.route('**/sitewide/api/auth_providers.php**', route => json(route, {
    ok:true,
    providers:{password:true,google:false}
  }));

  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php**', route => json(route, {
    ok:true,
    users:[
      { id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com', provider:'password' },
      { id:8, name:'PlayerA', email:'a@example.test', provider:'password' }
    ]
  }));

  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php**', async route => {
    if(route.request().method() === 'POST'){
      const body = route.request().postDataJSON();
      submittedState = body && body.state ? body.state : null;
      if(submittedState) state = submittedState;
      revision += 1;
      return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
    }
    return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
  });

  const errors = [];
  page.on('pageerror', error => errors.push(error.message));

  await page.goto(PATH, { waitUntil:'domcontentloaded' });

  const generate = page.locator('#generatePlanBtn');
  await expect(generate).toBeVisible();
  await expect(generate).toBeEnabled();
  await generate.click();

  const side1 = page.locator('[data-current-court-index="0"] [data-score-side="1"]');
  const side2 = page.locator('[data-current-court-index="0"] [data-score-side="2"]');
  await expect(side1).toBeVisible();
  await expect(side2).toBeVisible();
  await expect(side1).toBeEnabled();
  await expect(side2).toBeEnabled();

  const save = page.locator('[data-current-court-index="0"] [data-save-court="0"]');
  await expect(save).toBeVisible();
  await expect(save).toHaveText('Save Results');
  await expect(page.getByText('Score entry is limited to players on this court, the moderator, or an approved admin.')).toHaveCount(0);

  await side1.fill('21');
  await page.locator('[data-current-court-index="0"] [data-score-side="2"]').fill('19');
  await page.locator('[data-current-court-index="0"] [data-save-court="0"]').click();

  await expect.poll(() => submittedState && Array.isArray(submittedState.matches) ? submittedState.matches.length : 0).toBe(1);
  expect(submittedState.matches[0].score1).toBe(21);
  expect(submittedState.matches[0].score2).toBe(19);
  expect(errors).toEqual([]);
});

test('Players & Pairs retains the real account ID behind the canonical PeterBW login label', async ({ page }) => {
  let state = initialState();
  const badmintonAuth = {
    logged_in:true,
    is_developer:true,
    is_badminton_admin:true,
    user:{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com' }
  };

  await page.route('**/sitewide/api/me.php**', route => json(route, { ok:true, authed:false, providers:{password:true,google:false} }));
  await page.route('**/sitewide/api/auth_providers.php**', route => json(route, { ok:true, providers:{password:true,google:false} }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php**', route => json(route, {
    ok:true,
    users:[{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com', provider:'password' }]
  }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php**', async route => {
    if(route.request().method() === 'POST'){
      const body = route.request().postDataJSON();
      if(body && body.state) state = body.state;
    }
    return json(route, { ok:true, state, revision:1, updated_at:Date.now(), auth:badmintonAuth });
  });

  await page.goto('/baseline-badminton-session/players-pairs', { waitUntil:'domcontentloaded' });

  const peterRow = page.locator('[data-player-login="player-peter"]');
  await expect(peterRow).toBeVisible();
  await expect(peterRow).toHaveValue('PeterBW');
  const selected = peterRow.locator('option:checked');
  await expect(selected).toHaveText('PeterBW');
  await expect(selected).toHaveAttribute('data-login-user-id','7');
  await expect(selected).toHaveAttribute('data-login-email','Bateswilkinson@gmail.com');
});


test('visible scores survive an older in-flight server verification and still submit', async ({ page }) => {
  let state = initialState();
  let revision = 1;
  let submittedMatch = null;
  let firstPost = true;
  let startFirstPost;
  let releaseFirstPost;
  const firstPostStarted = new Promise(resolve => { startFirstPost = resolve; });
  const firstPostRelease = new Promise(resolve => { releaseFirstPost = resolve; });
  const badmintonAuth = {
    logged_in:true,
    is_developer:true,
    is_badminton_admin:true,
    user:{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com' }
  };

  await page.route('**/sitewide/api/me.php**', route => json(route, { ok:true, authed:false, providers:{password:true,google:false} }));
  await page.route('**/sitewide/api/auth_providers.php**', route => json(route, { ok:true, providers:{password:true,google:false} }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php**', route => json(route, {
    ok:true,
    users:[{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com', provider:'password' }]
  }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php**', async route => {
    if(route.request().method() === 'POST'){
      const body = route.request().postDataJSON();
      const posted = body && body.state ? body.state : state;
      if(firstPost){
        firstPost = false;
        startFirstPost();
        await firstPostRelease;
      }
      state = posted;
      const latest = Array.isArray(state.matches) && state.matches[0] ? state.matches[0] : null;
      if(latest) submittedMatch = latest;
      revision += 1;
      return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
    }
    return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
  });

  const dialogs = [];
  page.on('dialog', async dialog => {
    dialogs.push(dialog.message());
    await dialog.dismiss();
  });

  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.locator('#generatePlanBtn').click();
  await firstPostStarted;

  const side1 = page.locator('[data-current-court-index="0"] [data-score-side="1"]');
  const side2 = page.locator('[data-current-court-index="0"] [data-score-side="2"]');
  await expect(side1).toBeEnabled();
  await side1.fill('21');
  await side2.fill('4');

  const movement = page.locator('[data-current-court-index="0"] [data-hardship-option="true"][value="movement"]');
  await expect(movement).toBeVisible();
  await movement.check();

  releaseFirstPost();
  await page.waitForTimeout(300);

  await expect(side1).toHaveValue('21');
  await expect(side2).toHaveValue('4');
  await page.locator('[data-current-court-index="0"] [data-save-court="0"]').click();

  await expect.poll(() => submittedMatch ? submittedMatch.score1 : null).toBe(21);
  expect(submittedMatch.score2).toBe(4);
  expect(dialogs).not.toContain('Enter both scores before saving a result.');
});

test('legacy matchup hardship is remembered and promoted when the same matchup returns', async ({ page }) => {
  let state = initialState();
  let revision = 1;
  state.players[1].rating = 20;
  state.players[1].playerRating = 20;
  state.matchupMemory['id:player-a::id:player-peter::singles'] = {
    hardships:['movement'],
    hardshipCounts:{ movement:1, shots:0 },
    singlesMaxLossCount:0,
    expandStrongerCourt:false,
    expandStrongerCourtCount:0,
    shotReliefCount:0,
    singlesPreset:'m1l1m2l2',
    targetPreset:'m1l1m2l2',
    shotStage:0,
    adjustedSideIds:['id:player-peter'],
    adjustedSideNumber:1,
    mode:'singles',
    memoryScope:'exact-competitive-context'
  };
  const badmintonAuth = {
    logged_in:true,
    is_developer:true,
    is_badminton_admin:true,
    user:{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com' }
  };

  await page.route('**/sitewide/api/me.php**', route => json(route, { ok:true, authed:false, providers:{password:true,google:false} }));
  await page.route('**/sitewide/api/auth_providers.php**', route => json(route, { ok:true, providers:{password:true,google:false} }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php**', route => json(route, {
    ok:true,
    users:[{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com', provider:'password' }]
  }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php**', async route => {
    if(route.request().method() === 'POST'){
      const body = route.request().postDataJSON();
      if(body && body.state) state = body.state;
      revision += 1;
    }
    return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
  });

  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.locator('#generatePlanBtn').click();

  const court = page.locator('[data-current-court-index="0"]');
  await expect(court).toBeVisible();
  await expect(court.locator('.boundary-mask')).toHaveCount(1);
  await expect(court.locator('.court-hardship-help')).toContainText('Saved hardship for');

  const debug = await page.evaluate(() => window.__baselineBadmintonHardshipDebug && window.__baselineBadmintonHardshipDebug());
  expect(debug).toBeTruthy();
  expect(Object.keys(debug.activeHardships || {}).length).toBeGreaterThan(0);
});


test('saved hardship is immediately applied to the next generated game and remains in server state', async ({ page }) => {
  let state = initialState();
  let revision = 1;
  const badmintonAuth = {
    logged_in:true,
    is_developer:true,
    is_badminton_admin:true,
    user:{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com' }
  };

  await page.route('**/sitewide/api/me.php**', route => json(route, { ok:true, authed:false, providers:{password:true,google:false} }));
  await page.route('**/sitewide/api/auth_providers.php**', route => json(route, { ok:true, providers:{password:true,google:false} }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php**', route => json(route, {
    ok:true,
    users:[{ id:7, name:'Peter Bates-Wilkinson', email:'Bateswilkinson@gmail.com', provider:'password' }]
  }));
  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php**', async route => {
    if(route.request().method() === 'POST'){
      const body = route.request().postDataJSON();
      if(body && body.state) state = body.state;
      revision += 1;
    }
    return json(route, { ok:true, state, revision, updated_at:Date.now(), auth:badmintonAuth });
  });

  await page.goto(PATH, { waitUntil:'domcontentloaded' });
  await page.locator('#generatePlanBtn').click();

  const court = page.locator('[data-current-court-index="0"]');
  await court.locator('[data-score-side="1"]').fill('21');
  await court.locator('[data-score-side="2"]').fill('4');
  await court.locator('[data-hardship-option="true"][value="movement"]').check();
  await court.locator('[data-save-court="0"]').click();

  await expect(page.getByText('All current games were submitted and confirmed by the server. Finished games were saved and the next set was generated.')).toBeVisible();

  const nextCourt = page.locator('[data-current-court-index="0"]');
  await expect(nextCourt.locator('.boundary-mask')).toHaveCount(1);
  await expect(nextCourt.locator('.status-box').filter({ hasText:'Instruction' })).not.toContainText('No hardship alteration is active');

  expect(Object.keys(state.hardshipRecords || {}).length).toBeGreaterThan(0);
  expect(Object.keys(state.plan && state.plan.activeHardships || {}).length).toBeGreaterThan(0);
});
