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
  "id": "usda-fndds-2707288",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    }
  ],
  "name": "Egg white omelet, scrambled, or fried, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 2.21,
    "energy_kcal": 100.0,
    "fat_g": 5.72,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 15.0,
    "potassium_mg": 153.0,
    "protein_g": 9.99,
    "salt_g": 0.705,
    "sat_fat_g": 1.5,
    "sodium_mg": 282.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707288",
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
