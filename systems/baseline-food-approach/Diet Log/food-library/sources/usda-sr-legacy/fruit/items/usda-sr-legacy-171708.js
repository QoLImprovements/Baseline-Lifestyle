/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-25-cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Cherries, tart, dried, sweetened (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 80.4,
    "energy_kcal": 333.0,
    "fat_g": 0.73,
    "fibre_g": 2.5,
    "folate_ug": 11.0,
    "iron_mg": 0.68,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 376.0,
    "protein_g": 1.25,
    "salt_g": 0.0325,
    "sat_fat_g": 0.146,
    "sodium_mg": 13.0,
    "sugar_g": 67.2,
    "vitamin_a_ug": 141.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171708",
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
