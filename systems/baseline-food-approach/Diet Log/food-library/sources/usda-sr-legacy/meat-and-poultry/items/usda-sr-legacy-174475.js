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
  "id": "usda-sr-legacy-174475",
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
      "gramsPerUnit": 297.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-squab",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook squab)"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "squab",
      "kind": "unit",
      "label": "squab"
    }
  ],
  "name": "Squab, (pigeon), meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 1230.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 3.54,
    "magnesium_mg": 22.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 248.0,
    "potassium_mg": 199.0,
    "protein_g": 18.5,
    "salt_g": 0.135,
    "sat_fat_g": 8.43,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174475",
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
