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
  "id": "usda-sr-legacy-168060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Steelhead trout, boiled, canned (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 0.0,
    "energy_kcal": 159.0,
    "fat_g": 8.26,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.64,
    "magnesium_mg": 25.0,
    "omega3_g": 1.097,
    "phosphorus_mg": 249.0,
    "potassium_mg": 365.0,
    "protein_g": 21.1,
    "salt_g": 0.295,
    "sat_fat_g": 1.53,
    "sodium_mg": 118.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168060",
  "state": "Boiled",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "boiled",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
