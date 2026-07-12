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
  "id": "usda-fndds-2708929",
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
  "name": "Macaroni or noodles, creamed, with cheese and tuna",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 17.4,
    "energy_kcal": 143.0,
    "fat_g": 4.52,
    "fibre_g": 1.0,
    "folate_ug": 39.0,
    "iron_mg": 1.07,
    "magnesium_mg": 16.0,
    "omega3_g": 0.052,
    "phosphorus_mg": 74.0,
    "potassium_mg": 72.0,
    "protein_g": 7.85,
    "salt_g": 0.63,
    "sat_fat_g": 2.31,
    "sodium_mg": 252.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708929",
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
