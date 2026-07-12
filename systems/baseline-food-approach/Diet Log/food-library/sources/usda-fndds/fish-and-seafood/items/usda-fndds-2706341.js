/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-strip",
  "description": "Shellfish",
  "id": "usda-fndds-2706341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-strip",
      "kind": "unit",
      "label": "1 strip"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Clams, fried",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 14.4,
    "energy_kcal": 230.0,
    "fat_g": 12.9,
    "fibre_g": 0.5,
    "folate_ug": 27.0,
    "iron_mg": 2.13,
    "magnesium_mg": 19.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 174.0,
    "potassium_mg": 59.0,
    "protein_g": 13.1,
    "salt_g": 0.965,
    "sat_fat_g": 1.8,
    "sodium_mg": 386.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.76,
    "vitamin_k_ug": 12.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706341",
  "state": "Fried",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "fried",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
