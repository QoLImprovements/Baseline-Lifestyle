/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Spinach",
  "id": "usda-fndds-2709623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach, canned, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 3.31,
    "energy_kcal": 45.0,
    "fat_g": 3.04,
    "fibre_g": 2.3,
    "folate_ug": 90.0,
    "iron_mg": 2.24,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 336.0,
    "protein_g": 2.74,
    "salt_g": 0.8025,
    "sat_fat_g": 0.747,
    "sodium_mg": 321.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 487.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 450.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709623",
  "state": "Canned",
  "subcategory": "Spinach",
  "tags": [
    "canned",
    "spinach",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
