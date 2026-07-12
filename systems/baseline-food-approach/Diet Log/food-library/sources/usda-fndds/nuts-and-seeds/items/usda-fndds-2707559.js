/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-sandwich",
  "description": "Peanut butter and jelly sandwiches",
  "id": "usda-fndds-2707559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Peanut butter and jelly sandwich, with regular peanut butter, reduced sugar jelly, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 39.4,
    "energy_kcal": 341.0,
    "fat_g": 16.6,
    "fibre_g": 2.9,
    "folate_ug": 88.0,
    "iron_mg": 2.3,
    "magnesium_mg": 63.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 158.0,
    "potassium_mg": 233.0,
    "protein_g": 11.4,
    "salt_g": 0.9075,
    "sat_fat_g": 3.39,
    "sodium_mg": 363.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 2.76,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707559",
  "state": "Unspecified",
  "subcategory": "Peanut butter and jelly sandwiches",
  "tags": [
    "nuts-and-seeds",
    "peanut-butter-and-jelly-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
