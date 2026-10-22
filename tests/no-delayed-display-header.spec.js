const { test, expect } = require('@playwright/test');

test('primary header controls are visible before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  for (const pathname of [
    '/baseline-food-approach/system',
    '/baseline-natural-skincare/system',
    '/baseline-fitness/system',
    '/baseline-badminton-session/system',
    '/baseline-recreation/system',
    '/baseline-massage/system'
  ]) {
    const response = await page.goto(pathname, { waitUntil:'load' });
    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('#blProtectedKey')).toBeVisible();
    await expect(page.locator('#bl-beats-toggle')).toBeVisible();
    if(pathname === '/baseline-fitness/system') await expect(page.locator('#bl-voice-toggle')).toBeVisible();
    else await expect(page.locator('#bl-voice-toggle')).toHaveCount(0);
    await expect(page.locator('#bl-auth-toggle')).toBeVisible();
    await expect(page.locator('#bl-auth-toggle .bl-btn-label')).toHaveText('Account');
  }

  const response = await page.goto('/home/1', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  await expect(page.locator('#blProtectedKey')).toBeVisible();
  await expect(page.locator('#bl-voice-toggle')).toHaveCount(0);
  await expect(page.locator('#bl-auth-toggle')).toBeVisible();
  await expect(page.locator('#bl-auth-toggle .bl-btn-label')).toHaveText('Account');

  const home2 = await page.goto('/home/2', { waitUntil:'load' });
  expect(home2).not.toBeNull();
  expect(home2.status()).toBeLessThan(400);
  await expect(page.locator('html')).toHaveAttribute('data-initial-home-view','badminton');
  await expect(page.locator('#badmintonView')).toBeVisible();
  await expect(page.locator('#systemsView')).toBeHidden();
});
