/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-chicken",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "0-5-back-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 back, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat only, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 5.68,
    "energy_kcal": 1200.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.65,
    "magnesium_mg": 25.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 176.0,
    "potassium_mg": 251.0,
    "protein_g": 30.0,
    "salt_g": 0.2475,
    "sat_fat_g": 4.12,
    "sodium_mg": 99.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171074",
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
