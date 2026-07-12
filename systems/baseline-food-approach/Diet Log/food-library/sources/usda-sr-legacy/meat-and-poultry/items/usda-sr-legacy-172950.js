/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz-1-nlea-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172950",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz-1-nlea-serving",
      "kind": "unit",
      "label": "2 oz 1 NLEA serving"
    }
  ],
  "name": "Luncheon meat, pork, ham, and chicken, minced, canned, reduced sodium, added ascorbic acid, includes SPAM, 25% less sodium",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 3.4,
    "energy_kcal": 1230.0,
    "fat_g": 25.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.64,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 564.0,
    "protein_g": 12.5,
    "salt_g": 2.6,
    "sat_fat_g": 8.87,
    "sodium_mg": 1040.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 43.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172950",
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
