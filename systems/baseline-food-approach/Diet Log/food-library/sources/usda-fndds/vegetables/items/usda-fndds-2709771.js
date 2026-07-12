/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-floweret",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Broccoflower, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 6.09,
    "energy_kcal": 31.0,
    "fat_g": 0.3,
    "fibre_g": 3.2,
    "folate_ug": 57.0,
    "iron_mg": 0.73,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 300.0,
    "protein_g": 2.95,
    "salt_g": 0.0575,
    "sat_fat_g": 0.047,
    "sodium_mg": 23.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 88.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 20.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709771",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
