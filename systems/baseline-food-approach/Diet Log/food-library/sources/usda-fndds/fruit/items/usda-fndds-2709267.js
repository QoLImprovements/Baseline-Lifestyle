/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fruit",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pomegranate, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 18.7,
    "energy_kcal": 83.0,
    "fat_g": 1.17,
    "fibre_g": 4.0,
    "folate_ug": 38.0,
    "iron_mg": 0.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 236.0,
    "protein_g": 1.67,
    "salt_g": 0.0075,
    "sat_fat_g": 0.12,
    "sodium_mg": 3.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709267",
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
