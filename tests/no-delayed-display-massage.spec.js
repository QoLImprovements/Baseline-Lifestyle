const { test, expect } = require('@playwright/test');

test('Massage library and planner shells exist before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  let response = await page.goto('/baseline-massage/library', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  await expect(page.locator('#library')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#massageLibraryTabs .library-tab')).toHaveCount(4);
  await expect(page.locator('#libraryTechniqueControls')).toBeVisible();
  await expect(page.locator('#massageLibraryGrid .library-card')).toHaveCount(45);
  await expect(page.locator('#massageLibraryGrid .library-card').first()).toBeVisible();

  response = await page.goto('/baseline-massage/planner', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);
  await expect(page.locator('#planner')).toBeVisible();
  await expect(page.locator('[data-planner-panel="provider"]')).toBeVisible();
  await expect(page.locator('#providerSessionLength')).toBeVisible();
  await expect(page.locator('#providerMassageStyle')).toBeVisible();
  await expect(page.locator('#providerMassageTheme option')).toHaveCount(6);
  await expect(page.locator('#focusedMassageTheme option')).toHaveCount(6);
  await expect(page.locator('#massageAreaLayout [data-area-check]')).toHaveCount(25);
});
