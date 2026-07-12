/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
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
  "name": "Sweet potato, squash, pumpkin, chrysanthemum, or bean leaves, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 7.15,
    "energy_kcal": 57.0,
    "fat_g": 2.88,
    "fibre_g": 1.8,
    "folate_ug": 47.0,
    "iron_mg": 0.61,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 302.0,
    "protein_g": 2.12,
    "salt_g": 0.32,
    "sat_fat_g": 0.729,
    "sodium_mg": 128.0,
    "sugar_g": 5.31,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 107.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709642",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
