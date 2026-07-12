/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fish",
  "id": "usda-fndds-2706315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 135.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
    }
  ],
  "name": "Fish, whiting, baked or broiled, coated",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 7.79,
    "energy_kcal": 174.0,
    "fat_g": 6.22,
    "fibre_g": 0.3,
    "folate_ug": 28.0,
    "iron_mg": 0.94,
    "magnesium_mg": 25.0,
    "omega3_g": 0.254,
    "phosphorus_mg": 248.0,
    "potassium_mg": 278.0,
    "protein_g": 20.5,
    "salt_g": 0.8475,
    "sat_fat_g": 1.51,
    "sodium_mg": 339.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706315",
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
