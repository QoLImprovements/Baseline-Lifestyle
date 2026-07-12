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
  "id": "usda-fndds-2707306",
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
      "gramsPerUnit": 55.0,
      "key": "1-4-cup-raw-equivalent-to-1-large-egg-yields",
      "kind": "unit",
      "label": "1/4 cup, raw (equivalent to 1 large egg) yields"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, with cheese, meat, and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 2.35,
    "energy_kcal": 132.0,
    "fat_g": 8.72,
    "fibre_g": 0.1,
    "folate_ug": 15.0,
    "iron_mg": 1.6,
    "magnesium_mg": 20.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 134.0,
    "potassium_mg": 221.0,
    "protein_g": 11.0,
    "salt_g": 1.0775,
    "sat_fat_g": 3.31,
    "sodium_mg": 431.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 27.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707306",
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
