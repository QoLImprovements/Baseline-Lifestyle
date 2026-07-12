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
  "id": "usda-fndds-2706246",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-fillet-any-size",
      "kind": "unit",
      "label": "1 fillet, any size"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-whole-fish-any-size",
      "kind": "unit",
      "label": "1 whole fish, any size"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Fish, croaker",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.79,
    "energy_kcal": 189.0,
    "fat_g": 8.17,
    "fibre_g": 0.3,
    "folate_ug": 30.0,
    "iron_mg": 0.97,
    "magnesium_mg": 45.0,
    "omega3_g": 0.322,
    "phosphorus_mg": 236.0,
    "potassium_mg": 378.0,
    "protein_g": 19.9,
    "salt_g": 0.805,
    "sat_fat_g": 2.39,
    "sodium_mg": 322.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.05,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706246",
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
