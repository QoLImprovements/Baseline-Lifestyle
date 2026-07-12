/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Asparagus, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.88,
    "energy_kcal": 20.0,
    "fat_g": 0.12,
    "fibre_g": 2.1,
    "folate_ug": 52.0,
    "iron_mg": 2.14,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 202.0,
    "protein_g": 2.2,
    "salt_g": 0.005,
    "sat_fat_g": 0.04,
    "sodium_mg": 2.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 41.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709767",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
