/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, made with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 151.0,
    "carbs_g": 1.45,
    "energy_kcal": 194.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 1.42,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 222.0,
    "potassium_mg": 128.0,
    "protein_g": 12.6,
    "salt_g": 0.91,
    "sat_fat_g": 5.36,
    "sodium_mg": 364.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 227.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707207",
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
