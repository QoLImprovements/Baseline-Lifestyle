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
  "id": "usda-fndds-2707565",
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
  "name": "Almond butter and jelly sandwich, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 42.9,
    "energy_kcal": 372.0,
    "fat_g": 17.2,
    "fibre_g": 5.8,
    "folate_ug": 51.0,
    "iron_mg": 2.89,
    "magnesium_mg": 107.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 234.0,
    "potassium_mg": 322.0,
    "protein_g": 12.0,
    "salt_g": 0.7675,
    "sat_fat_g": 1.59,
    "sodium_mg": 307.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.92,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707565",
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
