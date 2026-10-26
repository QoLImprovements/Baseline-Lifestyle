const { test, expect } = require('@playwright/test');

const foodRecipes = [
  { id:'r1', slug:'raw-40-c-almond-flax-pizza-base', title:'Raw 40°C Almond–Flax Pizza Base' },
  { id:'r6', slug:'mushroom-and-rosemary-oat-groats-risotto', title:'Mushroom and Rosemary Oat Groats Risotto' },
  { id:'r5', slug:'creamy-mushroom-sauce', title:'Creamy Mushroom Sauce' },
  { id:'r7', slug:'sattu-balanced-nut-butter-spread-base', title:'Sattu-Balanced Nut Butter Spread Base' },
  { id:'r2', slug:'creamy-stovetop-polenta', title:'Creamy Stovetop Polenta' },
  { id:'r4', slug:'hearty-oat-porridge-with-apple-pear-and-vanilla', title:'Hearty Oat Porridge with Apple, Pear & Vanilla' },
  { id:'r3', slug:'pure-stovetop-chickpea-baked-beans', title:'Pure Stovetop Chickpea Baked Beans' },
  { id:'r11', slug:'potato-and-carrot-vegan-cheese', title:'Potato & Carrot Vegan Cheese' },
  { id:'r8', slug:'sweet-potato-and-bell-pepper-sauce', title:'Sweet Potato & Bell Pepper Sauce' },
  { id:'r9', slug:'aubergine-and-carrot-sauce', title:'Aubergine & Carrot Sauce' },
  { id:'r10', slug:'tomato-and-red-pepper-sauce', title:'Tomato & Red Pepper Sauce' }
];

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
  await expect(meta.locator('.recipe-meta-item')).toHaveCount(1);
  await expect(meta.locator('.recipe-meta-item').filter({ hasText: /^Batch:/ })).toHaveCount(1);
  await expect(meta.locator('.recipe-meta-item').filter({ hasText: /^Yield:/ })).toHaveCount(0);

  const viewbar = card.locator('.recipe-viewbar');
  const tabs = viewbar.locator('.recipe-subtabs');
  const adjustments = viewbar.locator(':scope > .recipe-adjustments-toggle');
  await expect(viewbar).toBeVisible();
  await expect(tabs).toBeVisible();
  await expect(adjustments).toBeVisible();
  await expect(adjustments).toHaveText('Adjustments');
  await expect(adjustments).toHaveAttribute('aria-expanded', 'false');

  const geometry = await card.evaluate(el => {
    const tabs = el.querySelector('.recipe-viewbar > .recipe-subtabs').getBoundingClientRect();
    const adjustments = el.querySelector('.recipe-viewbar > .recipe-adjustments-toggle').getBoundingClientRect();
    return {
      tabsTop: tabs.top,
      tabsRight: tabs.right,
      adjustmentsTop: adjustments.top,
      adjustmentsLeft: adjustments.left
    };
  });
  expect(Math.abs(geometry.adjustmentsTop - geometry.tabsTop)).toBeLessThan(8);
  expect(geometry.adjustmentsLeft).toBeGreaterThanOrEqual(geometry.tabsRight - 1);

  const adjustmentSurface = await adjustments.evaluate(el => ({
    backgroundColor: getComputedStyle(el).backgroundColor,
    backgroundImage: getComputedStyle(el).backgroundImage,
    textDecorationLine: getComputedStyle(el).textDecorationLine,
    afterContent: getComputedStyle(el, '::after').content,
    afterDisplay: getComputedStyle(el, '::after').display,
  }));
  expect(adjustmentSurface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
  expect(adjustmentSurface.backgroundImage).toBe('none');
  expect(adjustmentSurface.textDecorationLine).toBe('none');
  expect(adjustmentSurface.afterContent).toContain('▾');
  expect(adjustmentSurface.afterDisplay).not.toBe('none');
  await expect(card.locator('.recipe-adjustments-row')).toBeHidden();
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

test('recipe title favourite and subtab rhythm stay visually consistent', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm', { waitUntil:'domcontentloaded' });

  const card = page.locator('#r3');
  const title = card.locator('.recipe-title-row > h3');
  const favourite = card.locator('.recipe-title-row > .fav-btn');
  await expect(title).toBeVisible();
  await expect(favourite).toBeVisible();

  const titleGeometry = await card.evaluate((el) => {
    const heading = el.querySelector('.recipe-title-row > h3');
    const star = el.querySelector('.recipe-title-row > .fav-btn');
    const headingRect = heading.getBoundingClientRect();
    const starRect = star.getBoundingClientRect();
    return {
      titleFontSize: parseFloat(getComputedStyle(heading).fontSize),
      starFontSize: parseFloat(getComputedStyle(star).fontSize),
      titleRight: headingRect.right,
      starLeft: starRect.left
    };
  });
  expect(Math.abs(titleGeometry.starFontSize - titleGeometry.titleFontSize)).toBeLessThan(0.5);
  expect(titleGeometry.starLeft - titleGeometry.titleRight).toBeGreaterThanOrEqual(0);
  expect(titleGeometry.starLeft - titleGeometry.titleRight).toBeLessThan(14);

  const favouriteSurface = await favourite.evaluate((el) => {
    const style = getComputedStyle(el);
    return { backgroundColor:style.backgroundColor, backgroundImage:style.backgroundImage };
  });
  expect(favouriteSurface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
  expect(favouriteSurface.backgroundImage).toBe('none');

  await favourite.hover();
  const favouriteHoverSurface = await favourite.evaluate((el) => {
    const style = getComputedStyle(el);
    return { backgroundColor:style.backgroundColor, backgroundImage:style.backgroundImage };
  });
  expect(favouriteHoverSurface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
  expect(favouriteHoverSurface.backgroundImage).toBe('none');

  const viewbarGeometry = await card.evaluate((el) => {
    const tabs = el.querySelector('.recipe-viewbar > .recipe-subtabs').getBoundingClientRect();
    const adjustments = el.querySelector('.recipe-viewbar > .recipe-adjustments-toggle').getBoundingClientRect();
    return { tabsTop:tabs.top, tabsRight:tabs.right, adjustmentsTop:adjustments.top, adjustmentsLeft:adjustments.left };
  });
  expect(Math.abs(viewbarGeometry.adjustmentsTop - viewbarGeometry.tabsTop)).toBeLessThan(8);
  expect(viewbarGeometry.adjustmentsLeft).toBeGreaterThanOrEqual(viewbarGeometry.tabsRight - 1);

  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('.recipe-viewbar')).toBeVisible();
  await expect(card.locator('.recipe-viewbar > .recipe-adjustments-toggle')).toBeHidden();
});

test('recipe sliders always sit immediately above their Ingredients heading', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes', { waitUntil:'domcontentloaded' });

  const violations = await page.locator('#recipes .recipe-page').evaluateAll((cards) => {
    const problems = [];

    cards.forEach((card) => {
      const scopes = [card, ...card.querySelectorAll('.variant-panel')];

      scopes.forEach((scope) => {
        const children = Array.from(scope.children || []);
        const ingredients = children.find((el) =>
          /^H[1-4]$/i.test(el.tagName || '') &&
          /^ingredients\b/i.test(String(el.textContent || '').trim())
        );
        if (!ingredients) return;

        const sliders = children.filter((el) => el.classList && el.classList.contains('glide-controller'));
        sliders.forEach((slider) => {
          if (slider.nextElementSibling !== ingredients) {
            problems.push({
              recipe: card.id || '',
              variant: scope.getAttribute('data-variant-panel') || '',
              slider: slider.getAttribute('aria-label') || ''
            });
          }
        });
      });
    });

    return problems;
  });

  expect(violations).toEqual([]);
});

