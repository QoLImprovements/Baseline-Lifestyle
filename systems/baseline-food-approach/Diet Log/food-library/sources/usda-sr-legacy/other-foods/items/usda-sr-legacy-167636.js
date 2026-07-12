/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "piece",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Tamales (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 18.1,
    "energy_kcal": 153.0,
    "fat_g": 6.12,
    "fibre_g": 3.1,
    "folate_ug": 15.0,
    "iron_mg": 1.22,
    "magnesium_mg": 22.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 99.0,
    "potassium_mg": 131.0,
    "protein_g": 6.28,
    "salt_g": 1.0675,
    "sat_fat_g": 2.4,
    "sodium_mg": 427.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167636",
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
