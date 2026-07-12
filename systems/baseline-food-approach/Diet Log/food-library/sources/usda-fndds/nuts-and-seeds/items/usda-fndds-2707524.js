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
  "id": "usda-fndds-2707524",
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
      "gramsPerUnit": 100.0,
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
    }
  ],
  "name": "Pecans, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 12.3,
    "energy_kcal": 754.0,
    "fat_g": 74.1,
    "fibre_g": 5.6,
    "folate_ug": 21.0,
    "iron_mg": 2.3,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 349.0,
    "protein_g": 9.66,
    "salt_g": 0.0,
    "sat_fat_g": 6.67,
    "sodium_mg": 0.0,
    "sugar_g": 3.85,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.93,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707524",
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
