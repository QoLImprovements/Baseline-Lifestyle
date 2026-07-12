/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "grape",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174682",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "grape",
      "kind": "unit",
      "label": "grape"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Grapes, american type (slip skin), raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.2,
    "energy_kcal": 67.0,
    "fat_g": 0.35,
    "fibre_g": 0.9,
    "folate_ug": 4.0,
    "iron_mg": 0.29,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 191.0,
    "protein_g": 0.63,
    "salt_g": 0.005,
    "sat_fat_g": 0.114,
    "sodium_mg": 2.0,
    "sugar_g": 16.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174682",
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
