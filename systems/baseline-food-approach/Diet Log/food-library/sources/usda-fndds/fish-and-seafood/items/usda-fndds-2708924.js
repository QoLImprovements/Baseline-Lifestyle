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
  "id": "usda-fndds-2708924",
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
  "name": "Pasta, whole grain, with cream sauce, seafood, and added vegetables, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 15.6,
    "energy_kcal": 187.0,
    "fat_g": 12.0,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 1.08,
    "magnesium_mg": 31.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 101.0,
    "potassium_mg": 112.0,
    "protein_g": 5.48,
    "salt_g": 1.315,
    "sat_fat_g": 3.41,
    "sodium_mg": 526.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708924",
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
