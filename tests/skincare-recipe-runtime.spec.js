const { test, expect } = require('@playwright/test');


test('Skincare first-paint lock releases on tab interaction before full page load', async ({ page }) => {
  let releaseLoad;
  const loadGate = new Promise((resolve) => { releaseLoad = resolve; });

  await page.route('**/__baseline-delay-load.png', async (route) => {
    await loadGate;
    await route.fulfill({ status:204, body:'' });
  });

  await page.addInitScript(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const image = document.createElement('img');
      image.src = '/__baseline-delay-load.png';
      image.alt = '';
      image.hidden = true;
      document.body.appendChild(image);
    }, { once:true });
  });

  await page.goto('/baseline-natural-skincare/system', { waitUntil:'domcontentloaded' });
  await expect(page.locator('#baseline-skincare-route-first-paint-style')).toHaveCount(1);

  await page.locator('.tab[data-target="recipes"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes$/);
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#baseline-skincare-route-first-paint-style')).toHaveCount(0);

  releaseLoad();
  await page.waitForLoadState('load');

  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes$/);
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
});

test('Skincare Details clean route paints Details before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  await page.goto('/baseline-natural-skincare/recipes/microcurrent-glide-gel?view=details', { waitUntil:'load' });

  await expect(page.locator('html')).toHaveAttribute('data-initial-recipe-view','details');
  await expect(page.locator('#r10')).toBeVisible();
  await expect(page.locator('#r10 .recipe-details-intro')).toBeVisible();
  await expect(page.locator('#r10 [data-recipe-view-group="standard"]:visible')).toHaveCount(0);
  await expect(page.locator('#r10 [data-recipe-view-group="guidance"]:visible')).toHaveCount(0);
  await expect(page.locator('#r10').locator(':scope > .recipe-adjustments-row')).toBeHidden();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
});

test('Oil Cleanser route applies Details and Reactive before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser?view=details&variant=reactive', { waitUntil:'load' });

  const html = page.locator('html');
  const card = page.locator('#r2');
  await expect(html).toHaveAttribute('data-initial-recipe-view', 'details');
  await expect(html).toHaveAttribute('data-initial-recipe-variant', 'reactive');
  await expect(html).not.toHaveAttribute('data-initial-recipe-pending', '1');
  await expect(card).toBeVisible();
  await expect(card).toHaveAttribute('data-recipe-view', 'details');
  await expect(card.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected', 'true');
  await expect(card.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected', 'false');
  await expect(card.locator('.variant-tab[data-variant="reactive"]')).toHaveAttribute('aria-selected', 'true');
  await expect(card.locator('.variant-tab[data-variant="balanced"]')).toHaveAttribute('aria-selected', 'false');
  await expect(card.locator('.variant-panel[data-variant-panel="reactive"]')).not.toHaveAttribute('hidden', '');
  await expect(card.locator('.variant-panel[data-variant-panel="balanced"]')).toHaveAttribute('hidden', '');
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
});

