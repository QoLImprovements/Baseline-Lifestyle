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
  "id": "usda-sr-legacy-168043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Stew, hominy with mutton (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 9.38,
    "energy_kcal": 83.0,
    "fat_g": 2.06,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 0.81,
    "magnesium_mg": 20.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 82.0,
    "potassium_mg": 118.0,
    "protein_g": 6.71,
    "salt_g": 0.1125,
    "sat_fat_g": 0.733,
    "sodium_mg": 45.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168043",
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
