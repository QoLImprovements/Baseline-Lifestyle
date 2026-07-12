/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
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
      "gramsPerUnit": 100.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, meat, and dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 1.68,
    "energy_kcal": 169.0,
    "fat_g": 12.0,
    "fibre_g": 0.1,
    "folate_ug": 47.0,
    "iron_mg": 1.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 225.0,
    "potassium_mg": 171.0,
    "protein_g": 13.3,
    "salt_g": 0.965,
    "sat_fat_g": 4.68,
    "sodium_mg": 386.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 181.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707269",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "meat-and-poultry",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
