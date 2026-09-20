const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({
    status,
    contentType: 'application/json',
    body: JSON.stringify(payload)
  });
}

test('primary production routes load without runtime errors', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(`${new URL(page.url()).pathname}: ${error.message}`));

  const routes = [
    ['/home/1', 'home'],
    ['/baseline-food-approach/system', 'food'],
    ['/baseline-massage/system', 'massage'],
    ['/baseline-natural-skincare/system', 'skin'],
    ['/baseline-fitness/system', 'fitness'],
    ['/baseline-games-hub/games-hub', 'games'],
    ['/baseline-badminton-session/system', 'badminton']
  ];

  for (const [pathname, app] of routes) {
    const response = await page.goto(pathname, { waitUntil: 'domcontentloaded' });
    expect(response, `${pathname} returned no response`).not.toBeNull();
    expect(response.status(), `${pathname} did not return a successful status`).toBeLessThan(400);
    await expect(page.locator('body')).toHaveAttribute('data-app', app);
  }

  expect(pageErrors).toEqual([]);
});

test('shared login, favourites, Binaural presets and logout complete one account round trip', async ({ page }) => {
  const state = {
    authed: false,
    favourites: new Set(),
    presets: []
  };

  await page.route('**/*', async (route) => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;

    if (pathname.endsWith('/auth_providers.php')) {
      return fulfillJson(route, { ok: true, providers: { password: true, google: false } });
    }
    if (pathname.endsWith('/me.php')) {
      return fulfillJson(route, state.authed
        ? { ok: true, authed: true, name: 'Release Test', email: 'release@example.test', user: { name: 'Release Test', email: 'release@example.test' } }
        : { ok: true, authed: false, providers: { password: true, google: false } });
    }
    if (pathname.endsWith('/login.php')) {
      const payload = request.postDataJSON();
      expect(payload.identifier).toBe('release@example.test');
      expect(payload.password).toBe('test-password');
      state.authed = true;
      return fulfillJson(route, { ok: true, user: { name: 'Release Test', email: 'release@example.test' } });
    }
    if (pathname.endsWith('/logout.php')) {
      state.authed = false;
      return fulfillJson(route, { ok: true });
    }
    if (pathname.endsWith('/favourites.php')) {
      if (request.method() === 'GET') {
        return fulfillJson(route, { ok: true, ids: [...state.favourites] });
      }
      const payload = request.postDataJSON();
      const id = String(payload.recipeId || '');
      const favourited = !state.favourites.has(id);
      if (favourited) state.favourites.add(id);
      else state.favourites.delete(id);
      return fulfillJson(route, { ok: true, favourited, ids: [...state.favourites] });
    }
    if (pathname.endsWith('/binaural.php')) {
      if (request.method() === 'GET') {
        return fulfillJson(route, { ok: true, presets: state.presets });
      }
      const payload = request.postDataJSON();
      if (payload.action === 'save') {
        state.presets = state.presets.filter((preset) => preset.name !== payload.name);
        state.presets.unshift(payload);
      } else if (payload.action === 'delete') {
        state.presets = state.presets.filter((preset) => preset.name !== payload.name);
      }
      return fulfillJson(route, { ok: true });
    }
    if (pathname.includes('/api/')) return fulfillJson(route, { ok: true });
    return route.continue();
  });

  await page.goto('/baseline-food-approach/recipes', { waitUntil: 'domcontentloaded' });
  const accountToggle = page.locator('#bl-auth-toggle');
  await expect(accountToggle).toBeVisible();
  await accountToggle.click();
  await page.locator('#bl-auth-identifier-in').fill('release@example.test');
  await page.locator('#bl-auth-pass-in').fill('test-password');
  await page.locator('#bl-auth-login').click();
  await expect(accountToggle.locator('.bl-btn-label')).toHaveText('Account');

  await page.waitForFunction(() => typeof window.BASELINE_ensureContentUi === 'function');
  await page.evaluate(() => {
    window.BASELINE_ensureContentUi();
    window.BASELINE_openRecipe('r1', { silentHistory: true, noScroll: true });
  });
  await expect(page.locator('#r1')).toBeVisible();
  const favouriteButton = page.locator('#r1 .fav-btn');
  await expect(favouriteButton).toBeVisible();
  await favouriteButton.click();
  await expect(favouriteButton).toHaveAttribute('aria-pressed', 'true');
  expect(state.favourites.has('r1')).toBe(true);

  await page.locator('#bl-beats-toggle').click();
  await expect(page.locator('#bl-beats-flyout')).toBeVisible();
  await expect(page.locator('#bl-save-preset-name')).toBeVisible();
  await page.locator('#bl-beat-hz-num').fill('9.5');
  await page.locator('#bl-beat-hz-num').blur();
  await page.locator('#bl-save-preset-name').fill('Release Focus');
  await page.locator('#bl-save-preset').click();
  await expect(page.locator('#bl-beats-status')).toHaveText('Saved: Release Focus');
  await expect.poll(() => state.presets.length).toBe(1);

  await accountToggle.click();
  await expect(page.locator('#bl-auth-logout')).toBeVisible();
  await page.locator('#bl-auth-logout').click();
  await expect(accountToggle.locator('.bl-btn-label')).toHaveText('Login');
});

