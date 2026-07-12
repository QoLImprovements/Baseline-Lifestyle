/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pineapple",
  "id": "usda-fndds-2709260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-chunk",
      "kind": "unit",
      "label": "1 chunk"
    },
    {
      "gramsPerUnit": 905.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    }
  ],
  "name": "Pineapple, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 14.1,
    "energy_kcal": 60.0,
    "fat_g": 0.21,
    "fibre_g": 0.9,
    "folate_ug": 18.0,
    "iron_mg": 0.05,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 137.0,
    "protein_g": 0.46,
    "salt_g": 0.0,
    "sat_fat_g": 0.009,
    "sodium_mg": 0.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 58.6,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709260",
  "state": "Raw",
  "subcategory": "Pineapple",
  "tags": [
    "fruit",
    "pineapple",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
