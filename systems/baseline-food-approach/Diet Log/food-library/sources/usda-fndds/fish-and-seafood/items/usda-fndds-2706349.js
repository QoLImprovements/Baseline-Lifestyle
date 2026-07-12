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
  "id": "usda-fndds-2706349",
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
      "gramsPerUnit": 50.0,
      "key": "1-claw",
      "kind": "unit",
      "label": "1 claw"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-lobster",
      "kind": "unit",
      "label": "1 lobster"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-tail",
      "kind": "unit",
      "label": "1 tail"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lobster",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 0.0,
    "energy_kcal": 97.0,
    "fat_g": 0.95,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.33,
    "magnesium_mg": 48.0,
    "omega3_g": 0.223,
    "phosphorus_mg": 204.0,
    "potassium_mg": 253.0,
    "protein_g": 20.9,
    "salt_g": 1.3375,
    "sat_fat_g": 0.229,
    "sodium_mg": 535.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706349",
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
