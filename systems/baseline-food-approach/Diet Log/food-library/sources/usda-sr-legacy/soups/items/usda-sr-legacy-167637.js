/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stew, steamed corn (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 10.8,
    "energy_kcal": 470.0,
    "fat_g": 3.75,
    "fibre_g": 2.3,
    "folate_ug": 9.0,
    "iron_mg": 1.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 107.0,
    "potassium_mg": 177.0,
    "protein_g": 8.82,
    "salt_g": 0.26,
    "sat_fat_g": 1.6,
    "sodium_mg": 104.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167637",
  "state": "Steamed",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "soups",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