test('single-group ingredient lists do not show a Main subgroup heading', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend', { waitUntil:'domcontentloaded' });

  const card = page.locator('#r6');
  const ingredients = card.locator('.ingredients-list').first();
  await expect(ingredients).toBeVisible();
  await expect(ingredients.locator(':scope > li.ing-subhead')).toHaveCount(0);
  await expect(ingredients).not.toContainText(/^\s*Main\s*$/m);
});

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

for (const recipe of foodRecipes) {
  test(`Food recipe preserves exact selection through refresh Back and Forward: ${recipe.slug}`, async ({ page }) => {
    const url = '/baseline-food-approach/recipes/' + recipe.slug;
    await page.goto(url, { waitUntil:'domcontentloaded' });

    expect(new URL(page.url()).pathname).toBe(url);
    await expect(page.locator('#system')).toBeHidden();
    await expect(page.locator('#recipes')).toBeVisible();
    await expect(page.locator('#' + recipe.id)).toBeVisible();
    await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
    await expect(page.locator('#' + recipe.id + ' h3')).toHaveText(recipe.title);

    await page.reload({ waitUntil:'domcontentloaded' });
    expect(new URL(page.url()).pathname).toBe(url);
    await expect(page.locator('#' + recipe.id)).toBeVisible();
    await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
    await expect(page.locator('#' + recipe.id + ' h3')).toHaveText(recipe.title);

    await page.locator('#' + recipe.id + ' .back-btn').click();
    expect(new URL(page.url()).pathname).toBe('/baseline-food-approach/recipes');
    await expect(page.locator('#recipes-landing')).toBeVisible();

    await page.goBack();
    expect(new URL(page.url()).pathname).toBe(url);
    await expect(page.locator('#' + recipe.id)).toBeVisible();

    await page.goForward();
    expect(new URL(page.url()).pathname).toBe('/baseline-food-approach/recipes');
    await expect(page.locator('#recipes-landing')).toBeVisible();
  });
}

