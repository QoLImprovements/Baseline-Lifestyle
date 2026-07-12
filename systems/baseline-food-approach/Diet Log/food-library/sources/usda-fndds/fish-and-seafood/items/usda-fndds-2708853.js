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
  "id": "usda-fndds-2708853",
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
  "name": "Pasta with tomato-based sauce, seafood, and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 19.2,
    "energy_kcal": 111.0,
    "fat_g": 1.09,
    "fibre_g": 1.6,
    "folate_ug": 45.0,
    "iron_mg": 1.15,
    "magnesium_mg": 19.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 69.0,
    "potassium_mg": 179.0,
    "protein_g": 5.62,
    "salt_g": 0.4275,
    "sat_fat_g": 0.171,
    "sodium_mg": 171.0,
    "sugar_g": 2.23,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708853",
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
