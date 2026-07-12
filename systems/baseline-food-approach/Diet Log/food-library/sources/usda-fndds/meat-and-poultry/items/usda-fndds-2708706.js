/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708706",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Wonton, dumpling or pot sticker, fried, no meat",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 14.0,
    "energy_kcal": 192.0,
    "fat_g": 11.1,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.79,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 301.0,
    "protein_g": 8.76,
    "salt_g": 1.1675,
    "sat_fat_g": 2.53,
    "sodium_mg": 467.0,
    "sugar_g": 2.92,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 63.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708706",
  "state": "Fried",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
