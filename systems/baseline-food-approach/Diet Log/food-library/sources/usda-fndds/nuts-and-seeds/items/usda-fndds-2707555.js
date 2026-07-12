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
  "id": "usda-fndds-2707555",
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
    }
  ],
  "name": "Peanut butter and jelly sandwich, with regular peanut butter, regular jelly, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 45.2,
    "energy_kcal": 361.0,
    "fat_g": 16.6,
    "fibre_g": 2.8,
    "folate_ug": 85.0,
    "iron_mg": 2.33,
    "magnesium_mg": 64.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 157.0,
    "potassium_mg": 232.0,
    "protein_g": 11.4,
    "salt_g": 0.92,
    "sat_fat_g": 3.39,
    "sodium_mg": 368.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.72,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707555",
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
