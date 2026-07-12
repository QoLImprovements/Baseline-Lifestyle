/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "10-fruit",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "10-fruit",
      "kind": "unit",
      "label": "10 fruit"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mulberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 9.8,
    "energy_kcal": 180.0,
    "fat_g": 0.39,
    "fibre_g": 1.7,
    "folate_ug": 6.0,
    "iron_mg": 1.85,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 194.0,
    "protein_g": 1.44,
    "salt_g": 0.025,
    "sat_fat_g": 0.027,
    "sodium_mg": 10.0,
    "sugar_g": 8.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 36.4,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169913",
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
