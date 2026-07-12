/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-pheasant",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 352.0,
      "key": "0-5-pheasant",
      "kind": "unit",
      "label": "0.5 pheasant"
    },
    {
      "gramsPerUnit": 326.0,
      "key": "unit-yield-from-1-lb-ready-to-eat-pheasant",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-eat pheasant)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pheasant, raw, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 556.0,
    "fat_g": 3.64,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.15,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 262.0,
    "protein_g": 23.6,
    "salt_g": 0.0925,
    "sat_fat_g": 1.24,
    "sodium_mg": 37.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174473",
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
