/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squash, Indian, raw (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.64,
    "energy_kcal": 111.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.17,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 205.0,
    "protein_g": 0.52,
    "salt_g": 0.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 20.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168040",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
