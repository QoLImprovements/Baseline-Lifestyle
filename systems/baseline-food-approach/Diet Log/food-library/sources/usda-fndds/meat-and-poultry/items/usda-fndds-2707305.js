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
  "id": "usda-fndds-2707305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-4-cup-raw-equivalent-to-1-large-egg-yields",
      "kind": "unit",
      "label": "1/4 cup, raw (equivalent to 1 large egg) yields"
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, with meat and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 2.15,
    "energy_kcal": 101.0,
    "fat_g": 6.05,
    "fibre_g": 0.2,
    "folate_ug": 19.0,
    "iron_mg": 1.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 79.0,
    "potassium_mg": 241.0,
    "protein_g": 9.48,
    "salt_g": 0.87,
    "sat_fat_g": 1.66,
    "sodium_mg": 348.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 2.13,
    "vitamin_k_ug": 51.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707305",
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
