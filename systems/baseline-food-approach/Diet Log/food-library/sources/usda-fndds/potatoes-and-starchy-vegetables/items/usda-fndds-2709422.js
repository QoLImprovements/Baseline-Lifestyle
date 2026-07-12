/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Potato chips",
  "id": "usda-fndds-2709422",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
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
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Potato chips, plain",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 53.8,
    "energy_kcal": 532.0,
    "fat_g": 34.0,
    "fibre_g": 3.1,
    "folate_ug": 29.0,
    "iron_mg": 1.28,
    "magnesium_mg": 63.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 153.0,
    "potassium_mg": 1200.0,
    "protein_g": 6.39,
    "salt_g": 1.3175,
    "sat_fat_g": 3.4,
    "sodium_mg": 527.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.6,
    "vitamin_e_mg": 10.4,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709422",
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
