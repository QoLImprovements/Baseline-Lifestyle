/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach souffle",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 7.13,
    "energy_kcal": 128.0,
    "fat_g": 8.64,
    "fibre_g": 1.1,
    "folate_ug": 46.0,
    "iron_mg": 1.01,
    "magnesium_mg": 29.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 99.0,
    "potassium_mg": 176.0,
    "protein_g": 5.72,
    "salt_g": 0.4,
    "sat_fat_g": 4.13,
    "sodium_mg": 160.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 252.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 133.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709629",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "unspecified",
    "vegetable-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
