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
  "id": "usda-fndds-2706366",
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
    }
  ],
  "name": "Shrimp, dried",
  "nutritionPerBasis": {
    "calcium_mg": 362.0,
    "carbs_g": 0.0,
    "energy_kcal": 250.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 5.32,
    "magnesium_mg": 82.0,
    "omega3_g": 1.492,
    "phosphorus_mg": 488.0,
    "potassium_mg": 200.0,
    "protein_g": 51.0,
    "salt_g": 5.45,
    "sat_fat_g": 0.47,
    "sodium_mg": 2180.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 2.75,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706366",
  "state": "Dried",
  "subcategory": "Shellfish",
  "tags": [
    "dried",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
