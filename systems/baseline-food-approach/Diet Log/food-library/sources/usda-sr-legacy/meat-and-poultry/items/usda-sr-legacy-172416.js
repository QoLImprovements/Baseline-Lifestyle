/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-guinea",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 359.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-guinea",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook guinea)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 345.0,
      "key": "0-5-guinea",
      "kind": "unit",
      "label": "0.5 guinea"
    }
  ],
  "name": "Guinea hen, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 661.0,
    "fat_g": 6.45,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.84,
    "magnesium_mg": 22.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 153.0,
    "potassium_mg": 193.0,
    "protein_g": 23.4,
    "salt_g": 0.1675,
    "sat_fat_g": 1.77,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172416",
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
