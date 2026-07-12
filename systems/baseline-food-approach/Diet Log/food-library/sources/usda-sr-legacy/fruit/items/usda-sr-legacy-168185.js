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
  "id": "usda-sr-legacy-168185",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peach nectar, canned, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.9,
    "energy_kcal": 50.0,
    "fat_g": 0.51,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.07,
    "magnesium_mg": 5.0,
    "omega3_g": 0.057,
    "phosphorus_mg": 5.0,
    "potassium_mg": 50.0,
    "protein_g": 0.21,
    "salt_g": 0.02,
    "sat_fat_g": 0.224,
    "sodium_mg": 8.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 30.2,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168185",
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
