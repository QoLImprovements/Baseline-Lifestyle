const { test, expect } = require('@playwright/test');

const PATH = '/baseline-recreation/system';

function ninjaProfile() {
  return {
    app: 'ninja', coins: 250, spirit: 12, xp: 10, level: 3, stage: 4,
    enemyHp: 50, highestStage: 4, totalKills: 2, currentStreak: 0,
    bestStreak: 1, cleanWinStreak: 0, bossesDefeated: 0,
    totalCoinsEarned: 250, prestigeCount: 0, prestigeEarnedTotal: 0,
    upgrades: { blade: 1, drills: 0, treasury: 0, meditation: 0, breaker: 0 },
    spiritShop: { focus: 0, fortune: 0, vigor: 0, ember: 0, tents: 0, mark: 0 },
    lastSeenAt: Date.now(), bonusCache: {}, offlineSummary: '',
    realm: {
      version: 3,
      wallet: { coins: 250, spirit: 12 },
      inventory: {
        materials: { iron_ore: 10, hard_wood: 5, leather_strip: 5, healing_herb: 4, clear_water: 2 },
        items: {}, equipment: {}, food: {}, potions: {}, tools: {}
      },
      party: {
        active: ['sera'], reserve: ['orin'],
        characters: {
          sera: { id: 'sera', name: 'Sera Vale', level: 3, hp: 60, maxHp: 60, equipment: {} },
          orin: { id: 'orin', name: 'Orin Flint', level: 3, hp: 45, maxHp: 45, equipment: {} }
        }
      }
    }
  };
}

function profileFor(app) {
  return app === 'ninja' ? ninjaProfile() : { app, level: 1, xp: 0, bank: 0, coins: 0, skillPoints: 1, skills: {} };
}

async function mockProfiles(page) {
  const profiles = { ninja: ninjaProfile() };
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async (route) => {
    const request = route.request();
    if (request.method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, profiles }) });
      return;
    }
    let body = {};
    try { body = request.postDataJSON(); } catch (_) {}
    if (body.action === 'migrate_missing') Object.entries(body.profiles || {}).forEach(([app, profile]) => { if (!profiles[app]) profiles[app] = profile; });
    if (body.action === 'save' && body.app && body.profile) profiles[body.app] = body.profile;
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, app: body.app || '', profile: body.app ? profiles[body.app] : null, profiles }) });
  });
  await page.route('**/systems/baseline-recreation/api/games_profile.php**', async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    let app = url.searchParams.get('app') || 'pairs';
    if (!profiles[app]) profiles[app] = profileFor(app);
    if (request.method() === 'POST') {
      try {
        const body = request.postDataJSON();
        app = body.app || app;
        profiles[app] = body.profile || profiles[app] || profileFor(app);
      } catch (_) {}
    }
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, app, profile: profiles[app] }) });
  });
  return profiles;
}

async function openRealm(page, { mobile = false } = {}) {
  const profiles = await mockProfiles(page);
  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.getStateService?.()) && Boolean(document.documentElement.getAttribute('data-baseline-realm-integration')));
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.evaluate(({ mobile }) => {
    document.body.classList.toggle('bl-mobile-game-mode', mobile);
    if (mobile) document.body.setAttribute('data-mobile-game', 'ninja');
    else document.body.removeAttribute('data-mobile-game');
    dispatchEvent(new Event('resize'));
  }, { mobile });
  await expect(page.locator('#realmSceneFrame')).toBeVisible();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await page.evaluate(() => globalThis.BaselineRealmHost.whenAssetsReady());
  return profiles;
}

async function expectStageRatio(page) {
  const box = await page.locator('#realmSceneFrame').boundingBox();
  expect(box).not.toBeNull();
  expect(Math.abs(box.width / box.height - 16 / 9)).toBeLessThan(0.03);
}

async function stableScreenshot(page, testInfo, name) {
  await page.evaluate(async () => {
    await document.fonts?.ready;
    document.querySelectorAll('*').forEach((node) => node.getAnimations?.().forEach((animation) => animation.pause()));
  });
  await page.waitForTimeout(60);
  const first = await page.screenshot({ path: testInfo.outputPath(`${name}.png`), fullPage: false, animations: 'disabled' });
  const second = await page.screenshot({ fullPage: false, animations: 'disabled' });
  expect(Buffer.compare(first, second), `${name} screenshot changed between identical captures`).toBe(0);
}

const screenshotMatrix = [
  { width: 390, height: 844, mobile: true, name: '390x844-portrait' },
  { width: 844, height: 390, mobile: true, name: '844x390-landscape' },
  { width: 1280, height: 720, mobile: false, name: '1280x720-desktop' },
  { width: 1920, height: 1080, mobile: false, name: '1920x1080-desktop' },
  { width: 2560, height: 1440, mobile: false, name: '2560x1440-desktop' }
];

for (const viewport of screenshotMatrix) {
  test(`${viewport.name} layout and screenshot comparison`, async ({ browser }, testInfo) => {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.mobile,
      hasTouch: viewport.mobile,
      reducedMotion: 'reduce'
    });
    const page = await context.newPage();
    await openRealm(page, { mobile: viewport.mobile });
    const frame = page.locator('#realmSceneFrame');
    if (viewport.width < viewport.height) {
      await expect(frame).toHaveAttribute('data-realm-orientation', 'portrait-blocked');
      await expect(page.getByText('Landscape required', { exact: true })).toBeVisible();
    } else if (viewport.mobile) {
      const box = await frame.boundingBox();
      expect(Math.abs(box.x)).toBeLessThan(1);
      expect(Math.abs(box.y)).toBeLessThan(1);
      expect(Math.abs(box.width - viewport.width)).toBeLessThan(2);
      expect(Math.abs(box.height - viewport.height)).toBeLessThan(2);
      await page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.navigate('basecamp'));
    } else {
      await expectStageRatio(page);
      await page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.navigate('basecamp'));
    }
    await stableScreenshot(page, testInfo, viewport.name);
    await context.close();
  });
}

