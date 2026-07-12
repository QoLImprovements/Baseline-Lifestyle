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
  "id": "usda-sr-legacy-169820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Plums, wild (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 22.0,
    "energy_kcal": 381.0,
    "fat_g": 0.17,
    "fibre_g": 6.0,
    "folate_ug": 1.0,
    "iron_mg": 0.17,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 364.0,
    "protein_g": 0.43,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 10.3,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169820",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
