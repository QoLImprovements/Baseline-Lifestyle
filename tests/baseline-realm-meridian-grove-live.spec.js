const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-recreation/baseline-recreation.html';
async function mockProfiles(page) {
  const profiles = {
    ninja:{ app:'ninja', level:1, xp:0, coins:0, stage:1, enemyHp:50, upgrades:{}, spiritShop:{} }
  };
  const revisions = { ninja:1 };
  await page.route('**/systems/baseline-recreation/api/games_data.php**', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if(request.method() === 'GET'){
      if(url.searchParams.has('bootstrap')){
        await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, authed:true, accountId:7, profiles, revisions }) });
        return;
      }
      const app=url.searchParams.get('app')||'';
      await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, app, found:Boolean(profiles[app]), profile:profiles[app]||{}, revision:revisions[app]||0 }) });
      return;
    }
    let body={};
    try{ body=request.postDataJSON(); }catch(_){}
    const app=String(body.app||'');
    if(app && body.profile) profiles[app]=body.profile;
    if(app) revisions[app]=(revisions[app]||0)+1;
    await route.fulfill({ status:200, contentType:'application/json', body:JSON.stringify({ ok:true, app, profile:profiles[app]||body.profile||{}, revision:revisions[app]||0 }) });
  });
}

async function openRealm(page) {
  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.sceneRouter));
  await page.waitForFunction(() => globalThis.BASELINE_RECREATION_CORE_READY === true);
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.getStateService?.()));
  await expect.poll(() => page.evaluate(() => globalThis.BaselineRealmHost.sceneRouter.getCurrentSceneId())).toBe('basecamp');
  await expect(page.locator('#realmBasecampScreen')).toBeVisible();
}

test('Exploration Gate removes the legacy route and mounts Meridian Grove', async ({ page }) => {
  await mockProfiles(page);
  await openRealm(page);

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

  await page.evaluate(async () => {
    const engine = await import('/systems/baseline-recreation/games/baseline-realm/exploration/js/jrpg-engine.js');
    const state = engine.createInitialState(67890);
    engine.startBattle(state, ['galesprout'], 'random');
    state.flags.introSeen = true;
    state.party[0].atb = 100;
    state.battle.activeActorIndex = 0;
    state.settings.battleMode = 'active';
    state.battle.enemies[0].atb = 99;
    if(!globalThis.BaselineGameStorage?.setTemporaryProfile?.('meridiangrove', state)){
      throw new Error('Recreation server-storage test authority unavailable');
    }
  });

  await page.locator('#realmCampExplorationBtn').click();

  await expect(page.locator('#jrpgBattleLayer')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Active', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Wait', exact: true })).toBeVisible();
  for (const command of ['Attack', 'Ability', 'Magic', 'Item', 'Defend', 'Escape']) {
    await expect(page.getByRole('button', { name: command, exact: true })).toBeVisible();
  }
  await expect(page.locator('.jrpg-meter.atb')).toHaveCount(2);

  // Active-mode enemy turns must update battle state without replacing the
  // player's open command/target DOM.
  await page.getByRole('button', { name: 'Attack', exact: true }).click();
  const targetButton = page.locator('[data-battle-target]').first();
  await expect(targetButton).toBeVisible();
  await targetButton.evaluate(node => { node.dataset.stabilityProbe = 'same-node'; });
  await page.waitForTimeout(650);
  await expect(page.locator('[data-battle-target][data-stability-probe="same-node"]')).toBeVisible();

  await expect(page.getByText('Exploration Route', { exact: true })).toHaveCount(0);
});
