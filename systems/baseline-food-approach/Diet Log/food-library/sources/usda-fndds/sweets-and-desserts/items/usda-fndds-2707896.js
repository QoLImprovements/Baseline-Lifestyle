/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-piece-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cake, strawberry shortcake",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 40.1,
    "energy_kcal": 214.0,
    "fat_g": 4.73,
    "fibre_g": 0.9,
    "folate_ug": 29.0,
    "iron_mg": 1.6,
    "magnesium_mg": 10.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 86.0,
    "potassium_mg": 116.0,
    "protein_g": 3.31,
    "salt_g": 0.7825,
    "sat_fat_g": 2.48,
    "sodium_mg": 313.0,
    "sugar_g": 25.9,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707896",
  "state": "Raw",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "raw",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
