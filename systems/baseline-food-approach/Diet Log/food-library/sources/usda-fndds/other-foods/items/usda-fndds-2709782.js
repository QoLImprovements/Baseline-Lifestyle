/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2709782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 0.3,
      "key": "1-guideline-amount-per-item",
      "kind": "unit",
      "label": "1 guideline amount per item"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-sprig",
      "kind": "unit",
      "label": "1 sprig"
    }
  ],
  "name": "Cilantro, raw",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 3.67,
    "energy_kcal": 23.0,
    "fat_g": 0.52,
    "fibre_g": 2.8,
    "folate_ug": 62.0,
    "iron_mg": 1.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 521.0,
    "protein_g": 2.13,
    "salt_g": 0.115,
    "sat_fat_g": 0.014,
    "sodium_mg": 46.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 337.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 310.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709782",
  "state": "Raw",
  "subcategory": "Not included in a food category",
  "tags": [
    "not-included-in-a-food-category",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
