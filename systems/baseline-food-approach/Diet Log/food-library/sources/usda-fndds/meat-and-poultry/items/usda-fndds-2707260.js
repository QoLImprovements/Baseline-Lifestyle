/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
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
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat, tomatoes, and dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 1.52,
    "energy_kcal": 141.0,
    "fat_g": 9.68,
    "fibre_g": 0.2,
    "folate_ug": 47.0,
    "iron_mg": 1.48,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 173.0,
    "potassium_mg": 187.0,
    "protein_g": 12.1,
    "salt_g": 0.7975,
    "sat_fat_g": 3.11,
    "sodium_mg": 319.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 156.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 26.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707260",
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
