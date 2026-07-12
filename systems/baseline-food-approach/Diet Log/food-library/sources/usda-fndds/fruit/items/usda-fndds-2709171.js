/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Citrus fruits",
  "id": "usda-fndds-2709171",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-section-slice",
      "kind": "unit",
      "label": "1 section/slice"
    }
  ],
  "name": "Orange, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 11.8,
    "energy_kcal": 50.0,
    "fat_g": 0.14,
    "fibre_g": 2.2,
    "folate_ug": 28.0,
    "iron_mg": 0.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 174.0,
    "protein_g": 0.92,
    "salt_g": 0.01,
    "sat_fat_g": 0.015,
    "sodium_mg": 4.0,
    "sugar_g": 8.96,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 56.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709171",
  "state": "Raw",
  "subcategory": "Citrus fruits",
  "tags": [
    "citrus-fruits",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
