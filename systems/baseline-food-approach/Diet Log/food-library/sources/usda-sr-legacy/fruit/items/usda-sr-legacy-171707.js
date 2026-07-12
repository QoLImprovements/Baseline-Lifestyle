/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-skin-and-seeds",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 304.0,
      "key": "fruit-without-skin-and-seeds",
      "kind": "unit",
      "label": "fruit without skin and seeds"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA Serving"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-pureed",
      "kind": "unit",
      "label": "cup, pureed"
    }
  ],
  "name": "Avocados, raw, Florida",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 7.82,
    "energy_kcal": 501.0,
    "fat_g": 10.1,
    "fibre_g": 5.6,
    "folate_ug": 35.0,
    "iron_mg": 0.17,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 351.0,
    "protein_g": 2.23,
    "salt_g": 0.005,
    "sat_fat_g": 1.96,
    "sodium_mg": 2.0,
    "sugar_g": 2.42,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 17.4,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171707",
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
