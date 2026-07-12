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
  "id": "usda-fndds-2707113",
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
      "gramsPerUnit": 262.0,
      "key": "1-lean-cuisine-meal-9-25-oz",
      "kind": "unit",
      "label": "1 Lean Cuisine meal (9.25 oz)"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-healthy-choice-meal-8-5-oz",
      "kind": "unit",
      "label": "1 Healthy Choice meal (8.5 oz)"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "1-weight-watchers-meal-10-oz",
      "kind": "unit",
      "label": "1 Weight Watchers meal (10 oz)"
    }
  ],
  "name": "Chicken with noodles and cheese sauce, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.7,
    "energy_kcal": 114.0,
    "fat_g": 2.86,
    "fibre_g": 0.7,
    "folate_ug": 28.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 97.0,
    "protein_g": 10.1,
    "salt_g": 0.4275,
    "sat_fat_g": 0.558,
    "sodium_mg": 171.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707113",
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
