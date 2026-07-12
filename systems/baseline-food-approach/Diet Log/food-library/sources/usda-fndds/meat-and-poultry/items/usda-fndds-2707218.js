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
  "id": "usda-fndds-2707218",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 140.0,
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
  "name": "Egg omelet or scrambled egg, with meat, made with cooking spray",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 1.21,
    "energy_kcal": 162.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 1.58,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 190.0,
    "potassium_mg": 161.0,
    "protein_g": 13.4,
    "salt_g": 0.8825,
    "sat_fat_g": 3.54,
    "sodium_mg": 353.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707218",
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
