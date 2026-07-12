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
  "id": "usda-fndds-2707562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Almond butter sandwich, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 229.0,
    "carbs_g": 39.4,
    "energy_kcal": 397.0,
    "fat_g": 20.7,
    "fibre_g": 4.9,
    "folate_ug": 87.0,
    "iron_mg": 3.61,
    "magnesium_mg": 110.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 249.0,
    "potassium_mg": 334.0,
    "protein_g": 13.3,
    "salt_g": 0.935,
    "sat_fat_g": 2.0,
    "sodium_mg": 374.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.91,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707562",
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
