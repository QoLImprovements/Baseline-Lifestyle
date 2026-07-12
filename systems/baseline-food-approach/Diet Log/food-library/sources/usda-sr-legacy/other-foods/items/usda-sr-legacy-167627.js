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
  "id": "usda-sr-legacy-167627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mush, blue corn with ash (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 11.7,
    "energy_kcal": 226.0,
    "fat_g": 0.49,
    "fibre_g": 1.1,
    "folate_ug": 4.0,
    "iron_mg": 2.92,
    "magnesium_mg": 20.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 39.0,
    "potassium_mg": 58.0,
    "protein_g": 0.66,
    "salt_g": 0.02,
    "sat_fat_g": 0.074,
    "sodium_mg": 8.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167627",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
