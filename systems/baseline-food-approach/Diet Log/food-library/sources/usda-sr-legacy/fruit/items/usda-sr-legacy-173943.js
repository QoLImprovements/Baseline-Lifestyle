/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Apricots, dried, sulfured, stewed, with added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 29.3,
    "energy_kcal": 473.0,
    "fat_g": 0.15,
    "fibre_g": 4.1,
    "folate_ug": 0.0,
    "iron_mg": 1.52,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 443.0,
    "protein_g": 1.17,
    "salt_g": 0.0075,
    "sat_fat_g": 0.01,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173943",
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
