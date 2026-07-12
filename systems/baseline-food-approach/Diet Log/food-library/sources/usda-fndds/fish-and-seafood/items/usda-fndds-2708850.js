/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta with tomato-based sauce and seafood, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 19.4,
    "energy_kcal": 113.0,
    "fat_g": 1.19,
    "fibre_g": 1.6,
    "folate_ug": 44.0,
    "iron_mg": 1.19,
    "magnesium_mg": 19.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 67.0,
    "potassium_mg": 180.0,
    "protein_g": 5.58,
    "salt_g": 0.5225,
    "sat_fat_g": 0.18,
    "sodium_mg": 209.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708850",
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
