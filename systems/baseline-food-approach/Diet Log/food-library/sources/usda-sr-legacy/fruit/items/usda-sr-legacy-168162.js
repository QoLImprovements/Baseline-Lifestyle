/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    },
    {
      "gramsPerUnit": 9.5,
      "key": "prune-pitted",
      "kind": "unit",
      "label": "prune, pitted"
    }
  ],
  "name": "Plums, dried (prunes), uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 63.9,
    "energy_kcal": 240.0,
    "fat_g": 0.38,
    "fibre_g": 7.1,
    "folate_ug": 4.0,
    "iron_mg": 0.93,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 732.0,
    "protein_g": 2.18,
    "salt_g": 0.005,
    "sat_fat_g": 0.088,
    "sodium_mg": 2.0,
    "sugar_g": 38.1,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 59.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168162",
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
