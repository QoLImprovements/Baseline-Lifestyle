/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-prawn",
  "description": "Shellfish",
  "id": "usda-fndds-2706364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-prawn",
      "kind": "unit",
      "label": "1 prawn"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tiny-shrimp",
      "kind": "unit",
      "label": "1 tiny shrimp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-large-jumbo-shrimp",
      "kind": "unit",
      "label": "1 large/jumbo shrimp"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-small-medium-shrimp",
      "kind": "unit",
      "label": "1 small/medium shrimp"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp, fried",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 12.4,
    "energy_kcal": 218.0,
    "fat_g": 12.9,
    "fibre_g": 0.5,
    "folate_ug": 35.0,
    "iron_mg": 1.05,
    "magnesium_mg": 22.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 208.0,
    "potassium_mg": 110.0,
    "protein_g": 12.3,
    "salt_g": 1.085,
    "sat_fat_g": 1.86,
    "sodium_mg": 434.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.25,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706364",
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
