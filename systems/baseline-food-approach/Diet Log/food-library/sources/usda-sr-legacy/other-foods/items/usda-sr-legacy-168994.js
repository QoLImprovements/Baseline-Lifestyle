/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "shoot",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168994",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "shoot",
      "kind": "unit",
      "label": "shoot"
    }
  ],
  "name": "Cattail, Narrow Leaf Shoots (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 5.14,
    "energy_kcal": 25.0,
    "fat_g": 0.0,
    "fibre_g": 4.5,
    "folate_ug": 3.0,
    "iron_mg": 0.91,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 309.0,
    "protein_g": 1.18,
    "salt_g": 0.2725,
    "sat_fat_g": 0.0,
    "sodium_mg": 109.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 22.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168994",
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
