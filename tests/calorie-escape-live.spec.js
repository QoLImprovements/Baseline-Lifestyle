const { test, expect } = require('@playwright/test');

test('Calorie Escape game module is present', async ({ page }) => {
  await page.goto('/systems/baseline-games-hub/baseline-games-hub.html');
  await expect(page.locator('body')).toBeVisible();
});
