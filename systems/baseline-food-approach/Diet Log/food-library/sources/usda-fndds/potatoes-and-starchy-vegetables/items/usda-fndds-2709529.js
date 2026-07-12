/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709529",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Potato, baked, peel eaten, with chili",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 17.3,
    "energy_kcal": 143.0,
    "fat_g": 6.23,
    "fibre_g": 2.1,
    "folate_ug": 30.0,
    "iron_mg": 1.09,
    "magnesium_mg": 26.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 100.0,
    "potassium_mg": 441.0,
    "protein_g": 4.85,
    "salt_g": 0.6475,
    "sat_fat_g": 3.36,
    "sodium_mg": 259.0,
    "sugar_g": 1.13,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709529",
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
