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
  "id": "usda-fndds-2706365",
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
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tiny-shrimp",
      "kind": "unit",
      "label": "1 tiny shrimp"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-prawn",
      "kind": "unit",
      "label": "1 prawn"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-large-jumbo-shrimp",
      "kind": "unit",
      "label": "1 large/jumbo shrimp"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-small-medium-shrimp",
      "kind": "unit",
      "label": "1 small/medium shrimp"
    }
  ],
  "name": "Shrimp, baked or broiled, coated",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 8.74,
    "energy_kcal": 154.0,
    "fat_g": 5.91,
    "fibre_g": 0.3,
    "folate_ug": 31.0,
    "iron_mg": 0.81,
    "magnesium_mg": 26.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 271.0,
    "potassium_mg": 135.0,
    "protein_g": 15.6,
    "salt_g": 0.97,
    "sat_fat_g": 1.53,
    "sodium_mg": 388.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706365",
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
