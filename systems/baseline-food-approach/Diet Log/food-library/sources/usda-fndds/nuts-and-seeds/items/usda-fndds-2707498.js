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
  "id": "usda-fndds-2707498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Cashews, honey roasted",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 43.7,
    "energy_kcal": 563.0,
    "fat_g": 41.2,
    "fibre_g": 2.0,
    "folate_ug": 46.0,
    "iron_mg": 4.07,
    "magnesium_mg": 175.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 330.0,
    "potassium_mg": 381.0,
    "protein_g": 10.3,
    "salt_g": 0.985,
    "sat_fat_g": 7.49,
    "sodium_mg": 394.0,
    "sugar_g": 25.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 33.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707498",
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
