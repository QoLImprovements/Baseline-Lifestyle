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
  "id": "usda-fndds-2707304",
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
  "name": "Egg substitute, omelet, scrambled, or fried, with cheese and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 2.51,
    "energy_kcal": 118.0,
    "fat_g": 7.64,
    "fibre_g": 0.2,
    "folate_ug": 19.0,
    "iron_mg": 1.61,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 122.0,
    "potassium_mg": 222.0,
    "protein_g": 9.85,
    "salt_g": 0.9125,
    "sat_fat_g": 2.96,
    "sodium_mg": 365.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 49.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707304",
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
