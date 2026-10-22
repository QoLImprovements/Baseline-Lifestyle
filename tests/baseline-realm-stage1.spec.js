const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-recreation/baseline-recreation.html';
const GUEST_PROFILE_KEY = '__bl_games_guest_profiles_v1__';

function profileFor(app) {
  if (app === 'ninja') {
    return {
      app: 'ninja', coins: 678, xp: 345, level: 12, stage: 37,
      enemyHp: 240, highestStage: 42, totalKills: 120,
      bossesDefeated: 4, totalCoinsEarned: 3000, prestigeCount: 1,
      spirit: 9, prestigeEarnedTotal: 9, lastSeenAt: Date.now(),
      offlineSummary: '', bonusCache: {}, currentStreak: 3,
      cleanWinStreak: 2,
      upgrades: { blade: 3, drills: 2, treasury: 1, meditation: 2, breaker: 1 }
    };
  }
  return { app, level: 1, xp: 0, bank: 0, coins: 0, skillPoints: 1, skills: {} };
}

async function mockProfiles(page) {
  const savedNinja = profileFor('ninja');
  await page.addInitScript(({ key, profile }) => {
    localStorage.setItem(key, JSON.stringify({ ninja: profile }));
  }, { key: GUEST_PROFILE_KEY, profile: savedNinja });

  await page.route('**/systems/baseline-recreation/api/games_profile.php**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    let app = url.searchParams.get('app') || 'pairs';
    let profile = profileFor(app);
    if (request.method() === 'POST') {
      try {
        const body = request.postDataJSON();
        app = body.app || app;
        profile = body.profile || profileFor(app);
      } catch (_) {}
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, app, profile })
    });
  });
}

async function openRealm(page, { mobile = false } = {}) {
  await mockProfiles(page);
  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => {
    const marker = document.documentElement.getAttribute('data-baseline-realm-stage-one') || '';
    return marker.includes('COMPLETE') && Boolean(globalThis.BaselineRealmHost?.sceneRouter);
  });
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  const selector = page.locator('[data-select-game="ninja"]:visible').first();
  await expect(selector).toBeVisible();
  await selector.click();
  await page.evaluate(({ mobile }) => {
    document.body.classList.toggle('bl-mobile-game-mode', mobile);
    if (mobile) document.body.setAttribute('data-mobile-game', 'ninja');
    else document.body.removeAttribute('data-mobile-game');
    window.dispatchEvent(new Event('resize'));
  }, { mobile });
  await expect(page.locator('#realmSceneFrame')).toBeVisible();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
}

async function screenshot(page, testInfo, name) {
  await page.screenshot({ path: testInfo.outputPath(`${name}.png`), fullPage: false });
}

async function expectSixteenNine(page) {
  const box = await page.locator('#realmSceneFrame').boundingBox();
  expect(box).not.toBeNull();
  expect(Math.abs((box.width / box.height) - (16 / 9))).toBeLessThan(0.03);
  expect(box.height).toBeGreaterThan(box.width * 0.54);
}

for (const viewport of [
  { width: 1280, height: 720, name: 'desktop-1280x720' },
  { width: 1920, height: 1080, name: 'desktop-1920x1080' },
  { width: 2560, height: 1440, name: 'desktop-2560x1440' }
]) {
  test(`${viewport.name} uses a true 16:9 stage`, async ({ browser }, testInfo) => {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    await openRealm(page);
    await expectSixteenNine(page);
    await screenshot(page, testInfo, viewport.name);
    await context.close();
  });
}

test('390x844 portrait touch device shows the Landscape Required gate', async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true
  });
  const page = await context.newPage();
  await openRealm(page, { mobile: true });
  const frame = page.locator('#realmSceneFrame');
  await expect(frame).toHaveAttribute('data-realm-orientation', 'portrait-blocked');
  await expect(page.locator('.realm-orientation-gate')).toBeVisible();
  await expect(page.getByText('Landscape required', { exact: true })).toBeVisible();
  await screenshot(page, testInfo, 'portrait-390x844-gate');
  await context.close();
});

