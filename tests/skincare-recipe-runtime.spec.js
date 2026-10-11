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

test('Skincare Details tab retains authored detail content after the presentation cleanup', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');

  const card = page.locator('#r3');
  await card.locator('[data-recipe-subtab="details"]').click();

  await expect(card).toHaveAttribute('data-recipe-view', 'details');
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
  await expect(card.locator('.recipe-detail-block')).toHaveCount(6);
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'Purpose' })).toBeVisible();
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'Formula Profile' })).toBeVisible();
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'How the Formulation Works' })).toBeVisible();
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'Design Rationale' })).toBeVisible();
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'Variables & Fixed Elements' })).toBeVisible();
  await expect(card.locator('.recipe-detail-block').filter({ hasText:'Limitations & Trade-offs' })).toBeVisible();
  await expect(card.getByText('Barrier-first balm with a high-glide, protective finish.', { exact:false })).toBeVisible();
  await expect(card.getByText('100 g balm. One batch;', { exact:false })).toBeVisible();
});

test('Oil Cleanser is authored as one two-slider formula before external JavaScript runs', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser', { waitUntil:'load' });

  const card = page.locator('#r2');
  await expect(card).toBeVisible();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
  await expect(card.locator('.variant-switcher, .variant-panel, .variant-tab')).toHaveCount(0);
  await expect(card.locator('.glide-controller')).toHaveAttribute('data-slider-count','2');
  await expect(card.locator('.glide-control-main')).toHaveCount(2);
  await expect(card.locator('#r2CleansingPull')).toBeVisible();
  await expect(card.locator('#r2BarrierRichness')).toBeVisible();
  await expect(card.locator('#r2PullLandmarks option[value="0"]')).toHaveAttribute('label','Reactive');
  await expect(card.locator('#r2PullLandmarks option[value="10"]')).toHaveAttribute('label','Balanced');
  await expect(card.locator('#r2BarrierLandmarks option[value="18"]')).toHaveAttribute('label','Enhanced Barrier');
});

test('Oil Cleanser Details has one coherent formula description without duplicate variant controls', async ({ page }) => {
  await page.route('**/*', route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\.js$/i.test(pathname)) return route.abort();
    return route.continue();
  });

  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser?view=details', { waitUntil:'load' });

  const card = page.locator('#r2');
  await expect(card).toBeVisible();
  await expect(card).toHaveAttribute('data-recipe-view','details');
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
  await expect(card.locator('.recipe-detail-block')).toHaveCount(6);
  await expect(card.locator('.variant-switcher, .recipe-details-variant-field, .recipe-variant-tag')).toHaveCount(0);
  await expect(card.getByText('Reactive is the 0% castor / 0% olive point', { exact:false })).toBeVisible();
  await expect(card.getByText('Enhanced Barrier is the 10% castor / 18% olive reference point', { exact:false })).toBeVisible();
});

test('Oil Cleanser sliders continuously reproduce Reactive, Balanced and Enhanced Barrier reference formulas', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  const card = page.locator('#r2');

  const expectAmounts = async (safflower, castor, olive) => {
    await expect(card.locator('.r2-safflower-amt')).toContainText(safflower + ' ml');
    await expect(card.locator('.r2-castor-amt')).toContainText(castor + ' ml');
    await expect(card.locator('.r2-olive-amt')).toContainText(olive + ' ml');
    const total = await card.locator('.r2-safflower-amt, .r2-castor-amt, .r2-olive-amt').evaluateAll((els) =>
      els.reduce((sum, el) => sum + Number.parseFloat(el.textContent || '0'), 0)
    );
    expect(total).toBeCloseTo(100, 6);
  };

  await expectAmounts('90','10','0');

  await card.locator('#r2CleansingPull').evaluate((el) => {
    el.value='0';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });
  await card.locator('#r2BarrierRichness').evaluate((el) => {
    el.value='0';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });
  await expectAmounts('100','0','0');

  await card.locator('#r2CleansingPull').evaluate((el) => {
    el.value='10';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });
  await card.locator('#r2BarrierRichness').evaluate((el) => {
    el.value='18';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });
  await expectAmounts('72','10','18');
});

test('Restorative Hydration Layer keeps a 100% formula across glycerin and inulin controls', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/restorative-hydration-layer');
  const card = page.locator('#r7');
  await expect(card.locator('.glide-controller')).toHaveAttribute('data-slider-count','2');

  await card.locator('#r7Glycerin').evaluate((el) => {
    el.value='30';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });
  await card.locator('#r7Inulin').evaluate((el) => {
    el.value='5';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });

  await expect(card.locator('.r7-water-amt')).toHaveText('65 g');
  await expect(card.locator('.r7-glycerin-amt')).toHaveText('30 g');
  await expect(card.locator('.r7-inulin-amt')).toHaveText('5 g');

  const total = await card.locator('.r7-water-amt, .r7-glycerin-amt, .r7-inulin-amt').evaluateAll((els) =>
    els.reduce((sum, el) => sum + Number.parseFloat(el.textContent || '0'), 0)
  );
  expect(total).toBeCloseTo(100, 6);
});

