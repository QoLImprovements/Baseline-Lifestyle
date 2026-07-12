/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Ready-to-eat cereal, lower sugar (=<21.2g/100g)",
  "id": "usda-fndds-2708456",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal, bran flakes, plain",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 75.0,
    "energy_kcal": 361.0,
    "fat_g": 2.42,
    "fibre_g": 20.5,
    "folate_ug": 320.0,
    "iron_mg": 28.1,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 121.0,
    "protein_g": 9.65,
    "salt_g": 1.4625,
    "sat_fat_g": 0.191,
    "sodium_mg": 585.0,
    "sugar_g": 15.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 23.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708456",
  "state": "Unspecified",
  "subcategory": "Ready-to-eat cereal, lower sugar (=<21.2g/100g)",
  "tags": [
    "grains-bread-and-pasta",
    "ready-to-eat-cereal-lower-sugar-21-2g-100g",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
