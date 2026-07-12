/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-prepackaged-single-serving",
  "description": "Ready-to-eat cereal, lower sugar (=<21.2g/100g)",
  "id": "usda-fndds-2708470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal, rice squares",
  "nutritionPerBasis": {
    "calcium_mg": 323.0,
    "carbs_g": 77.4,
    "energy_kcal": 357.0,
    "fat_g": 2.19,
    "fibre_g": 5.4,
    "folate_ug": 134.0,
    "iron_mg": 26.9,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 67.0,
    "protein_g": 7.01,
    "salt_g": 2.0325,
    "sat_fat_g": 0.41,
    "sodium_mg": 813.0,
    "sugar_g": 6.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 22.6,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708470",
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
