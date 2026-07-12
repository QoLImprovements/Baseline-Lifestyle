/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Grapes",
  "id": "usda-fndds-2709237",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-grape",
      "kind": "unit",
      "label": "1 grape"
    }
  ],
  "name": "Grapes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 19.4,
    "energy_kcal": 83.0,
    "fat_g": 0.2,
    "fibre_g": 0.9,
    "folate_ug": 2.0,
    "iron_mg": 0.18,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 224.0,
    "protein_g": 0.9,
    "salt_g": 0.0125,
    "sat_fat_g": 0.054,
    "sodium_mg": 5.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709237",
  "state": "Raw",
  "subcategory": "Grapes",
  "tags": [
    "grapes",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
