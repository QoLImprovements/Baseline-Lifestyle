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
  "id": "usda-fndds-2707231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with tomatoes, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 1.47,
    "energy_kcal": 165.0,
    "fat_g": 13.2,
    "fibre_g": 0.2,
    "folate_ug": 45.0,
    "iron_mg": 1.41,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 155.0,
    "potassium_mg": 143.0,
    "protein_g": 10.3,
    "salt_g": 0.545,
    "sat_fat_g": 3.93,
    "sodium_mg": 218.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 175.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707231",
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
