const { test, expect } = require('@playwright/test');

const routes = [
  ['/home/1', 'Home'],
  ['/baseline-food-approach/system', 'Food'],
  ['/baseline-massage/system', 'Massage'],
  ['/baseline-natural-skincare/system', 'Skincare'],
  ['/baseline-fitness/system', 'Fitness'],
  ['/baseline-badminton-session/system', 'Badminton'],
  ['/baseline-recreation/system', 'Recreation']
];

async function installMockAuthApi(page, requestedPaths) {
  let authed = false;
  await page.route('**/*', async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    requestedPaths.push(url.pathname);
    if (url.pathname.endsWith('/auth_providers.php')) {
      return route.fulfill({ contentType:'application/json', body:JSON.stringify({ ok:true, providers:{ password:true, google:false } }) });
    }
    if (url.pathname.endsWith('/me.php')) {
      return route.fulfill({ contentType:'application/json', body:JSON.stringify(authed
        ? { ok:true, authed:true, name:'Auth Test', email:'auth@example.test', user:{ name:'Auth Test', email:'auth@example.test' } }
        : { ok:true, authed:false, providers:{ password:true, google:false } }) });
    }
    if (url.pathname.endsWith('/login.php')) {
      expect(request.method()).toBe('POST');
      const body = request.postDataJSON();
      expect(body.identifier).toBe('auth@example.test');
      expect(body.password).toBe('correct-password');
      authed = true;
      return route.fulfill({ contentType:'application/json', body:JSON.stringify({ ok:true, user:{ name:'Auth Test', email:'auth@example.test' }, providers:{ password:true, google:false } }) });
    }
    if (url.pathname.includes('/api/')) {
      return route.fulfill({ contentType:'application/json', body:JSON.stringify({ ok:true }) });
    }
    return route.continue();
  });
}

async function submitSharedLogin(page) {
  await expect(page.locator('#bl-auth-flyout')).toBeVisible();
  await page.locator('#bl-auth-identifier-in').fill('auth@example.test');
  await page.locator('#bl-auth-pass-in').fill('correct-password');
  await page.locator('#bl-auth-login').click();
}

for (const [routePath, label] of routes) {
  test(`${label}: login uses the shared sitewide account endpoint`, async ({ page }) => {
    const requestedPaths = [];
    await installMockAuthApi(page, requestedPaths);
    await page.goto(routePath, { waitUntil:'domcontentloaded' });
    const toggle = page.locator('#bl-auth-toggle');
    await expect(toggle).toBeVisible();
    await toggle.click();
    await submitSharedLogin(page);
    await expect(toggle.locator('.bl-btn-label')).toHaveText('Account');
    await expect(page.locator('#bl-auth-failsafe-flyout')).toHaveCount(0);
    expect(requestedPaths.some((path) => path.endsWith('/login.php'))).toBe(true);
    expect(requestedPaths).not.toContain('/systems/baseline-fitness/api/login.php');
  });
}

test('Fitness falls back to the physical sitewide API when the root rewrite is unavailable', async ({ page }) => {
  const requestedPaths = [];
  await installMockAuthApi(page, requestedPaths);
  await page.route('**/api/login.php', async (route) => {
    requestedPaths.push('/api/login.php');
    await route.fulfill({ status:404, contentType:'text/html', body:'not found' });
  });
  await page.goto('/baseline-fitness/system', { waitUntil:'domcontentloaded' });
  const toggle = page.locator('#bl-auth-toggle');
  await expect(toggle).toBeVisible();
  await toggle.click();
  await submitSharedLogin(page);
  await expect(toggle.locator('.bl-btn-label')).toHaveText('Account');
  expect(requestedPaths).toContain('/sitewide/api/login.php');
});
