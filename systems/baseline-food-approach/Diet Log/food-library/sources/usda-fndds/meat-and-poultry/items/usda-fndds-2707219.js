/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707219",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 0.99,
    "energy_kcal": 193.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.51,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 181.0,
    "potassium_mg": 154.0,
    "protein_g": 12.7,
    "salt_g": 0.8825,
    "sat_fat_g": 4.64,
    "sodium_mg": 353.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707219",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "meat-and-poultry",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
