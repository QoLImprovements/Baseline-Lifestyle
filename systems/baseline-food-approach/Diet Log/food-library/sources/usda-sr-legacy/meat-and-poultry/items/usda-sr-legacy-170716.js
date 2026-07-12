/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-30-7-oz-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 891.0,
      "key": "package-30-7-oz-pizza",
      "kind": "unit",
      "label": "package 30.7 oz pizza"
    },
    {
      "gramsPerUnit": 1020.0,
      "key": "package-34-98-oz-pizza",
      "kind": "unit",
      "label": "package 34.98 oz pizza"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "serving-6-servings-per-30-7-oz-package",
      "kind": "unit",
      "label": "serving 6 servings per 30.7 oz package"
    },
    {
      "gramsPerUnit": 415.0,
      "key": "package-14-3-oz-pizza",
      "kind": "unit",
      "label": "package 14.3 oz pizza"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "serving-6-servings-per-34-98-oz-package",
      "kind": "unit",
      "label": "serving 6 servings per 34.98 oz package"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "serving-3-servings-per-14-3-oz-package",
      "kind": "unit",
      "label": "serving 3 servings per 14.3 oz package"
    }
  ],
  "name": "Pizza, meat and vegetable topping, rising crust, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 28.8,
    "energy_kcal": 271.0,
    "fat_g": 11.8,
    "fibre_g": 2.3,
    "folate_ug": 70.0,
    "iron_mg": 1.36,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 211.0,
    "potassium_mg": 189.0,
    "protein_g": 12.6,
    "salt_g": 1.6,
    "sat_fat_g": 4.59,
    "sodium_mg": 640.0,
    "sugar_g": 7.26,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170716",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
