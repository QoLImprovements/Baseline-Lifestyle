/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cubic-inch",
  "description": "Fish",
  "id": "usda-fndds-2706260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
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
      "gramsPerUnit": 420.0,
      "key": "1-whole-fish-any-size",
      "kind": "unit",
      "label": "1 whole fish, any size"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-steak",
      "kind": "unit",
      "label": "1 steak"
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
    }
  ],
  "name": "Fish, halibut",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.79,
    "energy_kcal": 175.0,
    "fat_g": 6.24,
    "fibre_g": 0.3,
    "folate_ug": 27.0,
    "iron_mg": 0.75,
    "magnesium_mg": 27.0,
    "omega3_g": 0.221,
    "phosphorus_mg": 263.0,
    "potassium_mg": 473.0,
    "protein_g": 20.7,
    "salt_g": 0.835,
    "sat_fat_g": 1.56,
    "sodium_mg": 334.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706260",
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
