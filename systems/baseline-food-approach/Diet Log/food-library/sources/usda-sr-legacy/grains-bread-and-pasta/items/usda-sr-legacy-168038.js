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
  "id": "usda-sr-legacy-168038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornmeal, white (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 77.1,
    "energy_kcal": 1660.0,
    "fat_g": 5.04,
    "fibre_g": 10.4,
    "folate_ug": 32.0,
    "iron_mg": 3.79,
    "magnesium_mg": 125.0,
    "omega3_g": 0.054,
    "phosphorus_mg": 280.0,
    "potassium_mg": 443.0,
    "protein_g": 11.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.853,
    "sodium_mg": 4.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168038",
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
