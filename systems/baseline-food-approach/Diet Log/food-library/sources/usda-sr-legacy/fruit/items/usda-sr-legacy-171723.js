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
  "id": "usda-sr-legacy-171723",
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
  "name": "Cranberries, dried, sweetened (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 82.8,
    "energy_kcal": 308.0,
    "fat_g": 1.09,
    "fibre_g": 5.3,
    "folate_ug": 0.0,
    "iron_mg": 0.39,
    "magnesium_mg": 4.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 8.0,
    "potassium_mg": 49.0,
    "protein_g": 0.17,
    "salt_g": 0.0125,
    "sat_fat_g": 0.088,
    "sodium_mg": 5.0,
    "sugar_g": 72.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171723",
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
