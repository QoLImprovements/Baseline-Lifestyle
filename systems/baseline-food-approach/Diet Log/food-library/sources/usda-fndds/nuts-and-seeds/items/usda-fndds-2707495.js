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
  "id": "usda-fndds-2707495",
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
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    }
  ],
  "name": "Cashews, salted",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 31.4,
    "energy_kcal": 578.0,
    "fat_g": 47.5,
    "fibre_g": 2.9,
    "folate_ug": 66.0,
    "iron_mg": 5.77,
    "magnesium_mg": 250.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 471.0,
    "potassium_mg": 543.0,
    "protein_g": 14.7,
    "salt_g": 0.9975,
    "sat_fat_g": 9.19,
    "sodium_mg": 399.0,
    "sugar_g": 4.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 36.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707495",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