test('Food recipe subtab route state also survives refresh without exposing another recipe', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/tomato-and-red-pepper-sauce');
  const card = page.locator('#r10');
  await expect(card).toBeVisible();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
  await expect(card.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected','true');

  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected','true');
  expect(new URL(page.url()).searchParams.get('view')).toBe('details');

  await page.reload();
  await expect(card).toBeVisible();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
  await expect(card.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected','true');
  expect(new URL(page.url()).pathname).toBe('/baseline-food-approach/recipes/tomato-and-red-pepper-sauce');
  expect(new URL(page.url()).searchParams.get('view')).toBeNull();

  await page.goto('/baseline-food-approach/recipes/creamy-mushroom-sauce');
  const next = page.locator('#r5');
  await expect(next).toBeVisible();
  await expect(page.locator('#recipes .recipe-page:visible')).toHaveCount(1);
  await expect(next.locator('[data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected','true');
  expect(new URL(page.url()).searchParams.get('view')).toBeNull();
});

test('signed-out favourite caption floats without changing recipe layout', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm', { waitUntil:'domcontentloaded' });

  const card = page.locator('#r3');
  const favourite = card.locator('.recipe-title-row > .fav-btn');
  const batch = card.locator('.recipe-meta-row');
  await expect(favourite).toBeVisible();
  await expect(batch).toBeVisible();

  const before = await batch.boundingBox();
  await favourite.click();
  await expect(favourite).toHaveAttribute('data-tip', 'log in required to favorite this recipe.');
  await expect(favourite).toHaveClass(/tip-show/);
  const after = await batch.boundingBox();

  expect(before).not.toBeNull();
  expect(after).not.toBeNull();
  expect(Math.abs(after.y - before.y)).toBeLessThan(1);
});

test('A deliberate recipe open always starts on Recipe even after Details was previously active', async ({ page }) => {
  for (const system of [
    {
      overview:'/baseline-natural-skincare/recipes',
      recipe:'/baseline-natural-skincare/recipes/anhydrous-oil-cleanser',
      id:'#r2'
    },
    {
      overview:'/baseline-food-approach/recipes',
      recipe:'/baseline-food-approach/recipes/tomato-and-red-pepper-sauce',
      id:'#r10'
    }
  ]) {
    await page.goto(system.recipe);
    const card = page.locator(system.id);
    await card.locator('[data-recipe-subtab="details"]').click();
    await expect(card.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected','true');
    expect(new URL(page.url()).searchParams.get('view')).toBe('details');

    const back = card.locator('.back-btn').first();
    await expect(back).toBeVisible();
    await back.click();
    await expect(page).toHaveURL(system.overview);

    const link = page.locator('#recipes-landing a.recipe-open[href="' + system.recipe + '"]').first();
    await expect(link).toBeVisible();
    await link.click();

    await expect(page.locator(system.id)).toBeVisible();
    await expect(page.locator(system.id + ' [data-recipe-subtab="standard"]')).toHaveAttribute('aria-selected','true');
    await expect(page.locator(system.id + ' [data-recipe-subtab="details"]')).toHaveAttribute('aria-selected','false');
    expect(new URL(page.url()).searchParams.get('view')).toBeNull();
  }
});

test('Food recipe ingredient links preserve recipe filter through refresh Back and Forward', async ({ page }) => {
  const recipeUrl = '/baseline-food-approach/recipes/creamy-mushroom-sauce';
  const ingredientUrl = '/baseline-food-approach/ingredient-library?filter=r5#ing-mushrooms';

  await page.goto(recipeUrl);
  const mushroom = page.locator('#r5 a.ing-link[data-ingredient="ing-mushrooms"]').first();
  await expect(mushroom).toHaveAttribute('href', ingredientUrl);

  await mushroom.click();
  await expect(page).toHaveURL(ingredientUrl);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r5');
  await expect(page.locator('#ing-mushrooms')).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(recipeUrl);
  await expect(page.locator('#r5')).toBeVisible();

  await page.goForward();
  await expect(page).toHaveURL(ingredientUrl);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r5');
  await expect(page.locator('#ing-mushrooms')).toBeVisible();

  await page.reload();
  await expect(page).toHaveURL(ingredientUrl);
  await expect(page.locator('#ingredients')).toHaveClass(/active/);
  await expect(page.locator('#ingredientFilter')).toHaveValue('r5');
  await expect(page.locator('#ing-mushrooms')).toBeVisible();
});

test('every visible Food and Skincare ingredient source receives exactly one first-use method tag', async ({ page }) => {
  for (const url of ['/baseline-natural-skincare/recipes', '/baseline-food-approach/recipes']) {
    await page.goto(url);
    const cards = page.locator('.recipe-page.recipe-universal-template');
    await expect.poll(async () => cards.count()).toBeGreaterThan(0);

    const audit = await cards.evaluateAll(items => items.map(card => {
      const scope = card.querySelector('.variant-panel:not([hidden])') || card;
      const headings = Array.from(scope.querySelectorAll('h2,h3,h4'));
      const ingredients = headings.find(h => /^ingredients\b/i.test((h.textContent || '').trim()));
      const method = headings.find(h => /^method\b/i.test((h.textContent || '').trim()));
      if (!ingredients || !method) {
        return { id:card.id, title:card.querySelector('h3')?.textContent?.trim() || '', error:'missing visible Ingredients/Method heading' };
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
        if (li.hidden || String(li.getAttribute('aria-hidden') || '').toLowerCase() === 'true') return false;
        const section = sectionFor(li);
        if (/^(ingredient roles?|roles?|nutrition|serving ideas?|body\s*&?\s*sensory notes?|storage|notes?|comedogenic considerations?)\b/i.test(section)) return false;
        if (li.dataset.methodStep) return true;
        if (li.querySelector('.amt,.thickness-swap,a.ing-link')) return true;
        const raw = (li.textContent || '').replace(/\s+/g,' ').trim();
        return /\d/.test(raw) && /(?:\b(?:g|kg|ml|l|tbsp|tsp|cups?|drops?|pinch(?:es)?|cloves?|grams?|millilit(?:er|re)s?)\b|%)/i.test(raw);
      };

      const sources = Array.from(scope.querySelectorAll('li')).filter(li =>
        follows(ingredients, li) &&
        follows(li, method) &&
        !li.closest('ol') &&
        candidate(li)
      );
      const pills = Array.from(scope.querySelectorAll('.method-amt[data-method-ingredient-key]'));
      const pillCounts = new Map();
      pills.forEach(pill => {
        const key = pill.dataset.methodIngredientKey || '';
        pillCounts.set(key, (pillCounts.get(key) || 0) + 1);
      });

      const inactiveTaggedSources = Array.from(card.querySelectorAll('.variant-panel[hidden] [data-method-tag-key]'))
        .map(li => (li.textContent || '').trim());

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
          .map(pill => (pill.textContent || '').trim()),
        inactiveTaggedSources
      };
    }));

    for (const result of audit) {
      expect(result.error, `${url} ${result.id} ${result.title}`).toBeUndefined();
      expect(result.sourceCount, `${url} ${result.id} should expose visible ingredient sources`).toBeGreaterThan(0);
      expect(result.missingSourceKeys, `${url} ${result.id} missing source tag keys`).toEqual([]);
      expect(result.wrongPillCounts, `${url} ${result.id} missing/duplicate method tags`).toEqual([]);
      expect(result.pillsOutsideMethod, `${url} ${result.id} method pills outside method list`).toEqual([]);
      expect(result.inactiveTaggedSources, `${url} ${result.id} hidden variants must not own active method tags`).toEqual([]);
      expect(result.pillCount, `${url} ${result.id} visible pill/source parity`).toBe(result.sourceCount);
    }
  }
});

test('Protective Touch Balm method ignores optional sliders and mirrors current visible ingredient amounts', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  const steps = card.locator('h4').filter({ hasText:/^Method$/ }).locator('xpath=following-sibling::ol[1]').locator(':scope > li');

  await expect(steps).toHaveCount(7);
  await expect(steps.nth(0).locator('.method-amt')).toHaveCount(0);
  await expect(steps.nth(0)).not.toContainText(/slider/i);

  await expect(steps.nth(1)).toContainText('Jojoba Oil');
  await expect(steps.nth(1)).toContainText('Castor Oil');
  await expect(steps.nth(1)).toContainText('Carnauba Wax');
  await expect(steps.nth(1)).not.toContainText('Shea Butter');

  await expect(steps.nth(2)).toContainText('Shea Butter');
  await expect(steps.nth(3)).toContainText('Calendula Oil');
  await expect(steps.nth(4)).toContainText('Vitamin E');
  await expect(card.getByRole('heading', { name:/^Method$/ }).locator('xpath=following-sibling::ol[1]')).not.toContainText(/slider/i);

  const initialPills = await card.locator('.method-amt').allTextContents();
  for (const name of ['Jojoba Oil','Castor Oil','Carnauba Wax','Shea Butter','Calendula Oil','Vitamin E']) {
    expect(initialPills.filter(text => text.includes(name)), name).toHaveLength(1);
  }

  await card.locator('#r3BalanceCastor').evaluate((el) => {
    el.value = '12';
    el.dispatchEvent(new Event('input', { bubbles:true }));
  });
  await expect(card.locator('.r3-balance-castor-amt')).toContainText('12');

  await expect.poll(async () => {
    return card.evaluate(el => {
      const source = el.querySelector('a[data-ingredient="ing-castor"]')?.closest('li');
      const key = source?.dataset.methodTagKey || '';
      const pill = key ? el.querySelector('.method-amt[data-method-ingredient-key="' + CSS.escape(key) + '"]') : null;
      const norm = value => String(value || '').replace(/\s+/g,' ').replace(/\s*([–—-])\s*/g,' $1 ').trim();
      return { source:norm(source?.textContent), pill:norm(pill?.textContent) };
    });
  }).toEqual(expect.objectContaining({
    source: expect.stringContaining('12'),
    pill: expect.stringContaining('12')
  }));

  const liveMatch = await card.evaluate(el => {
    const rows = Array.from(el.querySelectorAll('[data-method-tag-key]'));
    const norm = value => String(value || '').replace(/\s+/g,' ').replace(/\s*([–—-])\s*/g,' $1 ').trim();
    return rows.every(row => {
      const key = row.dataset.methodTagKey || '';
      const pill = el.querySelector('.method-amt[data-method-ingredient-key="' + CSS.escape(key) + '"]');
      return pill && norm(pill.textContent) === norm(row.textContent);
    });
  });
  expect(liveMatch).toBe(true);
});

