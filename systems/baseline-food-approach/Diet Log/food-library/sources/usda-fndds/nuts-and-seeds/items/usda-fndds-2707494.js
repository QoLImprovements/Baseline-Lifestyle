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
  "id": "usda-fndds-2707494",
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
      "gramsPerUnit": 1.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Cashews, unroasted",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 32.7,
    "energy_kcal": 574.0,
    "fat_g": 46.4,
    "fibre_g": 3.0,
    "folate_ug": 69.0,
    "iron_mg": 6.0,
    "magnesium_mg": 260.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 490.0,
    "potassium_mg": 565.0,
    "protein_g": 15.3,
    "salt_g": 0.04,
    "sat_fat_g": 9.16,
    "sodium_mg": 16.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 34.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707494",
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
