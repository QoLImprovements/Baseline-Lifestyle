/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Walnuts, excluding honey roasted",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 10.9,
    "energy_kcal": 730.0,
    "fat_g": 69.7,
    "fibre_g": 5.2,
    "folate_ug": 98.0,
    "iron_mg": 2.24,
    "magnesium_mg": 142.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 365.0,
    "potassium_mg": 424.0,
    "protein_g": 14.6,
    "salt_g": 0.0,
    "sat_fat_g": 6.05,
    "sodium_mg": 0.0,
    "sugar_g": 2.61,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707531",
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
