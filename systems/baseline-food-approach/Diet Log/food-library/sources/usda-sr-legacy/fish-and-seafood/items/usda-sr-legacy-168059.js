/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Steelhead trout, dried, flesh (Shoshone Bannock)",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 0.0,
    "energy_kcal": 1600.0,
    "fat_g": 8.06,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.96,
    "magnesium_mg": 84.0,
    "omega3_g": 1.591,
    "phosphorus_mg": 976.0,
    "potassium_mg": 1720.0,
    "protein_g": 77.3,
    "salt_g": 7.125,
    "sat_fat_g": 0.829,
    "sodium_mg": 2850.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168059",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
