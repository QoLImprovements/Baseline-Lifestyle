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
  "id": "usda-sr-legacy-168047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, salmon, king (chinook), raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 0.0,
    "energy_kcal": 187.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.79,
    "magnesium_mg": 24.0,
    "omega3_g": 1.27,
    "phosphorus_mg": 208.0,
    "potassium_mg": 370.0,
    "protein_g": 20.2,
    "salt_g": 0.12,
    "sat_fat_g": 1.87,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 136.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168047",
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
