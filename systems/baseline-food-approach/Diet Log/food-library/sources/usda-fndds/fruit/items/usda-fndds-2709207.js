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
  "id": "usda-fndds-2709207",
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
      "gramsPerUnit": 15.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Peach, dried",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 61.3,
    "energy_kcal": 239.0,
    "fat_g": 0.76,
    "fibre_g": 8.2,
    "folate_ug": 0.0,
    "iron_mg": 4.06,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 996.0,
    "protein_g": 3.61,
    "salt_g": 0.0175,
    "sat_fat_g": 0.082,
    "sodium_mg": 7.0,
    "sugar_g": 41.7,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 15.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709207",
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
