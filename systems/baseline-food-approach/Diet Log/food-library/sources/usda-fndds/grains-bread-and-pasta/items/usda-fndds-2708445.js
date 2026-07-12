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
  "id": "usda-fndds-2708445",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-prepackaged-single-serving",
      "kind": "unit",
      "label": "1 prepackaged single serving"
    }
  ],
  "name": "Cereal, ready-to-eat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 77.7,
    "energy_kcal": 379.0,
    "fat_g": 4.01,
    "fibre_g": 6.6,
    "folate_ug": 142.0,
    "iron_mg": 15.6,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 193.0,
    "protein_g": 7.74,
    "salt_g": 1.3175,
    "sat_fat_g": 0.694,
    "sodium_mg": 527.0,
    "sugar_g": 25.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708445",
  "state": "Ready-to-eat",
  "subcategory": "Ready-to-eat cereal, higher sugar (>21.2g/100g)",
  "tags": [
    "grains-bread-and-pasta",
    "ready-to-eat",
    "ready-to-eat-cereal-higher-sugar-21-2g-100g"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
