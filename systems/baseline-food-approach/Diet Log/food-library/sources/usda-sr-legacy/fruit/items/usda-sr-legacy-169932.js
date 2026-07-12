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
  "id": "usda-sr-legacy-169932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peaches, dehydrated (low-moisture), sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 83.2,
    "energy_kcal": 1360.0,
    "fat_g": 1.03,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 5.51,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 1350.0,
    "protein_g": 4.89,
    "salt_g": 0.025,
    "sat_fat_g": 0.111,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 10.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169932",
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
