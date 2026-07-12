/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-snack-size-tub-can",
  "description": "Potato chips",
  "id": "usda-fndds-2709433",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-snack-size-tub-can",
      "kind": "unit",
      "label": "1 snack size tub/can"
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
      "gramsPerUnit": 185.0,
      "key": "1-regular-can",
      "kind": "unit",
      "label": "1 regular can"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-1-inch-stack",
      "kind": "unit",
      "label": "1 1-inch stack"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    }
  ],
  "name": "Potato chips, restructured, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 55.0,
    "energy_kcal": 542.0,
    "fat_g": 35.1,
    "fibre_g": 2.9,
    "folate_ug": 19.0,
    "iron_mg": 0.8,
    "magnesium_mg": 40.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 109.0,
    "potassium_mg": 633.0,
    "protein_g": 4.59,
    "salt_g": 1.8925,
    "sat_fat_g": 8.59,
    "sodium_mg": 757.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 13.6,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709433",
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
