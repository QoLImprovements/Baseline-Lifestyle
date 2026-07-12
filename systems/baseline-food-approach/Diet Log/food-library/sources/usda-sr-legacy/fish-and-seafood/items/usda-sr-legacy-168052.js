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
  "id": "usda-sr-legacy-168052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, whitefish, dried (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 810.0,
    "carbs_g": 0.0,
    "energy_kcal": 371.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 4.1,
    "magnesium_mg": 85.0,
    "omega3_g": 1.25,
    "phosphorus_mg": 1040.0,
    "potassium_mg": 1080.0,
    "protein_g": 62.4,
    "salt_g": 0.5,
    "sat_fat_g": 2.85,
    "sodium_mg": 200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168052",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
