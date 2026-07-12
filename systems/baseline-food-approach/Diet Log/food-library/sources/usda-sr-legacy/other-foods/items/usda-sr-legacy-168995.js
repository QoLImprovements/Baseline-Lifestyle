/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "leaf",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.9,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Lambsquarters, raw (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 366.0,
    "carbs_g": 6.96,
    "energy_kcal": 197.0,
    "fat_g": 0.28,
    "fibre_g": 6.3,
    "folate_ug": 48.0,
    "iron_mg": 1.16,
    "magnesium_mg": 163.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 1270.0,
    "protein_g": 4.21,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 347.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168995",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
