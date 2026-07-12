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
  "id": "usda-fndds-2706356",
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
  "name": "Scallops, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 3.96,
    "energy_kcal": 126.0,
    "fat_g": 5.14,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.48,
    "magnesium_mg": 27.0,
    "omega3_g": 0.133,
    "phosphorus_mg": 415.0,
    "potassium_mg": 255.0,
    "protein_g": 15.0,
    "salt_g": 1.0375,
    "sat_fat_g": 1.35,
    "sodium_mg": 415.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706356",
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
