/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-refuse",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168163",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    }
  ],
  "name": "Quinces, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 15.3,
    "energy_kcal": 238.0,
    "fat_g": 0.1,
    "fibre_g": 1.9,
    "folate_ug": 3.0,
    "iron_mg": 0.7,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 197.0,
    "protein_g": 0.4,
    "salt_g": 0.01,
    "sat_fat_g": 0.01,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168163",
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
