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
  "id": "usda-sr-legacy-169804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cranberries, wild, bush, raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 12.3,
    "energy_kcal": 55.0,
    "fat_g": 0.2,
    "fibre_g": 6.7,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 140.0,
    "protein_g": 1.1,
    "salt_g": 0.065,
    "sat_fat_g": 0.0,
    "sodium_mg": 26.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1060.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169804",
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
