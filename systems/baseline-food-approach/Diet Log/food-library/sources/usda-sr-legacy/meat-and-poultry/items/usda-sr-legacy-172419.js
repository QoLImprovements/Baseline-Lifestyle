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
  "id": "usda-sr-legacy-172419",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 342.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-quail",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook quail)"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quail",
      "kind": "unit",
      "label": "quail"
    }
  ],
  "name": "Quail, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 561.0,
    "fat_g": 4.53,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 4.51,
    "magnesium_mg": 25.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 307.0,
    "potassium_mg": 237.0,
    "protein_g": 21.8,
    "salt_g": 0.1275,
    "sat_fat_g": 1.32,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172419",
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
