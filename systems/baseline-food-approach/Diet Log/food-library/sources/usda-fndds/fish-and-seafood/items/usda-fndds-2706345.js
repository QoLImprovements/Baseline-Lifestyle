/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large-can",
  "description": "Shellfish",
  "id": "usda-fndds-2706345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 450.0,
      "key": "1-large-can",
      "kind": "unit",
      "label": "1 large can"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    }
  ],
  "name": "Crab, canned",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 0.0,
    "energy_kcal": 83.0,
    "fat_g": 0.74,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 0.5,
    "magnesium_mg": 36.0,
    "omega3_g": 0.177,
    "phosphorus_mg": 234.0,
    "potassium_mg": 259.0,
    "protein_g": 17.9,
    "salt_g": 1.4075,
    "sat_fat_g": 0.201,
    "sodium_mg": 563.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706345",
  "state": "Canned",
  "subcategory": "Shellfish",
  "tags": [
    "canned",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
