/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168997",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Raspberries, wild (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 13.8,
    "energy_kcal": 261.0,
    "fat_g": 0.28,
    "fibre_g": 7.5,
    "folate_ug": 5.0,
    "iron_mg": 0.64,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 175.0,
    "protein_g": 1.12,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 5.54,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 26.4,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168997",
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
