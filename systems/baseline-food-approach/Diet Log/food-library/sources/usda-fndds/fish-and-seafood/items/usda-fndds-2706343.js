/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-small-can",
  "description": "Shellfish",
  "id": "usda-fndds-2706343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-small-can",
      "kind": "unit",
      "label": "1 small can"
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
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-standard-can",
      "kind": "unit",
      "label": "1 standard can"
    }
  ],
  "name": "Clams, canned",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.46,
    "energy_kcal": 108.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.82,
    "magnesium_mg": 24.0,
    "omega3_g": 0.143,
    "phosphorus_mg": 186.0,
    "potassium_mg": 52.0,
    "protein_g": 18.3,
    "salt_g": 0.175,
    "sat_fat_g": 0.234,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 101.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706343",
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
