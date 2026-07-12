/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Spinach",
  "id": "usda-fndds-2709626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 3.3,
    "energy_kcal": 49.0,
    "fat_g": 3.4,
    "fibre_g": 2.3,
    "folate_ug": 90.0,
    "iron_mg": 2.24,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 336.0,
    "protein_g": 2.73,
    "salt_g": 0.7825,
    "sat_fat_g": 0.468,
    "sodium_mg": 313.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 476.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 451.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709626",
  "state": "Canned",
  "subcategory": "Spinach",
  "tags": [
    "canned",
    "oils-and-fats",
    "spinach"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
