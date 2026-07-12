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
  "id": "usda-sr-legacy-168044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 303.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Stew, mutton, corn, squash (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 7.27,
    "energy_kcal": 103.0,
    "fat_g": 4.34,
    "fibre_g": 1.7,
    "folate_ug": 18.0,
    "iron_mg": 1.21,
    "magnesium_mg": 21.0,
    "omega3_g": 0.054,
    "phosphorus_mg": 111.0,
    "potassium_mg": 199.0,
    "protein_g": 8.62,
    "salt_g": 0.1225,
    "sat_fat_g": 1.74,
    "sodium_mg": 49.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168044",
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
