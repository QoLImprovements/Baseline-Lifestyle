/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-steak",
  "description": "Fish",
  "id": "usda-fndds-2706301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-steak",
      "kind": "unit",
      "label": "1 steak"
    },
    {
      "gramsPerUnit": 140.0,
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
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-fillet-any-size",
      "kind": "unit",
      "label": "1 fillet, any size"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Fish, swordfish",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.79,
    "energy_kcal": 231.0,
    "fat_g": 11.8,
    "fibre_g": 0.3,
    "folate_ug": 18.0,
    "iron_mg": 0.98,
    "magnesium_mg": 34.0,
    "omega3_g": 0.941,
    "phosphorus_mg": 283.0,
    "potassium_mg": 455.0,
    "protein_g": 21.9,
    "salt_g": 0.87,
    "sat_fat_g": 2.94,
    "sodium_mg": 348.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.81,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706301",
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
