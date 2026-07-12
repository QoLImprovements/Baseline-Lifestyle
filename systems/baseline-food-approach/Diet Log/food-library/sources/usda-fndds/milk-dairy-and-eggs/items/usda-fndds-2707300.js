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
  "id": "usda-fndds-2707300",
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
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 2.26,
    "energy_kcal": 128.0,
    "fat_g": 8.51,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.68,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 130.0,
    "potassium_mg": 193.0,
    "protein_g": 10.7,
    "salt_g": 0.995,
    "sat_fat_g": 3.32,
    "sodium_mg": 398.0,
    "sugar_g": 1.99,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707300",
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
