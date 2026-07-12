/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-fritter",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2708717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-fritter",
      "kind": "unit",
      "label": "1 fritter"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bacalaitos fritos",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 36.1,
    "energy_kcal": 281.0,
    "fat_g": 8.63,
    "fibre_g": 1.2,
    "folate_ug": 56.0,
    "iron_mg": 2.87,
    "magnesium_mg": 26.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 256.0,
    "potassium_mg": 208.0,
    "protein_g": 14.4,
    "salt_g": 0.5825,
    "sat_fat_g": 1.15,
    "sodium_mg": 233.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708717",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
