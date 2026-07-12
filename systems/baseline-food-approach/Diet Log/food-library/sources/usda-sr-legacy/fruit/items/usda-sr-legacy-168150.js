/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "3-fruit",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "3-fruit",
      "kind": "unit",
      "label": "3 fruit"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Java-plum, (jambolan), raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 15.6,
    "energy_kcal": 251.0,
    "fat_g": 0.23,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.19,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 79.0,
    "protein_g": 0.72,
    "salt_g": 0.035,
    "sat_fat_g": 0.0,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168150",
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