test('Oil Cleanser method tags follow the continuous recipe and never instruct slider changes', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  const card = page.locator('#r2');
  await expect(card).toBeVisible();
  await expect(card.locator('.variant-switcher, .variant-tab, .variant-panel')).toHaveCount(0);
  await expect(card.locator('#r2CleansingPull')).toBeVisible();
  await expect(card.locator('#r2BarrierRichness')).toBeVisible();
  await expect.poll(async () => card.locator('.method-amt').count()).toBeGreaterThan(0);
  const methodText = await card.locator('h4').filter({ hasText:/^Method$/i }).first().locator('xpath=following-sibling::ol[1]').textContent();
  expect(methodText || '').not.toMatch(/slider/i);
});

test('Food recipes keep repeated water quantities at their authored first-use stages', async ({ page }) => {
  await page.goto('/baseline-food-approach/recipes/hearty-oat-porridge-with-apple-pear-and-vanilla');
  const steps = page.locator('#r4 ol').first().locator(':scope > li');

  await expect(steps.nth(1)).toContainText('2 tbsp water');
  await expect(steps.nth(3)).toContainText(/600 ml water/i);
  await expect(steps.nth(4)).toContainText('1–2 tbsp hot water');

});

test('Skincare massage recipe uses one compact explanatory slider in Recipe view', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-massage-oil-blend');
  const card = page.locator('#r6');
  await expect(card).toBeVisible();
  await expect(card).toHaveClass(/recipe-universal-template/);
  await expectUniversalTabs(card, 'Recipe');

  await expect(card.locator('.variant-switcher, .variant-tab')).toHaveCount(0);
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
  await expect(card.locator('.recipe-details-intro h4').filter({ hasText:/^Limitations & Trade-offs$/ })).toBeVisible();
  await expect(card.locator('.recipe-comedogenic-rating')).toContainText(/^Comedogenic Rating — \d/);
  await expect(card.getByRole('heading', { name:/Comedogenic Considerations/i })).toHaveCount(0);

  await card.locator('[data-recipe-subtab="guidance"]').click();
  await expect(card.getByRole('heading', { name: /^Usage$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Storage$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeHidden();

  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(card.getByRole('heading', { name: /^Method$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Usage$/i }).first()).toBeVisible();
  await expect(card.getByRole('heading', { name: /^Storage$/i }).first()).toBeVisible();
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
  await expectUniversalTabs(card, 'Recipe');
  const oatToggle = card.locator('.recipe-formula-controls .oat-toggle');
  await expect(oatToggle).toBeVisible();
  const oatButtons = oatToggle.locator('.oat-option');
  await expect(oatButtons).toHaveCount(2);
  await expect(oatButtons.filter({ hasText:'Jumbo Oats' })).toHaveAttribute('aria-pressed', /true|false/);
  await oatButtons.filter({ hasText:'Porridge Oats' }).click();
  await expect(oatButtons.filter({ hasText:'Porridge Oats' })).toHaveAttribute('aria-pressed','true');
  await expect(oatButtons.filter({ hasText:'Porridge Oats' })).toHaveClass(/is-active/);
  await expect(oatButtons.filter({ hasText:'Jumbo Oats' })).toHaveAttribute('aria-pressed','false');
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
  const thicknessRow = card.locator('.recipe-formula-controls .recipe-control-row--thickness-slider');
  await expect(thicknessRow).toBeVisible();
  await expect(thicknessRow.locator('.glide-slider.thickness-slider')).toBeVisible();
  await expect(thicknessRow.locator('.glide-readout')).toContainText(/Thin|Moderate|Thick/);
  await expect(thicknessRow.locator('.glide-scale')).toContainText('Thin');
  await expect(thicknessRow.locator('.glide-scale')).toContainText('Thick');
  const sliderWidth = await thicknessRow.evaluate((el) => {
    const parent = el.parentElement.getBoundingClientRect();
    const row = el.getBoundingClientRect();
    return { parent: parent.width, row: row.width };
  });
  expect(sliderWidth.row).toBeGreaterThan(sliderWidth.parent * 0.42);
  expect(sliderWidth.row).toBeLessThan(sliderWidth.parent * 0.58);
  await expect(card.locator('.recipe-adjustments-panel')).toBeHidden();

  await card.locator('.recipe-adjustments-toggle').click();
  await expect(card.locator('.recipe-adjustments-panel')).toBeVisible();
  await expect(card.locator('.recipe-adjustments-panel .scale-toggle')).toBeVisible();
});

test('every Food and Skincare recipe uses one coherent Batch metadata item', async ({ page }) => {
  for (const url of ['/baseline-natural-skincare/recipes', '/baseline-food-approach/recipes']) {
    await page.goto(url);
    const cards = page.locator('.recipe-page.recipe-universal-template');
    await expect.poll(async () => cards.count()).toBeGreaterThan(0);
    const results = await cards.evaluateAll(items => items.map(card => {
      const meta = Array.from(card.querySelectorAll('.recipe-meta-item')).map(item => item.textContent.trim());
      return { id: card.id, meta };
    }));
    expect(results.length).toBeGreaterThan(0);
    for (const result of results) {
      expect(result.meta, `${url} ${result.id} metadata`).toEqual(['Batch: 1×']);
      expect(result.meta.join(' ')).not.toContain('&#x31;');
      expect(result.meta.join(' ')).not.toContain('Yield:');
    }
  }
});

test('Batch metadata updates coherently when the batch multiplier changes', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  await expect(card.locator('.recipe-meta-item')).toHaveText('Batch: 1×');
  await card.locator('.recipe-adjustments-toggle').click();
  const batchInput = card.locator('input.multiplier-input');
  await batchInput.fill('2');
  await batchInput.dispatchEvent('input');
  await expect(card.locator('.recipe-meta-item')).toHaveText('Batch: 2×');
});

test('Skincare Details uses one full-width continuous column without card separation', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  const details = card.locator('.recipe-details-intro');
  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(card.locator('[data-recipe-subtab="details"]')).toHaveAttribute('aria-selected','true');
  await expect(details).toBeVisible();
  await expect(card.locator('[data-recipe-view-group="standard"]:visible')).toHaveCount(0);

  const layout = await details.evaluate(el => {
    const style = getComputedStyle(el);
    const first = el.querySelector('.recipe-detail-block');
    const firstStyle = getComputedStyle(first);
    const detailsRect = el.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    return {
      columns: style.gridTemplateColumns,
      detailsWidth: detailsRect.width,
      blockWidth: firstRect.width,
      borderStyle: firstStyle.borderStyle,
      backgroundImage: firstStyle.backgroundImage,
      backgroundColor: firstStyle.backgroundColor
    };
  });
  expect(layout.columns.trim().split(/\s+/)).toHaveLength(1);
  expect(layout.blockWidth).toBeGreaterThanOrEqual(layout.detailsWidth - 2);
  expect(layout.borderStyle).toBe('none');
  expect(layout.backgroundImage).toBe('none');
  expect(['rgba(0, 0, 0, 0)','transparent']).toContain(layout.backgroundColor);
});

