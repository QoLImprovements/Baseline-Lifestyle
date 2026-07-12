/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cake, jelly roll",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 64.5,
    "energy_kcal": 285.0,
    "fat_g": 1.52,
    "fibre_g": 0.8,
    "folate_ug": 31.0,
    "iron_mg": 1.72,
    "magnesium_mg": 8.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 84.0,
    "potassium_mg": 89.0,
    "protein_g": 3.14,
    "salt_g": 0.8925,
    "sat_fat_g": 0.446,
    "sodium_mg": 357.0,
    "sugar_g": 42.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707878",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
