/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-scallop",
  "description": "Shellfish",
  "id": "usda-fndds-2706358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-scallop",
      "kind": "unit",
      "label": "1 scallop"
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
    }
  ],
  "name": "Scallops, steamed or boiled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.02,
    "energy_kcal": 87.0,
    "fat_g": 0.62,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.48,
    "magnesium_mg": 28.0,
    "omega3_g": 0.134,
    "phosphorus_mg": 422.0,
    "potassium_mg": 259.0,
    "protein_g": 15.2,
    "salt_g": 0.7525,
    "sat_fat_g": 0.162,
    "sodium_mg": 301.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706358",
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
