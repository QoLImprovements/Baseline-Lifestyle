/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-large",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 445.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
  "name": "Potato, baked, peel not eaten, with chili",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 17.6,
    "energy_kcal": 143.0,
    "fat_g": 6.21,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.55,
    "magnesium_mg": 24.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 86.0,
    "potassium_mg": 335.0,
    "protein_g": 4.45,
    "salt_g": 0.6375,
    "sat_fat_g": 3.35,
    "sodium_mg": 255.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 10.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709522",
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
