/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz-1-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz-1-serving",
      "kind": "unit",
      "label": "2 oz (1 serving)"
    }
  ],
  "name": "Luncheon meat, pork and chicken, minced, canned, includes Spam Lite",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 1.35,
    "energy_kcal": 819.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 461.0,
    "protein_g": 15.2,
    "salt_g": 2.575,
    "sat_fat_g": 4.51,
    "sodium_mg": 1030.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 38.5,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174594",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
