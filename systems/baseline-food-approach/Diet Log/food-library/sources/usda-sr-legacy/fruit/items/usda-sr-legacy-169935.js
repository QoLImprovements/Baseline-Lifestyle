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
  "id": "usda-sr-legacy-169935",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peaches, dried, sulfured, stewed, without added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 19.7,
    "energy_kcal": 322.0,
    "fat_g": 0.25,
    "fibre_g": 2.7,
    "folate_ug": 0.0,
    "iron_mg": 1.31,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 320.0,
    "protein_g": 1.16,
    "salt_g": 0.005,
    "sat_fat_g": 0.026,
    "sodium_mg": 2.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169935",
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
