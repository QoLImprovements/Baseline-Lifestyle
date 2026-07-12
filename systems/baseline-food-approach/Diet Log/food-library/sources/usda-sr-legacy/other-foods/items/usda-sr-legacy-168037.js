/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn, white, steamed (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 75.2,
    "energy_kcal": 386.0,
    "fat_g": 5.18,
    "fibre_g": 16.6,
    "folate_ug": 100.0,
    "iron_mg": 2.29,
    "magnesium_mg": 123.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 312.0,
    "potassium_mg": 532.0,
    "protein_g": 9.72,
    "salt_g": 0.01,
    "sat_fat_g": 0.83,
    "sodium_mg": 4.0,
    "sugar_g": 6.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168037",
  "state": "Steamed",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
