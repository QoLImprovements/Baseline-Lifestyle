/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Sausage, pork, turkey, and beef, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.11,
    "energy_kcal": 284.0,
    "fat_g": 26.8,
    "fibre_g": 0.1,
    "folate_ug": 16.0,
    "iron_mg": 1.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 147.0,
    "potassium_mg": 240.0,
    "protein_g": 10.7,
    "salt_g": 1.6975,
    "sat_fat_g": 10.7,
    "sodium_mg": 679.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173883",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
