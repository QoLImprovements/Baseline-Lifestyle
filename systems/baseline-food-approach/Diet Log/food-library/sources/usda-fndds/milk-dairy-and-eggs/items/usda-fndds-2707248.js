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
  "id": "usda-fndds-2707248",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, tomatoes, and dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 1.92,
    "energy_kcal": 153.0,
    "fat_g": 10.9,
    "fibre_g": 0.2,
    "folate_ug": 48.0,
    "iron_mg": 1.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 211.0,
    "potassium_mg": 162.0,
    "protein_g": 12.0,
    "salt_g": 0.77,
    "sat_fat_g": 4.31,
    "sodium_mg": 308.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 26.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707248",
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