test('844x390 landscape touch device occupies the complete viewport', async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true
  });
  const page = await context.newPage();
  await openRealm(page, { mobile: true });
  const box = await page.locator('#realmSceneFrame').boundingBox();
  expect(box).not.toBeNull();
  expect(Math.abs(box.x)).toBeLessThan(1);
  expect(Math.abs(box.y)).toBeLessThan(1);
  expect(Math.abs(box.width - 844)).toBeLessThan(2);
  expect(Math.abs(box.height - 390)).toBeLessThan(2);
  await expect(page.locator('.realm-orientation-gate')).toBeHidden();
  await screenshot(page, testInfo, 'landscape-touch-844x390');
  await context.close();
});

test('Stage 1 navigation, artwork, SVG controls, cooldown and seeded progress remain functional', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  await openRealm(page);

  await expect(page.locator('#realmExploreBtn')).toHaveCount(0);
  await expect(page.locator('#ninjaPanel .realm-page-header')).toHaveCount(0);
  await expect(page.locator('#ninjaLevelValue')).toHaveText('12');
  await expect(page.locator('#ninjaStageValue')).toHaveText('37');
  await expect(page.locator('#ninjaCoinsValue')).toHaveText('678');
  await expect(page.locator('#ninjaSpiritValue')).toHaveText('9');

  const dashHref = await page.locator('#ninjaManualStrikeBtn use').getAttribute('href');
  const shurikenHref = await page.locator('#ninjaShurikenBtn use').getAttribute('href');
  expect(dashHref).toContain('realm-icons.svg');
  expect(dashHref).toContain('#icon-dash-cut');
  expect(shurikenHref).toContain('#icon-shuriken');
  const sprite = await page.evaluate(async () => {
    const response = await fetch('/systems/baseline-recreation/games/baseline-realm/shared/icons/realm-icons.svg');
    return { ok: response.ok, text: await response.text() };
  });
  expect(sprite.ok).toBeTruthy();
  expect(sprite.text).toContain('icon-dash-cut');
  expect(sprite.text).toContain('icon-shuriken');

  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  const backgroundSize = await page.locator('#realmBasecampScreen').evaluate(node => getComputedStyle(node).backgroundSize);
  expect(backgroundSize).toContain('100% 100%');
  await expect(page.locator('#realmCampExplorationBtn')).toBeVisible();
  await page.locator('#realmCampExplorationBtn').click();
  await expect(page.locator('#realmExplorationScreen .jrpg-game[data-zone="meridian-grove"]')).toBeVisible();
  const enterGrove = page.getByRole('button', { name: 'Enter the grove', exact: true });
  if (await enterGrove.isVisible()) await enterGrove.click();
  await page.locator('#realmExplorationScreen [data-jrpg-action="return-basecamp"]').click();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await page.locator('#realmCampNinjaBtn').click();

  const shuriken = page.locator('#ninjaShurikenBtn');
  await expect(shuriken).toBeEnabled();
  await shuriken.click();
  await expect(shuriken).toBeDisabled();
  const disabledStyle = await shuriken.evaluate(node => {
    const style = getComputedStyle(node);
    return { opacity: Number(style.opacity), filter: style.filter, cursor: style.cursor };
  });
  expect(disabledStyle.opacity).toBeLessThanOrEqual(0.3);
  expect(disabledStyle.cursor).toBe('not-allowed');
  expect(disabledStyle.filter).not.toBe('none');
  await screenshot(page, testInfo, 'stage1-controls-and-basecamp');
  await context.close();
});

test('fullscreen landscape fills the viewport when the CI browser grants fullscreen', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  await openRealm(page);
  const supported = await page.evaluate(() => document.fullscreenEnabled);
  test.skip(!supported, 'The CI browser does not expose the Fullscreen API.');
  await page.locator('#realmFullscreenBtn').click();
  await page.waitForTimeout(500);
  const entered = await page.evaluate(() => document.fullscreenElement && document.fullscreenElement.id === 'realmSceneFrame');
  test.skip(!entered, 'The CI browser declined fullscreen despite a user-gesture click.');
  const box = await page.locator('#realmSceneFrame').boundingBox();
  expect(box).not.toBeNull();
  expect(Math.abs(box.width - 1280)).toBeLessThan(2);
  expect(Math.abs(box.height - 720)).toBeLessThan(2);
  await screenshot(page, testInfo, 'fullscreen-landscape-1280x720');
  await context.close();
});
