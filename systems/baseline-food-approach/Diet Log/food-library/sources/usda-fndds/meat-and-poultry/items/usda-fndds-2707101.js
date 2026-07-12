/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meal-10-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-meal-10-oz",
      "kind": "unit",
      "label": "1 meal (10 oz)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Salisbury steak with gravy, macaroni and cheese, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 20.4,
    "energy_kcal": 202.0,
    "fat_g": 8.51,
    "fibre_g": 1.3,
    "folate_ug": 30.0,
    "iron_mg": 1.64,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 124.0,
    "potassium_mg": 136.0,
    "protein_g": 10.4,
    "salt_g": 0.95,
    "sat_fat_g": 3.21,
    "sodium_mg": 380.0,
    "sugar_g": 1.77,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707101",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
