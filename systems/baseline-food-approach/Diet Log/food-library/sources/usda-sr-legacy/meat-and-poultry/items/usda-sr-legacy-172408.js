/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-duck",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 287.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-duck",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook duck)"
    },
    {
      "gramsPerUnit": 634.0,
      "key": "0-5-duck",
      "kind": "unit",
      "label": "0.5 duck"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Duck, domesticated, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 404.0,
    "fat_g": 39.3,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 2.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 209.0,
    "protein_g": 11.5,
    "salt_g": 0.1575,
    "sat_fat_g": 13.2,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172408",
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
