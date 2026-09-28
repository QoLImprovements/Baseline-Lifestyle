/* BASELINE_DIET_FOOD_LIBRARY_READY_WAIT */
(function(){
  "use strict";
  function start(){
    (function(){
      "use strict";
      try{ if(window.__BASELINE_DIET_LOG__) return; window.__BASELINE_DIET_LOG__ = true; }catch(_e){}
    
      const STORAGE_KEY = "__baseline_food_diet_log_v1__";
      const CATEGORY_ORDER = [
        "Fruit",
        "Vegetables",
        "Potatoes & Starchy Vegetables",
        "Fungi",
        "Grains, Bread & Pasta",
        "Legumes & Pulses",
        "Nuts & Seeds",
        "Soy & Plant Proteins",
        "Milk, Dairy & Eggs",
        "Meat & Poultry",
        "Fish & Seafood",
        "Oils & Fats",
        "Herbs, Spices & Seasonings",
        "Condiments & Sauces",
        "Soups",
        "Prepared Meals & Mixed Dishes",
        "Snacks",
        "Sweets & Desserts",
        "Beverages",
        "Infant Foods",
        "Other Foods"
];
      const MEAL_ORDER = ["Breakfast","Lunch","Dinner","Snack","Other"];
      const HEALTH_DEFAULTS = {
        weightKg: "",
        heightCm: "",
        ageYears: "",
        sex: "unspecified",
        activity: "moderate",
        goal: "maintain"
      };
      const HEALTH_ACTIVITY_FACTORS = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
      };
      const NUTRIENTS = [
        { key:"energy_kcal", label:"Calories", unit:"kcal", decimals:0 },
        { key:"protein_g", label:"Protein", unit:"g", decimals:1 },
        { key:"carbs_g", label:"Carbohydrate", unit:"g", decimals:1 },
        { key:"sugar_g", label:"Sugars", unit:"g", decimals:1 },
        { key:"fibre_g", label:"Fibre", unit:"g", decimals:1 },
        { key:"fat_g", label:"Fat", unit:"g", decimals:1 },
        { key:"sat_fat_g", label:"Saturated fat", unit:"g", decimals:1 },
        { key:"omega3_g", label:"Omega-3", unit:"g", decimals:1 },
        { key:"sodium_mg", label:"Sodium", unit:"mg", decimals:0 },
        { key:"salt_g", label:"Salt equivalent", unit:"g", decimals:2 },
        { key:"potassium_mg", label:"Potassium", unit:"mg", decimals:0 },
        { key:"calcium_mg", label:"Calcium", unit:"mg", decimals:0 },
        { key:"iron_mg", label:"Iron", unit:"mg", decimals:1 },
        { key:"magnesium_mg", label:"Magnesium", unit:"mg", decimals:0 },
        { key:"phosphorus_mg", label:"Phosphorus", unit:"mg", decimals:0 },
        { key:"folate_ug", label:"Folate", unit:"µg", decimals:0 },
        { key:"vitamin_c_mg", label:"Vitamin C", unit:"mg", decimals:1 },
        { key:"vitamin_e_mg", label:"Vitamin E", unit:"mg", decimals:1 },
        { key:"vitamin_a_ug", label:"Vitamin A", unit:"µg", decimals:0 },
        { key:"vitamin_k_ug", label:"Vitamin K", unit:"µg", decimals:0 }
      ];
    
      const FOOD_LIBRARY_SOURCE = Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY) ? window.BASELINE_DIET_FOOD_LIBRARY.slice() : [];
      FOOD_LIBRARY_SOURCE.forEach(item => {
        item.measures = Array.isArray(item.measures) ? item.measures.slice() : [];
        if(!item.measures.some(measure => measure && measure.key === "g")){
          item.measures.unshift({ key:"g", label:"g", gramsPerUnit:1, kind:"weight" });
        }
      });
      const categoryRank = new Map(CATEGORY_ORDER.map((name, index) => [name, index]));
      const FOOD_LIBRARY = FOOD_LIBRARY_SOURCE.slice().sort((a,b) => {
        const catA = categoryRank.has(a.category) ? categoryRank.get(a.category) : 999;
        const catB = categoryRank.has(b.category) ? categoryRank.get(b.category) : 999;
        if(catA !== catB) return catA - catB;
        return String(a.name || "").localeCompare(String(b.name || ""));
      });
      const FOOD_BY_ID = new Map(FOOD_LIBRARY.map(item => [item.id, item]));
      const FOOD_SEARCH_INDEX = new Map(FOOD_LIBRARY.map(item => [item.id, buildFoodSearchIndex(item)]));
    
      const state = {
        date: todayISO(),
        activeView: "food",
        search: "",
        category: "all",
        selectedFoodId: FOOD_LIBRARY[0] ? FOOD_LIBRARY[0].id : "",
        amount: 1,
        meal: "Breakfast",
        measureKey: "",
        editingEntryId: "",
        noteDraft: "",
        recipeName: "",
        recipeSourceMeal: "all",
        recipeYield: 1,
        recipeMessage: ""
      };
    
      let refs = null;
      let filteredFoodsCache = { key:"", foods: FOOD_LIBRARY.slice() };
      let searchRenderTimer = null;
    
      function todayISO(){
        const now = new Date();
        return [now.getFullYear(), String(now.getMonth()+1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
      }
    
      function uid(prefix){
        return String(prefix || "id") + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
      }
    
      function round(value, decimals){
        const n = Number(value || 0);
        if(!Number.isFinite(n)) return 0;
        const factor = Math.pow(10, decimals || 0);
        return Math.round(n * factor) / factor;
      }
    
      function formatValue(value, decimals){
        const n = Number(value || 0);
        if(!Number.isFinite(n)) return "0";
        return n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      }
    
      function formatCompact(value, decimals){
        const n = Number(value || 0);
        if(!Number.isFinite(n)) return "0";
        return n.toLocaleString(undefined, { maximumFractionDigits: decimals });
      }
    
      function formatPercent(value){
        const n = Number(value || 0);
        if(!Number.isFinite(n) || n <= 0) return "0%";
        if(n >= 999) return "999%+";
        return formatCompact(n, n >= 100 ? 0 : 1) + "%";
      }
    
      function escapeHtml(value){
        return String(value || "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }
    
      function normaliseSearch(value){
        return String(value || "").toLowerCase().trim().replace(/\s+/g, " ");
      }
    
      function buildFoodSearchIndex(food){
        return [food.name, food.category, food.subcategory, food.state, food.source, food.description]
          .concat(food.tags || [])
          .join(" ")
          .toLowerCase();
      }
    
      function clearScheduledSearchRender(){
        if(searchRenderTimer !== null){
          window.clearTimeout(searchRenderTimer);
          searchRenderTimer = null;
        }
      }
    
      function scheduleFoodSearchRender(){
        clearScheduledSearchRender();
        searchRenderTimer = window.setTimeout(function(){
          searchRenderTimer = null;
          renderFoodGrid();
        }, 90);
      }
    
      function invalidateFilteredFoodsCache(){
        filteredFoodsCache.key = "";
        filteredFoodsCache.foods = FOOD_LIBRARY.slice();
      }
    
      function safeRead(){
        try{
          const raw = localStorage.getItem(STORAGE_KEY);
          if(!raw) return { logs:{}, notes:{}, recipes:[], health:Object.assign({}, HEALTH_DEFAULTS) };
          const parsed = JSON.parse(raw);
          return {
            logs: parsed && parsed.logs && typeof parsed.logs === "object" ? parsed.logs : {},
            notes: parsed && parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {},
            recipes: Array.isArray(parsed && parsed.recipes) ? parsed.recipes : [],
            health: parsed && parsed.health && typeof parsed.health === "object" ? Object.assign({}, HEALTH_DEFAULTS, parsed.health) : Object.assign({}, HEALTH_DEFAULTS)
          };
        }catch(_e){
          return { logs:{}, notes:{}, recipes:[], health:Object.assign({}, HEALTH_DEFAULTS) };
        }
      }
    
      function safeWrite(store){
        try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(store || {})); }catch(_e){}
      }
    
      function getStore(){
        const store = safeRead();
        if(!Array.isArray(store.logs[state.date])) store.logs[state.date] = [];
        if(typeof store.notes[state.date] !== "string") store.notes[state.date] = "";
        if(!Array.isArray(store.recipes)) store.recipes = [];
        store.health = Object.assign({}, HEALTH_DEFAULTS, store.health || {});
        return store;
      }
    
      function getEntries(date){
        const store = safeRead();
        return Array.isArray(store.logs && store.logs[date]) ? store.logs[date] : [];
      }
    
      function setEntries(date, entries){
        const store = getStore();
        store.logs[date] = Array.isArray(entries) ? entries : [];
        safeWrite(store);
      }
    
      function getNote(date){
        const store = safeRead();
        return store.notes && typeof store.notes[date] === "string" ? store.notes[date] : "";
      }
    
      function setNote(date, text){
        const store = getStore();
        store.notes[date] = String(text || "");
        safeWrite(store);
      }
    
      function getRecipes(){
        return safeRead().recipes || [];
      }
    
      function setRecipes(recipes){
        const store = getStore();
        store.recipes = Array.isArray(recipes) ? recipes : [];
        safeWrite(store);
      }
    
      function getHealthProfile(){
        return Object.assign({}, HEALTH_DEFAULTS, safeRead().health || {});
      }
    
      function setHealthProfile(next){
        const store = getStore();
        store.health = Object.assign({}, HEALTH_DEFAULTS, store.health || {}, next || {});
        safeWrite(store);
      }
    
      function toFiniteNumber(value){
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
      }
    
      function sanitisePositive(value, decimals){
        const n = Number(value);
        if(!Number.isFinite(n) || n <= 0) return "";
        return String(round(n, decimals));
      }
    
      function getSelectedFood(){
        return FOOD_BY_ID.get(state.selectedFoodId) || FOOD_LIBRARY[0] || null;
      }
    
      function getMeasure(food, measureKey){
        const measures = food && Array.isArray(food.measures) ? food.measures : [];
        return measures.find(item => item.key === measureKey) || measures[0] || null;
      }
    
      function ensureSelectedFood(){
        const filtered = getFilteredFoods();
        const selected = getSelectedFood();
        if(selected && !state.measureKey){
          state.measureKey = selected.defaultMeasure || (selected.measures[0] && selected.measures[0].key) || "g";
        }
        const stillVisible = filtered.some(item => item.id === state.selectedFoodId);
        if(filtered.length && (!state.selectedFoodId || (!stillVisible && state.search))){
          state.selectedFoodId = filtered[0].id;
          state.measureKey = filtered[0].defaultMeasure || (filtered[0].measures[0] && filtered[0].measures[0].key) || "g";
        }
        if(!state.selectedFoodId && FOOD_LIBRARY[0]){
          state.selectedFoodId = FOOD_LIBRARY[0].id;
          state.measureKey = FOOD_LIBRARY[0].defaultMeasure || (FOOD_LIBRARY[0].measures[0] && FOOD_LIBRARY[0].measures[0].key) || "g";
        }
      }
    
      function getFilteredFoods(){
        const key = [normaliseSearch(state.search), state.category].join("||");
        if(filteredFoodsCache.key === key) return filteredFoodsCache.foods;
        const search = normaliseSearch(state.search);
        const foods = FOOD_LIBRARY.filter(food => {
          if(state.category !== "all" && food.category !== state.category) return false;
          if(!search) return true;
          return (FOOD_SEARCH_INDEX.get(food.id) || "").includes(search);
        });
        filteredFoodsCache = { key:key, foods:foods };
        return foods;
      }
    
      function quantityToGrams(food, measureKey, amount){
        const measure = getMeasure(food, measureKey);
        const qty = Number(amount || 0);
        if(!measure || !Number.isFinite(qty)) return 0;
        return round(qty * Number(measure.gramsPerUnit || 0), 2);
      }
    
      function scaleNutrients(food, grams){
        const nutrients = {};
        const perBasis = food && food.nutritionPerBasis ? food.nutritionPerBasis : {};
        const factor = Number(food && food.basisGrams ? food.basisGrams : 100) > 0 ? (Number(grams || 0) / Number(food.basisGrams || 100)) : 0;
        NUTRIENTS.forEach(def => {
          if(def.key === "salt_g"){
            if(typeof perBasis.salt_g === "number") nutrients.salt_g = round(perBasis.salt_g * factor, 4);
            else nutrients.salt_g = round(((Number(perBasis.sodium_mg || 0) / 1000) * 2.5) * factor, 4);
          }else{
            nutrients[def.key] = round(Number(perBasis[def.key] || 0) * factor, 4);
          }
        });
        return nutrients;
      }
    
      function sumNutrients(entries){
        const totals = {};
        NUTRIENTS.forEach(def => { totals[def.key] = 0; });
        (entries || []).forEach(entry => {
          const nutrients = entry.nutrients || {};
          NUTRIENTS.forEach(def => {
            totals[def.key] += Number(nutrients[def.key] || 0);
          });
        });
        return totals;
      }
    
      function getDailyEntriesGrouped(entries){
        const grouped = new Map();
        MEAL_ORDER.forEach(meal => grouped.set(meal, []));
        (entries || []).forEach(entry => {
          const meal = MEAL_ORDER.includes(entry.meal) ? entry.meal : "Other";
          grouped.get(meal).push(entry);
        });
        return grouped;
      }
    
      function entrySummary(entry){
        return formatCompact(entry.amount, 2) + " × " + entry.measureLabel;
      }
    
      function calculateDailyTargets(profile){
        const weight = Number(profile.weightKg || 0);
        const height = Number(profile.heightCm || 0);
        const age = Number(profile.ageYears || 0);
        const sex = String(profile.sex || "unspecified");
        const activity = String(profile.activity || "moderate");
        const goal = String(profile.goal || "maintain");
        const activityFactor = HEALTH_ACTIVITY_FACTORS[activity] || 1.55;
    
        let calories = 2000;
        if(weight > 0 && height > 0 && age > 0 && (sex === "male" || sex === "female")){
          const base = (10 * weight) + (6.25 * height) - (5 * age) + (sex === "male" ? 5 : -161);
          calories = base * activityFactor;
          if(goal === "fat_loss") calories -= 300;
          if(goal === "gain") calories += 250;
        }
        calories = Math.max(1200, round(calories, 0));
    
        const protein = weight > 0 ? round(weight * (goal === "fat_loss" ? 1.8 : 1.6), 1) : 60;
        const fat = weight > 0 ? round(Math.max(55, weight * 0.9), 1) : 70;
        const carbs = round(Math.max(130, (calories - (protein * 4) - (fat * 9)) / 4), 1);
    
        return {
          energy_kcal: calories,
          protein_g: protein,
          carbs_g: carbs,
          sugar_g: 90,
          fibre_g: 30,
          fat_g: fat,
          sat_fat_g: 20,
          omega3_g: sex === "male" ? 1.6 : 1.1,
          sodium_mg: 2000,
          salt_g: 5,
          potassium_mg: 3500,
          calcium_mg: 700,
          iron_mg: sex === "female" ? 14.8 : 8.7,
          magnesium_mg: sex === "female" ? 270 : 300,
          phosphorus_mg: 550,
          folate_ug: 200,
          vitamin_c_mg: 40,
          vitamin_e_mg: sex === "female" ? 3 : 4,
          vitamin_a_ug: sex === "female" ? 600 : 700,
          vitamin_k_ug: 75
        };
      }
    
      function getPercentOfTarget(value, target){
        const n = Number(value || 0);
        const t = Number(target || 0);
        if(!Number.isFinite(n) || !Number.isFinite(t) || t <= 0) return 0;
        return (n / t) * 100;
      }
    
      function selectFood(foodId){
        const food = FOOD_BY_ID.get(foodId);
        if(!food) return;
        state.selectedFoodId = food.id;
        state.measureKey = food.defaultMeasure || (food.measures[0] && food.measures[0].key) || "g";
        state.amount = 1;
        state.editingEntryId = "";
        state.activeView = "food";
        renderFoodGrid();
        renderSelected();
        syncFeatureView();
      }
    
      function resetForm(){
        const food = getSelectedFood();
        state.amount = 1;
        state.meal = "Breakfast";
        state.measureKey = food ? (food.defaultMeasure || (food.measures[0] && food.measures[0].key) || "g") : "g";
        state.editingEntryId = "";
      }
    
      function upsertEntry(){
        const food = getSelectedFood();
        if(!food) return;
        const amount = Number(state.amount || 0);
        if(!Number.isFinite(amount) || amount <= 0) return;
        const measure = getMeasure(food, state.measureKey);
        if(!measure) return;
        const grams = quantityToGrams(food, measure.key, amount);
        if(!(grams > 0)) return;
        const nutrients = scaleNutrients(food, grams);
        const entries = getEntries(state.date).slice();
        const entry = {
          id: state.editingEntryId || uid("entry"),
          foodId: food.id,
          foodName: food.name,
          meal: state.meal,
          amount: amount,
          measureKey: measure.key,
          measureLabel: measure.label,
          grams: round(grams, 2),
          nutrients: nutrients,
          category: food.category,
          state: food.state,
          source: food.source || "",
          sourceId: food.sourceId || "",
          createdAt: Date.now()
        };
        const idx = entries.findIndex(item => item.id === entry.id);
        if(idx >= 0) entries.splice(idx, 1, entry); else entries.push(entry);
        setEntries(state.date, entries);
        resetForm();
        state.activeView = "breakdown";
        renderAll();
      }
    
      function deleteEntry(entryId){
        const entries = getEntries(state.date).filter(item => item.id !== entryId);
        setEntries(state.date, entries);
        if(state.editingEntryId === entryId) resetForm();
        renderAll();
      }
    
      function editEntry(entryId){
        const entry = getEntries(state.date).find(item => item.id === entryId);
        const food = entry ? FOOD_BY_ID.get(entry.foodId) : null;
        if(!entry || !food) return;
        state.selectedFoodId = food.id;
        state.amount = entry.amount;
        state.measureKey = entry.measureKey;
        state.meal = entry.meal;
        state.editingEntryId = entry.id;
        state.activeView = "food";
        renderAll();
      }
    
      function clearDay(){
        setEntries(state.date, []);
        setNote(state.date, "");
        state.noteDraft = "";
        resetForm();
        renderAll();
      }
    
      function saveRecipeFromCurrentEntries(){
        const entries = getEntries(state.date).filter(entry => state.recipeSourceMeal === "all" ? true : entry.meal === state.recipeSourceMeal);
        if(!entries.length){
          state.recipeMessage = "No logged entries are available for this recipe source.";
          renderRecipesView();
          return;
        }
        const name = String(state.recipeName || "").trim();
        if(!name){
          state.recipeMessage = "Enter a recipe name first.";
          renderRecipesView();
          return;
        }
        const yieldCount = Math.max(0.1, Number(state.recipeYield || 1));
        const recipes = getRecipes().slice();
        recipes.unshift({
          id: uid("recipe"),
          name: name,
          sourceMeal: state.recipeSourceMeal,
          yieldCount: round(yieldCount, 2),
          createdAt: Date.now(),
          items: entries.map(item => ({
            foodId: item.foodId,
            foodName: item.foodName,
            meal: item.meal,
            amount: item.amount,
            measureKey: item.measureKey,
            measureLabel: item.measureLabel,
            grams: item.grams,
            nutrients: Object.assign({}, item.nutrients),
            category: item.category,
            state: item.state,
            source: item.source || "",
            sourceId: item.sourceId || ""
          }))
        });
        setRecipes(recipes);
        state.recipeMessage = "Recipe saved.";
        state.recipeName = "";
        renderRecipesView();
      }
    
      function addRecipeToDay(recipeId, batchFraction, targetMeal){
        const recipes = getRecipes();
        const recipe = recipes.find(item => item.id === recipeId);
        const fraction = Number(batchFraction || 0);
        if(!recipe || !Number.isFinite(fraction) || fraction <= 0) return;
        const entries = getEntries(state.date).slice();
        const timestamp = Date.now();
        (recipe.items || []).forEach((item, index) => {
          const nutrients = {};
          NUTRIENTS.forEach(def => {
            nutrients[def.key] = round(Number(item.nutrients && item.nutrients[def.key] || 0) * fraction, 4);
          });
          entries.push({
            id: uid("entry"),
            foodId: item.foodId,
            foodName: item.foodName,
            meal: targetMeal === "keep" ? item.meal : targetMeal,
            amount: round(Number(item.amount || 0) * fraction, 3),
            measureKey: item.measureKey,
            measureLabel: item.measureLabel,
            grams: round(Number(item.grams || 0) * fraction, 2),
            nutrients: nutrients,
            category: item.category,
            state: item.state,
            source: item.source || "",
            sourceId: item.sourceId || "",
            createdAt: timestamp + index
          });
        });
        setEntries(state.date, entries);
        state.activeView = "breakdown";
        renderAll();
      }
    
      function deleteRecipe(recipeId){
        setRecipes(getRecipes().filter(item => item.id !== recipeId));
        renderRecipesView();
      }
    
      function buildAppMarkup(root){
        if(!root.querySelector(':scope > .diet-log-app')) root.innerHTML = `
          <div class="diet-log-app">
            <div class="diet-log-panel diet-log-header-panel">
              <div class="diet-log-panel-header">
                <div>
                  <h3>Daily Log</h3>
                  <p class="note">Move through the log by feature. Only the current section is shown.</p>
                </div>
                <div class="diet-log-toolbar diet-log-toolbar--header">
                  <div class="diet-field">
                    <label for="dietLogDate">Day</label>
                    <input id="dietLogDate" type="date" />
                  </div>
                  <div class="diet-log-view-nav" id="dietLogFeatureNav">
                    <button id="dietViewBtnFood" type="button" class="action">Add food item</button>
                    <button id="dietViewBtnRecipes" type="button" class="action secondary">Add recipe</button>
                    <button id="dietViewBtnBreakdown" type="button" class="action secondary">Meal breakdown</button>
                    <button id="dietViewBtnHealth" type="button" class="action secondary">View / edit health settings</button>
                  </div>
                </div>
              </div>
            </div>
    
            <section id="dietViewFood" class="diet-view">
              <div class="diet-log-shell diet-log-shell--food">
                <div class="diet-log-main">
                  <div class="diet-log-panel">
                    <div class="diet-log-panel-header">
                      <div>
                        <h3>Food Library</h3>
                        <p class="note">Search first. Items only appear when you search.</p>
                      </div>
                      <div class="diet-log-toolbar">
                        <div class="diet-field diet-field--wide">
                          <label for="dietLogSearch">Search food library</label>
                          <input id="dietLogSearch" type="search" placeholder="Search foods, ingredients, or tags" autocomplete="off" />
                        </div>
                        <div class="diet-field">
                          <label for="dietLogCategory">Category</label>
                          <select id="dietLogCategory"><option value="all">All categories</option></select>
                        </div>
                        <div class="diet-log-helper-row diet-log-helper-row--right">
                          <span id="dietLogResultCount" class="diet-inline-note"></span>
                        </div>
                      </div>
                    </div>
                    <div id="dietLogFoodGrid" class="diet-food-list"></div>
                  </div>
                </div>
                <aside class="diet-log-side">
                  <div class="diet-log-panel" id="diet-log-selected-panel">
                    <div class="diet-log-panel-header">
                      <div>
                        <h3>Selected Food</h3>
                        <p class="note">Choose meal, amount, and measure here.</p>
                      </div>
                    </div>
                    <div id="dietLogSelected"><p class="note" data-diet-log-first-paint-note>Search the food library to choose an item.</p></div>
                  </div>
                </aside>
              </div>
            </section>
    
            <section id="dietViewRecipes" class="diet-view" hidden>
              <div class="diet-log-panel">
                <div class="diet-log-panel-header">
                  <div>
                    <h3>Add Recipe</h3>
                    <p class="note">Save current logged entries as a reusable batch, then add fractions of that saved batch later.</p>
                  </div>
                </div>
                <div class="diet-selected-card diet-recipe-builder-card">
                  <div class="diet-field-grid diet-field-grid--recipe-builder">
                    <div class="diet-field">
                      <label for="dietRecipeName">Recipe name</label>
                      <input id="dietRecipeName" type="text" placeholder="e.g. Lunch dhal batch" />
                    </div>
                    <div class="diet-field">
                      <label for="dietRecipeSourceMeal">Build from</label>
                      <select id="dietRecipeSourceMeal"></select>
                    </div>
                    <div class="diet-field">
                      <label for="dietRecipeYield">Eating portions in full batch</label>
                      <input id="dietRecipeYield" type="number" min="0.1" step="0.1" value="1" />
                    </div>
                  </div>
                  <div class="diet-actions">
                    <button id="dietRecipeSave" type="button" class="action">Save recipe</button>
                  </div>
                  <div id="dietRecipeStatus" class="diet-recipe-status" aria-live="polite"></div>
                </div>
                <div id="dietLogRecipes"></div>
              </div>
            </section>
    
            <section id="dietViewBreakdown" class="diet-view" hidden>
              <div class="diet-log-stack">
                <div class="diet-log-panel">
                  <div class="diet-log-panel-header">
                    <div>
                      <h3>Entries</h3>
                      <p class="note">Meal grouping and editing for the current day.</p>
                    </div>
                    <div class="diet-log-helper-row">
                      <button id="dietLogClearDay" type="button" class="action secondary">Clear this day</button>
                    </div>
                  </div>
                  <div id="dietLogEntries"></div>
                </div>
                <div class="diet-log-panel">
                  <div class="diet-log-panel-header">
                    <div>
                      <h3>Daily Totals</h3>
                      <p class="note">Totals, targets, and percentage of daily target met.</p>
                    </div>
                  </div>
                  <div id="dietLogTotals"></div>
                </div>
                <div class="diet-log-panel">
                  <div class="diet-log-panel-header">
                    <div>
                      <h3>Daily Notes</h3>
                      <p class="note">Optional context kept with this date.</p>
                    </div>
                  </div>
                  <div class="diet-field">
                    <textarea id="dietLogNotes" rows="6" placeholder="Add daily notes here"></textarea>
                  </div>
                </div>
              </div>
            </section>
    
            <section id="dietViewHealth" class="diet-view" hidden>
              <div class="diet-log-panel">
                <div class="diet-log-panel-header">
                  <div>
                    <h3>Health Settings</h3>
                    <p class="note">Stored here and used to estimate daily targets.</p>
                  </div>
                </div>
                <div class="diet-selected-card diet-health-card">
                  <div class="diet-field-grid diet-field-grid--health">
                    <div class="diet-field">
                      <label for="dietHealthWeight">Weight (kg)</label>
                      <input id="dietHealthWeight" type="number" min="20" step="0.1" inputmode="decimal" />
                    </div>
                    <div class="diet-field">
                      <label for="dietHealthHeight">Height (cm)</label>
                      <input id="dietHealthHeight" type="number" min="100" step="1" inputmode="numeric" />
                    </div>
                    <div class="diet-field">
                      <label for="dietHealthAge">Age</label>
                      <input id="dietHealthAge" type="number" min="13" step="1" inputmode="numeric" />
                    </div>
                    <div class="diet-field">
                      <label for="dietHealthSex">Sex</label>
                      <select id="dietHealthSex">
                        <option value="unspecified">Unspecified</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </div>
                    <div class="diet-field">
                      <label for="dietHealthActivity">Activity</label>
                      <select id="dietHealthActivity">
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Lightly active</option>
                        <option value="moderate">Moderately active</option>
                        <option value="active">Active</option>
                        <option value="very_active">Very active</option>
                      </select>
                    </div>
                    <div class="diet-field">
                      <label for="dietHealthGoal">Goal</label>
                      <select id="dietHealthGoal">
                        <option value="maintain">Maintain</option>
                        <option value="fat_loss">Fat loss</option>
                        <option value="gain">Gain</option>
                      </select>
                    </div>
                  </div>
                  <div id="dietHealthSummary"></div>
                </div>
              </div>
            </section>
          </div>
        `;
    
        refs = {
          dateInput: document.getElementById("dietLogDate"),
          viewBtnFood: document.getElementById("dietViewBtnFood"),
          viewBtnRecipes: document.getElementById("dietViewBtnRecipes"),
          viewBtnBreakdown: document.getElementById("dietViewBtnBreakdown"),
          viewBtnHealth: document.getElementById("dietViewBtnHealth"),
          viewFood: document.getElementById("dietViewFood"),
          viewRecipes: document.getElementById("dietViewRecipes"),
          viewBreakdown: document.getElementById("dietViewBreakdown"),
          viewHealth: document.getElementById("dietViewHealth"),
          searchInput: document.getElementById("dietLogSearch"),
          categorySelect: document.getElementById("dietLogCategory"),
          resultCount: document.getElementById("dietLogResultCount"),
          foodGrid: document.getElementById("dietLogFoodGrid"),
          selected: document.getElementById("dietLogSelected"),
          recipeName: document.getElementById("dietRecipeName"),
          recipeSourceMeal: document.getElementById("dietRecipeSourceMeal"),
          recipeYield: document.getElementById("dietRecipeYield"),
          recipeSave: document.getElementById("dietRecipeSave"),
          recipeStatus: document.getElementById("dietRecipeStatus"),
          recipes: document.getElementById("dietLogRecipes"),
          entries: document.getElementById("dietLogEntries"),
          totals: document.getElementById("dietLogTotals"),
          notes: document.getElementById("dietLogNotes"),
          clearDay: document.getElementById("dietLogClearDay"),
          healthWeight: document.getElementById("dietHealthWeight"),
          healthHeight: document.getElementById("dietHealthHeight"),
          healthAge: document.getElementById("dietHealthAge"),
          healthSex: document.getElementById("dietHealthSex"),
          healthActivity: document.getElementById("dietHealthActivity"),
          healthGoal: document.getElementById("dietHealthGoal"),
          healthSummary: document.getElementById("dietHealthSummary")
        };
    
        populateCategoryOptions();
        populateRecipeSourceOptions();
        bindEvents();
        enhanceInteractiveControls(root);
      }
    
      function enhanceInteractiveControls(root){
        try{ if(typeof window.BASELINE_enhanceAllSelects === "function") window.BASELINE_enhanceAllSelects(root || document); }catch(_e){}
      }
    
      function populateCategoryOptions(){
        if(!refs || !refs.categorySelect) return;
        const categories = Array.from(new Set(FOOD_LIBRARY.map(item => item.category))).sort((a,b) => {
          const ai = categoryRank.has(a) ? categoryRank.get(a) : 999;
          const bi = categoryRank.has(b) ? categoryRank.get(b) : 999;
          if(ai !== bi) return ai - bi;
          return a.localeCompare(b);
        });
        refs.categorySelect.innerHTML = '<option value="all">All categories</option>' + categories.map(category => '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>').join('');
      }
    
      function populateRecipeSourceOptions(){
        if(!refs || !refs.recipeSourceMeal) return;
        const current = state.recipeSourceMeal || "all";
        const counts = new Map();
        MEAL_ORDER.forEach(meal => counts.set(meal, 0));
        const entries = getEntries(state.date);
        entries.forEach(entry => {
          const meal = MEAL_ORDER.includes(entry.meal) ? entry.meal : "Other";
          counts.set(meal, (counts.get(meal) || 0) + 1);
        });
        const options = ['<option value="all">All logged entries (' + entries.length + ')</option>'].concat(MEAL_ORDER.map(meal => '<option value="' + meal + '">' + meal + ' (' + (counts.get(meal) || 0) + ')</option>'));
        refs.recipeSourceMeal.innerHTML = options.join('');
        refs.recipeSourceMeal.value = current;
        enhanceInteractiveControls(refs.recipeSourceMeal.parentNode || document);
      }
    
      function syncFeatureView(){
        if(!refs) return;
        const map = {
          food: refs.viewFood,
          recipes: refs.viewRecipes,
          breakdown: refs.viewBreakdown,
          health: refs.viewHealth
        };
        Object.keys(map).forEach(name => {
          const section = map[name];
          if(!section) return;
          const active = state.activeView === name;
          section.hidden = !active;
        });
        const buttonMap = {
          food: refs.viewBtnFood,
          recipes: refs.viewBtnRecipes,
          breakdown: refs.viewBtnBreakdown,
          health: refs.viewBtnHealth
        };
        Object.keys(buttonMap).forEach(name => {
          const btn = buttonMap[name];
          if(!btn) return;
          const active = state.activeView === name;
          btn.classList.toggle("secondary", !active);
          btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
      }
    
      function bindEvents(){
        if(!refs) return;
    
        refs.dateInput.addEventListener("change", function(event){
          clearScheduledSearchRender();
          state.date = event.target.value || todayISO();
          state.noteDraft = getNote(state.date);
          resetForm();
          renderAll();
        });
    
        refs.viewBtnFood.addEventListener("click", function(){ state.activeView = "food"; syncFeatureView(); });
        refs.viewBtnRecipes.addEventListener("click", function(){ state.activeView = "recipes"; syncFeatureView(); renderRecipesView(); });
        refs.viewBtnBreakdown.addEventListener("click", function(){ state.activeView = "breakdown"; syncFeatureView(); renderEntries(); renderTotals(); });
        refs.viewBtnHealth.addEventListener("click", function(){ state.activeView = "health"; syncFeatureView(); renderHealth(); });
    
        refs.searchInput.addEventListener("input", function(event){
          state.search = event.target.value || "";
          invalidateFilteredFoodsCache();
          scheduleFoodSearchRender();
        });
        refs.categorySelect.addEventListener("change", function(event){
          state.category = event.target.value || "all";
          invalidateFilteredFoodsCache();
          renderFoodGrid();
        });
    
        refs.foodGrid.addEventListener("click", function(event){
          const btn = event.target.closest("[data-select-food]");
          if(!btn) return;
          event.preventDefault();
          selectFood(btn.getAttribute("data-select-food"));
        });
    
        refs.selected.addEventListener("change", function(event){
          if(event.target.id === "dietSelectedMeal") state.meal = event.target.value;
          if(event.target.id === "dietSelectedMeasure") state.measureKey = event.target.value;
          if(event.target.id === "dietSelectedAmount") state.amount = Number(String(event.target.value || "").replace(',', '.'));
          if(event.target.id === "dietSelectedMeal" || event.target.id === "dietSelectedMeasure"){
            renderSelected();
          }else{
            updateSelectedPreview();
          }
        });
    
        refs.selected.addEventListener("input", function(event){
          if(event.target.id === "dietSelectedAmount"){
            const raw = String(event.target.value || "").replace(',', '.');
            const parsed = Number(raw);
            if(raw === "") state.amount = "";
            else state.amount = Number.isFinite(parsed) ? parsed : state.amount;
            updateSelectedPreview();
          }
        });
    
        refs.selected.addEventListener("click", function(event){
          const saveBtn = event.target.closest("[data-diet-save]");
          const resetBtn = event.target.closest("[data-diet-reset]");
          if(saveBtn){
            event.preventDefault();
            upsertEntry();
          }
          if(resetBtn){
            event.preventDefault();
            resetForm();
            renderSelected();
          }
        });
    
        refs.entries.addEventListener("click", function(event){
          const editBtn = event.target.closest("[data-edit-entry]");
          const deleteBtn = event.target.closest("[data-delete-entry]");
          if(editBtn){
            event.preventDefault();
            editEntry(editBtn.getAttribute("data-edit-entry"));
          }
          if(deleteBtn){
            event.preventDefault();
            deleteEntry(deleteBtn.getAttribute("data-delete-entry"));
          }
        });
    
        refs.recipeName.addEventListener("input", function(event){ state.recipeName = event.target.value || ""; });
        refs.recipeSourceMeal.addEventListener("change", function(event){ state.recipeSourceMeal = event.target.value || "all"; });
        refs.recipeYield.addEventListener("input", function(event){ state.recipeYield = Number(event.target.value || 0); });
        refs.recipeSave.addEventListener("click", function(event){ event.preventDefault(); saveRecipeFromCurrentEntries(); });
        refs.recipes.addEventListener("click", function(event){
          const addBtn = event.target.closest("[data-add-recipe]");
          const deleteBtn = event.target.closest("[data-delete-recipe]");
          if(addBtn){
            event.preventDefault();
            const card = addBtn.closest("[data-recipe-card]");
            if(!card) return;
            const fractionInput = card.querySelector("[data-recipe-fraction]");
            const mealSelect = card.querySelector("[data-recipe-target-meal]");
            addRecipeToDay(addBtn.getAttribute("data-add-recipe"), fractionInput ? fractionInput.value : 1, mealSelect ? mealSelect.value : "keep");
          }
          if(deleteBtn){
            event.preventDefault();
            deleteRecipe(deleteBtn.getAttribute("data-delete-recipe"));
          }
        });
    
        refs.clearDay.addEventListener("click", function(event){
          event.preventDefault();
          clearDay();
        });
    
        refs.notes.addEventListener("input", function(event){
          state.noteDraft = event.target.value || "";
          setNote(state.date, state.noteDraft);
        });
    
        const persistHealth = function(){
          setHealthProfile({
            weightKg: sanitisePositive(refs.healthWeight.value, 1),
            heightCm: sanitisePositive(refs.healthHeight.value, 0),
            ageYears: sanitisePositive(refs.healthAge.value, 0),
            sex: refs.healthSex.value || "unspecified",
            activity: refs.healthActivity.value || "moderate",
            goal: refs.healthGoal.value || "maintain"
          });
          renderHealth();
          renderTotals();
          updateSelectedPreview();
        };
        [refs.healthWeight, refs.healthHeight, refs.healthAge].forEach(function(input){
          input.addEventListener("input", persistHealth);
          input.addEventListener("change", persistHealth);
        });
        [refs.healthSex, refs.healthActivity, refs.healthGoal].forEach(function(select){
          select.addEventListener("change", persistHealth);
        });
      }
    
      function renderFoodGrid(){
        if(!refs || !refs.foodGrid || !refs.resultCount) return;
        const foods = getFilteredFoods();
        const search = normaliseSearch(state.search);
        if(!FOOD_LIBRARY.length){
          refs.resultCount.textContent = "No food library is loaded.";
          refs.foodGrid.innerHTML = '<p class="note">The comprehensive food library is not available in this file set.</p>';
          return;
        }
        if(!search){
          refs.resultCount.textContent = "Search to display food items.";
          refs.foodGrid.innerHTML = '<p class="note">No food items are shown until you enter a search.</p>';
          return;
        }
        if(!foods.length){
          refs.resultCount.textContent = "No foods match the current search.";
          refs.foodGrid.innerHTML = '<p class="note">No matching food items were found for this search.</p>';
          return;
        }
        const visibleFoods = foods.slice(0, 80);
        refs.resultCount.textContent = visibleFoods.length + (foods.length > 80 ? ' of ' + foods.length : '') + ' foods match the current search.';
        refs.foodGrid.innerHTML = visibleFoods.map(function(food){
          const selected = food.id === state.selectedFoodId;
          const sourceLine = food.source ? ' • ' + escapeHtml(food.source) : '';
          return `
            <article class="diet-food-row${selected ? ' is-selected' : ''}">
              <div class="diet-food-row-copy">
                <div class="diet-food-kicker">${escapeHtml(food.category)} • ${escapeHtml(food.state)}${sourceLine}</div>
                <h4>${escapeHtml(food.name)}</h4>
                <p class="diet-food-copy">${escapeHtml(food.description || '')}</p>
              </div>
              <div class="diet-food-row-meta">
                <span class="diet-inline-note">${formatCompact(food.nutritionPerBasis.energy_kcal || 0, 0)} kcal / ${escapeHtml(food.basisLabel || '100 g')}</span>
                <button type="button" class="action" data-select-food="${escapeHtml(food.id)}">${selected ? 'Selected' : 'Select'}</button>
              </div>
            </article>
          `;
        }).join('');
      }
    
      function renderSelected(){
        if(!refs || !refs.selected) return;
        const food = getSelectedFood();
        if(!food){
          refs.selected.innerHTML = '<p class="note">No food is currently selected.</p>';
          return;
        }
        const measureOptions = (food.measures || []).map(function(measure){
          return '<option value="' + escapeHtml(measure.key) + '"' + (measure.key === state.measureKey ? ' selected' : '') + '>' + escapeHtml(measure.label) + '</option>';
        }).join('');
        const amountValue = Number(state.amount || 0) > 0 ? formatCompact(state.amount, 2) : '';
        refs.selected.innerHTML = `
          <div class="diet-selected-card">
            <div class="diet-selected-head">
              <div>
                <div class="diet-food-kicker">${escapeHtml(food.category)} • ${escapeHtml(food.subcategory || '')} • ${escapeHtml(food.state)}</div>
                <h4>${escapeHtml(food.name)}</h4>
                <p class="note">${escapeHtml(food.description || '')}</p>
                <p class="diet-source-line">${escapeHtml(food.source || 'Custom / imported')} ${food.sourceId ? '• ' + escapeHtml(food.sourceId) : ''}</p>
              </div>
            </div>
            <div class="diet-field-grid">
              <div class="diet-field">
                <label for="dietSelectedMeal">Meal</label>
                <select id="dietSelectedMeal">${MEAL_ORDER.map(function(meal){ return '<option value="' + meal + '"' + (meal === state.meal ? ' selected' : '') + '>' + meal + '</option>'; }).join('')}</select>
              </div>
              <div class="diet-field">
                <label for="dietSelectedAmount">Amount</label>
                <input id="dietSelectedAmount" type="number" min="0.1" step="0.1" inputmode="decimal" value="${escapeHtml(amountValue)}" />
              </div>
              <div class="diet-field">
                <label for="dietSelectedMeasure">Measure</label>
                <select id="dietSelectedMeasure">${measureOptions}</select>
              </div>
            </div>
            <div id="dietSelectedGrams" class="diet-serving-line"></div>
            <div id="dietSelectedStats" class="diet-mini-stat-grid"></div>
            <div class="diet-actions">
              <button type="button" class="action" data-diet-save>${state.editingEntryId ? 'Update entry' : 'Add to day'}</button>
              <button type="button" class="action secondary" data-diet-reset>Reset</button>
            </div>
            <div class="diet-nutrient-table-wrap">
              <table class="diet-nutrient-table">
                <thead><tr><th>Nutrient</th><th>Current serving</th><th>% of daily target</th></tr></thead>
                <tbody id="dietSelectedRows"></tbody>
              </table>
            </div>
          </div>
        `;
        enhanceInteractiveControls(refs.selected);
        updateSelectedPreview();
      }
    
      function updateSelectedPreview(){
        if(!refs || !refs.selected) return;
        const food = getSelectedFood();
        if(!food) return;
        const measure = getMeasure(food, state.measureKey);
        const amount = Number(state.amount || 0) > 0 ? Number(state.amount || 0) : 0;
        const grams = quantityToGrams(food, measure ? measure.key : 'g', amount);
        const preview = scaleNutrients(food, grams);
        const targets = calculateDailyTargets(getHealthProfile());
    
        const gramsEl = document.getElementById('dietSelectedGrams');
        const statsEl = document.getElementById('dietSelectedStats');
        const rowsEl = document.getElementById('dietSelectedRows');
        if(gramsEl){
          gramsEl.innerHTML = amount > 0 ? ('Stored conversion: <strong>' + formatCompact(grams, 2) + ' g</strong> for this serving.') : 'Enter an amount to see the serving analysis.';
        }
        if(statsEl){
          const kpiKeys = ['energy_kcal','protein_g','carbs_g','fat_g','fibre_g','salt_g'];
          statsEl.innerHTML = kpiKeys.map(function(key){
            const def = NUTRIENTS.find(function(item){ return item.key === key; });
            return '<div class="diet-mini-stat"><span>' + escapeHtml(def.label) + '</span><strong>' + formatValue(preview[key] || 0, def.decimals) + ' ' + escapeHtml(def.unit) + '</strong></div>';
          }).join('');
        }
        if(rowsEl){
          rowsEl.innerHTML = NUTRIENTS.map(function(def){
            const value = Number(preview[def.key] || 0);
            const target = Number(targets[def.key] || 0);
            if(value <= 0.0001 && target <= 0) return '';
            return '<tr><td>' + escapeHtml(def.label) + '</td><td>' + formatValue(value, def.decimals) + ' ' + escapeHtml(def.unit) + '</td><td>' + formatPercent(getPercentOfTarget(value, target)) + '</td></tr>';
          }).join('');
        }
      }
    
      function renderRecipesView(){
        if(!refs || !refs.recipes) return;
        refs.recipeName.value = state.recipeName || '';
        refs.recipeYield.value = state.recipeYield || 1;
        refs.recipeStatus.textContent = state.recipeMessage || '';
        const recipes = getRecipes();
        if(!recipes.length){
          refs.recipes.innerHTML = '<p class="note">No saved recipes yet.</p>';
          populateRecipeSourceOptions();
          return;
        }
        refs.recipes.innerHTML = recipes.map(function(recipe){
          const itemCount = Array.isArray(recipe.items) ? recipe.items.length : 0;
          return `
            <article class="diet-entry-card diet-recipe-card" data-recipe-card="${escapeHtml(recipe.id)}">
              <div class="diet-entry-group-head">
                <div>
                  <div class="diet-food-kicker">Saved batch • ${itemCount} logged ${itemCount === 1 ? 'item' : 'items'}</div>
                  <h4>${escapeHtml(recipe.name)}</h4>
                  <p class="diet-entry-copy">Use 1 for the full saved batch, 0.25 for a quarter of that batch.</p>
                </div>
              </div>
              <div class="diet-field-grid diet-field-grid--recipe-readd">
                <div class="diet-field">
                  <label>Portion of saved batch</label>
                  <input type="number" min="0.01" step="0.01" value="1" data-recipe-fraction />
                </div>
                <div class="diet-field">
                  <label>Log into meal</label>
                  <select data-recipe-target-meal>
                    <option value="keep">Keep original meal(s)</option>
                    ${MEAL_ORDER.map(function(meal){ return '<option value="' + meal + '">' + meal + '</option>'; }).join('')}
                  </select>
                </div>
                <div class="diet-field">
                  <label>Stored eating portions</label>
                  <div class="diet-static-value">${formatCompact(recipe.yieldCount || 1, 2)}</div>
                </div>
              </div>
              <div class="diet-actions">
                <button type="button" class="action" data-add-recipe="${escapeHtml(recipe.id)}">Add recipe to day</button>
                <button type="button" class="action secondary" data-delete-recipe="${escapeHtml(recipe.id)}">Delete</button>
              </div>
            </article>
          `;
        }).join('');
        populateRecipeSourceOptions();
        enhanceInteractiveControls(refs.recipes);
      }
    
      function renderEntries(){
        if(!refs || !refs.entries) return;
        const entries = getEntries(state.date).slice().sort(function(a,b){
          return (MEAL_ORDER.indexOf(a.meal) - MEAL_ORDER.indexOf(b.meal)) || ((a.createdAt || 0) - (b.createdAt || 0));
        });
        if(!entries.length){
          refs.entries.innerHTML = '<p class="note">No foods logged for this date yet.</p>';
          return;
        }
        const grouped = getDailyEntriesGrouped(entries);
        refs.entries.innerHTML = Array.from(grouped.entries()).filter(function(pair){ return pair[1].length; }).map(function(pair){
          const meal = pair[0], items = pair[1];
          return `
            <section class="diet-entry-group">
              <div class="diet-entry-group-head">
                <h4>${escapeHtml(meal)}</h4>
                <span class="diet-inline-note">${items.length} entr${items.length === 1 ? 'y' : 'ies'}</span>
              </div>
              <div class="diet-entry-list">
                ${items.map(function(entry){
                  return `
                    <article class="diet-entry-card">
                      <div class="diet-entry-main">
                        <div>
                          <div class="diet-food-kicker">${escapeHtml(entry.category || '')} • ${escapeHtml(entry.state || '')}</div>
                          <h5>${escapeHtml(entry.foodName)}</h5>
                          <p class="diet-entry-copy">${escapeHtml(entrySummary(entry))} • ${formatCompact(entry.grams, 2)} g</p>
                        </div>
                        <div class="diet-entry-macros">
                          <span>${formatCompact(entry.nutrients.energy_kcal, 0)} kcal</span>
                          <span>${formatCompact(entry.nutrients.protein_g, 1)} g protein</span>
                          <span>${formatCompact(entry.nutrients.carbs_g, 1)} g carbs</span>
                          <span>${formatCompact(entry.nutrients.fat_g, 1)} g fat</span>
                        </div>
                      </div>
                      <div class="diet-entry-actions">
                        <button type="button" class="action secondary" data-edit-entry="${escapeHtml(entry.id)}">Edit</button>
                        <button type="button" class="action secondary" data-delete-entry="${escapeHtml(entry.id)}">Remove</button>
                      </div>
                    </article>
                  `;
                }).join('')}
              </div>
            </section>
          `;
        }).join('');
      }
    
      function renderTotals(){
        if(!refs || !refs.totals) return;
        const entries = getEntries(state.date);
        const totals = sumNutrients(entries);
        const targets = calculateDailyTargets(getHealthProfile());
        const itemCount = entries.length;
        const uniqueCount = new Set(entries.map(function(item){ return item.foodId; })).size;
        const kpiKeys = ['energy_kcal','protein_g','carbs_g','fat_g','fibre_g','salt_g'];
        const kpis = kpiKeys.map(function(key){
          const def = NUTRIENTS.find(function(item){ return item.key === key; });
          const total = Number(totals[key] || 0);
          const target = Number(targets[key] || 0);
          return '<div class="diet-kpi-card"><span>' + escapeHtml(def.label) + '</span><strong>' + formatValue(total, def.decimals) + ' ' + escapeHtml(def.unit) + '</strong><small>' + formatPercent(getPercentOfTarget(total, target)) + ' of target</small></div>';
        }).join('');
        refs.totals.innerHTML = `
          <div class="diet-kpi-grid">${kpis}</div>
          <div class="diet-total-meta">
            <span class="diet-inline-note">${itemCount} logged entr${itemCount === 1 ? 'y' : 'ies'}</span>
            <span class="diet-inline-note">${uniqueCount} unique foods</span>
          </div>
          <div class="diet-nutrient-table-wrap">
            <table class="diet-nutrient-table">
              <thead><tr><th>Nutrient</th><th>Total</th><th>Target</th><th>% met</th></tr></thead>
              <tbody>
                ${NUTRIENTS.map(function(def){
                  const total = Number(totals[def.key] || 0);
                  const target = Number(targets[def.key] || 0);
                  if(total <= 0.0001 && target <= 0) return '';
                  return '<tr><td>' + escapeHtml(def.label) + '</td><td>' + formatValue(total, def.decimals) + ' ' + escapeHtml(def.unit) + '</td><td>' + (target > 0 ? (formatValue(target, def.decimals) + ' ' + escapeHtml(def.unit)) : '—') + '</td><td>' + formatPercent(getPercentOfTarget(total, target)) + '</td></tr>';
                }).join('')}
              </tbody>
            </table>
          </div>
        `;
      }
    
      function renderHealth(){
        if(!refs || !refs.healthSummary) return;
        const profile = getHealthProfile();
        const targets = calculateDailyTargets(profile);
        refs.healthWeight.value = profile.weightKg || '';
        refs.healthHeight.value = profile.heightCm || '';
        refs.healthAge.value = profile.ageYears || '';
        refs.healthSex.value = profile.sex || 'unspecified';
        refs.healthActivity.value = profile.activity || 'moderate';
        refs.healthGoal.value = profile.goal || 'maintain';
        refs.healthSummary.innerHTML = `
          <div class="diet-kpi-grid">
            <div class="diet-kpi-card"><span>Estimated energy target</span><strong>${formatValue(targets.energy_kcal, 0)} kcal</strong></div>
            <div class="diet-kpi-card"><span>Protein target</span><strong>${formatValue(targets.protein_g, 1)} g</strong></div>
            <div class="diet-kpi-card"><span>Carbohydrate target</span><strong>${formatValue(targets.carbs_g, 1)} g</strong></div>
            <div class="diet-kpi-card"><span>Fat target</span><strong>${formatValue(targets.fat_g, 1)} g</strong></div>
          </div>
          <p class="note">Daily Totals and selected-food analysis use these saved targets for percentage coverage.</p>
        `;
        enhanceInteractiveControls(refs.viewHealth);
      }
    
      function renderAll(){
        clearScheduledSearchRender();
        ensureSelectedFood();
        if(refs){
          refs.dateInput.value = state.date;
          if(refs.searchInput && refs.searchInput.value !== state.search) refs.searchInput.value = state.search;
          if(refs.categorySelect && refs.categorySelect.value !== state.category) refs.categorySelect.value = state.category;
          if(refs.notes) refs.notes.value = getNote(state.date);
        }
        syncFeatureView();
        renderFoodGrid();
        renderSelected();
        renderRecipesView();
        renderEntries();
        renderTotals();
        renderHealth();
      }
    
      function init(){
        const host = document.getElementById("dietLogApp");
        if(!host) return;
        state.noteDraft = getNote(state.date);
        buildAppMarkup(host);
        renderAll();
      }
    
      if(document.readyState === "loading"){
        document.addEventListener("DOMContentLoaded", init, { once:true });
      }else{
        init();
      }
    })();
  }
  var ready=window.BASELINE_DIET_FOOD_LIBRARY_READY;
  if(ready&&typeof ready.then==="function") ready.then(start,function(e){if(console)console.error(e);start();}); else start();
})();
