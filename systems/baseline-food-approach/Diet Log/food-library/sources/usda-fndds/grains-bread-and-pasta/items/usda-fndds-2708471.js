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
  "id": "usda-fndds-2708471",
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
      "gramsPerUnit": 35.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal, K's, plain",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 68.0,
    "energy_kcal": 356.0,
    "fat_g": 1.58,
    "fibre_g": 3.2,
    "folate_ug": 624.0,
    "iron_mg": 29.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 189.0,
    "potassium_mg": 92.0,
    "protein_g": 19.0,
    "salt_g": 1.7,
    "sat_fat_g": 0.252,
    "sodium_mg": 680.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 22.8,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708471",
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
