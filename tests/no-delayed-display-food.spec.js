const { test, expect } = require('@playwright/test');

test('Diet Log shell is visible before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  const response = await page.goto('/baseline-food-approach/diet-log', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  await expect(page.locator('#diet-log')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#dietLogApp .diet-log-app')).toBeVisible();
  await expect(page.getByRole('heading', { name:'Daily Log' })).toBeVisible();
  await expect(page.locator('#dietLogDate')).toBeVisible();
  await expect(page.locator('#dietViewBtnFood')).toBeVisible();
  await expect(page.locator('#dietViewBtnRecipes')).toBeVisible();
  await expect(page.locator('#dietViewBtnBreakdown')).toBeVisible();
  await expect(page.locator('#dietViewBtnHealth')).toBeVisible();
  await expect(page.locator('#dietLogSearch')).toBeVisible();
  await expect(page.locator('#dietLogCategory')).toBeVisible();
  await expect(page.getByRole('heading', { name:'Selected Food' })).toBeVisible();
});
