/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Peanut butter and jelly sandwiches",
  "id": "usda-fndds-2707560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Peanut butter and jelly sandwich, with regular peanut butter, reduced sugar jelly, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 37.4,
    "energy_kcal": 339.0,
    "fat_g": 16.8,
    "fibre_g": 4.6,
    "folate_ug": 67.0,
    "iron_mg": 2.19,
    "magnesium_mg": 79.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 186.0,
    "potassium_mg": 271.0,
    "protein_g": 12.4,
    "salt_g": 0.8925,
    "sat_fat_g": 3.34,
    "sodium_mg": 357.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 2.82,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707560",
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
