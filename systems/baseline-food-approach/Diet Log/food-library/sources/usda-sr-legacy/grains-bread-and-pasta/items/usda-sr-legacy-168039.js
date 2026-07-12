/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornmeal, yellow (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 72.9,
    "energy_kcal": 384.0,
    "fat_g": 5.88,
    "fibre_g": 9.4,
    "folate_ug": 34.0,
    "iron_mg": 2.99,
    "magnesium_mg": 107.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 225.0,
    "potassium_mg": 322.0,
    "protein_g": 9.85,
    "salt_g": 0.01,
    "sat_fat_g": 1.04,
    "sodium_mg": 4.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168039",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
