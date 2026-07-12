/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with cheese, meat, and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 2.6,
    "energy_kcal": 135.0,
    "fat_g": 8.72,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 0.25,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 93.0,
    "potassium_mg": 185.0,
    "protein_g": 11.5,
    "salt_g": 1.02,
    "sat_fat_g": 3.31,
    "sodium_mg": 408.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 27.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707296",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
