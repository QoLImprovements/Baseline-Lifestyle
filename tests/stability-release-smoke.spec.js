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
  page.on('pageerror', (error) => pageErrors.push(`${new URL(page.url()).pathname}: ${error.stack || error.message}`));

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

test('canonical clean route families can be requested directly for browser refresh', async ({ request }) => {
  const routes = [
    '/baseline-food-approach/system',
    '/baseline-food-approach/recipes',
    '/baseline-food-approach/ingredient-library',
    '/baseline-food-approach/diet-log',
    '/baseline-food-approach/recipes/raw-40-c-almond-flax-pizza-base',
    '/baseline-food-approach/recipes/creamy-stovetop-polenta',
    '/baseline-food-approach/recipes/pure-stovetop-chickpea-baked-beans',
    '/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla',
    '/baseline-food-approach/recipes/creamy-mushroom-sauce',
    '/baseline-food-approach/recipes/mushroom-and-rosemary-oat-groats-risotto',
    '/baseline-food-approach/recipes/sattu-balanced-nut-butter-spread-base',
    '/baseline-food-approach/recipes/sweet-potato-and-bell-pepper-sauce',
    '/baseline-food-approach/recipes/aubergine-and-carrot-sauce',
    '/baseline-food-approach/recipes/tomato-and-red-pepper-sauce',
    '/baseline-food-approach/recipes/potato-and-carrot-vegan-cheese',
    '/baseline-food-approach/recipes/mung-bean-and-peanut-vegetable-hotpot',
    '/baseline-massage/system',
    '/baseline-massage/library',
    '/baseline-massage/planner',
    '/baseline-natural-skincare/system',
    '/baseline-natural-skincare/recipes',
    '/baseline-natural-skincare/ingredient-library',
    '/baseline-natural-skincare/skin-support-system',
    '/baseline-natural-skincare/my-routine',
    '/baseline-natural-skincare/my-routine/log',
    '/baseline-natural-skincare/my-routine/summary',
    '/baseline-natural-skincare/my-routine/plan',
    '/baseline-natural-skincare/my-routine/public',
    '/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend',
    '/baseline-natural-skincare/recipes/restorative-hydration-layer',
    '/baseline-natural-skincare/recipes/calming-shave-gel',
    '/baseline-natural-skincare/recipes/anhydrous-oil-cleanser',
    '/baseline-natural-skincare/recipes/nurturing-glow-butter',
    '/baseline-natural-skincare/recipes/protective-touch-balm',
    '/baseline-natural-skincare/recipes/testing-lip-balm',
    '/baseline-badminton-session/system',
    '/baseline-badminton-session/game-plan',
    '/baseline-badminton-session/ratings-standings',
    '/baseline-badminton-session/players-pairs',
    '/baseline-badminton-session/session-history',
    '/baseline-fitness/system',
    '/baseline-fitness/my-plan',
    '/baseline-fitness/my-body',
    '/baseline-fitness/my-body/profile',
    '/baseline-fitness/my-body/services',
    '/baseline-fitness/library',
    '/baseline-fitness/achievements',
    '/baseline-fitness/my-routine',
    '/baseline-fitness/my-routine/log',
    '/baseline-fitness/my-routine/summary',
    '/baseline-fitness/my-routine/public',
    '/baseline-fitness/my-routine/plan',
    '/baseline-fitness/my-routine/plan/calisthenics',
    '/baseline-fitness/my-routine/plan/cardio',
    '/baseline-fitness/my-routine/plan/other',
    '/baseline-fitness/my-routine/plan/sports',
    '/baseline-games-hub/games-hub',
    '/baseline-games-hub/games-hub/games-list',
    '/baseline-games-hub/games-hub/pairs',
    '/baseline-games-hub/games-hub/detect-the-word',
    '/baseline-games-hub/games-hub/make-the-number',
    '/baseline-games-hub/games-hub/track-the-coin',
    '/baseline-games-hub/games-hub/rule-shift',
    '/baseline-games-hub/games-hub/darts-focused',
    '/baseline-games-hub/games-hub/badminton-focused',
    '/baseline-games-hub/games-hub/baseline-realm'
  ];

  for (const pathname of routes) {
    const response = await request.get(pathname);
    expect(response.status(), pathname + ' must be directly refreshable').toBeLessThan(400);
  }
});

