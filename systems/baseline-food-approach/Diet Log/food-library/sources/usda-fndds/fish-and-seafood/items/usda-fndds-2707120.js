/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-meal-11-oz",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2707120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "1-meal-11-oz",
      "kind": "unit",
      "label": "1 meal (11 oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp and vegetables in sauce with noodles, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 13.4,
    "energy_kcal": 91.0,
    "fat_g": 1.72,
    "fibre_g": 1.5,
    "folate_ug": 32.0,
    "iron_mg": 0.9,
    "magnesium_mg": 15.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 58.0,
    "potassium_mg": 87.0,
    "protein_g": 5.29,
    "salt_g": 1.14,
    "sat_fat_g": 0.491,
    "sodium_mg": 456.0,
    "sugar_g": 1.87,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707120",
  "state": "Frozen",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "frozen",
    "seafood-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
