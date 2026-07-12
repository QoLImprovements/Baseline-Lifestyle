/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chokecherries, raw, pitted (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 33.6,
    "energy_kcal": 677.0,
    "fat_g": 1.69,
    "fibre_g": 20.0,
    "folate_ug": 2.0,
    "iron_mg": 0.69,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 379.0,
    "protein_g": 3.04,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 9.37,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 21.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168999",
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
