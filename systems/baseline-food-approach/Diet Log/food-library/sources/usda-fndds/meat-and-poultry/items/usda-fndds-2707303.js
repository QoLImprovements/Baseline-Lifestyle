/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-4-cup-raw-equivalent-to-1-large-egg-yields",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-4-cup-raw-equivalent-to-1-large-egg-yields",
      "kind": "unit",
      "label": "1/4 cup, raw (equivalent to 1 large egg) yields"
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
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, with cheese and meat",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 2.21,
    "energy_kcal": 138.0,
    "fat_g": 9.21,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.64,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 139.0,
    "potassium_mg": 207.0,
    "protein_g": 11.5,
    "salt_g": 1.13,
    "sat_fat_g": 3.51,
    "sodium_mg": 452.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707303",
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
