/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pasta, whole grain, with cream sauce and seafood, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 16.6,
    "energy_kcal": 147.0,
    "fat_g": 6.89,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 1.12,
    "magnesium_mg": 33.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 109.0,
    "potassium_mg": 97.0,
    "protein_g": 5.95,
    "salt_g": 0.655,
    "sat_fat_g": 3.48,
    "sodium_mg": 262.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708922",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "fish-and-seafood",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
