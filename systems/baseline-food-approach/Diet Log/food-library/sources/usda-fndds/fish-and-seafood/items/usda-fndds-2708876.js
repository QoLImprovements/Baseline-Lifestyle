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
  "id": "usda-fndds-2708876",
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
  "name": "Pasta with cream sauce, seafood, and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 16.0,
    "energy_kcal": 191.0,
    "fat_g": 11.6,
    "fibre_g": 1.0,
    "folate_ug": 39.0,
    "iron_mg": 0.86,
    "magnesium_mg": 14.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 68.0,
    "potassium_mg": 88.0,
    "protein_g": 5.38,
    "salt_g": 1.3125,
    "sat_fat_g": 3.38,
    "sodium_mg": 525.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708876",
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
