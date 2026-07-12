/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fish",
  "id": "usda-fndds-2706322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-whole-fish-any-size",
      "kind": "unit",
      "label": "1 whole fish, any size"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    }
  ],
  "name": "Fish, tilapia, fried",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.7,
    "energy_kcal": 237.0,
    "fat_g": 13.5,
    "fibre_g": 0.5,
    "folate_ug": 41.0,
    "iron_mg": 1.32,
    "magnesium_mg": 25.0,
    "omega3_g": 0.102,
    "phosphorus_mg": 152.0,
    "potassium_mg": 254.0,
    "protein_g": 17.2,
    "salt_g": 0.9575,
    "sat_fat_g": 2.11,
    "sodium_mg": 383.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.55,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706322",
  "state": "Fried",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "fried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
