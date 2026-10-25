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
    ['/baseline-recreation/system', 'games'],
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
    '/baseline-recreation/system',
    '/baseline-recreation/games',
    '/baseline-recreation/games/pairs',
    '/baseline-recreation/games/detect-the-word',
    '/baseline-recreation/games/make-the-number',
    '/baseline-recreation/games/track-the-coin',
    '/baseline-recreation/games/rule-shift',
    '/baseline-recreation/games/darts-focused',
    '/baseline-recreation/games/badminton-focused',
    '/baseline-recreation/games/baseline-realm'
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
    ['/baseline-recreation/games', 'games']
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

test('Food recipe ingredient waits for its full record before revealing Ingredient Library', async ({ page }) => {
  let releaseIngredient;
  const ingredientGate = new Promise(resolve => { releaseIngredient = resolve; });
  let ingredientRequestSeen = false;

  await page.route('**/baseline-food-approach/ingredient-library/potato', async route => {
    ingredientRequestSeen = true;
    await ingredientGate;
    await route.continue();
  });

  await page.goto('/baseline-food-approach/recipes/mung-bean-and-peanut-vegetable-hotpot', { waitUntil:'domcontentloaded' });
  const potatoLink = page.locator('#r12 a.ing-link[data-ingredient="ing-potato"]').first();
  await expect(potatoLink).toBeVisible();

  await potatoLink.click();
  await expect.poll(() => ingredientRequestSeen).toBe(true);

  // While the full record is still loading, remain on the recipe. The
  // lightweight Ingredient Library index card must never be shown to the user.
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('#ingredients')).toBeHidden();

  releaseIngredient();

  await expect(page.locator('#ingredients')).toBeVisible();
  await expect(page.locator('#recipes')).toBeHidden();
  await expect(page.locator('#ing-potato')).toBeVisible();
  await expect(page.locator('#ing-potato')).not.toHaveClass(/ingredient-index-card/);
  await expect(page.locator('#ing-potato')).toContainText('Benefits:');
  await expect(page).toHaveURL(/\/baseline-food-approach\/ingredient-library\?filter=r12#ing-potato$/);
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
    name:'Recreation',
    start:'/baseline-recreation/system',
    target:'/baseline-recreation/games',
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

test('Recreation restores account progress and keeps a game playable', async ({ page }) => {
  const recreationPageErrors=[];
  page.on('pageerror',(error)=>recreationPageErrors.push(String(error&&error.stack||error&&error.message||error)));
  const profiles = {
    pairs: { app: 'pairs', level: 4, xp: 0, bank: 25, boardsCleared: 7, gamesPlayed: 7, currentStreak: 0, bestStreak: 2, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    make24: { app: 'make24', level: 1, xp: 0, bank: 0, puzzlesSolved: 0, gamesPlayed: 0, currentStreak: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    detectword: { app: 'detectword', level: 1, xp: 0, bank: 0, wordsSolved: 0, gamesPlayed: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    trackcoin: {
      app: 'trackcoin', level: 1, xp: 0, coins: 0, totalCorrect: 0, totalRounds: 0,
      currentStreak: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {},
      selectedTier:'tier1',
      activeRound:{
        tierId:'tier1', phase:'pick', coinCupId:'cup0', pickedCupId:'',
        sequence:[{duration:500,pattern:'cross',order:['cup0','cup1','cup2']}],
        cups:[
          {id:'cup0',left:18,top:68,tilt:0},
          {id:'cup1',left:50,top:68,tilt:0},
          {id:'cup2',left:82,top:68,tilt:0}
        ],
        baseTop:68,totalDuration:500,speedPercent:100,speedMultiplier:1,
        movementSpeedMultiplier:1,targetDuration:500,resolved:false,lastResult:'',message:''
      }
    },
    ruleshift: { app: 'ruleshift', level: 1, xp: 0, bank: 0, correctAnswers: 0, gamesPlayed: 0, bestStreak: 0, cleanWinStreak: 0, skillPoints: 0, skills: {} },
    ninja: { app: 'ninja', level: 3, xp: 10, coins: 250, spirit: 12, stage: 4, highestStage: 4, enemyHp: 50, totalKills: 2, currentStreak: 0, bestStreak: 1, cleanWinStreak: 0, bossesDefeated: 0, totalCoinsEarned: 250, upgrades: {}, spiritShop: {} }
  };

  await page.route('**/systems/baseline-recreation/api/games_data.php**', async (route) => {
    if (route.request().method() === 'GET') return fulfillJson(route, { ok: true, authed: true, profiles });
    const payload = route.request().postDataJSON();
    if (payload.action === 'save' && payload.app && payload.profile) profiles[payload.app] = payload.profile;
    return fulfillJson(route, { ok: true, authed: true, profiles });
  });
  await page.route('**/systems/baseline-recreation/api/games_profile.php**', (route) => {
    const app = new URL(route.request().url()).searchParams.get('app') || 'pairs';
    return fulfillJson(route, { ok: true, app, profile: profiles[app] || { app, level: 1 } });
  });

  await page.goto('/baseline-recreation/system', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await expect(page.locator('[data-select-game="pairs"]:visible').first()).toContainText('Player Rank 4 · 7 cleared');
  await expect(page.locator('[data-select-game="ninja"]:visible').first()).toContainText('Player Rank 3 · Stage 4');
  await page.locator('[data-select-game="pairs"]:visible').first().click();
  await expect(page.locator('#pairsPanel')).toHaveClass(/is-active/);
  await page.locator('#newPairsBoardBtn').click();
  await expect(page.locator('#pairsBoard [data-card]').first()).toBeVisible();

  // Regression: a restored Track the Coin round in the pick phase must accept
  // a real browser pointer click on the cup itself and resolve immediately.
  await page.goto('/baseline-recreation/games/track-the-coin', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await expect(page.locator('#trackcoinPanel')).toHaveClass(/is-active/);
  await expect(page.locator('#trackCoinScene')).toHaveClass(/is-phase-pick/);
  await expect(page.locator('.trackcoin-pick-prompt')).toHaveText('Choose the cup');
  const trackStatus=page.locator('#trackCoinSummary');
  await expect(trackStatus).toBeVisible();
  await expect(trackStatus.locator('.round-status-heading')).toHaveText('Round Status');
  expect(await page.locator('#trackCoinScene #trackCoinSummary').count()).toBe(0);
  expect(await trackStatus.locator('.round-status-heading').evaluate((node)=>getComputedStyle(node).textAlign)).toBe('center');
  const selectableCup=page.locator('#trackCoinScene .trackcoin-cup.is-selectable').first();
  await expect(selectableCup).toBeVisible();
  await page.evaluate(()=>{
    window.__trackCoinPointerTrace=[];
    const record=(event)=>{
      const target=event.target instanceof Element ? event.target.closest('.trackcoin-cup[data-trackcoin-pick]') : null;
      if(target) window.__trackCoinPointerTrace.push({type:event.type,cup:target.getAttribute('data-trackcoin-pick')||'',phase:document.querySelector('#trackCoinScene')?.className||''});
    };
    document.addEventListener('pointerdown',record,true);
    document.addEventListener('click',record,true);
  });
  await selectableCup.click();
  await page.waitForTimeout(200);
  const trackCoinDiagnostic=await page.evaluate(()=>({
    sceneClass:document.querySelector('#trackCoinScene')?.className||'',
    trace:Array.isArray(window.__trackCoinPointerTrace)?window.__trackCoinPointerTrace:[]
  }));
  if(!trackCoinDiagnostic.sceneClass.includes('is-resolved')){
    throw new Error('Track Coin click did not resolve. Diagnostic='+JSON.stringify(trackCoinDiagnostic)+' pageErrors='+JSON.stringify(recreationPageErrors));
  }
  await expect(page.locator('#trackCoinScene')).toHaveClass(/is-resolved/);
  await expect(page.locator('#trackCoinScene')).toHaveClass(/is-phase-review/);
  await expect(trackStatus.locator('.round-status-previous-heading')).toHaveText('Previous Round');
  await expect(trackStatus.locator('.round-status-previous-grid')).toContainText('Exp');
  await expect(trackStatus.locator('.round-status-previous-grid')).toContainText(/\d+ XP/);
  expect(recreationPageErrors).toEqual([]);

  // Fullscreen geometry: the cup arena must remain the dominant LEFT surface
  // while the live Round Status occupies the shared RIGHT information rail.
  await page.setViewportSize({ width:1280, height:760 });
  const trackFullscreen=page.locator('#trackCoinGamePanel [data-game-fullscreen="trackcoin"]');
  await expect(trackFullscreen).toBeVisible();
  await trackFullscreen.click();
  await page.waitForFunction(()=>document.fullscreenElement?.id==='trackCoinGamePanel');

  // Fullscreen must expose the same information architecture as windowed mode.
  const trackFsTabs=page.locator('#trackCoinGamePanel > .game-fullscreen-window-tabs .game-fullscreen-window-tabbar');
  await expect(trackFsTabs).toBeVisible();
  await expect(trackFsTabs.getByRole('tab')).toHaveCount(4);
  await expect(trackFsTabs.getByRole('tab').allTextContents()).resolves.toEqual(['Game','Skills','Tiers','Progress']);
  await expect(trackFsTabs.getByRole('tab',{name:'Game',exact:true})).toHaveClass(/is-active/);
  await trackFsTabs.getByRole('tab',{name:'Skills',exact:true}).click();
  await expect(page.locator('#trackCoinGamePanel > .game-fullscreen-window-tabs .game-fullscreen-window-pane')).toContainText('Track the Coin Skill Tree');
  await trackFsTabs.getByRole('tab',{name:'Tiers',exact:true}).click();
  await expect(page.locator('#trackCoinGamePanel > .game-fullscreen-window-tabs .game-fullscreen-window-pane')).toContainText('Tiers');
  await trackFsTabs.getByRole('tab',{name:'Progress',exact:true}).click();
  await expect(page.locator('#trackCoinGamePanel > .game-fullscreen-window-tabs .game-fullscreen-window-pane')).toContainText('Progress');
  await trackFsTabs.getByRole('tab',{name:'Game',exact:true}).click();
  await expect(trackStatus).toBeVisible();
  const [trackBoardBox,trackStatusBox,trackCardBox]=await Promise.all([
    page.locator('#trackCoinBoard').boundingBox(),
    trackStatus.boundingBox(),
    page.locator('#trackCoinGamePanel').boundingBox()
  ]);
  expect(trackBoardBox).not.toBeNull();
  expect(trackStatusBox).not.toBeNull();
  expect(trackCardBox).not.toBeNull();
  expect(trackStatusBox.x).toBeGreaterThan(trackBoardBox.x+trackBoardBox.width-1);
  expect(trackStatusBox.x+trackStatusBox.width).toBeLessThanOrEqual(trackCardBox.x+trackCardBox.width+1);
  const trackSceneBox=await page.locator('#trackCoinScene').boundingBox();
  expect(trackSceneBox).not.toBeNull();
  expect(Math.abs((trackSceneBox.y+(trackSceneBox.height/2))-(trackBoardBox.y+(trackBoardBox.height/2)))).toBeLessThanOrEqual(8);
  expect(await trackStatus.evaluate((node)=>getComputedStyle(node).alignSelf)).toBe('start');
  expect(trackStatusBox.height).toBeLessThan(trackCardBox.height*.7);
  expect(await page.locator('#trackCoinGamePanel .game-window-actions').evaluate((node)=>getComputedStyle(node).flexWrap)).toBe('wrap');
  await page.evaluate(()=>document.exitFullscreen());
  await page.waitForFunction(()=>document.fullscreenElement===null);

  // Auto-next must also work when it is enabled after a resolved result is
  // already on screen. Track the Coin starts the next round promptly, then
  // deliberately leaves the coin visible for its 3-second tracking window.
  const trackAutoNext=page.locator('#trackCoinGamePanel [data-auto-next-toggle="trackcoin"]');
  await expect(trackAutoNext).toBeVisible();
  await trackAutoNext.click();
  await expect(trackAutoNext).toHaveAttribute('aria-pressed','true');
  await page.waitForFunction(()=>{
    const scene=document.querySelector('#trackCoinScene');
    return !!scene && scene.classList.contains('is-phase-show') && !scene.classList.contains('is-resolved');
  },null,{timeout:4500});
  await expect(page.locator('#trackCoinScene')).not.toHaveClass(/is-resolved/);
  await trackAutoNext.click();
  await expect(trackAutoNext).toHaveAttribute('aria-pressed','false');

  // Regression: Rule Shift Round Status must render the shared status contract,
  // not merely contain source CSS that loses in the cascade.
  await page.goto('/baseline-recreation/games/rule-shift', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await expect(page.locator('#ruleshiftPanel')).toHaveClass(/is-active/);
  const ruleStatus=page.locator('#ruleShiftRoundSummary');
  const ruleHeading=ruleStatus.locator('.round-status-heading');
  await expect(ruleHeading).toHaveText('Round Status');
  await expect(ruleStatus).toContainText('Previous Run - 0 XP');
  expect(await ruleHeading.evaluate((node) => getComputedStyle(node).textAlign)).toBe('center');
  expect(await ruleStatus.evaluate((node) => getComputedStyle(node).alignContent)).toBe('start');

  // Browser zoom reduces the effective CSS viewport. At a constrained desktop
  // width the shared control rail must wrap rather than eject Settings/Fullscreen.
  await page.setViewportSize({ width:900, height:700 });
  const ruleCard=page.locator('#ruleShiftGameCard');
  const settingsControl=ruleCard.locator('[data-games-settings]');
  const fullscreenControl=ruleCard.locator('[data-game-fullscreen="ruleshift"]');
  await expect(settingsControl).toBeVisible();
  await expect(fullscreenControl).toBeVisible();
  const [cardBox,settingsBox,fullscreenBox]=await Promise.all([
    ruleCard.boundingBox(),settingsControl.boundingBox(),fullscreenControl.boundingBox()
  ]);
  expect(cardBox).not.toBeNull();
  expect(settingsBox).not.toBeNull();
  expect(fullscreenBox).not.toBeNull();
  expect(settingsBox.x).toBeGreaterThanOrEqual(cardBox.x-1);
  expect(fullscreenBox.x).toBeGreaterThanOrEqual(cardBox.x-1);
  expect(settingsBox.x+settingsBox.width).toBeLessThanOrEqual(cardBox.x+cardBox.width+1);
  expect(fullscreenBox.x+fullscreenBox.width).toBeLessThanOrEqual(cardBox.x+cardBox.width+1);

  // Block Grid uses the same conceptual composition rather than a bespoke
  // sidebar: play LEFT and the ordered information/control hierarchy RIGHT.
  await page.setViewportSize({ width:1440, height:900 });
  await page.goto('/baseline-recreation/system', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(()=>Boolean(document.documentElement.dataset.blockGridRuntime));
  await page.getByRole('button', { name:'Games', exact:true }).click();
  const blockGridOpen=page.locator('[data-open-game-extension="block-grid"]');
  await expect(blockGridOpen).toBeVisible();
  await blockGridOpen.click();
  await expect(page.locator('#blockGridPanel')).toHaveClass(/is-active/);
  await page.locator('#blockGridGameCard [data-block-action="new"]').click();
  const blockCard=page.locator('#blockGridGameCard');
  const blockPlay=blockCard.locator('.block-grid-play-cluster');
  const blockScore=blockCard.locator('.block-grid-score-window');
  const blockXp=blockCard.locator('.game-live-xp');
  const blockStatus=blockCard.locator('.round-status-card');
  const blockTier=blockCard.locator('.block-grid-run-objective');
  const blockSpecial=blockCard.locator('.block-grid-skill');
  const blockControls=blockCard.locator('.game-window-actions');
  for(const locator of [blockPlay,blockScore,blockXp,blockStatus,blockTier,blockSpecial,blockControls]) await expect(locator).toBeVisible();
  await expect(blockStatus.locator('.round-status-heading')).toHaveText('Round Status');
  expect(await blockStatus.locator('.round-status-heading').evaluate((node)=>getComputedStyle(node).textAlign)).toBe('center');
  const [playBox,scoreBox,xpBox,statusBox,tierBox,specialBox,controlsBox]=await Promise.all([
    blockPlay.boundingBox(),blockScore.boundingBox(),blockXp.boundingBox(),blockStatus.boundingBox(),blockTier.boundingBox(),blockSpecial.boundingBox(),blockControls.boundingBox()
  ]);
  for(const box of [playBox,scoreBox,xpBox,statusBox,tierBox,specialBox,controlsBox]) expect(box).not.toBeNull();
  for(const box of [scoreBox,xpBox,statusBox,tierBox,specialBox,controlsBox]) expect(box.x).toBeGreaterThan(playBox.x+playBox.width-1);
  expect(xpBox.y).toBeGreaterThanOrEqual(scoreBox.y);
  expect(statusBox.y).toBeGreaterThanOrEqual(xpBox.y);
  expect(tierBox.y).toBeGreaterThanOrEqual(statusBox.y);
  expect(specialBox.y).toBeGreaterThanOrEqual(scoreBox.y);
  expect(await blockStatus.evaluate((node)=>getComputedStyle(node).alignSelf)).toBe('start');
  expect(statusBox.height).toBeLessThan((await blockCard.boundingBox()).height*.7);
  expect(await blockControls.evaluate((node)=>getComputedStyle(node).flexWrap)).toBe('wrap');

  // Block Grid fullscreen keeps the same left/right relationship and never
  // falls back to the retired seven-column common-control dock.
  await blockCard.locator('[data-block-action="fullscreen"]').click();
  await page.waitForFunction(()=>document.fullscreenElement?.id==='blockGridGameCard');
  const [fsPlayBox,fsStatusBox,fsControlsBox]=await Promise.all([
    blockPlay.boundingBox(),blockStatus.boundingBox(),blockControls.boundingBox()
  ]);
  expect(fsPlayBox).not.toBeNull();
  expect(fsStatusBox).not.toBeNull();
  expect(fsControlsBox).not.toBeNull();
  expect(fsStatusBox.x).toBeGreaterThan(fsPlayBox.x+fsPlayBox.width-1);
  expect(await blockControls.evaluate((node)=>getComputedStyle(node).display)).toBe('flex');
  expect(await blockControls.evaluate((node)=>getComputedStyle(node).flexWrap)).toBe('wrap');
  await page.evaluate(()=>document.exitFullscreen());
  await page.waitForFunction(()=>document.fullscreenElement===null);
  expect(recreationPageErrors).toEqual([]);
});

test('Detect The Word fullscreen common controls keep the keypad icon geometrically centred', async ({ page }) => {
  const errors=[];
  page.on('pageerror',(error)=>errors.push(String(error&&error.stack||error&&error.message||error)));
  await page.goto('/baseline-recreation/games/detect-the-word', { waitUntil:'domcontentloaded' });
  await page.waitForFunction(()=>globalThis.BASELINE_RECREATION_CORE_READY===true);
  await page.setViewportSize({width:1280,height:760});

  const full=page.locator('#wordGameCard [data-game-fullscreen="detectword"]');
  await expect(full).toBeVisible();
  await full.click();
  await page.waitForFunction(()=>document.fullscreenElement?.id==='wordGameCard');

  const tabs=page.locator('#wordGameCard > .game-fullscreen-window-tabs .game-fullscreen-window-tabbar');
  await expect(tabs).toBeVisible();
  await expect(tabs.getByRole('tab').allTextContents()).resolves.toEqual(['Game','Skills','Tiers','Progress']);
  await expect(tabs.getByRole('tab',{name:'Game',exact:true})).toHaveClass(/is-active/);

  const keyboard=page.locator('#wordGameCard .game-window-actions [data-desktop-keypad-toggle="detectword"]');
  const start=page.locator('#wordGameCard .game-window-actions #newWordRoundBtn');
  const autoNext=page.locator('#wordGameCard .game-window-actions [data-auto-next-toggle="detectword"]');
  const keyboardIcon=keyboard.locator('.game-shell-action__svg');
  await expect(keyboard).toBeVisible();
  await expect(start).toBeVisible();
  await expect(autoNext).toBeVisible();

  const [keyboardBox,startBox,autoBox,iconBox]=await Promise.all([
    keyboard.boundingBox(),start.boundingBox(),autoNext.boundingBox(),keyboardIcon.boundingBox()
  ]);
  for(const box of [keyboardBox,startBox,autoBox,iconBox]) expect(box).not.toBeNull();
  expect(Math.abs(keyboardBox.width-44)).toBeLessThanOrEqual(1);
  expect(Math.abs(keyboardBox.height-44)).toBeLessThanOrEqual(1);
  const keyboardCx=keyboardBox.x+keyboardBox.width/2;
  const keyboardCy=keyboardBox.y+keyboardBox.height/2;
  expect(Math.abs(keyboardCy-(startBox.y+startBox.height/2))).toBeLessThanOrEqual(1);
  expect(Math.abs(keyboardCy-(autoBox.y+autoBox.height/2))).toBeLessThanOrEqual(1);
  expect(Math.abs(keyboardCx-(iconBox.x+iconBox.width/2))).toBeLessThanOrEqual(1);
  expect(Math.abs(keyboardCy-(iconBox.y+iconBox.height/2))).toBeLessThanOrEqual(1);

  await page.evaluate(()=>document.exitFullscreen());
  await page.waitForFunction(()=>document.fullscreenElement===null);
  expect(errors).toEqual([]);
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
