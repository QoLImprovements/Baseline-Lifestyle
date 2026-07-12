/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-5-cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Rowal, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 23.9,
    "energy_kcal": 462.0,
    "fat_g": 2.0,
    "fibre_g": 6.2,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 131.0,
    "protein_g": 2.3,
    "salt_g": 0.01,
    "sat_fat_g": 0.245,
    "sodium_mg": 4.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 25.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167783",
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
