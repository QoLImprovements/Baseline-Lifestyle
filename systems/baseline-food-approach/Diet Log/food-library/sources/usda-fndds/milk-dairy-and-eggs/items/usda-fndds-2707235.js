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
  "id": "usda-fndds-2707235",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg omelet or scrambled egg, with tomatoes and dark-green vegetables, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 1.44,
    "energy_kcal": 165.0,
    "fat_g": 13.1,
    "fibre_g": 0.2,
    "folate_ug": 49.0,
    "iron_mg": 1.45,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 155.0,
    "potassium_mg": 155.0,
    "protein_g": 10.3,
    "salt_g": 0.555,
    "sat_fat_g": 3.9,
    "sodium_mg": 222.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 187.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 31.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707235",
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
