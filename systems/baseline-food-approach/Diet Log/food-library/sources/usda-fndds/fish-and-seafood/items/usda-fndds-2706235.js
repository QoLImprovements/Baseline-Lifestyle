/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-small-regular-fillet",
  "description": "Fish",
  "id": "usda-fndds-2706235",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
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
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
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
    }
  ],
  "name": "Fish, catfish, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.01,
    "energy_kcal": 189.0,
    "fat_g": 11.9,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.29,
    "magnesium_mg": 24.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 254.0,
    "potassium_mg": 376.0,
    "protein_g": 18.9,
    "salt_g": 0.8425,
    "sat_fat_g": 2.81,
    "sodium_mg": 337.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706235",
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