test('Charity Shop digital-code gate opens only after an approved API response', async ({ page }) => {
  await page.route('**/sitewide/api/protected_access.php', async (route) => {
    const payload = route.request().postDataJSON();
    expect(payload.action).toBe('unlock');
    expect(payload.code).toBe('000000');
    return fulfillJson(route, { ok: true, redirect: '/baseline-charity-shop/guidance' });
  });
  await page.route('**/baseline-charity-shop/guidance', (route) => route.fulfill({
    status: 200,
    contentType: 'text/html',
    body: '<!doctype html><html><body data-app="charity-shop"><h1>Charity Shop Guidance</h1></body></html>'
  }));

  await page.goto('/home/1', { waitUntil: 'domcontentloaded' });
  await page.locator('#blProtectedKey').click();
  await expect(page.locator('#blProtectedAccessOverlay')).toBeVisible();
  await page.locator('#blProtectedCode').fill('000000');
  await page.locator('#blProtectedSubmit').click();
  await expect(page).toHaveURL(/\/baseline-charity-shop\/guidance$/);
  await expect(page.getByRole('heading', { name: 'Charity Shop Guidance' })).toBeVisible();
});

test('Fitness saves a generated plan and reloads it through the account API', async ({ page }) => {
  let savedPlan = null;

  await page.route('**/*', async (route) => {
    const request = route.request();
    const pathname = new URL(request.url()).pathname;

    if (pathname.endsWith('/auth_providers.php')) {
      return fulfillJson(route, { ok: true, providers: { password: true, google: false } });
    }
    if (pathname.endsWith('/me.php')) {
      return fulfillJson(route, { ok: true, authed: true, name: 'Release Test', email: 'release@example.test', user: { name: 'Release Test', email: 'release@example.test' } });
    }
    if (pathname.endsWith('/get_plan.php')) {
      return fulfillJson(route, savedPlan
        ? { ok: true, hasPlan: true, planId: 41, planJson: savedPlan, sessions: [], progress: null }
        : { ok: true, hasPlan: false });
    }
    if (pathname.endsWith('/save_plan.php')) {
      const payload = request.postDataJSON();
      savedPlan = payload.planJson;
      return fulfillJson(route, { ok: true, planId: 41 });
    }
    if (pathname.endsWith('/list_profiles.php')) return fulfillJson(route, { ok: true, profiles: [] });
    if (pathname.endsWith('/achievements.php')) return fulfillJson(route, { ok: true, achievements: [] });
    if (pathname.endsWith('/voice_settings.php')) return fulfillJson(route, { ok: true, settings: {} });
    if (pathname.endsWith('/routine_state.php')) {
      return fulfillJson(route, { ok: true, hasRoutine: false, visibility: 'private', activities: [], logs: {}, updatedAt: null });
    }
    if (pathname.includes('/api/')) return fulfillJson(route, { ok: true });
    return route.continue();
  });

  await page.goto('/baseline-fitness/my-plan', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  const mainRoutineTab = page.locator('.tab[data-target="my-plan"]');
  await expect(mainRoutineTab).toBeVisible();
  await mainRoutineTab.click();
  const routinePlanTab = page.locator('[data-fitness-routine-view="plan"]');
  await expect(routinePlanTab).toBeVisible();
  await routinePlanTab.click();
  const calisthenicsCard = page.locator('details[data-fitness-plan-card="calisthenics"]');
  await expect(calisthenicsCard).toBeVisible();
  await calisthenicsCard.locator(':scope > summary').click();
  await expect(calisthenicsCard).toHaveAttribute('open','');
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
  await page.locator('.ex-row').first().locator('.ex-baseline').fill('12');
  await page.locator('#sessions').fill('2');
  await page.locator('#genBtn').click();
  await expect(page.locator('#planOut .session-card')).toHaveCount(2);
  await page.locator('#savePlanBtn').click();
  await expect.poll(() => savedPlan && savedPlan.sessions).toBe(2);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Saved plan');

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-fitness-routine-view="plan"]')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('details[data-fitness-plan-card="calisthenics"]')).toBeVisible();
  await page.locator('details[data-fitness-plan-card="calisthenics"] > summary').click();
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanOut')).toContainText('Progress: 0/2');
});

