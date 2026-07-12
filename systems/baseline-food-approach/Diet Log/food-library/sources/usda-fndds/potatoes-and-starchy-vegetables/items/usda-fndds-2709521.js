/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-small",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 445.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Potato, baked, peel not eaten, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 17.4,
    "energy_kcal": 160.0,
    "fat_g": 8.26,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 23.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 91.0,
    "potassium_mg": 334.0,
    "protein_g": 4.32,
    "salt_g": 0.6325,
    "sat_fat_g": 4.48,
    "sodium_mg": 253.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709521",
  "state": "Baked",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
