/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese and tuna",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 18.2,
    "energy_kcal": 164.0,
    "fat_g": 6.79,
    "fibre_g": 0.8,
    "folate_ug": 36.0,
    "iron_mg": 0.86,
    "magnesium_mg": 17.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 108.0,
    "potassium_mg": 75.0,
    "protein_g": 7.59,
    "salt_g": 0.44,
    "sat_fat_g": 2.68,
    "sodium_mg": 176.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708817",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "fish-and-seafood",
    "macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
