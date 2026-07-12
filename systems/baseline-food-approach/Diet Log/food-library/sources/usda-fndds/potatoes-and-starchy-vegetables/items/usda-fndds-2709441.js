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
  "id": "usda-fndds-2709441",
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
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 20.0,
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
      "gramsPerUnit": 1.0,
      "key": "1-chip",
      "kind": "unit",
      "label": "1 chip"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Potato chips, popped, plain",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 71.4,
    "energy_kcal": 469.0,
    "fat_g": 18.2,
    "fibre_g": 4.8,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 274.0,
    "potassium_mg": 721.0,
    "protein_g": 5.0,
    "salt_g": 1.34,
    "sat_fat_g": 2.63,
    "sodium_mg": 536.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709441",
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
