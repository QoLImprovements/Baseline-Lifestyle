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
  "id": "usda-fndds-2709167",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    }
  ],
  "name": "Kumquat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 15.9,
    "energy_kcal": 71.0,
    "fat_g": 0.86,
    "fibre_g": 6.5,
    "folate_ug": 17.0,
    "iron_mg": 0.86,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 186.0,
    "protein_g": 1.88,
    "salt_g": 0.025,
    "sat_fat_g": 0.103,
    "sodium_mg": 10.0,
    "sugar_g": 9.36,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 43.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709167",
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
