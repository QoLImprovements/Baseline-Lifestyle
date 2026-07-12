/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large-jumbo-shrimp",
  "description": "Shellfish",
  "id": "usda-fndds-2706361",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-large-jumbo-shrimp",
      "kind": "unit",
      "label": "1 large/jumbo shrimp"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tiny-shrimp",
      "kind": "unit",
      "label": "1 tiny shrimp"
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
      "gramsPerUnit": 20.0,
      "key": "1-prawn",
      "kind": "unit",
      "label": "1 prawn"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-small-medium-shrimp",
      "kind": "unit",
      "label": "1 small/medium shrimp"
    }
  ],
  "name": "Shrimp, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 1.14,
    "energy_kcal": 129.0,
    "fat_g": 5.79,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.27,
    "magnesium_mg": 27.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 303.0,
    "potassium_mg": 141.0,
    "protein_g": 16.9,
    "salt_g": 0.9075,
    "sat_fat_g": 1.51,
    "sodium_mg": 363.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.32,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706361",
  "state": "Baked",
  "subcategory": "Shellfish",
  "tags": [
    "baked",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
