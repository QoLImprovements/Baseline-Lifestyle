/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    }
  ],
  "name": "Cheesecake, plain",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 34.8,
    "energy_kcal": 399.0,
    "fat_g": 26.5,
    "fibre_g": 0.5,
    "folate_ug": 21.0,
    "iron_mg": 0.75,
    "magnesium_mg": 12.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 103.0,
    "potassium_mg": 104.0,
    "protein_g": 5.29,
    "salt_g": 0.6925,
    "sat_fat_g": 14.4,
    "sodium_mg": 277.0,
    "sugar_g": 26.6,
    "vitamin_a_ug": 221.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707861",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
