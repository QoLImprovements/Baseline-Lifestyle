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
  "id": "usda-sr-legacy-169087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    }
  ],
  "name": "Litchis, dried",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 70.7,
    "energy_kcal": 277.0,
    "fat_g": 1.2,
    "fibre_g": 4.6,
    "folate_ug": 12.0,
    "iron_mg": 1.7,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 1110.0,
    "protein_g": 3.8,
    "salt_g": 0.0075,
    "sat_fat_g": 0.27,
    "sodium_mg": 3.0,
    "sugar_g": 66.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 183.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169087",
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
