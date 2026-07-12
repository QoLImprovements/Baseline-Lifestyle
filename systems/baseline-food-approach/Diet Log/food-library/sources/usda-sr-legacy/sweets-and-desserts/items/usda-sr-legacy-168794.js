/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-0-35-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "package-0-35-oz",
      "kind": "unit",
      "label": "package (0.35 oz)"
    }
  ],
  "name": "Desserts, rennin, tablets, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 3730.0,
    "carbs_g": 19.8,
    "energy_kcal": 351.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.07,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 340.0,
    "potassium_mg": 292.0,
    "protein_g": 1.0,
    "salt_g": 65.0,
    "sat_fat_g": 0.041,
    "sodium_mg": 26000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168794",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
