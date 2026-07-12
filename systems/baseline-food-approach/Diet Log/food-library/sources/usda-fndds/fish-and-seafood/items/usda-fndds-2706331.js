/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Shellfish",
  "id": "usda-fndds-2706331",
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
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Octopus",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 13.4,
    "energy_kcal": 226.0,
    "fat_g": 13.0,
    "fibre_g": 0.5,
    "folate_ug": 33.0,
    "iron_mg": 4.92,
    "magnesium_mg": 28.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 164.0,
    "potassium_mg": 290.0,
    "protein_g": 13.2,
    "salt_g": 1.295,
    "sat_fat_g": 1.84,
    "sodium_mg": 518.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 3.16,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706331",
  "state": "Unspecified",
  "subcategory": "Shellfish",
  "tags": [
    "fish-and-seafood",
    "shellfish",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
