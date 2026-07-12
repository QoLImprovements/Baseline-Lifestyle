/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-5-cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Abiyuch, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 17.6,
    "energy_kcal": 290.0,
    "fat_g": 0.1,
    "fibre_g": 5.3,
    "folate_ug": 0.0,
    "iron_mg": 1.61,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 304.0,
    "protein_g": 1.5,
    "salt_g": 0.05,
    "sat_fat_g": 0.014,
    "sodium_mg": 20.0,
    "sugar_g": 8.55,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 54.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167782",
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
