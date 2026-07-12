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
  "id": "usda-sr-legacy-167651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Buffalo, free range, top round steak, cooked (Shoshone Bannock)",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 612.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.76,
    "magnesium_mg": 27.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 246.0,
    "potassium_mg": 376.0,
    "protein_g": 32.5,
    "salt_g": 0.1025,
    "sat_fat_g": 0.595,
    "sodium_mg": 41.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167651",
  "state": "Cooked",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "cooked",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
