/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg white omelet, scrambled, or fried, made with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.25,
    "energy_kcal": 86.0,
    "fat_g": 4.24,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 154.0,
    "protein_g": 9.98,
    "salt_g": 0.77,
    "sat_fat_g": 0.839,
    "sodium_mg": 308.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707284",
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
