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
  "id": "usda-fndds-2707257",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
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
      "gramsPerUnit": 90.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat and dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 1.44,
    "energy_kcal": 138.0,
    "fat_g": 9.44,
    "fibre_g": 0.2,
    "folate_ug": 52.0,
    "iron_mg": 1.54,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 172.0,
    "potassium_mg": 189.0,
    "protein_g": 11.9,
    "salt_g": 0.7375,
    "sat_fat_g": 3.03,
    "sodium_mg": 295.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 49.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707257",
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
