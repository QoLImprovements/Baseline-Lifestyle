/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-with-bone-and-breading",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "thigh-with-bone-and-breading",
      "kind": "unit",
      "label": "thigh with bone and breading"
    }
  ],
  "name": "Chicken, thighs, frozen, breaded, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 14.2,
    "energy_kcal": 334.0,
    "fat_g": 22.4,
    "fibre_g": 0.1,
    "folate_ug": 20.0,
    "iron_mg": 1.26,
    "magnesium_mg": 31.0,
    "omega3_g": 0.239,
    "phosphorus_mg": 190.0,
    "potassium_mg": 279.0,
    "protein_g": 18.7,
    "salt_g": 2.0325,
    "sat_fat_g": 5.21,
    "sodium_mg": 813.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168961",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
