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
  "id": "usda-fndds-2707295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
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
      "gramsPerUnit": 56.0,
      "key": "1-egg-white",
      "kind": "unit",
      "label": "1 egg white"
    }
  ],
  "name": "Egg white, omelet, scrambled, or fried, with meat and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.43,
    "energy_kcal": 104.0,
    "fat_g": 6.05,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 0.27,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 36.0,
    "potassium_mg": 203.0,
    "protein_g": 10.0,
    "salt_g": 0.8075,
    "sat_fat_g": 1.66,
    "sodium_mg": 323.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 50.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707295",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
