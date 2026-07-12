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
  "id": "usda-fndds-2707886",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cake, sponge",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 61.0,
    "energy_kcal": 290.0,
    "fat_g": 2.7,
    "fibre_g": 0.5,
    "folate_ug": 47.0,
    "iron_mg": 2.72,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 137.0,
    "potassium_mg": 99.0,
    "protein_g": 5.4,
    "salt_g": 1.5575,
    "sat_fat_g": 0.802,
    "sodium_mg": 623.0,
    "sugar_g": 36.7,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707886",
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
