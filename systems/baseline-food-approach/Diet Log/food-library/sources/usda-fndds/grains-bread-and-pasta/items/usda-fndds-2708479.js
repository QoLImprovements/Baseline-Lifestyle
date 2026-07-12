/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-spoon-size-biscuit",
  "description": "Ready-to-eat cereal, lower sugar (=<21.2g/100g)",
  "id": "usda-fndds-2708479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-spoon-size-biscuit",
      "kind": "unit",
      "label": "1 spoon size biscuit"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-rectangular-biscuit",
      "kind": "unit",
      "label": "1 rectangular biscuit"
    }
  ],
  "name": "Cereal, shredded wheat, plain",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 73.8,
    "energy_kcal": 358.0,
    "fat_g": 1.68,
    "fibre_g": 13.0,
    "folate_ug": 23.0,
    "iron_mg": 1.17,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 148.0,
    "protein_g": 11.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.153,
    "sodium_mg": 2.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708479",
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
