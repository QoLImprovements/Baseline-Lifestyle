/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-meal-10-oz",
      "kind": "unit",
      "label": "1 meal (10 oz)"
    }
  ],
  "name": "Chicken and vegetable entree with noodles and cream sauce, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 10.7,
    "energy_kcal": 124.0,
    "fat_g": 5.18,
    "fibre_g": 0.9,
    "folate_ug": 41.0,
    "iron_mg": 0.77,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 114.0,
    "potassium_mg": 165.0,
    "protein_g": 8.48,
    "salt_g": 0.9475,
    "sat_fat_g": 2.02,
    "sodium_mg": 379.0,
    "sugar_g": 1.58,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 15.7,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 20.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707116",
  "state": "Frozen",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
