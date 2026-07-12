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
  "id": "usda-sr-legacy-167785",
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
  "name": "Mango nectar, canned",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.1,
    "energy_kcal": 51.0,
    "fat_g": 0.06,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.36,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 24.0,
    "protein_g": 0.11,
    "salt_g": 0.0125,
    "sat_fat_g": 0.014,
    "sodium_mg": 5.0,
    "sugar_g": 12.4,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 15.2,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167785",
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
