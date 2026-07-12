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
  "id": "usda-fndds-2707258",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
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
    }
  ],
  "name": "Egg omelet or scrambled egg, with meat and dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 1.37,
    "energy_kcal": 173.0,
    "fat_g": 13.6,
    "fibre_g": 0.2,
    "folate_ug": 50.0,
    "iron_mg": 1.47,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 164.0,
    "potassium_mg": 179.0,
    "protein_g": 11.3,
    "salt_g": 0.7375,
    "sat_fat_g": 4.08,
    "sodium_mg": 295.0,
    "sugar_g": 0.36,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 51.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707258",
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
