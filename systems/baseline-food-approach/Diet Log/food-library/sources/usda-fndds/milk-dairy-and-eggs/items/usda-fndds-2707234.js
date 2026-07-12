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
  "id": "usda-fndds-2707234",
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
      "gramsPerUnit": 75.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 1.35,
    "energy_kcal": 166.0,
    "fat_g": 13.2,
    "fibre_g": 0.2,
    "folate_ug": 54.0,
    "iron_mg": 1.5,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 157.0,
    "potassium_mg": 164.0,
    "protein_g": 10.5,
    "salt_g": 0.5725,
    "sat_fat_g": 3.94,
    "sodium_mg": 229.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 199.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 55.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707234",
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
