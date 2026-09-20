const { test, expect } = require('@playwright/test');

test('Testing Lip/ balm opens from the recipe folder, preserves 100 g slider balance and returns from ingredients', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');

  const link = page.locator('#recipes-landing a[href="/baseline-natural-skincare/recipes/testing-lip-balm"]');
  await expect(link).toContainText('Lip/ balm');
  await expect(link).not.toHaveAttribute('data-recipe-id', /.+/);

  await link.click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h1')).toHaveText('Lip/ balm');
  await expect(page.locator('#side-nav')).toHaveCount(0);
  await expect(page.locator('.side-recipe-nav')).toHaveCount(0);

  await page.locator('#r12ButterCharacter').evaluate((el) => {
    el.value = '15';
    el.dispatchEvent(new Event('input', { bubbles:true }));
  });
  await page.locator('#r12Structure').evaluate((el) => {
    el.value = '4';
    el.dispatchEvent(new Event('input', { bubbles:true }));
  });

  await expect(page.locator('[data-formula-key="mango"]')).toHaveText('10 g');
  await expect(page.locator('[data-formula-key="kokum"]')).toHaveText('15 g');
  await expect(page.locator('[data-formula-key="candelilla"]')).toHaveText('4 g');
  await expect(page.locator('[data-formula-key="apricot"]')).toHaveText('24.5 g');

  const total = await page.locator('[data-formula-key]').evaluateAll((els) =>
    els.reduce((sum, el) => sum + Number.parseFloat(el.textContent || '0'), 0)
  );
  expect(total).toBeCloseTo(100, 6);

  await page.locator('#r12Reset').click();
  await expect(page.locator('[data-formula-key="mango"]')).toHaveText('15 g');
  await expect(page.locator('[data-formula-key="kokum"]')).toHaveText('10 g');
  await expect(page.locator('[data-formula-key="candelilla"]')).toHaveText('3 g');
  await expect(page.locator('[data-formula-key="apricot"]')).toHaveText('25.5 g');

  await page.locator('a[data-ingredient="ing-kokum-butter"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/kokum-butter$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-kokum-butter')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('#r12 h1')).toHaveText('Lip/ balm');
  await expect(page.locator('#side-nav')).toHaveCount(0);
  await expect(page.locator('.side-recipe-nav')).toHaveCount(0);
});

test('Skincare recipe UX keeps direct recipe routes focused without a side navigation', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/calming-shave-gel');

  const card = page.locator('#r8');
  await expect(card).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);

  const state = await page.evaluate(() => ({
    scriptPresent: Array.from(document.scripts).some((script) =>
      String(script.src || '').includes('/systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js')
    ),
    runtimeActive: window.__BASELINE_SKINCARE_RECIPE_UX_20260906__ === true,
    title: document.querySelector('#r8 h3')?.textContent?.trim() || '',
    slug: document.querySelector('#r8')?.getAttribute('data-recipe-slug') || ''
  }));

  expect(state).toEqual({
    scriptPresent: true,
    runtimeActive: true,
    title: 'Calming Shave Gel',
    slug: 'calming-shave-gel'
  });

  await expect(card.locator('.recipe-details-intro')).toBeHidden();
  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
  await expect(page.locator('#side-nav')).toHaveCount(0);
});

test('ordinary Skincare recipe routes remain single-recipe views after refresh', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  await expect(page.locator('#r2')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);

  await page.reload();

  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-oil-cleanser$/);
  await expect(page.locator('#r2')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);
});

test('recipe ingredient links use canonical records and Back and Forward restore the correct views', async ({ page }) => {
  const recipeUrl = '/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend';
  const ingredientUrl = '/baseline-natural-skincare/ingredient-library/jojoba-oil';

  await page.goto(recipeUrl);
  const jojoba = page.locator('#r6 a.ing-link[data-ingredient="ing-jojoba"]').first();
  await expect(jojoba).toHaveAttribute('href', ingredientUrl);

  await jojoba.click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-jojoba')).toBeVisible();
  await expect(page.locator('#ing-jojoba h3')).toContainText('Jojoba Oil');
  await expect(page.locator('.bl-homebar')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-massage-oil-blend$/);
  await expect(page.locator('#r6')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-jojoba')).toBeVisible();

  await page.reload();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-jojoba')).toBeVisible();
  await expect(page.locator('#ing-jojoba h3')).toContainText('Jojoba Oil');
});

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-jojoba')).toBeVisible();
});

test('recipe overview Back and Forward follow the actual recipe sequence', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes-landing')).toBeVisible();

  await page.locator('#recipes-landing a[data-recipe-id="r6"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-massage-oil-blend$/);
  await expect(page.locator('#r6')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes$/);
  await expect(page.locator('#recipes-landing')).toBeVisible();

  await page.locator('#recipes-landing a[data-recipe-id="r2"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-oil-cleanser$/);
  await expect(page.locator('#r2')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes$/);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-oil-cleanser$/);
  await expect(page.locator('#r2')).toBeVisible();
  await expect(page.locator('#side-nav')).toHaveCount(0);
});

test('legacy ingredient aliases redirect to their canonical records', async ({ page }) => {
  const cases = [
    ['castor', 'castor-oil', 'ing-castor', 'Castor Oil'],
    ['cucumber', 'cucumber-seed-oil', 'ing-cucumber', 'Cucumber Seed Oil'],
    ['jojoba', 'jojoba-oil', 'ing-jojoba', 'Jojoba Oil'],
    ['shea', 'shea-butter', 'ing-shea', 'Shea Butter']
  ];

  for (const [alias, canonical, ingredientId, title] of cases) {
    await page.goto('/baseline-natural-skincare/ingredient-library/' + alias);
    expect(new URL(page.url()).pathname).toBe('/baseline-natural-skincare/ingredient-library/' + canonical);
    await expect(page.locator('#ingredients')).toHaveClass(/active/);
    await expect(page.locator('#' + ingredientId)).toBeVisible();
    await expect(page.locator('#' + ingredientId + ' h3')).toContainText(title);
    await expect(page.locator('.bl-homebar')).toBeVisible();
  }
});
