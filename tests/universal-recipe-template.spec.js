const { test, expect } = require('@playwright/test');

async function expectUniversalTabs(card, standardLabel = 'Standard View') {
  const tabs = card.locator('.recipe-subtabs');
  await expect(tabs).toBeVisible();
  await expect(tabs.locator('.recipe-subtab')).toHaveCount(4);
  await expect(tabs.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected', 'true');
  await expect(tabs.locator('[data-recipe-subtab="standard"]')).toHaveText(standardLabel);
  await expect(tabs.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected', 'false');
  await expect(tabs.locator('[data-recipe-subtab="guidance"]')).toHaveAttribute('aria-selected', 'false');
  await expect(tabs.locator('[data-recipe-subtab="show-all"]')).toHaveAttribute('aria-selected', 'false');
  await expect(card.locator('h1,h2,h3,h4').filter({ hasText: /^Standard View$/ })).toHaveCount(0);
}

async function expectDirectRecipeFirstPaint(page, url, targetSelector) {
  if (!page.__baselineRecipeFirstPaintAuditInstalled) {
    page.__baselineRecipeFirstPaintAuditInstalled = true;
    await page.addInitScript(() => {
      window.__baselineRecipeFirstPaintAudit = {
        sawSystem:false,
        sawRecipes:false,
        systemVisibleWhileRecipeGuardActive:false,
        recipeGuardSeen:false
      };

      const check = () => {
        const audit = window.__baselineRecipeFirstPaintAudit;
        if (!audit) return;

        const html = document.documentElement;
        const guardActive = html.getAttribute('data-initial-section') === 'recipes';
        if (guardActive) audit.recipeGuardSeen = true;

        const system = document.getElementById('system');
        const recipes = document.getElementById('recipes');

        if (system) {
          audit.sawSystem = true;
          if (guardActive) {
            const style = getComputedStyle(system);
            if (style.display !== 'none' && style.visibility !== 'hidden') {
              audit.systemVisibleWhileRecipeGuardActive = true;
            }
          }
        }
        if (recipes) audit.sawRecipes = true;
      };

      const observer = new MutationObserver(check);
      observer.observe(document, { childList:true, subtree:true, attributes:true });
      document.addEventListener('DOMContentLoaded', check, { once:false });
      requestAnimationFrame(check);
    });
  }

  await page.goto(url, { waitUntil:'load' });
  await expect(page.locator(targetSelector)).toBeVisible();

  const audit = await page.evaluate(() => window.__baselineRecipeFirstPaintAudit);
  expect(audit.sawSystem, url + ' should contain the System section in the shell').toBe(true);
  expect(audit.sawRecipes, url + ' should contain the Recipes section in the shell').toBe(true);
  expect(audit.recipeGuardSeen, url + ' should activate the recipe first-paint guard').toBe(true);
  expect(
    audit.systemVisibleWhileRecipeGuardActive,
    url + ' must never visibly paint System while resolving a direct recipe route'
  ).toBe(false);

  await expect(page.locator('#system')).toBeHidden();
  await expect(page.locator('#recipes')).toBeVisible();
  await expect(page.locator('html')).not.toHaveAttribute('data-initial-section', 'recipes');
  await expect(page.locator('html')).not.toHaveAttribute('data-initial-recipe-route', '1');
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

test('direct Food and Skincare recipe routes never paint the System section first', async ({ page }) => {
  await expectDirectRecipeFirstPaint(
    page,
    '/baseline-natural-skincare/recipes/protective-touch-balm',
    '#r3'
  );
  await expectDirectRecipeFirstPaint(
    page,
    '/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla',
    '#r4'
  );
});

test('every authored Food and Skincare ingredient source receives exactly one first-use method tag', async ({ page }) => {
  for (const url of ['/baseline-natural-skincare/recipes', '/baseline-food-approach/recipes']) {
    await page.goto(url);
    const cards = page.locator('.recipe-page.recipe-universal-template');
    await expect.poll(async () => cards.count()).toBeGreaterThan(0);

    const audit = await cards.evaluateAll(items => items.map(card => {
      const headings = Array.from(card.querySelectorAll('h2,h3,h4'));
      const ingredients = headings.find(h => /^ingredients\b/i.test((h.textContent || '').trim()));
      const method = headings.find(h => /^method\b/i.test((h.textContent || '').trim()));
      if (!ingredients || !method) {
        return { id:card.id, title:card.querySelector('h3')?.textContent?.trim() || '', error:'missing Ingredients/Method heading' };
      }

      const follows = (a, b) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
      const sectionFor = (li) => {
        let title = 'Ingredients';
        for (const heading of headings) {
          if (heading === ingredients || heading === method) continue;
          if (follows(ingredients, heading) && follows(heading, li)) title = (heading.textContent || '').trim();
        }
        return title;
      };
      const candidate = (li) => {
        if (li.classList.contains('ing-subhead')) return false;
        const section = sectionFor(li);
        if (/^(ingredient roles?|roles?|nutrition|serving ideas?|body\s*&?\s*sensory notes?|storage|notes?|comedogenic considerations?)\b/i.test(section)) return false;
        if (li.dataset.methodStep) return true;
        if (li.querySelector('.amt,.thickness-swap,a.ing-link')) return true;
        const raw = (li.textContent || '').replace(/\s+/g,' ').trim();
        return /\d/.test(raw) && /(?:\b(?:g|kg|ml|l|tbsp|tsp|cups?|drops?|pinch(?:es)?|cloves?|grams?|millilit(?:er|re)s?)\b|%)/i.test(raw);
      };

      const sources = Array.from(card.querySelectorAll('li')).filter(li =>
        follows(ingredients, li) &&
        follows(li, method) &&
        !li.closest('ol') &&
        candidate(li)
      );
      const pills = Array.from(card.querySelectorAll('.method-amt[data-method-ingredient-key]'));
      const pillCounts = new Map();
      pills.forEach(pill => {
        const key = pill.dataset.methodIngredientKey || '';
        pillCounts.set(key, (pillCounts.get(key) || 0) + 1);
      });

      return {
        id:card.id,
        title:card.querySelector('h3')?.textContent?.trim() || '',
        sourceCount:sources.length,
        pillCount:pills.length,
        missingSourceKeys:sources.filter(li => !li.dataset.methodTagKey).map(li => (li.textContent || '').trim()),
        wrongPillCounts:sources
          .filter(li => li.dataset.methodTagKey && pillCounts.get(li.dataset.methodTagKey) !== 1)
          .map(li => ({ text:(li.textContent || '').trim(), count:pillCounts.get(li.dataset.methodTagKey) || 0 })),
        pillsOutsideMethod:pills
          .filter(pill => !pill.closest('ol'))
          .map(pill => (pill.textContent || '').trim())
      };
    }));

    for (const result of audit) {
      expect(result.error, `${url} ${result.id} ${result.title}`).toBeUndefined();
      expect(result.sourceCount, `${url} ${result.id} should expose ingredient sources`).toBeGreaterThan(0);
      expect(result.missingSourceKeys, `${url} ${result.id} missing source tag keys`).toEqual([]);
      expect(result.wrongPillCounts, `${url} ${result.id} missing/duplicate method tags`).toEqual([]);
      expect(result.pillsOutsideMethod, `${url} ${result.id} method pills outside method list`).toEqual([]);
      expect(result.pillCount, `${url} ${result.id} pill/source parity`).toBe(result.sourceCount);
    }
  }
});

test('Protective Touch Balm places ingredients at actual use rather than stale slider-step metadata', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const steps = page.locator('#r3 ol').first().locator(':scope > li');

  await expect(steps.nth(1).locator('.method-amt')).toHaveCount(0);

  await expect(steps.nth(2)).toContainText('Jojoba Oil');
  await expect(steps.nth(2)).toContainText('Castor Oil');
  await expect(steps.nth(2)).toContainText('Carnauba Wax');
  await expect(steps.nth(2)).not.toContainText('Shea Butter');

  await expect(steps.nth(3)).toContainText('Shea Butter');
  await expect(steps.nth(4)).toContainText('Calendula Oil');
  await expect(steps.nth(5)).toContainText('Vitamin E');

  const pills = await page.locator('#r3 .method-amt').allTextContents();
  for (const name of ['Jojoba Oil','Castor Oil','Carnauba Wax','Shea Butter','Calendula Oil','Vitamin E']) {
    expect(pills.filter(text => text.includes(name)), name).toHaveLength(1);
  }
});

test('Food recipes keep repeated water quantities at their authored first-use stages', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla');
  const steps = page.locator('#r4 ol').first().locator(':scope > li');

  await expect(steps.nth(1)).toContainText('2 tbsp water');
  await expect(steps.nth(3)).toContainText(/600 ml water/i);
  await expect(steps.nth(4)).toContainText('1–2 tbsp hot water');

  const waterPills = (await page.locator('#r4 .method-amt').allTextContents()).filter(text => /water/i.test(text));
  expect(waterPills.some(text => /2 tbsp water/i.test(text))).toBe(true);
  expect(waterPills.some(text => /600 ml water/i.test(text))).toBe(true);
  expect(waterPills.some(text => /1\s*[–—-]\s*2 tbsp hot water/i.test(text))).toBe(true);
});

test('Skincare recipe uses segmented variants and compact explanatory sliders in Recipe view', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend');
  const card = page.locator('#r6');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expectUniversalTabs(card, 'Recipe');

  const variants = card.locator('.variant-switcher .variant-tab');
  await expect(variants).toHaveCount(2);
  await expect(variants.filter({ hasText:/^Olive Blend$/ })).toHaveAttribute('aria-selected', 'true');
  await expect(card.locator('.recipe-variant-field')).toHaveCount(0);
  await expect(card.locator('.glide-controller').first()).toBeVisible();
  await expect(card.locator('.recipe-slider-instruction')).toHaveCount(0);
  await expect(card.locator('.glide-variable-help')).toHaveCount(0);
  await expect(card.locator('.glide-explain-title').first()).toHaveText('Overall Feel');
  await expect(card.locator('.glide-breakdown:visible')).toHaveCount(0);
  await expect(card.locator('.glide-value-bubble')).toHaveCount(0);
  await expect(card.locator('.slider-save-btn').filter({ hasText:'Save as my setting' }).first()).toBeVisible();
  await expect(card.locator('.slider-default-btn').filter({ hasText:'Reset to recipe default' }).first()).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();
  await expectAdjustmentsContract(card);

  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('h4').filter({ hasText: /^Ingredients$/ }).first()).toBeHidden();
  await expect(card.locator('.glide-controller').first()).toBeHidden();
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
  await expect(card.locator('.recipe-details-intro h4').filter({ hasText:/^Purpose$/ })).toBeVisible();
  await expect(card.locator('.recipe-details-intro h4').filter({ hasText:/^Design Rationale$/ })).toBeVisible();
  await expect(card.locator('.recipe-details-intro h4').filter({ hasText:/^Variables & Fixed Elements$/ })).toBeVisible();
  await expect(card.locator('.recipe-details-intro h4').filter({ hasText:/^Boundaries$/ })).toBeVisible();

  await card.locator('[data-recipe-subtab="guidance"]').click();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeHidden();

  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /Storage & Use/i }).first()).toBeVisible();
  await expect(card.locator('.recipe-details-intro')).toBeVisible();
});

