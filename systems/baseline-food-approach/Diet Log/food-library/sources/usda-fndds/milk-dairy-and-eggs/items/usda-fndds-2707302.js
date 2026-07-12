/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-cooked",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
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
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 2.2,
    "energy_kcal": 89.0,
    "fat_g": 5.09,
    "fibre_g": 0.2,
    "folate_ug": 20.0,
    "iron_mg": 1.75,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 65.0,
    "potassium_mg": 230.0,
    "protein_g": 8.56,
    "salt_g": 0.715,
    "sat_fat_g": 1.32,
    "sodium_mg": 286.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 55.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707302",
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
