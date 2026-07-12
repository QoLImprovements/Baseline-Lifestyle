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
  "id": "usda-sr-legacy-171691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 6.4,
      "key": "ring",
      "kind": "unit",
      "label": "ring"
    }
  ],
  "name": "Apples, dried, sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 65.9,
    "energy_kcal": 1020.0,
    "fat_g": 0.32,
    "fibre_g": 8.7,
    "folate_ug": 0.0,
    "iron_mg": 1.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 450.0,
    "protein_g": 0.93,
    "salt_g": 0.2175,
    "sat_fat_g": 0.052,
    "sodium_mg": 87.0,
    "sugar_g": 57.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171691",
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
