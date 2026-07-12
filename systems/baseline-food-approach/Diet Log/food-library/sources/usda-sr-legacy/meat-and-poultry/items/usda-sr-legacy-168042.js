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
  "id": "usda-sr-legacy-168042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 308.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Stew, dumpling with mutton (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 8.03,
    "energy_kcal": 422.0,
    "fat_g": 3.78,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 1.79,
    "magnesium_mg": 8.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 63.0,
    "potassium_mg": 82.0,
    "protein_g": 8.71,
    "salt_g": 0.115,
    "sat_fat_g": 1.71,
    "sodium_mg": 46.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168042",
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
