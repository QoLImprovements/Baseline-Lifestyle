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
  "id": "usda-fndds-2708900",
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
  "name": "Pasta, whole grain, with tomato-based sauce, seafood, and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 17.4,
    "energy_kcal": 160.0,
    "fat_g": 8.24,
    "fibre_g": 2.5,
    "folate_ug": 17.0,
    "iron_mg": 1.29,
    "magnesium_mg": 35.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 97.0,
    "potassium_mg": 190.0,
    "protein_g": 5.3,
    "salt_g": 0.8975,
    "sat_fat_g": 1.11,
    "sodium_mg": 359.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 2.21,
    "vitamin_k_ug": 11.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708900",
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
