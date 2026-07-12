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
  "id": "usda-fndds-2708701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-miniature-egg-roll",
      "kind": "unit",
      "label": "1 miniature egg roll"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-egg-roll",
      "kind": "unit",
      "label": "1 egg roll"
    }
  ],
  "name": "Egg roll, with shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 27.1,
    "energy_kcal": 258.0,
    "fat_g": 13.6,
    "fibre_g": 2.0,
    "folate_ug": 62.0,
    "iron_mg": 1.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 90.0,
    "potassium_mg": 202.0,
    "protein_g": 6.68,
    "salt_g": 1.1,
    "sat_fat_g": 2.01,
    "sodium_mg": 440.0,
    "sugar_g": 5.07,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 41.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708701",
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