test('clean routes paint the exact tab before external application JavaScript runs', async ({ page }) => {
  await page.route('**/*', (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  const routes = [
    ['/baseline-food-approach/ingredient-library', 'ingredients'],
    ['/baseline-food-approach/diet-log', 'diet-log'],
    ['/baseline-natural-skincare/skin-support-system', 'support'],
    ['/baseline-natural-skincare/my-routine/summary', 'routine'],
    ['/baseline-massage/planner', 'planner'],
    ['/baseline-badminton-session/session-history', 'history'],
    ['/baseline-games-hub/games-hub/games-list', 'games']
  ];

  for (const [pathname, target] of routes) {
    const response = await page.goto(pathname, { waitUntil:'load' });
    expect(response, pathname + ' returned no response').not.toBeNull();
    expect(response.status(), pathname + ' did not load').toBeLessThan(400);
    await expect(page.locator('.tabs .tab[data-target="' + target + '"]').first()).toHaveAttribute('aria-selected','true');
    await expect(page.locator('.tabs .tab[aria-selected="true"]')).toHaveCount(1);
    await expect(page.locator('#' + target + '.section')).toBeVisible();
  }

  await page.goto('/baseline-fitness/my-body/profile', { waitUntil:'load' });
  await expect(page.locator('.tabs .tab[data-target="my-body"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-view="overall"]')).toHaveAttribute('aria-selected','false');
  await expect(page.locator('[data-body-view="profile"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-panel="overall"]')).toBeHidden();
  await expect(page.locator('[data-body-panel="profile"]')).toBeVisible();
});

test('Food Recipes clean route keeps only Recipes visible and preserves pill-tab geometry', async ({ page }) => {
  await page.route('**/*', (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  const response = await page.goto('/baseline-food-approach/recipes', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  const recipesTab = page.locator('.tabs .tab[data-target="recipes"]').first();
  await expect(recipesTab).toHaveAttribute('aria-selected','true');
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.getByRole('link',{name:'Mung Bean & Peanut Vegetable Hotpot'})).toBeVisible();
  await expect(page.locator('.subtitle')).toHaveText('Vegan & gluten-free food system focused on health and appearance.');

  const tabGeometry = await recipesTab.evaluate((node) => {
    const style = getComputedStyle(node);
    return {
      radius: parseFloat(style.borderTopLeftRadius),
      paddingLeft: parseFloat(style.paddingLeft),
      paddingRight: parseFloat(style.paddingRight)
    };
  });
  expect(tabGeometry.radius).toBeGreaterThanOrEqual(12);
  expect(tabGeometry.paddingLeft).toBeGreaterThanOrEqual(10);
  expect(tabGeometry.paddingRight).toBeGreaterThanOrEqual(10);
});

test('embedded Skincare recipe first paint is exact before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  const routes = [
    ['/baseline-natural-skincare/recipes/nurturing-glow-butter', 'r1', 'Nurturing Glow Butter'],
    ['/baseline-natural-skincare/recipes/calming-shave-gel', 'r8', 'Calming Shave Gel']
  ];

  for (const [pathname, recipeId, title] of routes) {
    const response = await page.goto(pathname, { waitUntil:'load' });
    expect(response, pathname + ' returned no response').not.toBeNull();
    expect(response.status(), pathname + ' did not load').toBeLessThan(400);
    await expect(page.locator('.tabs .tab[data-target="recipes"]').first()).toHaveAttribute('aria-selected','true');
    await expect(page.locator('#system')).toBeHidden();
    await expect(page.locator('#recipes')).toBeVisible();
    await expect(page.locator('#recipes-landing')).toBeHidden();
    await expect(page.locator('#' + recipeId)).toBeVisible();
    await expect(page.locator('#' + recipeId + ' h3').first()).toHaveText(title);
    await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
    await expect(page.locator('#recipes .side-recipe-nav:visible')).toHaveCount(0);
  }
});

test('embedded Skincare Lip Balm canonicalizes its legacy alias across direct load refresh Back and Forward', async ({ page }) => {
  const lipBalmPath = '/baseline-natural-skincare/recipes/testing-lip-balm';
  const canonicalLipBalmPath = '/baseline-natural-skincare/recipes/comfort-barrier-balm';

  await page.goto(lipBalmPath, { waitUntil:'domcontentloaded' });
  expect(new URL(page.url()).pathname).toBe(canonicalLipBalmPath);
  await expect(page.locator('html')).not.toHaveAttribute('data-initial-recipe-slug','testing-lip-balm');
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3').first()).toHaveText('Comfort Barrier Balm');
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes-landing')).toBeHidden();
  await expect(page.locator('#recipes .side-recipe-nav:visible')).toHaveCount(0);

  await page.reload({ waitUntil:'domcontentloaded' });
  expect(new URL(page.url()).pathname).toBe(canonicalLipBalmPath);
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3').first()).toHaveText('Comfort Barrier Balm');
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes-landing')).toBeHidden();

  await page.goto('/baseline-natural-skincare/recipes', { waitUntil:'domcontentloaded' });
  await page.evaluate((href) => { window.location.assign(href); }, lipBalmPath);
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/comfort-barrier-balm$/);
  await expect(page.locator('#r12')).toBeVisible();

  await page.goBack({ waitUntil:'domcontentloaded' });
  expect(new URL(page.url()).pathname).toBe('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes-landing')).toBeVisible();

  await page.goForward({ waitUntil:'domcontentloaded' });
  expect(new URL(page.url()).pathname).toBe(canonicalLipBalmPath);
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3').first()).toHaveText('Comfort Barrier Balm');
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes-landing')).toBeHidden();
});

