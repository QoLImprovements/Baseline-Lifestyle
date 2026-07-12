/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-25-fruit-small",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "0-25-fruit-small",
      "kind": "unit",
      "label": "0.25 fruit, small"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Breadfruit, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 27.1,
    "energy_kcal": 431.0,
    "fat_g": 0.23,
    "fibre_g": 4.9,
    "folate_ug": 14.0,
    "iron_mg": 0.54,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 490.0,
    "protein_g": 1.07,
    "salt_g": 0.005,
    "sat_fat_g": 0.048,
    "sodium_mg": 2.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 29.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171714",
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
