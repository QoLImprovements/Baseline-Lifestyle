/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-without-refuse",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168170",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "cup-without-refuse",
      "kind": "unit",
      "label": "cup, without refuse"
    }
  ],
  "name": "Roselle, raw",
  "nutritionPerBasis": {
    "calcium_mg": 215.0,
    "carbs_g": 11.3,
    "energy_kcal": 205.0,
    "fat_g": 0.64,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.48,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 208.0,
    "protein_g": 0.96,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168170",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
