/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, kneel down (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 39.5,
    "energy_kcal": 816.0,
    "fat_g": 2.21,
    "fibre_g": 0.0,
    "folate_ug": 98.0,
    "iron_mg": 1.11,
    "magnesium_mg": 55.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 164.0,
    "potassium_mg": 320.0,
    "protein_g": 4.29,
    "salt_g": 0.315,
    "sat_fat_g": 0.353,
    "sodium_mg": 126.0,
    "sugar_g": 3.74,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167633",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
