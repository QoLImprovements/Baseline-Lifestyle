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
  "id": "usda-fndds-2708810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni with tuna, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 18.1,
    "energy_kcal": 147.0,
    "fat_g": 4.74,
    "fibre_g": 0.9,
    "folate_ug": 28.0,
    "iron_mg": 1.11,
    "magnesium_mg": 18.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 93.0,
    "potassium_mg": 124.0,
    "protein_g": 7.71,
    "salt_g": 0.8975,
    "sat_fat_g": 1.2,
    "sodium_mg": 359.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708810",
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
