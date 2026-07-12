/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-prune",
  "description": "Dried fruits",
  "id": "usda-fndds-2709211",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-prune",
      "kind": "unit",
      "label": "1 prune"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Prune, dried",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 63.9,
    "energy_kcal": 240.0,
    "fat_g": 0.38,
    "fibre_g": 7.1,
    "folate_ug": 4.0,
    "iron_mg": 0.93,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 732.0,
    "protein_g": 2.18,
    "salt_g": 0.005,
    "sat_fat_g": 0.088,
    "sodium_mg": 2.0,
    "sugar_g": 38.1,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 59.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709211",
  "state": "Dried",
  "subcategory": "Dried fruits",
  "tags": [
    "dried",
    "dried-fruits",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
