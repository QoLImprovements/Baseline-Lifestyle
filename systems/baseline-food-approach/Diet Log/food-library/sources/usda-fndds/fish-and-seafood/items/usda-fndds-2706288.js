/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oz-yields",
  "description": "Fish",
  "id": "usda-fndds-2706288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
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
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-steak",
      "kind": "unit",
      "label": "1 steak"
    }
  ],
  "name": "Fish, salmon, baked or broiled, coated",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.79,
    "energy_kcal": 277.0,
    "fat_g": 16.6,
    "fibre_g": 0.3,
    "folate_ug": 36.0,
    "iron_mg": 0.95,
    "magnesium_mg": 32.0,
    "omega3_g": 2.008,
    "phosphorus_mg": 273.0,
    "potassium_mg": 398.0,
    "protein_g": 22.7,
    "salt_g": 0.8225,
    "sat_fat_g": 3.87,
    "sodium_mg": 329.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 3.6,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706288",
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
