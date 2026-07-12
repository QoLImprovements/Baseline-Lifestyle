/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-breast-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174469",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "0-5-breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 breast, bone and skin removed"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-duck",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook duck)"
    }
  ],
  "name": "Duck, wild, breast, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 515.0,
    "fat_g": 4.25,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 4.51,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 186.0,
    "potassium_mg": 268.0,
    "protein_g": 19.8,
    "salt_g": 0.1425,
    "sat_fat_g": 1.32,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174469",
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
