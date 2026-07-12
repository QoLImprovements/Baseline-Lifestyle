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
  "id": "usda-fndds-2706297",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Fish, bass, baked or broiled, coated",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 7.79,
    "energy_kcal": 182.0,
    "fat_g": 6.95,
    "fibre_g": 0.3,
    "folate_ug": 21.0,
    "iron_mg": 0.89,
    "magnesium_mg": 46.0,
    "omega3_g": 0.704,
    "phosphorus_mg": 219.0,
    "potassium_mg": 285.0,
    "protein_g": 20.6,
    "salt_g": 0.835,
    "sat_fat_g": 1.79,
    "sodium_mg": 334.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706297",
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
