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
  "id": "usda-fndds-2708849",
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
  "name": "Pasta with tomato-based sauce and seafood, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 18.0,
    "energy_kcal": 166.0,
    "fat_g": 7.97,
    "fibre_g": 1.5,
    "folate_ug": 40.0,
    "iron_mg": 1.11,
    "magnesium_mg": 18.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 62.0,
    "potassium_mg": 166.0,
    "protein_g": 5.16,
    "salt_g": 0.9825,
    "sat_fat_g": 1.08,
    "sodium_mg": 393.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 2.29,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708849",
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
