/* Baseline Lifestyle — Recipe System Refinement
   - Renames Standard View to Recipe
   - Restores useful Details / Show All content
   - Uses compact segmented selectors for recipe variants
   - Resets each opened recipe to Recipe instead of remembering a prior subtab
*/
(function(){
  'use strict';

  if(window.__BASELINE_RECIPE_SYSTEM_REFINEMENT__) return;
  window.__BASELINE_RECIPE_SYSTEM_REFINEMENT__ = true;

  const RECIPE_SELECTOR = '#recipes .recipe-page';
  const refinedRecipes = new WeakSet();
  const activeState = new WeakMap();

  function all(selector, root){
    return Array.from((root || document).querySelectorAll(selector));
  }

  function correctViewVisibility(recipe){
    if(!recipe) return;
    const view = String(recipe.dataset.recipeView || 'standard');
    all('[data-recipe-view-group]', recipe).forEach(function(element){
      const group = String(element.dataset.recipeViewGroup || '');
      const visible = view === 'show-all' || group === view;
      element.classList.toggle('recipe-view-hidden', !visible);
    });
  }

  function renameRecipeTab(recipe){
    const button = recipe && recipe.querySelector('.recipe-subtab[data-recipe-subtab="standard"]');
    if(!button) return;
    if(button.textContent !== 'Recipe') button.textContent = 'Recipe';
    button.setAttribute('aria-label', 'Recipe');
  }

  function syncVariantSegments(recipe){
    const select = recipe && recipe.querySelector('.recipe-variant-select');
    const segmented = recipe && recipe.querySelector('.recipe-variant-segments');
    if(!select || !segmented) return;
    all('.recipe-variant-segment', segmented).forEach(function(button){
      const selected = button.dataset.variantValue === select.value;
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      button.setAttribute('aria-selected', selected ? 'true' : 'false');
      button.tabIndex = selected ? 0 : -1;
    });
  }

  function buildSegmentedVariantSelector(recipe){
    if(!recipe || recipe.querySelector('.recipe-variant-segments')) return;
    const select = recipe.querySelector('.recipe-variant-select');
    if(!select) return;
    const field = select.closest('.recipe-variant-field');
    if(!field) return;

    const options = Array.from(select.options).filter(function(option){
      return !option.disabled && String(option.value || '').trim() !== '';
    });
    if(options.length < 2) return;

    const segmented = document.createElement('div');
    segmented.className = 'recipe-variant-segments';
    segmented.setAttribute('role', 'tablist');
    segmented.setAttribute('aria-label', select.getAttribute('aria-label') || 'Recipe variant');

    options.forEach(function(option){
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'recipe-variant-segment';
      button.dataset.variantValue = option.value;
      button.setAttribute('role', 'tab');
      button.textContent = option.textContent || option.value;
      button.addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        if(select.value !== option.value){
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles:true }));
        }
        window.setTimeout(function(){ syncVariantSegments(recipe); }, 0);
      });
      segmented.appendChild(button);
    });

    select.classList.add('recipe-variant-select-source');
    select.setAttribute('aria-hidden', 'true');
    select.tabIndex = -1;
    field.classList.add('recipe-variant-field--segmented');
    field.insertBefore(segmented, select);

    select.addEventListener('change', function(){
      window.setTimeout(function(){ syncVariantSegments(recipe); }, 0);
    });

    const nativeSwitcher = recipe.querySelector('.variant-switcher');
    if(nativeSwitcher){
      const observer = new MutationObserver(function(){ syncVariantSegments(recipe); });
      all('.variant-tab', nativeSwitcher).forEach(function(tab){
        observer.observe(tab, { attributes:true, attributeFilter:['aria-selected'] });
      });
    }

    syncVariantSegments(recipe);
  }

  function repairDetailsAfterBaseViewChange(recipe){
    window.setTimeout(function(){ correctViewVisibility(recipe); }, 0);
  }

  function resetRecipeView(recipe){
    if(!recipe) return;
    renameRecipeTab(recipe);
    if(typeof recipe.__baselineSetRecipeView === 'function'){
      recipe.__baselineSetRecipeView('standard');
    } else {
      recipe.dataset.recipeView = 'standard';
      all('.recipe-subtab', recipe).forEach(function(button){
        button.setAttribute('aria-selected', button.dataset.recipeSubtab === 'standard' ? 'true' : 'false');
      });
    }
    correctViewVisibility(recipe);
  }

  function refineRecipe(recipe){
    if(!recipe) return;
    renameRecipeTab(recipe);
    buildSegmentedVariantSelector(recipe);

    if(!refinedRecipes.has(recipe)){
      refinedRecipes.add(recipe);

      const tabs = recipe.querySelector('.recipe-subtabs');
      if(tabs){
        tabs.addEventListener('click', function(event){
          if(event.target && event.target.closest && event.target.closest('.recipe-subtab')){
            repairDetailsAfterBaseViewChange(recipe);
          }
        });
      }

      const viewObserver = new MutationObserver(function(mutations){
        for(const mutation of mutations){
          if(mutation.type === 'attributes' && mutation.attributeName === 'data-recipe-view'){
            correctViewVisibility(recipe);
          }
        }
      });
      viewObserver.observe(recipe, { attributes:true, attributeFilter:['data-recipe-view'] });
    }

    const isActive = recipe.classList.contains('active');
    const wasActive = activeState.get(recipe) === true;
    if(isActive && !wasActive) resetRecipeView(recipe);
    activeState.set(recipe, isActive);
    correctViewVisibility(recipe);
  }

  function refineAll(){
    all(RECIPE_SELECTOR).forEach(refineRecipe);
  }

  function resetOpenedRecipeFromLink(link){
    if(!link) return;
    const id = String(link.getAttribute('data-recipe-id') || '').trim();
    window.setTimeout(function(){
      const recipe = id ? document.getElementById(id) : document.querySelector(RECIPE_SELECTOR + '.active');
      if(recipe) resetRecipeView(recipe);
      refineAll();
    }, 0);
  }

  document.addEventListener('click', function(event){
    const target = event.target && event.target.closest ? event.target.closest('.recipe-open') : null;
    if(target) resetOpenedRecipeFromLink(target);
  }, true);

  const rootObserver = new MutationObserver(function(){ refineAll(); });

  function start(){
    refineAll();
    if(document.body){
      rootObserver.observe(document.body, {
        childList:true,
        subtree:true,
        attributes:true,
        attributeFilter:['class','data-universal-template-ready']
      });
    }
    window.setTimeout(refineAll, 50);
    window.setTimeout(refineAll, 250);
    window.setTimeout(refineAll, 750);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once:true });
  else start();
})();
