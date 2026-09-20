const { test, expect } = require('@playwright/test');

test('Testing Lip/ balm opens from the recipe folder, preserves 100 g slider balance and returns from ingredients', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');

  const link = page.locator('#recipes-landing a[href="/baseline-natural-skincare/recipes/testing-lip-balm"]');
  await expect(link).toContainText('Lip/ balm');
  await expect(link).not.toHaveAttribute('data-recipe-id', /.+/);

  await link.click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('.bl-homebar')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3')).toHaveText('Lip/ balm');
  await expect(page.locator('#r12')).toHaveClass(/recipe-universal-template/);
  await expect(page.locator('#r12 .recipe-subtabs')).toBeVisible();
  const adjustments = page.locator('#r12 .recipe-adjustments-toggle');
  await expect(adjustments).toBeVisible();
  await adjustments.click();
  await expect(page.locator('#r12 .glide-controller')).toBeVisible();
  await expect(page.locator('#r12 .glide-explain-title')).toHaveText('Overall Feel');
  await expect(page.locator('#r12 .glide-explain-title')).toHaveCount(1);
  await expect(page.locator('#r12 .glide-variable-help, #r12 .recipe-slider-instruction')).toHaveCount(0);
  await expect(page.locator('#r12 .glide-breakdown:visible')).toHaveCount(0);
  await expect(page.locator('#r12Reset')).toHaveCount(0);

  const lipSliderLayout = await page.locator('#r12 .glide-controller').evaluate((controller) => {
    const mains = Array.from(controller.querySelectorAll('.glide-control-main')).map((el) => {
      const r = el.getBoundingClientRect();
      return { x:r.x, y:r.y, width:r.width, height:r.height, right:r.right, bottom:r.bottom };
    });
    const feel = controller.querySelector('.glide-control-explainer')?.getBoundingClientRect();
    return {
      sliderCount: controller.getAttribute('data-slider-count'),
      mains,
      feel: feel ? { x:feel.x, y:feel.y, width:feel.width, height:feel.height } : null
    };
  });
  expect(lipSliderLayout.sliderCount).toBe('2');
  expect(lipSliderLayout.mains).toHaveLength(2);
  expect(Math.abs(lipSliderLayout.mains[0].width - lipSliderLayout.mains[1].width)).toBeLessThan(3);
  expect(lipSliderLayout.mains[1].x).toBeGreaterThanOrEqual(lipSliderLayout.mains[0].right - 1);
  expect(lipSliderLayout.feel).not.toBeNull();
  expect(lipSliderLayout.feel.y).toBeGreaterThanOrEqual(Math.max(...lipSliderLayout.mains.map((r) => r.bottom)) - 1);

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

  const defaultButton = page.locator('#r12 .slider-default-btn');
  await expect(defaultButton).toHaveText('Reset to recipe default');
  const defaultRadius = await defaultButton.evaluate((el) => parseFloat(getComputedStyle(el).borderRadius));
  expect(defaultRadius).toBeGreaterThan(10);
  await defaultButton.click();
  await expect(page.locator('[data-formula-key="mango"]')).toHaveText('15 g');
  await expect(page.locator('[data-formula-key="kokum"]')).toHaveText('10 g');
  await expect(page.locator('[data-formula-key="candelilla"]')).toHaveText('3 g');
  await expect(page.locator('[data-formula-key="apricot"]')).toHaveText('25.5 g');

  const methodSteps = page.locator('#r12 h4 + ol > li');
  await expect(methodSteps.nth(1).locator('.method-amt')).toHaveCount(0);
  await expect(methodSteps.nth(2).locator('.method-amt')).toHaveCount(4);
  await expect(methodSteps.nth(2)).toContainText('Cocoa Butter');
  await expect(methodSteps.nth(2)).toContainText('Mango Butter');
  await expect(methodSteps.nth(2)).toContainText('Kokum Butter');
  await expect(methodSteps.nth(2)).toContainText('Candelilla Wax');
  await expect(methodSteps.nth(3).locator('.method-amt')).toHaveCount(3);
  await expect(methodSteps.nth(3)).toContainText('Apricot Kernel Oil');
  await expect(methodSteps.nth(3)).toContainText('Avocado Oil');
  await expect(methodSteps.nth(3)).toContainText('Red Raspberry Seed Oil');
  await expect(methodSteps.nth(4).locator('.method-amt')).toHaveCount(1);
  await expect(methodSteps.nth(4)).toContainText('Vitamin E');
  const allMethodPills = await page.locator('#r12 .method-amt').allTextContents();
  for (const name of ['Cocoa Butter','Mango Butter','Kokum Butter','Candelilla Wax','Apricot Kernel Oil','Avocado Oil','Red Raspberry Seed Oil','Vitamin E']) {
    expect(allMethodPills.filter((text) => text.includes(name))).toHaveLength(1);
  }

  await page.locator('a[data-ingredient="ing-kokum-butter"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/kokum-butter$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-kokum-butter')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('.bl-homebar')).toBeVisible();
  await expect(page.locator('#r12 h3')).toHaveText('Lip/ balm');
  await expect(page.locator('#r12')).toHaveClass(/recipe-universal-template/);
  await expect(page.locator('#side-nav')).toHaveCount(0);
  await expect(page.locator('.side-recipe-nav')).toHaveCount(0);
});

test('universal slider template keeps Restorative Hydration Layer text separated and Overall Feel below the slider', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/restorative-hydration-layer');
  const adjustments = page.locator('#r7 .recipe-adjustments-toggle');
  await adjustments.click();

  const controller = page.locator('#r7 .glide-controller');
  await expect(controller).toBeVisible();
  await expect(controller).toHaveAttribute('data-slider-count', '1');
  await expect(controller.locator('.glide-explain-title')).toHaveText('Overall Feel');
  await expect(controller.locator('.glide-explain-title')).toHaveCount(1);
  await expect(controller.locator('.glide-breakdown:visible')).toHaveCount(0);
  await expect(controller.locator('.glide-variable-help, .recipe-slider-instruction')).toHaveCount(0);

  const layout = await controller.evaluate((el) => {
    const main = el.querySelector('.glide-control-main')?.getBoundingClientRect();
    const feel = el.querySelector('.glide-control-explainer')?.getBoundingClientRect();
    const label = el.querySelector('.glide-label')?.getBoundingClientRect();
    const readout = el.querySelector('.glide-readout')?.getBoundingClientRect();
    return {
      main: main ? { x:main.x, y:main.y, width:main.width, bottom:main.bottom } : null,
      feel: feel ? { x:feel.x, y:feel.y, width:feel.width } : null,
      label: label ? { top:label.top, bottom:label.bottom } : null,
      readout: readout ? { top:readout.top, bottom:readout.bottom } : null
    };
  });

  expect(layout.main).not.toBeNull();
  expect(layout.feel).not.toBeNull();
  expect(Math.abs(layout.main.width - layout.feel.width)).toBeLessThan(3);
  expect(layout.feel.y).toBeGreaterThanOrEqual(layout.main.bottom - 1);
  expect(layout.readout.top).toBeGreaterThanOrEqual(layout.label.bottom - 1);
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
