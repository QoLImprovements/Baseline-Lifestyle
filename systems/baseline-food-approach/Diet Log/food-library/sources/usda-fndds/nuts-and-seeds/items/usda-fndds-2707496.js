/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-nut",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
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
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    }
  ],
  "name": "Cashews, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 31.6,
    "energy_kcal": 581.0,
    "fat_g": 47.7,
    "fibre_g": 2.9,
    "folate_ug": 67.0,
    "iron_mg": 5.8,
    "magnesium_mg": 251.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 473.0,
    "potassium_mg": 545.0,
    "protein_g": 14.8,
    "salt_g": 0.52,
    "sat_fat_g": 9.24,
    "sodium_mg": 208.0,
    "sugar_g": 4.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 36.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707496",
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
