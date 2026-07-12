/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-sprig",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-sprig",
      "kind": "unit",
      "label": "1 sprig"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cress, raw",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 5.5,
    "energy_kcal": 32.0,
    "fat_g": 0.7,
    "fibre_g": 1.1,
    "folate_ug": 80.0,
    "iron_mg": 1.3,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 606.0,
    "protein_g": 2.6,
    "salt_g": 0.035,
    "sat_fat_g": 0.023,
    "sodium_mg": 14.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 346.0,
    "vitamin_c_mg": 69.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 542.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709586",
  "state": "Raw",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "other-dark-green-vegetables",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
