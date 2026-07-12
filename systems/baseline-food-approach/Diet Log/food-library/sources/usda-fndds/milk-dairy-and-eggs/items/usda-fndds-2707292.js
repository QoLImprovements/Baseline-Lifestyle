/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg-white",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707292",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.49,
    "energy_kcal": 92.0,
    "fat_g": 5.09,
    "fibre_g": 0.2,
    "folate_ug": 13.0,
    "iron_mg": 0.2,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 19.0,
    "potassium_mg": 189.0,
    "protein_g": 9.13,
    "salt_g": 0.6475,
    "sat_fat_g": 1.32,
    "sodium_mg": 259.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 54.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707292",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
