/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707236",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with tomatoes and dark-green vegetables, no fat added",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 1.51,
    "energy_kcal": 127.0,
    "fat_g": 8.62,
    "fibre_g": 0.2,
    "folate_ug": 52.0,
    "iron_mg": 1.53,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 164.0,
    "protein_g": 10.9,
    "salt_g": 0.545,
    "sat_fat_g": 2.76,
    "sodium_mg": 218.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707236",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
