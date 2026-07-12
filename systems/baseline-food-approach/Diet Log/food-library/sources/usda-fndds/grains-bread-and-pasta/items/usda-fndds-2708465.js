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
  "id": "usda-fndds-2708465",
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
  "name": "Cereal, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 74.0,
    "energy_kcal": 373.0,
    "fat_g": 3.59,
    "fibre_g": 14.6,
    "folate_ug": 26.0,
    "iron_mg": 11.0,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 158.0,
    "protein_g": 11.6,
    "salt_g": 0.5825,
    "sat_fat_g": 0.46,
    "sodium_mg": 233.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708465",
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
