const { test, expect } = require('@playwright/test');

const promoted = [
  { id:'r8', slug:'calming-shave-gel', title:'Calming Shave Gel', oldSlug:'testing-shaving-gel' },
  { id:'r9', slug:'tooth-polishing-powder', title:'Tooth Polishing Powder', oldSlug:'testing-natural-tooth-brightening-powder' },
  { id:'r10', slug:'microcurrent-glide-gel', title:'Microcurrent Glide Gel', oldSlug:'testing-microcurrent-conductive-gel' }
];
const testing = [
  { id:'r11', slug:'testing-soap-free-powdered-hair-wash', title:'Soap-Free Powdered Hair Wash' }
];

async function expectCanonicalRecipeView(page, recipe) {
  const card = page.locator(`#${recipe.id}`);
  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#routine')).not.toHaveClass(/active/);
  await expect(page.locator('#routine')).toBeHidden();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-open-mode|recipe-detail-open/);
  await expect(card).toBeVisible();
  await expect(card.locator('h3')).toHaveText(recipe.title);
  await expect(card.locator('.recipe-actions')).toBeVisible();
  await expect(card.locator('.back-btn')).toBeVisible();
  await expect(card.locator('.print-btn')).toBeVisible();
  await expect(card.locator('.recipe-controls')).toHaveCount(1);
  await expect(card.locator('.recipe-controls')).toBeHidden();
  await expect(card.locator('[data-recipe-subtab="standard"]')).toHaveText('Recipe');
  await expect(card.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected', 'true');

  const box = await card.boundingBox();
  expect(box).not.toBeNull();
  expect(box.height).toBeGreaterThan(250);

  const url = new URL(page.url());
  expect(url.pathname).toBe(`/baseline-natural-skincare/recipes/${recipe.slug}`);
  expect(url.hash).not.toContain('-html');
}

for (const recipe of [...promoted, ...testing]) {
  test(`Skincare recipe opens and survives refresh: ${recipe.slug}`, async ({ page }) => {
    await page.goto(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    await expectCanonicalRecipeView(page, recipe);
    await page.reload();
    await expectCanonicalRecipeView(page, recipe);
  });
}

for (const recipe of promoted) {
  test(`promoted recipe migrates its former Testing URL: ${recipe.oldSlug}`, async ({ page }) => {
    await page.goto(`/baseline-natural-skincare/recipes/${recipe.oldSlug}`);
    await expectCanonicalRecipeView(page, recipe);
  });
}

test('only the remaining experimental recipe stays under Testing', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes')).toHaveClass(/active/);
  await expect(page.locator('#recipes-landing')).toBeVisible();
  await expect(page.locator('#routine')).toBeHidden();

  const testingHeading = page.locator('#recipes-landing h4').filter({ hasText: /^Testing$/ });
  await expect(testingHeading).toHaveCount(1);
  const testingLinks = testingHeading.locator('+ ul a.recipe-open');
  await expect(testingLinks).toHaveCount(1);
  await expect(testingLinks.first()).toHaveAttribute('data-recipe-id', 'r11');

  const mainHeading = page.locator('#recipes-landing h4').filter({ hasText: /^Recipes$/ });
  await expect(mainHeading).toHaveCount(1);
  const mainLinks = mainHeading.locator('+ ul a.recipe-open');
  await expect(mainLinks).toHaveCount(8);
  const ids = await mainLinks.evaluateAll((links) => links.map((link) => link.dataset.recipeId).sort());
  expect(ids).toEqual(['r1','r10','r2','r3','r6','r7','r8','r9']);
});

test('Skincare recipe catalogue keeps its Recipes heading and descriptors across reload Back and Forward', async ({ page }) => {
  const expectCatalogue = async () => {
    await expect(page.locator('#recipes')).toHaveClass(/active/);
    await expect(page.locator('#recipes-landing')).toBeVisible();
    await page.waitForFunction(() => globalThis.__BASELINE_SKINCARE_RECIPE_NAV_20260906__ === true);

    const recipesHeading = page.locator('#recipes-landing h4').filter({ hasText:/^Recipes$/ });
    const testingHeading = page.locator('#recipes-landing h4').filter({ hasText:/^Testing$/ });
    await expect(recipesHeading).toHaveCount(1);
    await expect(testingHeading).toHaveCount(1);

    const mainLinks = recipesHeading.locator('+ ul a');
    const testingLinks = testingHeading.locator('+ ul a');
    await expect(mainLinks).toHaveCount(8);
    await expect(testingLinks).toHaveCount(2);

    const mainText = await mainLinks.allTextContents();
    const testingText = await testingLinks.allTextContents();
    for (const text of [...mainText, ...testingText]) {
      expect(text, 'recipe catalogue links keep their descriptor').toContain(' — ');
    }
    expect(mainText.some(text => text.startsWith('Calming Shave Gel — '))).toBe(true);
    expect(mainText.some(text => text.startsWith('Microcurrent Glide Gel — '))).toBe(true);
    expect(mainText.some(text => text.startsWith('Tooth Polishing Powder — '))).toBe(true);
    expect(testingText.some(text => text.startsWith('Lip/ balm — '))).toBe(true);

    return { mainText, testingText };
  };

  await page.goto('/baseline-natural-skincare/recipes', { waitUntil:'domcontentloaded' });
  const initial = await expectCatalogue();

  await page.reload({ waitUntil:'domcontentloaded' });
  const refreshed = await expectCatalogue();
  expect(refreshed).toEqual(initial);

  await page.locator('#recipes-landing a.recipe-open[data-recipe-id="r3"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/protective-touch-balm$/);
  await expect(page.locator('#r3')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes$/);
  expect(await expectCatalogue()).toEqual(initial);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/protective-touch-balm$/);
  await expect(page.locator('#r3')).toBeVisible();

  await page.goBack();
  expect(await expectCatalogue()).toEqual(initial);
});

test('promoted recipes open through the normal recipe overview router', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');
  await expect(page.locator('#recipes-landing')).toBeVisible();

  for (const recipe of promoted) {
    const link = page.locator(`#recipes-landing a.recipe-open[data-recipe-id="${recipe.id}"]`);
    await expect(link).toBeVisible();
    await link.click();
    await expectCanonicalRecipeView(page, recipe);

    await page.locator(`#${recipe.id} .back-btn`).click();
    await expect(page.locator('#recipes-landing')).toBeVisible();
  }
});

test('recipe subtab choice is not carried into the next recipe', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  const first = page.locator('#r2');
  await first.locator('[data-recipe-subtab="details"]').click();
  await expect(first.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected', 'true');

  await first.locator('.back-btn').click();
  await expect(page.locator('#recipes-landing')).toBeVisible();
  await expect(page.locator('#side-nav')).toHaveCount(0);
  await page.locator('#recipes-landing a.recipe-open[data-recipe-id="r3"]').click();
  const next = page.locator('#r3');
  await expect(next).toBeVisible();
  await expect(next.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected', 'true');
  await expect(next.locator('[data-recipe-subtab="standard"]')).toHaveText('Recipe');
});

test('leaving My Routine for Recipes hides Routine Log and Calendar completely', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/system');
  await page.locator('.tab[data-target="routine"]').click();

  await expect(page.locator('#routine')).toHaveClass(/active/);
  await expect(page.locator('#routine')).toBeVisible();
  await expect(page.locator('#routine .routine-subtabs')).toBeVisible();
  await expect(page.locator('.tab[data-target="routine"]')).toHaveAttribute('aria-selected', 'true');

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
