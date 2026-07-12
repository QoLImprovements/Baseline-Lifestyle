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
  "id": "usda-sr-legacy-167638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, halibut, raw, with skin (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.81,
    "energy_kcal": 116.0,
    "fat_g": 2.92,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.27,
    "magnesium_mg": 26.0,
    "omega3_g": 0.681,
    "phosphorus_mg": 244.0,
    "potassium_mg": 449.0,
    "protein_g": 20.5,
    "salt_g": 0.1975,
    "sat_fat_g": 0.726,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167638",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
