/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Frybread, made with lard (Apache)",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 46.0,
    "energy_kcal": 309.0,
    "fat_g": 10.1,
    "fibre_g": 1.7,
    "folate_ug": 112.0,
    "iron_mg": 3.43,
    "magnesium_mg": 19.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 112.0,
    "potassium_mg": 75.0,
    "protein_g": 8.38,
    "salt_g": 1.6775,
    "sat_fat_g": 3.63,
    "sodium_mg": 671.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167655",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
