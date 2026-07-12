/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-9-servings-per-24-oz-package",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "serving-9-servings-per-24-oz-package",
      "kind": "unit",
      "label": "serving 9 servings per 24 oz package"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "serving-3-servings-per-15-1-oz-package",
      "kind": "unit",
      "label": "serving 3 servings per 15.1 oz package"
    },
    {
      "gramsPerUnit": 452.0,
      "key": "package-15-1-oz-pizza",
      "kind": "unit",
      "label": "package 15.1 oz pizza"
    },
    {
      "gramsPerUnit": 727.0,
      "key": "package-24-oz-pizza",
      "kind": "unit",
      "label": "package 24 oz pizza"
    },
    {
      "gramsPerUnit": 293.0,
      "key": "package-9-8-oz-pizza",
      "kind": "unit",
      "label": "package 9.8 oz pizza"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "serving-2-servings-per-9-8-oz-package",
      "kind": "unit",
      "label": "serving 2 servings per 9.8 oz package"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "serving-1-serving-per-8-oz-box",
      "kind": "unit",
      "label": "serving 1 serving per 8 oz box"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "package-8-oz-pizza",
      "kind": "unit",
      "label": "package 8 oz pizza"
    }
  ],
  "name": "Pizza, cheese topping, regular crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 179.0,
    "carbs_g": 29.0,
    "energy_kcal": 268.0,
    "fat_g": 12.3,
    "fibre_g": 2.2,
    "folate_ug": 38.0,
    "iron_mg": 2.27,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 179.0,
    "potassium_mg": 152.0,
    "protein_g": 10.4,
    "salt_g": 1.1175,
    "sat_fat_g": 4.27,
    "sodium_mg": 447.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170317",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
