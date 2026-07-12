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
  "id": "usda-sr-legacy-168054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, salmon, chum, dried (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 0.0,
    "energy_kcal": 378.0,
    "fat_g": 14.4,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 2.2,
    "magnesium_mg": 68.0,
    "omega3_g": 1.775,
    "phosphorus_mg": 650.0,
    "potassium_mg": 910.0,
    "protein_g": 62.1,
    "salt_g": 0.475,
    "sat_fat_g": 2.4,
    "sodium_mg": 190.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168054",
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
