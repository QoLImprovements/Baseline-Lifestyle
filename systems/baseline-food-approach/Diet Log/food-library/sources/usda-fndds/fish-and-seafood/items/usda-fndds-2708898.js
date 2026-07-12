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
  "id": "usda-fndds-2708898",
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
  "name": "Pasta, whole grain, with tomato-based sauce and seafood, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 19.0,
    "energy_kcal": 108.0,
    "fat_g": 1.6,
    "fibre_g": 2.7,
    "folate_ug": 17.0,
    "iron_mg": 1.41,
    "magnesium_mg": 38.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 103.0,
    "potassium_mg": 207.0,
    "protein_g": 5.67,
    "salt_g": 0.525,
    "sat_fat_g": 0.215,
    "sodium_mg": 210.0,
    "sugar_g": 2.54,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708898",
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
