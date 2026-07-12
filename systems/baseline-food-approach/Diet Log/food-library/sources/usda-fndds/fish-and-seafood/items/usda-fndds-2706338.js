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
  "id": "usda-fndds-2706338",
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
      "gramsPerUnit": 15.0,
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Clams, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.57,
    "energy_kcal": 86.0,
    "fat_g": 0.96,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.114,
    "phosphorus_mg": 198.0,
    "potassium_mg": 46.0,
    "protein_g": 14.7,
    "salt_g": 0.14,
    "sat_fat_g": 0.187,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706338",
  "state": "Raw",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "raw",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
