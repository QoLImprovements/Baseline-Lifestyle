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
  "id": "usda-sr-legacy-168211",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "fruit",
      "kind": "unit",
      "label": "fruit"
    }
  ],
  "name": "Kiwifruit, ZESPRI SunGold, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 15.8,
    "energy_kcal": 262.0,
    "fat_g": 0.28,
    "fibre_g": 1.4,
    "folate_ug": 31.0,
    "iron_mg": 0.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 25.0,
    "potassium_mg": 315.0,
    "protein_g": 1.02,
    "salt_g": 0.0075,
    "sat_fat_g": 0.065,
    "sodium_mg": 3.0,
    "sugar_g": 12.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 161.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168211",
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
