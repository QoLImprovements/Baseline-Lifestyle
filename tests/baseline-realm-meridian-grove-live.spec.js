const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-games-hub/baseline-games-hub.html';
const SAVE_KEY = 'baseline.realm.exploration.jrpg.v1';

async function mockProfiles(page) {
  await page.route('**/systems/baseline-games-hub/api/games_profile.php**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    const app = url.searchParams.get('app') || 'ninja';
    const profile = app === 'ninja'
      ? { app: 'ninja', level: 1, xp: 0, coins: 0, stage: 1, enemyHp: 50, upgrades: {}, spiritShop: {} }
      : { app, level: 1, xp: 0, bank: 0, coins: 0, skillPoints: 1, skills: {} };
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, app, profile }) });
  });
}

async function openRealm(page) {
  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => (document.documentElement.getAttribute('data-baseline-realm-stage-one') || '').includes('COMPLETE'));
  await page.evaluate(() => {
    document.getElementById('games')?.classList.add('has-active-game', 'active');
    document.querySelectorAll('.game-panel').forEach(panel => panel.classList.remove('is-active'));
    document.getElementById('ninjaPanel')?.classList.add('is-active');
  });
}

test('Exploration Gate removes the legacy route and mounts Meridian Grove', async ({ page }) => {
  await mockProfiles(page);
  await openRealm(page);

  await page.locator('#realmBasecampBtn').click();
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
  await page.locator('#realmCampExplorationBtn').click();

  await expect(page.locator('#realmExplorationScreen .jrpg-game[data-zone="meridian-grove"]')).toBeVisible();
  await expect(page.locator('#jrpgMapViewport')).toBeVisible();
  await expect(page.getByText('Baseline Realm · Exploration', { exact: true })).toBeVisible();
  await expect(page.locator('#realmExplorationProgressFill')).toHaveCount(0);
  await expect(page.locator('#realmExploreNode1')).toHaveCount(0);
  await expect(page.getByText('Exploration Route', { exact: true })).toHaveCount(0);
});

test('Meridian Grove resumes an ATB battle with all six commands', async ({ page }) => {
  await mockProfiles(page);
  await openRealm(page);

  await page.evaluate(async ({ saveKey }) => {
    const engine = await import('/systems/baseline-games-hub/games/baseline-realm/exploration/js/jrpg-engine.js');
    const state = engine.createInitialState(67890);
    engine.startBattle(state, ['galesprout'], 'random');
    state.flags.introSeen = true;
    state.party[0].atb = 100;
    state.battle.activeActorIndex = 0;
    localStorage.setItem(saveKey, JSON.stringify(state));
  }, { saveKey: SAVE_KEY });

  await page.locator('#realmBasecampBtn').click();
  await page.locator('#realmCampExplorationBtn').click();

  await expect(page.locator('#jrpgBattleLayer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Active', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Wait', exact: true })).toBeVisible();
  for (const command of ['Attack', 'Ability', 'Magic', 'Item', 'Defend', 'Escape']) {
    await expect(page.getByRole('button', { name: command, exact: true })).toBeVisible();
  }
  await expect(page.locator('.jrpg-meter.atb')).toHaveCount(5);
  await expect(page.getByText('Exploration Route', { exact: true })).toHaveCount(0);
});
