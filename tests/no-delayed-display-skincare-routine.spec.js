const { test, expect } = require('@playwright/test');

test('Skincare My Routine shell is visible before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  let response = await page.goto('/baseline-natural-skincare/my-routine/plan', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  await expect(page.locator('#routine')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#routineSubtabs .routine-subtab')).toHaveCount(4);
  await expect(page.locator('[data-routine-panel="plan"]')).toBeVisible();
  await expect(page.locator('.routine-group-manager')).toBeVisible();
  await expect(page.locator('#routineGroupName')).toBeVisible();
  await expect(page.locator('#createRoutineGroup')).toBeVisible();
  await expect(page.locator('#routineActionSearch')).toBeVisible();
  await expect(page.locator('#addRoutineAction')).toBeVisible();
  await expect(page.locator('#routineItems')).toBeVisible();

  response = await page.goto('/baseline-natural-skincare/my-routine/log', { waitUntil:'load' });
  expect(response).not.toBeNull();
  expect(response.status()).toBeLessThan(400);

  await expect(page.locator('[data-routine-panel="log"]')).toBeVisible();
  await expect(page.locator('#routineLogDate')).toBeVisible();
  await expect(page.locator('#routineLogProgress')).toBeVisible();
  await expect(page.locator('#routineLogItems')).toBeVisible();
  await expect(page.locator('.routine-calendar-card')).toBeVisible();
  await expect(page.locator('[data-skincare-calendar-view="week"]')).toBeVisible();
  await expect(page.locator('[data-skincare-calendar-view="month"]')).toBeVisible();
  await expect(page.locator('#routineCalendarWeekdays span')).toHaveCount(7);
  await expect(page.locator('#routineCalendarGrid')).toBeVisible();
});
