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
  await expect(meta.locator('.recipe-meta-item').filter({ hasText: /^Yield:/ })).toHaveCount(1);
  await expect(meta.locator('.recipe-meta-item').filter({ hasText: /^Batch:/ })).toHaveCount(1);

  const adjustmentsRow = card.locator('.recipe-adjustments-row');
  await expect(adjustmentsRow).toBeVisible();
  const adjustments = adjustmentsRow.locator('.recipe-adjustments-toggle');
  await expect(adjustments).toBeVisible();
  await expect(adjustments).toHaveText('Adjustments');
  await expect(adjustments).toHaveAttribute('aria-expanded', 'false');

  const geometry = await card.evaluate(el => {
    const meta = el.querySelector('.recipe-meta-row').getBoundingClientRect();
    const adjustments = el.querySelector('.recipe-adjustments-row').getBoundingClientRect();
    return { metaBottom: meta.bottom, adjustmentsTop: adjustments.top };
  });
  expect(geometry.adjustmentsTop).toBeGreaterThanOrEqual(geometry.metaBottom - 1);

  const adjustmentSurface = await adjustments.evaluate(el => ({
    backgroundColor: getComputedStyle(el).backgroundColor,
    backgroundImage: getComputedStyle(el).backgroundImage,
  }));
  expect(adjustmentSurface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
  expect(adjustmentSurface.backgroundImage).toBe('none');
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
  await expect(card.locator('.recipe-legacy-print-summary')).toBeHidden();

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

  const variant = card.locator('.recipe-variant-field select');
  await expect(variant).toBeVisible();
  await expect(variant).not.toHaveValue('');
  await expect(card.locator('.glide-controller').first()).toBeVisible();
  await expect(card.locator('.recipe-slider-instruction').first()).toHaveText('Adjust slider to preference.');
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
  await expectAdjustmentsContract(card);

  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('h4').filter({ hasText: /^Ingredients$/ }).first()).toBeHidden();
  await expect(card.locator('.glide-controller').first()).toBeHidden();
  await expect(card.locator('[data-recipe-view-group="details"]:visible')).toHaveCount(0);

  await card.locator('[data-recipe-subtab="guidance"]').click();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeHidden();

  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
  await expect(card.locator('[data-recipe-view-group="details"]:visible')).toHaveCount(0);
});

test('Protective balm removes the old slider prose and uses the shared slider instruction', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  await expect(card).toBeVisible();
  await expect(card.locator('.recipe-slider-instruction').first()).toHaveText('Adjust slider to preference.');
  await expect(card.getByText(/One batch; the sliders change the overall feel/i)).toBeHidden();
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

test('every Food and Skincare recipe receives Yield and Batch metadata', async ({ page }) => {
  for (const url of ['/baseline-natural-skincare/recipes', '/baseline-food-approach/recipes']) {
    await page.goto(url);
    const cards = page.locator('.recipe-page.recipe-universal-template');
    await expect.poll(async () => cards.count()).toBeGreaterThan(0);
    const results = await cards.evaluateAll(items => items.map(card => {
      const meta = Array.from(card.querySelectorAll('.recipe-meta-item')).map(item => item.textContent.trim());
      return {
        id: card.id,
        yield: meta.find(value => value.startsWith('Yield:')) || '',
        batch: meta.find(value => value.startsWith('Batch:')) || '',
      };
    }));
    expect(results.length).toBeGreaterThan(0);
    for (const result of results) {
      expect(result.yield, `${url} ${result.id} yield`).toMatch(/^Yield:\s*\S/);
      expect(result.batch, `${url} ${result.id} batch`).toMatch(/^Batch:\s*\S/);
    }
  }
});

test('numeric Yield updates when Batch is changed', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  await expect(card.locator('.recipe-meta-item').filter({ hasText: /^Yield:/ })).toContainText('100 g');
  await card.locator('.recipe-adjustments-toggle').click();
  const batchInput = card.locator('input.multiplier-input');
  await batchInput.fill('2');
  await batchInput.dispatchEvent('input');
  await expect(card.locator('.recipe-meta-item').filter({ hasText: /^Batch:/ })).toContainText('2×');
  await expect(card.locator('.recipe-meta-item').filter({ hasText: /^Yield:/ })).toContainText('200 g');
});

test('Details subtab is intentionally empty in both recipe systems', async ({ page }) => {
  const recipes = [
    ['/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel', '#r10'],
    ['/baseline-food-approach/recipes/tomato-and-red-pepper-sauce', '#r10'],
  ];

  for (const [url, selector] of recipes) {
    await page.goto(url);
    const card = page.locator(selector);
    await expect(card).toBeVisible();
    await card.locator('[data-recipe-subtab="details"]').click();
    await expect(card.locator('[data-recipe-view-group="details"]:visible')).toHaveCount(0);
    await card.locator('[data-recipe-subtab="show-all"]').click();
    await expect(card.locator('[data-recipe-view-group="details"]:visible')).toHaveCount(0);
  }
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
