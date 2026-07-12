/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707277",
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
  "name": "Egg omelet or scrambled egg, with potatoes and/or onions, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 2.97,
    "energy_kcal": 172.0,
    "fat_g": 13.2,
    "fibre_g": 0.3,
    "folate_ug": 47.0,
    "iron_mg": 1.47,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 158.0,
    "potassium_mg": 159.0,
    "protein_g": 10.4,
    "salt_g": 0.545,
    "sat_fat_g": 3.93,
    "sodium_mg": 218.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.61,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707277",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "potatoes-and-starchy-vegetables",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
