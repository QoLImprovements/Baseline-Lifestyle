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
  "id": "usda-sr-legacy-167640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blueberries, wild, raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.3,
    "energy_kcal": 255.0,
    "fat_g": 0.76,
    "fibre_g": 2.6,
    "folate_ug": 33.0,
    "iron_mg": 0.37,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 75.0,
    "protein_g": 1.22,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 6.46,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 18.3,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167640",
  "state": "Raw",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
