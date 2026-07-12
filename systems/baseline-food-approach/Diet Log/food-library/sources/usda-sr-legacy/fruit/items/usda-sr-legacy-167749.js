/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "tsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Lemon peel, raw",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 16.0,
    "energy_kcal": 197.0,
    "fat_g": 0.3,
    "fibre_g": 10.6,
    "folate_ug": 13.0,
    "iron_mg": 0.8,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 160.0,
    "protein_g": 1.5,
    "salt_g": 0.015,
    "sat_fat_g": 0.039,
    "sodium_mg": 6.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 129.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167749",
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
