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
  "id": "usda-sr-legacy-171702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Apricots, dehydrated (low-moisture), sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 82.9,
    "energy_kcal": 1340.0,
    "fat_g": 0.62,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 6.31,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 157.0,
    "potassium_mg": 1850.0,
    "protein_g": 4.9,
    "salt_g": 0.0325,
    "sat_fat_g": 0.043,
    "sodium_mg": 13.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 633.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171702",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
