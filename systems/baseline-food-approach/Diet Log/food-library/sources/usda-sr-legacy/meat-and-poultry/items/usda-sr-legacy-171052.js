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
  "id": "usda-sr-legacy-171052",
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
      "gramsPerUnit": 197.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 329.0,
      "key": "0-5-chicken-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 498.0,
    "fat_g": 3.08,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.89,
    "magnesium_mg": 25.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 173.0,
    "potassium_mg": 229.0,
    "protein_g": 21.4,
    "salt_g": 0.1925,
    "sat_fat_g": 0.79,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171052",
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
