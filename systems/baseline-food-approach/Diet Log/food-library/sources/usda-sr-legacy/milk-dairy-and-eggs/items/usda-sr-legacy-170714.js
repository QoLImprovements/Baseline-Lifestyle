/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-19-7-oz-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 595.0,
      "key": "package-19-7-oz-pizza",
      "kind": "unit",
      "label": "package 19.7 oz pizza"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "serving-4-servings-per-19-7-oz-package",
      "kind": "unit",
      "label": "serving 4 servings per 19.7 oz package"
    },
    {
      "gramsPerUnit": 834.0,
      "key": "package-29-25-oz-pizza",
      "kind": "unit",
      "label": "package 29.25 oz pizza"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "serving-6-servings-per-29-25-oz-package",
      "kind": "unit",
      "label": "serving 6 servings per 29.25 oz package"
    }
  ],
  "name": "Pizza, cheese topping, rising crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 32.9,
    "energy_kcal": 1090.0,
    "fat_g": 8.78,
    "fibre_g": 2.5,
    "folate_ug": 37.0,
    "iron_mg": 1.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 238.0,
    "potassium_mg": 175.0,
    "protein_g": 12.4,
    "salt_g": 1.39,
    "sat_fat_g": 3.82,
    "sodium_mg": 556.0,
    "sugar_g": 5.09,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170714",
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
