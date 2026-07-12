/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sushi roll tuna",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 15.3,
    "energy_kcal": 97.0,
    "fat_g": 0.26,
    "fibre_g": 0.7,
    "folate_ug": 3.0,
    "iron_mg": 0.31,
    "magnesium_mg": 12.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 74.0,
    "potassium_mg": 119.0,
    "protein_g": 7.4,
    "salt_g": 0.855,
    "sat_fat_g": 0.069,
    "sodium_mg": 342.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708965",
  "state": "Unspecified",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