test('Oil Cleanser exposes continuous reference points without duplicate variant controls', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  const card = page.locator('#r2');
  await expect(card).toBeVisible();
  await expect(card.locator('.variant-switcher, .variant-tab, .variant-panel, .recipe-details-variant-switcher')).toHaveCount(0);
  await expect(card.locator('#r2CleansingPull')).toBeVisible();
  await expect(card.locator('#r2BarrierRichness')).toBeVisible();
  await expect(card).toContainText(/Reactive is the 0% castor \/ 0% olive point/i);
  await expect(card).toContainText(/Balanced is the 10% castor \/ 0% olive reference point/i);
  await expect(card).toContainText(/Enhanced Barrier is the 10% castor \/ 18% olive reference point/i);
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
  await expect(food.locator('.recipe-details-intro')).toBeVisible();
  await expect(food.locator('.recipe-detail-block')).toHaveCount(6);
  await expect(food.locator('.recipe-details-intro h4').filter({ hasText:/^Purpose$/ })).toBeVisible();
  await expect(food.locator('.recipe-details-intro h4').filter({ hasText:/^Limitations & Trade-offs$/ })).toBeVisible();
});

test('Skincare Adjustments starts collapsed at the right of Recipe and Show All subtabs', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/protective-touch-balm');
  const card = page.locator('#r3');
  const viewbar = card.locator('.recipe-viewbar');
  const row = card.locator('.recipe-adjustments-row');
  const toggle = viewbar.locator(':scope > .recipe-adjustments-toggle');
  const panel = card.locator('.recipe-adjustments-panel');

  await expect(viewbar).toBeVisible();
  await expect(row).toBeHidden();
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(panel).toBeHidden();

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded','true');
  await expect(panel).toBeVisible();

  await card.locator('[data-recipe-subtab="details"]').click();
  await expect(viewbar).toBeVisible();
  await expect(toggle).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(panel).toBeHidden();

  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(panel).toBeHidden();

  await toggle.click();
  await expect(panel).toBeVisible();
  await card.locator('[data-recipe-subtab="guidance"]').click();
  await expect(toggle).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(panel).toBeHidden();

  await card.locator('[data-recipe-subtab="standard"]').click();
  await expect(row).toBeHidden();
  await expect(toggle).toBeVisible();
  await expect(panel).toBeHidden();

  await toggle.click();
  await expect(panel).toBeVisible();
  await card.locator('.back-btn').click();
  await expect(page.locator('#recipes-landing')).toBeVisible();
  await page.locator('#recipes-landing a.recipe-open[data-recipe-id="r3"]').click();
  await expect(card).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded','false');
  await expect(panel).toBeHidden();
});

