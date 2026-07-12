/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Dried fruits",
  "id": "usda-fndds-2709199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-cherry",
      "kind": "unit",
      "label": "1 cherry"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cherries, dried",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 80.4,
    "energy_kcal": 333.0,
    "fat_g": 0.73,
    "fibre_g": 2.5,
    "folate_ug": 11.0,
    "iron_mg": 0.68,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 376.0,
    "protein_g": 1.25,
    "salt_g": 0.0325,
    "sat_fat_g": 0.146,
    "sodium_mg": 13.0,
    "sugar_g": 67.2,
    "vitamin_a_ug": 141.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709199",
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
