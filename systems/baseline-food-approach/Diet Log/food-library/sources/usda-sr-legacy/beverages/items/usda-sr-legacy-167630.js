/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilchen (Red Berry Beverage) (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 8.68,
    "energy_kcal": 44.0,
    "fat_g": 0.63,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.95,
    "magnesium_mg": 9.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 23.0,
    "potassium_mg": 28.0,
    "protein_g": 0.81,
    "salt_g": 0.0375,
    "sat_fat_g": 0.075,
    "sodium_mg": 15.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167630",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
