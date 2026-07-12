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
  "id": "usda-fndds-2707225",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
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
      "gramsPerUnit": 85.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese and meat, made with animal fat or meat drippings",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 1.42,
    "energy_kcal": 212.0,
    "fat_g": 17.0,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 1.41,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 224.0,
    "potassium_mg": 146.0,
    "protein_g": 13.4,
    "salt_g": 1.0375,
    "sat_fat_g": 6.59,
    "sodium_mg": 415.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 168.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707225",
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
