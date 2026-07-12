/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-jenny-s-cuisine-meal-9-25-oz",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2707114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "1-jenny-s-cuisine-meal-9-25-oz",
      "kind": "unit",
      "label": "1 Jenny's Cuisine meal (9.25 oz)"
    },
    {
      "gramsPerUnit": 333.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 333.0,
      "key": "1-lean-cuisine-meal-11-75-oz",
      "kind": "unit",
      "label": "1 Lean Cuisine meal (11.75 oz)"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-healthy-choice-meal-8-5-oz",
      "kind": "unit",
      "label": "1 Healthy Choice meal (8.5 oz)"
    }
  ],
  "name": "Chicken and vegetable entree with noodles, diet frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 9.78,
    "energy_kcal": 85.0,
    "fat_g": 1.89,
    "fibre_g": 1.6,
    "folate_ug": 32.0,
    "iron_mg": 0.64,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 245.0,
    "protein_g": 7.58,
    "salt_g": 0.7075,
    "sat_fat_g": 0.491,
    "sodium_mg": 283.0,
    "sugar_g": 2.27,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 13.8,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707114",
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
