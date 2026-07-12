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
  "id": "usda-fndds-2706363",
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
      "gramsPerUnit": 10.0,
      "key": "1-small-medium-shrimp",
      "kind": "unit",
      "label": "1 small/medium shrimp"
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
    }
  ],
  "name": "Shrimp, steamed or boiled",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 1.15,
    "energy_kcal": 90.0,
    "fat_g": 1.28,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.26,
    "magnesium_mg": 28.0,
    "omega3_g": 0.182,
    "phosphorus_mg": 308.0,
    "potassium_mg": 143.0,
    "protein_g": 17.2,
    "salt_g": 0.62,
    "sat_fat_g": 0.33,
    "sodium_mg": 248.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706363",
  "state": "Boiled",
  "subcategory": "Shellfish",
  "tags": [
    "boiled",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
