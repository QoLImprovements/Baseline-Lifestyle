/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-clam",
  "description": "Shellfish",
  "id": "usda-fndds-2706342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
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
  "name": "Clams, steamed or boiled",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.52,
    "energy_kcal": 109.0,
    "fat_g": 1.22,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.05,
    "magnesium_mg": 24.0,
    "omega3_g": 0.144,
    "phosphorus_mg": 251.0,
    "potassium_mg": 58.0,
    "protein_g": 18.6,
    "salt_g": 0.1775,
    "sat_fat_g": 0.237,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706342",
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
