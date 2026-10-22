const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-recreation/baseline-recreation.html';
const PROFILE_KEY = '__bl_games_guest_profiles_v1__';

function ninjaProfile() {
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

async function prepare(page) {
  await page.addInitScript(({ key, profile }) => {
    localStorage.setItem(key, JSON.stringify({ ninja: profile }));
  }, { key: PROFILE_KEY, profile: ninjaProfile() });

  await page.route('**/systems/baseline-recreation/api/games_profile.php**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    let app = url.searchParams.get('app') || 'ninja';
    let profile = app === 'ninja' ? ninjaProfile() : { app, level: 1, xp: 0, bank: 0, coins: 0, skillPoints: 1, skills: {} };
    if (request.method() === 'POST') {
      try {
        const body = request.postDataJSON();
        app = body.app || app;
        profile = body.profile || profile;
      } catch (_) {}
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, app, profile })
    });
  });

  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => {
    const shell = document.documentElement.getAttribute('data-baseline-realm-stage-one') || '';
    return shell.includes('COMPLETE') && Boolean(globalThis.BaselineRealmHost?.sceneRouter);
  });
}

async function enterRealmThroughRealHandler(page) {
  const gamesTab = page.getByRole('button', { name: 'Games', exact: true });
  await expect(gamesTab).toBeVisible();
  await gamesTab.click();

  const selector = page.locator('[data-select-game="ninja"]:visible').first();
  await expect(selector).toBeVisible();
  await selector.click();

  await expect(page.locator('body')).toHaveAttribute('data-mobile-game', 'ninja');
  await expect(page.locator('body')).toHaveClass(/bl-mobile-game-mode/);
  await expect(page.locator('#ninjaPanel')).toHaveClass(/is-mobile-game-root/);
  await expect(page.locator('#realmSceneFrame')).toBeVisible();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
}

async function expectFullViewport(page, width, height) {
  const frame = await page.locator('#realmSceneFrame').boundingBox();
  expect(frame).not.toBeNull();
  expect(Math.abs(frame.x)).toBeLessThan(1);
  expect(Math.abs(frame.y)).toBeLessThan(1);
  expect(Math.abs(frame.width - width)).toBeLessThan(2);
  expect(Math.abs(frame.height - height)).toBeLessThan(2);
}

test('real 390x844 mobile entry renders only the Landscape Required gate', async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();
  await prepare(page);
  await enterRealmThroughRealHandler(page);

  await expectFullViewport(page, 390, 844);
  await expect(page.locator('#realmSceneFrame')).toHaveAttribute('data-realm-orientation', 'portrait-blocked');
  await expect(page.locator('.realm-orientation-gate')).toBeVisible();
  await expect(page.getByText('Landscape required', { exact: true })).toBeVisible();
  await expect(page.locator('.realm-command-banner')).toBeHidden();
  await expect(page.locator('.ninja-scene')).toBeHidden();
  await expect(page.locator('.realm-action-dock')).toBeHidden();
  await expect(page.locator('#realmExploreBtn')).toHaveCount(0);
  await expect(page.locator('#ninjaPanel > .mobile-game-exit')).toHaveCount(0);

  await page.screenshot({ path: testInfo.outputPath('real-mobile-portrait-gate.png'), fullPage: false });
  await context.close();
});

