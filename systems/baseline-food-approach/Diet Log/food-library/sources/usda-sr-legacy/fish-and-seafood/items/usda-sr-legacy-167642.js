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
  "id": "usda-sr-legacy-167642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, salmon, red, canned, bones removed (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 5.76,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.9,
    "magnesium_mg": 32.0,
    "omega3_g": 1.19,
    "phosphorus_mg": 260.0,
    "potassium_mg": 370.0,
    "protein_g": 27.3,
    "salt_g": 0.975,
    "sat_fat_g": 0.92,
    "sodium_mg": 390.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167642",
  "state": "Canned",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "canned",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
