/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "10-grapes",
      "kind": "unit",
      "label": "10 grapes"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Grapes, red or green (European type, such as Thompson seedless), raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 18.1,
    "energy_kcal": 69.0,
    "fat_g": 0.16,
    "fibre_g": 0.9,
    "folate_ug": 2.0,
    "iron_mg": 0.36,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 191.0,
    "protein_g": 0.72,
    "salt_g": 0.005,
    "sat_fat_g": 0.054,
    "sodium_mg": 2.0,
    "sugar_g": 15.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174683",
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
