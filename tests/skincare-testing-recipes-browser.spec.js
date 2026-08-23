const { test, expect } = require('@playwright/test');

const recipes = [
  { id:'r8', slug:'testing-shaving-gel', title:'Shaving Gel Recipe' },
  { id:'r9', slug:'testing-natural-tooth-brightening-powder', title:'Natural Tooth-Brightening Powder Recipe' },
  { id:'r10', slug:'testing-microcurrent-conductive-gel', title:'Microcurrent Conductive Gel Recipe – 40 g' }
];

for (const recipe of recipes) {
  test(`Skincare Testing recipe opens in canonical recipe view: ${recipe.slug}`, async ({ page }) => {
    await page.goto(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    await expect(page.locator('#recipes')).toHaveClass(/active/);
    await expect(page.locator(`#${recipe.id}`)).toBeVisible();
    await expect(page.locator(`#${recipe.id} h3`)).toHaveText(recipe.title);
    await expect(page.locator(`#${recipe.id} .recipe-controls`)).toBeVisible();
    const url = new URL(page.url());
    expect(url.pathname).toBe(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    expect(url.hash).not.toContain('recipes/testing-');
  });
}
