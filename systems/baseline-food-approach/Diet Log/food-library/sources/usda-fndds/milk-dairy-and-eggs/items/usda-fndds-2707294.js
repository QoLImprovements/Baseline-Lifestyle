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
  "id": "usda-fndds-2707294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
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
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with cheese and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 2.77,
    "energy_kcal": 121.0,
    "fat_g": 7.64,
    "fibre_g": 0.2,
    "folate_ug": 13.0,
    "iron_mg": 0.22,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 80.0,
    "potassium_mg": 185.0,
    "protein_g": 10.4,
    "salt_g": 0.8525,
    "sat_fat_g": 2.96,
    "sodium_mg": 341.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 49.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707294",
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
