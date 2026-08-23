const { test, expect } = require('@playwright/test');

const recipes = [
  { id:'r8', slug:'testing-shaving-gel', title:'Shaving Gel Recipe' },
  { id:'r9', slug:'testing-natural-tooth-brightening-powder', title:'Natural Tooth-Brightening Powder Recipe' },
  { id:'r10', slug:'testing-microcurrent-conductive-gel', title:'Microcurrent Conductive Gel Recipe – 40 g' }
];

async function expectCanonicalRecipeView(page, recipe) {
  const card = page.locator(`#${recipe.id}`);
  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#routine')).not.toHaveClass(/active/);
  await expect(page.locator('#routine')).toBeHidden();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-open-mode/);
  await expect(card).toBeVisible();
  await expect(card.locator('h3')).toHaveText(recipe.title);
  await expect(card.locator('.recipe-actions')).toBeVisible();
  await expect(card.locator('.back-btn')).toBeVisible();
  await expect(card.locator('.print-btn')).toBeVisible();

  // The established Skincare design creates recipe controls for every recipe,
  // but deliberately keeps them hidden until Recipe Options is opened.
  await expect(card.locator('.recipe-controls')).toHaveCount(1);
  await expect(card.locator('.recipe-controls')).toBeHidden();

  const box = await card.boundingBox();
  expect(box).not.toBeNull();
  expect(box.height).toBeGreaterThan(250);

  const url = new URL(page.url());
  expect(url.pathname).toBe(`/baseline-natural-skincare/recipes/${recipe.slug}`);
  expect(url.hash).not.toContain('recipes/testing-');
  expect(url.hash).not.toContain('-html');
}

for (const recipe of recipes) {
  test(`Skincare Testing recipe opens and survives refresh: ${recipe.slug}`, async ({ page }) => {
    await page.goto(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    await expectCanonicalRecipeView(page, recipe);

    await page.reload();
    await expectCanonicalRecipeView(page, recipe);
  });
}

test('Testing recipes are grouped under the Testing subcategory', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#recipes-landing')).toBeVisible();
  await expect(page.locator('#routine')).toBeHidden();

  const testingHeading = page.locator('#recipes-landing h4').filter({ hasText: /^Testing$/ });
  await expect(testingHeading).toHaveCount(1);
  await expect(testingHeading).toBeVisible();

  // The category renderer places the category list directly after its heading.
  const testingLinks = page.locator('#recipes-landing h4 + ul a.recipe-open');
  await expect(testingLinks).toHaveCount(3);
  const ids = await testingLinks.evaluateAll((links) => links.map((link) => link.dataset.recipeId).sort());
  expect(ids).toEqual(['r10','r8','r9']);
});

test('Testing recipe links open through the normal recipe overview router', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#recipes-landing')).toBeVisible();

  for (const recipe of recipes) {
    const link = page.locator(`#recipes-landing a.recipe-open[data-recipe-id="${recipe.id}"]`);
    await expect(link).toBeVisible();
    await link.click();
    await expectCanonicalRecipeView(page, recipe);

    await page.locator(`#${recipe.id} .back-btn`).click();
    await expect(page.locator('#recipes-landing')).toBeVisible();
    await expect(page.locator('#routine')).toBeHidden();
  }
});

test('leaving My Routine for Recipes hides Routine Log and Calendar completely', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/my-routine/log');

  // My Routine is intentionally made visible during first paint by root route
  // markers; it does not need the generic .active class at that point.
  await expect(page.locator('#routine')).toBeVisible();
  await expect(page.locator('#routine .routine-subtabs')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('data-initial-skincare-tab', 'routine');

  await page.locator('.tab[data-target="recipes"]').click();

  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#recipes-landing')).toBeVisible();
  await expect(page.locator('#routine')).not.toHaveClass(/active/);
  await expect(page.locator('#routine')).toBeHidden();
  await expect(page.locator('#routine .routine-subtabs')).toBeHidden();
  await expect(page.locator('#routine .routine-calendar-card')).toBeHidden();

  const rootState = await page.locator('html').evaluate((html) => ({
    initialTab: html.getAttribute('data-initial-skincare-tab'),
    initialRoutineView: html.getAttribute('data-initial-routine-view')
  }));
  expect(rootState).toEqual({ initialTab:null, initialRoutineView:null });
  expect(new URL(page.url()).pathname).toBe('/baseline-natural-skincare/recipes');
});
