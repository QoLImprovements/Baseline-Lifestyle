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
  "id": "usda-fndds-2707261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
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
      "gramsPerUnit": 95.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat, tomatoes, and dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 1.46,
    "energy_kcal": 174.0,
    "fat_g": 13.6,
    "fibre_g": 0.2,
    "folate_ug": 44.0,
    "iron_mg": 1.41,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 165.0,
    "potassium_mg": 178.0,
    "protein_g": 11.5,
    "salt_g": 0.795,
    "sat_fat_g": 4.11,
    "sodium_mg": 318.0,
    "sugar_g": 0.52,
    "vitamin_a_ug": 168.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 28.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707261",
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