test('Protective balm uses two true equal-width slider columns with one Overall Feel descriptor', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  await expect(card).toBeVisible();
  await expect(card.locator('.recipe-slider-instruction')).toHaveCount(0);
  await expect(card.locator('.glide-variable-help')).toHaveCount(0);
  await expect(card.locator('.glide-value-bubble')).toHaveCount(0);
  await expect(card.locator('.glide-explain-title')).toHaveText('Overall Feel');
  await expect(card.locator('.glide-explain-title')).toHaveCount(1);
  await expect(card.locator('.glide-breakdown:visible')).toHaveCount(0);
  await expect(card.getByText(/One batch; the sliders change the overall feel/i)).toBeHidden();

  const geometry = await card.locator('.glide-controller').evaluate((controller) => {
    const mains = Array.from(controller.querySelectorAll(':scope > .glide-control-main')).map((el) => {
      const r = el.getBoundingClientRect();
      return { x:r.x, width:r.width, right:r.right };
    });
    const scales = Array.from(controller.querySelectorAll('.glide-scale span')).map((el) => {
      const cs = getComputedStyle(el);
      return { whiteSpace:cs.whiteSpace, height:el.getBoundingClientRect().height, lineHeight:parseFloat(cs.lineHeight) || 0 };
    });
    return { mains, stackCount:controller.querySelectorAll(':scope > .glide-control-stack').length, scales };
  });
  expect(geometry.stackCount).toBe(0);
  expect(geometry.mains).toHaveLength(2);
  expect(Math.abs(geometry.mains[0].width - geometry.mains[1].width)).toBeLessThan(3);
  expect(geometry.mains[1].x).toBeGreaterThanOrEqual(geometry.mains[0].right - 1);
  for (const scale of geometry.scales) {
    expect(scale.whiteSpace).toBe('nowrap');
    if (scale.lineHeight > 0) expect(scale.height).toBeLessThan(scale.lineHeight * 1.6);
  }
});

test('Food oat type is a Standard View recipe choice, not an Adjustment', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla');
  const card = page.locator('#r4');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expectUniversalTabs(card, 'Standard View');
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

test('Skincare Details is useful while Food keeps its existing placeholder behaviour', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/microcurrent-glide-gel');
  const skin = page.locator('#r10');
  await expect(skin).toBeVisible();
  await skin.locator('[data-recipe-subtab="details"]').click();
  await expect(skin.locator('.recipe-details-intro')).toBeVisible();
  await expect(skin.locator('.recipe-detail-block')).toHaveCount(6);
  await skin.locator('[data-recipe-subtab="show-all"]').click();
  await expect(skin.locator('.recipe-details-intro')).toBeVisible();

  await page.goto('/baseline-food-approach/recipes/tomato-and-red-pepper-sauce');
  const food = page.locator('#r10');
  await expect(food).toBeVisible();
  await food.locator('[data-recipe-subtab="details"]').click();
  await expect(food.locator('[data-recipe-view-group="details"]:visible')).toHaveCount(0);
});

test('system-specific recipe themes remain owned by the active system', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/microcurrent-glide-gel');
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
