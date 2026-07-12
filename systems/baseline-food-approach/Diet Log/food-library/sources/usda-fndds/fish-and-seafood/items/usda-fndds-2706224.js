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
  "id": "usda-fndds-2706224",
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
  "name": "Fish, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.64,
    "energy_kcal": 238.0,
    "fat_g": 14.5,
    "fibre_g": 0.3,
    "folate_ug": 29.0,
    "iron_mg": 0.86,
    "magnesium_mg": 27.0,
    "omega3_g": 0.833,
    "phosphorus_mg": 229.0,
    "potassium_mg": 329.0,
    "protein_g": 19.3,
    "salt_g": 0.875,
    "sat_fat_g": 2.84,
    "sodium_mg": 350.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.88,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706224",
  "state": "Unspecified",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
