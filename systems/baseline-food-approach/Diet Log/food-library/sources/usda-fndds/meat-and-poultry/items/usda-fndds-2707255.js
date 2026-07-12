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
  "id": "usda-fndds-2707255",
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
  "name": "Egg omelet or scrambled egg, with meat and tomatoes, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 1.48,
    "energy_kcal": 172.0,
    "fat_g": 13.5,
    "fibre_g": 0.2,
    "folate_ug": 42.0,
    "iron_mg": 1.39,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 161.0,
    "potassium_mg": 160.0,
    "protein_g": 11.1,
    "salt_g": 0.7125,
    "sat_fat_g": 4.08,
    "sodium_mg": 285.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 163.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707255",
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
