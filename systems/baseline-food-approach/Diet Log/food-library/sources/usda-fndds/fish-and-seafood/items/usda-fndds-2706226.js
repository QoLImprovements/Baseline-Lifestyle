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
  "id": "usda-fndds-2706226",
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
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
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
    }
  ],
  "name": "Fish, NS as to type, baked or broiled, coated",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.79,
    "energy_kcal": 223.0,
    "fat_g": 11.7,
    "fibre_g": 0.3,
    "folate_ug": 33.0,
    "iron_mg": 0.96,
    "magnesium_mg": 29.0,
    "omega3_g": 0.893,
    "phosphorus_mg": 246.0,
    "potassium_mg": 353.0,
    "protein_g": 20.7,
    "salt_g": 0.85,
    "sat_fat_g": 2.82,
    "sodium_mg": 340.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706226",
  "state": "Baked",
  "subcategory": "Fish",
  "tags": [
    "baked",
    "fish",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
