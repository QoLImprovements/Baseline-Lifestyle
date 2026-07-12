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
  "id": "usda-fndds-2706344",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-leg",
      "kind": "unit",
      "label": "1 leg"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-crab",
      "kind": "unit",
      "label": "1 crab"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-claw",
      "kind": "unit",
      "label": "1 claw"
    }
  ],
  "name": "Crab",
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
    "salt_g": 0.9875,
    "sat_fat_g": 0.201,
    "sodium_mg": 395.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706344",
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
