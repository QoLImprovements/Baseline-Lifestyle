/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Raw vegetable, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 5.83,
    "energy_kcal": 30.0,
    "fat_g": 0.26,
    "fibre_g": 2.0,
    "folate_ug": 39.0,
    "iron_mg": 0.26,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 263.0,
    "protein_g": 1.19,
    "salt_g": 0.1325,
    "sat_fat_g": 0.034,
    "sodium_mg": 53.0,
    "sugar_g": 2.53,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 28.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 37.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709763",
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
