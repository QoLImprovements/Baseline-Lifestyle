/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "id": "usda-fndds-2708464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, O's, honey nut",
  "nutritionPerBasis": {
    "calcium_mg": 353.0,
    "carbs_g": 76.0,
    "energy_kcal": 385.0,
    "fat_g": 5.37,
    "fibre_g": 7.6,
    "folate_ug": 140.0,
    "iron_mg": 11.7,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 238.0,
    "protein_g": 8.62,
    "salt_g": 1.45,
    "sat_fat_g": 0.793,
    "sodium_mg": 580.0,
    "sugar_g": 32.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 22.8,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708464",
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
