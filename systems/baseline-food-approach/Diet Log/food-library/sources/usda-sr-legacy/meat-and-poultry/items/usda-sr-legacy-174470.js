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
  "id": "usda-sr-legacy-174470",
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
      "gramsPerUnit": 1319.0,
      "key": "0-5-goose",
      "kind": "unit",
      "label": "0.5 goose"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-goose",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook goose)"
    }
  ],
  "name": "Goose, domesticated, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 1550.0,
    "fat_g": 33.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 308.0,
    "protein_g": 15.9,
    "salt_g": 0.1825,
    "sat_fat_g": 9.78,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174470",
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
