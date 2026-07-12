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
  "id": "usda-fndds-2707553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Peanut butter sandwich, with reduced fat peanut butter, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 42.0,
    "energy_kcal": 353.0,
    "fat_g": 14.4,
    "fibre_g": 5.3,
    "folate_ug": 68.0,
    "iron_mg": 2.72,
    "magnesium_mg": 96.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 237.0,
    "potassium_mg": 356.0,
    "protein_g": 16.4,
    "salt_g": 1.1875,
    "sat_fat_g": 2.47,
    "sodium_mg": 475.0,
    "sugar_g": 6.62,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.37,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707553",
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
