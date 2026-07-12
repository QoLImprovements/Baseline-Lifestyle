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
  "id": "usda-sr-legacy-168998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rose Hips, wild (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 169.0,
    "carbs_g": 38.2,
    "energy_kcal": 162.0,
    "fat_g": 0.34,
    "fibre_g": 24.1,
    "folate_ug": 3.0,
    "iron_mg": 1.06,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 429.0,
    "protein_g": 1.6,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 2.58,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 426.0,
    "vitamin_e_mg": 5.84,
    "vitamin_k_ug": 25.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168998",
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
