/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Taro leaves, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 6.98,
    "energy_kcal": 68.0,
    "fat_g": 3.51,
    "fibre_g": 3.9,
    "folate_ug": 98.0,
    "iron_mg": 2.35,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 675.0,
    "protein_g": 5.19,
    "salt_g": 0.3325,
    "sat_fat_g": 0.873,
    "sodium_mg": 133.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 251.0,
    "vitamin_c_mg": 37.9,
    "vitamin_e_mg": 2.51,
    "vitamin_k_ug": 115.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709633",
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
