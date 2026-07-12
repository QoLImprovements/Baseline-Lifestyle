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
  "id": "usda-fndds-2707217",
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
      "gramsPerUnit": 75.0,
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
  "name": "Egg omelet or scrambled egg, with meat, made with animal fat or meat drippings",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 0.98,
    "energy_kcal": 196.0,
    "fat_g": 15.6,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.52,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 181.0,
    "potassium_mg": 154.0,
    "protein_g": 12.8,
    "salt_g": 0.925,
    "sat_fat_g": 5.37,
    "sodium_mg": 370.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707217",
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
