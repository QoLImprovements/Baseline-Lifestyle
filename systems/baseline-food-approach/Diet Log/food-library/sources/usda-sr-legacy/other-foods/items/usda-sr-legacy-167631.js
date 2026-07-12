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
  "id": "usda-sr-legacy-167631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn, dried (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 74.9,
    "energy_kcal": 1620.0,
    "fat_g": 5.22,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 1.92,
    "magnesium_mg": 124.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 337.0,
    "potassium_mg": 511.0,
    "protein_g": 9.88,
    "salt_g": 0.0325,
    "sat_fat_g": 0.82,
    "sodium_mg": 13.0,
    "sugar_g": 5.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167631",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