test('Skin Soft Massage Oil apricot control preserves the fixed squalane and coconut phases', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/skin-soft-massage-oil');
  const card = page.locator('#r15');
  await expect(card.locator('.glide-controller')).toHaveAttribute('data-slider-count','1');

  await expect(card.locator('.r15-squalane-amt')).toContainText('45 g');
  await expect(card.locator('.r15-jojoba-amt')).toContainText('35 g');
  await expect(card.locator('.r15-apricot-amt')).toContainText('0 g');
  await expect(card.locator('.r15-coconut-amt')).toContainText('20 g');

  await card.locator('#r15Apricot').evaluate((el) => {
    el.value='20';
    el.dispatchEvent(new Event('input',{ bubbles:true }));
  });

  await expect(card.locator('.r15-squalane-amt')).toContainText('45 g');
  await expect(card.locator('.r15-jojoba-amt')).toContainText('15 g');
  await expect(card.locator('.r15-apricot-amt')).toContainText('20 g');
  await expect(card.locator('.r15-coconut-amt')).toContainText('20 g');

  const total = await card.locator('.r15-squalane-amt, .r15-jojoba-amt, .r15-apricot-amt, .r15-coconut-amt').evaluateAll((els) =>
    els.reduce((sum, el) => sum + Number.parseFloat(el.textContent || '0'), 0)
  );
  expect(total).toBeCloseTo(100, 6);
});

test('legacy Oil Cleanser variant URLs migrate to slider landmarks and remove obsolete variant state', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser?variant=enhanced');
  const card = page.locator('#r2');
  await expect(card.locator('#r2CleansingPull')).toHaveValue('10');
  await expect(card.locator('#r2BarrierRichness')).toHaveValue('18');
  await expect.poll(() => new URL(page.url()).searchParams.get('variant')).toBeNull();
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
  await expect(controller).toHaveAttribute('data-slider-count', '2');
  await expect(controller.locator('.glide-explain-title')).toHaveText('Overall Feel');
  await expect(controller.locator('.glide-explain-title')).toHaveCount(1);
  await expect(controller.locator('.glide-breakdown:visible')).toHaveCount(0);
  await expect(controller.locator('.glide-variable-help, .recipe-slider-instruction')).toHaveCount(0);
  await expect(controller.locator('.glide-value-bubble')).toHaveCount(0);

  const layout = await controller.evaluate((el) => {
    const controllerRect = el.getBoundingClientRect();
    const mains = Array.from(el.querySelectorAll(':scope > .glide-control-main')).map((node) => {
      const rect = node.getBoundingClientRect();
      return { x:rect.x, y:rect.y, width:rect.width, bottom:rect.bottom };
    });
    const feel = el.querySelector(':scope > .glide-control-explainer')?.getBoundingClientRect();
    const label = el.querySelector('.glide-label')?.getBoundingClientRect();
    const readout = el.querySelector('.glide-readout')?.getBoundingClientRect();
    const scaleSpans = Array.from(el.querySelectorAll('.glide-scale span')).map((span) => {
      const cs = getComputedStyle(span);
      return { whiteSpace:cs.whiteSpace, height:span.getBoundingClientRect().height, lineHeight:parseFloat(cs.lineHeight) || 0 };
    });
    return {
      controller: { width:controllerRect.width },
      mains,
      feel: feel ? { x:feel.x, y:feel.y, width:feel.width } : null,
      label: label ? { top:label.top, bottom:label.bottom } : null,
      readout: readout ? { top:readout.top, bottom:readout.bottom } : null,
      scaleSpans
    };
  });

  expect(layout.mains).toHaveLength(2);
  expect(layout.feel).not.toBeNull();
  for (const main of layout.mains) {
    expect(main.width).toBeGreaterThan(layout.controller.width * 0.4);
    expect(main.width).toBeLessThan(layout.controller.width * 0.55);
  }
  expect(Math.abs(layout.mains[0].y - layout.mains[1].y)).toBeLessThan(3);
  expect(layout.feel.width).toBeGreaterThan(layout.controller.width * 0.9);
  expect(layout.feel.y).toBeGreaterThanOrEqual(Math.max(...layout.mains.map((main) => main.bottom)) - 1);
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
