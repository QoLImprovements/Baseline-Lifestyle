/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-skin-and-seeds",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "fruit-without-skin-and-seeds",
      "kind": "unit",
      "label": "fruit without skin and seeds"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Carissa, (natal-plum), raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 13.6,
    "energy_kcal": 259.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.31,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 260.0,
    "protein_g": 0.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173952",
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
