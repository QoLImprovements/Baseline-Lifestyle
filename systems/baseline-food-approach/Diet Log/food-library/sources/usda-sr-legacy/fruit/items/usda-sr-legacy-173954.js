/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-without-pits",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-without-pits",
      "kind": "unit",
      "label": "cup, without pits"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "cup-with-pits-yields",
      "kind": "unit",
      "label": "cup, with pits, yields"
    }
  ],
  "name": "Cherries, sour, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 12.2,
    "energy_kcal": 209.0,
    "fat_g": 0.3,
    "fibre_g": 1.6,
    "folate_ug": 8.0,
    "iron_mg": 0.32,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 173.0,
    "protein_g": 1.0,
    "salt_g": 0.0075,
    "sat_fat_g": 0.068,
    "sodium_mg": 3.0,
    "sugar_g": 8.49,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173954",
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
