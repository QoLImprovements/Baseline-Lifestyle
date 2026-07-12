/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-4-cup-raw-equivalent-to-1-large-egg-yields",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707298",
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
    }
  ],
  "name": "Egg substitute, omelet, scrambled, or fried, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 1.88,
    "energy_kcal": 96.0,
    "fat_g": 5.72,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.85,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 68.0,
    "potassium_mg": 199.0,
    "protein_g": 9.34,
    "salt_g": 0.7825,
    "sat_fat_g": 1.5,
    "sodium_mg": 313.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.34,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707298",
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
