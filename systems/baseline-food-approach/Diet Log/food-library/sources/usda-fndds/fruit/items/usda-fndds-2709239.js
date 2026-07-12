/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709239",
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
      "gramsPerUnit": 7.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Kiwi fruit, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 14.0,
    "energy_kcal": 64.0,
    "fat_g": 0.44,
    "fibre_g": 3.0,
    "folate_ug": 26.0,
    "iron_mg": 0.24,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 198.0,
    "protein_g": 1.06,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 8.99,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 74.7,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 40.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709239",
  "state": "Raw",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
