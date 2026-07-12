/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-quail",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 405.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-quail",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook quail)"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "quail",
      "kind": "unit",
      "label": "quail"
    }
  ],
  "name": "Quail, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 803.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.97,
    "magnesium_mg": 23.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 275.0,
    "potassium_mg": 216.0,
    "protein_g": 19.6,
    "salt_g": 0.1325,
    "sat_fat_g": 3.38,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 6.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172418",
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
