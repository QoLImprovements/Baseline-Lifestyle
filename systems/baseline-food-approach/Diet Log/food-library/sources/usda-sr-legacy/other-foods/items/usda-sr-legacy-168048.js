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
  "id": "usda-sr-legacy-168048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmonberries, raw (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 10.0,
    "energy_kcal": 195.0,
    "fat_g": 0.33,
    "fibre_g": 1.9,
    "folate_ug": 17.0,
    "iron_mg": 0.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 110.0,
    "protein_g": 0.85,
    "salt_g": 0.035,
    "sat_fat_g": 0.0,
    "sodium_mg": 14.0,
    "sugar_g": 3.66,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 1.61,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168048",
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
