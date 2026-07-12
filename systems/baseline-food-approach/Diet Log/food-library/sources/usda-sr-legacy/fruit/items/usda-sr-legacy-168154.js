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
  "id": "usda-sr-legacy-168154",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    }
  ],
  "name": "Kumquats, raw",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 15.9,
    "energy_kcal": 71.0,
    "fat_g": 0.86,
    "fibre_g": 6.5,
    "folate_ug": 17.0,
    "iron_mg": 0.86,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 186.0,
    "protein_g": 1.88,
    "salt_g": 0.025,
    "sat_fat_g": 0.103,
    "sodium_mg": 10.0,
    "sugar_g": 9.36,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 43.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168154",
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
