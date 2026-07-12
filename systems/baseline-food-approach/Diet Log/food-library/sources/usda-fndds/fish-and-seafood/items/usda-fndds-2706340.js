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
  "id": "usda-fndds-2706340",
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
      "gramsPerUnit": 15.0,
      "key": "1-clam",
      "kind": "unit",
      "label": "1 clam"
    }
  ],
  "name": "Clams, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.44,
    "energy_kcal": 148.0,
    "fat_g": 5.73,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.02,
    "magnesium_mg": 24.0,
    "omega3_g": 0.142,
    "phosphorus_mg": 246.0,
    "potassium_mg": 58.0,
    "protein_g": 18.2,
    "salt_g": 0.7125,
    "sat_fat_g": 1.42,
    "sodium_mg": 285.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706340",
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
