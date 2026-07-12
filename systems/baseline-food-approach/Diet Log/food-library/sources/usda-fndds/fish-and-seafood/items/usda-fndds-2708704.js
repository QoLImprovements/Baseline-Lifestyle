/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-roll-4-1-4-x-1-1-2-dia",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-roll-4-1-4-x-1-1-2-dia",
      "kind": "unit",
      "label": "1 roll (4-1/4\" x 1-1/2\" dia)"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll with meat and/or shrimp, vegetables and rice paper, not fried",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 17.2,
    "energy_kcal": 112.0,
    "fat_g": 2.65,
    "fibre_g": 1.9,
    "folate_ug": 41.0,
    "iron_mg": 0.58,
    "magnesium_mg": 32.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 88.0,
    "potassium_mg": 208.0,
    "protein_g": 5.65,
    "salt_g": 0.9875,
    "sat_fat_g": 0.458,
    "sodium_mg": 395.0,
    "sugar_g": 3.91,
    "vitamin_a_ug": 234.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 28.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708704",
  "state": "Fried",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "fish-and-seafood",
    "fried"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
