const { test, expect } = require('@playwright/test');

async function expectUniversalTabs(card) {
  const tabs = card.locator('.recipe-subtabs');
  await expect(tabs).toBeVisible();
  await expect(tabs.locator('.recipe-subtab')).toHaveCount(4);
  await expect(tabs.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected', 'true');
  await expect(tabs.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected', 'false');
  await expect(tabs.locator('[data-recipe-subtab="guidance"]')).toHaveAttribute('aria-selected', 'false');
  await expect(tabs.locator('[data-recipe-subtab="show-all"]')).toHaveAttribute('aria-selected', 'false');
  await expect(card.locator('h1,h2,h3,h4').filter({ hasText: /^Standard View$/ })).toHaveCount(0);
}

async function expectAdjustmentsContract(card) {
  const meta = card.locator('.recipe-meta-row');
  await expect(meta).toBeVisible();
  const adjustments = meta.locator('.recipe-adjustments-toggle');
  await expect(adjustments).toBeVisible();
  await expect(adjustments).toHaveText('Adjustments');
  await expect(adjustments).toHaveAttribute('aria-expanded', 'false');
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();

  await adjustments.click();
  await expect(adjustments).toHaveAttribute('aria-expanded', 'true');
  await expect(card.locator('.recipe-adjustments-panel')).toBeVisible();
  await expect(card.locator('.recipe-control-row--batch')).toBeVisible();
  await expect(card.locator('.recipe-control-row--measurement')).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel .scale-toggle')).toBeVisible();

  await adjustments.click();
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
}

test('Skincare universal recipe keeps variants and formula sliders in Standard View', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend');
  const card = page.locator('#r6');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expectUniversalTabs(card);

  // Variant selection and recipe-defining controls remain visible without opening Adjustments.
  const variant = card.locator('.recipe-variant-field select');
  await expect(variant).toBeVisible();
  await expect(variant).not.toHaveValue('');
  await expect(card.locator('.glide-controller').first()).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
  await expectAdjustmentsContract(card);

  // Details hides the make-the-recipe sections, Guidance shows use/storage, Show All restores everything.
  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('h4').filter({ hasText: /^Ingredients$/ }).first()).toBeHidden();
  await expect(card.locator('.glide-controller').first()).toBeHidden();

  await card.locator('[data-recipe-subtab="guidance"]').click();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeHidden();

  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
});

test('Food oat type is a Standard View recipe choice, not an Adjustment', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla');
  const card = page.locator('#r4');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expectUniversalTabs(card);
  await expect(card.locator('.recipe-formula-controls .oat-toggle')).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
  await expectAdjustmentsContract(card);

  // Phase-4B standalone duplicate title/development note is not part of the universal visual template.
  await expect(page.locator('.phase4b-recipe-note')).toBeHidden();
  await expect(page.locator('.phase4b-recipe-top > h1')).toBeHidden();
});

test('Food thickness is a Standard View recipe choice while scaling remains under Adjustments', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/creamy-mushroom-sauce');
  const card = page.locator('#r5');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expect(card.locator('.recipe-formula-controls .recipe-control-row--thickness')).toBeVisible();
  await expect(card.locator('.recipe-formula-controls .bl-select.thickness-select')).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();

  await card.locator('.recipe-adjustments-toggle').click();
  await expect(card.locator('.recipe-adjustments-panel')).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel .scale-toggle')).toBeVisible();
});

test('system-specific recipe themes remain owned by the active system', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel');
  const skinCard = page.locator('#r10');
  await expect(skinCard).toBeVisible();
  const skinApp = await page.locator('body').getAttribute('data-app');
  const skinAccent = await page.locator('body').evaluate(el => getComputedStyle(el).getPropertyValue('--accent').trim());
  const skinSurface = await skinCard.evaluate(el => getComputedStyle(el).backgroundColor);
  expect(skinApp).toBe('skin');
  expect(skinAccent).not.toBe('');

  await page.goto('/baseline-food-approach/recipes/tomato-and-red-pepper-sauce');
  const foodCard = page.locator('#r10');
  await expect(foodCard).toBeVisible();
  const foodApp = await page.locator('body').getAttribute('data-app');
  const foodAccent = await page.locator('body').evaluate(el => getComputedStyle(el).getPropertyValue('--accent').trim());
  const foodSurface = await foodCard.evaluate(el => getComputedStyle(el).backgroundColor);
  expect(foodApp).toBe('food');
  expect(foodAccent).not.toBe('');

  expect(`${skinAccent}|${skinSurface}`).not.toBe(`${foodAccent}|${foodSurface}`);
});
