/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-order",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-order",
      "kind": "unit",
      "label": "1 order"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-puff",
      "kind": "unit",
      "label": "1 puff"
    }
  ],
  "name": "Puffs, fried, crab meat and cream cheese filled",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 35.1,
    "energy_kcal": 314.0,
    "fat_g": 15.1,
    "fibre_g": 1.2,
    "folate_ug": 46.0,
    "iron_mg": 2.37,
    "magnesium_mg": 29.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 184.0,
    "potassium_mg": 145.0,
    "protein_g": 9.4,
    "salt_g": 2.1,
    "sat_fat_g": 7.21,
    "sodium_mg": 840.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708707",
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
