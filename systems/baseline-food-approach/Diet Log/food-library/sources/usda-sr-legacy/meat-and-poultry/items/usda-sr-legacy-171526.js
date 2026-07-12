/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 358.0,
      "key": "wing",
      "kind": "unit",
      "label": "wing"
    }
  ],
  "name": "Turkey, wing, from whole bird, meat only, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.14,
    "energy_kcal": 425.0,
    "fat_g": 1.66,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.54,
    "magnesium_mg": 25.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 236.0,
    "potassium_mg": 242.0,
    "protein_g": 21.5,
    "salt_g": 0.515,
    "sat_fat_g": 0.536,
    "sodium_mg": 206.0,
    "sugar_g": 0.05,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171526",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
