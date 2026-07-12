/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    }
  ],
  "name": "Chard, raw",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 3.74,
    "energy_kcal": 19.0,
    "fat_g": 0.2,
    "fibre_g": 1.6,
    "folate_ug": 14.0,
    "iron_mg": 1.8,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 379.0,
    "protein_g": 1.8,
    "salt_g": 0.5325,
    "sat_fat_g": 0.03,
    "sodium_mg": 213.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 830.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709574",
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
