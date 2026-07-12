/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Citrus fruits",
  "id": "usda-fndds-2709164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-section-slice",
      "kind": "unit",
      "label": "1 section/slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    }
  ],
  "name": "Clementine, raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 13.3,
    "energy_kcal": 53.0,
    "fat_g": 0.31,
    "fibre_g": 1.8,
    "folate_ug": 16.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 166.0,
    "protein_g": 0.81,
    "salt_g": 0.005,
    "sat_fat_g": 0.039,
    "sodium_mg": 2.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 26.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709164",
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
