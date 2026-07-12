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
  "id": "usda-sr-legacy-172404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "0-5-chicken-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone and skin removed"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, stewing, dark meat, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 657.0,
    "fat_g": 8.12,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.22,
    "magnesium_mg": 23.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 190.0,
    "potassium_mg": 242.0,
    "protein_g": 19.7,
    "salt_g": 0.2525,
    "sat_fat_g": 2.08,
    "sodium_mg": 101.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172404",
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
