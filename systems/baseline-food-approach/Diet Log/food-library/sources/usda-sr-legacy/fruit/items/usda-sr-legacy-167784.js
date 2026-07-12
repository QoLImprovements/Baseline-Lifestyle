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
  "id": "usda-sr-legacy-167784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Guava nectar, canned, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 16.2,
    "energy_kcal": 63.0,
    "fat_g": 0.06,
    "fibre_g": 1.0,
    "folate_ug": 3.0,
    "iron_mg": 0.38,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 39.0,
    "protein_g": 0.09,
    "salt_g": 0.015,
    "sat_fat_g": 0.02,
    "sodium_mg": 6.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 21.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167784",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
