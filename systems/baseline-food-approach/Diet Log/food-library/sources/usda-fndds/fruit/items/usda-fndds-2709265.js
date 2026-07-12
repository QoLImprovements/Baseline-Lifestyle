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
  "id": "usda-fndds-2709265",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
  "name": "Plum, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.4,
    "energy_kcal": 46.0,
    "fat_g": 0.28,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.17,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 157.0,
    "protein_g": 0.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.017,
    "sodium_mg": 0.0,
    "sugar_g": 9.92,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709265",
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
