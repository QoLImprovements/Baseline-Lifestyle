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
  "id": "usda-fndds-2709530",
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
      "gramsPerUnit": 260.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 445.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, baked, peel eaten, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 17.8,
    "energy_kcal": 142.0,
    "fat_g": 6.37,
    "fibre_g": 2.0,
    "folate_ug": 28.0,
    "iron_mg": 0.93,
    "magnesium_mg": 26.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 98.0,
    "potassium_mg": 452.0,
    "protein_g": 4.12,
    "salt_g": 0.57,
    "sat_fat_g": 3.53,
    "sodium_mg": 228.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709530",
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
