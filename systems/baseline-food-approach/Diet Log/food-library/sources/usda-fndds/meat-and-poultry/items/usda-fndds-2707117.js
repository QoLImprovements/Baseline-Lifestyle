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
  "id": "usda-fndds-2707117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-healthy-choice-meal-10-oz",
      "kind": "unit",
      "label": "1 Healthy Choice meal (10 oz)"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-weight-watchers-meal-8-5-oz",
      "kind": "unit",
      "label": "1 Weight Watchers meal (8.5 oz)"
    }
  ],
  "name": "Turkey with vegetable, stuffing, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 10.7,
    "energy_kcal": 96.0,
    "fat_g": 1.82,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.67,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 85.0,
    "potassium_mg": 196.0,
    "protein_g": 9.3,
    "salt_g": 0.525,
    "sat_fat_g": 0.509,
    "sodium_mg": 210.0,
    "sugar_g": 3.79,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707117",
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
