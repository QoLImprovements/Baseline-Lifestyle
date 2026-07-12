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
  "id": "usda-fndds-2706359",
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
      "key": "1-scallop",
      "kind": "unit",
      "label": "1 scallop"
    }
  ],
  "name": "Scallops, fried",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 14.1,
    "energy_kcal": 217.0,
    "fat_g": 12.5,
    "fibre_g": 0.5,
    "folate_ug": 33.0,
    "iron_mg": 1.18,
    "magnesium_mg": 22.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 277.0,
    "potassium_mg": 180.0,
    "protein_g": 11.1,
    "salt_g": 1.165,
    "sat_fat_g": 1.76,
    "sodium_mg": 466.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706359",
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
