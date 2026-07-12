/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-oz",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Walnuts, honey roasted",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 29.0,
    "energy_kcal": 668.0,
    "fat_g": 56.9,
    "fibre_g": 3.5,
    "folate_ug": 66.0,
    "iron_mg": 1.54,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 246.0,
    "potassium_mg": 286.0,
    "protein_g": 9.8,
    "salt_g": 0.9575,
    "sat_fat_g": 5.4,
    "sodium_mg": 383.0,
    "sugar_g": 23.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.35,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707532",
  "state": "Roasted",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
