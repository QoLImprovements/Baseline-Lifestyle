/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "0-5-chicken-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone and skin removed"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, stewing, light meat, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 573.0,
    "fat_g": 4.21,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.92,
    "magnesium_mg": 26.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 231.0,
    "potassium_mg": 261.0,
    "protein_g": 23.1,
    "salt_g": 0.1325,
    "sat_fat_g": 0.97,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173643",
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
