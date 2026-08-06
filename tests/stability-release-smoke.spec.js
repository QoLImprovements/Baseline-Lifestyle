const { test, expect } = require('@playwright/test');

function fulfillJson(route, payload, status = 200) {
  return route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(payload) });
}

async function mockSignedOutApi(page) {
  await page.route('**/*', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/auth_providers.php')) {
      return fulfillJson(route, { ok: true, providers: { password: true, google: false } });
    }
    if (pathname.endsWith('/me.php')) {
      return fulfillJson(route, { ok: true, authed: false, providers: { password: true, google: false } });
    }
    if (pathname.includes('/api/')) {
      return fulfillJson(route, { ok: false, error: 'not_logged_in' }, 401);
    }
    return route.continue();
  });
}

test('primary system routes and clean recipe routes stay navigable after refresh', async ({ page }) => {
  await mockSignedOutApi(page);
  const routes = [
    '/home/1',
    '/baseline-food-approach/system',
    '/baseline-food-approach/recipes/creamy-stovetop-polenta',
    '/baseline-massage/system',
    '/baseline-natural-skincare/system',
    '/baseline-fitness/system',
    '/baseline-fitness/my-routine',
    '/baseline-badminton-session/system',
    '/baseline-games-hub/games-hub'
  ];

  for (const route of routes) {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator('body')).toBeVisible();
  }
});

test('sitewide Account opens and closes without altering the current system route', async ({ page }) => {
  await mockSignedOutApi(page);
  await page.goto('/baseline-food-approach/system', { waitUntil: 'domcontentloaded' });
  const initialUrl = page.url();
  await page.locator('#bl-auth-toggle').click();
  await expect(page.locator('#bl-auth-flyout')).toBeVisible();
  await page.locator('#bl-auth-close').click();
  await expect(page.locator('#bl-auth-flyout')).toBeHidden();
  expect(page.url()).toBe(initialUrl);
});

test('Binaural panel opens and retains its selected preset', async ({ page }) => {
  await mockSignedOutApi(page);
  await page.goto('/baseline-fitness/system', { waitUntil: 'domcontentloaded' });
  await page.locator('#bl-beats-toggle').click();
  await expect(page.locator('#bl-beats-flyout')).toBeVisible();
  await page.locator('#bl-preset').selectOption({ index: 1 });
  const selected = await page.locator('#bl-preset').inputValue();
  await page.locator('#bl-beats-toggle').click();
  await page.locator('#bl-beats-toggle').click();
  await expect(page.locator('#bl-preset')).toHaveValue(selected);
});

test('protected access rejects an unapproved code', async ({ page }) => {
  await mockSignedOutApi(page);
  await page.goto('/home/1', { waitUntil: 'domcontentloaded' });
  await page.locator('#blProtectedKey').click();
  await expect(page.locator('#blProtectedAccessOverlay')).toBeVisible();
  await page.locator('#blProtectedCode').fill('123456');
  await page.locator('#blProtectedSubmit').click();
  await expect(page.locator('#blProtectedStatus')).toContainText(/incorrect|could not|try again/i);
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
  const calisthenicsTab = page.locator('[data-fitness-routine-view="calisthenics"]');
  await expect(calisthenicsTab).toBeVisible();
  await calisthenicsTab.click();
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
      return fulfillJson(route, { ok: true, profiles });
    }
    if (payload.action === 'save_profile' && payload.app) {
      profiles[payload.app] = payload.profile;
      return fulfillJson(route, { ok: true, profile: payload.profile });
    }
    return fulfillJson(route, { ok: true, profiles });
  });
  await page.route('**/*', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok: true, providers: { password: true, google: false } });
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok: true, authed: true, name: 'Release Test', email: 'release@example.test', user: { name: 'Release Test', email: 'release@example.test' } });
    if (pathname.includes('/api/')) return fulfillJson(route, { ok: true });
    return route.continue();
  });

  await page.goto('/baseline-games-hub/games-hub', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_GAMES_HUB));
  await page.locator('[data-game="pairs"]').click();
  await expect(page.locator('#pairs-app')).toBeVisible();
  await expect(page.locator('#pairs-level')).toContainText('4');
});
