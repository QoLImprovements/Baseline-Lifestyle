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
  "id": "usda-fndds-2706310",
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
      "gramsPerUnit": 135.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish, tuna, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.01,
    "energy_kcal": 176.0,
    "fat_g": 5.14,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.96,
    "magnesium_mg": 44.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 346.0,
    "potassium_mg": 548.0,
    "protein_g": 30.3,
    "salt_g": 0.6775,
    "sat_fat_g": 1.4,
    "sodium_mg": 271.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706310",
  "state": "Cooked",
  "subcategory": "Fish",
  "tags": [
    "cooked",
    "fish",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
