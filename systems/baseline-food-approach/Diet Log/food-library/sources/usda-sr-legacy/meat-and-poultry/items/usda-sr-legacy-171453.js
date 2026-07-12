/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171453",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "chicken-skin-only",
      "kind": "unit",
      "label": "chicken, skin only"
    }
  ],
  "name": "Chicken, broilers or fryers, skin only, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 23.2,
    "energy_kcal": 1650.0,
    "fat_g": 28.8,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 1.43,
    "magnesium_mg": 12.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 80.0,
    "potassium_mg": 75.0,
    "protein_g": 10.3,
    "salt_g": 1.4525,
    "sat_fat_g": 7.61,
    "sodium_mg": 581.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171453",
  "state": "Fried",
  "subcategory": "Poultry Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
