/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-peel",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "fruit-without-peel",
      "kind": "unit",
      "label": "fruit without peel"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup-pureed",
      "kind": "unit",
      "label": "cup, pureed"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "cup-1-2-chunks",
      "kind": "unit",
      "label": "cup 1/2\" chunks"
    }
  ],
  "name": "Feijoa, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 15.2,
    "energy_kcal": 254.0,
    "fat_g": 0.42,
    "fibre_g": 6.4,
    "folate_ug": 23.0,
    "iron_mg": 0.14,
    "magnesium_mg": 9.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 19.0,
    "potassium_mg": 172.0,
    "protein_g": 0.71,
    "salt_g": 0.0075,
    "sat_fat_g": 0.104,
    "sodium_mg": 3.0,
    "sugar_g": 8.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 32.9,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168176",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