test('real phone rotation produces one full-viewport landscape stage and returns to the gate', async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    screen: { width: 844, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();
  await prepare(page);
  await enterRealmThroughRealHandler(page);

  await page.setViewportSize({ width: 844, height: 390 });
  await page.evaluate(() => {
    window.dispatchEvent(new Event('orientationchange'));
    window.dispatchEvent(new Event('resize'));
  });

  await expect(page.locator('#realmSceneFrame')).toHaveAttribute('data-realm-orientation', 'landscape-ready');
  await expectFullViewport(page, 844, 390);
  await expect(page.locator('.realm-orientation-gate')).toBeHidden();
  await expect(page.locator('.realm-command-banner')).toBeVisible();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await expect(page.locator('.realm-action-dock')).toBeHidden();

  const mobileLayout = await page.evaluate(() => {
    const rect = (selector) => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const box = node.getBoundingClientRect();
      return { x: box.x, y: box.y, width: box.width, height: box.height, right: box.right, bottom: box.bottom };
    };
    const hotkey = document.querySelector('.realm-hotkey-hint');
    return {
      banner: rect('.realm-command-banner'),
      basecamp: rect('#realmBasecampScreen'),
      status: rect('.realm-command-banner__status'),
      coins: rect('.realm-shared-status'),
      utility: rect('.realm-command-banner .realm-utility'),
      management: rect('.realm-context-action'),
      basecampReturnHidden: document.getElementById('realmBasecampBtn')?.hidden === true,
      utilityButtonCount: document.querySelectorAll('.realm-command-banner .realm-utility .realm-fab').length,
      drawerHidden: document.getElementById('realmPanelDrawer')?.hidden === true,
      hotkeyDisplay: hotkey ? getComputedStyle(hotkey).display : null,
      basecampBackgroundSize: getComputedStyle(document.getElementById('realmBasecampScreen')).backgroundSize
    };
  });
  expect(mobileLayout.banner).not.toBeNull();
  expect(Math.abs(mobileLayout.banner.x)).toBeLessThan(1);
  expect(Math.abs(mobileLayout.banner.width - 844)).toBeLessThan(2);
  expect(Math.abs(mobileLayout.banner.height - 76)).toBeLessThan(2);
  expect(mobileLayout.basecamp).not.toBeNull();
  expect(Math.abs(mobileLayout.basecamp.x)).toBeLessThan(1);
  expect(Math.abs(mobileLayout.basecamp.width - 844)).toBeLessThan(2);
  expect(Math.abs(mobileLayout.basecamp.y - 76)).toBeLessThan(2);
  expect(mobileLayout.status.right).toBeLessThanOrEqual(mobileLayout.coins.x + 1);
  expect(Math.abs((mobileLayout.coins.x + mobileLayout.coins.width / 2) - (mobileLayout.banner.x + mobileLayout.banner.width / 2))).toBeLessThan(1.5);
  expect(mobileLayout.coins.right).toBeLessThanOrEqual(mobileLayout.utility.x + 1);
  expect(mobileLayout.utility.right).toBeLessThanOrEqual(844.5);
  expect(mobileLayout.management.right).toBeLessThanOrEqual(844.5);
  expect(mobileLayout.basecampReturnHidden).toBeTruthy();
  expect(mobileLayout.utilityButtonCount).toBe(3);
  expect(mobileLayout.drawerHidden).toBeTruthy();
  expect(mobileLayout.hotkeyDisplay).toBe('none');
  expect(mobileLayout.basecampBackgroundSize).toContain('100% 100%');
  await expect(page.locator('[data-basecamp-landmark="ninja-training"]')).toBeVisible();
  await expect(page.locator('[data-basecamp-landmark="exploration"]')).toBeVisible();
  await expect(page.locator('#realmExploreBtn')).toHaveCount(0);
  await expect(page.locator('#ninjaPanel > .mobile-game-exit')).toHaveCount(0);
  await expect(page.locator('#realmSceneFrame')).toHaveCount(1);

  const sizes = await page.evaluate(() => {
    const body = document.body.getBoundingClientRect();
    const panel = document.getElementById('ninjaPanel').getBoundingClientRect();
    const frame = document.getElementById('realmSceneFrame').getBoundingClientRect();
    return {
      body: { width: body.width, height: body.height },
      panel: { width: panel.width, height: panel.height },
      frame: { width: frame.width, height: frame.height },
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight
    };
  });
  expect(sizes.panel.width).toBeGreaterThanOrEqual(843);
  expect(sizes.panel.height).toBeGreaterThanOrEqual(389);
  expect(sizes.frame.width).toBeGreaterThanOrEqual(843);
  expect(sizes.frame.height).toBeGreaterThanOrEqual(389);
  expect(sizes.scrollWidth).toBeLessThanOrEqual(845);
  expect(sizes.scrollHeight).toBeLessThanOrEqual(391);

  await page.screenshot({ path: testInfo.outputPath('real-mobile-landscape-stage.png'), fullPage: false });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    window.dispatchEvent(new Event('orientationchange'));
    window.dispatchEvent(new Event('resize'));
  });
  await expect(page.locator('#realmSceneFrame')).toHaveAttribute('data-realm-orientation', 'portrait-blocked');
  await expect(page.locator('.realm-orientation-gate')).toBeVisible();
  await expect(page.locator('.ninja-scene')).toBeHidden();

  await context.close();
});
