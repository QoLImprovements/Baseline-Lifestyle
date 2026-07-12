/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili hot dog sandwich, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 14.7,
    "energy_kcal": 215.0,
    "fat_g": 12.8,
    "fibre_g": 2.4,
    "folate_ug": 37.0,
    "iron_mg": 1.84,
    "magnesium_mg": 26.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 121.0,
    "potassium_mg": 277.0,
    "protein_g": 10.3,
    "salt_g": 1.3775,
    "sat_fat_g": 4.97,
    "sodium_mg": 551.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707081",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
