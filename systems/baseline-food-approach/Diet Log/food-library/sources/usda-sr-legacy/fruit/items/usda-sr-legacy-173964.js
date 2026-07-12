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
  "id": "usda-sr-legacy-173964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Currants, red and white, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 13.8,
    "energy_kcal": 234.0,
    "fat_g": 0.2,
    "fibre_g": 4.3,
    "folate_ug": 8.0,
    "iron_mg": 1.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 275.0,
    "protein_g": 1.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.017,
    "sodium_mg": 1.0,
    "sugar_g": 7.37,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 41.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 11.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173964",
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
