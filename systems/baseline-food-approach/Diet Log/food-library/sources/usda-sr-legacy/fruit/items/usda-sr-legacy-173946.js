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
  "id": "usda-sr-legacy-173946",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Blackberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 9.61,
    "energy_kcal": 43.0,
    "fat_g": 0.49,
    "fibre_g": 5.3,
    "folate_ug": 25.0,
    "iron_mg": 0.62,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 162.0,
    "protein_g": 1.39,
    "salt_g": 0.0025,
    "sat_fat_g": 0.014,
    "sodium_mg": 1.0,
    "sugar_g": 4.88,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 19.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173946",
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