test('Skincare Show All is visually ordered Recipe then Details then Guidance', async ({ page }) => {
  await page.goto('/baseline-natural-skincare/recipes/anhydrous-oil-cleanser');
  const card = page.locator('#r2');
  await card.locator('[data-recipe-subtab="show-all"]').click();
  await expect(card).toHaveAttribute('data-recipe-view','show-all');

  const positions = await card.evaluate((el) => {
    const activeVariant = el.querySelector('.variant-panel:not([hidden])');
    const eligible = (node) => node.parentElement === el || node.parentElement === activeVariant;
    const visible = (node) => {
      const style = getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0;
    };
    const rects = (group) => Array.from(el.querySelectorAll('[data-recipe-view-group="' + group + '"]'))
      .filter(node => eligible(node) && visible(node))
      .map(node => node.getBoundingClientRect());

    const standard = rects('standard');
    const details = rects('details');
    const guidance = rects('guidance');
    return {
      standardBottom: Math.max(...standard.map(r => r.bottom)),
      detailsTop: Math.min(...details.map(r => r.top)),
      detailsBottom: Math.max(...details.map(r => r.bottom)),
      guidanceTop: Math.min(...guidance.map(r => r.top)),
      counts: { standard:standard.length, details:details.length, guidance:guidance.length }
    };
  });

  expect(positions.counts.standard).toBeGreaterThan(0);
  expect(positions.counts.details).toBeGreaterThan(0);
  expect(positions.counts.guidance).toBeGreaterThan(0);
  expect(positions.standardBottom).toBeLessThanOrEqual(positions.detailsTop + 1);
  expect(positions.detailsBottom).toBeLessThanOrEqual(positions.guidanceTop + 1);
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