test('shared top-level history restores the same Food page with Back and Forward', async ({ page }) => {
  await page.goto('/baseline-food-approach/system', { waitUntil:'domcontentloaded' });
  const recipes = page.locator('.tab[data-target="recipes"], .tab[data-tab="recipes"]').first();
  const ingredients = page.locator('.tab[data-target="ingredients"], .tab[data-tab="ingredients"]').first();

  await recipes.click();
  await expect(page).toHaveURL(/\/baseline-food-approach\/recipes$/);
  await expect(page.locator('#recipes')).toHaveClass(/active/);

  await ingredients.click();
  await expect(page).toHaveURL(/\/baseline-food-approach\/ingredient-library$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-food-approach\/recipes$/);
  await expect(page.locator('#recipes')).toHaveClass(/active/);

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-food-approach\/system$/);
  await expect(page.locator('#system')).toHaveClass(/active/);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-food-approach\/recipes$/);
  await expect(page.locator('#recipes')).toHaveClass(/active/);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-food-approach\/ingredient-library$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
});

const topLevelHistoryCases = [
  {
    name:'Skincare',
    start:'/baseline-natural-skincare/system',
    target:'/baseline-natural-skincare/skin-support-system',
    tab:'support',
    section:'support'
  },
  {
    name:'Massage',
    start:'/baseline-massage/system',
    target:'/baseline-massage/planner',
    tab:'planner',
    section:'planner'
  },
  {
    name:'Badminton Session',
    start:'/baseline-badminton-session/system',
    target:'/baseline-badminton-session/session-history',
    tab:'history',
    section:'history'
  },
  {
    name:'Games Hub',
    start:'/baseline-games-hub/games-hub',
    target:'/baseline-games-hub/games-hub/games-list',
    tab:'games',
    section:'games'
  }
];

for (const routeCase of topLevelHistoryCases) {
  test(`${routeCase.name} top-level tab survives refresh Back and Forward`, async ({ page }) => {
    await page.goto(routeCase.start, { waitUntil:'domcontentloaded' });
    await expect(page.locator('.tabs .tab[data-target="' + routeCase.tab + '"]').first()).toBeVisible();

    await page.locator('.tabs .tab[data-target="' + routeCase.tab + '"]').first().click();
    expect(new URL(page.url()).pathname).toBe(routeCase.target);
    await expect(page.locator('.tabs .tab[data-target="' + routeCase.tab + '"]').first()).toHaveAttribute('aria-selected','true');
    await expect(page.locator('#' + routeCase.section)).toBeVisible();

    await page.reload({ waitUntil:'domcontentloaded' });
    expect(new URL(page.url()).pathname).toBe(routeCase.target);
    await expect(page.locator('.tabs .tab[data-target="' + routeCase.tab + '"]').first()).toHaveAttribute('aria-selected','true');
    await expect(page.locator('#' + routeCase.section)).toBeVisible();

    await page.goBack({ waitUntil:'domcontentloaded' });
    expect(new URL(page.url()).pathname).toBe(routeCase.start);

    await page.goForward({ waitUntil:'domcontentloaded' });
    expect(new URL(page.url()).pathname).toBe(routeCase.target);
    await expect(page.locator('.tabs .tab[data-target="' + routeCase.tab + '"]').first()).toHaveAttribute('aria-selected','true');
    await expect(page.locator('#' + routeCase.section)).toBeVisible();
  });
}

