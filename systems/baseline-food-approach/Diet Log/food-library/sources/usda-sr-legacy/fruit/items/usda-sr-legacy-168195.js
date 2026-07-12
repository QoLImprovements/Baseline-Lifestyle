/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168195",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    }
  ],
  "name": "Clementines, raw",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 12.0,
    "energy_kcal": 47.0,
    "fat_g": 0.15,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 0.14,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 177.0,
    "protein_g": 0.85,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 9.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 48.8,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168195",
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
