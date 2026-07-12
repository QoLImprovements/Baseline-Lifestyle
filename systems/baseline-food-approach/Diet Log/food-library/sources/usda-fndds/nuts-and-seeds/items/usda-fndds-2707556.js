/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Peanut butter and jelly sandwiches",
  "id": "usda-fndds-2707556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Peanut butter and jelly sandwich, with regular peanut butter, regular jelly, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 43.2,
    "energy_kcal": 360.0,
    "fat_g": 16.8,
    "fibre_g": 4.5,
    "folate_ug": 64.0,
    "iron_mg": 2.22,
    "magnesium_mg": 79.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 186.0,
    "potassium_mg": 270.0,
    "protein_g": 12.5,
    "salt_g": 0.9075,
    "sat_fat_g": 3.34,
    "sodium_mg": 363.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707556",
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