test('Fitness top-level tabs remain canonical from nested My Routine and survive refresh Back and Forward', async ({ page }) => {
  await page.route('**/systems/baseline-fitness/api/**', (route) => fulfillJson(route, { ok:true, hasRoutine:false, profiles:[], achievements:[] }));
  await page.route('**/sitewide/api/**', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:false });
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    return fulfillJson(route, { ok:true });
  });

  await page.goto('/baseline-fitness/my-routine/log', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  await expect(page.locator('[data-fitness-routine-view="log"]')).toHaveAttribute('aria-selected','true');

  await page.locator('.tab[data-target="my-body"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body$/);
  await expect(page.locator('#my-body')).toHaveClass(/active/);
  expect(new URL(page.url()).pathname).toBe('/baseline-fitness/my-body');

  await page.reload({ waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_FITNESS_DEBUG));
  expect(new URL(page.url()).pathname).toBe('/baseline-fitness/my-body');
  await expect(page.locator('#my-body')).toHaveClass(/active/);

  await page.goBack({ waitUntil:'domcontentloaded' });
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/log$/);
  await expect(page.locator('.tab[data-target="my-plan"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-fitness-routine-view="log"]')).toHaveAttribute('aria-selected','true');

  await page.goForward({ waitUntil:'domcontentloaded' });
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body$/);
  await expect(page.locator('#my-body')).toHaveClass(/active/);

  await page.goBack({ waitUntil:'domcontentloaded' });
  await page.locator('.tab[data-target="library"]').click();
  expect(new URL(page.url()).pathname).toBe('/baseline-fitness/library');
  await page.reload({ waitUntil:'domcontentloaded' });
  expect(new URL(page.url()).pathname).toBe('/baseline-fitness/library');
  await expect(page.locator('#library')).toHaveClass(/active/);
});

test('Fitness My Body exact subview survives refresh Back and Forward', async ({ page }) => {
  await page.route('**/systems/baseline-fitness/api/**', (route) => fulfillJson(route, { ok:true, hasRoutine:false, profiles:[], achievements:[] }));
  await page.route('**/sitewide/api/**', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:false });
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    return fulfillJson(route, { ok:true });
  });

  await page.goto('/baseline-fitness/my-body', { waitUntil:'domcontentloaded' });
  await page.locator('[data-body-view="profile"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body\/profile$/);
  await expect(page.locator('[data-body-view="profile"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-view="overall"]')).toHaveAttribute('aria-selected','false');
  await expect(page.locator('[data-body-panel="profile"]')).toBeVisible();
  await expect(page.locator('[data-body-panel="overall"]')).toBeHidden();

  await page.reload({ waitUntil:'domcontentloaded' });
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body\/profile$/);
  await expect(page.locator('html')).toHaveAttribute('data-initial-fitness-body-view','profile');
  await expect(page.locator('[data-body-view="profile"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-panel="overall"]')).toBeHidden();

  await page.locator('[data-body-view="services"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body\/services$/);
  await expect(page.locator('[data-body-view="services"]')).toHaveAttribute('aria-selected','true');

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body\/profile$/);
  await expect(page.locator('[data-body-view="profile"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-panel="overall"]')).toBeHidden();

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-body\/services$/);
  await expect(page.locator('[data-body-view="services"]')).toHaveAttribute('aria-selected','true');

  await page.reload({ waitUntil:'domcontentloaded' });
  await expect(page.locator('[data-body-view="services"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-body-panel="services"]')).toBeVisible();
});

