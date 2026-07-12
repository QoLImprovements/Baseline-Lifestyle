/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-michelina-s-dinner-10-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "1-michelina-s-dinner-10-oz",
      "kind": "unit",
      "label": "1 Michelina's dinner (10 oz)"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-stouffer-s-meal-8-7-8-oz",
      "kind": "unit",
      "label": "1 Stouffer's meal (8-7/8 oz)"
    },
    {
      "gramsPerUnit": 397.0,
      "key": "1-stouffer-s-dinner-14-oz",
      "kind": "unit",
      "label": "1 Stouffer's dinner (14 oz)"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "1-banquet-meal-9-5-oz",
      "kind": "unit",
      "label": "1 Banquet meal (9.5 oz)"
    },
    {
      "gramsPerUnit": 361.0,
      "key": "1-swanson-dinner-12-75-oz",
      "kind": "unit",
      "label": "1 Swanson dinner (12.75 oz)"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "1-marie-callender-s-dinner-14-5-oz",
      "kind": "unit",
      "label": "1 Marie Callender's dinner (14.5 oz)"
    }
  ],
  "name": "Beef, sliced, with gravy, potatoes, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.59,
    "energy_kcal": 125.0,
    "fat_g": 7.28,
    "fibre_g": 0.7,
    "folate_ug": 8.0,
    "iron_mg": 0.91,
    "magnesium_mg": 14.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 85.0,
    "potassium_mg": 224.0,
    "protein_g": 8.12,
    "salt_g": 0.74,
    "sat_fat_g": 2.01,
    "sodium_mg": 296.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707102",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
