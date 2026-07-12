/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171129",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 424.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    }
  ],
  "name": "Turkey, thigh, from whole bird, meat only, with added solution, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.15,
    "energy_kcal": 480.0,
    "fat_g": 4.12,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.9,
    "magnesium_mg": 21.0,
    "omega3_g": 0.055,
    "phosphorus_mg": 191.0,
    "potassium_mg": 226.0,
    "protein_g": 19.3,
    "salt_g": 0.4175,
    "sat_fat_g": 1.12,
    "sodium_mg": 167.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171129",
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