test('Fitness Routine Log refresh stays on Routine Log after navigating from Plan', async ({ page }) => {
  await page.route('**/systems/baseline-fitness/api/**', (route) => fulfillJson(route, { ok:true, hasRoutine:false, profiles:[], achievements:[] }));
  await page.route('**/sitewide/api/**', async (route) => {
    const pathname = new URL(route.request().url()).pathname;
    if (pathname.endsWith('/me.php')) return fulfillJson(route, { ok:true, authed:false });
    if (pathname.endsWith('/auth_providers.php')) return fulfillJson(route, { ok:true, providers:{ password:true, google:false } });
    return fulfillJson(route, { ok:true });
  });

  await page.goto('/baseline-fitness/my-routine/plan', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BASELINE_fitnessRoutineStructure));
  await page.locator('[data-fitness-routine-view="log"]').click();
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/log$/);
  await expect(page.locator('[data-fitness-routine-view="log"]')).toHaveAttribute('aria-selected','true');

  await page.reload({ waitUntil:'domcontentloaded' });
  await expect(page).toHaveURL(/\/baseline-fitness\/my-routine\/log$/);
  await expect(page.locator('[data-fitness-routine-view="log"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('[data-fitness-routine-view="plan"]')).toHaveAttribute('aria-selected','false');
});

test('legacy malformed nested Fitness history URLs recover to the canonical top-level page', async ({ page }) => {
  const response = await page.goto('/baseline-fitness/my-routine/log/my-body', { waitUntil:'domcontentloaded' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  expect(new URL(page.url()).pathname).toBe('/baseline-fitness/my-body');
  await expect(page.locator('#my-body')).toHaveClass(/active/);
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
  await expect(accountToggle.locator('.bl-btn-label')).toHaveText('Account');
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
        ? { ok: true, hasPlan: true, planId: 41, planJson: savedPlan, sessions: [], progress: { done:0, total:Number(savedPlan.sessions || 2), nextIndex:1 } }
        : { ok: true, hasPlan: false });
    }
    if (pathname.endsWith('/list_plans.php')) {
      return fulfillJson(route, savedPlan
        ? { ok:true, plans:[{ planId:41, name:'Calisthenics Plan 1', planJson:savedPlan, sessions:[], progress:{ done:0, total:Number(savedPlan.sessions || 2), nextIndex:1 } }] }
        : { ok:true, plans:[] });
    }
    if (pathname.endsWith('/fitness_state.php')) {
      return fulfillJson(route, { ok:true, revision:2, profile:null, activeWorkout:null, progressionHistory:{ outcomes:[], failures:[] }, selectedPlanId:savedPlan ? 41 : 0 });
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
  if (!(await calisthenicsCard.evaluate((element) => element.open))) {
    await calisthenicsCard.locator(':scope > summary').click();
  }
  await expect(calisthenicsCard).toHaveAttribute('open','');
  await expect(page.locator('#myPlanGeneratorWrap')).toBeVisible();
  await page.locator('.ex-row').first().locator('.ex-baseline').fill('12');
  await page.locator('#sessions').fill('2');
  await page.locator('#genBtn').click();
  await expect(page.locator('#planOut .session-card')).toHaveCount(2);
  await page.locator('#savePlanBtn').click();
  await expect.poll(() => savedPlan && savedPlan.sessions).toBe(2);
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanSavedWrap .calisthenics-saved-plan-summary')).toContainText('Progress: 0/2');

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-fitness-routine-view="plan"]')).toHaveAttribute('aria-selected', 'true');
  const reloadedCalisthenicsCard=page.locator('details[data-fitness-plan-card="calisthenics"]');
  await expect(reloadedCalisthenicsCard).toBeVisible();
  if (!(await reloadedCalisthenicsCard.evaluate((element) => element.open))) {
    await reloadedCalisthenicsCard.locator(':scope > summary').click();
  }
  await expect(reloadedCalisthenicsCard).toHaveAttribute('open','');
  await expect(page.locator('#myPlanSavedWrap')).toBeVisible();
  await expect(page.locator('#myPlanSavedWrap .calisthenics-saved-plan-summary')).toContainText('Progress: 0/2');
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
