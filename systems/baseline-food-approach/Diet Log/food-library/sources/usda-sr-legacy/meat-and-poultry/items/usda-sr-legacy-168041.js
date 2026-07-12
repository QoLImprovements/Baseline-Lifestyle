/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 197.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Tortilla, includes plain and from mutton sandwich (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 49.9,
    "energy_kcal": 237.0,
    "fat_g": 0.95,
    "fibre_g": 2.4,
    "folate_ug": 98.0,
    "iron_mg": 3.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 146.0,
    "potassium_mg": 105.0,
    "protein_g": 7.28,
    "salt_g": 1.205,
    "sat_fat_g": 0.296,
    "sodium_mg": 482.0,
    "sugar_g": 2.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168041",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
