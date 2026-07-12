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
  "id": "usda-sr-legacy-167628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cornmeal, blue (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 76.9,
    "energy_kcal": 398.0,
    "fat_g": 5.44,
    "fibre_g": 8.7,
    "folate_ug": 58.0,
    "iron_mg": 2.91,
    "magnesium_mg": 133.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 354.0,
    "potassium_mg": 393.0,
    "protein_g": 10.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.886,
    "sodium_mg": 7.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167628",
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
