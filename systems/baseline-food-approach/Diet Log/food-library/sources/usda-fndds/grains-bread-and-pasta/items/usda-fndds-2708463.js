/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "id": "usda-fndds-2708463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, corn squares, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 325.0,
    "carbs_g": 80.7,
    "energy_kcal": 380.0,
    "fat_g": 3.32,
    "fibre_g": 4.7,
    "folate_ug": 140.0,
    "iron_mg": 9.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 102.0,
    "protein_g": 5.58,
    "salt_g": 1.655,
    "sat_fat_g": 0.281,
    "sodium_mg": 662.0,
    "sugar_g": 25.9,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708463",
  "state": "Unspecified",
  "subcategory": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "tags": [
    "grains-bread-and-pasta",
    "ready-to-eat-cereal-higher-sugar-21-2g-100g",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
