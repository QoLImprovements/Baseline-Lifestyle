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
  "id": "usda-fndds-2709519",
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
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Potato, baked, peel not eaten, with sour cream",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 19.0,
    "energy_kcal": 131.0,
    "fat_g": 5.44,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 53.0,
    "potassium_mg": 351.0,
    "protein_g": 2.0,
    "salt_g": 0.46,
    "sat_fat_g": 3.06,
    "sodium_mg": 184.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 11.1,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709519",
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
