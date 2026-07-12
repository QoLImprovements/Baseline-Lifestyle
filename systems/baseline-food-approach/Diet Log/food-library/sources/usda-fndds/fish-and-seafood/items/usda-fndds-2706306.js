/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large-fillet",
  "description": "Fish",
  "id": "usda-fndds-2706306",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
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
      "gramsPerUnit": 270.0,
      "key": "1-whole-fish-any-size",
      "kind": "unit",
      "label": "1 whole fish, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Fish, trout, fried",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 11.7,
    "energy_kcal": 271.0,
    "fat_g": 16.9,
    "fibre_g": 0.5,
    "folate_ug": 32.0,
    "iron_mg": 1.13,
    "magnesium_mg": 24.0,
    "omega3_g": 0.626,
    "phosphorus_mg": 195.0,
    "potassium_mg": 311.0,
    "protein_g": 17.1,
    "salt_g": 0.955,
    "sat_fat_g": 2.71,
    "sodium_mg": 382.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 4.03,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706306",
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
