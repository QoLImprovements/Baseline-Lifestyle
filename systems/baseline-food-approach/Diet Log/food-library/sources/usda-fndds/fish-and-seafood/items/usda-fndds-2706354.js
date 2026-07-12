/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-oyster",
  "description": "Shellfish",
  "id": "usda-fndds-2706354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
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
  "name": "Oysters, fried",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 13.8,
    "energy_kcal": 203.0,
    "fat_g": 13.5,
    "fibre_g": 0.5,
    "folate_ug": 28.0,
    "iron_mg": 4.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.246,
    "phosphorus_mg": 97.0,
    "potassium_mg": 143.0,
    "protein_g": 6.26,
    "salt_g": 1.02,
    "sat_fat_g": 2.02,
    "sodium_mg": 408.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.89,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706354",
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
