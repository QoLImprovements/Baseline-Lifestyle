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
  "id": "usda-sr-legacy-167645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, salmon, red, (sockeye), canned, smoked (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 0.0,
    "energy_kcal": 862.0,
    "fat_g": 7.26,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.5,
    "magnesium_mg": 39.0,
    "omega3_g": 1.74,
    "phosphorus_mg": 350.0,
    "potassium_mg": 470.0,
    "protein_g": 35.2,
    "salt_g": 1.5,
    "sat_fat_g": 1.48,
    "sodium_mg": 600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167645",
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
