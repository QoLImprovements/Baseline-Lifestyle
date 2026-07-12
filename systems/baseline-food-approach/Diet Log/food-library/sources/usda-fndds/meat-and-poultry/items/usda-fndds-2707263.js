/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707263",
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
      "gramsPerUnit": 90.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat and vegetables other than dark-green and/or tomatoes, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.58,
    "energy_kcal": 139.0,
    "fat_g": 9.42,
    "fibre_g": 0.2,
    "folate_ug": 47.0,
    "iron_mg": 1.46,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 179.0,
    "potassium_mg": 185.0,
    "protein_g": 12.0,
    "salt_g": 0.71,
    "sat_fat_g": 3.02,
    "sodium_mg": 284.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 145.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707263",
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
