const { test, expect } = require('@playwright/test');

test('Skincare recipe UX runtime executes and integrates with the universal recipe template', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/calming-shave-gel');
  await page.waitForTimeout(1000);

  const state = await page.evaluate(() => ({
    scriptPresent: Array.from(document.scripts).some((script) =>
      String(script.src || '').includes('/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js')
    ),
    runtimeActive: window.__BASELINE_SKINCARE_RECIPE_UX_20260906__ === true,
    title: document.querySelector('#r8 h3')?.textContent?.trim() || '',
    slug: document.querySelector('#r8')?.getAttribute('data-recipe-slug') || '',
    focusMode: document.querySelector('#recipes')?.classList.contains('recipe-focus') || false
  }));

  expect(state).toEqual({
    scriptPresent: true,
    runtimeActive: true,
    title: 'Calming Shave Gel',
    slug: 'calming-shave-gel',
    focusMode: false
  });

  const card = page.locator('#r8');
  await expect(card.locator('.recipe-details-intro')).toBeHidden();
  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
  await expect(page.locator('#side-nav')).toBeVisible();
});


test('ordinary recipe routes keep the Skincare side navigation available', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  await expect(page.locator('#r2')).toBeVisible();
  await expect(page.locator('#side-nav')).toBeVisible();
  await expect(page.locator('#recipes')).not.toHaveClass(/recipe-focus/);
});
