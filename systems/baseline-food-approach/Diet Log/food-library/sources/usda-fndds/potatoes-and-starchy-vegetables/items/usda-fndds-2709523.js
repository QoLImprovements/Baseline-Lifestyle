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
  "id": "usda-fndds-2709523",
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
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, baked, peel not eaten, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 18.1,
    "energy_kcal": 142.0,
    "fat_g": 6.34,
    "fibre_g": 1.4,
    "folate_ug": 12.0,
    "iron_mg": 0.34,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 81.0,
    "potassium_mg": 334.0,
    "protein_g": 3.68,
    "salt_g": 0.56,
    "sat_fat_g": 3.52,
    "sodium_mg": 224.0,
    "sugar_g": 1.52,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 12.7,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709523",
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
