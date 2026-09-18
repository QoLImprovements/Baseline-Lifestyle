const { test, expect } = require('@playwright/test');

test('Skincare recipe UX runtime executes and promotes the canonical recipe card', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/calming-shave-gel');
  await page.waitForTimeout(1000);

  const state = await page.evaluate(() => ({
    scriptPresent: Array.from(document.scripts).some((script) =>
      String(script.src || '').includes('/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js')
    ),
    runtimeActive: window.__BASELINE_SKINCARE_RECIPE_UX_20260906__ === true,
    title: document.querySelector('#r8 > h3')?.textContent?.trim() || '',
    slug: document.querySelector('#r8')?.getAttribute('data-recipe-slug') || ''
  }));

  expect(state).toEqual({
    scriptPresent: true,
    runtimeActive: true,
    title: 'Calming Shave Gel',
    slug: 'calming-shave-gel'
  });
});
