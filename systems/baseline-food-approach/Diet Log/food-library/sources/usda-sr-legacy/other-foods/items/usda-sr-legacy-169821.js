/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pinon Nuts, roasted (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 51.1,
    "energy_kcal": 541.0,
    "fat_g": 34.1,
    "fibre_g": 43.4,
    "folate_ug": 7.0,
    "iron_mg": 3.53,
    "magnesium_mg": 152.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 345.0,
    "potassium_mg": 458.0,
    "protein_g": 7.41,
    "salt_g": 0.775,
    "sat_fat_g": 3.21,
    "sodium_mg": 310.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 11.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169821",
  "state": "Roasted",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
