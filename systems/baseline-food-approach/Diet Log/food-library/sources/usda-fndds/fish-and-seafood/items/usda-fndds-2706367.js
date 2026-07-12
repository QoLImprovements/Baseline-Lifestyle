/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Shellfish",
  "id": "usda-fndds-2706367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-large-can",
      "kind": "unit",
      "label": "1 large can"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
    }
  ],
  "name": "Shrimp, canned",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 0.0,
    "energy_kcal": 100.0,
    "fat_g": 1.36,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.13,
    "magnesium_mg": 33.0,
    "omega3_g": 0.597,
    "phosphorus_mg": 195.0,
    "potassium_mg": 80.0,
    "protein_g": 20.4,
    "salt_g": 2.175,
    "sat_fat_g": 0.188,
    "sodium_mg": 870.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706367",
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
