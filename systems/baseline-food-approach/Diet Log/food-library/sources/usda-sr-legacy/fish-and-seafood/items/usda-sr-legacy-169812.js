/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, halibut, cooked, with skin (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 473.0,
    "fat_g": 2.73,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.36,
    "magnesium_mg": 29.0,
    "omega3_g": 0.667,
    "phosphorus_mg": 275.0,
    "potassium_mg": 501.0,
    "protein_g": 22.1,
    "salt_g": 0.215,
    "sat_fat_g": 0.498,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169812",
  "state": "Cooked",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "cooked",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
