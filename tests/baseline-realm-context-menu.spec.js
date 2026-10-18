const { test, expect } = require('@playwright/test');

const PATH = '/systems/baseline-games-hub/baseline-games-hub.html';

async function openRealm(page) {
  const profiles = { ninja: { app: 'ninja', level: 1, xp: 0, coins: 0, stage: 1 } };
  const revisions = { ninja: 1 };
  await page.route('**/systems/baseline-games-hub/api/games_data.php**', async route => {
    const request = route.request();
    if (request.method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, profiles, revisions })
      });
      return;
    }
    let body = {};
    try { body = request.postDataJSON(); } catch (_) {}
    const app = body.app || 'ninja';
    if (body.profile && typeof body.profile === 'object') profiles[app] = body.profile;
    revisions[app] = Number(revisions[app] || 0) + 1;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, app, profile: profiles[app] || {}, revision: revisions[app] })
    });
  });

  await page.goto(PATH, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => Boolean(globalThis.BaselineRealmHost?.inputManager?.started));
  await page.getByRole('button', { name: 'Games', exact: true }).click();
  await page.locator('[data-select-game="ninja"]:visible').first().click();
  await expect(page.locator('#realmSceneFrame')).toBeVisible();
}

test('right-click is reserved inside Baseline Realm without disabling it elsewhere', async ({ page }) => {
  await openRealm(page);

  await page.evaluate(() => {
    globalThis.__realmContextMenuStates = [];
    document.addEventListener('contextmenu', event => {
      globalThis.__realmContextMenuStates.push({
        insideRealm: Boolean(event.target?.closest?.('#realmSceneFrame')),
        defaultPrevented: event.defaultPrevented
      });
    });
  });

  await page.locator('#realmSceneFrame').click({ button: 'right', position: { x: 120, y: 320 } });
  await page.getByRole('button', { name: 'Games', exact: true }).click({ button: 'right' });

  await expect.poll(() => page.evaluate(() => globalThis.__realmContextMenuStates)).toEqual([
    { insideRealm: true, defaultPrevented: true },
    { insideRealm: false, defaultPrevented: false }
  ]);
});
