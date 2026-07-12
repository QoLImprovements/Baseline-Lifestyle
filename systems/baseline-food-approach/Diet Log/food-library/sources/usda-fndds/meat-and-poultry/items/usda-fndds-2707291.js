/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-egg-white",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.14,
    "energy_kcal": 119.0,
    "fat_g": 7.21,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 43.0,
    "potassium_mg": 179.0,
    "protein_g": 11.3,
    "salt_g": 0.9575,
    "sat_fat_g": 2.03,
    "sodium_mg": 383.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707291",
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
