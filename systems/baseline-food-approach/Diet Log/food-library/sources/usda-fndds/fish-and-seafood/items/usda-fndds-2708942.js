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
  "id": "usda-fndds-2708942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or pasta salad with tuna",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 20.9,
    "energy_kcal": 200.0,
    "fat_g": 9.9,
    "fibre_g": 1.2,
    "folate_ug": 48.0,
    "iron_mg": 1.11,
    "magnesium_mg": 16.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 61.0,
    "potassium_mg": 69.0,
    "protein_g": 6.69,
    "salt_g": 0.515,
    "sat_fat_g": 1.58,
    "sodium_mg": 206.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 23.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708942",
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
