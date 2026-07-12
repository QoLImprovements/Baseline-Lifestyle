/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-small-can",
  "description": "Potato chips",
  "id": "usda-fndds-2709437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-1-inch-stack",
      "kind": "unit",
      "label": "1 1-inch stack"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-snack-size-tub-can",
      "kind": "unit",
      "label": "1 snack size tub/can"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-regular-can",
      "kind": "unit",
      "label": "1 regular can"
    }
  ],
  "name": "Potato chips, restructured, reduced fat, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 64.8,
    "energy_kcal": 502.0,
    "fat_g": 26.1,
    "fibre_g": 3.2,
    "folate_ug": 27.0,
    "iron_mg": 1.11,
    "magnesium_mg": 45.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 129.0,
    "potassium_mg": 760.0,
    "protein_g": 4.56,
    "salt_g": 1.125,
    "sat_fat_g": 6.76,
    "sodium_mg": 450.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709437",
  "state": "Unspecified",
  "subcategory": "Potato chips",
  "tags": [
    "potato-chips",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