test('Games Hub restores account progress and keeps a game playable', async ({ page }) => {
  const profiles = {
    pairs: { app: 'pairs', level: 4, xp: 0, bank: 25, boardsCleared: 7, gamesPlayed: 7, currentStreak: 0, bestStreak: 2, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    make24: { app: 'make24', level: 1, xp: 0, bank: 0, puzzlesSolved: 0, gamesPlayed: 0, currentStreak: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    detectword: { app: 'detectword', level: 1, xp: 0, bank: 0, wordsSolved: 0, gamesPlayed: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    trackcoin: { app: 'trackcoin', level: 1, xp: 0, coins: 0, totalCorrect: 0, totalRounds: 0, currentStreak: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    ruleshift: { app: 'ruleshift', level: 1, xp: 0, bank: 0, correctAnswers: 0, gamesPlayed: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    ninja: { app: 'ninja', level: 3, xp: 10, coins: 250, spirit: 12, stage: 4, highestStage: 4, enemyHp: 50, totalKills: 2, currentStreak: 0, bestStreak: 1, cleanWinStreak: 0, bossesDefeated: 0, totalCoinsEarned: 250, upgrades: {}, spiritShop: {} }
  };

  await page.route('**/systems/baseline-games-hub/api/games_data.php**', async (route) => {
    if (route.request().method() === 'GET') return fulfillJson(route, { ok: true, authed: true, profiles });
    const payload = route.request().postDataJSON();
    if (payload.action === 'migrate_missing') {
      for (const [app, profile] of Object.entries(payload.profiles || {})) {
        if (!profiles[app]) profiles[app] = profile;
      }
    }
    if (payload.action === 'save' && payload.app && payload.profile) profiles[payload.app] = payload.profile;
    return fulfillJson(route, { ok: true, authed: true, profiles });
  });
  await page.route('**/systems/baseline-games-hub/api/games_profile.php**', (route) => {
    const app = new URL(route.request().url()).searchParams.get('app') || 'pairs';
    return fulfillJson(route, { ok: true, app, profile: profiles[app] || { app, level: 1 } });
  });

  await page.goto('/baseline-games-hub/games-hub', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_GAMES_HUB_CORE_READY === true);
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await expect(page.locator('[data-select-game="pairs"]:visible').first()).toContainText('Level 4 · 7 cleared');
  await expect(page.locator('[data-select-game="ninja"]:visible').first()).toContainText('Level 3 · Stage 4');
  await page.locator('[data-select-game="pairs"]:visible').first().click();
  await expect(page.locator('#pairsPanel')).toHaveClass(/is-active/);
  await page.locator('#newPairsBoardBtn').click();
  await expect(page.locator('#pairsBoard [data-card]').first()).toBeVisible();
});

test('Badminton loads shared server state into the normal session interface', async ({ page }) => {
  const sharedState = {
    version: '4.2',
    localUpdatedAt: Date.now(),
    players: [{ id: 'release-player', name: 'Release Test Player', rating: 25, playerRating: 25, matchCount: 0 }],
    pairRatings: {},
    oneVsTwoRatings: {},
    approvedAdminUsernames: [],
    matches: [],
    matchupMemory: {},
    pairSummary: {},
    ruleAdmin: { globalRules: {}, matchupOverrides: {} },
    plan: { attendance: 0, attendingPlayerIds: [], courtCount: 4, current: [], finished: [] }
  };

  await page.route('**/systems/baseline-badminton-session/api/badminton_session.php', (route) => {
    if (route.request().method() === 'POST') return fulfillJson(route, { ok: true, state: sharedState, auth: { is_developer: true, is_badminton_admin: true } });
    return fulfillJson(route, { ok: true, state: sharedState, updated_at: Date.now(), auth: { is_developer: true, is_badminton_admin: true } });
  });
  await page.route('**/systems/baseline-badminton-session/api/badminton_logins.php', (route) => fulfillJson(route, { ok: true, users: [] }));

  await page.goto('/baseline-badminton-session/system', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Players & Pairs', exact: true }).click();
  await expect(page.locator('#playersTableWrap')).toContainText('Release Test Player');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Players & Pairs', exact: true }).click();
  await expect(page.locator('#playersTableWrap')).toContainText('Release Test Player');
});
