/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171452",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "chicken-skin-only",
      "kind": "unit",
      "label": "chicken, skin only"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, skin only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 349.0,
    "fat_g": 32.4,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.08,
    "magnesium_mg": 13.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 100.0,
    "potassium_mg": 103.0,
    "protein_g": 13.3,
    "salt_g": 0.1575,
    "sat_fat_g": 9.08,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171452",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