test('navigation reaches every completed Realm module', async ({ page }) => {
  await openRealm(page);
  for (const scene of ['basecamp', 'ninja-training', 'exploration', 'workshop', 'calorie-escape', 'tactical-operations']) {
    const result = await page.evaluate((id) => globalThis.BaselineRealmHost.sceneRouter.navigate(id).then(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId()), scene);
    expect(result).toBe(scene);
  }
});

test('Basecamp landmarks enter external games and reliably return to the hub', async ({ page }) => {
  await openRealm(page);

  await page.locator('[data-basecamp-landmark="calorie-escape"]').click();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('calorie-escape');
  await expect(page.locator('#calorieEscapeScreen')).toBeVisible();
  await page.locator('#calorieEscapeScreen [data-ce-action="basecamp"]').first().click();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();

  await page.locator('[data-basecamp-landmark="tactical-operations"]').click();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('tactical-operations');
  await expect(page.locator('#tacticalOperationsScreen')).toBeVisible();
  await page.locator('#tacticalOperationsScreen [data-action="exit"]').click();
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await expect(page.locator('.realm-command-banner')).toBeVisible();
});

test('authenticated save/load, shared wallet, crafting, battle and inventory transfer remain connected', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  const serverProfiles = await openRealm(page);

  const integration = await page.evaluate(() => {
    const host = globalThis.BaselineRealmHost;
    const workshop = host.getWorkshopService();
    const state = host.getStateService();
    const wallet = state.adjustWallet({ coins: 25, spirit: 3 });
    const crafted = workshop.craft('blacksmith_field_knife', 1);
    const tonic = workshop.craft('alchemy_healing_tonic', 1);
    const used = state.useItem('healing_tonic', 'exploration');
    const instanceId = Object.keys(state.read().realm.inventory.equipment)[0];
    const equipped = state.transferEquipment({ characterId: 'sera', instanceId, slot: 'weapon' });
    return {
      wallet: wallet.ok,
      crafted: crafted.ok,
      tonic: tonic.ok,
      used: used.ok,
      equipped: equipped.ok,
      instanceId,
      snapshot: state.moduleSnapshot('exploration')
    };
  });
  expect(integration).toMatchObject({ wallet: true, crafted: true, tonic: true, used: true, equipped: true });
  expect(integration.snapshot.wallet).toEqual({ coins: 275, spirit: 15 });
  expect(integration.snapshot.party.characters.sera.equipment.weapon.id).toBe(integration.instanceId);

  await page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.navigate('ninja-training'));
  const before = await page.evaluate(() => {
    const save = globalThis.BaselineRealmHost.syncProfileRealm();
    return { hp: save.realm.ninjaTraining.enemyHp, kills: save.realm.ninjaTraining.totalKills };
  });
  await page.locator('#ninjaManualStrikeBtn').click();
  const after = await page.evaluate(() => {
    const save = globalThis.BaselineRealmHost.syncProfileRealm();
    return { hp: save.realm.ninjaTraining.enemyHp, kills: save.realm.ninjaTraining.totalKills };
  });
  expect(after.hp !== before.hp || after.kills > before.kills).toBeTruthy();
  await expect.poll(() => serverProfiles.ninja?.realm?.wallet?.coins).toBe(275);
  await expect.poll(() => serverProfiles.ninja?.realm?.party?.characters?.sera?.equipment?.weapon?.id).toBe(integration.instanceId);

  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  const reloaded = await page.evaluate(() => globalThis.BaselineRealmHost.getStateService().read().realm);
  expect(reloaded.wallet).toEqual({ coins: 275, spirit: 15 });
  expect(reloaded.party.characters.sera.equipment.weapon.id).toBe(integration.instanceId);
  await context.close();
});

test('fullscreen, audio controls and reduced-motion state are wired', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await openRealm(page);
  await expect(page.locator('#realmAudioControls')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('data-realm-reduced-motion', 'true');
  await page.locator('[data-realm-audio-mute]').click();
  await expect(page.locator('[data-realm-audio-mute]')).toHaveAttribute('aria-pressed', 'true');

  const supported = await page.evaluate(() => document.fullscreenEnabled);
  if (supported) {
    await page.locator('#realmFullscreenBtn').click();
    await page.waitForTimeout(200);
    const entered = await page.evaluate(() => document.fullscreenElement?.id === 'realmSceneFrame');
    if (entered) {
      const box = await page.locator('#realmSceneFrame').boundingBox();
      expect(Math.abs(box.width - 1280)).toBeLessThan(2);
      expect(Math.abs(box.height - 720)).toBeLessThan(2);
    }
  }
  const performance = await page.evaluate(() => globalThis.BaselineRealmHost.performanceReport());
  expect(performance.budget).toMatchObject({ startupMs: 2200, interactionMs: 80, frameMs: 18, transferBytes: 7000000 });
  await context.close();
});
