const { test, expect } = require('@playwright/test');

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

test('recipe ingredient links use canonical records and browser Back and Forward restore the correct views', async ({ page }) => {
  const recipeUrl = '/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend';
  const ingredientUrl = '/baseline-natural-skincare/ingredient-library/jojoba-oil';

  await page.goto(recipeUrl);
  const jojoba = page.locator('#r6 a.ing-link[data-ingredient="ing-jojoba"]').first();
  await expect(jojoba).toHaveAttribute('href', ingredientUrl);

  await jojoba.click();
  await expect(page).toHaveURL(new RegExp(ingredientUrl.replace(/\//g, '\\/') + '$'));
  await expect(page.locator('h1')).toContainText('Jojoba Oil');

  await page.goBack();
  await expect(page).toHaveURL(new RegExp(recipeUrl.replace(/\//g, '\\/') + '$'));
  await expect(page.locator('#r6')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);

  await page.goForward();
  await expect(page).toHaveURL(new RegExp(ingredientUrl.replace(/\//g, '\\/') + '

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
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
    ['castor', 'castor-oil', 'Castor Oil'],
    ['cucumber', 'cucumber-seed-oil', 'Cucumber Seed Oil'],
    ['jojoba', 'jojoba-oil', 'Jojoba Oil'],
    ['shea', 'shea-butter', 'Shea Butter']
  ];

  for (const [alias, canonical, title] of cases) {
    await page.goto('/baseline-natural-skincare/ingredient-library/' + alias);
    await expect(page).toHaveURL(new RegExp('/baseline-natural-skincare/ingredient-library/' + canonical + '
));
  await expect(page.locator('h1')).toContainText('Jojoba Oil');

  await page.reload();
  await expect(page).toHaveURL(new RegExp(ingredientUrl.replace(/\//g, '\\/') + '

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy ingredient aliases redirect to their canonical records', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/ingredient-library/jojoba');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});
));
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy ingredient aliases redirect to their canonical records', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/ingredient-library/jojoba');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});
));
    await expect(page.locator('h1')).toContainText(title);
  }
});
));
  await expect(page.locator('h1')).toContainText('Jojoba Oil');

  await page.reload();
  await expect(page).toHaveURL(new RegExp(ingredientUrl.replace(/\//g, '\\/') + '

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy ingredient aliases redirect to their canonical records', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/ingredient-library/jojoba');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});
));
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});

test('legacy ingredient aliases redirect to their canonical records', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/ingredient-library/jojoba');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil$/);
  await expect(page.locator('h1')).toContainText('Jojoba Oil');
});
