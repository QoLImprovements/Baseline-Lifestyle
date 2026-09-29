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
    '/baseline-games-hub/games-hub',
    '/baseline-massage/system'
  ]) {
    const response = await page.goto(pathname, { waitUntil:'load' });
    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('#blProtectedKey')).toBeVisible();
    await expect(page.locator('#bl-beats-toggle')).toBeVisible();
    await expect(page.locator('#bl-voice-toggle')).toBeVisible();
    await expect(page.locator('#bl-auth-toggle')).toBeVisible();
  }

  const response = await page.goto('/home/1', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  await expect(page.locator('#blProtectedKey')).toBeVisible();
  await expect(page.locator('#bl-voice-toggle')).toBeVisible();
  await expect(page.locator('#bl-auth-toggle')).toBeVisible();
});
