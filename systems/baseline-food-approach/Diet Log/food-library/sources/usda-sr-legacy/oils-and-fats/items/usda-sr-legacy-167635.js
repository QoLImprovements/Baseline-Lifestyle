/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "piece",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Frybread, made with lard (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 48.3,
    "energy_kcal": 1380.0,
    "fat_g": 12.2,
    "fibre_g": 0.0,
    "folate_ug": 122.0,
    "iron_mg": 4.04,
    "magnesium_mg": 18.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 123.0,
    "potassium_mg": 77.0,
    "protein_g": 6.69,
    "salt_g": 0.8225,
    "sat_fat_g": 4.62,
    "sodium_mg": 329.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167635",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
