/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Potato chips",
  "id": "usda-fndds-2709440",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
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
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-1-inch-stack",
      "kind": "unit",
      "label": "1 1-inch stack"
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
      "gramsPerUnit": 60.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    }
  ],
  "name": "Potato chips, restructured, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 53.4,
    "energy_kcal": 559.0,
    "fat_g": 35.3,
    "fibre_g": 4.2,
    "folate_ug": 58.0,
    "iron_mg": 1.43,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 1300.0,
    "protein_g": 6.71,
    "salt_g": 0.66,
    "sat_fat_g": 5.48,
    "sodium_mg": 264.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.2,
    "vitamin_e_mg": 7.7,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709440",
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
