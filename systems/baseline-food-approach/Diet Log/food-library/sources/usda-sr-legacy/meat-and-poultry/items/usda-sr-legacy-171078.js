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
  "id": "usda-sr-legacy-171078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "0-5-breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 breast, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, breast, meat only, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.51,
    "energy_kcal": 782.0,
    "fat_g": 4.71,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.14,
    "magnesium_mg": 31.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 246.0,
    "potassium_mg": 276.0,
    "protein_g": 33.4,
    "salt_g": 0.1975,
    "sat_fat_g": 1.29,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171078",
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
