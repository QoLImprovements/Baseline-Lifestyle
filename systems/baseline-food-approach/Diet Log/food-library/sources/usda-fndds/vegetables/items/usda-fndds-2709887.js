/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Cabbage",
  "id": "usda-fndds-2709887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cabbage, Chinese, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 2.26,
    "energy_kcal": 14.0,
    "fat_g": 0.21,
    "fibre_g": 1.0,
    "folate_ug": 58.0,
    "iron_mg": 0.83,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 262.0,
    "protein_g": 1.56,
    "salt_g": 0.47,
    "sat_fat_g": 0.028,
    "sodium_mg": 188.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 220.0,
    "vitamin_c_mg": 39.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 47.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709887",
  "state": "Cooked",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