test('Oil Cleanser route-state matrix survives reload for every view and variant', async ({ page }) => {
  const variants = ['reactive', 'balanced', 'enhanced'];
  const views = ['standard', 'details', 'guidance', 'show-all'];

  for (const variant of variants) {
    for (const view of views) {
      const params = new URLSearchParams();
      if (view !== 'standard') params.set('view', view);
      params.set('variant', variant);
      const url = '/baseline-natural-skincare/recipes/anhydrous-oil-cleanser?' + params.toString();

      await page.goto(url, { waitUntil:'domcontentloaded' });
      const card = page.locator('#r2');
      await expect(card, url).toBeVisible();
      await expect(page.locator('#recipes .recipe-page:visible'), url).toHaveCount(1);
      await expect(card.locator('.variant-tab[data-variant="' + variant + '"]'), url)
        .toHaveAttribute('aria-selected', 'true');
      await expect(card.locator('[data-recipe-subtab="' + view + '"]'), url)
        .toHaveAttribute('aria-selected', 'true');

      await page.reload({ waitUntil:'domcontentloaded' });
      await expect(card, url + ' after reload').toBeVisible();
      await expect(card.locator('.variant-tab[data-variant="' + variant + '"]'), url + ' after reload')
        .toHaveAttribute('aria-selected', 'true');
      await expect(card.locator('[data-recipe-subtab="' + view + '"]'), url + ' after reload')
        .toHaveAttribute('aria-selected', 'true');

      const current = new URL(page.url());
      expect(current.pathname, url).toBe('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
      expect(current.searchParams.get('variant'), url).toBe(variant);
      expect(current.searchParams.get('view'), url).toBe(view === 'standard' ? null : view);
    }
  }
});

test('Lip Balm direct route is complete before external JavaScript runs', async ({ page }) => {
  const requested = [];
  page.on('request', request => requested.push(new URL(request.url()).pathname));

  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  await page.goto('/baseline-natural-skincare/recipes/testing-lip-balm', { waitUntil:'load' });

  expect(new URL(page.url()).pathname).toBe('/baseline-natural-skincare/recipes/testing-lip-balm');
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes-landing')).toBeHidden();
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3')).toHaveText('Comfort Barrier Balm');
  await expect(page.locator('#r12 #r12ButterCharacter')).toBeVisible();
  await expect(page.locator('#r12 #r12Structure')).toBeVisible();

  // The final recipe chrome must already exist with external JS blocked.
  await expect(page.locator('#r12 .recipe-meta-row')).toBeVisible();
  await expect(page.locator('#r12 .recipe-meta-item')).toHaveCount(1);
  await expect(page.locator('#r12 .recipe-meta-item')).toHaveText('Batch: 1×');
  await expect(page.locator('#r12 .recipe-meta-row')).not.toContainText('Yield:');
  await expect(page.locator('#r12 .recipe-adjustments-toggle')).toBeVisible();
  await expect(page.locator('#r12 .recipe-adjustments-toggle')).toHaveAttribute('aria-expanded','false');
  await expect(page.locator('#r12 .recipe-adjustments-panel')).toBeHidden();
  await expect(page.locator('#r12 .recipe-subtabs')).toBeVisible();
  await expect(page.locator('#r12 .recipe-subtab')).toHaveCount(4);
  await expect(page.locator('#r12 [data-recipe-subtab="standard"]')).toHaveText('Recipe');
  await expect(page.locator('#r12 [data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected','true');
  await expect(page.locator('#r12 .recipe-details-intro')).toBeHidden();
  await expect(page.locator('#r12 [data-recipe-view-group="guidance"].recipe-view-hidden').first()).toBeHidden();

  // Slider layout/save UI is authored, not installed after load.
  await expect(page.locator('#r12 .glide-controller')).toHaveAttribute('data-slider-count','2');
  await expect(page.locator('#r12 .glide-control-stack')).toHaveCount(0);
  await expect(page.locator('#r12 .glide-explain-title')).toHaveText('Overall Feel');
  await expect(page.locator('#r12 .slider-save-row')).toBeVisible();
  await expect(page.locator('#r12 .slider-save-btn').filter({ hasText:'Save as my setting' })).toBeVisible();
  await expect(page.locator('#r12 .slider-default-btn').filter({ hasText:'Reset to recipe default' })).toBeVisible();
  await expect(page.locator('#r12 .glide-breakdown')).toBeHidden();

  await expect(page.locator('#r12')).not.toHaveAttribute('data-external-recipe-placeholder', '1');
  expect(requested).not.toContain('/systems/baseline-natural-skincare/recipes/testing-lip-balm.html');
});

test('Embedded Testing Comfort Barrier Balm preserves 100 g slider balance and returns from ingredients', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes');

  const link = page.locator('#recipes-landing a[href="/baseline-natural-skincare/recipes/testing-lip-balm"]');
  await expect(link).toContainText('Comfort Barrier Balm');
  await expect(link).toHaveAttribute('data-recipe-id', 'r12');

  await link.click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('.bl-homebar')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#r12')).toBeVisible();
  await expect(page.locator('#r12 h3')).toHaveText('Comfort Barrier Balm');
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
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/kokum-butter\?filter=r12$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r12');
  await expect(page.locator('#ing-kokum-butter')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/testing-lip-balm$/);
  await expect(page.locator('.bl-homebar')).toBeVisible();
  await expect(page.locator('#r12 h3')).toHaveText('Comfort Barrier Balm');
  await expect(page.locator('#r12')).toHaveClass(/recipe-universal-template/);
  await expect(page.locator('#side-nav')).toHaveCount(0);
  await expect(page.locator('.side-recipe-nav')).toHaveCount(0);
});

test('universal slider template keeps Restorative Hydration Layer text separated and Overall Feel below the slider', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/restorative-hydration-layer');
  const adjustments = page.locator('#r7 .recipe-adjustments-toggle');
  await expect(adjustments).toHaveAttribute('aria-expanded', 'false');

  const controller = page.locator('#r7 .glide-controller');
  await expect(controller).toBeVisible();
  await expect(controller).toHaveAttribute('data-slider-count', '1');
  await expect(controller.locator('.glide-explain-title')).toHaveText('Overall Feel');
  await expect(controller.locator('.glide-explain-title')).toHaveCount(1);
  await expect(controller.locator('.glide-breakdown:visible')).toHaveCount(0);
  await expect(controller.locator('.glide-variable-help, .recipe-slider-instruction')).toHaveCount(0);
  await expect(controller.locator('.glide-value-bubble')).toHaveCount(0);

  const layout = await controller.evaluate((el) => {
    const controllerRect = el.getBoundingClientRect();
    const main = el.querySelector(':scope > .glide-control-main')?.getBoundingClientRect();
    const feel = el.querySelector(':scope > .glide-control-explainer')?.getBoundingClientRect();
    const label = el.querySelector('.glide-label')?.getBoundingClientRect();
    const readout = el.querySelector('.glide-readout')?.getBoundingClientRect();
    const scaleSpans = Array.from(el.querySelectorAll('.glide-scale span')).map((span) => {
      const cs = getComputedStyle(span);
      return { whiteSpace:cs.whiteSpace, height:span.getBoundingClientRect().height, lineHeight:parseFloat(cs.lineHeight) || 0 };
    });
    return {
      controller: { width:controllerRect.width },
      main: main ? { x:main.x, y:main.y, width:main.width, bottom:main.bottom } : null,
      feel: feel ? { x:feel.x, y:feel.y, width:feel.width } : null,
      label: label ? { top:label.top, bottom:label.bottom } : null,
      readout: readout ? { top:readout.top, bottom:readout.bottom } : null,
      scaleSpans
    };
  });

  expect(layout.main).not.toBeNull();
  expect(layout.feel).not.toBeNull();
  expect(layout.main.width).toBeGreaterThan(layout.controller.width * 0.9);
  expect(Math.abs(layout.main.width - layout.feel.width)).toBeLessThan(3);
  expect(layout.feel.y).toBeGreaterThanOrEqual(layout.main.bottom - 1);
  expect(layout.readout.top).toBeGreaterThanOrEqual(layout.label.bottom - 1);
  for (const scale of layout.scaleSpans) {
    expect(scale.whiteSpace).toBe('nowrap');
    if (scale.lineHeight > 0) expect(scale.height).toBeLessThan(scale.lineHeight * 1.6);
  }
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

  const details = card.locator('.recipe-details-intro');
  await expect(details).toBeHidden();
  await expect(details).toHaveAttribute('hidden', '');
  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(details).toBeVisible();
  await expect(details).not.toHaveAttribute('hidden', '');
  await card.locator('[data-recipe-subtab="standard"]').click();
  await expect(details).toBeHidden();
  await expect(details).toHaveAttribute('hidden', '');
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


test('tooth polishing powder exposes canonical ingredient-library records and filters', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/tooth-polishing-powder');
  const toothLinks = [
    ['ing-white-kaolin', 'white-kaolin-clay'],
    ['ing-sage-leaf-powder', 'sage-leaf-powder'],
    ['ing-peppermint-leaf-powder', 'peppermint-leaf-powder']
  ];
  for (const [ingredientId, slug] of toothLinks) {
    const link = page.locator('#r9 a.ing-link[data-ingredient="' + ingredientId + '"]').first();
    await expect(link).toHaveAttribute('href', '/baseline-natural-skincare/ingredient-library/' + slug + '?filter=r9');
  }

  await page.locator('#r9 a.ing-link[data-ingredient="ing-white-kaolin"]').click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/white-kaolin-clay\?filter=r9$/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r9');
  await expect(page.locator('#ing-white-kaolin')).toBeVisible();
  await expect(page.locator('#ingredients .lib .card:visible')).toHaveCount(3);
});

test('recipe ingredient links use canonical records and Back and Forward restore the correct views', async ({ page }) => {
  const recipeUrl = '/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend';
  const ingredientUrl = '/baseline-natural-skincare/ingredient-library/jojoba-oil?filter=r6';

  await page.goto(recipeUrl);
  const jojoba = page.locator('#r6 a.ing-link[data-ingredient="ing-jojoba"]').first();
  await expect(jojoba).toHaveAttribute('href', ingredientUrl);

  await jojoba.click();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil\?filter=r6$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r6');
  await expect(page.locator('#ing-jojoba')).toBeVisible();
  await expect(page.locator('#ing-jojoba h3')).toContainText('Jojoba Oil');
  await expect(page.locator('.bl-homebar')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/recipes\/anhydrous-massage-oil-blend$/);
  await expect(page.locator('#r6')).toBeVisible();
  await expect(page.locator('#recipes')).toHaveClass(/recipe-focus/);
  await expect(page.locator('#side-nav')).toHaveCount(0);

  await page.goForward();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil\?filter=r6$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ing-jojoba')).toBeVisible();

  await page.reload();
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil\?filter=r6$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r6');
  await expect(page.locator('#ing-jojoba')).toBeVisible();
  await expect(page.locator('#ing-jojoba h3')).toContainText('Jojoba Oil');
});

test('legacy recipe plus ingredient hash URLs are repaired to one canonical ingredient URL', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend#ing-jojoba&filter=r6');
  await expect(page).toHaveURL(/\/baseline-natural-skincare\/ingredient-library\/jojoba-oil\?filter=r6$/);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r6');
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
