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
  "id": "usda-fndds-2708943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni or pasta salad with crab meat",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 20.9,
    "energy_kcal": 201.0,
    "fat_g": 9.9,
    "fibre_g": 1.2,
    "folate_ug": 56.0,
    "iron_mg": 0.94,
    "magnesium_mg": 18.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 76.0,
    "potassium_mg": 81.0,
    "protein_g": 6.48,
    "salt_g": 0.5825,
    "sat_fat_g": 1.58,
    "sodium_mg": 233.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 23.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708943",
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
