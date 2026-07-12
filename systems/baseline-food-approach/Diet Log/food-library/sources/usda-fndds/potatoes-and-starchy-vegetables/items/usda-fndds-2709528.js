/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-medium",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 445.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Potato, baked, peel eaten, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 17.1,
    "energy_kcal": 160.0,
    "fat_g": 8.28,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 0.87,
    "magnesium_mg": 25.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 107.0,
    "potassium_mg": 445.0,
    "protein_g": 4.74,
    "salt_g": 0.6425,
    "sat_fat_g": 4.49,
    "sodium_mg": 257.0,
    "sugar_g": 1.24,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709528",
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
