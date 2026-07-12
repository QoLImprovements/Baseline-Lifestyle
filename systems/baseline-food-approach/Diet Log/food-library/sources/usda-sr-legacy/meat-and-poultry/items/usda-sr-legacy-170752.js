/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 268.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, grilled chicken, bacon and tomato club sandwich, with cheese, lettuce, and mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 19.9,
    "energy_kcal": 922.0,
    "fat_g": 8.05,
    "fibre_g": 1.2,
    "folate_ug": 31.0,
    "iron_mg": 1.37,
    "magnesium_mg": 32.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 215.0,
    "potassium_mg": 226.0,
    "protein_g": 17.2,
    "salt_g": 1.575,
    "sat_fat_g": 3.11,
    "sodium_mg": 630.0,
    "sugar_g": 4.68,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170752",
  "state": "Grilled",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
